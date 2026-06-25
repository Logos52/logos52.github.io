#!/usr/bin/env node
/**
 * ensure-pagefind.mjs — guarantee dist/pagefind exists before astro dev.
 * Pagefind is written on `astro build`; dev serves it from dist/ via astro-pagefind middleware.
 */
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGEFIND = join(ROOT, 'dist', 'pagefind', 'pagefind.js');

if (existsSync(PAGEFIND)) {
  console.log('ensure-pagefind: dist/pagefind present');
  process.exit(0);
}

console.log('ensure-pagefind: missing — running astro build to generate search index…');
execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });