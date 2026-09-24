---
title: "The Writing Pipeline"
type: concept
status: developing
created: 2026-08-24
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
aliases:
  - Writing with a Structure Engine
merged-from:
  - Writing with a Structure Engine
written-by: fable
description: "How this site turns source notes into a page with an AI drafter: fact list, outline, one paragraph at a time, then a fresh session rewrites and checks."
tags:
  - ai
  - writing
  - agentic-engineering
  - llm
---

# The Writing Pipeline

The writing pipeline is the route a page on this site takes from source notes to published text when an AI model does the drafting. It splits the work into stages so that the model session which wrote a sentence is never the one that checks it, and that is what stopped drafts from referring to things the page had never explained.

## Core takeaways

- Reduce the source to a fact list in your own words and close it before writing, so no sentence from the source can be carried over.
- Show an outline before any prose is written.
- Write one paragraph at a time, and run a script over each one that lists what it refers to and whether the page above has given it.
- Send the finished draft to a fresh model session that has seen nothing but the draft and one short rewrite prompt, and read only what comes back.
- Put fixes into the draft and run the rewrite again, until the rewrite comes back with nothing it could not resolve.
- Give the model one job per ask: fill a structure, or place a line you already wrote word for word, never both at once.
- A correction that comes back a second time gets a machine check. A spoken rule on its own does not hold.

## The stages

- Stage one, content.
  - The source is turned into a fact list in the writer's own words, then closed.
  - For a factual page a research bank comes first: each claim checked against a source a stranger can open, with the gaps named. The bank holds evidence, never prose.
- Stage two, outline.
  - Wholes and parts, starting and ending on a whole, shown to the owner before any writing.
- Stage three, writing pass.
  - One paragraph at a time.
  - After each paragraph a script lists every reference, count and announced item the paragraph leans on, and says whether the page above supplied it.
- Stage four, rewrite.
  - A fresh session gets the draft and one prompt and nothing else.
  - The prompt: rewrite into plain English, keep every fact, name, number, heading and link, add nothing, shorten nothing, and list under "Unclear" any name used before the page has said what it is.
  - The Unclear list drives fixes to the draft. The loop runs until the list comes back empty, and on some pages that takes several rounds.
  - The owner reads only the rewrite.

```
source -> fact list -> outline -> draft
          (closed)     (shown)    (one paragraph
                                   at a time)
                                      |
                                      v
                         fresh session + one prompt
                             |              |
                       Unclear list      empty list
                       fix the draft,    -> owner reads
                       run again
```

## Why a second session

The session that wrote a sentence still holds everything it meant, so a missing name or an uncounted list reads fine to it. Its memory fills the gap. A session that knows nothing but the page has nothing to fill the gap with, so it reports the gap. The job it gets has to be narrow: asked to make a draft better, a fresh session returned polish; asked to rewrite in plain English, keep every fact and list what it could not resolve, it returned pages the owner accepted.

- Same model, no shared memory, one fixed prompt.
- The rewrite prompt is one short file the owner reads and edits directly, so a change there is what the second session gets.
- Two small models run on the owner's own machine were tried for the rewrite pass and failed: they barely changed the text or invented. A fresh session of the writing model did the job.
- The prompt has one known habit: it joins clauses with "because". The owner kept it, since the joined version sounded more like a person.

## Structure and wording

- Hand the model most of the labor and keep what makes the text yours.
- One job per ask. Either fill a shape (break a scene, order sections, check a draft against an outline) or place a line the person already wrote, word for word. Asking for structure and wording in one ask loses the exact wording.
- In the Breaking Bad writers' room, about three quarters of the work went into breaking the story on a board before a script was written. Once broken, any writer in the room could draft it. The same split works with a model: settle the structure first, and the drafting takes less work.
- After a writing pass, sync back: reverse-outline each beat in twelve to fifteen words and compare the result against the board.
- No detail passes because it reads well. Each specific has a source or is marked as a hole with a question. A frontier model once wrote a set of craft pages, and a same-day check found a made-up derivation, a worked example that did not exist, and invented particulars.

## Where it fails

- Spoken rulings did not hold. Every rewrite regenerates from context, and a ruled line was lost on each regeneration. What held was a check for the line's absence and one canonical block edited in place.
- So a correction that comes back a second time gets a machine check, tested by deleting the thing it guards to confirm the check fires.
- One expensive failure is a model running long on a wrong reading of the ask. With two readings, one clarifying sentence first.
- The apparatus is for long-form work that later pages depend on. A one-off note does not need it.
- The record behind this is one operator, one project, a few pages and no control run.

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
