---
title: "Datacore is the sole query engine"
type: decision
status: decided
created: 2026-05-30
updated: 2026-05-30
ruled-out:
  - Dataview
  - DataviewJS
  - "a charting plugin (Charts/Obsidian Charts)"
tags:
  - decisions
  - tooling
  - dashboards
  - datacore
---

# Datacore is the sole query engine

**Decision:** Datacore is the only JS query engine in the vault. Do not introduce Dataview or DataviewJS. Charts stay hand-rolled as inline SVG/CSS styled by `kb.css` — no charting plugin.

**Reasoning:** Datacore is already installed and every interactive card (Skills, Finances, Decisions, Tasks, the shared CSV loader) is built on its JSX API (`dc.useQuery`, `dc.Table`, `dc.require`, `dc.headerLink`). Dataview is not installed. Adding it now would mean two query engines and two idioms — the "patchwork" the PRD forbids. Charts are already drawn with inline SVG/divs (`.ytd-chart`, `.monthly-chart`, `.weekday-chart`); no library is needed, so none is added.

**Ruled out:** *Dataview / DataviewJS* (second engine, plugin rot, still wouldn't export to Quartz); *a charting plugin* (unnecessary dependency when inline SVG/CSS already covers every chart).

Native Bases-rendered views (Flow/Workbench/Direction) remain the graceful fallback if Datacore breaks on a pre-1.0 update. See [[decisions/2026-05-27-engine-bases-over-dataview]].
