---
title: "Design Two-Track Extraction"
type: workflow
status: developing
created: 2026-06-30
updated: 2026-10-06
method: outline-2026-09-27
prose-model: fable
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

Design two-track extraction is a way of reading a design book so that each technique in it goes to the reader who can use it, either an AI coding agent or a person. It was worked out on two books, Refactoring UI and Universal Principles of Design. The reading produces two lists, one of rules an agent can apply in code and one of judgments that need a person to look at the result.

## Core takeaways

- Every technique in the book gets the same test.
- The test is whether an agent can apply it without looking.
- A yes sends it to the agent track, the fixed rules.
- A no sends it to the human track, the judgment calls.
- Many techniques have a rule part and a judgment part.
- A person reads only the techniques that need a person.

## How it works

Each technique in the book gets one question, whether it can be written as a fixed rule that an agent applies with no visual judgment. A spacing scale can, since it is a list of numbers. Deciding whether a screen feels crowded cannot, since someone has to look at the result. A technique with both parts is cut into two entries, one for each track.

```
technique from the book
        |
  fixed rule, no judgment?
    yes       both       no
     |          |          |
 agent track  split   human track
```

- The agent track holds rules an agent writes straight into code.
- The human track holds calls a person makes by looking.
- A split sends the rule to the agent, the judgment to the person.

## Examples

The two books gave 250 items, 200 principles from Universal Principles of Design and 50 techniques from Refactoring UI. Each item was scored twice, once for how much it needs a person and once for how well an AI model does it. The two scores place the item in one of four zones. Most items land in the zone where a person decides or the zone where an agent does the work, and fewer land between.

- Delegate, 84 items: an agent does these well.
  - A spacing scale based on 16, each step at least 25% apart.
  - Aligning elements on a common edge.
- Own, 95 items: a person must decide.
  - Start with too much white space, then remove some.
  - Ackoff's law: the right thing done badly beats the wrong thing done well.
- Augment, 20 items: both matter, so agent and person work together.
  - Anchoring, where a first number sways later judgments.
- Low leverage, 51 items: little value either way.

## Why sort at all

An agent handed a whole design book applies the taste rules badly and skips what it cannot measure. A person handed the same book spends time on rules a machine could apply. Sorting first puts the fixed rules into the agent's instructions and leaves the person a shorter list of what only a person can judge. The same test works on books about other crafts.

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
