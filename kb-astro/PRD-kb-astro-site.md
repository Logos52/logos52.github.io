# PRD — Knowledge Base site on Astro (replacing Quartz)

**Owner:** (you) · **Status:** draft for build · **Date:** 2026-06-19
**Design system:** Tsumugu DS — Paper & Ink, `data-accent="violet"` (this project)
**Target repo:** `llm-knowledge-base` (Obsidian vault) · **Deploy:** GitHub Pages
**Per-model prompts:** `kb-astro/opus.md`, `kb-astro/composer.md`, `kb-astro/grok.md`

---

## 1. Why

Quartz ships graph + search + backlinks for free, but its design layer is hard to bend and we want
full control of the look. We are moving the **published site** to **Astro**, rebuilt with the Tsumugu
design system, while **keeping the authoring experience in Obsidian unchanged** and **preserving the
three functionalities that matter: global graph, client-side search, backlinks.**

This is a *design-led re-platform*, not a content migration — the markdown vault is the source of truth
and does not change.

### Success = all true
1. The site looks like the Tsumugu KB design (Paper & Ink, violet, the linked-nodes mark, dark mode).
2. **Global graph, client-side search, and backlinks work** at least as well as Quartz.
3. Authoring stays in Obsidian; `[[wikilinks]]`, frontmatter, and folders work untouched.
4. The **public/private split is enforced at build time** — private notes never enter the output.
5. Build of the full vault (several hundred notes) completes in well under a minute on CI.

### Non-goals (v1)
- No CMS / web editing — Obsidian remains the editor.
- No runtime server — static output only.
- No redesign of the *content* pipeline (the LLM-maintenance loop is out of scope here).
- No comments, auth, or per-user state.

---

## 2. What exists today (ground truth from the vault)

- **Authoring:** Obsidian vault, several hundred `.md` notes. Frontmatter is consistent:
  `title, type, status, created, updated, tags[]`, plus optional `order, image, blurb`.
- **Note types:** `concept · technique · synthesis · project · journal · command-center · index`.
- **Links:** Obsidian wikilinks with path + alias — `[[wiki/Learning Craft/AI-Assisted Learning Workflow|alias]]`.
- **Public/private:** publish guards keep `private/`, `finances/`, and tagged-private notes **out** of the
  build. This is a hard safety requirement — treat it as security, not cosmetics.
- **Current stack:** Obsidian → Quartz → GitHub Pages. Config in `quartz.config.ts`, `quartz.layout.ts`.
- **Model contracts already in the repo:** `AGENTS.md`, `GROK.md`, `CLAUDE.md` — the work split below
  should extend these, not fight them.

---

## 3. Target architecture (Astro)

```
src/
  content/                 # Astro content collection → symlink/copy of the public vault subset
    notes/                 #   markdown, frontmatter validated by a Zod schema
  lib/
    wikilinks.ts           # remark plugin: [[path|alias]] → <a> + resolve slugs
    graph.ts               # build node+edge JSON from links (global + per-note local graph)
    backlinks.ts           # inverse-link index
    search-index.ts        # prebuilt search doc (Pagefind or FlexSearch JSON)
    publish-guard.ts       # drop private/ + tagged-private BEFORE collection load
  components/              # ← ported 1:1 from the Tsumugu DS (this project)
    NoteCard, PulseCard, DomainChip, Chrome, GraphView, SearchPalette, Backlinks, Toc …
  layouts/
    Base.astro            # head, theme/accent attrs, fonts, dark-mode toggle
    Note.astro            # the note page (article + toc + backlinks + local graph)
  pages/
    index.astro           # atlas home (hero, map, pulse, trails, hubs)
    [...slug].astro       # every note, statically generated
    notes.astro, projects.astro, about.astro
  styles/                 # the DS tokens (styles.css + tokens/*) copied in
public/                   # the node marks, favicons, fonts
astro.config.mjs
```

**Key decisions**
- **Search:** use **Pagefind** (build-time index, tiny runtime, scales to thousands of pages) rather than
  shipping a FlexSearch blob. Quartz uses FlexSearch; Pagefind is the lower-risk choice at our size and up.
- **Graph:** precompute `graph.json` (nodes = notes colored by domain, edges = links) at build; render with
  a small canvas/SVG force layout. Local graph = the node's 1–2 hop neighborhood, same data.
- **Wikilinks:** a remark plugin resolves `[[...]]` against a slug map; unresolved links render as
  "missing" (dim, non-clickable) so broken links are visible, not silent.
- **Publish guard runs first**, before Astro reads the collection — a note that fails the guard is never
  copied into `src/content`. Fail-closed: unknown/untagged visibility = private.

---

## 4. Design-system mapping (already built in this project — port, don't redesign)

| Site element            | Tsumugu DS source (this project)                          |
|-------------------------|-----------------------------------------------------------|
| Tokens / Paper & Ink    | `styles.css` + `tokens/*` (`data-accent="violet"`)        |
| Dark mode               | `[data-theme="dark"]` + brightened domain hues            |
| Note / trail / hub card | `components/kb/NoteCard`                                   |
| Pulse panels            | `components/kb/PulseCard` + `QuestionList`                |
| Domain legend / filter  | `components/kb/DomainChip`                                |
| Chrome, hero, note page | `ui_kits/knowledge-base/screens.jsx` (reference layout)   |
| Logo / favicon          | `assets/mark-nodes-*.svg`, `favicon-nodes.svg`            |
| Full visual spec        | `ui_kits/knowledge-base/styles.html`                      |

The React/JSX components here are the **visual + behavioral spec**. In Astro they become `.astro`
components (server-rendered) with small island scripts only where interaction is needed (search palette,
graph, theme toggle, domain filter). One-to-one look; framework changes underneath.

