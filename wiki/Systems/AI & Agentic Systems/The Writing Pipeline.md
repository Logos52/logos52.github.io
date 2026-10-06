---
title: "The Writing Pipeline"
type: concept
status: developing
created: 2026-08-24
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
aliases:
  - Writing with a Structure Engine
merged-from:
  - Writing with a Structure Engine
written-by: opus
description: "How this site turns source notes into a page with an AI drafter: fact list, outline, one paragraph at a time, then a fresh session rewrites and checks."
tags:
  - ai
  - writing
  - agentic-engineering
  - llm
---

# The Writing Pipeline

# The Writing Pipeline

The writing pipeline is the route a page on this site takes from source notes to published text when an AI model does the drafting. It splits the work into stages so that the model session which wrote a sentence is never the one that checks it, and that stopped drafts from referring to things the page had never explained.

- Turn the source into a fact list in your own words, then close it.
- Show an outline before any prose.
- Write one paragraph at a time and check each with a script.
- Send the draft to a fresh session that has seen nothing else.
- Fix the draft and rerun until the fresh session reports no gaps.
- One job per ask: fill a structure, or place a line word for word.
- A correction that returns a second time gets a machine check.

## The stages

The pipeline has four stages: content, outline, writing and rewrite. Closing the source before writing means no sentence from it can be carried over. For a factual page, a research bank comes first, checking each claim against a source a stranger can open and naming the gaps, and it holds evidence only, never prose. The owner reads only what comes out of the last stage.

```
source -> fact list -> outline -> draft
          (closed)     (shown)   (one paragraph at a time)
                                    |
                                    v
                       fresh session + one prompt
                         |                  |
                   Unclear list         empty list
                   fix, run again       owner reads
```

- Content: a fact list in the writer's own words.
- Outline: wholes and parts, starting and ending on a whole.
  - Shown to the owner before any writing.
- Writing: one paragraph at a time.
  - A script lists each reference, count and announced item in it.
  - It says whether the page above supplied each one.
- Rewrite: a fresh session gets the draft and one prompt.
  - Rewrite into plain English and keep every fact, name, number, heading and link.
  - Add nothing, shorten nothing.
  - List under "Unclear" any name used before it is explained.
  - The Unclear list drives the fixes, and some pages take several rounds.

## Why a second session

The session that wrote a sentence still holds everything it meant, so a missing name or an uncounted list reads fine to it. A session that knows only the page cannot fill the gap from memory, so it reports the gap. Its job has to be narrow. Asked to make a draft better, a fresh session returned polish. Asked to rewrite in plain English, keep every fact and list what it could not resolve, it returned pages the owner accepted.

- Same model, no shared memory, one fixed prompt.
- The prompt is one short file the owner edits directly.
- Two small models on the owner's machine failed at the rewrite.
  - They barely changed the text, or they invented.
- The prompt joins clauses with "because", a habit the owner kept.

## Structure and wording

The model can take most of the labour while the person keeps what makes the text theirs. In the Breaking Bad writers' room, about three quarters of the work went into breaking the story on a board before a script was written, and once it was broken any writer in the room could draft it. The same split works with a model: settle the structure first, and drafting takes less work. Asking for structure and exact wording in one request loses the exact wording.

- Fill a shape: break a scene, order sections, check against an outline.
- Place a line the person already wrote, word for word.
- After writing, reverse-outline each beat in twelve to fifteen words.
- Compare that outline against the board.
- Each specific has a source, or is marked as a gap with a question.

A detail is not kept for reading well: a frontier model once wrote a set of craft pages, and a same-day check found a made-up derivation, a worked example that did not exist, and invented details.

## Where it fails

A ruling given in chat did not hold across rewrites. Every rewrite regenerates from context, and a ruled line was lost on each regeneration. What held was a check that fires when the line is missing, and one canonical block edited in place.

- Test a check by deleting what it guards and confirming it fires.
- A model running long on a wrong reading of the ask is costly.
- With two possible readings, ask one clarifying sentence first.
- The pipeline is for long work that later pages depend on.
- A one-off note does not need it.
- One operator, one project, a few pages, and no control run.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]]: the memory limits the pipeline turns into an advantage, and the triage layer under this workflow; four classes, and the class picks the repair.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the general craft of deciding what a head gets to see.
- [[wiki/Concepts/The Same Model Twice|The Same Model Twice]]: operator memory failing at the same rate as the model's.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: human eye last, on taste.
- [[wiki/Story Craft/The Beat Board|The Beat Board]]: card, board, and the sync-back after a writing pass.
- [[wiki/Story Craft/Breaking the Story|Breaking the Story]]: the three-quarters and carefree split in full.

## Sources

- The tools and logs behind this page are in this site's own repository: the two files of standing instructions the writer drafts under, the rewrite prompt with its record of changes, the reference-checking script, and the research journal entry of 2026-08-22 that counted the failures.
- Vince Gilligan, interviews on the *Breaking Bad* writers' room. Roughly three quarters of the labor in the break; two to three weeks on the board per episode; twelve-day corkboard time-lapse. Full treatment on Breaking the Story.
- University of North Carolina Writing Center, reverse-outline advice. The twelve-to-fifteen-word budget is this vault's compression of that public method.
- Story Grid, per-session board-update cadence. Cadence only, treated on The Beat Board. The method is not required.
- The Same Model Twice; Higher-Order Generativity vs Higher-Order Judgment: operator-memory case and the generativity / judgment split.
