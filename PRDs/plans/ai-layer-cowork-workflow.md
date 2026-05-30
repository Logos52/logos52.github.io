---
title: "Cowork workflow — explainable auto-assign over a wnab snapshot"
type: workflow-spec
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-AI-Layer]]"
tags:
  - workflow-spec
  - wnab
  - ai
  - cowork
  - finances
  - auto-assign
---

# Cowork workflow — explainable auto-assign over a wnab snapshot

This is the operational spec for opportunity #1 from [[PRDs/wnab-AI-Ideas]]: **explainable
auto-assign**. A model (Cowork today; any model later) reads one local budget snapshot, drafts how to
split *To Assign* across categories with a one-line reason per category, and hands that back for the
user to approve, tweak, or reject. The model originates a draft; the user originates the decision.

The schema this reads is **not defined here** — it is owned by [[PRDs/PRD-wnab-Obsidian-Bridge]] and
versioned in `SNAPSHOT-SCHEMA.md`. This doc references those fields and never redefines them.

---

## 1. Purpose & data boundary

**One file, one machine, approve-before-execute.** The model reasons over a single local snapshot
JSON that wnab exports. Nothing about this workflow sends financial data off the machine beyond the
agreed Cowork-over-local-file boundary: there is no server, no API key in the wnab app, no upload of
transactions to a third-party endpoint. The snapshot is read; a suggestion is drafted; the user
decides.

- **Scope: opportunity #1 only.** Explainable auto-assign. Roll-with-the-punches coverage shows up
  here only as a *priority rule* inside the single suggestion (cover overspend before discretionary
  funding), not as a separate workflow. Opportunities #2–#7 (standalone overspend handling, import
  categorization, dynamic coaching, monthly review, true-expense detection, target suggestions) are
  out of scope.
- **Approve-before-execute.** The model never moves money. Its entire output is a draft the user
  reads. The approval step is real because the output format forces a per-category line the user can
  edit, not a single "apply all" blob (see §4).
- **v1 apply-back is MANUAL RE-ENTRY.** An approved suggestion is typed by hand into wnab's assign
  UI. There is **no write-back into wnab**. This is deliberate: the bridge is read-only
  (`SNAPSHOT-SCHEMA.md`: "nothing reads it to mutate wnab"), and a guarded write path would break
  that invariant. Manual re-entry needs zero new write code and the typing *is* the approve gate. A
  guarded "import suggestion" action, if ever built, belongs in wnab as an explicit reviewable action
  — never in the bridge — and is deferred (see §6).

---

## 2. Input contract

- **Path.** Production: `~/Documents/Finances/wnab/snapshot.json` (the single shared constant in
  `SNAPSHOT-SCHEMA.md` §Path). **For this prototype**, the model reads the synthetic fixture at
  `/Users/n1/Projects/llm-knowledge-base/PRDs/plans/ai-layer-fixture-snapshot.json`.
- **Fields referenced — only those defined in `SNAPSHOT-SCHEMA.md`:**
  `summary.toBudget` (the dollars to distribute); `categoryGroups[].categories[]` with
  `name` / `assigned` / `activity` / `available` / `carryover` and the group's `isIncome`;
  `upcomingBills[]` with `name` / `nextDate` / `amount` / `category` / `categoryId`;
  `categoryHistory[]` with `category` / `average` (and `months[]` for context). `ageOfMoney` and
  `recentTransactions` inform tone but are not load-bearing for the math.
- **The model invents no fields.** If a field is absent it is tolerated with a safe default
  (`SNAPSHOT-SCHEMA.md` §Conventions: readers must tolerate missing optional fields and ignore
  unknown ones). A snapshot lacking `upcomingBills` + `categoryHistory` produces a low-confidence
  draft, flagged as such.
- **Engine numbers are authoritative.** `assigned` / `activity` / `available` / `average` /
  `toBudget` come straight from loot-core. The model **never recomputes a balance** and never
  re-derives `average` from raw transactions — the engine's number is the truth (schema §categoryHistory).
- **Units & signs (read once, hold throughout).** Every amount is **integer cents**; divide by 100
  only at display time. **Negative = money out.** `activity` is normally negative; `assigned` is ≥ 0;
  `available` may be negative (overspent); bill `amount` is negative for an expense schedule. The
  suggestion's assigned amounts are **positive cents** that must sum to `toBudget`.
- **Staleness.** The workflow surfaces `generatedAt` ("based on a snapshot from <time>") so a stale
  file reads as stale, not authoritative.

---

