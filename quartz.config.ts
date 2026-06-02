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
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // All Lora (headings, body, and chrome) for one cohesive serif voice —
        // no sans/serif clash in the nav or sidebars. Hierarchy comes from weight
        // and size. JetBrains Mono stays for code/labels only. Character comes
        // from colour and shading, not the typeface.
        header: "Lora",
        body: "Lora",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf8f4",
          lightgray: "#e9e1db",
          gray: "#a09690",
          darkgray: "#38353f",
          dark: "#1c1a20",
          // Jewel-tone family: amethyst primary (cool & sophisticated, a touch
          // more saturated than before) + a jewel-teal companion for variety.
          secondary: "#734bb2",
          // Teal pulled down to a muted companion so purple clearly leads.
          tertiary: "#5a9e8f",
          highlight: "rgba(115, 75, 178, 0.10)",
          textHighlight: "#e7ddf2",
        },
        darkMode: {
          light: "#171619",
          lightgray: "#302c31",
          gray: "#716a70",
          darkgray: "#ece7e2",
          dark: "#f5f1ed",
          // Lightened jewel tones (a touch brighter) for the dark surface.
          secondary: "#c0a7ee",
          tertiary: "#88c4b7",
          highlight: "rgba(192, 167, 238, 0.14)",
          textHighlight: "#2e244a88",
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
