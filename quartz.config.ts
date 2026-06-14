import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * LLM Knowledge Base — Quartz site configuration
 *
 * Site is built from the repo root (the Obsidian vault root) so the published
 * structure is a 1:1 reflection of the wiki the way it's organized in Obsidian.
 * Anything not meant to be published is listed under `ignorePatterns` below.
 *
 * To preview locally:   npm run serve   (wraps `npx quartz build --serve --directory .`)
 * To rebuild output:    npm run build   (wraps `npx quartz build --directory .`)
 *
 * The `--directory .` flag is required because content lives at the repo root,
 * not in the default `./content/` folder Quartz looks for.
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Logos52",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    // Set to your published URL once GitHub Pages is configured.
    // For a user site this is "<username>.github.io".
    baseUrl: "logos52.github.io",
    ignorePatterns: [
      // Obsidian internals
      ".obsidian/**",
      ".trash/**",

      // Vault folders intentionally kept out of the public site
      "00 Command Center/**",
      "raw/**",
      "private/**",
      "finances/**",
      "outputs/**",
      "templates/**",
      "journal/templates/**",
      "tools/**",
      "PRDs/**",
      "decisions/**",
      "mg-kolbs/**",
      "MG & Kolbs/**",
      "01 - Workbench/**",
      "02 - System/**",
      "_archive/**",
      "hermes/**",
      "log.md",
      "_meta/**",

      // Individual pages kept out of the public site (finance direction / decisions)
      "journal/2026-05-29-wnab-direction-decided.md",

      // Quartz framework + build artifacts
      "quartz/**",
      "public/**",
      "node_modules/**",
      ".quartz-cache/**",

      // Repo metadata
      ".git/**",
      ".github/**",
      ".githooks/**",

      // OS noise
      "**/.DS_Store",

      // Guard against tools writing absolute paths as relative (stray ./Users/... trees)
      "Users/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Source Serif 4 across headings, body, and chrome for one cohesive
        // paper-serif voice — no sans/serif clash in nav or sidebars; hierarchy
        // from weight and size. IBM Plex Mono for code/labels. Character comes
        // from colour and shading, not the typeface (Tsumugu "Paper & Ink").
        header: "Source Serif 4",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3ea",
          lightgray: "#ddd5c4",
          gray: "#a59d8e",
          darkgray: "#3a342b",
          dark: "#211d18",
          // Tsumugu "Paper & Ink": warm cream paper, warm-black ink, a single
          // aubergine accent + a muted sage companion.
          secondary: "#7f55a0",
          tertiary: "#4e8377",
          highlight: "rgba(127, 85, 160, 0.10)",
          textHighlight: "#e9e0f0",
        },
        darkMode: {
          light: "#17150f",
          lightgray: "#373226",
          gray: "#6b6451",
          darkgray: "#cfc7b6",
          dark: "#eae3d4",
          // Lightened aubergine for the dark paper surface.
          secondary: "#a98ac8",
          tertiary: "#88c4b7",
          highlight: "rgba(169, 138, 200, 0.16)",
          textHighlight: "#3a2e4a88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