## 3. The prompt (model-portable template)

Plain text, no Cowork-specific syntax — a later Ollama swap is a drop-in, not a rewrite.

> **You are drafting a budget auto-assign suggestion for the user to approve. You do not move money;
> you propose, the user decides.**
>
> Read the snapshot JSON at `<PATH>`. It conforms to wnab `SNAPSHOT-SCHEMA.md` v1. All amounts are
> **integer cents**; negative means money out. **Treat every engine number as authoritative — never
> recompute a balance or an average.**
>
> Propose how to split **`summary.toBudget`** across the budget's categories. Distribute in this
> strict priority order, stopping when `toBudget` is exhausted:
>
> 1. **Fund or top up categories tied to `upcomingBills` due before the next paycheck first.** For
>    each upcoming bill, the category needs `available` to reach the bill `amount` (in absolute
>    value). If `available` already covers it, assign nothing. A bill whose category is already
>    funded/paid this month (`available` ≥ its remaining obligation) needs $0.
> 2. **Cover any overspent category** (`available < 0`) — roll with the punches: move just enough to
>    bring it back to 0, drawn from the dollars on hand rather than left to fester.
> 3. **Fund variable-spending categories toward their `categoryHistory.average`** (the engine's
>    N-month average), so the month is funded at the household's real pace, not a guess.
> 4. **Leftover → true-expense and savings goals** (categories with `carryover: true` and a real
>    forward need), so every dollar gets a job and starts aging instead of idling in *To Assign*.
>
> Give **one concise, specific reason per category**, in wnab's original four-rule coaching voice —
> use the *concepts*, not any verbatim marketing copy:
> *give every dollar a job; embrace true expenses; roll with the punches; age your money.* Each
> reason must name the concrete driver from this snapshot (the specific bill and its due date, the
> specific overspend amount, or the 3-month average) — never a generic platitude.
>
> Output an **ordered, editable `category → amount` table** whose amounts **sum exactly to
> `toBudget`**. Order the rows the way the wnab assign UI lists them (group order, category order
> within group). Show amounts in display dollars with the cents value in parentheses, and a running
> total that lands exactly on *To Assign*. If `toBudget` cannot be fully justified by priorities 1–3,
> state where the remainder went under priority 4 and why. Do not exceed or fall short of `toBudget`.

**Note for the model:** "next paycheck" is inferred from `recentTransactions` income cadence when
present (e.g. paydays near the 1st and 15th); if unknown, treat the whole snapshot month as the
window and fund the full month's bills.

---

## 4. Output / apply-back format

The output is built for fast, correct manual re-entry into wnab's assign UI.

- **Order = wnab UI order.** Categories appear in group order, then category order within each group,
  so the user reads top-to-bottom down the same column they type into.
- **Display dollars, cents in parentheses.** `$148.00 (14800)`. The dollars are what the user types;
  the cents are the audit trail proving the row matches the engine and the rows sum to `toBudget`.
- **Running total that reconciles.** A final column accumulates to *To Assign* exactly. If the last
  row's running total is not `toBudget / 100`, the suggestion is wrong and must not be entered.
- **Per-line approve / tweak / reject.** Each row stands alone so the user can accept it, edit the
  number, or zero it out — and the format makes the consequence of a tweak visible (zeroing one row
  leaves that many dollars unassigned, which the user then re-homes). No "apply all" shortcut.
- **v1 is manual re-entry, and that is intentional.** The user types the approved numbers into wnab's
  assign UI (which already supports per-category editing and targets-based auto-assign). There is no
  write-back. This holds the bridge's read-only invariant, costs zero write code, and makes the
  typing the approval gate rather than an obstacle to it. A guarded in-wnab import action is a
  possible future iteration, gated on manual re-entry proving to be real friction (§6).

Per-line skeleton the user works down:

```
[ ] <Category>   suggest $<dollars> (<cents>)   — <one-line reason>
      approve / change to $____ / skip
```

---

## 5. Worked example (synthetic dry-run)

Run against `ai-layer-fixture-snapshot.json` (a **synthetic, clearly-labeled fixture — no real
financial data**). `summary.toBudget = 120000` cents = **$1,200.00** to distribute. Snapshot month
`2026-06`; `generatedAt 2026-05-31T18:00:00-04:00`.

