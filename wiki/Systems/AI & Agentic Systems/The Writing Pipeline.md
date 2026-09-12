---
title: "The Writing Pipeline"
type: concept
status: developing
created: 2026-08-24
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
aliases:
  - Writing with a Structure Engine
merged-from:
  - Writing with a Structure Engine
tags:
  - ai
  - writing
  - agentic-engineering
  - llm
---

# The Writing Pipeline

The Writing Pipeline is the way pages on this site are written with a model so that a stranger can follow the result. A head is one run of the model, holding only what it has been shown. The pipeline splits the writing into four jobs, and each job is done by a head that lacks something the head before it had: a fact list, after which the starting material is closed; an outline that the owner passes before any prose; a writing pass in which a script lists, after every paragraph, what each sentence depends on and whether the page supplied it; and a rewrite by a fresh head with no memory and one fixed prompt. The owner is the person whose site this is and whose word passes a page.

Under the pipeline sits a rule for every request made to the model. A person can hand a model most of the labor in a piece of writing and keep everything that makes the writing theirs, and what decides it is how each request is phrased: one job per ask. Either the model fills a shape, such as breaking a scene into beats or ordering sections, or it places a line the person already wrote, moved across word for word. The two never travel in the same request. Anything that must persist through later rewrites gets a machine check, and any specific detail traces to a source the model can name or stands as a marked hole. How confident the model sounds about a result settles nothing; the last call on what ships stays with the person.

## Core takeaways

- The failure the pipeline was built against was sentences that referred to things never put on the page. The head that wrote a sentence cannot see what is missing from it, because its own memory fills the gap, and a rule read by that same head is satisfied by that same memory.
- The four stages are a fact list with the starting material closed, an outline of wholes and parts the owner passes, a writing pass with a script that checks every paragraph, and a fresh head running one fixed prompt that ends with a list headed Unclear of what it could not resolve; the loop runs until that list comes back empty.
- Each ask to the model is one job, filling a shape or placing exact lines, never both. The split copies the Breaking Bad writers' room, where roughly three quarters of the labor went into breaking the story on a board before any script page existed.
- A ruling either gets a machine check, proven by deleting the thing on purpose and watching the check fire, or it silently drops in the next rewrite. Every specific detail traces to a source the model can name or stands as a marked hole.
- After the stages were separated, a whole section of this site passed its owner. A fact that enters wrong at stage one still passes untouched, the shortest index lines needed conversation instead, and a one-off short piece does not need the apparatus.

## The failure that kept coming back

For some time we tried to get an AI to write pages a stranger could follow, and it kept running into the same problem: its sentences referred to things that had never been put on the page. A page would mention a deal nobody had described, or count reasons it never listed, or bring up a face nobody had introduced. We logged the failures, and the log filled at a steady few per day. Every fix we wrote was a rule, and every rule was broken within minutes of being installed, with the same complaint coming back over and over inside a single session. The sentence that summed it all up said that the fault always comes back in whatever form the newest rule still permits.

## Why a fresh head sees what the writer cannot

The diagnosis that finally held is simple. The head that wrote a sentence cannot see what is missing from that sentence, because the head's own memory fills the gap, and a rule read by that same head is satisfied by that same memory. A fresh head, the same model with no memory of the draft, has no memory of its own to fill a gap with, so the gap shows. Freshness, and not intelligence, is what exposes the gap. So the fix was not another rule but a separation of the work into four jobs, each done by a head that lacks something the head before it had.

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

## One job per ask

Each ask given to the model is one job: fill a shape, or place exact lines, never both. Asking the model to write the opening requests both, and that request fails reliably. A shape to fill looks like: break this scene, order these sections, check this draft against that outline. A placement job is the other kind of ask: when the person has the line, the person hands the line over word for word and the model puts it in, with no rewording on the way. Model paraphrase is where exact wording is lost, so a line that matters survives as a placement job, never as raw material for a rewrite. A paragraph asked to be structured and worded at once is where the person's exact language disappears.

