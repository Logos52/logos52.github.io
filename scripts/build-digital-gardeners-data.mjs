import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const storeHtml = process.env.GARDENERS_HTML ?? join(root, 'scripts/.gardeners-index.html');
const storeJson = process.env.GARDENERS_FEATURES ?? join(root, 'scripts/.gardeners-features.json');

const html = readFileSync(storeHtml, 'utf8');
const match = html.match(/<script id="data" type="application\/json">([\s\S]*?)<\/script>/);
if (!match) throw new Error('embedded gardeners JSON not found');
const people = JSON.parse(match[1]);

const features = JSON.parse(readFileSync(storeJson, 'utf8'));
const noteByKey = new Map();
for (const e of features.entries) {
  const key = `${e.id}\0${e.url}`;
  noteByKey.set(key, e.new);
}

const out = people.map((p) => {
  const primary = p.obs?.[0];
  const thumb = `/media/gardeners/${p.id}-thumb.webp`;
  const full = `/media/gardeners/${p.id}-full.webp`;
  const observations = (p.obs ?? []).map((o) => {
    const key = `${o.id}\0${o.url}`;
    return {
      url: o.url,
      lane: o.lane,
      who: o.who ?? '',
      notableDesignFeatures: noteByKey.get(key) ?? o.steal ?? '',
    };
  });
  return {
    id: p.id,
    name: p.name,
    urls: p.urls ?? [],
    lanes: p.lanes ?? [],
    thumb,
    full,
    observations,
  };
});

writeFileSync(join(root, 'src/data/digital-gardeners.json'), `${JSON.stringify(out, null, 2)}\n`);
console.log(`wrote ${out.length} gardeners`);