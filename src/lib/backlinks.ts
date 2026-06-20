/**
 * backlinks.ts — inverse-link index: for each note, the notes that link TO it (+ context line).
 * Emitted to /backlinks.json by src/pages/backlinks.json.ts; consumed by the note page's Backlinks panel.
 */
import type { Backlink, BacklinkIndex } from './types';
import { buildSlugResolver, parseWikilink } from './wikilinks';

const WIKILINK = /\[\[([^\]\n]+)\]\]/g;

export interface NoteInput {
  slug: string;
  title: string;
  body: string;
}

export function buildBacklinks(notes: NoteInput[]): BacklinkIndex {
  const resolver = buildSlugResolver();
  const known = new Set(notes.map((n) => n.slug));
  const index: BacklinkIndex = {};

  for (const n of notes) {
    const lines = n.body.split('\n');
    const addedHere = new Set<string>(); // dedupe per (source → target)
    for (const line of lines) {
      for (const m of line.matchAll(WIKILINK)) {
        const { path } = parseWikilink(m[1]);
        if (!path) continue;
        const target = resolver.resolve(path);
        if (!target || target === n.slug || !known.has(target)) continue;
        const dedupeKey = `${target} ${n.slug}`;
        if (addedHere.has(dedupeKey)) continue;
        addedHere.add(dedupeKey);
        const context = line
          .trim()
          .replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2')
          .replace(/[*_`>]/g, '')
          .slice(0, 280)
          .trim();
        const entry: Backlink = { slug: n.slug, title: n.title, context };
        (index[target] ??= []).push(entry);
      }
    }
  }
  return index;
}
