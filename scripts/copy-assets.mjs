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

mkdirSync(join(ROOT, 'public', 'assets'), { recursive: true });
if (existsSync(join(ROOT, 'assets', 'profile.jpg'))) {
  copyFileSync(join(ROOT, 'assets', 'profile.jpg'), join(ROOT, 'public', 'assets', 'profile.jpg'));
}
copyDir('projects', 'projects');