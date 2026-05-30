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
      "private/Skills/**",
      "finances/**",
      "outputs/**",
      "templates/**",
      "tools/**",
      "PRDs/**",
      "decisions/**",
      "mg-kolbs/**",
      "01 - Workbench/**",
      "02 - System/**",
      "_archive/**",
      "hermes/**",
      "log.md",
      "_meta/**",

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
        // WNAB design language: Nunito (friendly rounded UI/display) + Fira Code
        // (mono labels/numbers, the "vault aesthetic"). Lora serif body kept for
        // long-form reading; Nunito pairs with it far more evenly than Grotesk did.
        header: "Nunito",
        body: "Lora",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#fbf8f4",
          lightgray: "#e9e1db",
          gray: "#a09690",
          darkgray: "#47454c",
          dark: "#1c1a20",
          // Emerald/jade — WNAB green family, but cooler & fresher than the dark
          // forest #1e7a3d (nods to the violet's coolness without leaving green).
          secondary: "#128a63",
          tertiary: "#1fae84",
          highlight: "rgba(18, 138, 99, 0.08)",
          textHighlight: "#d8efe6",
        },
        darkMode: {
          light: "#171619",
          lightgray: "#302c31",
          gray: "#716a70",
          darkgray: "#e0d9d4",
          dark: "#f5f1ed",
          // Lightened jade so the accent stays legible on the dark surface.
          secondary: "#4fd3a3",
          tertiary: "#6ee0bb",
          highlight: "rgba(79, 211, 163, 0.13)",
          textHighlight: "#1d4a3a88",
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
