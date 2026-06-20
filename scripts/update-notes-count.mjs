#!/usr/bin/env node
/**
 * update-notes-count.mjs — keeps the live note count in notes/index.md current.
 *
 * Counts the public note universe — the same set copy-public-notes.mjs publishes: git-tracked or
 * untracked-but-unignored `.md`, minus the `src/lib/ignore-patterns.mjs` denylist, minus `draft: true`
 * — and rewrites the "There are N notes" stat line in notes/index.md. Wired into `prebuild`, so the
 * number is recomputed on every build and never goes stale.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isIgnored } from '../src/lib/ignore-patterns.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = join(ROOT, 'notes', 'index.md');

const isDraft = (text) => {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return fm ? /(^|\n)draft:\s*(true|"true"|'true')\s*(\n|$)/i.test(fm[1]) : false;
};

const files = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', '*.md'], {
  cwd: ROOT,
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
})
  .split('\0')
  .filter(Boolean)
  .filter((rel) => !isIgnored(rel));

let count = 0;
for (const rel of files) {
  if (!isDraft(readFileSync(join(ROOT, rel), 'utf8'))) count++;
}

const src = readFileSync(INDEX, 'utf8');
const next = src.replace(/There are [\d,]+ notes/, `There are ${count.toLocaleString('en-US')} notes`);
if (next !== src) {
  writeFileSync(INDEX, next);
  console.log(`update-notes-count: notes/index.md → ${count} notes`);
} else {
  console.log(`update-notes-count: ${count} notes (already current)`);
}
