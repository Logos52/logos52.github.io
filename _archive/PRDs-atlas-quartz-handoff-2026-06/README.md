# Living Atlas — Composer Handoff Package

Implementation handoffs for the approved Living Atlas redesign (phases 0–3). Design decisions, copy, and content are **locked** in these documents — execute them; do not improvise on design. If a spec is ambiguous or technically impossible as written, **stop and report back** rather than substituting your own design judgment.

Parent docs: `PRD-living-atlas-phase-1-3-2026-06-11` (scope/success criteria), the two redesign proposals (rationale).

## Ground rules

- **Branch:** all work on `atlas-redesign`. One commit per handoff, message format: `atlas(H{n}): {summary}`. **Never push, never merge.** Wedge reviews and merges manually.
- **Repo facts:** Quartz v4.5.2; site builds from the **vault root**, not `content/` — build with `npm run build` (wraps `npx quartz build --directory .`); preview with `npm run serve`. Custom components already exist in `quartz/components/` (HomeLanding, ProjectsGallery, JournalSpread, SiteNav, etc.) — follow their patterns.
- **Verification after every handoff:** `npm run build` must pass with zero errors; spot-check the pages named in the handoff's acceptance criteria via `npm run serve`.
- **Link safety:** after H0 and H6, grep build output for the changed slugs to confirm no 404s were introduced.
- **Do not touch:** any file under `wiki/` except where a handoff explicitly says so; `private/`, `finances/`, `raw/`, `00 Command Center/`; the agent contract files (`AGENTS.md`, `CLAUDE.md`, `GROK.md`).

## Execution order

| # | Handoff | Depends on | Shippable checkpoint |
|---|---------|-----------|----------------------|
| H0 | Catalog hotfixes | — | yes — can merge alone |
| H1 | Theme, typography, shell | — | yes — site stops looking like Quartz |
| H2 | Domain color system | H1 | no |
| H3 | Graph spine | H2 | no |
| H4 | Atlas homepage | H2, H3 | yes |
| H5 | Ledger strip | H4 | no |
| H6 | Blog → Journal fold | H1 | yes — final checkpoint |

## Design tokens (locked — used across H1–H5)

**Dark mode (default):** page `#171619` · surface `#1f1d22` · border `#302c31` · text-primary `#f5f1ed` · text-body `#ece7e2` · text-secondary `#8d8590` · text-faded `#6f6875` · accent (site chrome, links, active nav) `#c0a7ee` · highlight `rgba(192,167,238,0.14)`

**Light mode (variant, keep working):** keep the existing cream palette in `quartz.config.ts` lightMode block; accent `#734bb2`.

**Typography — two voices:**
- Thinking voice: **Lora** — all headings and body. h1 on index pages 2.2rem/500; h1 on notes 1.9rem; body 1.05rem, line-height 1.65.
- Machine voice: **JetBrains Mono** — ALL chrome: nav links, dates, metadata, type badges, tag chips, graph labels, ledger, breadcrumbs. 11–13px, `letter-spacing: 0.04em`, color text-secondary unless specified.
- No other fonts. No font weights above 600.

**Layout:** reading column `max-width: 68ch`, centered. Margin-note column 220px to the right of the reading column on viewports ≥ 1200px; below 1200px margin notes collapse inline after the article body. Radius 8px on cards/chips. Borders 1px `#302c31` (dark).
