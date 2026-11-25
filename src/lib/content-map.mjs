import { deriveTitle } from './note.ts';
import { byHubThen } from './folder-order.ts';
import { simplifySlug, slugToUrl } from './slug.ts';

function folderLabel(segment) {
  return segment.replace(/--and--/g, ' & ').replace(/-+/g, ' ');
}

function sectionOf(id) {
  const parts = id.split('/').filter(Boolean);
  parts.pop();
  if (parts.length === 0) return { key: '', label: 'Top level' };
  return { key: parts.join('/'), label: parts.map(folderLabel).join(' / ') };
}

function byCountThenName(a, b) {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function bySectionCount(a, b) {
  return b.count - a.count || a.label.localeCompare(b.label, 'en');
}

function pushPage(buckets, note) {
  const raw = typeof note.data.type === 'string' ? note.data.type.trim() : '';
  const typeLabel = raw || 'Other';
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

function toSectionGroups(sectionMap) {
  const sectionGroups = [];
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

function toTypeGroups(buckets) {
  const typeGroups = [];
  for (const [label, sectionMap] of buckets) {
    const sections = toSectionGroups(sectionMap);
    const count = sections.reduce((sum, group) => sum + group.count, 0);
    typeGroups.push({ label, count, sections });
  }
  return typeGroups;
}

export function buildContentMap(notes) {
  const contentPages = notes.filter((n) => simplifySlug(n.id) !== '/' && n.id !== 'notes/index');
  const buckets = new Map();
  for (const note of contentPages) pushPage(buckets, note);
  const typeGroups = toTypeGroups(buckets);
  const otherGroups = typeGroups.filter((group) => group.label === 'Other');
  const named = typeGroups.filter((group) => group.label !== 'Other');
  named.sort(byCountThenName);
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
