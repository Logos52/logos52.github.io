import { FullSlug, resolveRelative, simplifySlug } from "../../util/path"

type ContentEntry = {
  title?: string
  date?: string
}

type ColorRule = { prefix: string; color: string }

function utcDayOfYear(date = new Date()): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  return Math.floor(
    (Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start) /
      86400000,
  )
}

function colorForSlug(slug: string, rules: ColorRule[]): string {
  return rules.find((r) => slug.startsWith(r.prefix))?.color ?? "#6f6875"
}

async function renderRetrieval() {
  const block = document.querySelector<HTMLElement>(".atlas-retrieval")
  const slot = block?.querySelector<HTMLElement>(".atlas-retrieval-slot")
  if (!block || !slot) return

  const rules: ColorRule[] = JSON.parse(block.dataset.domainRules ?? "[]")
  const here = (document.body.getAttribute("data-slug") ?? "index") as FullSlug
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000

  const data = (await fetchData) as Record<string, ContentEntry>
  const candidates = Object.entries(data)
    .filter(([slug, details]) => {
      const simple = simplifySlug(slug as FullSlug)
      if (!simple.startsWith("wiki/")) return false
      if (simple.endsWith("/index") || simple === "wiki/index") return false
      if (!details.date) return false
      const modified = new Date(details.date).getTime()
      return !Number.isNaN(modified) && modified <= thirtyDaysAgo
    })
    .sort(([a], [b]) => a.localeCompare(b))

  if (candidates.length === 0) {
    const strip = block.closest(".atlas-strip")
    block.remove()
    if (strip && !strip.querySelector(".atlas-open-questions")) {
      strip.remove()
    }
    return
  }

  const pick = candidates[utcDayOfYear() % candidates.length]
  const [slug, details] = pick
  const simpleSlug = simplifySlug(slug as FullSlug)
  const href = resolveRelative(here, simpleSlug)
  const accent = colorForSlug(simpleSlug, rules)
  const title = details.title ?? simpleSlug

  const link = document.createElement("a")
  link.className = "atlas-retrieval-link"
  link.href = href
  link.style.borderLeftColor = accent
  link.textContent = title

  const hint = document.createElement("p")
  hint.className = "atlas-retrieval-hint"
  hint.textContent = "untouched 30+ days — reconstruct it before you click."

  slot.replaceChildren(link, hint)
}

document.addEventListener("nav", () => {
  void renderRetrieval()
})