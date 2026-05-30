---
title: "Implementation Plan — wnab AI layer (Cowork over exported data)"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-AI-Layer]]"
tags:
  - implementation-plan
  - wnab
  - ai
  - cowork
  - finances
---

# Implementation Plan — wnab AI layer (Cowork over exported data)

This plan scopes **opportunity #1 only** from [[PRDs/wnab-AI-Ideas]]: explainable auto-assign. The deliverable
is a Cowork workflow that reads one exported budget snapshot, proposes how to split "To Assign" across
categories with reasoning, and presents that for approve-before-execute. Opportunities #2–#7 are explicitly
parked and out of scope here.

The defining fact of this plan: the AI layer owns almost no code. The engine already does the math, Cowork
already does the judgement, and the snapshot it reads is **not this PRD's to design** — it belongs to
[[PRDs/PRD-wnab-Obsidian-Bridge]]. So most of the work here is a prompt, a worked example, and an honest
resolution of the apply-back tension. The risk is not building too little; it is quietly redesigning the
Bridge schema or sneaking a write path into a read-only contract.

## Current state

### Done

- **The decision-fatigue framing and the strategic boundary are settled.** wnab stays local/serverless;
  AI lives in Cowork over exports; no API keys in a browser app; Ollama is the only in-app route if ever
  wanted. Evidence: [[PRDs/wnab-AI-Ideas]] (idea bank, 7 opportunities, "Strategic frame" section) and
  the Constraints block of `/Users/n1/Projects/llm-knowledge-base/PRDs/PRD-wnab-AI-Layer.md` lines 46–53.
- **The assign engine that produces the numbers is already on.** wnab enabled goal templates by default
  (`goalTemplatesEnabled: true`, `goalTemplatesUIEnabled: true`), which turns on targets-based auto-assign
  (Apply/Check/Overwrite templates + N-month averages). Evidence: commit `c9f366503`, file
  `packages/desktop-client/src/hooks/useFeatureFlag.ts`. This means the "engine does the math" half of
  opportunity #1 already exists in the app; Cowork's role is the judgement and reasoning layer on top.
- **The raw inputs the suggestion needs exist in the engine.** Upcoming bills live in
  `packages/loot-core/src/server/schedules/find-schedules.ts`; targets/templates live in
  `packages/loot-core/src/server/budget/goal-template.ts` and `schedule-template.ts`; per-category
  history is derivable from the same budget tables. Evidence: directory listing of
  `packages/loot-core/src/server/budget/` and `.../schedules/`. So the data the PRD worries about
  (upcoming bills + history) is *present in wnab* — the open question is whether the Bridge **exports** it,
  not whether it exists.
- **The To Assign surface the suggestion targets is built and styled.** "To Assign" renders as a filled
  green/red banner pill with coaching copy in three states. Evidence: commit `568434a4b` and
  `packages/desktop-client/src/components/budget/envelope/budgetsummary/ToBudgetAmount.tsx` (lines 112–129).
  This matters only as the *destination* a user types approved numbers into; the AI layer does not touch it.

### In progress

- **Nothing in this PRD is in progress.** No AI-layer code, prompt, or Cowork workflow exists in either repo.
  Evidence: `grep -ri "Finances/wnab" packages/` and `grep -rln "snapshot|exportSnapshot|budget-snapshot"
  packages/desktop-client/src packages/loot-core/src` return no AI/export-snapshot matches (the only
  `snapshot` hit is an unrelated test, `TransactionsTable.test.tsx`).

### Not started

- **The snapshot export does not exist.** `~/Documents/Finances/wnab/` contains only `.env`, `README.md`,
  and `serve/` — no snapshot JSON. Evidence: `ls -la ~/Documents/Finances/wnab/`. The only export handler
  in the engine is `export-budget` (an *encrypted full-backup buffer* via `cloudStorage.exportBuffer()`),
  not a readable JSON snapshot. Evidence: `packages/loot-core/src/server/budgetfiles/app.ts` lines 488–494.
  **This is the Bridge's deliverable, not this PRD's** — flagged here because the AI layer cannot start its
  end-to-end test until at least one real snapshot file exists.
