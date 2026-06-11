import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import { concatenateResources } from "../util/resources"
import Search from "./Search"
import {
  DOMAINS,
  SPINE_HUBS,
  colorOf,
  graphColorRulesFromDomains,
  spineDomainsForGraph,
} from "../domains"
// @ts-ignore
import graphScript from "./scripts/graph.inline"
// @ts-ignore
import retrievalScript from "./scripts/atlas-retrieval.inline"
import graphStyle from "./styles/graph.scss"

const spineGraphCfg = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 1,
  repelForce: 1,
  centerForce: 0.02,
  linkDistance: 55,
  fontSize: 0.55,
  opacityScale: 1,
  showTags: false,
  removeTags: ["system"],
  focusOnHover: true,
  enableRadial: false,
  filterPrefixes: ["wiki/"],
  nodeBaseRadius: 2,
  nodeLinkRadius: 1.18,
  nodeMaxRadius: 9.5,
  colorRules: graphColorRulesFromDomains(),
  spineLayout: true,
  hubSlugs: [...SPINE_HUBS],
  // Short display names for map landmarks — full page titles clip at the canvas edges.
  hubLabels: {
    "wiki/Syntheses/First-Principles-of-ICS": "ICS Learning",
    "wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering": "Agentic Engineering",
    "wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block":
      "Focus",
    "wiki/Minimalism/Minimalism-as-Systems-Design": "Minimalism",
    "wiki/Money/Investing-and-Budgeting-Mindsets": "Money",
    "wiki/Language/Chinese/How-Chinese-Characters-Work": "Chinese",
  },
  recentDays: 7,
  spineDomains: spineDomainsForGraph(),
}

const trails = [
  {
    title: "Learning systems",
    sub: "9 notes · the ICS core, start to finish",
    slug: "wiki/Syntheses/First Principles of ICS" as const,
    domainId: "learning",
  },
  {
    title: "Agentic engineering",
    sub: "7 notes · building with agents without losing taste",
    slug: "wiki/Systems/AI & Agentic Systems/Agentic Engineering" as const,
    domainId: "agentic",
  },
  {
    title: "Chinese characters",
    sub: "11 notes · the writing system, decoded in order",
    slug: "wiki/Language/Chinese/How Chinese Characters Work" as const,
    domainId: "language",
  },
  {
    title: "Attention & focus",
    sub: "8 notes · enter, hold, and recover focus",
    slug: "wiki/Self Management/Focus Management - How to Enter & Recover Inside a Work Block" as const,
    domainId: "focus",
  },
]

const AtlasSearch = Search({ placeholder: "Find a note…" })

/**
 * The core hex — five dimensions of learning + current focus domains.
 * Geometry is computed (perfect 60° spacing) and emitted as inline SVG so no
 * stylesheet can distort it. Items are config: swap a vertex in one line.
 * Counts: `tag` counts notes carrying the tag; `prefix` counts notes under a path.
 */
type HexItem = {
  label: string
  color: string
  slug: string
  tag?: string
  prefix?: string
}

const HEX_ITEMS: HexItem[] = [
  // vertex order: top, upper-right, lower-right, bottom, lower-left, upper-left
  { label: "Deep Processing", color: "#8dc63f", slug: "wiki/Dimensions/Deep-Processing", tag: "deep-processing" },
  { label: "Retrieval", color: "#f2c94c", slug: "wiki/Dimensions/Retrieval", tag: "retrieval" },
  { label: "Money", color: "#2fa36b", slug: "wiki/Money/Investing-and-Budgeting-Mindsets", prefix: "wiki/Money/" },
  { label: "Self-Management", color: "#2d9cdb", slug: "wiki/Dimensions/Self-Management", tag: "self-management" },
  { label: "Self-Regulation", color: "#f47b20", slug: "wiki/Dimensions/Self-Regulation", tag: "self-regulation" },
  { label: "Mindset", color: "#3fc1b0", slug: "wiki/Dimensions/Mindset", tag: "mindset" },
]

const HEX_CENTER: HexItem = {
  label: "中文",
  color: "#ffb000",
  slug: "wiki/Language/Chinese/How-Chinese-Characters-Work",
  prefix: "wiki/Language/Chinese/",
}

const HX = 170
const HY = 116
const HR = 80

