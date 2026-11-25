import { existsSync, readFileSync } from 'node:fs';
import { DEFAULT_DOMAIN, isDomain, type Domain } from './types';

const DOMAINS_JSON = 'kb-astro/site-data/domains.json';

const DOOR_TO_DOMAIN: Record<string, Domain> = {
  ai: 'agentic',
  self: 'focus',
  world: 'mind',
  craft: 'gen',
};

const FOLDER_DOMAIN: { prefix: string; domain: Domain }[] = [
  { prefix: 'wiki/Concepts/', domain: 'learning' },
  { prefix: 'wiki/Techniques/', domain: 'learning' },
  { prefix: 'wiki/Syntheses/', domain: 'learning' },
  { prefix: 'wiki/Learning-Craft/', domain: 'learning' },
  { prefix: 'wiki/Dimensions/', domain: 'learning' },
  { prefix: 'wiki/Systems/', domain: 'agentic' },
  { prefix: 'wiki/Workflows/', domain: 'agentic' },
  { prefix: 'wiki/Working-with-Agents/', domain: 'agentic' },
  { prefix: 'wiki/Language/', domain: 'language' },
  { prefix: 'wiki/Resources/', domain: 'language' },
  { prefix: 'wiki/Self-Management/', domain: 'focus' },
  { prefix: 'wiki/Minimalism/', domain: 'focus' },
  { prefix: 'wiki/Fitness/', domain: 'focus' },
  { prefix: 'wiki/Fashion/', domain: 'focus' },
  { prefix: 'wiki/Travel/', domain: 'focus' },
  { prefix: 'wiki/Decision-Making/', domain: 'mind' },
  { prefix: 'wiki/Worldviews', domain: 'mind' },
  { prefix: 'wiki/Story-Craft/', domain: 'mind' },
  { prefix: 'wiki/Argument-Validation/', domain: 'mind' },
  { prefix: 'wiki/Money/', domain: 'gen' },
  { prefix: 'wiki/Design/', domain: 'gen' },
  { prefix: 'wiki/Books/', domain: 'gen' },
  { prefix: 'wiki/Experiences/', domain: 'gen' },
  { prefix: 'wiki/Domains/', domain: 'gen' },
  { prefix: 'wiki/Writing-Craft/', domain: 'gen' },
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

function normalizeToLegacy(raw: unknown): Domain | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (isDomain(trimmed)) return trimmed;
  return DOOR_TO_DOMAIN[trimmed] ?? null;
}

function domainFromPrefix(slug: string): Domain | null {
  const norm = slug.replace(/\s+/g, '-');
  for (const { prefix, domain } of FOLDER_DOMAIN) {
    if (norm.startsWith(prefix) || slug.startsWith(prefix)) return domain;
  }
  return null;
}

export function resolveDomain(slug: string, explicit?: unknown): Domain {
  return (
    normalizeToLegacy(explicit) ??
    normalizeToLegacy(loadDomainsJson()?.[slug]) ??
    domainFromPrefix(slug) ??
    DEFAULT_DOMAIN
  );
}

export const hasDomainsJson = () => loadDomainsJson() !== null;
