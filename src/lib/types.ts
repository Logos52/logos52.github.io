/**
 * types.ts — O6 contracts. The shared interface the Composer and Grok lanes build against.
 *
 * Pure TypeScript on purpose (no `astro:content` import) so it can be imported from anywhere:
 * `.astro` components, island scripts, and plain Node build scripts alike.
 *
 * The Zod schema that validates frontmatter lives in `src/content.config.ts` (it needs the
 * `astro:content` `z`); this file mirrors that shape as a TS type and owns the domain/graph/
 * search/backlink contracts. Keep the two in sync — CONTRACTS.md documents both.
 */

/* ------------------------------------------------------------------ *
 * Domains — the 6 knowledge domains the graph + cards color by.
 * Colors are copied VERBATIM from the Tsumugu DS (`--d-*` custom
 * properties in ui_kits/knowledge-base/index.html). This map is the
 * single source of truth for domain color in the Astro site.
 * ------------------------------------------------------------------ */

export const DOMAINS = ['ai', 'learning', 'self', 'world', 'craft'] as const;
export type Domain = (typeof DOMAINS)[number];

export const DOMAIN_LABELS: Record<Domain, string> = {
  ai: 'Working well with AI',
  learning: 'Learning faster',
  self: 'Managing yourself',
  world: 'Making sense of the world',
  craft: 'Money and craft',
};

export const DOMAIN_COLORS: Record<Domain, { light: string; dark: string }> = {
  ai: { light: '#666cb0', dark: '#8a90c8' },
  learning: { light: '#5a7a9e', dark: '#7c9bc0' },
  self: { light: '#6e8a5c', dark: '#92ab7e' },
  world: { light: '#4f6fa3', dark: '#7290be' },
  craft: { light: '#7a6b8f', dark: '#9d8fb0' },
};

export const DOMAIN_STANCES: Record<Domain, string> = {
  ai: 'The person sets direction; agents do the repetitive work.',
  learning: 'A technique counts only when it makes you process the material.',
  self: 'Attention, habits, and environment do more than willpower.',
  world: 'Claims earn their place when you can state what would change your mind.',
  craft: 'Money and making both reward systems that respect limits.',
};

export const DEFAULT_DOMAIN: Domain = 'craft';

const LEGACY_DOMAINS: Record<string, Domain> = {
  agentic: 'ai',
  language: 'world',
  focus: 'self',
  mind: 'world',
  gen: 'craft',
};

export function normalizeDomain(s: string): Domain | undefined {
  if (isDomain(s)) return s;
  return LEGACY_DOMAINS[s];
}

export function isDomain(s: string): s is Domain {
  return DOMAINS.some((d) => d === s);
}

/* ------------------------------------------------------------------ *
 * Frontmatter — mirrors the lenient Zod schema in content.config.ts.
 * Everything optional; unknown keys allowed (the vault is messy).
 * ------------------------------------------------------------------ */

export interface NoteFrontmatter {
  title?: string;
  /** 34 distinct values exist in the vault; treated as a free string, not a strict enum. */
  type?: string;
  status?: string;
  /** YAML may parse a bare date into a Date; quoted/odd values stay strings. */
  created?: string | Date;
  updated?: string | Date;
  tags?: string[];
  order?: number;
  image?: string;
  blurb?: string;
  draft?: boolean;
  aliases?: string[];
  description?: string;
  /** One of the six domains, when a note sets it. Folder rules apply when it is absent. */
  domain?: Domain;
  /**
   * Pipeline keys (method, prose-model, written-by, model, source-count, and the rest
   * listed in content.config.ts) are allowed and are not rendered.
   */
  [key: string]: unknown;
}

/* ------------------------------------------------------------------ *
 * Graph — emitted to public/graph.json (GraphData), consumed by the
 * /graph island and the per-note local-graph rail.
 * ------------------------------------------------------------------ */

export interface GraphNode {
  /** Full slug, e.g. "wiki/Concepts/Higher-Order-Generativity..." (folder-based, 1:1 with Quartz). */
  slug: string;
  title: string;
  domain: Domain;
  /** Raw frontmatter `type` (free string). */
  type: string;
}

export interface GraphEdge {
  source: string; // slug
  target: string; // slug
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

/* ------------------------------------------------------------------ *
 * Search — one SearchDoc per note. Pagefind indexes rendered HTML, so
 * these fields drive the data-pagefind-* attributes + result rows.
 * ------------------------------------------------------------------ */

export interface SearchDoc {
  slug: string;
  /** Resolved site URL (folder-based, leading slash), e.g. "/wiki/Concepts/Higher-Order-Generativity/". */
  url: string;
  title: string;
  summary: string;
  domain: Domain;
  tags: string[];
  headings: string[];
}

/* ------------------------------------------------------------------ *
 * Backlinks — emitted per target slug. Each entry is a note that links
 * TO the target, plus the surrounding context line.
 * ------------------------------------------------------------------ */

export interface Backlink {
  slug: string;
  title: string;
  /** The sentence/line around the link, for the backlinks panel. */
  context: string;
}

/** Map of target slug → notes linking to it. Emitted to public/backlinks.json. */
export type BacklinkIndex = Record<string, Backlink[]>;

