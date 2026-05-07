import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * LLM Knowledge Base — Quartz site configuration
 *
 * Site is built from the repo root (the Obsidian vault root) so the published
 * structure is a 1:1 reflection of the wiki the way it's organized in Obsidian.
 * Anything not meant to be published is listed under `ignorePatterns` below.
 *
 * To preview locally:   npx quartz build --serve
 * To rebuild output:    npx quartz build
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
      "Clippings/**",
      "outputs/**",
      "templates/**",
      "tools/**",

      // Quartz framework + build artifacts
      "quartz/**",
      "public/**",
      "node_modules/**",
      ".quartz-cache/**",

      // Repo metadata
      ".git/**",
      ".github/**",

      // OS noise
      "**/.DS_Store",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Geist",
        body: "IBM Plex Serif",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf8f4",
          lightgray: "#e9e1db",
          gray: "#b9aea8",
          darkgray: "#5d5b61",
          dark: "#28262c",
          secondary: "#4f6f88",
          tertiary: "#6f8fa4",
          highlight: "rgba(220, 206, 194, 0.28)",
          textHighlight: "#f3ead7",
        },
        darkMode: {
          light: "#171619",
          lightgray: "#302c31",
          gray: "#716a70",
          darkgray: "#d9d2cd",
          dark: "#f2ece7",
          secondary: "#9ec7e0",
          tertiary: "#b8d6c8",
          highlight: "rgba(220, 206, 194, 0.14)",
          textHighlight: "#6f5f2f88",
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
