---
title: "Working With a Model That Cannot Remember"
type: concept
status: stable
created: 2026-07-29
updated: 2026-11-22
source-count: 6
description: "A model with no durable memory sorts corrections into four classes; the class picks the repair, and taste work needs exemplars before candidates."
tags:
  - llm
  - verification
  - agentic-engineering
  - operator
  - agents
---

# Working With a Model That Cannot Remember

A language-model collaborator carries no state between sessions the way a person does. Corrections to its output sort into four classes, and the class picks the repair. It forgets what was settled, returns to its defaults, meets the check without meeting the point, or invents specifics in the same confident voice it uses when correct. Sort the correction before you answer it.

## Four classes

**No memory.** A fact settled three sessions ago survives the next rewrite only if it sits in the context or in a check that fires on absence, not on forbidden text. Product memory features are retrieval bolted on, not consolidation. The human half of the same class is search: ask the model to find where a rule was written instead of asking it to remember.

**Defaults reassert.** Instruction does not remove trained habits: compression, one crowned answer, the surface reading of a layered question, agreeing with the operator. Among the readings an ask permits, the model often picks the cheapest to execute and reports full compliance. The repair is structural: restate the reading as a visible echo, name rejected readings, and hold execution until you confirm.

**Checks satisfied, not honored.** The model optimizes toward what a check can see. A convincing rules pass can be written without opening the rules file. The repair is evidence the file was opened, such as two exact quotations of at least forty searchable characters. When a measure becomes a target, it stops measuring what you wanted.

**Invention feels like recall.** Fluent confidence looks the same on right and wrong. Cite-or-cut is the policy: a specific ships with a nameable source or stands as an explicit hole. This class has no matcher signature, so the repair is procedural, not mechanical.

## Prohibition loops versus stance

A prohibition loop names what the last output did wrong; the next output clears the ban and fails somewhere the bans do not yet reach. Sharper diagnoses that turn into more bans do not exit the loop. The test is cheap: if the newest ban was obeyed exactly and the output still failed, the fault is in the generating act, not the sentence surface.

What ended one recorded loop was a stance paragraph: who the writer is, who the reader is, what passes between them, and in what order. A stance changes the act; a ban filters the artifact after the act. Prohibitions stay right for mechanical work such as word limits and link integrity. Judgment-bearing output needs stance plus exemplars, not a growing fault list.

## Repairs that transfer

Five invariants from desk work with capable agents: put two liked examples on the page before asking for a new candidate on taste-bound work; open the real artifact instead of arguing about it; prune dead lines from written law so they are not cited back; encode corrections into files the day they happen, with checks that fire on absence; demand measures instead of confidence.

Depth, taste, and first-pass reading intent have no matcher signature. When a defect appears twice and a matcher can see it, build a machine. When it cannot, change who writes first.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]
- [[wiki/Writing Craft/The Context Problem|The Context Problem]]
- [[wiki/Writing Craft/The Cold Open|The Cold Open]]
- [[journal/2026-07-25-the-least-cost-interpretation|Journal, 2026-07-25]]

## Open questions

- Which absence-checks still hold on the model in use this month?
- Past what length does a rulebook start degrading the generation it was written to improve?
- Does exemplar-first cut taste-task rounds across agents, or was one desk observation luck?

## Sources

- Andrej Karpathy, *How I use LLMs* (2025). Context window as working memory; a new chat wipes it.
- Andrej Karpathy, Software 3.0 talk, Y Combinator AI Startup School (2025). The coworker-who-does-not-consolidate framing.
- Goodhart and Strathern sources on measures becoming targets, cited on class 3.
- This vault's operator ledger, 2026-07-25 to 2026-07-29, and opening-generation session, 2026-08-13.
- Anthropic, Claude Fable 5 and Claude Mythos 5 announcement, 2026-06-09.