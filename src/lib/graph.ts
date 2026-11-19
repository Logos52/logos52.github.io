/**
 * graph.ts — build the link graph (GraphData) from resolved wikilinks.
 *
 * `buildGraph` produces the global graph (emitted to /graph.json by src/pages/graph.json.ts).
 * `localGraph` slices a 1–2 hop neighborhood of one slug.
 */
import type { GraphData, GraphNode, GraphEdge } from './types';
import { buildSlugResolver, parseWikilink } from './wikilinks';
import { resolveDomain } from './domain';

const WIKILINK = /\[\[([^\]\n]+)\]\]/g;

export interface NoteInput {
  slug: string;
  title: string;
  type: string;
  body: string;
  /** Frontmatter domain, when the note sets one. */
  domain?: string;
}

export function buildGraph(notes: NoteInput[]): GraphData {
  const resolver = buildSlugResolver();
  const known = new Set(notes.map((n) => n.slug));

  const nodes: GraphNode[] = notes.map((n) => ({
    slug: n.slug,
    title: n.title,
    domain: resolveDomain(n.slug, n.domain),
    type: n.type,
  }));

  const seen = new Set<string>();
  const edges: GraphEdge[] = [];
  for (const n of notes) {
    for (const m of n.body.matchAll(WIKILINK)) {
      const { path } = parseWikilink(m[1]);
      if (!path) continue;
      const target = resolver.resolve(path);
      if (!target || target === n.slug || !known.has(target)) continue;
      const key = `${n.slug}\0${target}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ source: n.slug, target });
    }
  }
  return { nodes, edges };
}

/** 1–2 hop neighborhood of `slug` (undirected), for the note-page local-graph rail. */
export function localGraph(graph: GraphData, slug: string, hops = 1): GraphData {
  const adj = new Map<string, Set<string>>();
  for (const e of graph.edges) {
    (adj.get(e.source) ?? adj.set(e.source, new Set()).get(e.source)!).add(e.target);
    (adj.get(e.target) ?? adj.set(e.target, new Set()).get(e.target)!).add(e.source);
  }
  const keep = new Set<string>([slug]);
  let frontier = new Set<string>([slug]);
  for (let i = 0; i < hops; i++) {
    const next = new Set<string>();
    for (const s of frontier) for (const nb of adj.get(s) ?? []) if (!keep.has(nb)) (keep.add(nb), next.add(nb));
    frontier = next;
  }
  return {
    nodes: graph.nodes.filter((n) => keep.has(n.slug)),
    edges: graph.edges.filter((e) => keep.has(e.source) && keep.has(e.target)),
  };
}
