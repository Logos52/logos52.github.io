import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Logos52 — Layout configuration
 *
 * The site uses a small global navigation bar for the blog, knowledge base home,
 * and about page. The standard Quartz sidebars remain
 * available for browsing the knowledge base.
 */

// components shared across all pages
const graphLegend = [
  { label: "Techniques", color: "#00a7ff" },
  { label: "ICS / Learning", color: "#b968ff" },
  { label: "Language", color: "#ffb000" },
  { label: "Decision Making", color: "#ff7a1a" },
  { label: "Minimalism", color: "black-white" },
  { label: "Red Team", color: "#ff3b5c" },
  { label: "Books", color: "#00e5c3" },
  { label: "Concepts", color: "#9aa4ff" },
  { label: "Workflows", color: "#b8ff2c" },
]

const graphColorRules = [
  { prefix: "wiki/Techniques/", color: "#00a7ff" },
  { prefix: "wiki/Syntheses/ICS-System", color: "#b968ff" },
  { prefix: "wiki/Dimensions/", color: "#b968ff" },
  { prefix: "wiki/Self-Management/", color: "#b968ff" },
  { prefix: "wiki/Language/", color: "#ffb000" },
  { prefix: "wiki/Resources/", color: "#ffb000" },
  { prefix: "wiki/Decision-Making/", color: "#ff7a1a" },
  { prefix: "wiki/Minimalism/", color: "black-white" },
  { prefix: "wiki/Red-Team/", color: "#ff3b5c" },
  { prefix: "wiki/Books/", color: "#00e5c3" },
  { prefix: "wiki/Concepts/", color: "#9aa4ff" },
  { prefix: "wiki/Workflows/", color: "#b8ff2c" },
]

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
  fontSize: 0.62,
  nodeBaseRadius: 2,
  nodeLinkRadius: 1.18,
  nodeMaxRadius: 9.5,
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

const PublicExplorer = Component.Explorer({
  title: "Browse",
  folderDefaultState: "open",
  folderClickBehavior: "collapse",
  useSavedState: true,
  filterFn: (node) =>
    ![
      "tags",
      "00-Command-Center",
      "AGENTS",
      "README",
      "log",
      "notes",
    ].includes(node.slugSegment),
})

const WikiOverviewGraph = Component.Graph({
  localGraph: wikiOverviewGraph,
  globalGraph: wikiOverviewGraph,
})

const WikiLocalGraph = Component.Graph({
  localGraph: wikiPageLocalGraph,
  globalGraph: wikiPageGlobalGraph,
})

const isCleanPage = (slug?: string) =>
  slug === "index" || slug === "about"

const isJournalPage = (slug?: string) => slug === "journal" || Boolean(slug?.startsWith("journal/"))

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.SiteNav(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/logos52/logos52.github.io",
      "About this project": "https://github.com/logos52/logos52.github.io#readme",
    },
  }),
}

// components for pages that display a single piece of content (e.g., a wiki page)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: NotesGraph,
      condition: ({ fileData }) => fileData.slug === "index" || fileData.slug === "notes/index",
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.JournalNav()),
      condition: ({ fileData }) => isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.PageTitle(),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Spacer()),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(PublicExplorer),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.JournalContext()),
      condition: ({ fileData }) => isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: WikiLocalGraph,
      condition: ({ fileData }) => Boolean(fileData.slug?.startsWith("wiki/")),
    }),
    Component.ConditionalRender({
      component: WikiOverviewGraph,
      condition: ({ fileData }) =>
        !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug) && !fileData.slug?.startsWith("wiki/"),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: NotesGraph,
      condition: ({ fileData }) => fileData.slug === "notes/index",
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.JournalNav()),
      condition: ({ fileData }) => isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.PageTitle(),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Spacer()),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(PublicExplorer),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.JournalContext()),
      condition: ({ fileData }) => isJournalPage(fileData.slug),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: ({ fileData }) => !isCleanPage(fileData.slug) && !isJournalPage(fileData.slug),
    }),
  ],
}
