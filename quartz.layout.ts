import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Logos52 — Layout configuration
 *
 * The site uses a small global navigation bar for the personal homepage,
 * blog placeholder, and notes index. The standard Quartz sidebars remain
 * available for browsing the knowledge base.
 */

// components shared across all pages
const NotesGraph = Component.Graph({
  title: "Knowledge Graph",
  containerClass: "notes-graph",
  legend: [
    { label: "Techniques", color: "#2f6fed" },
    { label: "ICS / Learning", color: "#7c3aed" },
    { label: "Language", color: "#8b5e34" },
    { label: "Red Team", color: "#b42318" },
    { label: "Books", color: "#0f766e" },
    { label: "Concepts", color: "#64748b" },
    { label: "Workflows", color: "#ca8a04" },
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
      { prefix: "wiki/Techniques/", color: "#2f6fed" },
      { prefix: "wiki/Syntheses/ICS-System", color: "#7c3aed" },
      { prefix: "wiki/Dimensions/", color: "#7c3aed" },
      { prefix: "wiki/Language/", color: "#8b5e34" },
      { prefix: "wiki/Resources/", color: "#8b5e34" },
      { prefix: "wiki/Red-Team/", color: "#b42318" },
      { prefix: "wiki/Books/", color: "#0f766e" },
      { prefix: "wiki/Concepts/", color: "#64748b" },
      { prefix: "wiki/Workflows/", color: "#ca8a04" },
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
      { prefix: "wiki/Techniques/", color: "#2f6fed" },
      { prefix: "wiki/Syntheses/ICS-System", color: "#7c3aed" },
      { prefix: "wiki/Dimensions/", color: "#7c3aed" },
      { prefix: "wiki/Language/", color: "#8b5e34" },
      { prefix: "wiki/Resources/", color: "#8b5e34" },
      { prefix: "wiki/Red-Team/", color: "#b42318" },
      { prefix: "wiki/Books/", color: "#0f766e" },
      { prefix: "wiki/Concepts/", color: "#64748b" },
      { prefix: "wiki/Workflows/", color: "#ca8a04" },
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
    ].includes(node.slugSegment),
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
      condition: ({ fileData }) => fileData.slug === "notes/index",
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
    Component.Graph({
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
      },
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
      condition: ({ fileData }) => fileData.slug === "notes/index",
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
