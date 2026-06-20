#!/usr/bin/env node
/**
 * copy-public-notes.mjs — THE publish boundary.
 *
 * Copies the PUBLIC subset of the vault (repo root) into `src/content/notes/`, which is the only
 * place Astro's `notes` collection reads from. A note that fails the guard is never copied, so it
 * physically cannot appear in the built output — stronger than a render-time filter.
 *
 * Public = a `.md` file that is NOT matched by the 1:1 denylist (src/lib/ignore-patterns.mjs) and
 * does NOT carry `draft: true` frontmatter (parity with Quartz's RemoveDrafts).
 *
 * Run by `npm run copy-notes` (and automatically before `dev` / `build`).
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isIgnored } from '../src/lib/ignore-patterns.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DEST = join(ROOT, 'src', 'content', 'notes');

/**
 * The publishable universe = working-tree `.md` that git does NOT ignore. Using git (not a raw
 * filesystem walk) is what makes this leak-proof: gitignored trees are excluded automatically —
 * `.claude/worktrees/*` (which are FULL vault checkouts!), `node_modules`, build output. Untracked-
 * but-unignored new notes are still included. The rooted denylist + draft filter apply on top.
 */
function listCandidates() {
  const out = execFileSync(
    'git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', '*.md'],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  return out.split('\0').filter(Boolean);
}

/** A minimal frontmatter probe for `draft: true` — does not parse the whole doc. */
function isDraft(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return false;
  return /(^|\n)draft:\s*(true|"true"|'true')\s*(\n|$)/i.test(fm[1]);
}

const all = listCandidates();
const publicNotes = all.filter((rel) => !isIgnored(rel));

// Fresh copy each run so deletions/renames in the vault propagate.
rmSync(DEST, { recursive: true, force: true });
mkdirSync(DEST, { recursive: true });

let copied = 0;
let drafts = 0;
for (const rel of publicNotes) {
  const text = readFileSync(join(ROOT, rel), 'utf8');
  if (isDraft(text)) {
    drafts++;
    continue;
  }
  const out = join(DEST, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, text);
  copied++;
}

console.log(
  `copy-public-notes: ${copied} public notes copied → src/content/notes/ ` +
    `(${all.length} .md scanned, ${all.length - publicNotes.length} denied, ${drafts} drafts skipped).`,
);

// Mirror publishable static images alongside the notes so relative refs resolve (e.g. about.md's
// `assets/profile.jpg`, projects/*.png) and Astro can optimize them. The glob loader only reads .md,
// so these files sit inertly next to their note.
const IMAGE_GLOBS = ['*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg', '*.webp', '*.avif'];
let images = 0;
const imgList = execFileSync(
  'git',
  ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', ...IMAGE_GLOBS],
  { cwd: ROOT, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 },
)
  .split('\0')
  .filter(Boolean);
for (const rel of imgList) {
  if (isIgnored(rel)) continue;
  const out = join(DEST, rel);
  mkdirSync(dirname(out), { recursive: true });
  copyFileSync(join(ROOT, rel), out);
  images++;
}
console.log(`copy-public-notes: ${images} images mirrored into the collection.`);

// Belt-and-suspenders: the two truly-sensitive trees must never reach the collection, no matter what.
const leaked = readdirSyncSafe(DEST).filter((p) => /(^|\/)(private|finances)\//.test(p));
if (leaked.length) {
  console.error(`copy-public-notes: ✗ FATAL — sensitive path copied:\n${leaked.join('\n')}`);
  process.exit(1);
}

function readdirSyncSafe(dir, base = dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, e.name);
    if (e.isDirectory()) readdirSyncSafe(abs, base, acc);
    else acc.push(relative(base, abs).split('\\').join('/'));
  }
  return acc;
}
