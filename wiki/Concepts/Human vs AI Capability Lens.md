---
title: "Human vs AI Capability Lens"
type: model
status: seed
created: 2026-06-30
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
source-count: 5
written-by: opus
model: grok
description: "A way to score any task twice, for how much it needs a person and how well an AI model does it, and what each of the four zones means."
tags:
  - model
  - capability
  - ai
  - human-ai
  - ai-durability
  - taste
  - judgment
  - naval
  - framework
  - scorecard
---

# Human vs AI Capability Lens

The human versus AI capability lens is a way to score a skill, a design principle or a task twice: once for how much it needs a person, and once for how well an AI model can do it. The two scores are separate, so a task can need a person badly and still be easy for a model. Where a task lands on the two scores tells you whether to keep it, share it with a model, or hand it over.

- Score the human side and the AI side separately, from 1 to 5.
- A task can score high on both at once.
- The human side is judging quality, making new things and owning the call.
- The AI side is producing cheaply, with results a check can confirm.
- The pair of scores puts a task in one of four zones.
- Scores carry a date and go stale as models change.

## The two axes

Most talk about AI and jobs uses one bar, with people at one end and machines at the other, so any gain for the machine is a loss for the person. The lens uses two bars. The human score asks how much the task depends on knowing what is good, cutting what is not, making something unlike the average of what already exists, and answering for the result. The AI score asks how fluently and cheaply a model produces the thing, and how easily the output can be checked without someone watching.

- Each axis is built from five facets, taken from two design books.
- Taste sits on the human side and has no machine match.
- Scale sits on the AI side and has no human match.
- A fast coding model scores high on scale, checkability and autonomy.

## The four zones

The two scores together place a task in a grid of four zones. The zones are Own, Augment, Delegate and Low-leverage, and each one says what to do with the task. Most useful work sits in Augment, where both scores are high and a person directs a model that does the volume.

```
            AI score low      AI score high
          +---------------+----------------+
 human    |  Own          |  Augment       |
 high     |  keep it      |  work together |
          +---------------+----------------+
 human    |  Low-leverage |  Delegate      |
 low      |  drop it      |  hand it over  |
          +---------------+----------------+
```

- Own: a person does it, and models add little.
- Augment: a person decides, and a model produces.
- Delegate: a model does it, and a check confirms it.
- Low-leverage: neither side gains much, so cut it.

## How this desk uses it

The owner runs his own setup on the grid. Bots that stay running in the cloud sit in the Delegate cell: each has one job, and each only reports back. Work at the laptop with an agent sits in the Augment cell. The final cut of every published page stays with him, because owning the call is on the human side.

- Delegate work must be easy to check.
- No bot merges code or publishes.
- Pick a model by how checkable the task is, since names say little.

## Where it fails

The lens rests on a gap in reliability between people and models. If models become reliable enough to be trusted with a call, answering for the result stops being a human advantage and the axes need redrawing. Scores are also tied to one model and one date. The model scores on this desk were set in July 2026 for Grok 4.3 and were not updated when Grok 4.6 shipped in August.

- A score without a date and a model version cannot be trusted.
- Re-grade after each model release that changes real work.

## Related pages

- [[wiki/Design/Universal Principles & Design Techniques — Master Scorecard|design scorecard]]: the table this lens grades.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: the split this lens is built on.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: verifier role, intelligence versus agency, "waste tokens save time."
- [[wiki/Money/The Almanack of Naval Ravikant|The Almanack of Naval Ravikant]]: specific knowledge, accountability, leverage.
- [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]]: a Human-5 that graduates to its own page.
- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]: the Agent/Human split this lens grades.
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: natural home for the dated snapshot table.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: related skill list for the same year.
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: the offloading line. The artifact arrives either way, the encoding must not be handed over.
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]]: interpretability substrate for the two axes. The lens is not the Global Workspace paper.

## Sources

- Naval Ravikant, *The Almanack of Naval Ravikant* (compiled by Eric Jorgenson). Specific knowledge, accountability, leverage.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]. The split the lens is built on.
- Naval Ravikant and Nivi, industrial-revolution episode (2026). Verifier role; "waste tokens, save time."
- [Wealest](https://www.wealest.com/) summary of Naval on judgment and taste. Secondary, reachable.
- [Office Chai](https://officechai.com/) on design as an AI moat. Secondary, reachable.
