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
          Maintained in the open — partly by LLM agents, under a fixed operating contract.
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
    </div>
  )
}

HomeLanding.css = graphStyle
HomeLanding.afterDOMLoaded = concatenateResources(graphScript, retrievalScript)

export default (() => HomeLanding) satisfies QuartzComponentConstructor