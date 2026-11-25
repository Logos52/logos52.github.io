import { deriveTitle } from './note';
import { byHubThen } from './folder-order';
import { simplifySlug, slugToUrl } from './slug';

type NoteLike = { id: string; data: { title?: unknown; type?: unknown }; body?: string };
type ContentPage = { title: string; url: string; type?: string };
type SectionGroup = { label: string; count: number; pages: ContentPage[] };
type TypeGroup = { label: string; count: number; sections: SectionGroup[] };

function folderLabel(segment: string): string {
  return segment.replace(/--and--/g, ' & ').replace(/-+/g, ' ');
}

function sectionOf(id: string): { key: string; label: string } {
  const parts = id.split('/').filter(Boolean);
  parts.pop();
  if (parts.length === 0) return { key: '', label: 'Top level' };
  return { key: parts.join('/'), label: parts.map(folderLabel).join(' / ') };
}

function byCountThenName<T extends { count: number; label: string }>(a: T, b: T): number {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

export function buildContentMap(notes: NoteLike[]): {
  contentMap: TypeGroup[];
  contentMapCount: number;
  otherCount: number;
  contentMapDek: string;
} {
  const OTHER = 'Other';
  const contentPages = notes.filter((n) => simplifySlug(n.id) !== '/' && n.id !== 'notes/index');
  const buckets = new Map<string, Map<string, { label: string; pages: ContentPage[] }>>();

  for (const n of contentPages) {
    const raw = typeof n.data.type === 'string' ? n.data.type.trim() : '';
    const typeLabel = raw || OTHER;
    const section = sectionOf(n.id);
    let sectionMap = buckets.get(typeLabel);
    if (!sectionMap) {
      sectionMap = new Map();
      buckets.set(typeLabel, sectionMap);
    }
    let group = sectionMap.get(section.key);
    if (!group) {
      group = { label: section.label, pages: [] };
      sectionMap.set(section.key, group);
    }
    group.pages.push({
      title: deriveTitle(n.data, n.id, n.body),
      url: slugToUrl(n.id),
      type: raw,
    });
  }

  const typeGroups: TypeGroup[] = [];
  for (const [label, sectionMap] of buckets) {
    const sectionGroups: SectionGroup[] = [];
    for (const group of sectionMap.values()) {
      group.pages.sort(
        byHubThen(
          (a, b) => a.title.localeCompare(b.title, 'en') || a.url.localeCompare(b.url),
          (page) => page.type,
        ),
      );
      sectionGroups.push({ label: group.label, count: group.pages.length, pages: group.pages });
    }
    sectionGroups.sort(byCountThenName);
    const count = sectionGroups.reduce((sum, group) => sum + group.count, 0);
    typeGroups.push({ label, count, sections: sectionGroups });
  }

  const otherGroups = typeGroups.filter((group) => group.label === OTHER);
  const contentMap = [
    ...typeGroups.filter((group) => group.label !== OTHER).sort(byCountThenName),
    ...otherGroups,
  ];
  const contentMapCount = contentMap.reduce((sum, group) => sum + group.count, 0);
  const otherCount = otherGroups.reduce((sum, group) => sum + group.count, 0);
  if (contentMapCount !== contentPages.length) {
    throw new Error(`Content map lists ${contentMapCount} pages; the site builds ${contentPages.length} note pages.`);
  }
  const contentMapDek =
    otherCount > 0
      ? `${contentMapCount} pages. ${otherCount} with no type.`
      : `${contentMapCount} pages.`;
  return { contentMap, contentMapCount, otherCount, contentMapDek };
}
