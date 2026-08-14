---
title: "Reverse Causality"
type: concept
status: developing
created: 2026-05-14
updated: 2026-08-14
written-by: grok
model: grok
description: "A closed justification loop: one idea's importance is explained through a second idea that itself has to be memorized, which adds a memory item instead of removing one."
tags:
  - chunking
  - encoding
  - failure-modes
  - importance-based-chunking
  - schema
---

# Reverse Causality

Justifying one idea's importance through a second memorized idea adds a memory item instead of removing one. That closed loop is reverse causality here — not the statistics term, where the outcome caused the predictor.

## The loop you can see

A chunk is a group of ideas held as one unit instead of many isolated facts. Importance-based grouping works when the reason A matters can be generated from something already known: a broader relationship, a prior fact that does not itself need to be learned tonight, a logical step. Elaborative interrogation and self-explanation have the same bound. The why has to be answerable from what the learner already holds.

The failure is narrower. A is marked important because it creates B. The only way to know that A creates B is to memorize the arrow. Nothing outside A and B can reconstruct it. The justification has not grounded A. It has added a second item — B, and the A→B link — that must be stored on its own.

```text
Isolation
  A  →  B
  A matters because it creates B; B is itself a memorized fact.

Wider network
  E produces A.
  A influences C and D.
  A shared mechanism sits under all of them.
  B can now attach without the A→B arrow having to be stored alone.
```

Once B sits in that network, the A→B relationship can be reconstructed from more than one cue instead of recalled as a standalone fact. Inferred is the hope. Reconstructable from more than one cue is the test.

After a chunk is built, two sentences catch the loop:

**A is important because B.**

**Would I only know that if I had memorized that B is due to A?**

If the answer is yes, the justification is circular. The chunk is not finished. It has to be reconnected to the wider network — the [[wiki/Dimensions/Deep Processing/Schema|Schema]] the surrounding topic is trying to become — before the grouping will reduce load instead of adding it.

## Why it happens

The loop is most likely when chunks are formed in the same order as the source, rather than by independently evaluating relationships. [[wiki/Dimensions/Deep Processing/Aim|Aim]] stops that textbook-order encoding: write what the material must answer before opening it. [[wiki/Dimensions/Deep Processing/Shoot|Shoot]] then works the source against those questions into a rough map, so the first grouping is not the author's next sentence.

It is also most likely when importance questions are answered too quickly, with the first plausible connection rather than the most meaningful one, and when the chunk structure is committed before the wider topic has been surveyed. A first shallow pass should precede a committed structure.

Two operators raise the risk because they reward fast, locally coherent justifications. Importance checklisting is running a fixed list of "why this matters" prompts and accepting the first hit. Simple Q&A is a local question-and-answer pair that never leaves the sentence it came from.

The repair is not a second name for the same check. [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Intuitive chunking]] — finding the root reason something matters across the whole topic — is the move that [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]] owns. Ground importance in the whole topic, not the next sentence.

Reverse causality and [[wiki/Dimensions/Deep Processing/Mindmaps|spiderwebbing]] often appear together. Circular justifications produce shallow, locally determined arrows; the map then looks chaotic because no wider logic constrains them. [[wiki/Dimensions/Deep Processing/Mindmaps|Mindmaps]] owns that chaotic-arrow failure. This page is the upstream cause. Fixing the loop at the chunking stage usually cleans up the spiderwebbing downstream.

The same loop, now caught, is what the next pass reconnects. A yes on the check means A gets attached to something that does not itself have to be memorized, so the relationship can be rebuilt from more than one cue. That is what makes the next pass cheaper.

## Related

- [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]] — the repair: ground importance in the whole topic, not the next sentence
- [[wiki/Dimensions/Deep Processing/Mindmaps|Mindmaps]] — owns the chaotic-arrow failure; this page is the upstream cause
- [[wiki/Dimensions/Deep Processing/Schema|Schema]] — the wider network the reconnection is trying to build
- [[wiki/Dimensions/Deep Processing/Aim|Aim]] — write what the material must answer before opening it, which stops textbook-order chunking
- [[wiki/Dimensions/Deep Processing/Shoot|Shoot]] — work the source against those questions into a rough map
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — the sibling failure: a locally satisfying move that does not do the work

## Open Questions

- How often the check fires on notes already marked done.

## Sources

- House encoding diagnostic. The check and the A–B isolation are this system's own; they run on any notes already in hand.
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*. Elaborative interrogation has moderate utility when the why is answerable from prior knowledge.
- Pressley, M., McDaniel, M. A., Turnure, J. E., Wood, E., & Ahmad, M. (1987). Generation and precision of elaboration: effects on memory. Elaborative interrogation helps when prior knowledge can generate the elaboration.
