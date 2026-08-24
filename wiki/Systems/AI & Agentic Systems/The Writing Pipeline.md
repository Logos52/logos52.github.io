---
title: "The Writing Pipeline"
type: concept
status: developing
created: 2026-08-24
updated: 2026-08-24
tags:
  - ai
  - writing
  - agentic-engineering
---

# The Writing Pipeline

For some time we tried to get an AI to write pages a stranger could follow, and it kept running into the same problem: its sentences referred to things that had never been put on the page. A page would mention a deal nobody had described, or count reasons it never listed, or bring up a face nobody had introduced. We logged the failures, and the log filled at a steady few per day. Every fix we wrote was a rule, and every rule was broken within minutes of being installed, with the same complaint coming back over and over inside a single session. The sentence that summed it all up said that the fault always comes back in whatever form the newest rule still permits.

The diagnosis that finally held is simple. A head is one run of the model, holding only what it has been shown. The head that wrote a sentence cannot see what is missing from that sentence, because the head's own memory fills the gap, and a rule read by that same head is satisfied by that same memory. So the fix was not another rule but a separation of the work into four jobs, each done by a head that lacks something the head before it had.

## The mechanism, drawn

```text
 source page or transcript        separate researcher
            │                             │
            ▼                             ▼
 STAGE 1  fact list in the           research bank
          writer's own words;        claims graded, links
          then the source is closed  open to strangers
            │                             │
            └──────────────┬──────────────┘
                           ▼
 STAGE 2  outline of wholes and parts
          the owner passes the shape before any prose
                           │
                           ▼
 STAGE 3  writing pass, one paragraph at a time
          after each paragraph a script lists:
          references not given · unclear pronouns ·
          counts of unnamed things · findings not stated ·
          arguing words where the world should be
                           │  finished draft
                           ▼
 STAGE 4  fresh head, same model, no memory,
          one fixed prompt
                           │
                           ▼
          rewrite  +  Unclear list
            │                │
            │        list not empty:
            │        writer puts the missing
            │        thing on the page,
            │        a new fresh head runs
            │                │
            │        ◄───────┘  (loop)
            ▼
          list empty: the owner reads the rewrite
```

## Stage one: the facts, and the bank

The source, which is a page being replaced or a transcript being drawn on, is reduced to a list of facts in the writer's own words, and then the source is closed. Closing it is the whole point, because a sentence the writer can no longer see cannot be carried over, and carried-over sentences were where most of the references to missing things came from, since a phrase that made sense in the source arrives on a page that never supplied what the phrase depends on.

For pages that stand on facts about the world, a separate researcher builds a bank before anything else happens. Every claim in the bank is numbered and graded on a scale that runs from shown to contradicted, every citation is a link a stranger can open, and the gaps are named as plainly as the findings. The bank produces evidence and never prose, so nothing in it can be pasted into a page. When the good material lives in more than one place, the bank gets more than one lane, one for published sources and one for what circulates on X, the social network.

## Stage two: the outline

Before any prose is written, the shape of the page goes to the owner, the person whose site this is and whose word passes a page. The shape is an outline of wholes and parts, where a whole says what the reader is looking at and a part gives one piece of it, and the page starts and ends on a whole. Nothing is drafted until he has passed the shape. This is the cheapest stage, and skipping it was expensive every time, because a page built on the wrong shape cannot be patched into the right one.

## Stage three: the writing pass

The writer answers the owner in conversation, one paragraph at a time, as if explaining the thing to him in person. After each paragraph, a script reads the draft exactly as written and lists what every sentence depends on: each name and each "the X", and whether the page above supplied it; each pronoun that could point at more than one thing; each count of things the page never names; each sentence that says what the page does without saying what it comes to; and each word about arguing, such as premises, claims, and evidence, used where the page should be talking about the world.

Every check in that script used to be a rule written in prose, and every one of them kept being broken in that form until it was turned into a mechanical test that runs whether or not anyone remembers it.

## Stage four: the filter

A fresh head, which is the same model with no memory of anything above, gets exactly two things: the finished draft and one fixed prompt. The prompt is narrow: rewrite the page into plain, natural English, keep every fact, add nothing, shorten nothing, use everyday words, keep a sentence's reasons inside it, use no idioms, do not announce what is coming, and put everything that cannot be resolved at the end under the heading Unclear.

The Unclear list is what makes the stage work. The writer fixes the draft where the list points, and fixes it at the level of content, putting the missing thing on the page rather than rewording the sentence that points at it, and then a new fresh head runs on the result. That loop ends when the list comes back empty, and on some pages it takes several rounds. The owner reads only the rewrite, never the draft.

It took trying to learn what the filter needs. It has to be fresh, because the same model checking its own draft in the same conversation was the very thing that had been failing all along; a fresh head has no memory of its own to fill a gap with, which is why freshness, and not intelligence, is what exposes the gap. It has to be the same calibre of model as the writer, because two small local models were tried on the job and both failed: one changed two paragraphs, got a fact wrong while changing them, and copied the rest, while the other cut the page to half its length and invented lines. And its instruction has to be narrow, because "make it better" given to a fresh head produces polish, while the fixed prompt produced pages that passed. The prompt lives in a file, and every change to it is logged together with the run that forced the change. The prompt has one known tic: it tends to add "because" to sentences that already carry their reason.

## Why separation fixed what rules could not

A rule aimed at a writer competes, at the moment of writing, with everything else in the writer's head, and it loses. The same rule, moved into a stage, stops being advice and becomes the stage's whole job. "Don't carry sentences from the source" stopped being a rule and became the closing of the source after the fact list. "State what you found" stopped being a rule and became a flag raised by the script. "Write plainly" stopped being a rule and became the entire instruction of a head that is given nothing else to do. A rule that has become a job cannot be forgotten, because the stage does not run without it.

That is also the honest way to say what the AI is doing: it works better when it passes through a filter of itself. The filter is not smarter than the writer; it is the same model with the writer's memory taken away and one job in front of it, and what survives the removal of that memory is only what actually made it onto the page.

## What it produced, and what it cannot do

The pipeline is measured by the difference between before and after. Before, no page satisfied its owner, failures were being logged every day, and rule after rule was installed and broken. After the stages were separated, a whole section of this site went through the pipeline from beginning to end and its owner passed the pages.

The limits are still there. An empty Unclear list means a stranger can follow the page, and it does not mean the page is right, since a fact that enters wrong at stage one passes untouched through every later stage, so the last judge is still the owner. And the shortest texts, the index lines short enough to say in one breath that sit under a link with no page above them, needed a different mechanism entirely: the owner asked what a page says, and the answer given to him in conversation, in ordinary speech, became the line.

## Links

- [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]] — what the writing model is underneath, and why structure leaks into its prose.
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — the memory limits the pipeline turns into an advantage.
- [[wiki/Systems/AI & Agentic Systems/The Prohibition Loop|The Prohibition Loop]] — why a rule can be obeyed while the fault stands, which is the failure the stages replaced.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — the general craft of deciding what a head gets to see.

## Open questions

The rewrite loop ends when a fresh head resolves every reference. What would an equivalent mechanical ending condition look like for the facts themselves?

The index lines fell outside the pipeline and were solved by conversation instead. How many other short forms, such as titles, captions, and one-line summaries, need that second mechanism rather than this one?

## Sources

The tools and logs behind this page are in this site's own repository: the two files of standing instructions the writer drafts under, the rewrite prompt with its record of changes, the reference-checking script, and the research journal entry of 2026-08-22 that counted the failures.
