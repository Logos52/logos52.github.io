/**
 * note.ts — shared note helpers (title derivation, summary).
 * `title` is present on only ~half the vault, so we derive it like Quartz did: frontmatter → H1 → slug.
 */
import { basename } from './slug';

export function deriveTitle(data: { title?: unknown }, slug: string, body?: string): string {
  if (typeof data.title === 'string' && data.title.trim()) return data.title.trim();
  if (body) {
    const h1 = body.match(/^\s*#\s+(.+?)\s*$/m);
    if (h1) return h1[1].replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2').trim();
  }
  return basename(slug).replace(/-/g, ' ');
}

/** A one-line summary for cards / search rows: frontmatter blurb/description, else first prose line. */
export function deriveSummary(data: { blurb?: unknown; description?: unknown }, body?: string): string {
  if (typeof data.blurb === 'string' && data.blurb.trim()) return data.blurb.trim();
  if (typeof data.description === 'string' && data.description.trim()) return data.description.trim();
  if (!body) return '';
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || line.startsWith('---') || line.startsWith('>')) continue;
    return line
      .replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2')
      .replace(/[*_`]/g, '')
      .slice(0, 200)
      .trim();
  }
  return '';
}
