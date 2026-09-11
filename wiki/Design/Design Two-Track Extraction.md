---
title: "Design Two-Track Extraction"
type: workflow
status: developing
created: 2026-06-30
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

Two-track extraction is a method for sorting design techniques into two catalogs. Each technique is put to one question: can a machine apply it as a fixed rule with no perceptual judgment? A technique that passes goes to a catalog of rules for agents. A technique that fails goes to a catalog of judgment calls for a human. Most techniques have a part on each side. The two sorted catalogs are what the method produces.

## Core takeaways

- One question sorts every technique: can an agent apply it as a deterministic rule with no perceptual judgment? No other question is used.
- A yes goes to the Agent Track, a catalog of checkable numbers, fixed scales, and yes/no states. A no goes to the Human Track, a catalog of calls that need an eye.
- Most techniques have both parts. The mechanical core goes to the Agent Track, the leftover judgment goes to the Human Track, and the two entries point at each other. The cut between them is called the seam.
- An agent can apply a deterministic rule perfectly and still produce a tasteless result. The judgment the rules cannot encode stays with the human.
- Work runs one source at a time, chapter by chapter, in four steps. Two books were extracted on 2026-06-30. The CJK sources are not staged.
- The test over-sorts toward the Agent Track when "deterministic" is read as "a prompt can be written for it". A prompt is not a rule.

## The one test

The test is one question. Can this technique be reduced to a deterministic rule that an agent applies without perceptual judgment? No other question is asked.

## The two tracks

A yes goes to the [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]]. That catalog holds design rules a machine can apply without looking: checkable numbers, fixed scales, and yes/no states. Each rule can be set as a parameter and checked, and none needs taste. Three examples: body line-height is 1.5×; the spacing scale is 4/8/12/16/24/32; a disabled state gets lower opacity and does not turn gray. The spacing list looks linear. It is a shorthand: each step is at least a quarter of the value before it.

A no goes to the [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]]. That catalog holds design calls that still need an eye: which of several correct options is better, when to break a rule, and whether the thing feels right. Each call depends on perception, context, or taste. Three examples: does this hierarchy feel right; when to break the grid; which of three correct layouts is *better*.

## The seam

Most techniques are both. The mechanical core goes on the Agent Track. The leftover judgment goes on the Human Track. The two entries point at each other. The cut between the two parts is called the **seam**. Placing the seam is the part of the work that takes real thought. A design agent can apply a deterministic rule perfectly and still produce something tasteless. Taste is the part that does not reduce to a rule. The two catalogs exist because of this cut.

## What each side gets

The split serves both halves. Agents get a ruleset that holds only executable rules. The human keeps a curated catalog of what only the eye can judge. The mechanical rules in the staged books can now largely be delegated to agents. The judgment those rules cannot encode stays with the human. The 2018 visual-craft book was written before agents could execute the code portion of UI.

Reading time is scarce. The judgment catalog is the only half worth spending it on. The leftover looking is the only half that still costs it.

## The four steps for one source

Work runs one source at a time, in four steps.

1. Read one source chapter by chapter from the staged text extract.
2. Apply the test to each technique. Write it into the correct track note, or split it at the seam.
3. Keep Agent entries atomic and prescriptive. Keep Human entries anchored to an example. Each Human entry describes a judgment, and none states a rule. The Human Track is example-driven and comparative, and only the human eye reads it.
4. Update the queue Status column. Bump `source-count` on each track note.

## From prose to a hardened ruleset

Extract as prose first. Once the wording is stable, check what already-consumed rulesets exist, then harden the prose into a skill. The Agent Track could later harden into a skill, a shared-shell ruleset, or a `CLAUDE.md` filename block. **tsumugu** is the language-learning reader and dictionary the catalogs are meant to feed. **tsumugu-core** is the shared front-end shell and token layer those surfaces assemble from. **cos** is a possible later consumer of a hardened ruleset.

## Which sources have been extracted

| Source | Status |
|---|---|
| Visual-craft book (2018) | Extracted 2026-06-30. Heavy Agent Track yield across spacing, type, color, and depth. |
| Principles book | Extracted 2026-06-30. Track notes scoped to that book's UI, UX, graphic, and product lists plus core Gestalt and interaction laws. About 150 general and management principles were left out of the track notes on purpose. |
| CJK layout specs and foundry article | Not staged. CJK layout is mostly agent-track rules. No CJK typography wiki page exists yet. |

Track notes stay UI-scoped. The [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|Master Scorecard]] later ingested all 200 unique names from the principles book, plus 50 from the visual-craft extract, for 250 graded items. Both decisions stand: the narrower scope of the track notes and the wider scope of the scorecard. Unstaged sources, including the CJK thread, live on the [[wiki/Design/Design Expansion — Reading & Resources|reading list]].

The [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] is the scoring model behind the scorecard. [[wiki/Design/Front-End Web Design|Front-End Web Design]] and [[wiki/Design/Design, Condensed|Design, Condensed]] are related pages. Neither is an extraction target.

## Where the test goes wrong, and when to stop

The test over-sorts toward the Agent Track when "deterministic" is read as "a prompt can be written for it". A prompt is not a rule. Time goes to one source, chapter by chapter, then the test. It does not go to a weekend of cataloguing the 150 extra principles. If a new row does not change either track note, extraction stops. A new technique is done when it has produced a Yes example, a No example, or a named seam.

## How to practice this

1. Read one source chapter by chapter from its staged text extract. Work on one source at a time. Notice each technique the chapter states, one at a time.
2. For each technique, ask whether an agent can apply it as a deterministic rule with no perceptual judgment. Ask no other question. Notice whether the answer is yes, no, or both.
3. Write a yes into the Agent Track note as one atomic, prescriptive rule. Write a no into the Human Track note, anchored to an example of the judgment call. Notice that a Human entry reads as a comparison for the eye, and never as a rule.
4. When a technique is both, put its mechanical core on the Agent Track and its leftover judgment on the Human Track. Point the two entries at each other. Notice where the seam fell, since placing it is the part that takes real thought.
5. Check whether you read "deterministic" as "a prompt can be written for it". A prompt is not a rule. Notice when an Agent Track entry has no checkable number, fixed scale, or yes/no state.
6. A technique is done when it has a Yes example, a No example, or a named seam. Notice when a new row changes neither track note, and stop the source there. Then update the queue Status column and bump `source-count` on each track note.

## Related pages

- [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]]: the executable-rules product of this process.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]]: the judgment product of this process.
- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]]: unstaged sources and the CJK thread.
- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|Master Scorecard]]: all 250 items graded on the lens. It does not cover the extraction method.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: the H × AI scoring model and the four zones.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: Norman mapped onto web UI and the tsumugu surfaces. A related page, not used as a source.
- [[wiki/Design/Design, Condensed|Design, Condensed]]: doctrine compression of Norman. A related page, not used as a source.

## Open questions

Whether a stable Agent Track hardens into a skill, a shared-shell ruleset, or a filename block, and which surface consumes it.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Public product page: [refactoringui.com](https://www.refactoringui.com/).

Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023).