- **The snapshot schema (shared contract) is undefined.** Neither PRD has committed a schema yet; the Bridge
  PRD lists it as its first sequencing step. Evidence: `PRD-wnab-Obsidian-Bridge.md` lines 51–58 ("Define
  the snapshot JSON schema… Version field included") and its open question (lines 62) "Minimum fields the
  overview needs vs the fuller set the AI layer wants — design for the superset?".
- **The Cowork auto-assign workflow / prompt does not exist.** No prompt template, no worked example, no
  approve-before-execute output format anywhere in the vault or repo. Evidence: no files under
  `/Users/n1/Projects/llm-knowledge-base/PRDs/plans/` (this is the first), and no AI workflow doc in the vault.
- **Apply-back mechanism undecided.** The PRD itself flags this as the biggest tension and defers it to open
  questions. Evidence: `PRD-wnab-AI-Layer.md` lines 52–53 and 65. Resolved below.

## Dependencies & shared contracts

- **Hard dependency on [[PRDs/PRD-wnab-Obsidian-Bridge]] for the snapshot schema.** The Bridge owns the
  snapshot JSON: budget month, categories with assigned/activity/available, account balances, age-of-money,
  and a `version` field. This plan **defers entirely** to the Bridge for that schema and must not redesign it.
  The one input this PRD contributes is a *requirements list* for the superset (see Bridge open question,
  lines 62): the auto-assign suggestion additionally needs (a) **upcoming scheduled bills** with due dates and
  amounts, and (b) **per-category recent history** (N-month averages or last 3–6 months of activity). These
  should be folded into the Bridge schema as optional/extended fields so the overview and the AI read one file.
- **Engine as the source of math.** The assigned/available numbers, target templates, and N-month averages
  are computed by loot-core (goal templates already enabled, `c9f366503`). The AI never recomputes balances;
  it reasons over numbers the engine produced and the Bridge exported. Shared contract: the snapshot's
  numeric fields are authoritative and in the engine's integer-cents convention — the prompt must not invent
  or re-derive them.
- **Cowork (Claude) as the runtime.** The workflow runs in Cowork over the local exported file. No new
  service, no API key, no network call from the wnab app. This is consistent with [[PRDs/wnab-AI-Ideas]]
  "Strategic frame".
- **Coaching layer alignment.** The "explain why" output is meant to reinforce the static rules layer in
  [[PRDs/PRD-wnab-Onboarding-Coaching]]. Shared contract: the AI's reasoning copy should speak the same
  four-rule vocabulary (give every dollar a job; true expenses; roll with the punches; age your money) and
  stay in wnab's original voice — no YNAB verbatim wording (IP boundary, that PRD's lines 33, 49).
- **Folder/path contract.** The snapshot lands in `~/Documents/Finances/wnab/`, the same private folder the
  Bridge writes to and `Finances.md` reads from (loader in `tools/finance-helpers.md`). The AI workflow reads
  from there too — it does not introduce a new location.

## Risks

- **Schema drift / redesign-by-accident.** The single biggest risk is this plan or the Cowork prompt baking
  in field names the Bridge hasn't committed, creating two divergent schemas. Mitigation: ship the AI-layer
  *requirements list* into the Bridge schema discussion and treat the Bridge file as the only source of truth;
  do not invent fields in the prompt.
- **Apply-back breaks the read-only invariant.** A guarded write path back into wnab directly contradicts the
  Bridge's "read-only" scope (Bridge PRD lines 42–43, "write-back from Obsidian into wnab… this is read-only").
  Mitigation: resolve toward manual re-entry for v1 (see Open questions) so the invariant holds.
- **Bad suggestion quality from a thin snapshot.** If the snapshot lacks upcoming bills + history, the
  suggestion is guesswork and the "explain why" rings hollow. Mitigation: gate the prototype on a snapshot
  that actually carries those fields; otherwise the test proves nothing.
- **Stale snapshot → wrong advice.** A manual export means the snapshot can lag the real budget; an
  auto-assign suggestion computed against stale "To Assign" could be off. Mitigation: stamp the snapshot
  with an export timestamp and have the workflow surface it ("based on a snapshot from <time>").
- **Data boundary creep.** The whole value proposition rests on financial data not leaving the machine beyond
  the agreed boundary. Risk: a future convenience (pasting the snapshot into a hosted tool, piping to a
  third-party API) erodes it. Mitigation: keep the workflow Cowork-over-local-file; document the boundary in
  the workflow doc itself.
- **Over-trust of the draft.** Approve-before-execute only protects the user if the approval step is real.
  Risk: the output is so confident it gets rubber-stamped. Mitigation: the output format must force a
  per-category line the user can edit, not a single "apply all" blob.

## Open questions — resolved

