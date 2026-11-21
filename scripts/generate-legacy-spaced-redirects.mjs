#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isIgnored } from '../src/lib/ignore-patterns.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/redirects/doors/legacy-spaced.json');

function sluggifyPath(p) {
  return p
    .split('/')
    .map((seg) =>
      seg
        .replace(/\s/g, '-')
        .replace(/&/g, '-and-')
        .replace(/%/g, '-percent')
        .replace(/\?/g, '')
        .replace(/#/g, ''),
    )
    .join('/');
}

function naiveSluggifyPath(p) {
  return p.split('/').map((seg) => seg.replace(/\s+/g, '-').replace(/&/g, 'and')).join('/');
}

function slugSegmentToHuman(seg) {
  return seg
    .replace(/--and--/g, ' & ')
    .replace(/---/g, ' - ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function humanPathFromSlugUrl(url) {
  const trimmed = url.replace(/^\/+|\/+$/g, '');
  if (!trimmed) return '';
  return trimmed.split('/').map(slugSegmentToHuman).join('/');
}

function resolveTarget(url, map) {
  const seen = new Set();
  let cur = url;
  while (map[cur] && !seen.has(cur)) {
    seen.add(cur);
    cur = map[cur];
  }
  return cur;
}

function listGitMd() {
  const out = execFileSync(
    'git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', '*.md'],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  return out.split('\0').filter(Boolean);
}

function isDraft(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return false;
  return /(^|\n)draft:\s*(true|"true"|'true')\s*(\n|$)/i.test(fm[1]);
}

function loadJsonRedirects(dir) {
  const items = [];
  for (const name of readdirSync(dir).sort()) {
    if (!name.endsWith('.json') || name === 'legacy-spaced.json') continue;
    const data = JSON.parse(readFileSync(join(dir, name), 'utf8'));
    if (Array.isArray(data)) items.push(...data);
  }
  return items;
}

const doorsDir = join(ROOT, 'src/redirects/doors');
const legacyPath = join(ROOT, 'kb-astro/site-data/redirects.json');
const existingPairs = [
  ...JSON.parse(readFileSync(legacyPath, 'utf8')),
  ...loadJsonRedirects(doorsDir),
];
const redirectMap = {};
for (const { from, to } of existingPairs) {
  if (from && to) redirectMap[from] = to;
}

const publicNotePaths = new Set();
for (const rel of listGitMd()) {
  if (isIgnored(rel)) continue;
  const text = readFileSync(join(ROOT, rel), 'utf8');
  if (isDraft(text)) continue;
  publicNotePaths.add(rel.replace(/\.md$/i, ''));
}

const humanPaths = new Set(publicNotePaths);
for (const from of Object.keys(redirectMap)) {
  humanPaths.add(humanPathFromSlugUrl(from));
}

const allowedTargets = new Set();
for (const p of publicNotePaths) {
  allowedTargets.add(`/${sluggifyPath(p)}/`);
}
for (const to of Object.values(redirectMap)) {
  allowedTargets.add(resolveTarget(to, redirectMap));
}

const out = [];
const seenFrom = new Set(Object.keys(redirectMap));

function addPair(from, to) {
  if (!from || !to || from === to) return;
  if (seenFrom.has(from)) return;
  if (!allowedTargets.has(to)) return;
  seenFrom.add(from);
  out.push({ from, to });
}

function folderHasPublishedChild(folderHuman, folderQuartz) {
  if (publicNotePaths.has(folderHuman)) return true;
  if (redirectMap[folderQuartz]) return true;
  return [...publicNotePaths].some((p) => p.startsWith(`${folderHuman}/`) || p === folderHuman);
}

function addFolderRedirects(human, add) {
  const parts = human.split('/');
  for (let i = 1; i < parts.length; i++) {
    const folderHuman = parts.slice(0, i).join('/');
    const folderQuartz = `/${sluggifyPath(folderHuman)}/`;
    if (!folderHasPublishedChild(folderHuman, folderQuartz)) continue;
    const folderTarget = `/folder/${sluggifyPath(folderHuman)}/`;
    const folderSpaced = `/folder/${folderHuman}/`;
    const folderNaive = `/folder/${naiveSluggifyPath(folderHuman)}/`;
    for (const from of new Set([folderSpaced, folderNaive])) {
      if (from !== folderTarget) add(from, folderTarget);
    }
  }
}

for (const human of humanPaths) {
  if (!human || human.includes('..')) continue;

  const quartz = `/${sluggifyPath(human)}/`;
  const naive = `/${naiveSluggifyPath(human)}/`;
  const spaced = `/${human}/`;
  const target = redirectMap[quartz] ? resolveTarget(quartz, redirectMap) : quartz;

  if (!allowedTargets.has(target)) continue;

  for (const from of new Set([spaced, naive])) {
    if (from !== quartz) addPair(from, target);
  }
  addFolderRedirects(human, addPair);
}

out.sort((a, b) => a.from.localeCompare(b.from));
writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
process.stdout.write(`legacy-spaced: ${out.length} redirects → ${OUT}\n`);