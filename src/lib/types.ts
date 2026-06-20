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

export const DOMAINS = ['learning', 'agentic', 'language', 'focus', 'mind', 'gen'] as const;
export type Domain = (typeof DOMAINS)[number];

export const DOMAIN_LABELS: Record<Domain, string> = {
  learning: 'Learning',
  agentic: 'Agentic',
  language: 'Language',
  focus: 'Focus',
  mind: 'Mind',
  gen: 'Generativity',
};

/** Light/dark hex per domain — kept in sync with src/styles/ds/domains.css (--d-*). Restored toward the
 *  original logos52 graph palette: learning purple · agentic brown · language seal-red · gen blue · focus rose · mind teal. */
export const DOMAIN_COLORS: Record<Domain, { light: string; dark: string }> = {
  learning: { light: '#7d6097', dark: '#a993c1' },
  agentic: { light: '#926a46', dark: '#bf9d74' },
  language: { light: '#ab6750', dark: '#cc8975' },
  focus: { light: '#b76279', dark: '#d598a9' },
  mind: { light: '#418c84', dark: '#67b2ab' },
  gen: { light: '#5179ad', dark: '#83a7ca' },
};

export const DEFAULT_DOMAIN: Domain = 'gen';

export function isDomain(s: string): s is Domain {
  return (DOMAINS as readonly string[]).includes(s);
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
  /** Passthrough — any other frontmatter key the vault carries. */
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
