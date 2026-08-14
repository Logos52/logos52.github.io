---
title: "Design Two-Track Extraction"
type: workflow
status: developing
created: 2026-06-30
updated: 2026-08-14
written-by: grok
model: grok
tags:
  - design
  - agentic-engineering
  - taste
  - tsumugu
  - resources
---

# Design Two-Track Extraction

Two-track extraction splits each design technique at the line a machine can follow without looking. Most techniques fall on both sides of that line, and the sorting itself is the product.

## The classification test

**Can this be reduced to a deterministic rule an agent applies without perceptual judgment?** That is the only question.

A yes goes to the [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]], the catalog of design rules a machine can apply without looking — checkable numbers, fixed scales, yes/no states. Parameterizable, checkable, no taste required. Body line-height 1.5×. Spacing scale 4/8/12/16/24/32. Disabled state: lower opacity, not gray. The spacing list is a linear-looking shorthand; each step sits at or above a quarter of the value before it.

A no goes to the [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]], the catalog of design calls that still need an eye — which of several correct options is better, when to break a rule, whether the thing feels right. Perception, context, or taste. Does this hierarchy feel right? When to break the grid. Which of three correct layouts is *better*.

Most techniques are both. The mechanical core goes on the Agent Track; the leftover judgment goes on the Human Track; the two entries point at each other. That cut is the **seam**, and the seam is where the real thinking lives. A design agent can apply a deterministic rule perfectly and still produce something tasteless. Taste is the part that does not reduce to a rule.

The split protects both halves. Agents get a clean executable ruleset. The human keeps a curated catalog of what only the eye can judge. The mechanical rules in the staged books are now largely delegatable. What stays with the human is the judgment those rules cannot encode. The 2018 visual-craft book was written before agents could execute the code portion of UI.

## How to run it

Four steps, one source at a time.

1. One source is read chapter by chapter from the staged text extract.
2. The test is applied and the technique is written into the correct track note, or split at the seam.
3. Agent entries stay atomic and prescriptive. Human entries stay example-anchored and about judgment, not rules. The Human Track is example-driven, comparative, and read by the human eye only.
4. The queue Status column is updated and `source-count` is bumped on each track note.

Extract as prose first. Harden into a skill once the wording is stable, after checking what already-consumed rulesets exist. The Agent Track could later harden into a skill, a shared-shell ruleset, or a `CLAUDE.md` filename block. **tsumugu** is the language-learning reader and dictionary those catalogs are meant to feed. **tsumugu-core** is the shared front-end shell and token layer those surfaces assemble from. **cos** is a possible later consumer of a hardened ruleset.

The judgment catalog is the only half worth spending scarce reading time on.

| Source | Status |
|---|---|
| Visual-craft book (2018) | Extracted 2026-06-30. Heavy Agent Track yield across spacing, type, color, and depth. |
| Principles book | Extracted 2026-06-30. Track notes scoped to that book's UI, UX, graphic, and product lists plus core Gestalt and interaction laws. About 150 general and management principles left unmined from the track notes by design. |
| CJK layout specs and foundry article | Not staged. CJK layout is mostly agent-track rules. No CJK typography wiki page exists yet. |

Track notes stay UI-scoped. The [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|Master Scorecard]] later ingested all 200 unique names from the principles book, plus 50 from the visual-craft extract, for 250 graded items. Both decisions stand. Unstaged sources, including the CJK thread, live on the [[wiki/Design/Design Expansion — Reading & Resources|reading list]].

The [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] is the scoring model behind the scorecard. [[wiki/Design/Front-End Web Design|Front-End Web Design]] and [[wiki/Design/Design, Condensed|Design, Condensed]] are related surfaces, not extraction targets.

**The test over-sorts toward the Agent Track when "deterministic" is read as "a prompt can be written for it."** A prompt is not a rule. Time goes to one source, chapter by chapter, then the test — not a weekend of cataloguing the 150 extra principles. If a new row does not change either track note, extraction stops. A new technique is done when it has produced a Yes example, a No example, or a named seam.

The two catalogs exist because of this cut. Leftover looking is the only half that still costs scarce reading time.

## Related

- [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]] — the executable-rules product of this process.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]] — the judgment product of this process.
- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]] — unstaged sources and the CJK thread.
- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|Master Scorecard]] — all 250 items graded on the lens, not the extraction method.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the H × AI scoring model and the four zones.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]] — Norman mapped onto web UI and the tsumugu surfaces; related, not a source.
- [[wiki/Design/Design, Condensed|Design, Condensed]] — doctrine compression of Norman; related, not a source.

## Open Questions

Whether a stable Agent Track hardens into a skill, a shared-shell ruleset, or a filename block, and which surface consumes it.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Public product page: [refactoringui.com](https://www.refactoringui.com/).

Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023).
