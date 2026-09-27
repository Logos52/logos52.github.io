---
title: "Design Two-Track Extraction"
type: workflow
status: developing
created: 2026-06-30
updated: 2026-09-27
method: draft-2026-09-27
prose-model: opus
written-by: opus
model: grok
description: "A way to sort each technique in a design book into rules an AI agent can apply and judgments that need a person."
tags:
  - design
  - agentic-engineering
  - taste
  - tsumugu
  - resources
---

# Design Two-Track Extraction

Design two-track extraction is a way of reading a design book so that each technique in it goes to whoever can use it best: an AI coding agent or a person. It was built on two books, Refactoring UI and Universal Principles of Design. The result is two catalogs, one of rules an agent can follow in code and one of judgments that need a human eye.

## Core takeaways

- Sort every technique in a book by one test.
- The test: can an agent apply it without looking and judging?
- Yes goes to the agent track, a list of executable rules.
- No goes to the human track, a list of taste and judgment calls.
- Many techniques split into a rule part and a judgment part.
- Human reading time goes only where a person is needed.

## How it works

Each technique is read and asked one question: can it be written as a fixed rule that an agent applies with no visual judgment? A spacing scale can, since it is a list of numbers. Deciding whether a screen feels crowded cannot, since it needs someone to look at the result. Where a technique has both parts, it is cut into two entries, one per track.

```
technique from the book
        |
  fixed rule, no judgment?
    yes       both       no
     |          |          |
 agent track  split   human track
```

- Agent track: rules an agent writes straight into code.
- Human track: calls a person makes by looking.
- Split: the rule goes to the agent, the judgment to the person.

## Examples

The two books gave 250 items: 200 principles from Universal Principles of Design and 50 techniques from Refactoring UI. Each item was scored twice, for how much it needs a person and for how well an AI model does it. The scores place it in one of four zones. Most items land where a person decides or where an agent does the work, and fewer land in between.

- Delegate, 84 items: an agent does it well.
  - A spacing scale based on 16, each step at least 25% apart.
  - Aligning elements on a common edge.
- Own, 95 items: a person must decide.
  - Start with too much white space, then remove some.
  - Ackoff's law: the right thing done badly beats the wrong thing done well.
- Augment, 20 items: both matter, so they work together.
  - Anchoring, where a first number sways later judgments.
- Low leverage, 51 items: little value either way.

## Why sort at all

An agent handed a whole design book applies taste rules badly and skips what it cannot measure. A person handed the same book spends time on rules a machine could apply. Sorting first puts the fixed rules into the agent's instructions and leaves the person a shorter list of what only a person can judge. The same test works on books about other crafts.

## Related pages

- [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track — Executable UI Technique Catalog]]: the executable-rules product of this process.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track — Taste & Judgment Catalog]]: the judgment product of this process.
- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]]: unstaged sources and the CJK thread.
- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|Master Scorecard]]: all 250 items graded on the lens. It does not cover the extraction method.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: the H × AI scoring model and the four zones.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: Norman mapped onto web UI and the tsumugu surfaces. A related page, not used as a source.
- [[wiki/Design/Design, Condensed|Design, Condensed]]: doctrine compression of Norman. A related page, not used as a source.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Public product page: [refactoringui.com](https://www.refactoringui.com/).

Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023).
