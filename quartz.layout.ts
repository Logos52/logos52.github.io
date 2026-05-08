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
const NotesGraph = Component.Graph({
  title: "Knowledge Graph",
  containerClass: "notes-graph",
  legend: [
    { label: "Techniques", color: "#00a7ff" },
    { label: "ICS / Learning", color: "#b968ff" },
    { label: "Language", color: "#ffb000" },
    { label: "Decision Making", color: "#ff7a1a" },
    { label: "Red Team", color: "#ff3b5c" },
    { label: "Books", color: "#00e5c3" },
    { label: "Concepts", color: "#9aa4ff" },
    { label: "Workflows", color: "#b8ff2c" },
  ],
  localGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.65,
    centerForce: 0.25,
    linkDistance: 42,
    fontSize: 0.62,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    focusOnHover: true,
    enableRadial: true,
    filterPrefixes: ["wiki/"],
    colorRules: [
      { prefix: "wiki/Techniques/", color: "#00a7ff" },
      { prefix: "wiki/Syntheses/ICS-System", color: "#b968ff" },
      { prefix: "wiki/Dimensions/", color: "#b968ff" },
      { prefix: "wiki/Self-Management/", color: "#b968ff" },
      { prefix: "wiki/Language/", color: "#ffb000" },
      { prefix: "wiki/Resources/", color: "#ffb000" },
      { prefix: "wiki/Decision-Making/", color: "#ff7a1a" },
      { prefix: "wiki/Red-Team/", color: "#ff3b5c" },
      { prefix: "wiki/Books/", color: "#00e5c3" },
      { prefix: "wiki/Concepts/", color: "#9aa4ff" },
      { prefix: "wiki/Workflows/", color: "#b8ff2c" },
    ],
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.65,
    centerForce: 0.25,
    linkDistance: 42,
    fontSize: 0.62,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    focusOnHover: true,
    enableRadial: true,
    filterPrefixes: ["wiki/"],
    colorRules: [
      { prefix: "wiki/Techniques/", color: "#00a7ff" },
      { prefix: "wiki/Syntheses/ICS-System", color: "#b968ff" },
      { prefix: "wiki/Dimensions/", color: "#b968ff" },
      { prefix: "wiki/Self-Management/", color: "#b968ff" },
      { prefix: "wiki/Language/", color: "#ffb000" },
      { prefix: "wiki/Resources/", color: "#ffb000" },
      { prefix: "wiki/Decision-Making/", color: "#ff7a1a" },
      { prefix: "wiki/Red-Team/", color: "#ff3b5c" },
      { prefix: "wiki/Books/", color: "#00e5c3" },
      { prefix: "wiki/Concepts/", color: "#9aa4ff" },
      { prefix: "wiki/Workflows/", color: "#b8ff2c" },
    ],
  },
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
  localGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.65,
    centerForce: 0.25,
    linkDistance: 42,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    focusOnHover: true,
    enableRadial: true,
    filterPrefixes: ["wiki/"],
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.65,
    centerForce: 0.25,
    linkDistance: 42,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    focusOnHover: true,
    enableRadial: true,
    filterPrefixes: ["wiki/"],
  },
})

const WikiLocalGraph = Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    filterPrefixes: ["wiki/"],
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
    removeTags: ["system"],
    filterPrefixes: ["wiki/"],
  },
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.SiteNav()],
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
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(PublicExplorer),
  ],
  right: [
    Component.ConditionalRender({
      component: WikiLocalGraph,
      condition: ({ fileData }) => Boolean(fileData.slug?.startsWith("wiki/")),
    }),
    Component.ConditionalRender({
      component: WikiOverviewGraph,
      condition: ({ fileData }) => !fileData.slug?.startsWith("wiki/"),
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: NotesGraph,
      condition: ({ fileData }) => fileData.slug === "index" || fileData.slug === "notes/index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(PublicExplorer),
  ],
  right: [],
}
