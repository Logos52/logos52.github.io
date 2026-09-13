---
title: "wnab / Wedge Needs A Budget"
type: project
status: past
stack:
  - TypeScript
  - Actual Budget
  - SQLite (WASM)
order: 5
image: projects/wnab.png
blurb: "A fork of Actual Budget made into a YNAB-style envelope app with a coaching layer. Retired because the daily upkeep of envelope budgeting took more effort than the insight it gave."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

![wnab ran Actual Budget's engine in the browser. The screenshot uses Actual's generic demo data.](wnab.png)

## What it is

wnab ("Wedge Needs A Budget") was a fork of [Actual Budget](https://actualbudget.org/), an open-source, local-first budgeting engine. The fork was rebuilt into a YNAB-style envelope budgeting app with a coaching layer on top. The plan was to reuse Actual's `loot-core` engine, which runs SQLite in the browser through WebAssembly, so the whole app stays static and needs no server. The part to write was what Actual does not have: the onboarding, nudges, and behavioral design that teach the *mindset* of zero-based budgeting.

## What worked

Reusing Actual's engine was the right decision. Forking `@actual-app/web` meant the hardest parts already existed and ran offline in the browser: the double-entry ledger, import matching, and multi-account reconciliation. I kept the engine code separate from the view layer, so I could track upstream for the budgeting mechanics while building a different user experience.

## What broke

Zero-based envelope budgeting is mechanically sound. Using it every day was exhausting. Every dollar had to be assigned, every category reconciled, and every month re-budgeted. That upkeep took more effort than the insight it gave. People stop opening a budgeting tool that feels like micromanaging, and an unused budgeting tool is worse than having none.

## Lessons

- **Match the amount of upkeep to the benefit.** The envelope method requires constant upkeep to give a kind of control I didn't actually need day to day. Its successor, [WNAC](wnac), replaced envelopes with a single "flex number" and a debt-payoff dial. WNAC gives the same insight with much less upkeep.
- **Reuse the engine, and design the experience yourself.** Forking Actual's engine was the right decision and saved months. The mistake was adopting Actual's budgeting *philosophy* along with its code.
- **The reason you start using a tool has to keep you using it every day.** Ownership was my reason to build it. Whether I kept using it depended on the daily upkeep, and the daily upkeep is why I stopped.

## Status

Retired. The project is archived intact: the data round-trips and the engine still runs. Its successor is [WNAC](wnac), which gives clean data and AI insight without the upkeep of envelope budgeting.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->
