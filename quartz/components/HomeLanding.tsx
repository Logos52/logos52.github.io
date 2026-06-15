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
// Note: DimensionsPentagon is still used on the dedicated /wiki/Dimensions/... page via layout,
// so the component + script remain in the project. We just no longer render it on the home.

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
    "wiki/Syntheses/Learning, Condensed": "Learning, Condensed",
    "wiki/Systems/AI & Agentic Systems/Claude Fable": "Claude Fable",
    "wiki/Dimensions/Self-Regulation": "Self Regulation",
    "wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment": "Higher Order Generativity vs. Higher Order Judgment",
    "wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed": "Agentic Engineering, Condensed",
    "wiki/Money/Money, Condensed": "Money, Condensed",
  },
  recentDays: 7,
  spineDomains: spineDomainsForGraph(),
  // Exclude this high-degree node from the home graph entirely (it was dominating the
  // satellite selection around the Learning hub and made the visual too cluttered).
  // Using both possible slug forms for robustness.
  // (User request 2026-06-14)
  excludeSlugs: ["wiki/ICS Program Map", "wiki/ICS-Program-Map"],
}

// Built slugs — verified against contentIndex.json. Raw vault paths break here.
const trails = [
  {
    title: "Learning systems",
    sub: "9 notes · the ICS core, start to finish",
    slug: "wiki/Syntheses/First-Principles-of-ICS" as const,
    domainId: "learning",
  },
  {
    title: "Agentic engineering",
    sub: "7 notes · building with agents without losing taste",
    slug: "wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering" as const,
    domainId: "agentic",
  },
  {
    title: "Chinese characters",
    sub: "11 notes · the writing system, decoded in order",
    slug: "wiki/Language/Chinese/How-Chinese-Characters-Work" as const,
    domainId: "language",
  },
  {
    title: "Attention & focus",
    sub: "8 notes · enter, hold, and recover focus",
    slug: "wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block" as const,
    domainId: "focus",
  },
]

const AtlasSearch = Search({ placeholder: "Find a note…" })
// New 3×5 hub sets to replace the old pentagon visualization on the home.
// Clean cards in the same style as the "Trails" (right-side aesthetic the user liked).
// Set 1 = the canonical five learning dimensions.
// Set 2 = practical life / operating hubs (per user request).
// Set 3 = high-leverage knowledge & execution hubs.
const dimensionHubs = [
  { title: "Deep Processing", sub: "encode, think on paper, bear hunter", slug: "wiki/Dimensions/Deep-Processing" as const, color: "#8dc63f" },
  { title: "Retrieval", sub: "pull it back, spaced & interleaved", slug: "wiki/Dimensions/Retrieval" as const, color: "#f2c94c" },
  { title: "Self-Regulation", sub: "drive, persistence, emotion", slug: "wiki/Dimensions/Self-Regulation" as const, color: "#f47b20" },
  { title: "Self-Management", sub: "time, environment, focus blocks", slug: "wiki/Dimensions/Self-Management" as const, color: "#2d9cdb" },
  { title: "Mindset", sub: "beliefs that make the system work", slug: "wiki/Dimensions/Mindset" as const, color: "#3fc1b0" },
]

const lifeHubs = [
  { title: "Health", sub: "body, energy, sustainability", slug: "wiki/Dimensions/Self-Management" as const, color: "#2fa36b" },
  { title: "Money", sub: "mindsets & budgeting systems", slug: "wiki/Money/Money, Condensed" as const, color: "#2fa36b" },
  { title: "中文", sub: "characters, reading, fluency", slug: "wiki/Language/Chinese/How-Chinese-Characters-Work" as const, color: "#ffb000" },
  { title: "Minimalism", sub: "systems design for less", slug: "wiki/Minimalism/Minimalism-as-Systems-Design" as const, color: "#9aa0a6" },
  { title: "Condensed Notes", sub: "high-signal syntheses", slug: "wiki/Syntheses/Learning, Condensed" as const, color: "#734bb2" },
]

const executionHubs = [
  { title: "Agentic Engineering", sub: "build & delegate with agents", slug: "wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering" as const, color: "#4f9dff" },
  { title: "Learning Systems", sub: "ICS core, first principles", slug: "wiki/Syntheses/First-Principles-of-ICS" as const, color: "#8dc63f" },
  { title: "Focus Management", sub: "enter, hold, recover attention", slug: "wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block" as const, color: "#ff6fa3" },
  { title: "Decision Making", sub: "high-quality choices", slug: "wiki/Decision-Making/Decision-Making" as const, color: "#ff8a3d" },
  { title: "Generativity", sub: "higher-order thinking & judgment", slug: "wiki/Concepts/Higher-Order-Generativity-vs-Higher-Order-Judgment" as const, color: "#7f55a0" },
]

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

  return (
    <div class={classNames(displayClass, "atlas-home")}>
      <header class="atlas-hero">
        <h1>A second brain for learning systems &amp; agentic engineering</h1>
        <p class="atlas-hero-sub">
          Linked notes on learning systems, language study, and software work with LLM agents.
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
        <h2>Trails</h2>
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

      {/* 3 cards side-by-side (3x1 layout). Each card is one group with a list of exactly 5 hubs inside.
          This replaces the old pentagon graph. Styled to feel like the trail cards on the right. */}
      <section class="atlas-hub-lists">
        <div class="hub-cards-3">
          {/* Set 1: the five learning dimensions */}
          <div class="hub-list-card">
            <div class="hub-list-card-title">Five Dimensions</div>
            <ul class="hub-list">
              {dimensionHubs.map((h) => (
                <li key={h.slug}>
                  <span class="hub-dot" style={{ background: h.color }}></span>
                  <a href={resolveRelative(here, h.slug)}>{h.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Set 2: as specified */}
          <div class="hub-list-card">
            <div class="hub-list-card-title">Life Systems</div>
            <ul class="hub-list">
              {lifeHubs.map((h) => (
                <li key={h.slug}>
                  <span class="hub-dot" style={{ background: h.color }}></span>
                  <a href={resolveRelative(here, h.slug)}>{h.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Set 3: high-leverage companion hubs (syntheses + execution). Adjust if you want a different 5. */}
          <div class="hub-list-card">
            <div class="hub-list-card-title">Knowledge & Execution</div>
            <ul class="hub-list">
              {executionHubs.map((h) => (
                <li key={h.slug}>
                  <span class="hub-dot" style={{ background: h.color }}></span>
                  <a href={resolveRelative(here, h.slug)}>{h.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

HomeLanding.css = graphStyle
HomeLanding.afterDOMLoaded = concatenateResources(graphScript, retrievalScript)

export default (() => HomeLanding) satisfies QuartzComponentConstructor