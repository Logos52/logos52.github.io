import type { GraphData } from './types';
import { slugToUrl } from './slug';

const LABELS = [
  'Learning faster',
  'Working well with AI',
  'Making sense of the world',
  'Managing yourself',
  'Money and craft',
];
const HUES = [235, 290, 30, 150, 85];
const PREFIXES = [
  ['wiki/Dimensions/', 'wiki/Concepts/', 'wiki/Learning-Craft/'],
  ['wiki/Systems/', 'wiki/Working-with-Agents/', 'wiki/Workflows/', 'wiki/Start-Here/'],
  ['wiki/Worldviews--and--the-Political-Order/', 'wiki/Books/', 'wiki/Story-Craft/'],
  ['wiki/Self-Management/', 'wiki/Minimalism/'],
  ['wiki/Money/', 'wiki/Design/', 'wiki/Language/', 'wiki/Tsumugu/', 'wiki/Resources/', 'wiki/Writing-Craft/', 'wiki/Domains/'],
];

function flatOptions(width: number, height: number, limit: number) {
  return { width, height, limit, labels: true };
}

function lobeOf(slug: string): number {
  for (let i = 0; i < PREFIXES.length; i++) {
    if (PREFIXES[i].some((prefix) => slug.startsWith(prefix))) return i;
  }
  return PREFIXES.length - 1;
}

function colorOf(slug: string): string {
  for (let i = 0; i < PREFIXES.length; i++) {
    if (PREFIXES[i].some((prefix) => slug.startsWith(prefix))) return `oklch(0.66 0.13 ${HUES[i]})`;
  }
  return '#9a9a9a';
}

function bump(degree: Map<string, number>, slug: string) {
  degree.set(slug, (degree.get(slug) ?? 0) + 1);
}

function tally(graph: GraphData) {
  const wiki = graph.nodes.filter((node) => node.slug.startsWith('wiki/'));
  const allowed = new Set(wiki.map((node) => node.slug));
  const degree = new Map<string, number>();
  for (const node of wiki) degree.set(node.slug, 0);
  const edges = graph.edges.filter((edge) => allowed.has(edge.source) && allowed.has(edge.target));
  for (const edge of edges) bump(degree, edge.source);
  for (const edge of edges) bump(degree, edge.target);
  return { wiki, degree, edges };
}

function rowOf(slug: string, title: string, degree: number) {
  return { slug, title, degree, lobe: lobeOf(slug) };
}

function byDegree(a: ReturnType<typeof rowOf>, b: ReturnType<typeof rowOf>) {
  return b.degree - a.degree || a.title.localeCompare(b.title);
}

function ranked(bag: ReturnType<typeof tally>, limit: number) {
  const rows = bag.wiki.map((node) => rowOf(node.slug, node.title, bag.degree.get(node.slug) ?? 0));
  rows.sort(byDegree);
  if (limit > 0) return rows.slice(0, limit);
  return rows;
}

function frame(options: ReturnType<typeof flatOptions>, maxDeg: number) {
  return {
    lobeW: options.width / LABELS.length,
    top: options.labels ? 46 : 14,
    bottom: options.height - 12,
    maxDeg,
  };
}

function gridOf(cols: number, count: number, box: ReturnType<typeof frame>) {
  return { cols, rows: Math.ceil(count / cols), box };
}

function atOf(index: number, grid: ReturnType<typeof gridOf>) {
  return {
    col: index % grid.cols,
    row: Math.floor(index / grid.cols),
    cols: grid.cols,
    rows: grid.rows,
    lobeW: grid.box.lobeW,
    top: grid.box.top,
    bottom: grid.box.bottom,
    maxDeg: grid.box.maxDeg,
  };
}

function nodeAt(row: ReturnType<typeof rowOf>, lobe: number, at: ReturnType<typeof atOf>) {
  const x = at.lobeW * lobe + ((at.col + 0.5) / at.cols) * at.lobeW;
  const y = at.top + ((at.row + 0.5) / at.rows) * (at.bottom - at.top);
  const radius = 2.4 + 3.2 * Math.sqrt(row.degree / at.maxDeg);
  return {
    slug: row.slug,
    title: row.title,
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10,
    r: Math.round(radius * 10) / 10,
    color: colorOf(row.slug),
    href: slugToUrl(row.slug),
  };
}

