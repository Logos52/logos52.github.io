---
title: "Story Craft wiki wing + Tsumugu cast diagnosis"
type: decision
status: decided
created: 2026-07-09
updated: 2026-07-09
ruled-out:
  - Project-local only (a craft bible inside tsumugu-core) — loses reusability for future story work
  - Pure reusable reference, Tsumugu-agnostic — cleaner but leaves the applying to Wedge, less useful while he authors live
  - Spine-first (hub + 3 flagship pages, validate then expand) — chosen against in favor of the full wing this pass
  - Skipping the cast diagnosis — the diagnosis is the part that answers the actual question
tags:
  - decisions
---

# Story Craft wiki wing + Tsumugu cast diagnosis

**Decision: open a `Story Craft` wing in the wiki (parallel to Learning Craft), theory grounded in the Tsumugu cast, built full this pass, with an ensemble diagnosis as the payoff.** Wedge has built a sophisticated cast on instinct (the `CHARACTER-BEATS.md` engine already reinvents plant/payoff, party-banter, a seven beat-type taxonomy, and foil pairings) but the knowledge was intuitive and unnamed, so it could not be trusted, extended deliberately, or used to diagnose why a character reads thin. The wing names the canon behind the instincts and fills the specific holes; the diagnosis turns it on his actual ten.

## What the hard part is

Not "how to write a novel." The binding constraint is telling a Game-of-Thrones-depth ensemble story inside a **graded-reader vocabulary ceiling** (B1 ~250 Han → B5 ~1000), where arcs can only hint at A1 and pay off at B4–B5. Generic craft advice does not cover that; the `Story Under a Vocabulary Ceiling` page (graded readers, Krashen comprehensible input, TPRS, Mason story-listening, the objective correlative and the iceberg as *forced* rather than optional) is the piece no writing course supplies and the reason the wing is worth its own home.

## What was built

- `wiki/Story Craft/` — 20 technique pages across 7 clusters (including [[wiki/Story Craft/Diagnosing a Character|Diagnosing a Character]]), a `Story Craft.md` hub (MOC), and a `Story Craft, Condensed.md` doctrine page — 22 files on disk. Every technique is illustrated on a real, named Tsumugu beat.
- `tsumugu-core/docs/companion/craft/APPLIED.md` — the craft-page → Tsumugu-decision → canon-file map, the series premise, the arc-type-per-character table, the motif registry.
- `tsumugu-core/docs/companion/craft/CAST-DIAGNOSIS.md` — the working gap list: arc-type monotony (~70% positive-change), 林薇's injury with no home lesson in the Book-3 spine, B3L08 carrying three climaxes, the authorship spine needing subordination under the founding premise, and 13 vocab-legal texture beats.

Built by a 75-agent workflow (research → adversarial fact-check → author → standards-audit → repair → synthesize). The audit caught and repaired several invented Tsumugu specifics before they shipped; two of its "invented" flags (星野's camera, 林薇's diagnosis) were false positives, verified canon in `STORY-ARCS.md`, which that check had not read.

## Price, and what would flip it

The cost is maintenance surface: a wiki wing plus a cross-repo applied layer that must not drift from the canon docs (APPLIED states the tie-break — the canon file wins for Tsumugu). The pages are `status: developing` and the diagnosis is `status: draft`; both want a Wedge pass before they harden. What would have flipped to spine-first: lower confidence in the placement, or wanting to validate the genre fit against the writing standards on a few pages before committing nineteen. The standards-audit pass made that validation part of the build instead.

Not done, by design: featuring the wing on the KB homepage (`HomeLanding.tsx` topic groups) is a front-facing change held for Wedge's call. The wing is discoverable now as a folder plus hub MOC, exactly as Learning Craft is.
