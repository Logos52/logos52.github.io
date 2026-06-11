# H3 — Graph spine (de-blob the graph)

Goal: the home graph reads as a horizontal constellation with labeled landmarks — not a radial hairball. Riskiest handoff; force aesthetics need iteration. Implement with the starting values below, render, screenshot, and report — expect 1–2 tuning rounds with Wedge/Claude before sign-off. **Do not tune toward your own taste.**

## File: `quartz/components/scripts/graph.inline.ts` (d3 + pixi)

All changes gated behind new config flags so existing local-graph behavior is untouched unless a config opts in.

## 1. New config options (extend the graph config type)

- `spineLayout: boolean` — enables everything below.
- `hubSlugs: string[]` — landmark nodes.
- `recentDays: number` (default 7) — pulse-ring window.

## 2. Spine forces (when `spineLayout`)

Order domains (from `domains.ts`) along the x-axis in this fixed sequence: `learning, focus, concepts, agentic, decisions, redteam, language, money, minimalism, reference`. Assign each domain a target x evenly spaced across `[0.08, 0.92] × width`.

Starting parameters:
- `forceX(domainTargetX).strength(0.18)`
- `forceY(height / 2).strength(0.08)` — loose vertical band, not a hard line
- `forceManyBody().strength(-160)`
- `forceLink.distance(55)`
- `forceCollide(nodeRadius + 12)`
- center force ≈ 0 (`0.02` max)

## 3. Landmarks, labels, pulse

- Hub nodes (`hubSlugs`): radius ×1.8, label **always visible** — JetBrains Mono 10px, domain-tinted light (mix node color toward white ~70%).
- Non-hub nodes: no label until hovered or zoom > 1.4.
- Pulse ring: nodes whose modified date (from `contentIndex.json` — verify dates are emitted; if absent, extend the ContentIndex emitter) falls within `recentDays` get a thin ring in the site accent at radius +5, ~50% opacity. Subtle; no animation required for v0.

## 4. Legend chips as filters

Legend rendered from `DOMAINS` as mono chips (border in domain color, label in domain-tinted light). Click chip → non-domain nodes and their links drop to 0.12 opacity; click again or click another to release/switch. Chip label is also a link to the domain's hub page on double-click — if that conflicts with the filter interaction, make the chip filter on click only and report; don't invent a third interaction.

## 5. Home config (consumed in H4)

`nodeLimit: 30` (mobile 16), ranked by degree, hubs always included and pinned near their domain x. The six hubs:
`wiki/Syntheses/First-Principles-of-ICS`, `wiki/Systems/AI-&-Agentic-Systems/Agentic-Engineering` (verify exact slug in build output), `wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block` (verify), `wiki/Minimalism/Minimalism-as-Systems-Design`, `wiki/Red-Team/Red-Teaming`, `wiki/Language/Refold-Language-Learning-System`.
**Verify every slug against the built contentIndex.json** — folder names with spaces/ampersands slug unpredictably; report mismatches rather than guessing.

## Acceptance

- Home graph: ≤30 nodes, horizontally spread clusters, 6 labeled landmarks, no hairball; legend chip click dims other domains; recently-edited nodes ringed.
- Wiki-page local graphs (non-spine) behave exactly as before.
- Build passes. Commit: `atlas(H3): spine graph layout, hub landmarks, pulse rings, legend filtering`.
