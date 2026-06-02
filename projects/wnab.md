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
blurb: "A fork of Actual Budget into a YNAB-style envelope app with a coaching layer. Retired when the envelope ritual cost more than it returned."
created: 2026-06-02
updated: 2026-06-02
tags:
  - projects
---

![wnab ran Actual Budget's engine in the browser — shown here with Actual's generic demo data.](wnab.png)

## What it is

wnab ("Wedge Needs A Budget") was a fork of [Actual Budget](https://actualbudget.org/) — an open-source, local-first budgeting engine — rebuilt into a YNAB-style envelope budgeting app with a coaching layer on top. The plan: reuse Actual's `loot-core` engine, which runs SQLite in the browser via WebAssembly so the whole thing stays static and serverless, and author the missing piece — the onboarding, nudges, and behavioral design that teach the *mindset* of zero-based budgeting.

## What worked

The engine bet was right. Forking `@actual-app/web` meant the hard parts — double-entry ledger, import matching, multi-account reconciliation — already existed and ran offline in the browser. Keeping the engine seam separate from the view layer let me track upstream for the mechanics while diverging on the experience.

## What broke

Zero-based envelope budgeting is mechanically sound and, in daily use, exhausting. Every dollar assigned, every category reconciled, every month re-budgeted — the ritual cost outweighed the insight it returned. A budgeting tool that feels like micromanaging stops getting opened, and a budgeting tool you don't open is worse than none.

## Lessons

- **Match the ceremony to the payoff.** The envelope method demands constant upkeep for a kind of control I didn't actually need day to day. Its successor, [WNAC](wnac), replaced envelopes with a single "flex number" and a debt-payoff dial — the same insight at a fraction of the ritual.
- **Reuse the engine, own the experience.** Forking Actual's engine was the right call and saved months. The mistake was inheriting its budgeting *philosophy* along with its code.
- **The motivation hook has to survive contact with daily use.** Ownership got me to build it; the daily ritual is what it lived or died on. It died on the ritual.

## Status

Retired. Archived intact — the data round-trips and the engine still runs. Its successor is [WNAC](wnac): clean data and AI insight without the envelope ceremony.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->

