---
title: "PRD — wnab onboarding + coaching layer"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - coaching
  - onboarding
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[PRDs/PRD-wnab-AI-Layer]]"
---

# PRD — wnab onboarding + coaching layer

## Problem

wnab's *only* reason to exist over plain Actual is that it teaches the zero-based / assign-every-dollar
**mindset**. The engine math is Actual's; the differentiator is behavioral. Right now that layer is
thin and ad-hoc: coaching copy is hand-placed strings scattered in the assign flow, and there is **no
first-run teaching** — a new user lands in a budget UI with no idea of the rules. Ownership only
becomes habit if the tool actually coaches the method.

## Success criteria

- A first-run flow that teaches the core rules (give every dollar a job; embrace true expenses;
  roll with the punches; age your money) — skippable, re-openable from a menu.
- Coaching nudges are driven by a **structured state model** (budget state → message), not hardcoded
  strings sprinkled in components.
- All copy is original voice/labels (no YNAB verbatim wording — IP boundary from the project decision).
- A new user can go from empty budget to a fully-assigned month guided by the app, without external docs.

## Scope

**In:** first-run onboarding component; a nudge framework (enumerate budget states — unassigned dollars,
over-assigned, category overspent, fully funded — and map each to coaching copy); rewrite of existing
scattered nudges into that framework; original coaching copy.

**Out:** AI-generated/dynamic coaching (that's [[PRDs/PRD-wnab-AI-Layer]] — this PRD is the static,
rules-based layer it later upgrades); any engine/feature changes; gamification.

## Constraints / risks

- View-layer only (`desktop-client`); adds merge surface vs upstream → keep components additive/isolated
  (see [[PRDs/PRD-wnab-Upstream-Merge]]).
- IP: implement the method freely, but write all teaching in own words; don't reproduce YNAB screens/copy.
- Risk of over-coaching: nudges must be dismissable and not nag. Tripwire: if nudges annoy more than help, cut.

## Plan (sequencing)

1. Inventory the coaching strings currently in the assign flow; list the budget states that trigger them.
2. Define the state→message model (a config/data structure, not inline JSX) so copy is editable in one place.
3. Refactor existing nudges onto the model.
4. Design the first-run flow (recommend: a short modal sequence, not a full product tour).
5. Author original copy for both.

## Open questions

- First-run weight: a 3–4 screen modal, or an interactive "assign your first dollar" guided moment?
- Where does copy live — a typed config file in the repo, or markdown the build ingests?
- Does onboarding seed example categories, or start fully empty?
