export type Domain = {
  id: string
  label: string
  color: string
  prefixes: string[]
}

const FALLBACK_COLOR = "#6f6875"

/** Slugify a wiki folder prefix the same way Quartz slugifies path segments. */
function slugifyPrefix(prefix: string): string {
  const trimmed = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix
  return (
    trimmed
      .split("/")
      .map((segment) =>
        segment
          .replace(/\s/g, "-")
          .replace(/&/g, "-and-")
          .replace(/%/g, "-percent")
          .replace(/\?/g, "")
          .replace(/#/g, ""),
      )
      .join("/") + "/"
  )
}

export const DOMAINS: Domain[] = [
  {
    id: "learning",
    label: "Learning",
    color: "#7f55a0",
    prefixes: ["Dimensions/", "Syntheses/", "Techniques/", "Learning Craft/", "Concepts/"],
  },
  {
    id: "agentic",
    label: "Agentic",
    color: "#3f74b8",
    prefixes: ["Systems/", "Workflows/"],
  },
  {
    id: "focus",
    label: "Focus",
    color: "#c2506e",
    prefixes: ["Self Management/"],
  },
  {
    id: "decisions",
    label: "Decisions",
    color: "#cf7d2c",
    prefixes: ["Decision Making/"],
  },
  {
    id: "language",
    label: "Language",
    color: "#c0961f",
    prefixes: ["Language/", "Resources/"],
  },
  {
    id: "minimalism",
    label: "Minimalism",
    color: "#6f7a86",
    prefixes: ["Minimalism/"],
  },
  {
    id: "money",
    label: "Money",
    color: "#2f9162",
    prefixes: ["Money/"],
  },
  {
    id: "reference",
    label: "Reference",
    color: "#3e9788",
    prefixes: ["Books/", "Experiences/", "Domains/"],
  },
]

/** Fixed spine order (H3). */
export const SPINE_DOMAIN_ORDER = [
  "learning",
  "focus",
  "agentic",
  "decisions",
  "language",
  "money",
  "minimalism",
  "reference",
] as const

const slugPrefixesByDomain = DOMAINS.map((domain) => ({
  domain,
  slugPrefixes: domain.prefixes.map(slugifyPrefix),
}))

export function domainOf(slug: string): Domain | undefined {
  if (!slug.startsWith("wiki/")) return undefined
  const path = slug.slice("wiki/".length)
  for (const { domain, slugPrefixes } of slugPrefixesByDomain) {
    for (const prefix of slugPrefixes) {
      if (path.startsWith(prefix)) return domain
    }
  }
  return undefined
}

export function colorOf(slug: string): string {
  return domainOf(slug)?.color ?? FALLBACK_COLOR
}

/** Built slugs — verified against contentIndex.json. Do not use raw vault paths.
 * Updated 2026-06-14 to the 6 requested nodes (normalized to match internal slugs:
 * spaces/commas/punctuation → -, & → --and-- etc., consistent with existing SPINE_HUBS).
 * The 6 hubs are spread horizontally via explicit positioning (see graph.inline.ts),
 * while keeping all other structure (Y band offsets in this order, domain coloring,
 * satellite selection, 3-tier, outline links, zoom, etc.).
 */
export const SPINE_HUBS = [
  "wiki/Syntheses/Learning, Condensed",
  "wiki/Systems/AI & Agentic Systems/Claude Fable",
  "wiki/Dimensions/Self-Regulation",
  "wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment",
  "wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed",
  "wiki/Money/Money, Condensed",
] as const

export function graphLegendFromDomains(): { label: string; color: string }[] {
  return DOMAINS.map(({ label, color }) => ({ label, color }))
}

export function spineDomainsForGraph(): {
  id: string
  color: string
  prefixes: string[]
}[] {
  return SPINE_DOMAIN_ORDER.map((id) => {
    const domain = DOMAINS.find((d) => d.id === id)!
    return {
      id: domain.id,
      color: domain.color,
      prefixes: domain.prefixes.map((p) => `wiki/${slugifyPrefix(p)}`),
    }
  })
}

export function graphColorRulesFromDomains(): { prefix: string; color: string }[] {
  const rules: { prefix: string; color: string }[] = []
  for (const domain of DOMAINS) {
    for (const prefix of domain.prefixes) {
      rules.push({ prefix: `wiki/${slugifyPrefix(prefix)}`, color: domain.color })
    }
  }
  return rules
}