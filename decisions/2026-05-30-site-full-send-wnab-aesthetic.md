---
title: "Site redesign: WNAB-influenced visual language + component-driven home"
type: decision
status: decided
created: 2026-05-30
updated: 2026-05-30
ruled-out:
  - Keeping the flat/restrained theme
  - All-Lora abandoned for sans display (Space Grotesk / Nunito / Inter / Fraunces all tried and rejected)
  - Hardcoded-markdown home (replaced by a live component)
tags:
  - decisions
  - site
  - quartz
  - design
links:
  - "[[PRDs/PRD-Site-Aesthetic-Refresh]]"
---

# Site redesign: WNAB-influenced visual language + component-driven home

Refreshed the public Quartz site (`logos52.github.io`) with a calmer-but-characterful look, character carried by **colour, shading, and layout** rather than the typeface.

**Final tokens.** Type is **all Lora** (headings, body, chrome — a single cohesive serif; multiple sans display faces were tried against Lora and all read as uneven), with **JetBrains Mono** for labels/metadata. Accent is a **jewel-tone family**: a muted **amethyst** primary (`#734bb2` light / `#c0a7ee` dark) with a quieter **jewel-teal** companion (`#1f9e86` / `#88c4b7`) used only for gradient/secondary accents so purple clearly leads. Body text was darkened a notch for presence; gradients kept subtle.

**Home page** is now a real Quartz component (`HomeLanding.tsx`), not markdown — so its content stays live and maintenance-free. Layout: hero → (Recently Updated + a thinned, category-clustered Knowledge Graph) side-by-side → Start here (ultra-simple one-line title — blurb) → Browse by topic (three grouped columns with Tabler icons + live note counts). Each section sits in its own subtle **panel** so the structure reads at a glance. The full-density graph remains the centrepiece on the Index page.

**Graph enhancements** (in `graph.inline.ts`): node opacity scales with connectivity; the layout pre-settles instantly (no entrance wobble); and it gained `pinnedSlugs` (force-keep specific notes) + `clusterForce` (group nodes into per-category lobes) so the home panel shows a meaningful, structured slice rather than a blob.

**Observation captured separately:** the graph blobs because the vault is heavily learning-science and light on agentic-engineering *capture* — a content gap, not a viz problem.

Ruled out: the flat status-quo (the thing being replaced); a sans display face paired with Lora (uneven every time); and a hardcoded-markdown home (goes stale). Implemented on branch `redesign/wnab-aesthetic` with a local Quartz preview as the review gate.
