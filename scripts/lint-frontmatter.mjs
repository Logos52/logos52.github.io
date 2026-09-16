#!/usr/bin/env node
/**
 * lint-frontmatter.mjs — fail closed on invalid YAML frontmatter.
 *
 * The 2026-08-11 outage: gray-matter threw YAMLException with name: null, so
 * five consecutive deploys died without naming the file. This script names
 * every bad file, then exits 1.
 *
 *   node scripts/lint-frontmatter.mjs           # all git-visible .md
 *   node scripts/lint-frontmatter.mjs --staged  # staged .md only (pre-commit)
 */
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';

const staged = process.argv.includes('--staged');

function gitLines(args) {
  const out = execFileSync('git', ['-c', 'core.quotepath=false', ...args], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  return out.split('\0').filter(Boolean);
}

const files = staged
  ? gitLines(['diff', '--cached', '--name-only', '-z', '--diff-filter=ACMR', '--', '*.md'])
  : gitLines(['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', '*.md']);

const errors = [];
let scanned = 0;
for (const rel of files) {
  let raw;
  try {
    raw = readFileSync(rel, 'utf8');
  } catch {
    continue;
  }
  scanned++;
  if (!raw.startsWith('---')) continue;
  try {
    matter(raw);
  } catch (err) {
    const msg = err && err.message ? err.message.split('\n')[0] : String(err);
    errors.push(`${rel}: ${msg}`);
  }
}

if (errors.length) {
  console.error(`lint-frontmatter: ${errors.length} file(s) with invalid YAML frontmatter:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`lint-frontmatter: ${scanned} markdown file(s) ok`);
