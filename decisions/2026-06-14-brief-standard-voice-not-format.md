---
title: "Brief standard adopts voice-not-format"
type: decision
status: decided
created: 2026-06-14
updated: 2026-06-14
ruled-out:
  - Wholesale Front-Facing for briefs (strips the Core Thesis arc, comparison reasoning, dedup routing)
  - Keeping the brief standard unchanged (the test isolated voice, not structure, as the problem)
tags:
  - decisions
  - writing
  - system
links:
  - "[[02 - System/Writing Standards|Writing Standards]]"
  - "[[01 - Workbench/Opus - How To Learn So Fast That AI Can Never Replace You|worked example]]"
---

# Brief standard adopts voice-not-format

Decided: the Brief/Workbench standard keeps its structure and adopts the High-Signal Front-Facing voice. Briefs were coming back unsatisfactory because drafting-mode posing leaked into the prose, not because the structure was wrong.

## What the test showed

A side-by-side rewrite of the "How To Learn So Fast That AI Can Never Replace You" brief settled it. Front-Facing voice removed the posing and the em-dash cadence and made every sentence checkable. Full Front-Facing also dissolved the Compressed Takeaways and Operating Model scaffolding and flattened the Core Thesis, which is the density a brief exists for. The delta that improved the brief was entirely voice; the structure was never the problem. Wedge's own 2026-06-12 front-facing journal had already named the cause: switching into drafting-mode inside quotation marks.

## The standard now

- Front-Facing voice on brief prose: one fact per sentence (priority, including the Core Thesis), no posing, no em-dashes, specifics over conclusions, the page does not grade itself, plain explaining register.
- Section headings follow Specific Beats Generic and state a positive claim (no negative or "X, not Y" framing). The Core Thesis carries a specific claim-heading.
- Four fixed anchors stay generic: Compressed Takeaways, The Operating Model (only when the source gives a sequential, named procedure), Open Questions, Sources.
- Encoded in `CLAUDE.md` under "Voice and Headings (adopted 2026-06-14)".

## Price

Every brief now owes the Front-Facing voice and specific headings, which is more drafting effort per section. Accepted; it is the part that was failing.

## Ruled out

- Wholesale Front-Facing for briefs: would strip the Core Thesis arc, comparison reasoning, and dedup routing. The test demonstrated the loss.
- Leaving the standard unchanged: the test isolated voice, not structure, as the unsatisfactory element.

## Open

- Core Thesis prose: resolved 2026-06-14 (Wedge). One-fact-per-sentence is the priority and applies to the Core Thesis; the thesis keeps its causal arc as content but renders as one-fact sentences.
- Term: "Core Takeaways" (used in the brief) vs "Compressed Takeaways" (standard). Pick one.

## Consolidation

The Front-Facing version is canonical: `01 - Workbench/Opus - How To Learn So Fast That AI Can Never Replace You.md`. The faithful-standard original was archived to `_archive/Opus - How To Learn So Fast That AI Can Never Replace You (archived 2026-06-14).md` to avoid two diverging briefs on one source.

## Worked example

The canonical brief carries a marked commentary section: higher-order generativity versus higher-order judgment, the moat critique, and the fleet-operator synthesis.
