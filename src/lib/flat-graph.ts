import type { GraphData } from './types';
import { slugToUrl } from './slug';

export type FlatNode = {
  slug: string;
  title: string;
  x: number;
  y: number;
  r: number;
  color: string;
  href: string;
};

export type FlatLink = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type FlatLobe = {
  label: string;
  x: number;
};

export type FlatGraph = {
  width: number;
  height: number;
  nodes: FlatNode[];
  links: FlatLink[];
  lobes: FlatLobe[];
};

export type FlatOptions = {
  width: number;
  height: number;
  limit: number;
  labels: boolean;
};

type LobeSpec = {
  label: string;
  hue: number;
  prefixes: readonly string[];
};

const LOBES: readonly LobeSpec[] = [
  { label: 'Learning faster', hue: 235, prefixes: ['wiki/Dimensions/', 'wiki/Concepts/', 'wiki/Learning-Craft/'] },
  { label: 'Working well with AI', hue: 290, prefixes: ['wiki/Systems/', 'wiki/Working-with-Agents/', 'wiki/Workflows/', 'wiki/Start-Here/'] },
  { label: 'Making sense of the world', hue: 30, prefixes: ['wiki/Worldviews--and--the-Political-Order/', 'wiki/Books/', 'wiki/Story-Craft/'] },
  { label: 'Managing yourself', hue: 150, prefixes: ['wiki/Self-Management/', 'wiki/Minimalism/'] },
  { label: 'Money and craft', hue: 85, prefixes: ['wiki/Money/', 'wiki/Design/', 'wiki/Language/', 'wiki/Tsumugu/', 'wiki/Resources/', 'wiki/Writing-Craft/', 'wiki/Domains/'] },
];

function lobeIndex(slug: string): number {
  for (let i = 0; i < LOBES.length; i++) {
    const spec = LOBES[i];
    for (const prefix of spec.prefixes) {
      if (slug.startsWith(prefix)) return i;
    }
  }
  return LOBES.length - 1;
}

function hueOf(slug: string): number {
  for (const spec of LOBES) {
    for (const prefix of spec.prefixes) {
      if (slug.startsWith(prefix)) return spec.hue;
    }
  }
  return -1;
}

function colorOf(hue: number): string {
  if (hue < 0) return '#9a9a9a';
  return `oklch(0.66 0.13 ${hue})`;
}

type Ranked = { slug: string; title: string; degree: number; lobe: number };

export function layoutFlat(graph: GraphData, options: FlatOptions): FlatGraph {
  const wiki = graph.nodes.filter((n) => n.slug.startsWith('wiki/'));
  const allowed = new Set(wiki.map((n) => n.slug));
  const degree = new Map<string, number>();
  for (const n of wiki) degree.set(n.slug, 0);
  const edges: GraphData['edges'] = [];
  for (const e of graph.edges) {
    if (!allowed.has(e.source) || !allowed.has(e.target)) continue;
    edges.push(e);
    degree.set(e.source, (degree.get(e.source) ?? 0) + 1);
    degree.set(e.target, (degree.get(e.target) ?? 0) + 1);
  }
  let ranked: Ranked[] = wiki.map((n) => ({
    slug: n.slug,
    title: n.title,
    degree: degree.get(n.slug) ?? 0,
    lobe: lobeIndex(n.slug),
  }));
  ranked.sort((a, b) => b.degree - a.degree || a.title.localeCompare(b.title));
  if (options.limit > 0) ranked = ranked.slice(0, options.limit);
  const keep = new Set(ranked.map((n) => n.slug));
  const maxDeg = ranked.reduce((m, n) => Math.max(m, n.degree), 1);
  const top = options.labels ? 46 : 14;
  const bottom = options.height - 12;
  const lobeW = options.width / LOBES.length;
  const byLobe: Ranked[][] = LOBES.map(() => []);
  for (const n of ranked) byLobe[n.lobe].push(n);

  const nodes: FlatNode[] = [];
  const pos = new Map<string, FlatNode>();
  for (let i = 0; i < byLobe.length; i++) {
    const group = byLobe[i];
    const count = group.length;
    if (!count) continue;
    const cols = Math.max(1, Math.round(Math.sqrt(count)));
    const rows = Math.ceil(count / cols);
    group.forEach((n, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = lobeW * i + ((col + 0.5) / cols) * lobeW;
      const y = top + ((row + 0.5) / rows) * (bottom - top);
      const r = 2.4 + 3.2 * Math.sqrt(n.degree / maxDeg);
      const node: FlatNode = {
        slug: n.slug,
        title: n.title,
        x: Math.round(x * 10) / 10,
        y: Math.round(y * 10) / 10,
        r: Math.round(r * 10) / 10,
        color: colorOf(hueOf(n.slug)),
        href: slugToUrl(n.slug),
      };
      nodes.push(node);
      pos.set(n.slug, node);
    });
  }

  const used = new Set<string>();
  const budget = new Map<string, number>();
  const links: FlatLink[] = [];
  const candidates = edges
    .filter((e) => keep.has(e.source) && keep.has(e.target))
    .map((e) => ({
      source: e.source,
      target: e.target,
      weight: (degree.get(e.source) ?? 0) + (degree.get(e.target) ?? 0),
    }));
  candidates.sort((a, b) => b.weight - a.weight);
  for (const e of candidates) {
    const a = pos.get(e.source);
    const b = pos.get(e.target);
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    if (Math.abs(dy) > Math.abs(dx)) continue;
    const key = a.slug < b.slug ? `${a.slug}\0${b.slug}` : `${b.slug}\0${a.slug}`;
    if (used.has(key)) continue;
    if ((budget.get(a.slug) ?? 0) >= 3 || (budget.get(b.slug) ?? 0) >= 3) continue;
    used.add(key);
    budget.set(a.slug, (budget.get(a.slug) ?? 0) + 1);
    budget.set(b.slug, (budget.get(b.slug) ?? 0) + 1);
    links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
  }

  const lobes: FlatLobe[] = options.labels
    ? LOBES.map((spec, i) => ({ label: spec.label, x: Math.round((i + 0.5) * lobeW) }))
    : [];
  return { width: options.width, height: options.height, nodes, links, lobes };
}
