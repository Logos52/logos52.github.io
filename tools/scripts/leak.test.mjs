/**
 * leak.test.mjs — build-breaking privacy assertion (node:test).
 *
 * Runs AFTER a build, against `dist/`. Enumerates every denied/private directory from the 1:1
 * denylist and asserts none of them was published, then re-checks for hard content-leak signals.
 * CI: .github/workflows/deploy.yml runs this after `npm run build` and `npm run guard`.
 *
 * Local use:  npm run build && npm test
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

/** Astro redirect stubs for denylisted URLs are not published content. */
function isRedirectHtml(abs) {
  return /<title>Redirecting to:/i.test(readFileSync(abs, 'utf8'));
}

test('dist/ exists — build before running the leak test', () => {
  assert.ok(existsSync(DIST), 'dist/ not found — run `npm run build` first');
});

test('no denied/private directory is published to dist', () => {
  const files = distHtml();
  for (const slug of DENIED_DIR_SLUGS) {
    // Denied dirs are TOP-LEVEL (rooted) in the denylist, so match only as a leading path segment —
    // NOT a nested same-named folder (e.g. the public "public-snapshots/decisions/" is legitimately
    // public; only the root "decisions/" is denied).
    const hit = files.find((abs) => {
      const f = relative(DIST, abs).split('\\').join('/');
      if (!(f === `${slug}/index.html` || f.startsWith(`${slug}/`))) return false;
      return !isRedirectHtml(abs);
    });
    assert.ok(!hit, `denied directory "${slug}/" leaked into dist: ${hit ? relative(DIST, hit) : hit}`);
  }
});

test('the specific ignored note is not published', () => {
  const files = distHtml().map((f) => relative(DIST, f).split('\\').join('/'));
  assert.ok(
    !files.some((f) => /wnab-direction-decided/i.test(f)),
    'ignored note journal/2026-05-29-wnab-direction-decided leaked into dist',
  );
});

test('research banks and design extraction catalogs are not published', () => {
  const hit = distHtml().find((abs) => {
    const f = relative(DIST, abs).split('\\').join('/');
    const match =
      f.startsWith('wiki/Research/') ||
      /Design-Two-Track-Extraction|Agent-Track|Human-Track|Master-Scorecard|Design-Expansion/i.test(f);
    if (!match) return false;
    return !isRedirectHtml(abs);
  });
  assert.ok(!hit, `denied research/design catalog leaked into dist: ${hit ? relative(DIST, hit) : hit}`);
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
