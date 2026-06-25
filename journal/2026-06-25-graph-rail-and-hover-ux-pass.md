---
title: "Graph rail, hover UX, and index graph polish"
type: journal
created: 2026-06-25
updated: 2026-06-25
tags:
  - journal
  - llm-knowledge-base
  - astro
  - ux
  - constellation
---

# Graph rail and hover UX pass (2026-06-25)

**Verdict:** Note-page local graphs, Journal/Projects sidebars, and Home/Notes overview graphs now share one hover-tip system (10% paper wash, HTML overlay). Per-note graph geometry is deterministic from link topology, not a random seed. Independent sidebar scroll and condensed-page promotion remain backlog.

Continuation of [[journal/2026-06-25-kb-audit-maintenance-pass|2026-06-25 audit maintenance pass]] — same session, graph/UX scope.

## Shipped

### Note page (`Note.astro` + `constellation.ts`)

- Local graph moved to **top of right rail** (graph → TOC → backlinks).
- **Deterministic layout** via `deriveLocalGeometry()` — domain angles, link mass, angular span; no `hash(slug)` rotation.
- **Variable node budgets** (A+C): `landmarks = min(⌊√direct⌋, uniqueDomains, 4)`; sats/landmark 1 or 2; cap derived per note.
- **Flattened rail**: proportional Y squeeze, 118px height, graph bleeds ±20px into column gap.
- **Smaller nodes**; subtle current-node ring (note rail only).
- **HTML hover tip** — centered above node, 10% `color-mix(paper)` wash, no border box; canvas labels off on note rail.

### Journal + Projects graphs

- Distinguished from note rail via `noteRailLocal` vs `localSeedLabels` / `localHoverTip`.
- **Persistent canvas titles** on seed/project nodes only; neighbors use hover tip.
- **Projects page** restored: `2fr / 1fr` grid matching Journal — cards left, vertical `orient="vertical"` graph right, sticky aside.
- Project seeds = current projects from collection (dynamic).

### Home spine + Notes full graph

- **HTML hover tips** for hovered node + neighborhood (`overviewHoverTips`).
- **Label separation** — iterative nudge so neighbor titles don’t stack; full graph caps at 12 neighbor tips by degree.
- Spine **hub labels stay on canvas**; hover neighbors use HTML tips.

### Search / journal surfaces (earlier in session)

- Single inline search in `Chrome.astro`; ⌘K focuses it; removed width animation (sticky blur jank).
- `pagefind-client.ts` runtime load; `ensure-pagefind.mjs` for dev.
- `update-journal-surfaces.mjs` — 5 recent entries, calendar recent-first; Journal calendar nav pill.
- `update-notes-catalog.mjs`; `repair-links.mjs` (38 wiki files).
- Journal index trimmed to 5 recent + calendar link.

## Key files

| Area | Paths |
|------|-------|
| Graph logic | `src/islands/constellation.ts` |
| Graph shell | `src/components/Constellation.astro` |
| Note layout | `src/layouts/Note.astro` |
| Projects / Journal | `src/pages/projects.astro`, `src/pages/journal.astro` |
| Search | `src/components/Chrome.astro`, `src/islands/search-inline.ts`, `src/lib/pagefind-client.ts` |

## Constants worth tuning later

- `LOCAL_RAIL_AR_BOOST`, `LOCAL_X_STRETCH`, `LOCAL_FIT_BOOST` — rail flatten/zoom
- `localSpineBudget()` thresholds — node count spread
- Tip wash: `color-mix(paper 10%)` in `Constellation.astro`
- Overview neighbor cap: 12 on full graph

## Backlog (discussed, not done)

- **Independent scroll** on note page (body vs sidebar panes) — user asked; not implemented.
- Condensed pages, H5 ledger, `mature` promotion, remove `flavors-preview.css`.
- Map page / domain graphs — unchanged hover model.

## Resume here

1. User said **hold** on further graph tweaks — test Home/Notes hover separation on dense hubs.
2. If note rail scroll still annoys → implement split `overflow-y` panes on desktop only.
3. Run `npm run build` before dev (Pagefind); dev at `localhost:4321`.