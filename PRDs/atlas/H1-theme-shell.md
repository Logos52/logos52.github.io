# H1 — Theme, typography, layout shell

The single biggest handoff: after this, the site must no longer be recognizable as a default Quartz install. Tokens are in `README.md` — do not invent values.

## 1. Dark-first

- `quartz.config.ts`: replace the `darkMode` color block with the dark tokens from README (`light: #171619`, `lightgray: #302c31`, `gray: #6f6875`, `darkgray: #ece7e2`, `dark: #f5f1ed`, `secondary: #c0a7ee`, `tertiary: #88c4b7`, `highlight: rgba(192,167,238,0.14)`). Keep the lightMode block as-is.
- `quartz/components/scripts/darkmode.inline.ts`: when no saved preference exists, default to **dark** (currently falls back to `prefers-color-scheme`). Saved preferences and the toggle keep working.

## 2. Typography

Per README two-voice spec. Config `typography` stays `header: Lora, body: Lora, code: JetBrains Mono`. In `quartz/styles/custom.scss`, apply the machine voice (JetBrains Mono, 11–13px, letter-spacing 0.04em) to: SiteNav links, breadcrumbs, ContentMeta (dates/reading time), TagList chips, type badges, graph labels/legend, search placeholder. Set the heading scale from README.

## 3. Single-column shell + margin notes

Applies to **all content pages** (wiki, journal entries, projects, about). In `quartz.layout.ts`:

- Remove `Explorer` from every layout (delete `PublicExplorer` and its uses).
- Remove the stacked right rail. New `defaultContentPageLayout`:
  - `beforeBody`: Breadcrumbs, ArticleTitle, ContentMeta, TagList (keep existing ConditionalRender exceptions for index/journal-index slugs).
  - `right` (becomes the margin-note column, desktop only): local Graph (small: see below), TableOfContents, Backlinks — in that order.
- CSS (`custom.scss`): on ≥1200px, page grid = `1fr min(68ch, 100%) 220px` with the article in the center track and the `right` components in the third track as quiet margin notes — mono labels, 12px, no card borders, separated by 1px rules. Below 1200px they stack after the article. Mobile must remain clean.
- Local graph in the margin: fixed height 160px, acts as a "you are here" minimap. Keep the existing zoom-to-fullscreen interaction.
- The `isCleanPage`/`isJournalPage` conditional logic collapses — most of it existed to hide the explorer/rail. Simplify to the minimum that keeps index pages chrome-free. Extract one helper instead of the current ~10 repeated conditions.

## 4. Nav + footer + identity

- `SiteNav`: links become, in order: `Map` (→ `/`), `Notes` (→ `/notes`), `Projects`, `Journal`, `About`. Remove `Blog` and `Index`. Mono voice, current-page link in accent color.
- Wordmark: `Logos52` in Lora, left of the nav links, links home.
- Footer links: `GitHub` → repo (unchanged); `About` → `/about` (replaces the "About this project" → GitHub README link).
- `quartz.config.ts` `pageTitle` stays `Logos52`.
- `index.md` frontmatter `description` and the og description become: `Wedge's second brain for learning systems and agentic engineering — maintained in the open, partly by LLM agents.`
  **Amended 2026-06-12:** the description is now `Wedge's second brain for learning systems and agentic engineering. Each page explains one idea in enough detail to use it.` — per the High-Signal Front-Facing Pages standard (Writing Standards). Do not restore the original line.

## Acceptance

- A wiki page (e.g. `wiki/Dimensions/Retrieval`) renders: breadcrumb, title, meta, body in a 68ch column; minimap + ToC + backlinks in the right margin; **no explorer, no three-column shell**.
- First visit in a clean browser profile = dark. Toggle to light still legible.
- Nav reads Map · Notes · Projects · Journal · About in mono. `/about`, `/projects`, `/journal`, `/notes` all render correctly.
- Mobile (~390px) wiki page: single clean column, margin notes stacked after body.
- Commit: `atlas(H1): dark-first theme, two-voice typography, single-column shell, new nav`.
