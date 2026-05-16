---
title: "Reverse Causality"
type: concept
status: developing
created: 2026-05-14
updated: 2026-05-14
tags:
  - chunking
  - encoding
  - failure-modes
  - importance-based-chunking
  - schema
---

# Reverse Causality

Justifying the importance of a concept through another concept that itself requires memorization creates a closed loop — and a closed loop adds a memory burden rather than reducing one.

## The Problem

Chunking by importance works when the importance of a concept is grounded in prior knowledge, broader relationships, or logical inference. When it is grounded only in a fact that also needs to be memorized, the justification collapses into circular memorization.

A concrete example: five concepts — A, B, C, D, E. If A is important because it creates B, and the only way to know that A creates B is to memorize it, then the relationship between A and B has not reduced what needs to be memorized — it has added to it. The arrow from A to B exists in isolation. Nothing outside A and B can be used to reconstruct it.

```
A → B
(only connection: memorized fact that A creates B)
```

The alternative is to anchor A's importance in the wider network — its influence on C and D, the fact that E produces it, the mechanism it shares with other concepts. When that network exists, B can be added to it without requiring the A→B link to be memorized in isolation.

```
E → A → C
         ↓
         D → B
```

Now B exists in context. The A→B relationship can be inferred from the surrounding structure rather than recalled as a standalone fact.

## The Check

After building a chunk or justifying its importance, apply this test:

> "\_\_\_A\_\_\_ is important because \_\_\_\_B\_\_\_\_."

Then ask:

> "Would I only know that if I had memorized that B is due to A?"

If yes, the justification is circular. The importance of A depends entirely on a fact that itself requires memorization — no prior knowledge or broader relationship is doing any work. The chunk needs to be reconnected to the wider network before it will reduce cognitive load.

## Why It Happens

Reverse causality is most likely to occur when:

- chunks are formed in the same order as the source (textbook or lecture order) rather than by independently evaluating relationships;
- importance questions are answered too quickly, with the first plausible connection rather than the most meaningful one;
- the chunk structure is committed to before the wider topic has been surveyed.

Importance checklisting (running through a fixed list of importance criteria) and simple question-and-answer formats increase the risk because they reward fast, locally coherent justifications that may not survive outside the immediate context. [[wiki/Concepts/Importance-Based Chunking|Intuitive chunking]] — finding the root reason something matters across the whole topic — reduces it.

## Relationship to Spiderwebbing

Reverse causality and [[wiki/Dimensions/Deep Processing/Mindmaps|spiderwebbing]] often appear together. When chunks are justified circularly, the relationships between them are shallow and locally determined. When the map is built, those shallow relationships generate chaotic arrows because there is no wider organizing logic to constrain them.

Fixing reverse causality at the chunking stage usually cleans up spiderwebbing downstream.

## Related

- [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]]
- [[wiki/Dimensions/Deep Processing/Schema|Schema]]
- [[wiki/Dimensions/Deep Processing/Mindmaps|Mindmaps]]
- [[wiki/Dimensions/Deep Processing/Aim|Aim]]
- [[wiki/Dimensions/Deep Processing/Shoot|Shoot]]
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]
