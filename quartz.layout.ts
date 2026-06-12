import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { graphColorRulesFromDomains, graphLegendFromDomains, SPINE_HUBS } from "./quartz/domains"

// The four domain "centers of mass" flagged on the Notes graph: learning (ICS),
// agentic (Agentic-Engineering), focus (Focus-Management), language (Chinese chars).
// Derived from the verified SPINE_HUBS so the slugs always match contentIndex.json.
const notesFlagHubs = SPINE_HUBS.filter(
  (s) => !s.includes("/Minimalism/") && !s.includes("/Money/"),
)

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
  flagRadius: 8,
  fontSize: 0.62,
  nodeBaseRadius: 2,
  nodeLinkRadius: 1.18,
  nodeMaxRadius: 9.5,
  nodeRank: "content-heavy" as const,
  nodeLimit: 180,
  mobileNodeLimit: 80,
  enableRadial: false,
  clusterForce: 0.5,
  centerForce: 0.04,
  repelForce: 0.82,
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