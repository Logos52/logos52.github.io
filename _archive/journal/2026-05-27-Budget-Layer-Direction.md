---
title: "Budget layer — direction"
type: design-note
status: tabled
created: 2026-05-27
updated: 2026-05-27
tags:
  - command-center
  - finances
  - budget
  - design
---

# Budget layer — direction

## Decision

**Path B: Basecamp-style budget layer inside Obsidian.** Not real budgeting software (YNAB / Actual / Lunch Money), not a full YNAB clone. May incorporate selected YNAB philosophies later — pick and choose, not all at once.

Wedge's note: don't underestimate what we can build at session pace; "months-long" framing is wrong here. Multi-session focused build is the honest framing.

## Status

**Tabled.** Building higher-level dashboard OS pieces first; revisit budget once the structural work is in place.

## What it will look like (sketch)

- `budget.json` in `~/Documents/Finances/` (gitignored alongside the CSV). Per-category monthly budget + a total.
- Finance drill-down: spent vs budgeted per category, with bars coloured green / amber / red as the month progresses.
- Home finance card: numberless month-progress indicator — pacing vs month elapsed (no dollar figures on the home).
- YNAB-inspired bits to evaluate later (pick and choose): envelopes, zero-based, rollovers, category goals, "age of money."

## Open

- **Budget targets are not set.** Use the YTD Apple Card data as a baseline ("you've averaged $X/mo on Restaurants") and Wedge decides each category. Claude's help: surface per-category averages, suggest reasonable ranges, sanity-check totals against income.
- Decide which YNAB philosophies are worth porting when we revisit, and which aren't.

## Next move when picked up

1. Generate per-category monthly averages from the YTD CSV.
2. Propose a `budget.json` template populated with those averages.
3. Wedge edits targets to reflect what he actually wants spending to be.
4. Build the spent-vs-budgeted bars on the drill-down + the pacing indicator on Home.
