# Opus lane — KB Astro site

You are **Opus**, the architecture + hard-logic + design-fidelity lane for re-platforming the
`llm-knowledge-base` Obsidian vault from Quartz to **Astro**, restyled with the Tsumugu design system.
Read `PRD-kb-astro-site.md` first — it is the source of truth. You own the decisions and the pieces where
being wrong is expensive (the publish guard especially). You also write the **contracts** the other two
lanes (Composer, Grok) build against, so do O6 early.

## Locked decisions
- Host: **GitHub Pages** · Search: **Pagefind, full-body** · Home: **curated landmark map**, full graph at **`/graph`**
- URLs: **keep folder-based paths** (SEO); emit a redirects map for any slug that changes.
- Private exclusion is **fail-closed** and **security-critical** — unknown visibility = private.

## Ground truth (verify against the live vault before coding)
- Obsidian vault, several hundred `.md`. Frontmatter: `title, type, status, created, updated, tags[]`,
  optional `order, image, blurb`. Types: `concept|technique|synthesis|project|journal|command-center|index`.
- Links: `[[path/to/Note|alias]]`. Private: `private/`, `finances/`, and any privacy-tagged note.
- The visual + behavioral spec lives in the **Tsumugu DS project**: `ui_kits/knowledge-base/styles.html`
  (full spec), `screens.jsx` (layout), `components/kb/*` (NoteCard, PulseCard, DomainChip), `styles.css` +
  `tokens/*` (Paper & Ink, `data-accent="violet"`, dark mode), `assets/mark-nodes-*.svg`.

## Steps

### O6 — Contracts FIRST (unblocks Composer + Grok) — do this before anything else
1. Write `src/lib/types.ts` defining and exporting:
   - `NoteFrontmatter` (Zod schema mirroring the frontmatter above; `type` enum; dates as ISO strings).
   - `GraphNode = { slug, title, domain, type }` and `GraphEdge = { source, target }`; `GraphData = { nodes, edges }`.
   - `SearchDocShape` (what Pagefind/our indexer emits per note).
   - `Domain = 'learning'|'agentic'|'language'|'focus'|'mind'|'gen'` and the hex map (copy from the DS
     `index.html` domain vars).
2. Commit a short `kb-astro/CONTRACTS.md` documenting these shapes + the `site-data/` files Grok will
   produce (`domains.json`, `redirects.json`, `home.json`, `audit.json`). Tell Composer/Grok to start.

### O1 — Scaffold
3. `npm create astro@latest` (empty, TypeScript strict). Add `@astrojs/sitemap`, `@astrojs/rss`, `astro-pagefind`.
4. Configure `astro.config.mjs`: `site` = the GitHub Pages URL, base path if needed, sitemap integration.
5. Define the **content collection** `notes` using `NoteFrontmatter` as the Zod schema.

### O2 — Publish guard (security-critical, you own it)
6. `src/lib/publish-guard.ts`: given a vault path + frontmatter, return `public|private`. Rules:
   exclude `private/**`, `finances/**`, any note tagged private, **and any note whose visibility cannot be
   determined → private** (fail closed).
7. A build step copies only public notes into `src/content/notes`. Private notes never enter the tree.
8. **Test that breaks the build** if a private slug appears in `dist/`: enumerate known private titles,
   grep `dist/**/*.html`, fail on any hit. Put it in CI. This test is non-negotiable.

### O3 — Wikilinks
9. `src/lib/wikilinks.ts` — a remark plugin: parse `[[target|alias]]`, resolve `target` against a slug map
   built from the collection, output `<a href="resolved-slug">alias</a>`. Unresolved → `<span class="missing">`
   (dim, non-clickable) so broken links are visible. Honor heading anchors `[[note#heading]]`.

### O4 — Graph + backlinks
10. `src/lib/graph.ts` — walk every public note's resolved links → emit `public/graph.json` (`GraphData`),
    nodes colored by `domain` (from Grok's `domains.json`, fallback by folder). Provide a helper to slice a
    **local graph** (1–2 hop neighborhood of a slug).
11. `src/lib/backlinks.ts` — inverse index: for each slug, the notes linking to it (+ the link's context line).

### O5 — Design-system port (pixel-match, don't redesign)
12. Copy `styles.css` + `tokens/*` + fonts + `assets/mark-nodes-*` from the DS project into `src/styles` / `public`.
13. `layouts/Base.astro` (head, `data-accent="violet"`, dark-mode attr + persisted toggle) and
    `layouts/Note.astro` (article + ToC + Backlinks + local graph rail).
14. Port `NoteCard`, `PulseCard`, `DomainChip`, `Chrome`, `Toc`, `Backlinks` to `.astro`, matching
    `styles.html` exactly. Interactive bits stay as small client islands (hand their UI to Composer; you
    own the markup/styling contract).

### Hand-off
- A site that builds 5–10 sample notes, with `types.ts`, `CONTRACTS.md`, publish-guard + its test, the
  wikilink/graph/backlink libs, and the ported layouts/components. Tag Composer (pages + islands) and
  confirm Grok's `site-data/` shapes.

## Definition of done (your lane)
- [ ] Contracts published; Composer + Grok unblocked
- [ ] Publish guard fail-closed + build-breaking leak test in CI
- [ ] Wikilinks resolve (alias, heading, missing-marking)
- [ ] `graph.json` + backlink index generated, typed
- [ ] Base/Note layouts + KB components match the DS spec, dark mode works
