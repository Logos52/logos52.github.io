---
title: "wnab — AI ideas (parked for post-build)"
description: "Ways to layer AI onto wnab to offset budgeting decision fatigue. Ideas only — revisit after the core product is built."
type: ideas
status: parked
created: 2026-05-29
updated: 2026-05-29
tags:
  - wnab
  - ai
  - budgeting
  - finances
  - ideas
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
---

# wnab — AI ideas (parked)

> Captured 2026-05-29. **Not for now** — revisit once wnab's core build is done.

## Why (the real motivation)

The core problem AI solves here is **decision fatigue**. Budgeting is a stream of judgment calls — how much to assign where, what to cut when you overspend, what's a realistic target. The mechanics are easy; the *decisions* are the tax. AI's job in wnab is to draft those decisions so Wedge approves rather than originates them.

## Strategic frame — keep wnab private; let Cowork be the AI layer

wnab stays the **local, serverless, private** budgeting engine. The AI smarts run in **Cowork (Claude)**, operating over data wnab **exports** to the private folder (`~/Documents/Finances/wnab/`). Rationale:

- No API keys baked into a public browser app; no piping transactions to a third-party API.
- Reuses the AI hub Wedge already runs instead of building AI into wnab (don't-reinvent-the-wheel).
- If in-app AI is ever wanted, a **local model (Ollama)** is the privacy-preserving route — but Cowork-over-exports is far less work.

**Boundary to hold:** be deliberate about what financial data leaves the machine. Cowork-over-exports or local models only; no transactions straight to a third-party API from the public app.

## Opportunities (roughly by value)

1. **AI auto-assign (Wedge's #6), explainable + approve-before-execute.** AI suggests how to split "To Assign" across categories from upcoming bills + history, *with reasoning* ("…and here's why"). Engine does the math, AI does the judgment, Wedge tweaks + one-click applies. The "explain why" doubles as mindset-teaching. Approve-before-execute (Grok plan-mode habit) — AI never moves money autonomously.
2. **Roll-with-the-punches assistant.** On overspend, AI proposes where to cover from ("Dining over $40 — pull from Fun Money $30 + Misc $10?"). The hardest, most-avoided moment, made one tap.
3. **Transaction categorization.** Auto-categorize QFX/CSV imports (messy merchant → category), learning from corrections. Attacks manual-entry friction.
4. **Dynamic coaching.** Replace static nudge strings with situational, personal coaching ("Dining over three months running — raise the target to something realistic?"). Turns the coaching layer into an actual coach.
5. **Monthly review.** End-of-month narrative: where money went vs. plan, what shifted, what to adjust.
6. **True-expense detection.** Scan history for irregular/annual costs (insurance, renewals) → suggest sinking-fund targets (automates YNAB Rule 2, which people forget).
7. **Target suggestions.** Seed category targets from spending averages (Apple Card data) + AI sanity-check ("Restaurants target $200 is unrealistic — you average $380").

## Next step when picked up

Decide the data bridge (wnab export → folder Cowork reads), then prototype #1 (auto-assign suggestions) as a Cowork workflow over an exported budget snapshot — lowest-infra, highest-value, and the direct hit on decision fatigue.
