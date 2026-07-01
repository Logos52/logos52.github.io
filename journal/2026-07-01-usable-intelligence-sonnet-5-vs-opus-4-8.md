---
title: "Usable intelligence — Sonnet 5 vs Opus 4.8"
type: journal
status: draft
created: 2026-07-01
updated: 2026-07-01
tags:
  - ai
  - model-comparison
  - tsumugu
  - decision
---

# Usable intelligence — Sonnet 5 vs Opus 4.8

**Verdict.** For controlled-vocabulary authoring behind a fail-closed gate — the tsumugu-ed and tsumugu-core content lanes — Sonnet 5 is the default author; Opus 4.8 stays the orchestrator and the fallback for calls the gate can't check. Same job, 0.6× the price (0.4× on Sonnet 5's intro rate through 2026-08-31), near-identical measured gate outcomes. Raw reasoning ceiling still favors Opus; deployable capability-per-dollar favors Sonnet 5.

This settles the aside from the companion-readings run (which used exactly this split) and updates the model snapshot in [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] (Sonnet 5 replaces Sonnet 4.6 in the penta).

## What "usable" means here

Not peak reasoning — cost-adjusted deployable capability. Both models publish a 1M context window, 128K max output, and the same `low`–`max` effort ladder (both carry `xhigh`); both run adaptive thinking. The decision turns on price, speed, and first-pass quality on a verifiable task, not on a global "smarter."

## The math

- **Same tokenizer.** Sonnet 5 and Opus 4.8 both use the Opus-4.7-era tokenizer, so identical text bills identical tokens on each. The sticker gap is the real gap — no token-count adjustment. Opus costs 1.67× Sonnet 5 per token ($5/$25 vs $3/$15 per MTok), 2.5× against the intro rate ($2/$10 through 2026-08-31).
- **Facet grades (snapshot).** Opus 4.8 = F4 K5 Sc2 V5 Au5; Sonnet 5 = F4 K4 Sc4 V5 Au4. Sonnet 5 trails by one on Knowledge and Autonomy, matches on Fluency and Verifiability, leads by two on Scale.
- **Polygon area** (order = size; A = ½·sin72°·Σ rᵢrᵢ₊₁): Σ = 85 (Opus) vs 88 (Sonnet 5) → 40.4 vs 41.9. Sonnet 5's polygon is ~3% larger — Opus's Scale-2 (slow, expensive) cancels its Knowledge/Autonomy edge once cost and speed sit on the axes.
- **Per dollar** (area ÷ output $/MTok): Opus 1.6; Sonnet 5 2.8 sticker (1.7× Opus), 4.2 intro (2.6× Opus).

## The evidence (observational, not a bake-off)

Different lessons through the same fail-closed gates; no blind head-to-head, so the quality gap sits inside the task-shape confound.

- Sonnet 5, tsumugu-core companion readings (author → critic → repair, this session): 31 drafts, 3 critic-caught repairs → 28/31 (90%) clean on the first author pass, 100% final gate pass, 100% grammar / ~100% vocab coverage, ~85% "good."
- Opus 4.8, tsumugu-ed simplified A1→C2 encoding (70 parallel agents, 2026-06-21): 982/982 authored; 11/982 (1.1%) needed a repair on the register/leak sweep; final 0 leaks.

Both clear the gates at high first-pass rates; neither collapses. Because quality is a wash within the confound, cost and speed decide.

## Flip condition

When a lane's bar moves to what the gate can't verify — subtle naturalness, cross-lesson coherence, taste — Opus's Knowledge/Autonomy edge starts earning its price; promote authoring back to Opus there. The equal-weighted polygon area is the soft spot: reasoning-bound, verification-scarce work should up-weight Knowledge and Autonomy (Opus leads outright), which narrows or inverts the per-dollar verdict.

## Caveats

- Facet grades are judgment calls, not benchmarks — the claude-api reference publishes pricing, context, and params, not SWE-bench/GPQA scores, so none are asserted here.
- Observational, not controlled: no lesson was authored by both models and scored blind. A true bake-off (same spec, both models, blind grade) would tighten the quality claim; the cost and tokenizer facts hold regardless.

## Links

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — updated: Sonnet 5 in the table + penta card, new "Usable intelligence — Sonnet 5 vs Opus 4.8" section.
- [[wiki/Systems/AI & Agentic Systems/What the Model Names Signal|What the Model Names Signal]] — what Opus/Sonnet tiers signal.
