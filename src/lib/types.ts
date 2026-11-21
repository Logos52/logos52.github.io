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

export function isDomain(s: string): s is Domain {
  return (DOMAINS as readonly string[]).includes(s);
}

export function normalizeDomain(s: string): Domain | undefined {
  if (isDomain(s)) return s;
  return LEGACY_DOMAINS[s];
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
