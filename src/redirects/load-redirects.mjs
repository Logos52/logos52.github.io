/**
 * Load Astro build-time redirects from kb-astro legacy JSON and per-door JSON files.
 * Door workers add only `src/redirects/doors/<door>.json` as {from,to} pairs.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '../..');

function loadJsonRedirects(path) {
  if (!existsSync(path)) return [];
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function loadLegacyRedirects() {
  return loadJsonRedirects(join(ROOT, 'kb-astro/site-data/redirects.json'));
}

function loadDoorRedirects() {
  const doorsDir = join(HERE, 'doors');
  if (!existsSync(doorsDir)) return [];
  const items = [];
  for (const name of readdirSync(doorsDir).sort()) {
    if (!name.endsWith('.json')) continue;
    items.push(...loadJsonRedirects(join(doorsDir, name)));
  }
  return items;
}

/** @returns {Record<string, string>} Astro redirects map */
export function loadAllRedirects() {
  const map = {};
  for (const { from, to } of [...loadLegacyRedirects(), ...loadDoorRedirects()]) {
    if (typeof from === 'string' && typeof to === 'string' && from && to) {
      map[from] = to;
    }
  }
  return map;
}