The same split is older than the model. Vince Gilligan's accounting of the *Breaking Bad* writers' room put roughly three quarters of the writing labor into the break, which is deciding the beats on a board before any script page exists. That room spent two to three weeks per episode on the board. Once the break was done, any writer in the room could execute the episode. Dialogue entered late, as key snippets in the outline, and the script still decided how every line sounds. Scripting carried its quarter of the labor, "kind of carefree" next to the breaking, in his phrase. [[wiki/Story Craft/Breaking the Story|Breaking the Story]] holds that three-quarters and carefree split in full.

The same split governs the model. Structure work and line work are separate asks with separate acceptance tests. A workflow that hands the model the structure work and routes each weakness to a mechanism gets a collaborator. A workflow that asks the model to be a whole writer gets repeated fights over wording. The moves add up to the working habits of a professional writers' room. The scope is long-form writing where canon builds up over time; a one-off short piece sits outside it.

## Stage one: the fact list and the research bank

The material a page is drawn from, either a page being replaced or a transcript being drawn on, is reduced to a list of facts in the writer's own words, and then that material is closed. Closing it is the whole point, because a sentence the writer can no longer see cannot be carried over, and carried-over sentences were where most of the references to missing things came from: a phrase that made sense in the original arrives on a page that never supplied what the phrase depends on.

For pages that stand on facts about the world, a separate researcher builds a bank before anything else happens. Every claim in the bank is numbered and graded on a scale that runs from shown to contradicted, every citation is a link a stranger can open, and the gaps are named as plainly as the findings. The bank produces evidence and never prose, so nothing in it can be pasted into a page. When the good material lives in more than one place, the bank gets more than one lane, one for published sources and one for what circulates on X, the social network.

## Stage two: the outline the owner passes, and the slow board

Before any prose is written, the shape of the page goes to the owner. The shape is an outline of wholes and parts, where a whole says what the reader is looking at and a part gives one piece of it, and the page starts and ends on a whole. Nothing is drafted until he has passed the shape. This is the cheapest stage, and skipping it was expensive every time, because a page built on the wrong shape cannot be patched into the right one.

The board stage of a writers' room shows what this stage looks like when it runs well. A twelve-day time-lapse of one *Breaking Bad* break shows almost nothing going up on the corkboard for days at a stretch. Bad ideas were kept in play on purpose. Cards left the board only after three tests: must this stay, is it interesting by itself, does it set up what comes next. Counted as pages, those days produced nothing. Counted as structure, they produced the episode.

So a sitting with the model is scored by settled structure, meaning ordered cards and open questions, and not by lines produced. A session that ends with six ordered beat cards and two open questions is the work going well; the six and the two are an illustration, not a quota. The expensive pattern is the model running long on a wrong reading of the ask, since a long wrong draft costs a correction, a re-read, and the sitting. The person's cheapest tool is a three-word interrupt at the first drift.

One addition is specific to a model: the hard separation, with the break always finishing before writing starts. The sync-back that follows is imported from outside the room. After every writing pass, the draft is reverse-outlined, meaning each beat's actual function is re-derived from the page in twelve to fifteen words, and the differences between that outline and the board are listed. [[wiki/Story Craft/The Beat Board|The Beat Board]] holds that second discipline: card, board, sync.

## Stage three: the writing pass and the script that reads it

The writer answers the owner in conversation, one paragraph at a time, as if explaining the thing to him in person. After each paragraph, a script reads the draft exactly as written and lists what every sentence depends on: each name and each "the X", and whether the page above supplied it; each pronoun that could point at more than one thing; each count of things the page never names; each sentence that says what the page does without saying what it comes to; and each word about arguing, such as premises, claims, and evidence, used where the page should be talking about the world.

Every check in that script used to be a rule written in prose, and every one of them kept being broken in that form until it was turned into a mechanical test that runs whether or not anyone remembers it.

## Stage four: the fresh head and the Unclear list

A fresh head, which is the same model with no memory of anything above, gets exactly two things: the finished draft and one fixed prompt. The prompt is narrow: rewrite the page into plain, natural English, keep every fact, add nothing, shorten nothing, use everyday words, keep a sentence's reasons inside it, use no idioms, write no epigram, do not announce what is coming, and put everything that cannot be resolved at the end under the heading Unclear.

