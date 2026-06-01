---
title: "wnab = full YNAB-flow clone on Actual's engine"
type: decision
status: active
created: 2026-05-29
updated: 2026-05-29
supersedes: "[[decisions/2026-05-27-budget-path-b-not-real-software]]"
ruled-out:
  - "In-Obsidian budget layer (Path B)"
  - "Off-the-shelf YNAB / Actual / Lunch Money"
tags:
  - decisions
  - finances
  - wnab
---

# wnab = full YNAB-flow clone on Actual's engine

**Decision:** Build wnab — a full YNAB-flow budgeting app on Actual Budget's engine — as the budgeting
system. This **supersedes Path B** (the in-Obsidian budget layer) and the ruling-out of real software.

**Reasoning:** Path B ruled out real software mainly as a *feasibility hedge* — uncertainty that a
custom app was buildable, not a lack of desire for one. That hedge no longer holds. Combined household
finances made budgeting the #1 priority, and **ownership is the motivation hook** (off-the-shelf apps
never stuck). The "external surfaces don't get visited daily" risk that killed cos is mitigated by a
read-only finance overview kept in Obsidian while wnab is the deliberate-visit tool.

**Ruled out:** in-Obsidian budget layer (insufficient as the real system); off-the-shelf apps (no
ownership hook). Engine is reused (Actual's `loot-core`), not reimplemented.

See [[PRDs/PRD-wnab-Budget-App]] and [[journal/2026-05-29-wnab-direction-decided]].
