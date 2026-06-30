---
title: "Design Two-Track Extraction"
type: hub
status: scaffold
created: 2026-06-30
updated: 2026-06-30
tags:
  - design
  - agentic-engineering
  - taste
  - tsumugu
  - resources
---

# Design Two-Track Extraction

Process note. Mine the design books for technique, but split the catalog at the line AI now draws through the discipline. Books like [[wiki/Design/Agent Track — Executable UI Technique Catalog|Refactoring UI]] were written before agents could execute the *code* portion of UI; the mechanical rules they teach are now largely delegatable. What stays with the human is the judgment those rules can't encode. So every technique gets sorted into one of two tracks, and the sorting itself is the product.

## Why two tracks

A design agent can apply a deterministic rule perfectly and still produce something tasteless, because taste is the part that doesn't reduce to a rule. The split protects both halves: agents get a clean, executable ruleset they can build off; the human keeps a curated catalog of what only the eye can judge — which is the only part worth spending scarce reading time on.

## The classification test

For each technique, ask: **can this be reduced to a deterministic rule an agent applies without perceptual judgment?**

- **Yes → Agent Track.** Parameterizable, checkable, no taste required. ("Body line-height 1.5×." "Spacing scale 4/8/12/16/24/32." "Disabled state: lower opacity, not gray.")
- **No → Human Track.** Requires perception, context, or taste to apply well. ("Does this hierarchy feel right?" "When to break the grid." "Which of three correct layouts is *better*.")
- **Both (most techniques) → split at the seam.** State the mechanical core in the Agent Track and the judgment edge in the Human Track, cross-linked. The seam is where the real thinking lives.

## The two tracks

- [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]] — machine-consumable rules; could later harden into a skill or a `tsumugu-core` ruleset / CLAUDE.md block.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]] — what Wedge needs to *see and judge*; example-driven, comparative, read by the human eye only.

## Processing queue

Sources staged at `raw/sources/design/`. Status: none extracted yet.

| Source | File | Status | Notes |
| --- | --- | --- | --- |
| Refactoring UI (Wathan & Schoger) | `raw/sources/design/Refactoring UI.pdf` | queued | Highest agent-track yield — it's effectively a UI rules engine. |
| Universal Principles of Design (Lidwell et al.) | `raw/sources/design/Universal Principles of Design.pdf` | queued | Mixed; many principles are human-judgment (gestalt, aesthetics) — likely heavier human-track yield. |
| (later) jlreq / clreq, Typotheque | — | not staged | CJK layout — mostly agent-track rules; see [[wiki/Design/Design Expansion — Reading & Resources|reading list]]. |

## How to run the extraction (for future-me)

1. Read one source via the `pdf` skill. Go chapter by chapter.
2. For each discrete technique, apply the classification test and write it into the correct track note (or split it).
3. Keep Agent-Track entries atomic and prescriptive; keep Human-Track entries example-anchored and about *judgment*, not rules.
4. Update this queue's Status column and bump `source-count` on each track note.

## Open questions

- Final form of the Agent Track: prose catalog, or a structured skill / ruleset that `cos` and tsumugu agents load directly? (Lean toward extracting as prose first, hardening into a skill once stable — don't reinvent; check what Hermes/Grok already consume.)
- Universal Principles spans more than UI (it's general design). Scope to UI-relevant principles, or catalog whole? Default: UI-relevant first, flag the rest.

## Related Pages

- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]]
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]
- [[wiki/Design/Design, Condensed|Design, Condensed]]
