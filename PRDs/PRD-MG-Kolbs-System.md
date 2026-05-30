---
title: "MG & Kolbs System — Pan's template repo, personal fork, and skills radar"
description: "Scoping for the three MG & Kolbs artifacts: a faithful public Pan's-template repo, Wedge's evolving private fork, and the public showcase page with an interactive example radar. Plus the real Datacore skills radar."
type: prd
status: ready
created: 2026-05-30
updated: 2026-05-30
tags:
  - prd
  - mg-kolbs
  - obsidian
  - bases
  - datacore
links:
  - "[[mg-kolbs/index]]"
---

# MG & Kolbs System

> Supersedes the original "Pan's Notion → Obsidian conversion" PRD (scratchpad) by widening scope to three artifacts. The original conversion spec still governs artifact #1.

## Context / current state (important)

`mg-kolbs/` is **not** a blank slate — it's ~35 notes, substantially built and already doing the right things:

- Mirrors Pan's structure (`index.md`: Databases, Anchored Goals + "How to Dissect", Evaluation).
- Already uses Obsidian **Bases** — e.g. `Skills.md` has a `base` codeblock live view over `mg-kolbs/Skills`.
- Already implements the **dual view** pattern: a "Public View (Website)" static markdown table + a "Live View (Obsidian)" Base.
- **Skills notes already carry level data** in frontmatter: `type: skill`, `current-level`, `final-level`, `competency`, `notes`. (Sleep, SIR, Prompt Design, BHS, Noticing, Verification, Workflow Design, Practice Consistency, Immersion Recurrence.)
- `Goals/` holds real personal goals (Agentic Engineering, Learning Systems, Vietnamese, 中文, Fitness, Relationships) with anchoring/dissection/mindset tables.
- A `private/` subfolder exists.

So "the mess" is **consistency/structure**, not missing content. This is roughly 70–80% there.

## The three artifacts

1. **Pan's MG & Kolbs Template** — a faithful 1:1 Obsidian copy of Pan's Notion template. Becomes its own public repo, credited to Pan, then **frozen**. (Original conversion PRD + the drafted README cover this.)
2. **Wedge's personal MG & Kolbs** — forked from #1 as the starting point, lives in `mg-kolbs/` (private, unpublished), **evolves** with personal features. This is what mostly exists today. Owns the **real** skills radar (Datacore, your actual levels).
3. **Public showcase page** — a *published* page demoing the template, carrying the **interactive example radar** (`LearningRadar` component, already built and parked) with fillable values. Note: `mg-kolbs/` is in the site's `ignorePatterns`, so this must be a separate published page, not the private folder.

## Problem

Three things are entangled and half-done: Pan's faithful version was never cleanly extracted; the personal fork is built but inconsistent; and the skills radar (the feature that motivated this) has real data waiting in the Skills frontmatter but nothing rendering it. Pull them apart, clean the fork, and ship the radar.

## Success criteria

1. **Pan's template** extracted as a clean, faithful, standalone repo (credited, README, no personal data) — frozen.
2. **Personal fork** passes a consistency pass: uniform frontmatter, no duplicate/stale notes, every Base view works, public-static tables match their live Bases.
3. **Real skills radar** renders in Obsidian (Datacore) from the existing Skills frontmatter — one radar for Learning Dimensions, extensible to Enablers and Kolbs. Seeded/aligned with your real levels.
4. **Public showcase page** published with the interactive example radar placed and labeled illustrative.
5. No regression to the public site; `mg-kolbs/` stays unpublished except the deliberate showcase page.

## Scope

**In:** extracting Pan's faithful version; consistency/cleanup of `mg-kolbs/`; the Datacore radar view; placing `LearningRadar` on a published showcase page; aligning Skills frontmatter to a single schema.

**Out:** new learning content; reworking the public home (done); Hermes/AI automations (out per earlier decision); changing the site theme.

## Skills radar — data already exists

The radar's data source is the Skills notes' frontmatter (`current-level` / `final-level` / `competency`). Two renderings:

