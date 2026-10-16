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

/**
 * Reader-facing label for the note pill. Filing strings such as `journal-entry`
 * and `system-model` map to a short word. Unknown strings return undefined so the
 * pill is omitted.
 */
const TYPE_LABELS: Record<string, string> = {
  concept: 'Concept',
  technique: 'Method',
  hub: 'Hub',
  moc: 'Hub',
  synthesis: 'Essay',
  'blog-post': 'Essay',
  condensed: 'Condensed',
  workflow: 'Workflow',
  system: 'System',
  model: 'Model',
  'system-model': 'Model',
  dimension: 'Dimension',
  book: 'Book',
  reference: 'Reference',
  'reference-catalog': 'Reference',
  'resource-catalog': 'Reference',
  journal: 'Journal',
  'journal-entry': 'Journal',
  'journal-note': 'Journal',
  'journal-draft': 'Journal',
  'journal-index': 'Journal',
  'journal-calendar': 'Journal',
  'journal-template': 'Journal',
  personal: 'Personal',
  'personal-index': 'Personal',
  project: 'Project',
  'project-doc': 'Project',
  'projects-index': 'Project',
  experience: 'Experience',
  decision: 'Decision',
  research: 'Research',
  bank: 'Research',
  catalog: 'Catalog',
  tool: 'Tool',
  operational: 'Guide',
  about: 'About',
  index: 'Index',
};

export function readerTypeLabel(type: unknown): string | undefined {
  if (typeof type !== 'string') return undefined;
  const key = type.trim().toLowerCase();
  if (!key) return undefined;
  return TYPE_LABELS[key];
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
