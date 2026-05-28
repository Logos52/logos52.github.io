---
title: "GitHub modularity — future path"
type: future-path
status: parked
created: 2026-05-27
updated: 2026-05-27
tags:
  - publishing
  - github
  - modularity
  - future
---

# GitHub modularity — future path

## Intent

Operate in one Obsidian vault for low friction. Publish to GitHub as **separate companion repos** so the work shows up as discrete modules people can browse, fork, and adapt — not a single entangled monolith.

## Candidate companions

Each its own public repo with its own README, no personal data, just patterns.

- **Personal OS in Obsidian (template).** kb.css design system + Home.md skeleton + the Bases/Datacore patterns. A "fork this to build your own" starting point.
- **Datacore Finance Card.** CSV loader (`tools/finance-helpers.md`), spend-by-category bars, YTD line, weekday chart. Reusable for anyone with an export CSV.
- **Cleanup Ritual.** Generalized `tools/wiki-cleanup-ritual.md` skill for any well-structured Obsidian vault.
- **Decisions log convention.** `type: decision` schema + the Datacore view + sample entries.

## How

A `tools/publish-companions.md` skill (or simple script) that extracts the relevant files from the working vault into a `releases/` staging area, ready to push to standalone repos. Re-run when a pattern matures enough to share.

## Why not now

The patterns are still iterating. Premature extraction creates maintenance overhead without enough payoff. Pick this up after the dashboard has been used for a few weeks of real life and the templates stabilize.

## Status

**Parked.** Picked up when there are at least two patterns that have proven themselves and feel ready to be forked.