const HomeLanding: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, displayClass, allFiles } = props
  const here = fileData.slug!

  const knownSlugs = new Set(allFiles.map((f) => f.slug))
  const missingHubs = SPINE_HUBS.filter((h) => !knownSlugs.has(h))
  if (missingHubs.length > 0) {
    console.warn(
      `[atlas spine] hub slug(s) missing from content index: ${missingHubs.join(", ")}`,
    )
  }

  const domainColor = (id: string) => DOMAINS.find((d) => d.id === id)?.color ?? colorOf(here)

  const journalIndex = allFiles.find((f) => f.slug === "journal/index")
  const openQuestions = (journalIndex?.frontmatter?.openQuestions as string[] | undefined) ?? []
  const showOpenQuestions = openQuestions.length > 0

  // --- core hex ---
  const tagCounts = new Map<string, number>()
  for (const f of allFiles) {
    for (const t of (f.frontmatter?.tags as string[] | undefined) ?? []) {
      tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)
    }
  }
  const hexCount = (it: HexItem): number =>
    it.tag
      ? (tagCounts.get(it.tag) ?? 0)
      : it.prefix
        ? allFiles.filter((f) => (f.slug ?? "").startsWith(it.prefix!)).length
        : 0

  const hexPts = HEX_ITEMS.map((it, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180
    return { ...it, x: HX + HR * Math.cos(a), y: HY + HR * Math.sin(a), cos: Math.cos(a), sin: Math.sin(a) }
  })
  const hexOutline = hexPts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")
  const hexInner = hexPts
    .map((p) => `${(HX + (p.x - HX) * 0.5).toFixed(1)},${(HY + (p.y - HY) * 0.5).toFixed(1)}`)
    .join(" ")
  const hexLabelPos = (p: { x: number; y: number; cos: number; sin: number }) =>
    p.cos > 0.35
      ? { anchor: "start", lx: p.x + 11, ly: p.y + 4 }
      : p.cos < -0.35
        ? { anchor: "end", lx: p.x - 11, ly: p.y + 4 }
        : { anchor: "middle", lx: p.x, ly: p.sin < 0 ? p.y - 13 : p.y + 23 }

  return (
    <div class={classNames(displayClass, "atlas-home")}>
      <header class="atlas-hero">
        <h1>A second brain for learning systems &amp; agentic engineering</h1>
        <p class="atlas-hero-sub">
          Maintained in the open, partly by LLM agents — the thinking stays mine.
        </p>
      </header>

      <div class="atlas-search-wrap">
        <AtlasSearch {...props} displayClass="atlas-search" />
      </div>

      <section class="atlas-graph-section">
        <div class="graph atlas-graph home-graph-embed">
          <div class="graph-outer">
            <div class="graph-container" data-cfg={JSON.stringify(spineGraphCfg)}></div>
          </div>
        </div>
        <div class="atlas-legend">
          {DOMAINS.map((d) => (
            <button
              type="button"
              class="atlas-legend-chip"
              data-domain-id={d.id}
              style={`border-color: ${d.color}; color: ${d.color}`}
            >
              {d.label}
            </button>
          ))}
          <span class="atlas-legend-hint">click a domain to filter · ring = updated this week</span>
        </div>
      </section>

      <section class={classNames("atlas-strip", !showOpenQuestions && "atlas-strip--solo")}>
          {showOpenQuestions && (
            <div class="atlas-open-questions">
              <h2>Open questions</h2>
              <ul class="atlas-question-list">
                {openQuestions.slice(0, 3).map((q) => (
                  <li class="atlas-question">{q}</li>
                ))}
              </ul>
              <a class="atlas-journal-link" href={resolveRelative(here, "journal" as SimpleSlug)}>
                → journal
              </a>
            </div>
          )}
          <div
            class="atlas-retrieval"
            data-domain-rules={JSON.stringify(graphColorRulesFromDomains())}
          >
            <h2>Today&apos;s retrieval</h2>
            <div class="atlas-retrieval-slot"></div>
          </div>
      </section>

      <section class="atlas-trails">
        <h2>Trails — guided paths through the wiki</h2>
        <div class="atlas-trail-grid">
          {trails.map((t) => (
            <a
              class="atlas-trail-card"
              href={resolveRelative(here, t.slug as SimpleSlug)}
              style={`border-left-color: ${domainColor(t.domainId)}`}
            >
              <span class="atlas-trail-title">{t.title}</span>
              <span class="atlas-trail-sub">{t.sub}</span>
            </a>
          ))}
        </div>
      </section>

      <section class="atlas-hex">
        <h2>
          The core hex{" "}
          <a
            class="atlas-hex-hublink"
            href={resolveRelative(here, "wiki/Dimensions/Dimensions-of-Learning" as SimpleSlug)}
          >
            — five dimensions of learning, plus what matters right now →
          </a>
        </h2>
        <div class="atlas-hex-row">
          <div class="atlas-hex-card atlas-hex-figure">
            <svg
              viewBox="0 0 340 232"
              role="img"
              aria-label="Hexagon: the five dimensions of learning and Money at the vertices, 中文 at the center"
            >
              <polygon points={hexOutline} fill="none" stroke="var(--lightgray)" stroke-width="1" />
              <polygon points={hexInner} fill="none" stroke="var(--highlight)" stroke-width="1" />
              {hexPts.map((p) => (
                <line
                  x1={p.x.toFixed(1)}
                  y1={p.y.toFixed(1)}
                  x2={HX}
                  y2={HY}
                  stroke="var(--highlight)"
                  stroke-width="1"
                />
              ))}
              {hexPts.map((p) => {
                const l = hexLabelPos(p)
                return (
                  <a href={resolveRelative(here, p.slug as SimpleSlug)}>
                    <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="6" fill={p.color} />
                    <text
                      x={l.lx.toFixed(1)}
                      y={l.ly.toFixed(1)}
                      text-anchor={l.anchor}
                      font-size="10"
                      fill="var(--darkgray)"
                      style="font-family: var(--codeFont); letter-spacing: 0.04em"
                    >
                      {p.label}
                    </text>
                  </a>
                )
              })}
              <a href={resolveRelative(here, HEX_CENTER.slug as SimpleSlug)}>
                <circle cx={HX} cy={HY} r="15" fill={HEX_CENTER.color} />
                <text
                  x={HX}
                  y={HY + 4}
                  text-anchor="middle"
                  font-size="11"
                  fill="#1c1a20"
                  style="font-family: var(--codeFont)"
                >
                  {HEX_CENTER.label}
                </text>
              </a>
            </svg>
          </div>
          <div class="atlas-hex-card atlas-hex-list">
            {[...HEX_ITEMS, HEX_CENTER].map((it) => (
              <a class="atlas-hex-item" href={resolveRelative(here, it.slug as SimpleSlug)}>
                <span class="atlas-hex-dot" style={`background: ${it.color}`}></span>
                <span class="atlas-hex-label">{it.label}</span>
                <span class="atlas-hex-count">{hexCount(it)} notes</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

HomeLanding.css = graphStyle
HomeLanding.afterDOMLoaded = concatenateResources(graphScript, retrievalScript)

export default (() => HomeLanding) satisfies QuartzComponentConstructor