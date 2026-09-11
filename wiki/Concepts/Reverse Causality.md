---
title: "Reverse Causality"
type: concept
status: developing
created: 2026-05-14
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

Reverse causality is a fault in how a chunk gets built. You justify why one idea matters by pointing at a second idea, and the second idea is itself something you would have to memorize. Each idea is now justified only by the other, and nothing outside the pair explains either one. A move meant to reduce what you carry has added an item to it.

The name is borrowed. Reverse causality here does not mean the statistical case where an outcome turns out to cause its predictor.

The repair is to anchor the first idea in things you already hold: what else the first idea influences, what produces it, what mechanism it shares. Then the link to the second idea can be rebuilt from more than one direction.

## Core takeaways

- A chunk is a group of ideas held as one unit instead of many isolated facts. Grouping by importance works when the reason an idea matters can be generated from something the learner already knows.
- The failure is this: A is marked important because it creates B, and the only way to know that A creates B is to memorize that link. The justification has added B and the A→B link as new items to store.
- Two sentences catch the loop after a chunk is built: "A is important because B." "Would I only know that if I had memorized that B is due to A?" A yes means the justification is circular and the chunk is not finished.
- The repair is to connect A to things already held: what produces A, what A influences, and what mechanism sits under all of them. Then the A→B relationship can be reconstructed from more than one cue.
- The loop is most likely when chunks follow the source's order, when importance questions are answered with the first plausible connection, and when the chunk structure is committed before the wider topic has been surveyed.
- Circular justifications produce shallow, local arrows on a mindmap, so the map looks chaotic. Fixing the loop at the chunking stage usually cleans up the map.

## What the loop looks like

A chunk is a group of ideas held as one unit instead of many isolated facts. Grouping by importance works when the reason A matters can be generated from something already known: a broader relationship, a prior fact that does not itself need to be learned tonight, or a logical step. Elaborative interrogation and self-explanation have the same limit. The why has to be answerable from what the learner already holds.

The failure is narrower. A is marked important because it creates B. The only way to know that A creates B is to memorize that link. Nothing outside A and B can reconstruct it. The justification has not grounded A. It has added a second item, B, and the A→B link, and both must be stored on their own.

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

Once B sits in that network, the A→B relationship can be reconstructed from more than one cue instead of recalled as a standalone fact. The aim is that the relationship can be inferred. The test is whether the relationship can be reconstructed from more than one cue.

## The two-sentence check

After a chunk is built, two sentences catch the loop:

**A is important because B.**

**Would I only know that if I had memorized that B is due to A?**

If the answer is yes, the justification is circular. The chunk is not finished. It has to be reconnected to the wider network, the [[wiki/Dimensions/Deep Processing/Schema|Schema]] the surrounding topic is trying to become. Until the chunk is reconnected, the grouping adds load instead of reducing load.

A yes on the check means A gets attached to something that does not itself have to be memorized, so the relationship can be rebuilt from more than one cue. Attaching A to something already held makes the next pass cheaper.

## When the loop is most likely

The loop is most likely when chunks are formed in the same order as the source, instead of by evaluating relationships independently. [[wiki/Dimensions/Deep Processing/Aim|Aim]] stops that textbook-order encoding: write what the material must answer before opening it. [[wiki/Dimensions/Deep Processing/Shoot|Shoot]] then works the source against those questions into a rough map, so the first grouping is not the author's next sentence.

It is also most likely when importance questions are answered too quickly, with the first plausible connection instead of the most meaningful one, and when the chunk structure is committed before the wider topic has been surveyed. A first shallow pass should come before a committed structure.

Two operators raise the risk because they reward fast, locally coherent justifications. Importance checklisting is running a fixed list of "why this matters" prompts and accepting the first hit. Simple Q&A is a local question-and-answer pair that never leaves the sentence it came from.

## The repair

The repair is not a second name for the same check. [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Intuitive chunking]], finding the root reason something matters across the whole topic, is the move that [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]] owns. Ground importance in the whole topic instead of in the next sentence.

## How the loop shows up on a mindmap

Reverse causality and [[wiki/Dimensions/Deep Processing/Mindmaps|spiderwebbing]] often appear together. Circular justifications produce shallow, locally determined arrows. The map then looks chaotic because no wider logic constrains the arrows. [[wiki/Dimensions/Deep Processing/Mindmaps|Mindmaps]] owns that chaotic-arrow failure. Reverse causality is the upstream cause. Fixing the loop at the chunking stage usually cleans up the spiderwebbing downstream.

## How to practice this

1. After you build a chunk, write the sentence "A is important because B" for one idea in it. Notice whether B is something you would also have to memorize.
2. Then ask: "Would I only know that if I had memorized that B is due to A?" If the answer is yes, the justification is circular. The chunk is not finished.
3. For a chunk that failed the check, list what produces A, what A influences, and what mechanism they share. Notice whether the A→B link can now be rebuilt from more than one cue.
4. Before opening a source, write what the material must answer. Then work the source against those questions into a rough map. Notice whether your first grouping still follows the author's sentence order.
5. When you answer an importance question, notice whether you took the first plausible connection. Look for the root reason the idea matters across the whole topic before committing the chunk structure.
6. Look at a mindmap you drew for the topic. If the arrows look chaotic, run the two sentences on the justification behind each arrow.

## Related pages

- [[wiki/Dimensions/Deep Processing/Importance-Based Chunking|Importance-Based Chunking]]: the repair. Ground importance in the whole topic, not the next sentence.
- [[wiki/Dimensions/Deep Processing/Mindmaps|Mindmaps]]: owns the chaotic-arrow failure; reverse causality is the upstream cause.
- [[wiki/Dimensions/Deep Processing/Schema|Schema]]: the wider network the reconnection is trying to build.
- [[wiki/Dimensions/Deep Processing/Aim|Aim]]: write what the material must answer before opening it, which stops textbook-order chunking.
- [[wiki/Dimensions/Deep Processing/Shoot|Shoot]]: work the source against those questions into a rough map.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: the sibling failure, a locally satisfying move that does not do the work.

## Open questions

- How often the check fires on notes already marked done.

## Sources

- House encoding diagnostic. The check and the A–B isolation are this system's own; they run on any notes already in hand.
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*. Elaborative interrogation has moderate utility when the why is answerable from prior knowledge.
- Pressley, M., McDaniel, M. A., Turnure, J. E., Wood, E., & Ahmad, M. (1987). Generation and precision of elaboration: effects on memory. Elaborative interrogation helps when prior knowledge can generate the elaboration.
