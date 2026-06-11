import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import { getDate } from "./Date"
import { classNames } from "../util/lang"
// @ts-ignore
import graphScript from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"
import { graphColorRulesFromDomains } from "../domains"

type Pick = { match: string; blurb: string }
type Topic = { name: string; tag: string; icon: string; color: string }
type Group = { label: string; topics: Topic[] }

const startPicks: Pick[] = [
  { match: "ICS", blurb: "The backbone learning method everything else hangs off." },
  { match: "Curvilinear", blurb: "How feeds are engineered to erase your stopping points." },
  { match: "Minimalism as Systems", blurb: "Objects keep costing you long after the purchase." },
]

// Curated taxonomy. Each item links to its tag page; counts come from how many
// notes carry that tag (live), so empty/aspirational areas honestly read low.
const groups: Group[] = [
  {
    label: "Learning Dimensions",
    topics: [
      { name: "Deep processing", tag: "deep-processing", icon: "ti-affiliate", color: "#8dc63f" },
      { name: "Self-regulation", tag: "self-regulation", icon: "ti-steering-wheel", color: "#f47b20" },
      { name: "Self-management", tag: "self-management", icon: "ti-settings", color: "#2d9cdb" },
      { name: "Mindset", tag: "mindset", icon: "ti-brain", color: "#3fc1b0" },
      { name: "Retrieval", tag: "retrieval", icon: "ti-circle-arrow-up", color: "#f2c94c" },
    ],
  },
  {
    label: "Enablers",
    topics: [
      { name: "Health", tag: "health", icon: "ti-heartbeat", color: "#eb5757" },
      { name: "Sleep", tag: "sleep", icon: "ti-moon", color: "#6c5ce7" },
      { name: "Attention", tag: "attention", icon: "ti-target", color: "#f2994a" },
      { name: "Budgeting", tag: "budgeting", icon: "ti-wallet", color: "#27ae60" },
      { name: "Investing", tag: "investing", icon: "ti-chart-line", color: "#2f80ed" },
    ],
  },
  {
    label: "AI & Agents",
    topics: [
      { name: "Agentic Engineering", tag: "agents", icon: "ti-robot", color: "#9b51e0" },
      { name: "LLM Workflows", tag: "llm", icon: "ti-message-chatbot", color: "#2f80ed" },
      { name: "AI Tooling", tag: "tooling", icon: "ti-tools", color: "#56ccf2" },
      { name: "Knowledge Systems", tag: "learning-system", icon: "ti-network", color: "#1fae84" },
      { name: "Automation & Skills", tag: "skill-development", icon: "ti-bolt", color: "#eab308" },
    ],
  },
]

// Config for the embedded knowledge graph (mirrors the notes overview graph).
const graphCfg = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 0.9,
  repelForce: 1.3,
  centerForce: 0.05,
  linkDistance: 55,
  fontSize: 0.55,
  opacityScale: 1,
  showTags: false,
  removeTags: ["system"],
  focusOnHover: true,
  enableRadial: false,
  clusterForce: 0.5,
  filterPrefixes: ["wiki/"],
  nodeBaseRadius: 2,
  nodeLinkRadius: 1.18,
  nodeMaxRadius: 9.5,
  nodeRank: "degree",
  nodeLimit: 26,
  mobileNodeLimit: 16,
  colorRules: graphColorRulesFromDomains(),
}

const HomeLanding: QuartzComponent = (props: QuartzComponentProps) => {
  const { allFiles, fileData, cfg, displayClass } = props
  const here = fileData.slug!

  const tagCounts = new Map<string, number>()
  for (const f of allFiles) {
    for (const tag of f.frontmatter?.tags ?? []) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
    }
  }

  const recent = allFiles
    .filter((f) => {
      const s = f.slug ?? ""
      return (
        (s.startsWith("wiki/") || s.startsWith("journal/") || s.startsWith("blog/")) &&
        !s.endsWith("/index") &&
        getDate(cfg, f) !== undefined
      )
    })
    .sort((a, b) => getDate(cfg, b)!.getTime() - getDate(cfg, a)!.getTime())
    .slice(0, 5)

  const picks = startPicks
    .map((p) => ({
      ...p,
      page: allFiles.find(
        (f) =>
          (f.slug ?? "").startsWith("wiki/") &&
          (f.frontmatter?.title ?? "").toLowerCase().includes(p.match.toLowerCase()),
      ),
    }))
    .filter((p) => p.page)

  const sectionOf = (s: string) => {
    if (s.startsWith("journal/")) return "Journal"
    if (s.startsWith("blog/")) return "Blog"
    return (s.split("/")[1] ?? "").replace(/-/g, " ")
  }
  const fmtDate = (d: Date) =>
    d.toLocaleDateString(cfg.locale ?? "en-US", { month: "short", day: "numeric" })

  return (
    <div class={classNames(displayClass, "home-landing")}>
      <header class="home-hero">
        <h1 class="home-title">LLM knowledge base</h1>
        <p class="home-blurb">
          A second brain for <strong>learning systems and agentic engineering</strong>. Sources in,
          durable notes out — every pass leaves it a little more useful.
        </p>
      </header>

      <div class="home-row">
        <section class="home-recent">
          <div class="home-panel-head">
            <h2>Recently updated</h2>
            <a class="home-seeall" href={resolveRelative(here, "notes/index" as SimpleSlug)}>
              All notes →
            </a>
          </div>
          <ul>
            {recent.map((f) => (
              <li>
                <a class="home-link" href={resolveRelative(here, f.slug!)}>
                  {f.frontmatter?.title ?? f.slug}
                </a>
                <span class="home-recent-meta">
                  <span class="home-recent-section">{sectionOf(f.slug ?? "")}</span>
                  <span class="home-recent-date">{fmtDate(getDate(cfg, f)!)}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <aside class="home-graph">
          <h2>Knowledge graph</h2>
          <div class="graph home-graph-embed">
            <div class="graph-outer">
              <div
                class="graph-container"
                data-cfg={JSON.stringify({
                  ...graphCfg,
                  pinnedSlugs: [
                    ...picks.map((p) => p.page!.slug as string),
                    ...recent.map((f) => f.slug as string),
                  ],
                })}
              ></div>
            </div>
          </div>
        </aside>
      </div>

      <section class="home-start">
        <h2>Start here</h2>
        <ul class="home-start-list">
          {picks.map((p) => (
            <li>
              <a class="home-link home-start-title" href={resolveRelative(here, p.page!.slug!)}>
                {p.page!.frontmatter?.title}
              </a>
              <p class="home-start-blurb">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section class="home-topics">
        <h2>Browse by topic</h2>
        <div class="home-topic-cols">
          {groups.map((g) => (
            <div class="home-topic-col">
              <div class="home-topic-grouplabel">{g.label}</div>
              {g.topics.map((t) => {
                const n = tagCounts.get(t.tag) ?? 0
                return (
                  <a class="home-topic" href={resolveRelative(here, `tags/${t.tag}` as SimpleSlug)}>
                    <i class={`ti ${t.icon} home-topic-icon`} style={`color:${t.color}`} aria-hidden="true"></i>
                    <span class="home-topic-name">{t.name}</span>
                    {n > 0 && <span class="home-topic-count">{n}</span>}
                  </a>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

HomeLanding.css = graphStyle
HomeLanding.afterDOMLoaded = graphScript

export default (() => HomeLanding) satisfies QuartzComponentConstructor
