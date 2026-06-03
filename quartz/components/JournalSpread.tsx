import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { htmlToJsx } from "../util/jsx"
import { toString } from "hast-util-to-string"
import { classNames } from "../util/lang"
// @ts-ignore
import graphScript from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

/**
 * JournalSpread — renders the journal index as a modular "overview" spread.
 *
 * Reads the page's own markdown (the article tree) and turns each H2 section
 * into a card, so the journal stays normal markdown you edit in Obsidian.
 * A "Working on" section, if present, gets the wide left slot; the live
 * "Current Focus Nodes" graph sits top-right; the rest flow as cards.
 */

// Curated, high-value / actively-worked nodes. The graph component is extended
// with `includeSlugs` (an allowlist) so the live Quartz graph shows exactly these.
const FOCUS_SLUGS = [
  "wiki/Dimensions/Dimensions-of-Learning",
  "wiki/Dimensions/Deep-Processing",
  "wiki/Dimensions/Self-Regulation",
  "wiki/Dimensions/Self-Management",
  "wiki/Dimensions/Mindset",
  "wiki/Dimensions/Retrieval",
  "wiki/Syntheses/First-Principles-of-ICS",
  "wiki/Syntheses/Minimally-Viable-Learning-System",
  "wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering",
  "wiki/Minimalism/Minimalism-as-Systems-Design",
  "wiki/Workflows/Knowledge-Base-as-Thinking-Partner",
  "wiki/Language/Refold-Language-Learning-System",
  "wiki/Decision-Making/Decision-Making",
]

const focusGraphCfg = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 0.85,
  repelForce: 1.0,
  centerForce: 0.13,
  linkDistance: 70,
  fontSize: 0.55,
  opacityScale: 1,
  showTags: false,
  removeTags: ["system"],
  focusOnHover: true,
  enableRadial: false,
  includeSlugs: FOCUS_SLUGS,
  nodeBaseRadius: 3,
  nodeLinkRadius: 1.5,
  nodeMaxRadius: 10,
  colorRules: [
    { prefix: "wiki/Dimensions/", color: "#b968ff" },
    { prefix: "wiki/Syntheses/", color: "#e36bf0" },
    { prefix: "wiki/Systems/", color: "#4f9dff" },
    { prefix: "wiki/Minimalism/", color: "#9aa0a6" },
    { prefix: "wiki/Workflows/", color: "#9bd62a" },
    { prefix: "wiki/Language/", color: "#ffb000" },
    { prefix: "wiki/Decision-Making/", color: "#ff8a3d" },
  ],
}

type Section = { title: string; body: any[] }

const JournalSpread: QuartzComponent = ({ fileData, tree, displayClass }: QuartzComponentProps) => {
  const root = tree as any
  const children = [...(root?.children ?? [])]

  // drop the leading H1 (the page title) — JournalSpread renders its own header
  const h1i = children.findIndex((c: any) => c.type === "element" && c.tagName === "h1")
  if (h1i !== -1) children.splice(h1i, 1)

  // split into a lead (before the first H2) + one section per H2
  const lead: any[] = []
  const sections: Section[] = []
  let cur: Section | null = null
  for (const node of children) {
    if (node.type === "element" && node.tagName === "h2") {
      cur = { title: toString(node), body: [] }
      sections.push(cur)
    } else if (cur) {
      cur.body.push(node)
    } else {
      lead.push(node)
    }
  }

  const fp = fileData.filePath!
  const render = (nodes: any[]) => htmlToJsx(fp, { type: "root", children: nodes } as any)
  // the first section is the wide "top of mind" card; the rest flow as modular cards
  const working = sections[0]
  const rest = sections.slice(1)

  return (
    <div class={classNames(displayClass, "journal-spread")}>
      <header class="js-head">
        <h1>{String(fileData.frontmatter?.title ?? "Journal")}</h1>
        {lead.length > 0 && <div class="js-lead">{render(lead)}</div>}
      </header>

      <div class="js-top">
        {working && (
          <section class="card js-working">
            <h2>{working.title}</h2>
            {render(working.body)}
          </section>
        )}
        <section class="card js-graph">
          <h2>Current Focus Nodes</h2>
          <div class="graph">
            <div class="graph-outer">
              <div class="graph-container" data-cfg={JSON.stringify(focusGraphCfg)}></div>
            </div>
          </div>
        </section>
      </div>

      <div class="js-cards">
        {rest.map((s) => (
          <section class="card">
            <h2>{s.title}</h2>
            {render(s.body)}
          </section>
        ))}
      </div>
    </div>
  )
}

JournalSpread.css =
  graphStyle +
  `
.journal-spread .js-head h1{font-size:1.9rem;margin:0 0 4px;color:var(--dark);letter-spacing:-.01em;}
.journal-spread .js-lead{color:var(--gray);font-size:.95rem;margin:0 0 18px;}
.journal-spread .js-lead p{margin:0;}

.journal-spread .js-top{display:grid;grid-template-columns:1.7fr 1fr;gap:16px;margin-bottom:16px;}
@media all and (max-width:800px){ .journal-spread .js-top{grid-template-columns:1fr;} }

.journal-spread .card{
  background:var(--surface);
  border:1px solid color-mix(in srgb, var(--gray) 24%, var(--lightgray));
  border-radius:12px;
  padding:14px 16px;
  box-shadow:var(--soft-shadow);
}
.journal-spread .card > h2{
  font-size:.78rem;margin:0 0 9px;color:var(--gray);
  font-family:var(--codeFont);font-weight:600;letter-spacing:.06em;text-transform:uppercase;
  border:0;padding:0;
}
.journal-spread .card :is(p,ul,ol){margin:.35rem 0;}
.journal-spread .card ul,.journal-spread .card ol{padding-left:1.15rem;}
.journal-spread .card li{margin:.2rem 0;line-height:1.5;}
.journal-spread .card li::marker{color:var(--secondary);}

.journal-spread .js-working{align-self:start;padding:16px 18px;}
.journal-spread .js-working li{margin:.5rem 0;line-height:1.6;}

.journal-spread .js-graph .graph{margin:0;}
.journal-spread .js-graph .graph-outer{height:240px;border:0;background:transparent;}

.journal-spread .js-cards{column-count:2;column-gap:16px;margin-top:2px;}
@media all and (max-width:560px){ .journal-spread .js-cards{column-count:1;} }
.journal-spread .js-cards .card{break-inside:avoid;margin-bottom:16px;}
`

JournalSpread.afterDOMLoaded = graphScript

export default (() => JournalSpread) satisfies QuartzComponentConstructor
