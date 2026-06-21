#!/usr/bin/env node
/**
 * sync-tsumugu-status.mjs — pull the Tsumugu dictionary status page into the served tree.
 *
 * The canonical file is authored in the SIBLING repo: tsumugu-ed/project-status.html. This copies it
 * to public/projects/tsumugu-ed-status.html, which Astro serves verbatim at
 * /projects/tsumugu-ed-status.html (the dashboard link from projects/tsumugu-ed.md).
 *
 * Why a committed copy and not a symlink or a build-time pull from ../tsumugu-ed:
 *   The GitHub Pages build (CI) checks out ONLY this repo — the sibling tsumugu-ed is not present.
 *   So the served HTML must be committed here. This script refreshes that committed copy from the
 *   source whenever it runs locally (wired into `prebuild`/`predev`, and `npm run sync:tsumugu`).
 *   In CI the source is absent, so it no-ops and the last-committed copy ships.
 *
 * Source location override: set TSUMUGU_ED_DIR (default ../tsumugu-ed, resolved from repo root).
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = process.env.TSUMUGU_ED_DIR
  ? (process.env.TSUMUGU_ED_DIR.startsWith('/')
      ? process.env.TSUMUGU_ED_DIR
      : join(ROOT, process.env.TSUMUGU_ED_DIR))
  : join(ROOT, '..', 'tsumugu-ed');
const SRC = join(SRC_DIR, 'project-status.html');
const DEST = join(ROOT, 'public', 'projects', 'tsumugu-ed-status.html');

if (!existsSync(SRC)) {
  // Expected in CI (sibling repo absent) — keep the committed copy and move on.
  console.log(`sync-tsumugu-status: source not found at ${SRC} — keeping committed copy (CI/no-op).`);
  process.exit(0);
}

mkdirSync(dirname(DEST), { recursive: true });

// Skip the write (and the noisy log) when nothing changed, so prebuild stays quiet on no-ops.
const next = readFileSync(SRC, 'utf8');
const prev = existsSync(DEST) ? readFileSync(DEST, 'utf8') : null;
if (prev === next) {
  console.log('sync-tsumugu-status: public/projects/tsumugu-ed-status.html already current.');
  process.exit(0);
}

copyFileSync(SRC, DEST);
console.log('sync-tsumugu-status: refreshed public/projects/tsumugu-ed-status.html from tsumugu-ed/project-status.html.');
