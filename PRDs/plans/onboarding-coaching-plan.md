---
title: "Implementation Plan — wnab onboarding + coaching layer"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-Onboarding-Coaching]]"
tags:
  - implementation-plan
  - wnab
  - coaching
  - onboarding
  - view-layer
---

# Implementation Plan — wnab onboarding + coaching layer

This plan covers the static, rules-based coaching layer: a structured budget-state→message
nudge model, the refactor of the existing scattered copy onto it, and a skippable first-run
teaching flow. It is view-layer only and lives entirely in `packages/desktop-client` (with one
small, optional typed-key addition flagged below). The AI/dynamic upgrade is out of scope and
tracked separately in [[PRDs/PRD-wnab-AI-Layer]].

## Current state

**Done**

- A single coaching nudge surface exists at the "To Assign" banner, copy-edited to original
  voice across three states (positive / negative / zero). Evidence:
  `packages/desktop-client/src/components/budget/envelope/budgetsummary/ToBudgetAmount.tsx`
  lines 123–128, and commit `2fac7a2b2` ("wnab: coaching copy v1 — assign-flow nudges").
- The "To Assign / Over-assigned" label and the filled banner pill that hosts the nudge are in
  place. Evidence: `ToBudgetAmount.tsx` lines 59, 86–105; commits `b508e810a` and `568434a4b`.
- Original-voice copy already replaced the draft strings (no YNAB verbatim wording). Evidence:
  the `2fac7a2b2` diff shows the draft comment "rewrite in your own voice" removed and the three
  strings rewritten.
- Targets-based auto-assign is enabled by default, which gives the "fully funded" state real
  meaning to coach toward. Evidence:
  `packages/desktop-client/src/hooks/useFeatureFlag.ts` lines 6–7 (`goalTemplatesEnabled` and
  `goalTemplatesUIEnabled` flipped to `true`); commit `c9f366503`.
- Modal infrastructure that a first-run flow can plug into already exists and is well-patterned:
  a Redux discriminated-union registry plus a render switch. Evidence:
  `packages/desktop-client/src/modals/modalsSlice.ts` (the `Modal` type union, line ~40 onward)
  and `packages/desktop-client/src/components/Modals.tsx` (the `case '<name>':` switch, e.g.
  line 124 `case 'keyboard-shortcuts'`). Modals are opened with `pushModal({ name })` (used
  widely, e.g. `packages/desktop-client/src/components/settings/Encryption.tsx`).

**In progress**

- The coaching layer as a *system*. Right now it is exactly one surface with inline ternary JSX.
  The PRD's "structured state model" does not exist yet — there is no config/data module; the
  copy is hardcoded in the component. Evidence: `ToBudgetAmount.tsx` lines 123–128; a search for
  any `coaching`/`nudge` config module returns only this file (no `src/coaching/`, no
  `budget/coaching/` directory).

**Not started**

- A structured budget-state→message nudge model (config/data, not inline JSX). Evidence: no such
  module exists (directory search returned "no coaching dir" / "no src/coaching dir").
- Refactor of the existing `ToBudgetAmount` nudge onto that model. Evidence: copy is still inline
  at `ToBudgetAmount.tsx` lines 123–128.
- Per-category "overspent" nudge. The `BalanceWithCarryover` change to date is purely visual (a
  colored Available pill), with no coaching copy. Evidence:
  `git diff ff70d2d5f..HEAD -- packages/desktop-client/src/components/budget/BalanceWithCarryover.tsx`
  shows only styling (pill background/color), no strings.
- First-run onboarding flow (modal sequence). Evidence: no onboarding/welcome/tutorial modal in
  `packages/desktop-client/src/components/modals/` (63 modals listed; none onboarding-related),
  and no first-run flag in prefs types (`packages/loot-core/src/types/prefs.ts` `LocalPrefs` /
  `SyncedPrefs` — no `firstRun`/`onboard`/`welcome` key).
