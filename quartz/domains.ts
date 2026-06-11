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
    color: "#b968ff",
    prefixes: ["Dimensions/", "Syntheses/", "Techniques/", "Learning Craft/"],
  },
  {
    id: "agentic",
    label: "Agentic",
    color: "#4f9dff",
    prefixes: ["Systems/", "Workflows/"],
  },
  {
    id: "concepts",
    label: "Concepts",
    color: "#9aa4ff",
    prefixes: ["Concepts/"],
  },
  {
    id: "focus",
    label: "Focus",
    color: "#ff6fa3",
    prefixes: ["Self Management/"],
  },
  {
    id: "decisions",
    label: "Decisions",
    color: "#ff8a3d",
    prefixes: ["Decision Making/"],
  },
  {
    id: "redteam",
    label: "Red team",
    color: "#ff4d4d",
    prefixes: ["Red Team/"],
  },
  {
    id: "language",
    label: "Language",
    color: "#ffb000",
    prefixes: ["Language/", "Resources/"],
  },
  {
    id: "minimalism",
    label: "Minimalism",
    color: "#9aa0a6",
    prefixes: ["Minimalism/"],
  },
  {
    id: "money",
    label: "Money",
    color: "#2fa36b",
    prefixes: ["Money/"],
  },
  {
    id: "reference",
    label: "Reference",
    color: "#88c4b7",
    prefixes: ["Books/", "Experiences/", "Domains/"],
  },
]

/** Fixed spine order (H3). */
export const SPINE_DOMAIN_ORDER = [
  "learning",
  "focus",
  "concepts",
  "agentic",
  "decisions",
  "redteam",
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

/** Built slugs — verified against contentIndex.json. Do not use raw vault paths. */
export const SPINE_HUBS = [
  "wiki/Syntheses/First-Principles-of-ICS",
  "wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering",
  "wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block",
  "wiki/Minimalism/Minimalism-as-Systems-Design",
  "wiki/Money/Investing-and-Budgeting-Mindsets",
  "wiki/Language/Chinese/How-Chinese-Characters-Work",
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