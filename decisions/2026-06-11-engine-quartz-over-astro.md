---
title: "Site engine: keep Quartz, replace 100% of the skin (over Astro rebuild)"
type: decision
status: decided
created: 2026-06-11
updated: 2026-06-12
ruled-out:
  - Astro (or any general-framework) rebuild — revisit only on the flip condition below
tags:
  - decisions
  - site
  - quartz
links:
  - "[[journal/2026-06-11-living-atlas-and-decision-writing]]"
  - "[[decisions/2026-06-11-living-atlas-design]]"
---

# Site engine: keep Quartz, replace 100% of the skin

Decision: keep Quartz v4 as the publishing engine and replace the entire visual layer — accepting that upstream updates may conflict with the modified graph script, and that schema enforcement stays a lint script instead of a compile-time guarantee.

The deciding reframe: the comparison was never framework vs framework. It was an existing vault-publishing engine with a custom skin vs a general framework plus a vault-publishing layer we build and own forever. The vault carries 2,478 wikilinks across 275 published files, all written in Obsidian semantics by agents; in a rebuild, every link-resolution edge case becomes our bug, and the failure mode is silent link rot — the exact incoherence this base exists to prevent.

Astro's strongest case: near-zero JS on first load, where today every page parses a 700KB bundle plus a 1.3MB content index. That edge is first-visit-only, shrinks once SPA + prefetch are enabled, and converges with Quartz under a design that puts a graph on every page.

**Flip condition, recorded:** if the five-year vision becomes one integrated Logos52 platform (wiki + Tsumugu + dashboards), Astro is the right call — and the Atlas design system transfers intact.

**Open measurement:** `enableSPA` is still `false` as of 2026-06-12; the "edge shrinks with SPA + prefetch" mitigation is asserted, not yet measured.
