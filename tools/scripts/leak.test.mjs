/**
 * leak.test.mjs — build-breaking privacy assertion (node:test).
 *
 * Runs AFTER a build, against `dist/`. Enumerates every denied/private directory from the 1:1
 * denylist and asserts none of them was published, then re-checks for hard content-leak signals.
 * Wired into CI as a required gate (see .github/workflows/deploy.yml). Non-negotiable.
 *
 * Local use:  npm run build && node --test tools/scripts/leak.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { IGNORE_PATTERNS } from '../../src/lib/ignore-patterns.mjs';

const DIST = 'dist';

// Framework / metadata globs that hold no publishable vault content — not what we assert against.
const FRAMEWORK = new Set([
  'quartz/**', 'public/**', 'node_modules/**', '.quartz-cache/**', '.git/**', '.github/**',
  '.githooks/**', '.obsidian/**', '.trash/**', '**/.DS_Store', 'Users/**',
]);

// Quartz-identical per-segment slugify (mirrors src/lib/slug.ts).
const slugSeg = (s) =>
  s.replace(/\s/g, '-').replace(/&/g, '-and-').replace(/%/g, '-percent').replace(/\?/g, '').replace(/#/g, '');
const slugPath = (p) => p.split('/').map(slugSeg).join('/');

// Denied content directories → their would-be published URL prefix. Must never appear in dist.
const DENIED_DIR_SLUGS = IGNORE_PATTERNS.filter((p) => p.endsWith('/**') && !FRAMEWORK.has(p)).map((p) =>
  slugPath(p.slice(0, -3)),
);

function distHtml(dir = DIST, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, e.name);
    if (e.isDirectory()) distHtml(abs, acc);
    else if (e.name.endsWith('.html')) acc.push(abs);
  }
  return acc;
}

test('dist/ exists — build before running the leak test', () => {
  assert.ok(existsSync(DIST), 'dist/ not found — run `npm run build` first');
});

test('no denied/private directory is published to dist', () => {
  const files = distHtml().map((f) => relative(DIST, f).split('\\').join('/'));
  for (const slug of DENIED_DIR_SLUGS) {
    // Denied dirs are TOP-LEVEL (rooted) in the denylist, so match only as a leading path segment —
    // NOT a nested same-named folder (e.g. the public "public-snapshots/decisions/" is legitimately
    // public; only the root "decisions/" is denied).
    const hit = files.find((f) => f === `${slug}/index.html` || f.startsWith(`${slug}/`));
    assert.ok(!hit, `denied directory "${slug}/" leaked into dist: ${hit}`);
  }
});

test('the specific ignored note is not published', () => {
  const files = distHtml().map((f) => relative(DIST, f).split('\\').join('/'));
  assert.ok(
    !files.some((f) => /wnab-direction-decided/i.test(f)),
    'ignored note journal/2026-05-29-wnab-direction-decided leaked into dist',
  );
});

test('no hard content-leak signal in rendered HTML', () => {
  const HARD = [
    /nxlogos@gmail\.com/i,
    /Documents\/Finances/i,
    /zenith-raincoat/i,
    /BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY/,
  ];
  for (const f of distHtml()) {
    const t = readFileSync(f, 'utf8');
    for (const re of HARD) assert.ok(!re.test(t), `hard content-leak signal ${re} found in ${relative(DIST, f)}`);
  }
});
