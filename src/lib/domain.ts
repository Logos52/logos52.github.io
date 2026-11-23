import { existsSync, readFileSync } from 'node:fs';
import { DEFAULT_DOMAIN, isDomain, normalizeDomain, type Domain } from './types';

const DOMAINS_JSON = 'kb-astro/site-data/domains.json';

const FOLDER_DOMAIN: { prefix: string; domain: Domain }[] = [
  { prefix: 'wiki/Systems/', domain: 'ai' },
  { prefix: 'wiki/Workflows/', domain: 'ai' },
  { prefix: 'wiki/Working-with-Agents/', domain: 'ai' },
  { prefix: 'wiki/Concepts/', domain: 'learning' },
  { prefix: 'wiki/Techniques/', domain: 'learning' },
  { prefix: 'wiki/Syntheses/', domain: 'learning' },
  { prefix: 'wiki/Learning-Craft/', domain: 'learning' },
  { prefix: 'wiki/Dimensions/', domain: 'learning' },
  { prefix: 'wiki/Self-Management/', domain: 'self' },
  { prefix: 'wiki/Minimalism/', domain: 'self' },
  { prefix: 'wiki/Fitness/', domain: 'self' },
  { prefix: 'wiki/Fashion/', domain: 'self' },
  { prefix: 'wiki/Travel/', domain: 'self' },
  { prefix: 'wiki/Language/', domain: 'world' },
  { prefix: 'wiki/Resources/', domain: 'world' },
  { prefix: 'wiki/Decision-Making/', domain: 'world' },
  { prefix: 'wiki/Worldviews', domain: 'world' },
  { prefix: 'wiki/Story-Craft/', domain: 'world' },
  { prefix: 'wiki/Argument-Validation/', domain: 'world' },
  { prefix: 'wiki/Money/', domain: 'craft' },
  { prefix: 'wiki/Design/', domain: 'craft' },
  { prefix: 'wiki/Books/', domain: 'craft' },
  { prefix: 'wiki/Experiences/', domain: 'craft' },
  { prefix: 'wiki/Domains/', domain: 'craft' },
  { prefix: 'wiki/Writing-Craft/', domain: 'craft' },
];

function parseDomainsJson(text: string): Record<string, string> | null {
  const raw: unknown = JSON.parse(text);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const next: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (typeof v === 'string') next[k] = v;
  }
  return next;
}

let jsonMap: Record<string, string> | null | undefined;
function loadDomainsJson(): Record<string, string> | null {
  if (jsonMap !== undefined) return jsonMap;
  jsonMap = null;
  if (!existsSync(DOMAINS_JSON)) return jsonMap;
  try {
    jsonMap = parseDomainsJson(readFileSync(DOMAINS_JSON, 'utf8'));
  } catch {
    jsonMap = null;
  }
  return jsonMap;
}

function domainFromPrefix(slug: string): Domain | null {
  const norm = slug.replace(/\s+/g, '-');
  for (const { prefix, domain } of FOLDER_DOMAIN) {
    if (norm.startsWith(prefix) || slug.startsWith(prefix)) return domain;
  }
  return null;
}

function domainFromExplicit(explicit: unknown): Domain | null {
  if (typeof explicit !== 'string') return null;
  return normalizeDomain(explicit.trim());
}

function domainFromJson(slug: string): Domain | null {
  const raw = loadDomainsJson()?.[slug];
  return typeof raw === 'string' ? normalizeDomain(raw) : null;
}

export function resolveDomain(slug: string, explicit?: unknown): Domain {
  return domainFromExplicit(explicit) ?? domainFromJson(slug) ?? domainFromPrefix(slug) ?? DEFAULT_DOMAIN;
}

export const hasDomainsJson = () => loadDomainsJson() !== null;