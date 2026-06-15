import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { graphColorRulesFromDomains, graphLegendFromDomains, SPINE_HUBS } from "./quartz/domains"

// Landmarks for the Notes index graph (Knowledge Base Index / notes/index).
// Uses the verified SPINE_HUBS (6 primaries) so the starting strings are the canonical set.
// Runtime aug in graph.inline.ts does title/short-name norm matching against the actual built contentIndex
// keys, so even small slugification diffs are rescued (same pattern that stabilized the home spine).
// These 6 become the "primary" tier: large radius, domain color, colored ring, persistent labels (flagShowLabel).
// 3-tier + caps: see notesOverviewGraph below + IMPORTANT_DEGREE_THRESHOLD / maxLinksPerNode in graph script.
const notesFlagHubs = [...SPINE_HUBS]

/**
 * Logos52 — Layout configuration (Living Atlas)
 */

const graphLegend = graphLegendFromDomains()
const graphColorRules = graphColorRulesFromDomains()

const wikiGraphBase = {
  drag: true,
  zoom: true,
  opacityScale: 1,
  showTags: false,
  removeTags: ["system"],
  focusOnHover: true,
  enableRadial: true,
  filterPrefixes: ["wiki/"],
  colorRules: graphColorRules,
}

const wikiOverviewGraph = {
  ...wikiGraphBase,
  depth: -1,
  scale: 0.9,
  repelForce: 0.65,
  centerForce: 0.25,
  linkDistance: 42,
  fontSize: 0.6,
}

const notesOverviewGraph = {
  ...wikiOverviewGraph,
  flagSlugs: notesFlagHubs,
  // No persistent labels on the flagged nodes for the Notes Graph (user request).
  // The 6 are still visually distinguished (larger radius, domain color, colored ring)
  // via the isFlag / simplifiedFlagSlugs logic, but labels are hidden by default
  // (appear on hover or very high zoom per other logic).
  flagLabels: {
    "wiki/Syntheses/Learning, Condensed": "Learning, Condensed",
    "wiki/Systems/AI & Agentic Systems/Claude Fable": "Claude Fable",
    "wiki/Dimensions/Self-Regulation": "Self Regulation",
    "wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment": "Higher Order Generativity vs. Higher Order Judgment",
    "wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed": "Agentic Engineering, Condensed",
    "wiki/Money/Money, Condensed": "Money, Condensed",
  },
  flagShowLabel: false,  // no persistent text names on flagged nodes in the notes graph
  fontSize: 0.62,
  nodeBaseRadius: 1.5,
  nodeLinkRadius: 0.9,
  nodeMaxRadius: 6.5,
  nodeRank: "content-heavy" as const,  // mix: still favors high-content notes (many of which are low-deg gray) but we'll de-emphasize raw degree influence below for notes
  nodeLimit: 200,  // larger overall node count (user likes the volume); with fill logic this gives lots more gray bottom-tier
  mobileNodeLimit: 60,
  maxLinksPerNode: 3,  // global per-node link cap (main lever to cut sheer #links / "blob" while keeping lots of nodes + 3-tier radii). 3 or 2 works well.

  enableRadial: false,
  clusterForce: 0.38,   // lower still for flatter notes graph
  centerForce: 0.07,    // stronger centering
  repelForce: 0.75,
  linkDistance: 48,
  scale: 0.85,
}

const wikiPageLocalGraph = {
  ...wikiGraphBase,
  depth: 1,
  scale: 1.1,
  repelForce: 0.5,
  centerForce: 0.3,
  linkDistance: 30,
  fontSize: 0.6,
}

const wikiPageGlobalGraph = {
  ...wikiGraphBase,
  depth: -1,
  scale: 0.9,
  repelForce: 0.5,
  centerForce: 0.3,
  linkDistance: 30,
  fontSize: 0.6,
}

const NotesGraph = Component.Graph({
  title: "Knowledge Graph",
  containerClass: "notes-graph",
  legend: graphLegend,
  localGraph: notesOverviewGraph,
  globalGraph: notesOverviewGraph,
})

const WikiLocalGraph = Component.Graph({
  containerClass: "margin-graph",
  localGraph: wikiPageLocalGraph,
  globalGraph: wikiPageGlobalGraph,
})

/** Index-style pages: no article chrome, no margin column. */
const isChromeFreePage = (slug?: string) =>
  slug === "index" ||
  slug === "journal/index" ||
  slug === "notes/index" ||
  slug === "projects/index" ||
  slug === "tags" ||
  Boolean(slug?.startsWith("tags/"))

const hideArticleChrome = (slug?: string) =>
  isChromeFreePage(slug) || slug === "journal/index"

const showMarginNotes = (slug?: string) => Boolean(slug && !isChromeFreePage(slug))

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.SiteNav(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.LearningRadar(),
      condition: ({ fileData }) => fileData.slug === "mg-kolbs-template",
    }),
    Component.ConditionalRender({
      component: Component.ProjectsGallery(),
      condition: ({ fileData }) => fileData.slug === "projects/index",
    }),
    Component.ConditionalRender({
      component: Component.JournalSpread(),
      condition: ({ fileData }) => fileData.slug === "journal/index",
    }),
    Component.ConditionalRender({
      component: Component.DimensionsPentagon({ showList: false, showHeading: false }),
      condition: ({ fileData }) => fileData.slug === "wiki/Dimensions/Dimensions-of-Learning",
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/logos52/logos52.github.io",
      About: "/about",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: ({ fileData }) => !hideArticleChrome(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: ({ fileData }) => !hideArticleChrome(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: ({ fileData }) => !hideArticleChrome(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.DomainAccent(),
      condition: ({ fileData }) => !hideArticleChrome(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: ({ fileData }) => !hideArticleChrome(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.HomeLanding(),
      condition: ({ fileData }) => fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: NotesGraph,
      condition: ({ fileData }) => fileData.slug === "notes/index",
    }),
  ],
  left: [],
  right: [
    Component.ConditionalRender({
      component: WikiLocalGraph,
      condition: ({ fileData }) =>
        showMarginNotes(fileData.slug) && Boolean(fileData.slug?.startsWith("wiki/")),
    }),
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: ({ fileData }) => showMarginNotes(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: ({ fileData }) => showMarginNotes(fileData.slug),
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: ({ fileData }) => fileData.slug !== "journal/index",
    }),
    Component.ConditionalRender({
      component: NotesGraph,
      condition: ({ fileData }) => fileData.slug === "notes/index",
    }),
  ],
  left: [],
  right: [
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: ({ fileData }) => showMarginNotes(fileData.slug),
    }),
  ],
}