**Why the fixture forces prioritization.** Upcoming bills total $2,068 (Rent $1,800 + Car Insurance
$148 + Internet $120), which exceeds the $1,200 on hand. But June rent is already funded and paid:
`cat-rent` shows `assigned 180000`, `activity -180000`, `available 0`, and `txn-5` is the rent
payment — so the $1,800 line needs nothing. That frees the $1,200 to weigh Car Insurance, the
Internet top-up, the Dining Out overspend, and the household's real spending pace against each other.

Walking the priority ladder against this fixture:

- **(a) Bills before next paycheck.** *Rent* ($1,800, due 06-01) is already funded/paid → **$0**.
  *Car Insurance* (−$148, due 06-12) hits **Car Maintenance**, which sits at `assigned 0 / available
  0` → assign **$148** to cover it. *Internet* (−$120, due 06-18) hits **Utilities**, `available
  1800` → top up by **$102** to reach $120.00.
- **(b) Roll with the punches.** *Dining Out* is overspent at `available -11250` → move **$112.50** to
  bring it back to $0.
- **(c) Fund variable toward the 3-month average.** *Dining Out* has a 3-month average of −$400.83
  (`average -40083`) but only `assigned 30000` → add **$100.83** so the category is funded at its real
  pace for the month. *Groceries* (`assigned 60000`, `available 7690`, average −$511.03) is already
  funded above its average pace → **$0**.
- **(d) Leftover → true expenses / age your money.** $1,200 − $148 − $102 − $112.50 − $100.83 =
  **$736.67** remains. Route it to the two true-expense envelopes (`carryover: true`) with real
  forward need: **Car Maintenance** gets a **$486.67** sinking-fund buffer on top of the insurance
  bill (the only large auto bill is annual-style insurance; a buffer smooths the next repair), and
  **Medical** gets a **$250.00** deposit toward its next predictable spike. These dollars get a job
  and begin aging instead of idling in *To Assign* (current age of money: 21 days, improving).

### Suggestion (sums exactly to $1,200.00 / 120000 cents)

Rows in wnab UI order; the two $0 rows are shown for completeness (nothing to re-enter). Car
Maintenance and Dining Out each fold two priority reasons into one editable line.

| Category | Assign $ | cents | Why | Running total |
|---|---|---|---|---|
| Rent | $0.00 | 0 | Already funded and paid this month (available $0, May rent cleared in txn-5); the June 1 bill needs nothing. | $0.00 |
| Groceries | $0.00 | 0 | Already funded above its 3-month average pace ($600 assigned vs −$511.03 avg, $76.90 to spare) — every dollar already has a job here. | $0.00 |
| Utilities | $102.00 | 10200 | Top up ($18.00 on hand) to cover the $120 Internet bill due 2026-06-18. | $102.00 |
| Car Maintenance | $634.67 | 63467 | $148 funds the Car Insurance bill due 2026-06-12 (category sat at $0); the remaining $486.67 builds a true-expense sinking buffer so the next repair is already paid for. | $736.67 |
| Dining Out | $213.33 | 21333 | $112.50 rolls with the punches to clear the overspend (available −$112.50), then $100.83 funds the month toward its −$400.83 3-month average. | $950.00 |
| Medical | $250.00 | 25000 | A true-expense deposit toward the next medical spike, so the dollars age instead of idling in To Assign. | $1,200.00 |

Running total lands on **$1,200.00 = 120000 cents = `summary.toBudget`**. Reconciles exactly.

*This is a synthetic dry-run against an invented fixture; the numbers exist only to exercise the
priority ladder, not to advise on a real budget.*

---

## 6. Open items / portability

- **Ollama is a later swap, not now.** The prompt in §3 is deliberately plain text with no
  Cowork-specific affordances, so a fully-offline local-model run is a drop-in. Build the Ollama path
  only if a hard offline requirement appears — it earns its place, it isn't assumed.
- **Real-data validation is gated on the Bridge export shipping.** This dry-run proves the *format*
  and the *reasoning shape*, not the suggestion's real-world quality. The end-to-end test (re-run §3
  against a genuine exported `~/Documents/Finances/wnab/snapshot.json`, assess quality and re-entry
  friction) cannot run until [[PRDs/PRD-wnab-Obsidian-Bridge]] ships an export that actually carries
  `upcomingBills` + `categoryHistory`. Until then the fixture stands in.
- **"Next paycheck" window needs a real-data check.** The income-cadence inference (§3 note) is
  untested against real `recentTransactions`; validate it when a real snapshot exists.
- **Apply-back verdict stays open.** v1 is manual re-entry. Whether a guarded in-wnab import action is
  ever worth building is decided only after manual re-entry is tried on real data and proves to be
  the friction that blocks adoption.
