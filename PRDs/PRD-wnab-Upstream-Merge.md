---
title: "PRD — wnab upstream-merge strategy"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - process
  - maintenance
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[journal/2026-05-29-wnab-direction-decided]]"
---

# PRD — wnab upstream-merge strategy

## Problem

wnab is a fork of `actualbudget/actual`, a fast-moving monorepo that ships frequently (engine fixes,
security patches, features). The reskin lives in the **view layer** (`desktop-client`,
`component-library`); the **engine** (`loot-core`) we want to track upstream unchanged. Without a
deliberate merge discipline, one of two bad outcomes is near-certain: we **strand on a stale engine**
(missing security/bug fixes) because merging is scary, or an upstream pull **clobbers the reskin** in a
pile of conflicts. This is lower-glamour than features but higher-risk to the project's survival.

## Success criteria

- A documented, **repeatable** procedure to pull upstream and rebuild, run on a set cadence.
- Engine updates land with **minimal, predictable** conflicts (most absorbed automatically).
- The reskin is structured so the view-layer divergence is **isolated and conflict-resistant**.
- After any merge, a known smoke test confirms the budget loop + the wnab theme still work.

## Scope

**In:** concretely catalog the engine-vs-view seam (which packages/files are "ours" vs "theirs");
define merge cadence; define conflict-isolation tactics (theme as CSS-variable token overrides rather
than edits to upstream component internals; localize unavoidable layout edits); a post-merge smoke test.

**Out:** contributing changes back upstream; fully automating merges; CI infrastructure (later).

## Constraints / risks

- **Theme = low conflict, layout = high conflict.** Reskin via overriding semantic CSS tokens
  (`component-library/.../themes`, the documented custom-theme path) barely conflicts; direct edits to
  `BudgetTable.tsx` / `ExpenseCategory.tsx` etc. conflict hard. Bias the reskin toward the former.
- The more the view diverges, the heavier every future merge — divergence has an ongoing tax.
- Native modules (`better-sqlite3`, `bcrypt`) need rebuilds after engine bumps (`rebuild-electron`).

## Plan (sequencing)

1. **Catalog divergence:** list every file wnab has changed vs upstream; classify token-override vs
   structural edit. This is the seam, made explicit.
2. **Set cadence:** e.g., pull upstream monthly (or on security advisories); never let the gap grow large.
3. **Isolation tactics:** push as much reskin as possible into theme tokens + additive components;
   document the few structural edits so conflicts are expected, not surprising.
4. **Smoke test:** define the post-merge check (build, open Envelope budget, assign, confirm theme).
5. Document the whole loop in `wnab/docs/` so Claude Code can run it.

## Open questions

- Cadence: scheduled monthly, or triggered by upstream releases/advisories?
- Strategy: `git merge` upstream/master, or rebase the wnab branch onto it? (Merge is safer for a long-lived divergent branch.)
- How much layout divergence is acceptable before the merge tax outweighs the YNAB-look benefit?
