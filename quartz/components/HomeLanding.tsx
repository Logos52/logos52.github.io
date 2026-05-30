import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import { getDate } from "./Date"
import { classNames } from "../util/lang"
// @ts-ignore
import graphScript from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

type Pick = { match: string; blurb: string }
type Topic = { folder: string; name: string; icon: string; color: string }
type Group = { label: string; topics: Topic[] }

const startPicks: Pick[] = [
  { match: "ICS", blurb: "The backbone learning method everything else hangs off." },
  { match: "Curvilinear", blurb: "How feeds are engineered to erase your stopping points." },
  { match: "Minimalism as Systems", blurb: "Objects keep costing you long after the purchase." },
]

const groups: Group[] = [
  {
    label: "Frameworks",
    topics: [
      { folder: "Dimensions", name: "Dimensions", icon: "ti-stack-2", color: "#7c5cff" },
      { folder: "Concepts", name: "Concepts", icon: "ti-bulb", color: "#3f7fd6" },
      { folder: "Syntheses", name: "Syntheses", icon: "ti-git-merge", color: "#6d4dff" },
      { folder: "Systems", name: "Systems", icon: "ti-topology-ring", color: "#1f9e86" },
    ],
  },
  {
    label: "Practice",
    topics: [
      { folder: "Self-Management", name: "Self-Management", icon: "ti-target-arrow", color: "#c25588" },
      { folder: "Decision-Making", name: "Decision-Making", icon: "ti-arrows-split-2", color: "#cf6336" },
      { folder: "Workflows", name: "Workflows", icon: "ti-route", color: "#6f9a2e" },
      { folder: "Language", name: "Language", icon: "ti-language", color: "#c98a2a" },
    ],
  },
  {
    label: "Reference",
    topics: [
      { folder: "Minimalism", name: "Minimalism", icon: "ti-square-rounded", color: "#7e7c76" },
      { folder: "Books", name: "Books", icon: "ti-book", color: "#1f8f74" },
      { folder: "Learning-Craft", name: "Learning Craft", icon: "ti-school", color: "#3f7fd6" },
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
  colorRules: [
    { prefix: "wiki/Dimensions/", color: "#b968ff" },
    { prefix: "wiki/Concepts/", color: "#4f9dff" },
    { prefix: "wiki/Syntheses/", color: "#e36bf0" },
    { prefix: "wiki/Systems/", color: "#1fc7a0" },
    { prefix: "wiki/Self-Management/", color: "#ff6fa3" },
    { prefix: "wiki/Decision-Making/", color: "#ff8a3d" },
    { prefix: "wiki/Workflows/", color: "#9bd62a" },
    { prefix: "wiki/Language/", color: "#ffb000" },
    { prefix: "wiki/Minimalism/", color: "#9aa0a6" },
    { prefix: "wiki/Red-Team/", color: "#ff4d4d" },
    { prefix: "wiki/Books/", color: "#00e5c3" },
    { prefix: "wiki/Techniques/", color: "#00a7ff" },
    { prefix: "wiki/Resources/", color: "#ffd166" },
    { prefix: "wiki/Learning-Craft/", color: "#7c8cff" },
  ],
}

const HomeLanding: QuartzComponent = (props: QuartzComponentProps) => {
  const { allFiles, fileData, cfg, displayClass } = props
  const here = fileData.slug!

  const counts = new Map<string, number>()
  for (const f of allFiles) {
    const m = /^wiki\/([^/]+)\//.exec(f.slug ?? "")
    if (m) counts.set(m[1], (counts.get(m[1]) ?? 0) + 1)
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
              {g.topics.map((t) => (
                <a class="home-topic" href={resolveRelative(here, `wiki/${t.folder}` as SimpleSlug)}>
                  <i class={`ti ${t.icon} home-topic-icon`} style={`color:${t.color}`} aria-hidden="true"></i>
                  <span class="home-topic-name">{t.name}</span>
                  <span class="home-topic-count">{counts.get(t.folder) ?? 0}</span>
                </a>
              ))}
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