The Unclear list is what makes the stage work. The writer fixes the draft where the list points, and fixes it at the level of content, putting the missing thing on the page rather than rewording the sentence that points at it, and then a new fresh head runs on the result. That loop ends when the list comes back empty, and on some pages it takes several rounds. The owner reads only the rewrite, never the draft.

It took trying to learn what this filter, the fresh head, needs. It has to be fresh, because the same model checking its own draft in the same conversation was the very thing that had been failing all along. It has to be the same calibre of model as the writer, because two small local models were tried on the job and both failed: one changed two paragraphs, got a fact wrong while changing them, and copied the rest, while the other cut the page to half its length and invented lines. And its instruction has to be narrow, because "make it better" given to a fresh head produces polish, while the fixed prompt produced pages that passed. The prompt lives in a file, and every change to it is logged together with the run that forced the change. The prompt has one known tic: it tends to add "because" to sentences that already carry their reason.

## What must persist gets a machine check

Every rewrite regenerates its section from context, so anything not machine-checked can silently drop. A serialized fiction project kept losing a ruled line each time that section was regenerated. Chat notes that said to remember it never held. Two things held: an absence-check that fails when the line is gone, and a single canonical block that gets edited in place rather than rebuilt.

A ruling either gets a machine check or silently dies in the next rewrite. The second correction of the same class means build the check, written into the process as a check, a gate, or a board rule, and then break the thing on purpose to prove the check fires; a correction written into the process is never repeated in chat. That delete-test is what is required: break the artifact on purpose and confirm the check catches the break. A ruling that is only spoken has the same effect as no ruling. The person running the model, the operator, has a memory that earns no more trust than the model's. [[wiki/Concepts/The Same Model Twice|The Same Model Twice]] is the worked case: ten evaluation rounds on a remembered model identity that a ten-second read of the checkpoint's config would have corrected.

No specific detail is cleared by how it reads. It traces to a source the model can name, or it stands as an explicit hole: cite or cut. How often the fluent, plausible specifics are wrong is unmeasured. In 2026-07, three craft pages written by a frontier model were sent through an adversarial check the day they were drafted. The checkers found a made-up causal derivation, a worked example that did not exist, and several invented particulars, all of them written fluently. That case only proves that the inventions arrive at the model's best effort. A single case sets no rate. The policy does not wait for one.

Three rules sit under that policy. No detail ships without a source the model can name. Where no source exists, the artifact carries an explicit hole with a question attached. Verification runs inside the pipeline as a second adversarial pass, so the human reader comes last and spends that reading on taste. That ordering is [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] made operational.

