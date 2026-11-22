/**
 * Design guard.
 * 1. Denylist: old fonts, colours, class names, and stylesheet paths must not
 *    appear in the site source or the built site.
 * 2. Tokens: outside the :root token block, font-family, font-size, and colour
 *    values in CSS and component styles must use the design tokens.
 * 3. Pages: a page file may not declare font-family, a colour value, or a
 *    restyle of a shared component. Layout-only overrides are the only kind allowed.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = join(import.meta.dirname, '../..');
const DENYLIST = join(ROOT, 'tools/design/denylist.txt');
const SOURCE_DIRS = ['src/styles', 'src/layouts', 'src/components', 'src/pages', 'src/islands'];
const STYLE_EXT = new Set(['.css', '.astro']);
const DIST_EXT = new Set(['.html', '.css', '.js']);
const SHARED = ['.mast', '.menu', '.colophon', '.board', '.word', '.prose', '.find', '.reading', '.chip', '.lede'];

const failures = [];

function fail(where, message) {
  failures.push(`${where}: ${message}`);
}

async function walk(dir, exts, out) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'content') continue;
      await walk(path, exts, out);
    } else if (exts.has(path.slice(path.lastIndexOf('.')))) {
      out.push(path);
    }
  }
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

function stripRoot(css) {
  let out = '';
  let i = 0;
  while (i < css.length) {
    const at = css.indexOf(':root', i);
    if (at === -1) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, at);
    const open = css.indexOf('{', at);
    if (open === -1) break;
    let depth = 0;
    let j = open;
    for (; j < css.length; j++) {
      if (css[j] === '{') depth++;
      else if (css[j] === '}') {
        depth--;
        if (depth === 0) {
          j++;
          break;
        }
      }
    }
    i = j;
  }
  return out;
}

function styleBlocks(text, ext) {
  if (ext === '.css') return [text];
  const blocks = [];
  const re = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(text))) blocks.push(m[1]);
  return blocks;
}

function checkTokens(rel, css) {
  const body = stripRoot(stripComments(css));
  const lines = body.split('\n');
  lines.forEach((line, index) => {
    const decl = line.match(/^\s*([a-z-]+)\s*:\s*([^;]+)/i);
    if (!decl) return;
    const prop = decl[1].toLowerCase();
    const value = decl[2].trim();
    if (prop === 'font-family' && !/^(?:var\(--font-(?:serif|sans|mono)\)|inherit)$/i.test(value)) {
      fail(rel, `font-family outside the type tokens (${value}) near line ${index + 1}`);
    }
    if (prop === 'font-size' && !/^(?:var\(--type-[a-z0-9-]+\)|inherit|0)$/i.test(value)) {
      fail(rel, `font-size outside the type tokens (${value})`);
    }
    if (
      /^(?:color|background|background-color|border-color|outline-color|text-decoration-color|fill|stroke|caret-color)$/.test(
        prop,
      ) &&
      /#[0-9a-f]{3,8}\b|rgb\(|hsl\(|oklch\(|hsla\(/i.test(value)
    ) {
      fail(rel, `colour value outside the tokens (${prop}: ${value})`);
    }
  });
  if (/#[0-9a-f]{3,8}\b|rgb\(|hsl\(/i.test(body)) {
    const hit = body.match(/#[0-9a-f]{3,8}\b|rgb\([^)]*\)|hsl\([^)]*\)/i);
    if (hit) fail(rel, `raw colour outside :root (${hit[0]})`);
  }
}

function checkPage(rel, text) {
  if (/font-family\s*:/i.test(text)) {
    fail(rel, 'page file declares its own font-family');
  }
  if (/#[0-9a-fA-F]{3,8}\b/.test(text) || /rgb\s*\(|hsl\s*\(/i.test(text)) {
    fail(rel, 'page file declares a colour value');
  }
  const styles = styleBlocks(text, '.astro').join('\n');
  if (!styles.trim()) return;
  for (const name of SHARED) {
    if (styles.includes(name)) fail(rel, `page file restyles shared component ${name}`);
  }
  const banned = /(?:^|[;{\s])(?:font-family|font-size|color|background|background-color|border-color)\s*:/i;
  if (banned.test(styles)) fail(rel, 'page-level style sets type or colour outside the shared stylesheet');
}

const markers = (await readFile(DENYLIST, 'utf8'))
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('//'))
  .map((line) => {
    const [text, scope] = line.split('\t');
    return { text, scope: scope || 'all' };
  });

const sourceFiles = [];
for (const dir of SOURCE_DIRS) await walk(join(ROOT, dir), STYLE_EXT, sourceFiles);
const distFiles = [];
const distDir = join(ROOT, 'dist');
if (await stat(distDir).then((s) => s.isDirectory()).catch(() => false)) {
  await walk(distDir, DIST_EXT, distFiles);
} else {
  fail('dist/', 'built site is missing; run the guard after astro build');
}

const scanned = [...sourceFiles, ...distFiles];
for (const file of scanned) {
  const rel = relative(ROOT, file);
  const text = await readFile(file, 'utf8');
  for (const marker of markers) {
    if (marker.scope === 'source-css' && rel.startsWith('dist/') && !rel.endsWith('.css')) continue;
    if (text.includes(marker.text)) fail(rel, `old design marker “${marker.text}”`);
  }
  const ext = file.slice(file.lastIndexOf('.'));
  if (!rel.startsWith('dist/') && (ext === '.css' || ext === '.astro')) {
    for (const block of styleBlocks(text, ext)) checkTokens(rel, block);
  }
  if (rel.startsWith('src/pages/') && ext === '.astro') checkPage(rel, text);
}

if (failures.length) {
  console.error(`design-guard: ${failures.length} problem(s)`);
  for (const line of failures) console.error(`  ${line}`);
  process.exit(1);
}
console.log(`design-guard: clean (${scanned.length} files, ${markers.length} denylist markers)`);