function placeLobe(group: ReturnType<typeof rowOf>[], lobe: number, box: ReturnType<typeof frame>) {
  if (!group.length) return [];
  const cols = Math.max(1, Math.round(Math.sqrt(group.length)));
  const grid = gridOf(cols, group.length, box);
  return group.map((row, index) => nodeAt(row, lobe, atOf(index, grid)));
}

function placed(rows: ReturnType<typeof ranked>, options: ReturnType<typeof flatOptions>) {
  const maxDeg = rows.reduce((max, row) => Math.max(max, row.degree), 1);
  const box = frame(options, maxDeg);
  const nodes: ReturnType<typeof nodeAt>[] = [];
  for (let lobe = 0; lobe < LABELS.length; lobe++) {
    nodes.push(...placeLobe(rows.filter((row) => row.lobe === lobe), lobe, box));
  }
  return nodes;
}

function pairOf(source: string, target: string, degree: Map<string, number>) {
  return { source, target, weight: (degree.get(source) ?? 0) + (degree.get(target) ?? 0) };
}

function books() {
  return { used: new Set<string>(), budget: new Map<string, number>() };
}

function steep(a: ReturnType<typeof nodeAt>, b: ReturnType<typeof nodeAt>) {
  return Math.abs(b.y - a.y) > Math.abs(b.x - a.x);
}

function pairKey(a: ReturnType<typeof nodeAt>, b: ReturnType<typeof nodeAt>) {
  if (a.slug < b.slug) return `${a.slug}\0${b.slug}`;
  return `${b.slug}\0${a.slug}`;
}

function booked(book: ReturnType<typeof books>, slug: string) {
  return (book.budget.get(slug) ?? 0) >= 3;
}

function blocked(book: ReturnType<typeof books>, key: string, a: string, b: string) {
  if (book.used.has(key)) return true;
  if (booked(book, a)) return true;
  return booked(book, b);
}

function accept(pair: ReturnType<typeof pairOf>, pos: Map<string, ReturnType<typeof nodeAt>>, book: ReturnType<typeof books>) {
  const a = pos.get(pair.source);
  const b = pos.get(pair.target);
  if (!a || !b) return undefined;
  if (steep(a, b)) return undefined;
  const key = pairKey(a, b);
  if (blocked(book, key, a.slug, b.slug)) return undefined;
  book.used.add(key);
  book.budget.set(a.slug, (book.budget.get(a.slug) ?? 0) + 1);
  book.budget.set(b.slug, (book.budget.get(b.slug) ?? 0) + 1);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

function pickLinks(candidates: ReturnType<typeof pairOf>[], pos: Map<string, ReturnType<typeof nodeAt>>) {
  const book = books();
  const links: ReturnType<typeof accept>[] = [];
  for (const pair of candidates) {
    const link = accept(pair, pos, book);
    if (link) links.push(link);
  }
  return links;
}

function linked(edges: GraphData['edges'], nodes: ReturnType<typeof nodeAt>[], degree: Map<string, number>) {
  const pos = new Map(nodes.map((node) => [node.slug, node]));
  const keep = new Set(nodes.map((node) => node.slug));
  const candidates = edges
    .filter((edge) => keep.has(edge.source) && keep.has(edge.target))
    .map((edge) => pairOf(edge.source, edge.target, degree));
  candidates.sort((a, b) => b.weight - a.weight);
  return pickLinks(candidates, pos);
}

function lobeLabels(options: ReturnType<typeof flatOptions>) {
  if (!options.labels) return [];
  const lobeW = options.width / LABELS.length;
  return LABELS.map((label, index) => ({ label, x: Math.round((index + 0.5) * lobeW) }));
}

export function layoutFlat(graph: GraphData, options: ReturnType<typeof flatOptions>) {
  const bag = tally(graph);
  const rows = ranked(bag, options.limit);
  const nodes = placed(rows, options);
  const links = linked(bag.edges, nodes, bag.degree);
  return { width: options.width, height: options.height, nodes, links, lobes: lobeLabels(options) };
}
