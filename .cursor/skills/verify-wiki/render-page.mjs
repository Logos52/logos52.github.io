#!/usr/bin/env node
/**
 * Exit code is the failing step (4, 5, or 6), or 0.
 *
 *   node render-page.mjs --repo DIR --origin http://127.0.0.1:4321 --out DIR
 */
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, writeFileSync, rmSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readdirSync, statSync } from 'node:fs';

const PHONE = { width: 390, height: 844, mobile: true };
const LAPTOP = { width: 1280, height: 800, mobile: false };
const SETTLE_MS = Number(process.env.VERIFY_SETTLE_MS || 2000);

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1 || !process.argv[i + 1]) return fallback;
  return process.argv[i + 1];
}

const repo = path.resolve(arg('--repo', process.cwd()));
const origin = arg('--origin', 'http://127.0.0.1:4321').replace(/\/$/, '');
const outDir = path.resolve(arg('--out', '/tmp/verify-wiki/evidence'));

let step = 4;
const timer = setTimeout(() => {
  console.error(`verify-wiki: step ${step} timed out`);
  finish(step);
}, 120000);

let chrome;
let server;
let userData;

function finish(code) {
  clearTimeout(timer);
  if (chrome && !chrome.killed) {
    try { chrome.kill('SIGKILL'); } catch {}
  }
  if (server) {
    try { server.close(); } catch {}
  }
  if (userData) {
    try { rmSync(userData, { recursive: true, force: true }); } catch {}
  }
  process.exit(code);
}

process.on('uncaughtException', (err) => {
  console.error(`verify-wiki: step ${step} crashed: ${err && err.stack ? err.stack : err}`);
  finish(step);
});
process.on('unhandledRejection', (err) => {
  console.error(`verify-wiki: step ${step} crashed: ${err && err.stack ? err.stack : err}`);
  finish(step);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sluggify(s) {
  return s
    .split('/')
    .map((seg) =>
      seg
        .replace(/\s/g, '-')
        .replace(/&/g, '-and-')
        .replace(/%/g, '-percent')
        .replace(/\?/g, '')
        .replace(/#/g, ''),
    )
    .join('/')
    .replace(/\/$/, '');
}

function slugifyFilePath(fp) {
  let s = fp.replace(/^\/+/, '').replace(/\/+$/, '');
  s = s.replace(/\.(md|html)$/i, '');
  s = sluggify(s);
  if (s.endsWith('_index')) s = s.replace(/_index$/, 'index');
  return s;
}

function simplifySlug(slug) {
  let s = slug.replace(/\/?index$/, '');
  s = s.replace(/^\/+|\/+$/g, '');
  return s.length === 0 ? '/' : s;
}

function slugToUrl(slug) {
  const simple = simplifySlug(slug);
  return simple === '/' ? '/' : `/${simple}/`;
}

function walkMd(dir, acc) {
  let names;
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    if (name === 'private' || name.startsWith('.')) continue;
    const full = path.join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isSymbolicLink()) continue;
    if (st.isDirectory()) walkMd(full, acc);
    else if (name.endsWith('.md')) acc.push(full);
  }
}

async function choosePage() {
  const override = process.env.VERIFY_PAGE;
  let denied = () => false;
  try {
    const mod = await import(pathToFileURL(path.join(repo, 'src/lib/ignore-patterns.mjs')).href);
    const patterns = mod.IGNORE_PATTERNS || [];
    denied = (rel) => mod.matchesAny(rel, patterns);
  } catch {
    denied = (rel) => rel === 'wiki/Research' || rel.startsWith('wiki/Research/');
  }

  if (override) {
    const rel = override.replace(/\\/g, '/').replace(/^\.\//, '');
    if (rel === 'raw/private' || rel.startsWith('raw/private/')) {
      throw new Error('refusing to open raw/private');
    }
    if (denied(rel)) throw new Error(`VERIFY_PAGE is not published: ${rel}`);
    return rel;
  }

  const acc = [];
  walkMd(path.join(repo, 'wiki'), acc);
  const rels = acc
    .map((full) => path.relative(repo, full).split(path.sep).join('/'))
    .filter((rel) => !denied(rel))
    .sort();
  if (!rels.length) throw new Error('no published wiki page to render');
  return rels[0];
}

function chromeBin() {
  const fromEnv = process.env.CHROME_PATH;
  const candidates = [fromEnv, 'google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'].filter(Boolean);
  for (const bin of candidates) {
    const found = spawnSync('bash', ['-lc', `command -v ${JSON.stringify(bin)}`], { encoding: 'utf8' });
    if (found.status === 0 && found.stdout.trim()) return found.stdout.trim();
  }
  return null;
}

function pngSize(buf) {
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.next = 1;
    this.pending = new Map();
    this.listeners = [];
    ws.addEventListener('message', (ev) => {
      const raw = typeof ev.data === 'string' ? ev.data : Buffer.from(ev.data).toString('utf8');
      let msg;
      try {
        msg = JSON.parse(raw);
      } catch {
        return;
      }
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(`${msg.error.message || 'cdp error'}: ${JSON.stringify(msg.error)}`));
        else resolve(msg.result || {});
        return;
      }
      for (const fn of this.listeners) {
        Promise.resolve(fn(msg)).catch((err) => {
          console.error(`verify-wiki: cdp listener: ${err && err.message ? err.message : err}`);
        });
      }
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.next++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify(payload));
    });
  }

  on(fn) {
    this.listeners.push(fn);
  }
}

