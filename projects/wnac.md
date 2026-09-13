---
title: "WNAC / Wedge Needs A Copilot"
type: project
status: current
stack:
  - Python
  - HTML/CSS
  - LLM (swappable)
order: 2
image: projects/wnac.png
blurb: "A static, local-first, AI-narrated finance dashboard. It shows one flex number and a debt-payoff dial in place of envelope budgets. The code is public and the financial data stays private."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

![The WNAC dashboard, rendered with demo data (never real balances).](wnac.png)

## What it is

WNAC ("Wedge Needs A Copilot") is a static, local-first personal-finance dashboard. From [wnab](wnab) it keeps the two parts that were useful: clean, deduplicated transaction data and explainable AI categorization. It drops envelope budgeting, which made wnab tedious to use. The interface is a single screen designed to *feel* like Copilot Money. It shows one **flex number**, the amount that is actually free to spend, and a **pay-down dial** for debt.

## How it's built

WNAC is three plain files. It uses no server and no cloud account. `import.py` normalizes and dedupes bank exports. `analyze.py` has a "brain" that can be switched between deterministic rules and an LLM. `dashboard.html` is a static page. Everything runs on the local machine.

The architecture enforces a privacy rule: **the method is public and the money is private.** The code and design are published openly. The data, balances, and accounts never enter the repo and never leave the machine. For that reason the screenshot at the top uses demo data, not real balances.

## What worked

Dropping envelope budgeting was the change that made WNAC usable for me. A single flex number answers the only question I ask every day, "can I spend this?", and I do not have to assign every dollar first. The AI step in `analyze.py` is swappable, so when I don't want to use a model, the dashboard falls back to plain rules. Because the design is local-first, it avoids the cold-start, subscription, and trust problems of cloud finance apps.

## Lessons so far

- **Carry over only the parts of wnab that were useful.** wnab showed that the data pipeline and the AI insight were worth having. WNAC keeps those and removes envelope budgeting, which cost more upkeep than it was worth.
- **Privacy is an architecture decision.** "Method public, money private" holds because the data never enters the repo or reaches a server. The design enforces the rule, so the project can be public without exposing any number from the finances.

## Status

Current. Active build, succeeding [wnab](wnab).

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->
