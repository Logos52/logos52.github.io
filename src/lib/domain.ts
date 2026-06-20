/**
 * domain.ts — assign each note to one of the 6 knowledge domains.
 *
 * Priority: Grok's authoritative `kb-astro/site-data/domains.json` (slug → domain) when present,
 * else a folder fallback that collapses the old 8-domain `quartz/domains.ts` map into the new 6
 * (see CONTRACTS §2). This lets the graph color correctly BEFORE Grok's file exists; once it lands,
 * it wins. Default domain = `gen`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { DEFAULT_DOMAIN, isDomain, type Domain } from './types';

const DOMAINS_JSON = 'kb-astro/site-data/domains.json';

// Folder fallback — keyed by SLUGIFIED wiki/ subfolder prefix (8→6 collapse).
const FOLDER_DOMAIN: { prefix: string; domain: Domain }[] = [
  { prefix: 'wiki/Concepts/', domain: 'learning' },
  { prefix: 'wiki/Techniques/', domain: 'learning' },
  { prefix: 'wiki/Syntheses/', domain: 'learning' },
  { prefix: 'wiki/Learning-Craft/', domain: 'learning' },
  { prefix: 'wiki/Dimensions/', domain: 'learning' },
  { prefix: 'wiki/Systems/', domain: 'agentic' },
  { prefix: 'wiki/Workflows/', domain: 'agentic' },
  { prefix: 'wiki/Language/', domain: 'language' },
  { prefix: 'wiki/Resources/', domain: 'language' },
  { prefix: 'wiki/Self-Management/', domain: 'focus' },
  { prefix: 'wiki/Decision-Making/', domain: 'mind' }, // 8→6: decisions → mind (Grok confirms)
  { prefix: 'wiki/Minimalism/', domain: 'gen' },
  { prefix: 'wiki/Money/', domain: 'gen' }, // 8→6: money → gen (Grok confirms)
  { prefix: 'wiki/Books/', domain: 'gen' },
  { prefix: 'wiki/Experiences/', domain: 'gen' },
  { prefix: 'wiki/Domains/', domain: 'gen' },
];

let jsonMap: Record<string, string> | null | undefined;
function loadDomainsJson(): Record<string, string> | null {
  if (jsonMap !== undefined) return jsonMap;
  try {
    jsonMap = existsSync(DOMAINS_JSON) ? JSON.parse(readFileSync(DOMAINS_JSON, 'utf8')) : null;
  } catch {
    jsonMap = null;
  }
  return jsonMap;
}

export function resolveDomain(slug: string): Domain {
  const map = loadDomainsJson();
  const fromJson = map?.[slug];
  if (typeof fromJson === 'string' && isDomain(fromJson)) return fromJson;
  for (const { prefix, domain } of FOLDER_DOMAIN) if (slug.startsWith(prefix)) return domain;
  return DEFAULT_DOMAIN;
}

/** True once Grok's domains.json is in place (so the build can warn on <100% coverage if desired). */
export const hasDomainsJson = () => loadDomainsJson() !== null;
