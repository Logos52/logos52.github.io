/**
 * graph.ts — build the link graph (GraphData) from resolved wikilinks.
 *
 * `buildGraph` produces the global graph (emitted to /graph.json by src/pages/graph.json.ts).
 * `localGraph` slices a 1–2 hop neighborhood for a note's local-graph rail.
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
