---
title: "Self-updating wiki — future path"
type: future-path
status: parked
created: 2026-05-27
updated: 2026-05-27
tags:
  - wiki
  - self-updating
  - future
  - design
---

# Self-updating wiki — future path

Possible second project branched off the current `llm-knowledge-base`: a *self-updating* wiki that periodically refreshes pages, runs health checks, and proposes updates via agents. The current vault stays as the personally curated version.

The auto-append-to-Open-Questions pattern (now redirected to `outputs/generated-questions.md`) was a remnant of an earlier self-updating direction. Wedge's current direction is **personally curated**, with the LifeOS dashboard build as the active priority. Self-updating is parked, but the idea is worth keeping — generated questions already accumulate, and a future agent loop could legitimately resolve some of them.

When picked up: spin a separate vault or branch (keeping curated and self-updating cleanly distinct), start by mining `outputs/generated-questions.md` for what an automated loop could safely propose vs. what needs human taste, and define guardrails before any agent writes to `wiki/`.

Related material: `journal/2026-05-23-Possible-Paths-Self-Updating-Wiki-and-LLM-Wiki-Integration.md`, `wiki/Syntheses/ICS System.md`, `outputs/generated-questions.md`.