- **Private (real):** a Datacore (JS) view in a `mg-kolbs/` page reads all `type: skill` notes and draws a radar of current vs. final level. Per the "Datacore as sole query engine" decision. This is the "see my progress visually" page.
- **Public (example):** the existing `LearningRadar` Quartz component with fillable sliders on the showcase page — clearly illustrative, no real data.

**Both views (decided):** a **Learning Dimensions radar** (the 5 ICS dimensions, seeded with the real ICS levels) *plus* a **personal Skills view** (the existing `Skills/` notes' current/final levels). The dimensions radar links out to the **improvement mechanisms** — Kolbs cycling and the 30 Day Plan/challenges — so it reads "you're a 2 here → here's how to raise it." Radar placed at the bottom of the page.

## Work packages — and what Claude Code can take

**Offload to Claude Code (clear specs, mechanical or code, locally previewable in Obsidian):**

- **WP1 — Extract Pan's faithful template.** From the Notion exports + the original conversion PRD, build the clean 1:1 version in a fresh folder/repo. Mechanical, well-specified. *Claude Code.*
- **WP2 — Consistency pass on `mg-kolbs/`.** Normalize frontmatter to one schema, fix/verify every Base view, make each public-static table match its live Base, remove duplicate/stale notes. Checklist-driven. *Claude Code (with a checklist we define).*
- **WP3 — Datacore skills radar view.** Write the Datacore JS that reads `type: skill` frontmatter and renders the radar (+ a dimensions variant). Pure code against a defined data shape. *Claude Code.*
- **WP4 — Repo packaging.** Init the Pan's-template repo, add the drafted README (in scratchpad), wire as a submodule if desired. *Claude Code.*

**Keep collaborative (judgment / your taxonomy):**

- This PRD and sign-off.
- Deciding dimensions-vs-skills for the radar, and your real seed levels.
- What to keep/cut in the personal fork; what's "faithful Pan" vs. "your addition."
- Placing/approving the public showcase page.

## Sequencing

1. Sign off this PRD; settle the open questions below.
2. **WP1 + WP4** (Claude Code): extract + package Pan's faithful repo from the exports. Independent of the fork.
3. **WP2** (Claude Code): consistency pass on the personal fork.
4. **WP3** (Claude Code): Datacore radar on the cleaned Skills data; then place `LearningRadar` on the showcase page.

## Decisions (resolved 2026-05-30)

1. **Radar = both views** — a Learning Dimensions radar *and* a personal Skills view. Radar sits at the **bottom** of the page (nice-to-have, low priority).
2. **Public vs private = two separate things, not a duplicated structure:**
   - **Private** `mg-kolbs/` (in `ignorePatterns`, unpublished) — the real system, real data, Datacore radar; used in Obsidian. **00 - Command Center** holds a launcher/link into it.
   - **Public** = one self-contained *published* showcase page (e.g. `mg-kolbs-template.md` at a published slug) with **example** static tables + the interactive `LearningRadar`. Example data is baked into the page; it does not read the private notes. Only this page is published.
3. **Pan's-faithful = git submodule** inside this vault (browsable in Obsidian, especially early) *and* a standalone repo. Its path goes into `ignorePatterns` so it isn't published.
4. **Personal fork:** keep `mg-kolbs/` as the fork. No hand edits done yet, so its current AI-generated content can be reworked freely. WP1 is a separate clean Pan's export (the submodule) for reference.
5. **Seed levels = the ICS results** (Deep processing 2, Self-regulation 2, Self-management 1, Mindset 3, Retrieval 3) — accurate. Add **links from the radar/dimensions to the improvement mechanisms** — Kolbs cycling and the 30 Day Plan / challenges — so the view is actionable (level → how to raise it).

## Notes

- Original conversion PRD + drafted README are currently in the Cowork scratchpad and should be moved into the Pan's-template repo as part of WP1/WP4.
- `LearningRadar` component + `learningRadar.inline.ts` are built and committed (parked), ready for WP3's showcase placement.