---

## 5. Feature parity checklist (vs Quartz)

- [ ] Every public note → its own static page at a stable slug
- [ ] Wikilinks resolve; aliases honored; missing links visibly marked
- [ ] **Backlinks** panel per note
- [ ] **Local graph** per note + **global graph** page
- [ ] **Client-side search** (title + body + headings), keyboard `⌘K`
- [ ] Tag pages / domain filtering
- [ ] Table of contents per note
- [ ] Frontmatter: title, type, status, dates, tags, blurb, image
- [ ] Reading-friendly typography (Ming body, Inter UI, mono meta)
- [ ] Dark mode toggle, persisted
- [ ] RSS/sitemap
- [ ] **Publish guard** — private content provably excluded
- [ ] Fast incremental-ish dev (`astro dev`) + sub-minute CI build

---

## 6. Work split across models

Three lanes, mapped to each model's strengths and the existing repo contracts. Each task lists a clear
**hand-off artifact** so lanes stay decoupled.

### 🟣 Opus (Claude) — architecture, hard logic, design fidelity
*Owns the decisions and the pieces where being wrong is expensive.*
- O1. Astro project scaffold + `astro.config.mjs` + content-collection **Zod schema** for the frontmatter.
- O2. **Publish-guard** (`publish-guard.ts`) — fail-closed private exclusion + a test that asserts no
  `private/`, `finances/`, or tagged-private note appears in `dist/`. *(Security-critical — Opus owns it.)*
- O3. **Wikilink remark plugin** + slug map + missing-link handling.
- O4. **Graph + backlinks builders** (`graph.ts`, `backlinks.ts`) — the link-extraction + JSON shape.
- O5. Port the **design system** into Astro: tokens, the Base/Note layouts, and the KB components as
  `.astro` (NoteCard, PulseCard, DomainChip, Chrome, Toc, Backlinks). Pixel-match `styles.html`.
- O6. Define the **interfaces/contracts** the other lanes build against (schema, graph JSON, search doc
  shape) — write these first so Composer/Grok can start in parallel.
- **Hand-off:** a working skeleton site that builds 5–10 sample notes, with typed contracts documented.

### 🔵 Composer — bulk implementation against specs
*Owns volume: turning Opus's contracts + the DS spec into lots of working code, fast.*
- C1. Implement `[...slug].astro` + `index/notes/projects/about` pages from the layouts.
- C2. Build the **search island** (Pagefind integration + the `⌘K` palette UI from the DS spec).
- C3. Build the **graph island** (render `graph.json`; pan/zoom/hover/click; local-graph variant).
- C4. **Domain filter** wiring on the home map + tag pages.
- C5. Dark-mode toggle (persisted), mobile nav, responsive passes.
- C6. CI workflow (build + Pagefind index + deploy) and the dev script.
- **Hand-off:** all pages render the full vault; parity checklist items wired.

### 🟢 Grok — content-side, data, audit, research
*Owns everything that touches the corpus itself rather than the framework.*
- G1. **Frontmatter audit** across the vault — find notes missing `title/type/updated`, inconsistent
  `tags`, or stale `status`; output a fix list (don't auto-edit content without review).
- G2. **Domain taxonomy** — map the vault's tags/folders to the 6 design domains (Learning, Agentic,
  Language, Focus, Mind, Generativity) and produce the `domain` assignment table the graph colors by.
- G3. **Link integrity sweep** — list broken/ambiguous wikilinks for Opus's resolver to handle.
- G4. **Redirects map** — old Quartz URLs → new Astro slugs (preserve inbound links / SEO).
- G5. Curate the **home page** content (which notes are "trails", "hubs", "open questions", "today's
  retrieval") from the real vault.
- **Hand-off:** a `site-data/` set of JSON/CSV (domain map, redirects, home curation, audit reports).

### Dependency order
```
Opus O6 (contracts) ─┬─→ Composer C1–C6
Opus O1–O5           │
Grok  G1–G5  ────────┴─→ feed O4/O5 (domains, links) and C4/C1 (curation, redirects)
```
Opus writes contracts (O6) first; Composer and Grok then run in parallel; Opus integrates.

---

## 7. Milestones

- **M0 — Spike (Opus):** Astro scaffold + schema + publish-guard + 10 notes building. Proves the model.
- **M1 — Design parity (Opus + Composer):** home + note page pixel-match the DS on real content.
- **M2 — The big three (Composer):** search, global + local graph, backlinks all live.
- **M3 — Full vault (Grok + Composer):** domain map applied, all notes build, redirects in place.
- **M4 — Cutover:** CI green, parity checklist 100%, deploy alongside Quartz, flip DNS.

---

## 8. Risks & mitigations
- **Private leak** → fail-closed guard + a build-breaking test that greps `dist/` for private slugs. Owned by Opus.
- **Graph/search slowness at scale** → Pagefind + precomputed graph JSON; lazy-load the global graph island.
- **Wikilink drift** → resolver marks missing links visibly; Grok's G3 sweep cleans the worst before cutover.
- **Design divergence under Astro** → the DS in *this* project is the single source of truth; port, never re-invent.
- **Scope creep** → web editing, comments, auth are explicitly v1 non-goals.

---

## 9. Decisions (locked)
1. **Host:** **GitHub Pages** (keep current deploy target; `.nojekyll` already present).
2. **Search depth:** **full-body index** (Pagefind over title + headings + body).
3. **Home graph:** the **curated landmark map** on the home page (keep the current design/layout); the
   **full vault graph** lives on its own **`/graph`** page.
4. **URL scheme:** **keep Quartz's folder-based paths** (best SEO; preserves inbound links). Generate a
   redirects map for any slug that changes.