- **Apply-back: manual re-entry or a guarded write path?**
  **Recommendation: manual re-entry for v1.** The approved suggestion is presented as a clean, ordered list
  of `category → amount` lines (plus the one-line reason per category), and Wedge types those into wnab's
  assign UI — which already supports targets-based auto-assign and per-category editing (`c9f366503`). This
  keeps the Bridge read-only invariant intact (Bridge PRD lines 42–43), needs zero new write code, and the
  manual step *is* the approve-before-execute gate rather than an obstacle to it. A guarded write path
  (e.g. an "import suggestion" action in wnab that ingests a JSON the workflow emits) is deferred to a future
  iteration and should only be built if manual re-entry proves to be the friction that kills adoption.
  When/if built, it belongs in wnab (an explicit, reviewable import action in the app), **not** in the
  Obsidian bridge, so read-only stays read-only. For v1, optimise the output format to make re-entry fast
  (categories in the same order the wnab UI shows them, amounts in the app's display units).
- **Does the bridge export enough (upcoming bills + history) for a good suggestion?**
  **Recommendation: not yet — and that is the Bridge's job to fix, with this PRD supplying the requirements.**
  The data exists in the engine (`find-schedules.ts`, `goal-template.ts`, N-month averages) but the export
  doesn't exist at all yet. Fold two extended fields into the Bridge snapshot superset: (1) upcoming scheduled
  bills (next ~30–60 days, with due date + amount + category) and (2) per-category recent activity
  (last 3–6 months, or the N-month average the engine already computes). Version-gate them so the read-only
  overview can ignore them and the AI layer can require them.
- **Cowork only, or also a local Ollama path?**
  **Recommendation: Cowork only for v1; design the prompt to be model-portable.** Cowork-over-exports is the
  lowest-infra, highest-value route ([[PRDs/wnab-AI-Ideas]] "Next step"), and the snapshot file + prompt are
  the entire interface — nothing about them is Cowork-specific. Keep the prompt as a plain, portable template
  so a local Ollama run is a later swap, not a rewrite. Do not build the Ollama path now; it earns its place
  only if a fully-offline requirement appears.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Write the AI-layer **snapshot requirements list** (the two extended fields: upcoming bills, per-category history) and hand it to the Bridge schema discussion as the superset input. No schema design here — just the field requirements and why #1 needs them. | New note in vault, e.g. `PRDs/plans/ai-layer-snapshot-requirements.md` (or a section appended to the Bridge plan) | S | Yes | No |
| 2 | Confirm with the Bridge owner that the committed schema includes those fields (or version-gates them). Update this plan's Dependencies section if the schema lands differently. Blocking gate for end-to-end test. | This plan doc; Bridge schema artifact (read) | S | Yes | No (decision/sign-off; Wedge confirms) |
| 3 | Obtain **one real snapshot file** to test against. Until the Bridge export ships, produce a hand-built fixture snapshot matching the agreed schema (real-ish categories, a positive "To Assign", a couple upcoming bills, 3 months history) and place it under `~/Documents/Finances/wnab/`. | `~/Documents/Finances/wnab/<snapshot>.json` (fixture) | S | Yes | No (agent can author the fixture) |
| 4 | Author the **Cowork auto-assign prompt/workflow**: input = snapshot path; behaviour = propose how to split "To Assign" across categories using upcoming bills + history + targets, with a one-line reason per category, in four-rule coaching voice; output = an ordered editable `category → amount + why` table; explicit approve-before-execute framing. | New workflow doc in vault, e.g. `PRDs/plans/ai-layer-cowork-workflow.md` | M | Yes | No |
| 5 | Define the **output / apply-back format** for manual re-entry: categories in wnab UI order, amounts in display units, a running total that reconciles to "To Assign", and a clear "approve / tweak / reject per line" structure. Document that v1 is manual re-entry and why (read-only invariant). | Same workflow doc (output spec section) | S | Yes | No |
| 6 | **Dry-run the workflow** in Cowork against the task-3 fixture snapshot. Verify: suggestion sums to "To Assign", reasons are specific (not generic), voice matches the coaching layer, no invented numbers. Capture the run as a worked example in the workflow doc. | Workflow doc (worked-example section); Cowork session | M | Yes | No |
| 7 | **Manual apply test**: take the approved fixture suggestion and type it into wnab's assign UI to confirm the format is fast to re-enter and the categories line up with the real UI. Surfaces any format mismatch before the real-data test. | wnab app (GUI, assign flow); workflow doc (notes) | S | Yes | **Yes** (runs the app, types into assign UI) |
| 8 | **Real-data validation** once the Bridge export ships: re-run tasks 6–7 against a genuine exported snapshot; assess suggestion quality and re-entry friction. This is the go/no-go for expanding to opportunities #2–#3. | Real snapshot from Bridge; workflow doc; this plan (verdict update) | M | Yes | **Yes** (needs the built app to export a real snapshot) |
| 9 | **Decision write-up**: record the apply-back verdict (manual re-entry held / or build a guarded wnab import action) and whether quality earned expansion to #2/#3. File as a decision note in the vault. | New decision note in `decisions/` | S | Yes | No |

## Readiness verdict

**Blocked-but-cheap-to-start.** The AI layer is the lowest-code item in the wnab program — its real
deliverables are a requirements list, a prompt, an output format, and an honest apply-back decision (all
resolved above, recommendation: **manual re-entry for v1**). Tasks 1, 4, and 5 are pure authoring an agent
can do today against a hand-built fixture (task 3), so the prototype need not wait idle.

What it cannot do today is prove itself: tasks 8–9 are **gated on the Bridge** shipping a real JSON snapshot
that carries upcoming bills + per-category history. That snapshot does not exist yet
(`ls ~/Documents/Finances/wnab/` shows no JSON; the only engine export is an encrypted backup buffer,
`budgetfiles/app.ts:488`). The single most important coordination act is **task 1 → task 2**: get the
AI-layer's two extended fields into the Bridge's schema superset *before* the Bridge freezes it, so the file
the overview reads and the file the AI reads are the same file. Do that, build the prompt against a fixture
in parallel, and the real-data validation drops in cleanly the moment the export lands. Do not redesign the
schema here, and do not build a write path back into wnab for v1.
