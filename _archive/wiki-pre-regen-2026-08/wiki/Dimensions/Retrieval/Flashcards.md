---
title: "Flashcards"
type: technique
status: seed
created: 2026-05-29
updated: 2026-05-29
ics-stage: Camp I
tags:
  - retrieval
  - memorisation
  - lower-order
---

# Flashcards

A prompt-and-answer card produces a generative retrieval effect — but only when it tests one thing at a time and stays restricted to the outer, arbitrary layers of knowledge. Used past those limits, it turns into an expensive, overwhelming maintenance task that crowds out deeper work.

## What makes a usable card

- **A single prompt per card.** The prompt can be a question, a fill-in-the-blank, or image occlusion (blanking part of an image).
- **One thing tested at a time.** Bundling several facts into one prompt makes it impossible to score cleanly — a mix of right and wrong leaves you unable to mark the card correct or incorrect.
- **Outer-layer content only.** Reserve cards for the arbitrary detail (the upper layers), not the conceptual relationships that should already be encoded.

## Failure modes

- **Too many cards.** Hundreds or thousands of cards is the signature of a system compensating for shallow encoding — it demands constant repeating time and creates overwhelm. Proper layered encoding shrinks the deck because most information becomes relevant and deeply held without a card.
- **Confusing flashcards with summary cards.** A summary card states information; it has no generative effect. A flashcard forces retrieval. Only the second one trains memory.

## Links into the system

One of the two techniques under [[Rote Learning and Memorisation]], alongside [[Method of Loci]]. Card load drops as [[Layers of Learning]] and [[Higher-Order Learning]] do their work first; schedule the reviews through [[Spaced Interleaved Retrieval]].
