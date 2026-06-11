---
title: "Living Atlas redesign decided + High-Signal Decision Writing standard"
type: journal
created: 2026-06-11
updated: 2026-06-11
tags:
  - journal
  - site
  - decisions
  - writing
---

# Living Atlas + decision writing (2026-06-11)

A front-pages review escalated into three linked decisions: a full redesign concept for the public site, the engine choice underneath it, and a new cross-project writing standard. Build is underway via Composer against locked handoffs.

## Decisions

**Engine: keep Quartz, replace 100% of the skin (A over Astro rebuild).** The deciding reframe: the comparison was never framework vs framework — it was an existing vault-publishing engine vs a general framework plus a vault layer we'd own forever. The vault carries 2,478 wikilinks across 275 published files, all written in Obsidian semantics by agents; in a rebuild, every resolution edge case becomes our bug, and the failure mode is silent link rot — the exact incoherence this base exists to prevent. B's real edge (near-zero JS on first load; today every page parses a 700KB bundle plus a 1.3MB content index) is first-visit-only, shrinks once SPA + prefetch are on, and converges with A under a design that puts a graph on every page. Flip condition, recorded: if the five-year vision becomes one integrated Logos52 platform (wiki + Tsumugu + dashboards), B is the right call and the design system transfers intact.

**Design: the Living Atlas.** The generic-Quartz look is the *shape*, not the colors. New shape: the graph becomes the homepage (Map — six labeled hub landmarks, legend-as-filter, recent-update pulse), curated reading paths (Trails — v0 ships as cards linking to hubs), and the agent maintenance loop made public (Ledger — parsed from git log). Note pages go single-column with margin notes; one domain palette (`domains.ts`) replaces the two divergent graph palettes; dark-first; two-voice typography (Lora thinks, JetBrains Mono operates). PRD signed for phases 1–3; handoffs in `PRDs/atlas/` (H0–H6). Division of labor: design, content, and copy decided here; Composer executes code.

**Writing: High-Signal Decision Writing, all projects.** New section in [[02 - System/Writing Standards|Writing Standards]] governing the decision genre (PRDs, proposals, decision notes, memos): verdict first, measure before asserting, steelman what you reject, price your own recommendation, define the comparison, weigh reversibility, falsifiable criteria, delete list. Pointers installed in root `~/Projects/AGENTS.md`, cos, tsumugu, and a new minimal `wnac/AGENTS.md`; GROK.md inherits automatically. Existing wiki-page standards untouched — this is a genre split, not a revision.

**Ledger demoted same day (H7).** Post-build review: the ledger strip serves visitors, but the primary audience is future-Wedge, who has `git log` — and the parser's actual output ("57 pages touched") counts activity, not thinking. Demoted to one footer line; its slot now runs an open-questions block (from journal frontmatter) and a daily retrieval rep (one wiki page, 30+ days untouched, deterministic by date) — the site practicing [[wiki/Dimensions/Retrieval/Opportunistic Retrieval|Opportunistic Retrieval]] on its owner. Cost accepted: the home page loses its machine-layer moment.

**Blog folds into Journal** (H6): one writing surface; old URLs redirect. **Front-facing copy** tightened to the standard (notes, journal, projects intros); about.md left alone — already in voice.

**Suicidal Empathy duplicate: keep both pages, disambiguate titles.** The Books page is a source synthesis, the Concepts page is the operating model — both legitimate under hub-and-detail discipline. The concept keeps the clean title (concepts are the wiki's primary currency); the book review is retitled to mark itself as the book and the two cross-link.

## Post-build QA round (same day, evening)

Composer shipped H0–H7; Claude took over design tuning directly with a live loop (edit → hot rebuild → browser screenshot via the Chrome extension). What it took to land the graph: three rounds. Round 1 exposed a silent defect — `SPINE_HUBS` used raw vault paths that never matched the slugified build, so no hub ever rendered as a landmark (a build-time warning now guards this). Round 2 established that **scarcity is the aesthetic**: hub-only link rendering, 3 satellites per hub, neutral-gray satellites with color reserved for landmarks. Round 3: short display labels, satellite labels hidden at rest, post-settle zoom-to-fit, wider y-band. The constellation mockup is codified as the reference standard for all graph surfaces.

**Focus shift, recorded.** Red Team is out of the map hubs; **Money** and **Chinese characters** are in. Wedge's stated interest has moved away from Red Team and from cos-as-a-project; toward Money and Mandarin (Tsumugu). Open questions on the home page now track the live threads (Tsumugu reading loop, money mindsets, YouTube reader) instead of the stale cos question. The About "What I write about" list still leads with Red Team thinking — flagged for a content pass, not changed unilaterally.

**QA fixes:** About page de-carded (legacy panel styles and a breadcrumb-restoring rule from the pre-Atlas era were overriding the new shell); "fixed operating contract" jargon replaced with plain language on the hero and About; legend chips compacted to one line (shorter domain labels in `domains.ts`); a layout collapse on content pages in the 800–1199px viewport band fixed (Quartz's default grid still reserved a column for the deleted explorer sidebar).

**Pending:** `projects/tsumugu.png` — the card and page are wired for it; Wedge captures the YouTube-reader screenshot (tab left open in the right state) and drops the file in `projects/`. Trails visual redesign is on his mind but undefined; mock before building when it crystallizes.

## Ruled out

- **Astro/full rebuild** — see flip condition above; revisit only if the platform vision materializes.
- **Hand-maintained catalog, long-term.** Today proved the case: four truncated summaries in `notes/index.md` were generated by the maintenance loop *the same day* we were fixing the previous batch. The auto-generated catalog (from frontmatter `description:`) is the next build after Atlas; needs its own PRD.

## Outstanding

- Atlas build in progress: H0 closed pending final wiring; H1–H6 queued. Graph spine (H3) expects 1–2 tuning rounds.
- Auto-generated catalog PRD — schedule immediately after Atlas ships.
- Later Atlas phases: real trail pages, `/ledger` page, seedling/evergreen status vocabulary (touches the agent contract — deliberate pass).
- Feed the new decision-writing section into Hermes' style-feedback loop (not edited from here; Hermes holds its own state).
- Open from the proposals: `enableSPA` test, "Recently updated" date semantics (`significant` flag vs convention).
