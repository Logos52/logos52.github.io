/**
 * journal.ts — discover dated public journal entries for index + calendar surfaces.
 */
import type { CollectionEntry } from 'astro:content';
import { deriveTitle, deriveSummary } from './note';
import { slugToUrl } from './slug';

const DATED = /^journal\/(\d{4}-\d{2}-\d{2})-/;

export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  href: string;
};

export function isDatedJournalEntry(id: string): boolean {
  return DATED.test(id) && id !== 'journal/index' && id !== 'journal/calendar';
}

export function journalEntriesFromNotes(
  notes: CollectionEntry<'notes'>[],
  limit?: number,
): JournalEntry[] {
  const rows = notes
    .filter((n) => isDatedJournalEntry(n.id))
    .map((n) => {
      const m = n.id.match(DATED)!;
      const date = m[1];
      return {
        slug: n.id,
        date,
        title: deriveTitle(n.data, n.id, n.body),
        summary: deriveSummary(n.data, n.body ?? ''),
        href: slugToUrl(n.id),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

  return limit ? rows.slice(0, limit) : rows;
}