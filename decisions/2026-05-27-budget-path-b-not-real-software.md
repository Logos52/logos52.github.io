---
title: "Budget = Path B (in-Obsidian layer), not real budgeting software"
type: decision
status: superseded
created: 2026-05-27
updated: 2026-05-29
superseded-by: "[[PRDs/PRD-wnab-Budget-App]]"
ruled-out:
  - YNAB
  - Actual Budget
  - Lunch Money
  - Full YNAB clone in Obsidian (now)
tags:
  - decisions
  - finances
  - budget
---

# Budget = Path B (in-Obsidian layer), not real budgeting software

> [!warning] Superseded 2026-05-29 → [[PRDs/PRD-wnab-Budget-App|wnab]]
> This decision is reversed. wnab — a custom YNAB-like app on Actual Budget's engine — is now the budgeting system. **Why it changed:** real software was ruled out here mainly because Wedge wasn't sure a custom app was *feasible*, not because he didn't want one — a feasibility hedge that no longer holds. Combined finances after moving in together made budgeting his #1 priority, and *ownership* is his motivation hook (off-the-shelf apps never stuck). The "external surfaces don't get visited daily" risk that killed cos is addressed by keeping a daily read-only **overview in Obsidian** while wnab is the deliberate-visit budgeting tool. Original reasoning preserved below.

Build a Basecamp-style budget layer inside Obsidian — `budget.json` per category, spent-vs-budgeted bars coloured green / amber / red on the drill-down, a numberless pacing indicator on Home. May incorporate selected YNAB philosophies later — pick and choose, not all at once. YNAB / Actual / Lunch Money were ruled out as external surfaces that pull attention out of Obsidian — the same failure that killed cos. A full YNAB clone is postponed until the basic layer earns it.