- A re-open entry point ("show the coaching tour again"). Evidence: the budget page menu
  (`packages/desktop-client/src/components/modals/BudgetPageMenuModal.tsx`) and the settings
  pages (`packages/desktop-client/src/components/settings/`) contain no such item.
- Note: the "age of money" hits in the codebase are the **upstream** Age of Money report, not
  wnab coaching. Evidence: `git log -1` on
  `packages/desktop-client/src/components/reports/reports/AgeOfMoneyCard.tsx` shows author
  Matiss Janis Aboltins (upstream), commit `d8317c44b`. These are not the "scattered strings" the
  PRD refers to and must be left alone.

## Dependencies & shared contracts

- **Upstream merge surface (the central constraint).** All wnab divergence to date is in
  `desktop-client` + `component-library`; the engine packages are untouched. Evidence:
  `git diff ff70d2d5f..HEAD --stat` shows changes confined to those two packages. Every file this
  plan touches that is also an upstream file (notably `ToBudgetAmount.tsx`,
  `BalanceWithCarryover.tsx`, `Modals.tsx`, `modalsSlice.ts`, `BudgetPageMenuModal.tsx`) becomes
  recurring conflict surface that [[PRDs/PRD-wnab-Upstream-Merge]] must track. Mitigation, baked
  into the task order below: put all *new* logic in new, wnab-owned files (a `coaching/` module
  and an onboarding modal component) and keep edits to upstream files down to a single import +
  call site each. The smaller the footprint on shared files, the cheaper the merge.

- **First-run flag storage — a real contract decision.** Persisting "has seen onboarding" is the
  one place this work risks leaving the view layer. The clean view-layer-only route is to store
  the flag in `localStorage` directly (or via `useLocalStorage` from `usehooks-ts`, the same
  primitive `useLocalPref` is built on — see `packages/desktop-client/src/hooks/useLocalPref.ts`),
  scoped by budget id. The typed route is to add one key to `LocalPrefs` in
  `packages/loot-core/src/types/prefs.ts` (lines 83–97) and use `useLocalPref`, but that edits an
  engine package and is therefore the wrong tradeoff for a view-only PRD. **Recommendation: store
  the flag in `localStorage` from the view layer; do not edit `prefs.ts`.** (Resolved in Open
  questions.)

- **Modal registry contract.** A first-run modal must register a `name` in the `Modal` union in
  `packages/desktop-client/src/modals/modalsSlice.ts` and a `case` in
  `packages/desktop-client/src/components/Modals.tsx`. Both are upstream files; these two edits are
  the unavoidable merge cost of using the existing modal system (the alternative — a bespoke
  always-mounted overlay — avoids the registry but is less idiomatic). The modal component itself
  uses `Modal`, `ModalHeader`, `ModalCloseButton` from `#components/common/Modal` (pattern visible
  in `packages/desktop-client/src/components/modals/KeyboardShortcutModal.tsx`).

- **i18n contract.** All user-facing strings must go through `t()`/`Trans` (enforced by the
  `actual/no-untranslated-strings` ESLint rule, per `AGENTS.md`). The nudge config must therefore
  hold either translation keys or `t`-wrapped getters, not bare literals, so `yarn generate:i18n`
  and the lint rule stay happy. This is a shared contract with the existing pattern in
  `ToBudgetAmount.tsx` (which already wraps copy in `t(...)`).

- **Downstream dependency.** [[PRDs/PRD-wnab-AI-Layer]] explicitly upgrades *this* layer: its
  "explain why" output is meant to reinforce the same mindset rules. Keeping the static copy in one
  editable module (the nudge config) is what makes that later swap-in tractable — the AI layer
  becomes a different *source* feeding the same state→message contract.

## Risks

- **Over-coaching / nagging.** The PRD's own tripwire: if nudges annoy more than help, cut them.
  Design implication — every nudge must be dismissable and the first-run flow skippable and
  non-blocking. Build dismissal into the model from the start, not as a retrofit.
