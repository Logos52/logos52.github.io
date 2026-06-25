---
title: "KB audit: metadata debt, site gaps, and a scoped maintenance pass"
type: journal
created: 2026-06-25
updated: 2026-06-25
tags:
  - journal
  - llm-knowledge-base
  - audit
  - maintenance
---

# KB audit and scoped maintenance pass (2026-06-25)

Grok read the full `llm-knowledge-base` vault and Astro site, then Wedge scoped five fixes from the audit. This entry records the findings; only the scoped items were executed today.

## Verdict

The intellectual core is publication-quality — learning/encoding doctrine, the Chinese character cluster, agentic engineering framing, and High-Signal Writing Standards are the real product. The main gap is operational: metadata never graduates, sources are sparse on wiki pages, links rot on the published site, and the Astro replatform is ~85% through the Living Atlas vision.

## Measured state (2026-06-25)

| Signal | Count |
| --- | --- |
| Published notes | 335 |
| Wiki pages | 255 |
| Raw markdown (compilation backlog) | ~747 |
| `status: developing` wiki pages | 91 |
| `status: mature` wiki pages | **0** |
| Wiki pages with `## Sources` | 76 / 255 (~30%) |
| Broken internal links (`links-report.json`) | 103 |
| Files flagged in `audit.json` | 226 |

## Findings — content

**Strengths.** Condensed doctrine pages work (`Learning, Condensed`, Chinese Characters cluster, BHS/SIR loop). Journal as public lab notebook works. Money and Red Team clusters exist but are thin vs learning.

**Metadata debt.** `AGENTS.md` defines `seed` / `mature` / `needs-review` and requires Sources sections. Almost nothing has graduated. The wiki reads as a high-quality draft corpus, not a compiled artifact.

**Compilation funnel.** ~747 files in `raw/` vs 255 wiki pages. The funnel is backed up, not broken — but ingest priority matters more than new stubs.

**Stale surfaces.** `02 - System/Open Questions.md` (2026-05-07) superseded by journal `openQuestions` and home "Top of mind." `notes/index.md` Full Catalog was hand-maintained and drift-prone. `wiki/Experiences/Experiences.md` duplicates its Philosophy section.

**Thin clusters.** Techniques (2 pages), Books (3), Experiences (2), Resources (2). Home "Health" hub points at Self-Management with no dedicated health cluster.

## Findings — site (Astro)

**Done well.** Intent doors, constellation graph, domain chips, Note layout (TOC / backlinks / local graph), Paper & Ink design system.

**Not ported from Atlas PRDs.** H5 ledger strip (`tools/ledger.mjs` still writes to `quartz/components/`), ⌘K search palette built but not mounted, TEMP `flavors-preview.css` in production `Base.astro`, PRD docs still reference Quartz.

**UX gaps.** Mobile Chrome hides search below 720px. Note page width (1080px) vs global content width (880px). `/notes` constellation at 340–580px pushes catalog below fold.

## Condensed page pattern — backlog (not executed today)

Five condensed pages exist and work: Learning, Chinese Characters, Agentic Engineering, Money, Minimalism. The pattern is one rule per line, each linking to its owner page — doctrine, not summary.

**Candidates for the next condensed passes:**

| Condensed page | Source cluster | Why |
| --- | --- | --- |
| **Red Team, Condensed** | 4 pages + journal essays | Adversarial thinking is load-bearing; fits personal identity |
| **Decision Making, Condensed** | 8 pages, hub exists | Positional decisions + choice throttling are already doctrine-shaped |
| **Language Learning, Condensed** | 28 pages under `wiki/Language/` | Refold pillars spread across many pages; one entry point would help visitors |
| **Focus & Attention, Condensed** | Self Management + curvilinear design concepts | Home routes here; cluster is scattered |

**Bar:** same as existing condensed pages — thesis paragraph, numbered doctrine sections, one link per line, no stubs.

## Other backlog (not executed today)

1. Metadata promotion sprint — 20 anchor pages to `mature` + Sources on dimension hubs
2. H5 ledger strip on home
3. Remove TEMP palette CSS; decide dark-mode default
4. Mobile search (icon → palette)
5. Tsumugu ↔ wiki bridge synthesis page
6. Journal/index trim policy → **executed today** (8–12 recent entries)
7. ⌘K SearchPalette → **executed today**
8. Link repair pass → **executed today**
9. Notes index auto-catalog → **executed today**

## Executed today

- Trimmed `journal/index.md` Recent entries to 10 (calendar holds the archive).
- Mounted `SearchPalette` globally in `Base.astro` (⌘K / Ctrl+K).
- Link repair pass on published paths: wiki→wiki fixes, full `raw/sources/` paths for source citations, ambiguous basename resolution, private/template/log links corrected or plain-texted where no published target exists.
- Added `scripts/update-notes-catalog.mjs` — regenerates `notes/index.md` Full Catalog from frontmatter on prebuild; Hubs & Condensed section stays hand-curated.

## Success criteria for this pass

- `journal/index.md` shows ≤12 recent entries; older entries reachable via calendar.
- ⌘K opens search on every page after build.
- Published wiki pages have zero new broken internal links vs pre-pass baseline (raw/private/template targets excluded from site render by design).
- `npm run prebuild` regenerates Full Catalog tables without changing `notes.astro` layout.