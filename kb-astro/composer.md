# Composer lane — KB Astro site (updated 2026-06-19)

You are **Composer**, the bulk-implementation lane. You turn Opus's contracts + the Tsumugu DS spec
into a lot of working code, fast. **Read `kb-astro/CONTRACTS.md` first.** **Do not start until Opus's
`src/lib/types.ts` and the ported `.astro` components/layouts exist** — everything you build imports them.

> **What changed from the first brief** (read this): in-place re-platform of the `llm-knowledge-base`
> repo on branch **`astro-replatform`** (not a separate `kb-astro/` repo). **Astro 6.4** (content-layer
> API; collection defined in `src/content.config.ts`). Search is **`astro-pagefind` v2** (full-body).
> Domains are the **6** in CONTRACTS §2 with new DS colors. Slugs are **1:1 with Quartz** (CONTRACTS §3).
> Publish guard is **pure 1:1** and `AGENTS/CLAUDE/GROK/README` are intentionally public.

## Locked decisions
- Host **GitHub Pages** (user site, no base) · Search **Pagefind full-body** · Home **curated landmark
  map** + full graph at **`/graph`** · keep **folder-based URLs** · keep the existing home layout.
- Design source of truth: the Tsumugu DS export at `/Users/n1/Projects/PRDs/tsumugu-ds-export` —
  `ui_kits/knowledge-base/styles.html` (every element), `screens.jsx` (home + note layout), `components/kb/*`.
  Match pixel-for-pixel. Opus has ported the static components/layouts to `.astro`; you build **pages** + **islands**.

## What Opus hands you (import, don't rebuild)
- `src/lib/types.ts` — `Domain`, `DOMAIN_COLORS/LABELS`, `GraphData`, `SearchDoc`, `Backlink`, `NoteFrontmatter`.
- `src/lib/slug.ts`, `wikilinks.ts`, `graph.ts` (+ local-graph slice helper), `backlinks.ts`.
- `src/layouts/Base.astro`, `src/layouts/Note.astro`.
- `src/components/` — `NoteCard`, `PulseCard`, `QuestionList`, `DomainChip`, `Chrome`, `Toc`, `Backlinks`,
  `Footer` (+ `SectionHead`, `SetLabel`). Props match the DS; `DomainChip` is the one stateful one (island).
- Generated data at build: `public/graph.json` (`GraphData`), `public/backlinks.json` (`BacklinkIndex`).
- From Grok: `kb-astro/site-data/{home,domains,redirects}.json`.

## Steps

### C1 — Pages (static)
1. `src/pages/[...slug].astro` — `getStaticPaths()` over the `notes` collection; render via `Note.astro`.
   Compute each note's URL with `slug.ts` so it stays **1:1 folder-based**.
2. `src/pages/index.astro` — the atlas home from `screens.jsx`: hero + search trigger, the **curated landmark
   map** (`home.json.landmarkMap`), Pulse panels (Open questions / Today's retrieval), Trails grid, Dimensions +
   Hubs grids (all `NoteCard`). Keep the current layout.
3. `src/pages/notes.astro` — index of all notes, filterable by domain (`DomainChip`).
4. `src/pages/projects.astro`, `src/pages/about.astro` — from `projects/` + `about.md`.
5. `src/pages/graph.astro` — the **full vault graph** page, using `public/graph.json`.
6. `src/pages/tags/[tag].astro`. 7. `src/pages/rss.xml.js` via `@astrojs/rss`.

### C2 — Search island (Pagefind, full-body)
8. `astro-pagefind` indexes rendered HTML at build (mark the note `<article>` with `data-pagefind-body`).
9. Build the **`⌘K` command palette** exactly per the DS spec (field, result rows = title + domain + snippet,
   keyboard nav). Queries the Pagefind index client-side. Island only.

### C3 — Graph island
10. Render `public/graph.json` as an interactive SVG/canvas force graph: hover highlights node+edges, click
    navigates, pan + zoom, color by `domain` (`DOMAIN_COLORS`). Lazy-load (`client:visible`).
11. **Local graph** rail variant on the note page: same renderer, fed Opus's 1–2 hop slice (small, no physics).

### C4 — Domain filter + tags
12. Wire `DomainChip` on the home map + `/notes` so selecting domains filters nodes/cards (active fills, others dim).

### C5 — Theme + responsive
13. Dark-mode toggle in the chrome, persisted to `localStorage`, applied as `data-theme="dark"` on `<html>`
    (attribute-based, brightened domain hues already in the DS). Respect `prefers-color-scheme` on first load.
14. Mobile: collapse nav to a menu; single-column note layout (backlinks/ToC below); responsive grids.

### C6 — CI + dev
15. The deploy workflow (`.github/workflows/deploy.yml`, Astro version) is Opus's; ensure your build fits it:
    `npm ci` → `npm run build` (runs `copy-notes` then `astro build`, Pagefind via integration) → guard → deploy `dist`.
16. Keep `.nojekyll`. Apply `redirects.json` (emit redirect stubs for any changed slug — should be ~none).
17. Opus's leak test / `npm run guard` **gates deploy** (build fails if it trips) — don't bypass it.

## Definition of done
- [ ] Every public note builds at its folder-based URL; home matches the DS layout
- [ ] `⌘K` full-body search works client-side
- [ ] Global `/graph` + per-note local graph interactive
- [ ] Domain filter + tag pages work
- [ ] Dark mode persisted; mobile passes
- [ ] CI builds + indexes + deploys to GitHub Pages with the guard gating
