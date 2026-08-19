---
title: "Best-attempt Encoding"
type: concept
status: developing
created: 2026-05-14
updated: 2026-05-14
tags:
  - encoding
  - schema-building
  - high-volume
  - bear-hunter-system
  - retrieval
---
> Part of [[wiki/Dimensions/Deep Processing|Deep Processing]]

# Best-attempt Encoding

Every first schema is going to be wrong. The goal is to make it wrong in useful ways — organized enough to be tested against, revised, and improved. Build the structure good enough to enter the retrieval cycle, not good enough to be finished.

## Narrow vs. Wide: The 1:1 Decision

Every item can be encoded at 1:1 (narrow) or slightly wider (1:1.2).

**1:1** protects one fact against one specific question type. Fast, but brittle — does not transfer to adjacent questions, applications, or variations.

**1:1.2** draws a slightly bigger box. More time upfront applying, integrating, and working with the concept across contexts. Wider protection — more question types, better handling of dynamic content that updates or extends the base concept.

Use two filters to decide:

- **Conceptual relevance.** Does this item attach to something already known to be important? Draw the bigger box.
- **Repeated testing relevance.** Does this item keep surfacing across different question types and contexts? It has earned integration.

When both filters are low — flashcard it, move on. When either is high — invest in the wider encoding.

The 1:1.2 margin matters especially for dynamic content. When a new regulation, finding, or example extends a base concept, wider encoding means the update already has a place to attach. Narrow encoding produces a fact that cannot absorb it — just another isolated card.

## How to Actually Get to 1:1.2

The difference between 1:1 and 1:1.2 is processing depth. Shallow encoding stores a surface form — a label, a definition, a fact as encountered. Deeper encoding builds relational structure: why the concept works, where it connects, what it predicts.

Concretely, after encountering a new concept:

- **Generate an application.** Ask: where would this show up in practice? One real example forces the concept off the page and into context.
- **Identify a connection.** What does this attach to in the existing schema? A concept with one connection is fragile. A concept with two or three is much harder to lose.
- **Ask the mechanism question.** Why does this work? What is the causal chain underneath the fact? Knowing the mechanism means you can reconstruct the fact even if memory fades.
- **Predict a variation.** What would change if one condition shifted? This tests whether the concept is genuinely understood or just recognized.
- **Check the chunk boundary.** Does this belong inside an existing chunk, or does it extend the chunk boundary outward? Placing it correctly is the map update.

These moves live in the BHS Skin stage — the phase where raw material gets converted into a retrievable schema. The Skin is not note-taking; it is the restructuring work that produces 1:1.2 encoding rather than 1:1. Skipping or rushing the Skin is the most common way to accumulate shallow encoding debt that shows up later as poor retention.

## What Good Structure Looks Like

The schema should help recall, not require its own memorization. Aim for:

- **Specific enough to be unique.** Chunk names represent *this* topic, not every topic.
- **Intuitive enough to cue recall.** Remembering one element of the structure should surface the others.
- **Flexible enough to update.** The map will be revised — build it to absorb correction.

Two failure modes pull in opposite directions:

- **Too specific.** Categories are so domain-specific or arbitrary that each requires independent memorization. The structure becomes another load rather than a lever.
- **Too generic.** Categories are reusable across every topic — "mechanism / presentation / treatment," "history / examination / investigation / management." Every schema looks the same, which means none of them help locate specific knowledge.

What is intuitive depends on prior knowledge. Calibrate to where you actually are, not to what an expert would find obvious.

## Skill Level Sets the Target, Not the Ceiling

Aim for one level better than your current encoding baseline — not the ideal level. Trying to encode at the highest level before the skill is there costs too much time per topic and stalls coverage.

A small retention improvement compounds: it lightens every future review session across the entire study period. Early maps will be imperfect. That is expected. The prior map — even if structurally wrong — built the context that makes the error visible during testing. Fixing it after retrieval costs a fraction of the original build time and produces better knowledge than the original would have reached.

## Where It Sits in the Cycle

```
best-attempt encoding (1:1.2 where filters apply)
→ high-volume retrieval within one week
→ gap diagnosis by type
→ re-encode higher-order gaps
→ targeted retrieval for lower-order gaps
→ flashcards for remaining isolated details
```

Testing is what converts a best attempt into something reliable. Expecting revision is not a concession — it is how the cycle is designed to work.

## Related

- [[wiki/Domains/Miscellaneous/How to prepare for ultra high-volume exams|How to prepare for ultra high-volume exams]]
- [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]]
- [[wiki/Dimensions/Deep Processing|Deep Processing]]
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]
- [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]]
- [[wiki/Dimensions/Mindset/Marginal Gains|Marginal Gains]]