[[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] is the triage layer under this workflow: four classes of correction, and the class picks the repair.

## Why separation fixed what rules could not

A rule aimed at a writer competes, at the moment of writing, with everything else in the writer's head, and it loses. The same rule, moved into a stage, stops being advice and becomes the stage's whole job. "Do not carry sentences over from the starting material" stopped being a rule and became the closing of that material after the fact list. "State what you found" stopped being a rule and became a flag raised by the script. "Write plainly" stopped being a rule and became the entire instruction of a head that is given nothing else to do. A rule that has become a job cannot be forgotten, because the stage does not run without it.

That is also the plain way to say what the AI is doing: it works better when it passes through a filter of itself. The filter is not smarter than the writer; it is the same model with the writer's memory taken away and one job in front of it, and what survives the removal of that memory is only what actually made it onto the page.

## What it produced, what it costs, and what it cannot do

The pipeline is measured by the difference between before and after. Before, no page satisfied its owner, failures were being logged every day, and rule after rule was installed and broken. After the stages were separated, a whole section of this site went through the pipeline from beginning to end and its owner passed the pages.

The limits are still there. An empty Unclear list means a stranger can follow the page, and it does not mean the page is right, since a fact that enters wrong at stage one passes untouched through every later stage, so the last judge is still the owner. And the shortest texts, the index lines short enough to say in one breath that sit under a link with no page above them, needed a different mechanism entirely: the owner asked what a page says, and the answer given to him in conversation, in ordinary speech, became the line.

The price is set on both sides. The room price is two to three weeks of a seven-writer room per episode, roughly three quarters of the labor before a script page exists. The model-side price, every session, is a reverse-outline of twelve to fifteen words per beat plus its comparison against the board; each settled fact owes a check plus a delete-test; each detail owes a source lookup or a marked hole. The method is worth that price on long-form, canon-bearing writing. A one-off short piece does not need the apparatus, and matching the apparatus to the register is part of the method.

The claims here about what the model does wrong, that it loses exact wording when structure and wording share one ask, that it drops a ruling on regeneration, and that it invents specifics, are claims about frontier models as of 2026-07. The room half is the invariant: break, board, cull, lock. The insurance half goes out of date. A model that holds rulings makes absence-checks less necessary. A model whose details verify clean makes the adversarial pass less necessary. The price is set again as the facts change.

Quit if the board stage itself starts producing repeated corrections of one class, because then the division has failed. The move is narrowing the model's lane further, so that the person dictates structure too. Checkable within a week: the already-corrected class of error hits zero; every beat traces to a board card; the reverse-outline comparison against the board shows no differences at session exit; every specific traces to a named source or a marked hole.

The case against is the size of the record: one operator on one project, three craft pages through one adversarial pass, one serialized-fiction lost-ruling case, one showrunner's account, and no run of the same writing without the apparatus. The causal claim goes beyond what that record supports. A rival reading is that the failures billed to the model are effects of context and prompt design, in which case the checks and boards compensate for the operator's own scaffolding. On the sibling page, that rival reading accounts for 2 of 17 classes.

What survives both objections: hand the model structure, verify its specifics, machine-check what must persist. On long-form writing, that split is what makes the model a collaborator. Those three moves are the whole method.

## How to practice this

1. Reduce the starting material to a list of facts in your own words, then close it. Notice that a sentence you can no longer see cannot be carried over.
2. Send the outline of wholes and parts to the owner before drafting any prose. Notice that a page built on the wrong shape cannot be patched into the right one.
3. Phrase each ask as one job, a shape to fill or a line to place word for word. Notice that a request for both at once loses your exact language.
4. Give the finished draft and the fixed prompt to a fresh head with no memory. Fix each item on the Unclear list by putting the missing thing on the page, then run a new fresh head. Notice that the list empties after several rounds on some pages.
5. When a correction repeats, build a check, then delete the thing on purpose. Notice whether the check fires. A ruling with no check drops in the next rewrite.
6. Score a session by ordered cards and open questions, not by lines produced. Notice that days with nothing added to the board can still produce the episode's structure.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]]: the memory limits the pipeline turns into an advantage, and the triage layer under this workflow; four classes, and the class picks the repair.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the general craft of deciding what a head gets to see.
- [[wiki/Concepts/The Same Model Twice|The Same Model Twice]]: operator memory failing at the same rate as the model's.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: human eye last, on taste.
- [[wiki/Story Craft/The Beat Board|The Beat Board]]: card, board, and the sync-back after a writing pass.
- [[wiki/Story Craft/Breaking the Story|Breaking the Story]]: the three-quarters and carefree split in full.

## Open questions

- The rewrite loop ends when a fresh head resolves every reference. What would an equivalent mechanical ending condition look like for the facts themselves?
- The index lines fell outside the pipeline and were solved by conversation instead. How many other short forms, such as titles, captions, and one-line summaries, need that second mechanism rather than this one?
- Which corrections from the past week repeated and still lack a check?
- Which specifics carry no source?
- Where is the apparatus running on a register too light to pay?
- Which of the three 2026-07 facts has moved?
- What is the measured invention rate?

## Sources

- The tools and logs behind this page are in this site's own repository: the two files of standing instructions the writer drafts under, the rewrite prompt with its record of changes, the reference-checking script, and the research journal entry of 2026-08-22 that counted the failures.
- Vince Gilligan, interviews on the *Breaking Bad* writers' room. Roughly three quarters of the labor in the break; two to three weeks on the board per episode; twelve-day corkboard time-lapse. Full treatment on Breaking the Story.
- University of North Carolina Writing Center, reverse-outline advice. The twelve-to-fifteen-word budget is this vault's compression of that public method.
- Story Grid, per-session board-update cadence. Cadence only, treated on The Beat Board. The method is not required.
- The Same Model Twice; Higher-Order Generativity vs Higher-Order Judgment: operator-memory case and the generativity / judgment split.