function remoteText(value) {
  if (!value) return '';
  if (value.value != null && typeof value.value !== 'object') return String(value.value);
  if (value.unserializableValue) return String(value.unserializableValue);
  if (value.description) return String(value.description);
  return '';
}

function startHarness() {
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>verify-wiki 390</title>
<style>
  html, body { margin: 0; padding: 0; background: #fff; }
  iframe { width: 390px; height: 844px; border: 0; display: block; }
</style>
</head>
<body>
<iframe id="page" title="wiki page" src="PAGE"></iframe>
</body>
</html>`;
  return new Promise((resolve, reject) => {
    const srv = createServer((req, res) => {
      const body = html.replace('PAGE', req.url && req.url.startsWith('/frame') ? originPage : 'about:blank');
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(body);
    });
    let originPage = '/';
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      resolve({
        server: srv,
        port: addr.port,
        setPage(urlPath) {
          originPage = urlPath;
        },
      });
    });
    srv.on('error', reject);
  });
}

async function waitForJson(port) {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return await res.json();
    } catch {}
    await sleep(200);
  }
  throw new Error('Chrome DevTools did not open');
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const rel = await choosePage();
  const urlPath = slugToUrl(slugifyFilePath(rel));
  const pageUrl = origin + urlPath;
  console.log(`verify-wiki: rendering ${rel}`);
  console.log(`verify-wiki: ${pageUrl}`);

  let status = 0;
  try {
    const res = await fetch(pageUrl, { redirect: 'follow' });
    status = res.status;
  } catch (err) {
    console.error(`verify-wiki: step 4 FAIL`);
    console.error(`could not fetch ${pageUrl}: ${err && err.message ? err.message : err}`);
    finish(4);
  }
  if (status !== 200) {
    console.error(`verify-wiki: step 4 FAIL`);
    console.error(`GET ${pageUrl} returned ${status}`);
    finish(4);
  }

  const bin = chromeBin();
  if (!bin) {
    console.error('verify-wiki: step 4 FAIL');
    console.error('Chrome is not installed; the iframe was not rendered');
    finish(4);
  }

  const harness = await startHarness();
  server = harness.server;
  harness.setPage(pageUrl);
  const harnessUrl = `http://127.0.0.1:${harness.port}/frame`;

  const debugPort = 9333;
  userData = mkdtempSync(path.join(tmpdir(), 'verify-wiki-chrome-'));
  chrome = spawn(bin, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userData}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--force-device-scale-factor=1',
    '--hide-scrollbars',
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  let chromeLog = '';
  chrome.stderr.on('data', (buf) => {
    chromeLog += buf.toString();
    if (chromeLog.length > 8000) chromeLog = chromeLog.slice(-8000);
  });

  const version = await waitForJson(debugPort).catch((err) => {
    console.error('verify-wiki: step 4 FAIL');
    console.error(err && err.message ? err.message : err);
    if (chromeLog) console.error(chromeLog.trim());
    finish(4);
  });

  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', () => reject(new Error('devtools websocket failed')), { once: true });
  });
  const cdp = new Cdp(ws);

  const meta = new Map();
  const frames = new Map();
  const stoppedFrames = new Set();
  const contextFrame = new Map();
  const errors = [];
  const warnings = [];
  const loaded = new Set();
  let laptopSession = null;

  function pushIssue(list, item) {
    const key = `${item.where}|${item.kind}|${item.text}|${item.url}|${item.line}`;
    if (list.some((row) => row.key === key)) return;
    list.push({ ...item, key });
  }

  function samePage(url) {
    if (!url) return false;
    const bare = pageUrl.replace(/\/$/, '');
    return url === pageUrl || url === bare || url.startsWith(pageUrl) || url.startsWith(`${bare}?`) || url.startsWith(`${bare}/`);
  }

  async function enable(sessionId) {
    await cdp.send('Page.enable', {}, sessionId);
    await cdp.send('Runtime.enable', {}, sessionId);
    await cdp.send('Log.enable', {}, sessionId);
  }

  cdp.on(async (msg) => {
    if (msg.method === 'Target.attachedToTarget') {
      const { sessionId, targetInfo, waitingForDebugger } = msg.params;
      const url = targetInfo.url || '';
      meta.set(sessionId, { url, type: targetInfo.type || '' });
      try {
        await enable(sessionId);
      } finally {
        if (waitingForDebugger) await cdp.send('Runtime.runIfWaitingForDebugger', {}, sessionId);
      }
      return;
    }
    if (msg.method === 'Page.frameNavigated' && msg.params.frame) {
      const frame = msg.params.frame;
      frames.set(frame.id, frame.url || '');
      if (!frame.parentId) {
        const row = meta.get(msg.sessionId);
        if (row) row.url = frame.url || row.url;
      }
    }
    if (msg.method === 'Page.frameStoppedLoading' && msg.params.frameId) {
      stoppedFrames.add(msg.params.frameId);
    }
    if (msg.method === 'Runtime.executionContextCreated') {
      const context = msg.params.context;
      if (context && context.auxData && context.auxData.frameId) {
        contextFrame.set(context.id, context.auxData.frameId);
      }
    }
    if (msg.method === 'Page.loadEventFired' && msg.sessionId) loaded.add(msg.sessionId);
    const ctxId = msg.params && (msg.params.executionContextId
      || (msg.params.exceptionDetails && msg.params.exceptionDetails.executionContextId));
    const frameUrl = frames.get(contextFrame.get(ctxId)) || '';
    const detailUrl = (msg.params && msg.params.exceptionDetails && msg.params.exceptionDetails.url) || '';
    const entryUrl = (msg.params && msg.params.entry && msg.params.entry.url) || '';
    const onWikiFrame = samePage(frameUrl) || samePage(detailUrl);
    const onLaptop = Boolean(laptopSession) && msg.sessionId === laptopSession;
    const onPhone = Boolean(phoneSession) && msg.sessionId === phoneSession;
    const resourceOnWiki = entryUrl.startsWith(origin);
    if (!onLaptop && !onWikiFrame && !(onPhone && resourceOnWiki)) return;
    const where = frameUrl || detailUrl || (meta.get(msg.sessionId) || {}).url || '';
    if (msg.method === 'Runtime.consoleAPICalled') {
      const type = msg.params.type;
      const text = (msg.params.args || []).map(remoteText).filter(Boolean).join(' ');
      const item = { where, kind: `console.${type}`, text, url: '', line: '' };
      if (type === 'error') pushIssue(errors, item);
      else if (type === 'warning') pushIssue(warnings, item);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails || {};
      const text = remoteText(d.exception) || d.text || 'exception';
      pushIssue(errors, {
        where,
        kind: 'exception',
        text,
        url: d.url || '',
        line: d.lineNumber != null ? String(d.lineNumber + 1) : '',
      });
    } else if (msg.method === 'Log.entryAdded') {
      const entry = msg.params.entry || {};
      const item = {
        where,
        kind: `log.${entry.level}`,
        text: entry.text || '',
        url: entry.url || '',
        line: entry.lineNumber != null ? String(entry.lineNumber) : '',
      };
      if (entry.level === 'error') pushIssue(errors, item);
      else if (entry.level === 'warning') pushIssue(warnings, item);
    }
  });

  async function openPage(url, metrics) {
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    meta.set(sessionId, { url: 'about:blank', type: 'page' });
    await enable(sessionId);
    await cdp.send('Target.setAutoAttach', {
      autoAttach: true,
      waitForDebuggerOnStart: true,
      flatten: true,
    }, sessionId);
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: metrics.width,
      height: metrics.height,
      deviceScaleFactor: 1,
      mobile: metrics.mobile,
    }, sessionId);
    loaded.delete(sessionId);
    if (url === harnessUrl) phoneSession = sessionId;
    else if (samePage(url)) laptopSession = sessionId;
    await cdp.send('Page.navigate', { url }, sessionId);
    const deadline = Date.now() + 20000;
    while (!loaded.has(sessionId)) {
      if (Date.now() > deadline) throw new Error(`timed out loading ${url}`);
      await sleep(100);
    }
    return sessionId;
  }

  let phoneSession;
  try {
    phoneSession = await openPage(harnessUrl, PHONE);
  } catch (err) {
    console.error('verify-wiki: step 4 FAIL');
    console.error(err && err.message ? err.message : err);
    finish(4);
  }

  const frameDeadline = Date.now() + 20000;
  let frameUrl = '';
  while (!frameUrl) {
    for (const [id, url] of frames) {
      if (samePage(url) && stoppedFrames.has(id)) frameUrl = url;
    }
    if (frameUrl) break;
    if (Date.now() > frameDeadline) {
      console.error('verify-wiki: step 4 FAIL');
      console.error(`iframe never loaded ${pageUrl}`);
      const seen = [...frames.values()].filter(Boolean);
      if (seen.length) console.error(`frames: ${seen.join(', ')}`);
      finish(4);
    }
    await sleep(100);
  }
  await sleep(SETTLE_MS);

  const measured = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const f = document.querySelector('iframe');
      if (!f) return JSON.stringify({ error: 'no iframe' });
      const r = f.getBoundingClientRect();
      return JSON.stringify({ w: r.width, h: r.height, src: f.src });
    })()`,
    returnByValue: true,
  }, phoneSession);
  let box;
  try {
    box = JSON.parse(measured.result.value);
  } catch {
    box = { error: 'could not read iframe box' };
  }
  if (!box || box.error || Math.round(box.w) !== PHONE.width || Math.round(box.h) !== PHONE.height) {
    console.error('verify-wiki: step 4 FAIL');
    console.error(`iframe box was ${JSON.stringify(box)}, expected ${PHONE.width}×${PHONE.height}`);
    finish(4);
  }
  console.log(`verify-wiki: step 4 PASS (iframe ${box.w}×${box.h})`);
  writeFileSync(path.join(outDir, 'page.txt'), `${rel}\n${pageUrl}\niframe ${box.w}x${box.h}\n`, 'utf8');

  step = 5;
  try {
    laptopSession = await openPage(pageUrl, LAPTOP);
  } catch (err) {
    console.error('verify-wiki: step 5 FAIL');
    console.error(`laptop load failed before the console could be read: ${err && err.message ? err.message : err}`);
    finish(5);
  }
  await sleep(SETTLE_MS);

  const linesFor = (list) => list.map((item) => {
    const at = [item.url, item.line].filter(Boolean).join(':');
    return `${item.kind}${at ? ` (${at})` : ''}: ${item.text} [${item.where}]`;
  });

  if (warnings.length) {
    console.log(`verify-wiki: ${warnings.length} console warning(s), not failing`);
    for (const line of linesFor(warnings).slice(0, 20)) console.log(`  warn: ${line}`);
  }

  if (errors.length) {
    console.error('verify-wiki: step 5 FAIL');
    console.error(`${errors.length} console error(s):`);
    const lines = linesFor(errors);
    for (const line of lines) console.error(`  ${line}`);
    writeFileSync(path.join(outDir, 'console.txt'), lines.join('\n') + '\n', 'utf8');
    console.error('verify-wiki: step 6 not run (stopped after the console errors)');
    finish(5);
  }

  writeFileSync(path.join(outDir, 'console.txt'), 'no console errors\n', 'utf8');
  console.log('verify-wiki: step 5 PASS (no console errors)');

  step = 6;
  try {
    const phoneShot = await cdp.send('Page.captureScreenshot', { format: 'png' }, phoneSession);
    const laptopShot = await cdp.send('Page.captureScreenshot', { format: 'png' }, laptopSession);
    const phoneBuf = Buffer.from(phoneShot.data, 'base64');
    const laptopBuf = Buffer.from(laptopShot.data, 'base64');
    const phonePx = pngSize(phoneBuf);
    const laptopPx = pngSize(laptopBuf);
    if (!phonePx || phonePx.width !== PHONE.width || phonePx.height !== PHONE.height) {
      throw new Error(`phone screenshot is ${phonePx ? `${phonePx.width}×${phonePx.height}` : 'not a png'}, expected ${PHONE.width}×${PHONE.height}`);
    }
    if (!laptopPx || laptopPx.width !== LAPTOP.width || laptopPx.height !== LAPTOP.height) {
      throw new Error(`laptop screenshot is ${laptopPx ? `${laptopPx.width}×${laptopPx.height}` : 'not a png'}, expected ${LAPTOP.width}×${LAPTOP.height}`);
    }
    const phonePath = path.join(outDir, 'phone-390.png');
    const laptopPath = path.join(outDir, 'laptop-1280.png');
    writeFileSync(phonePath, phoneBuf);
    writeFileSync(laptopPath, laptopBuf);
    console.log(`verify-wiki: step 6 PASS`);
    console.log(`phone: ${phonePath}`);
    console.log(`laptop: ${laptopPath}`);
  } catch (err) {
    console.error('verify-wiki: step 6 FAIL');
    console.error(err && err.message ? err.message : err);
    finish(6);
  }

  try { ws.close(); } catch {}
  finish(0);
}

main().catch((err) => {
  console.error(`verify-wiki: step ${step} FAIL`);
  console.error(err && err.stack ? err.stack : err);
  finish(step);
});
