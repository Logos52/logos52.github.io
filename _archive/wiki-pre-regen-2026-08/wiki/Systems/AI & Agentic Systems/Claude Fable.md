---
title: "Claude Fable"
type: system
status: developing
description: "Operating notes on Claude Fable 5: where it earns its keep, where it fails, and the elicit-first rules for taste-bound work."
created: 2026-06-12
updated: 2026-06-12
tags:
  - llm
  - agents
  - models
  - ai-workflows
---

# Claude Fable

Fable does its best work pointed at readable artifacts and its worst when left to guess unstated taste. The model generates fluently in exactly the situations where it should be eliciting, so the operator's main job is controlling what it looks at before it produces anything.

## What It Is

Claude Fable 5 is the first model in Anthropic's Claude 5 family, a tier above Opus, sharing its underlying model with Claude Mythos 5 (the variant available to approved organizations). On this vault it runs the Cowork maintenance sessions and authors the Tsumugu dictionary corpus. Tier facts are the vendor's and dated 2026-06; observed behavior is the better instrument.

## Where It Earns Its Keep

Wide tasks over readable state. In one session (2026-06-12) it audited the vault's standards layer, restructured the writing law, backfilled four decision notes, and traced a missing PRD to a recoverable chat session — work spanning dozens of files with no round-trips wasted. The common property: everything it needed was on disk. Give it a repo, a git log, and written rules, and its reasoning compounds.

## Where It Fails

Taste-bound tasks, where the spec lives in the operator's head. The measured case: roughly twelve struck hero-tagline candidates in a row, each absorbing the previous rejection and missing the next unstated rule. The failure mode is structural, not random — the model defaults to producing another candidate when the cheaper move is asking for examples. The collapse came when the operator wrote four lines he liked and Fable explained why they worked: one round from there to acceptance.

A second observed bias: written rules have gravity. While a deleted standard still existed as "subordinate supporting detail," Fable kept citing it over the new law; the fix was deleting the old text, not improving the prompt. The model follows what is written more reliably than what is implied, in both directions.

## Operating Rules

These are invariants — they should transfer to any capable agent, not just Fable:

- **Exemplars before candidates.** On any taste-bound task (front-facing copy, naming, design judgment), supply two examples you like before the agent generates anything. Observed effect: twelve rounds without, one round with.
- **Point it at the real thing.** A look at the actual artifact (a live site, a real dictionary entry) resolved disputes that multiple rounds of verbal feedback could not. Iterating on descriptions of a thing is strictly worse than reading the thing.
- **Prune the written law.** The agent cites whatever text exists, including text you consider superseded. Deleting beats demoting.
- **Encode corrections the day they happen.** A correction that lives only in chat is gone next session; the same correction written into a standard or memory file holds. (The vault's same-day journaling rule, applied to agents.)
- **Demand measures.** Fable asserts with confidence whether or not it has checked. The decision-writing standard's measure-before-asserting rule exists for its outputs as much as for human ones.

## Price

Long sessions accumulate context the model visibly loses track of — late-session work needs its standards restated or freshly read. Corrections do not persist across sessions unless written into files. The model's confidence is uniform across verified and unverified claims, so verification cost lands on the operator. Per-token cost sits at the top of the lineup; narrow tasks may not need it.

## The Case Against

A wiki page about a current model is the most perishable genre in this vault — half-life is weeks, not years. The tier claim comes from the vendor's positioning, not independent measurement; the twelve-round case is one observation, not a benchmark; and the elicit-first rules may matter more than the model choice, which would make the model-specific framing of this page mostly decoration. Whether Opus performs the same narrow tasks at equal quality and lower cost is untested here.

## Quit Signals

Three failed rounds on a taste-bound task means stop generating and demand exemplars — continuing past three is sunk-cost iteration. An agent repeatedly citing rules you consider dead means the document layer needs pruning, not the conversation. And if a cheaper model matches output quality on a class of task across a few real comparisons, move that class of task down a tier.

## Checkable Expectations

Exemplar-first should hold taste-bound tasks to three rounds or fewer. The next front-facing copy task is the test; if it runs past three rounds with exemplars supplied, the rule is wrong, not the model.

## Related Pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the hub this page serves.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — where Fable sits among the vault's models.
- Hermes Agent — the persistent-memory counterpart.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] — the doctrine layer; this page's invariants belong to its invariant side, its model facts to the dated-tactics side.

## Open Questions

- Does exemplar-first actually cut taste-task rounds across agents, or was the one observation luck?
- Opus vs Fable on narrow middle-tier tasks: same task, both models, count the rounds.