- **Merge churn on `ToBudgetAmount.tsx`.** It is both an upstream file and the most-edited wnab
  file (touched by `b508e810a`, `2fac7a2b2`, `568434a4b`). Refactoring it to consume the nudge
  model adds another wnab delta there. Keep the in-file change to: import the resolver, call it,
  render its output — so the upstream diff stays a few lines.
- **IP boundary.** Copy must stay original voice, no YNAB verbatim screens or wording (project
  decision restated in the PRD constraints). The existing v1 strings already clear this bar; new
  first-run copy must be authored to the same standard.
- **Scope creep toward dynamic coaching.** Anything that computes *personalized* advice belongs to
  [[PRDs/PRD-wnab-AI-Layer]]. This layer is a pure function: budget state in, static message out.
- **State detection accuracy.** "Category overspent" and "fully funded" must read real engine
  values (e.g. the carryover/balance binding already used in `BalanceWithCarryover.tsx`, the
  `envelopeBudget.toBudget` sheet value in `ToBudgetAmount.tsx`). Misreading state produces
  confidently-wrong coaching — worse than none. Derive states only from existing bindings; add no
  new spreadsheet bindings (that would touch the engine surface).

## Open questions — resolved

- **First-run weight: 3–4 screen modal, or interactive "assign your first dollar" guided moment?**
  Recommend a **short 3–4 screen modal sequence** (the PRD's own sequencing step 4 leans this way).
  Rationale: the modal registry already exists and is idiomatic
  (`modalsSlice.ts` + `Modals.tsx`), so a modal is additive and isolated — the cheapest merge
  surface. An interactive guided tour would need to instrument live budget components (highlights,
  step gating) deep inside upstream files, multiplying merge conflict surface for marginal
  teaching gain. Ship the modal first; a guided moment can be a later, separately-scoped follow-up
  once the static layer earns it.

- **Where does copy live — typed config file, or markdown the build ingests?**
  Recommend a **typed TypeScript config module** (e.g. `src/coaching/nudges.ts` exporting a typed
  `BudgetState → message` map, with copy wrapped in `t()` getters). Rationale: markdown ingestion
  needs a build step and loader (more moving parts, and it would not satisfy the
  `no-untranslated-strings` / `generate:i18n` pipeline cleanly), whereas a typed module is
  type-checked, lint-compatible, tree-shaken, and editable in one place — exactly the "editable in
  one place" goal in the PRD. It also gives the AI layer a typed contract to target later.

- **Does onboarding seed example categories, or start fully empty?**
  Recommend **start empty; do not seed categories.** Rationale: seeding categories is an *engine*
  mutation (creating category groups/categories via loot-core), which breaks the view-layer-only
  constraint and the additive/isolated rule. The teaching value comes from the copy and the live
  nudges guiding the user to assign their own dollars, not from pre-filled data. (Actual already
  offers a "View demo" sample budget for those who want example data, per the repo's Cursor
  instructions — so the empty-start path loses nothing.) If category-seeding is ever wanted, it is
  a separate, engine-touching PRD.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Define the budget-state enum + message contract: a typed module enumerating the PRD's states (`unassigned` / `over-assigned` / `category-overspent` / `fully-funded`, plus zero/neutral) mapped to `t()`-wrapped copy. New file, wnab-owned. | new `packages/desktop-client/src/coaching/nudges.ts` | S | Yes | No |
| 2 | Author the original-voice copy for all nudge states in that module (port the three existing v1 strings verbatim from `ToBudgetAmount.tsx` lines 124–128 as the seed). | `src/coaching/nudges.ts` | S | Yes | No |
| 3 | Add a small pure resolver/hook that maps live budget state to a message (read existing bindings only: `envelopeBudget.toBudget` and the carryover/balance value already used today — add no new spreadsheet bindings). | new `src/coaching/useNudge.ts` (or pure fn in `nudges.ts`) | M | Yes | No |
| 4 | Refactor `ToBudgetAmount` to consume the resolver: replace the inline ternary (lines 123–128) with an import + single call. Keep the upstream diff to a few lines. | `packages/desktop-client/src/components/budget/envelope/budgetsummary/ToBudgetAmount.tsx` | S | Yes | No |
| 5 | Add the per-category "overspent" nudge surface using the same resolver (e.g. tooltip/inline text driven off the carryover/balance state already computed there). Additive only — do not disturb the existing pill styling. | `packages/desktop-client/src/components/budget/BalanceWithCarryover.tsx` | M | Yes | No |
| 6 | Build the first-run onboarding modal component: a 3–4 screen sequence (give every dollar a job; true expenses; roll with the punches; age your money), skippable, all copy original-voice via `t()`. Follow the `KeyboardShortcutModal.tsx` pattern (`Modal`/`ModalHeader`/`ModalCloseButton` from `#components/common/Modal`). | new `packages/desktop-client/src/components/modals/OnboardingModal.tsx` | L | Yes | No |
| 7 | Register the modal: add `{ name: 'onboarding' }` to the `Modal` union and a `case 'onboarding'` to the render switch. Two-line edits to upstream files (accept as known merge cost). | `packages/desktop-client/src/modals/modalsSlice.ts`, `packages/desktop-client/src/components/Modals.tsx` | S | Yes | No |
| 8 | First-run trigger + persistence: on budget open, if the `localStorage` "seen onboarding" flag (scoped by budget id) is unset, `pushModal({ name: 'onboarding' })` and set the flag on completion/skip. View-layer storage only — do NOT edit `prefs.ts`. | `packages/desktop-client/src/components/budget/index.tsx` (mount/effect at the `Budget()` component, ~line 38), new tiny `src/coaching/firstRun.ts` helper | M | Yes | No |
| 9 | Re-open entry point: add a "Show the coaching tour" menu item that fires `pushModal({ name: 'onboarding' })`, so the flow is re-openable per the success criteria. | `packages/desktop-client/src/components/modals/BudgetPageMenuModal.tsx` (or a settings page under `src/components/settings/`) | S | Yes | No |
| 10 | Run i18n extraction + lint: `yarn generate:i18n`, `yarn lint:fix`, confirm `no-untranslated-strings` passes on the new copy. | i18n locale files (generated), config modules | S | Yes | No |
| 11 | Typecheck + targeted tests: `yarn typecheck`; add a unit test for the state→message resolver (pure function, easy to cover). Optionally a Playwright check that the first-run modal appears once and not again. | new `src/coaching/nudges.test.ts`; optional `packages/desktop-client/e2e/` | M | Yes | No |
| 12 | Manual smoke in the running app: empty budget → onboarding modal appears once, is skippable, re-openable from the menu; nudges show correct copy per state (positive / over-assigned / overspent / fully funded). | runtime only | M | Yes | Yes (run/observe the app — `yarn start` browser is enough; full Electron run only if validating the packaged build) |

Notes on the table: tasks 1–3 are the self-contained model and can land before any upstream-file
edit. Tasks 4–9 each touch exactly one upstream file with a minimal diff, preserving the
additive/isolated merge posture. Task 12 is the only one that benefits from Wedge's hands, and even
then the browser dev server (`yarn start`, port 3001) suffices — no Xcode/Electron packaging is
required to validate this view-layer work.

## Readiness verdict

**Ready to build.** The architecture is well-understood and the seams are clean: the modal system,
prefs primitives, and the single existing nudge are all located and cited. The only contract
decision with teeth — where to persist the first-run flag — is resolved in favor of view-layer
`localStorage`, which keeps the engine untouched and honors the view-only constraint. The three
PRD open questions are resolved (modal over guided tour; typed config over markdown; empty start
over seeded categories). The dominant risk is merge surface on shared upstream files; the task
order is sequenced to minimize it by concentrating new logic in wnab-owned `coaching/` files and
limiting each upstream-file edit to an import-and-call. No engine changes, no Mac-specific build
work, and every task is reversible. An agent can execute tasks 1–11 end to end; task 12 is a short
manual smoke pass.
