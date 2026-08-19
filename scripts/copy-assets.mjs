#!/usr/bin/env node
/** Copy static assets (project screenshots, profile photo) into public/ for Astro. */
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function copyDir(srcRel, destRel) {
  const src = join(ROOT, srcRel);
  const dest = join(ROOT, 'public', destRel);
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(src)) {
    if (!/\.(png|jpg|jpeg|webp|svg)$/i.test(name)) continue;
    copyFileSync(join(src, name), join(dest, name));
  }
}

// Every image in assets/ ships — the About portrait, the Personal door photo, and whatever
// joins them — rather than a hand-maintained filename list that silently drops new ones.
copyDir('assets', 'assets');
copyDir('projects', 'projects');