---
title: "Living Atlas: graph-as-homepage redesign of the public site"
type: decision
status: decided
created: 2026-06-11
updated: 2026-06-12
ruled-out:
  - Keeping the generic-Quartz shape with new colors (the shape was the problem)
  - Two divergent graph palettes (replaced by one domain palette in domains.ts)
  - Red Team as a front-door focus (pages stay; Money and 中文 take its map hubs)
supersedes: "[[decisions/2026-05-30-site-full-send-wnab-aesthetic]]"
tags:
  - decisions
  - site
  - quartz
  - design
links:
  - "[[journal/2026-06-11-living-atlas-and-decision-writing]]"
  - "[[decisions/2026-06-11-engine-quartz-over-astro]]"
---

# Living Atlas: graph-as-homepage redesign

Decision: replace the site's shape, not its colors. The graph becomes the homepage (Map — six labeled hub landmarks, legend-as-filter, recent-update pulse), curated reading paths ship as cards linking to hubs (Trails v0), and note pages go single-column with margin notes. Dark-first; two-voice typography (Lora thinks, JetBrains Mono operates); one domain palette in `domains.ts`. PRD signed for phases 1–3; handoffs in `PRDs/atlas/` (H0–H7); Composer executed against locked specs, design tuning landed in three QA rounds the same day.

The diagnosis that forced it: the generic-Quartz look is the *shape*, not the palette — the 2026-05-30 wnab-aesthetic refresh recolored the same shape and the site still read as a themed default. Carried forward from that round: the Lora + JetBrains Mono pairing and the amethyst accent.

Graph aesthetic, established in QA: **scarcity** — hub-only link rendering, 3 satellites per hub, neutral-gray satellites with color reserved for landmarks. The constellation mockup is the reference standard for all graph surfaces.

Focus shift recorded the same day: Red Team out of the map hubs, Money and Chinese characters in — Wedge's interest moved; the Red Team pages stay but stop being a front door.

Cost: a full custom shell over Quartz means every future upstream update is a potential merge conflict with our components, and Trails v0 ships as cards rather than real trail pages.

Deferred: real trail pages, `/ledger` page, seedling/evergreen status vocabulary (touches the agent contract — deliberate pass), `projects/tsumugu.png` screenshot (landed 2026-06-12).
