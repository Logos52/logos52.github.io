---
title: "Dashboard engine: Bases, not Dataview"
type: decision
status: decided
created: 2026-05-27
updated: 2026-05-27
ruled-out:
  - Dataview
  - DataviewJS
tags:
  - decisions
  - tooling
  - dashboards
---

# Dashboard engine: Bases, not Dataview

Build every dashboard on Bases — native, already enabled, no plugin rot, survives Obsidian updates cleanly. Dataview was uninstalled and left 13 dead query blocks in `mg-kolbs/`. Dataview and DataviewJS were ruled out as more flexible (DataviewJS can compute) but a plugin dependency that still wouldn't export to Quartz. Datacore was added later for visual sections (Skills, Finance) where Bases hits its rendering ceiling.
