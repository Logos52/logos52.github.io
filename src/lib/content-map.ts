import { deriveTitle } from './note';
import { byHubThen } from './folder-order';
import { simplifySlug, slugToUrl } from './slug';

type ContentPage = { title: string; url: string; type?: string };
type SectionGroup = { label: string; count: number; pages: ContentPage[] };
type TypeGroup = { label: string; count: number; sections: SectionGroup[] };
type PageGroup = { label: string; pages: ContentPage[] };
type SectionRef = { key: string; label: string };
type NoteLike = { id: string; data: { title?: unknown; type?: unknown }; body?: string };
type ContentMapResult = {
  contentMap: TypeGroup[];
  contentMapCount: number;
  otherCount: number;
  contentMapDek: string;
};

const OTHER = 'Other';

function folderLabel(segment: string): string {
  return segment.replace(/--and--/g, ' & ').replace(/-+/g, ' ');
}

function sectionOf(id: string): SectionRef {
  const parts = id.split('/').filter(Boolean);
  parts.pop();
  if (parts.length === 0) return { key: '', label: 'Top level' };
  return { key: parts.join('/'), label: parts.map(folderLabel).join(' / ') };
}

function byCount(a: TypeGroup, b: TypeGroup): number {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function bySectionCount(a: SectionGroup, b: SectionGroup): number {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function pushPage(buckets: Map<string, Map<string, PageGroup>>, note: NoteLike): void {
  const raw = typeof note.data.type === 'string' ? note.data.type.trim() : '';
  const typeLabel = raw || OTHER;
  const section = sectionOf(note.id);
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
    title: deriveTitle(note.data, note.id, note.body),
    url: slugToUrl(note.id),
    type: raw,
  });
}

function toSectionGroups(sectionMap: Map<string, PageGroup>): SectionGroup[] {
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
  sectionGroups.sort(bySectionCount);
  return sectionGroups;
}

function toTypeGroups(buckets: Map<string, Map<string, PageGroup>>): TypeGroup[] {
  const typeGroups: TypeGroup[] = [];
  for (const [label, sectionMap] of buckets) {
    const sections = toSectionGroups(sectionMap);
    const count = sections.reduce((sum, group) => sum + group.count, 0);
    typeGroups.push({ label, count, sections });
  }
  return typeGroups;
}

export function buildContentMap(notes: NoteLike[]): ContentMapResult {
  const contentPages = notes.filter((n) => simplifySlug(n.id) !== '/' && n.id !== 'notes/index');
  const buckets = new Map<string, Map<string, PageGroup>>();
  for (const note of contentPages) pushPage(buckets, note);
  const typeGroups = toTypeGroups(buckets);
  const otherGroups = typeGroups.filter((group) => group.label === OTHER);
  const named = typeGroups.filter((group) => group.label !== OTHER);
  named.sort(byCount);
  const contentMap = named.concat(otherGroups);
  const contentMapCount = contentMap.reduce((sum, group) => sum + group.count, 0);
  const otherCount = otherGroups.reduce((sum, group) => sum + group.count, 0);
  if (contentMapCount !== contentPages.length) {
    throw new Error(
      `Content map lists ${contentMapCount} pages; the site builds ${contentPages.length} note pages.`,
    );
  }
  const contentMapDek =
    otherCount > 0
      ? `${contentMapCount} pages. ${otherCount} with no type.`
      : `${contentMapCount} pages.`;
  return { contentMap, contentMapCount, otherCount, contentMapDek };
}
