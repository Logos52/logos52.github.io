---
title: "Writing with a Structure Engine"
type: system
status: developing
created: 2026-07-27
updated: 2026-08-14
written-by: grok
model: grok
source-count: 4
tags:
  - llm
  - writing
  - agentic-engineering
---

# Writing with a Structure Engine

A language model is reliable at breaking and ordering a piece of writing, and unreliable at details and at memory. The work is split that way: the model breaks, orders, checks, and places, and the person holds the lines, the rulings, and the last call on what ships. Dated 2026-07, none of the details ships unverified, nothing settled survives a rewrite without a machine check, and confidence clears nothing.

## One job per ask

**Each ask is one job: fill a shape, or place exact lines. Never both.** Asking it to write the opening requests both, and that request fails on cue. A shape to fill looks like: break this scene, order these sections, check this draft against that outline. A placement job is the other ask. When the person has the line, the person hands the line over verbatim and the model puts it in. Model paraphrase is where exact wording dies. A line that matters survives as a placement job, never as raw material for a rewrite.

The same split is older than the model. Vince Gilligan's accounting of the *Breaking Bad* room put roughly three quarters of the writing labor into the break — deciding the beats on a board before any script page exists. That room spent two to three weeks per episode on the board. Once the break was done, any writer in the room could execute the episode. Dialogue entered late as key snippets in the outline. The script still decided how every line sounds. Scripting carried its quarter of the labor, "kind of carefree" next to the breaking, in his phrase. [[wiki/Story Craft/Breaking the Story|Breaking the Story]] holds that three-quarters / carefree split in full.

The same split governs the model. Structure work and line work are separate asks with separate acceptance tests. A workflow that hands the model the structure work and routes each weakness to a mechanism gets the collaborator. A workflow that asks the model to be a whole writer gets the fights. The moves converge on the institutions of a professional writers' room. The scope is long-form where canon accrues. A one-off short piece sits outside.

## Memory and details

**Every rewrite regenerates its section from context, so anything not machine-checked can silently drop.** A serialized fiction project kept losing a ruled line each time that section was regenerated. Chat notes that said to remember it never held. Two things held: an absence-check that fails when the line is gone, and a single canonical block that gets edited in place rather than rebuilt.

A ruling either gets a machine check or silently dies in the next rewrite. The second same-class correction means build the check, then break the thing on purpose to prove it fires. That delete-test is the demand: sabotage the artifact and confirm the check catches the break. A ruling that stays verbal effectively did not happen. The operator's own memory earns no more trust than the model's. [[wiki/Concepts/The Same Model Twice|The Same Model Twice]] is the worked case: ten evaluation rounds on a remembered model identity that a ten-second read of the checkpoint's config would have corrected.

**No specific is cleared by how it reads.** It traces to a source the model can name, or it stands as an explicit hole. Cite-or-cut. How often the fluent, plausible specifics are wrong is unmeasured. The 2026-07 case only proves that the inventions arrive at the model's best effort. Three craft pages written by a frontier model were sent through an adversarial check the day they were drafted. The checkers found a made-up causal derivation, a worked example that did not exist, and several invented particulars — all of them written fluently. A single case sets no rate. The policy does not wait for one.

Three rules sit under that policy. No detail ships without a source the model can name. Where no source exists, the artifact carries an explicit hole with a question attached. Verification runs inside the pipeline as a second adversarial pass, so the human eye arrives last and spends itself on taste. That ordering is [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] made operational.

[[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] is the triage layer under this workflow. Four classes. The class picks the repair. This page does not restate that inventory.

## The room is the invariant

The three facts are claims about frontier models as of 2026-07. The room half is the invariant: break, board, cull, lock. The insurance half rots. A model that holds rulings cheapens absence-checks. A model whose details verify clean cheapens the adversarial pass. Re-price as the facts change.

Score a sitting by settled structure: ordered cards, open questions. Do not score it by lines produced. One clarifying sentence beats an 800-word artifact built on the wrong reading.

## A slow board

**The expensive pattern is the model running long on a wrong reading of the ask.** Whenever an ask can be read two ways, the model owes a single clarifying sentence first. A long wrong draft costs a correction, a re-read, and the sitting. A clarifying question costs seconds. The person's cheapest tool is the three-word interrupt at first drift.

A twelve-day time-lapse of one *Breaking Bad* break shows almost nothing going up on the corkboard for days at a stretch. Bad ideas were kept in play on purpose. Cards left the board only after three tests: must this stay, is it interesting by itself, does it set up what comes next. Counted as pages, those days produced nothing. Counted as structure, they produced the episode. A session that ends with six ordered beat cards and two open questions is the work going well. The 6+2 is an illustration, not a quota.

When a correction repeats, it gets written into the process — a check, a gate, a board rule — and never repeated in chat.

One addition specific to a model: the hard separation, the break always finishing before writing starts. The sync-back is an import. After every writing pass, reverse-outline the draft — re-derive each beat's actual function from the page in twelve to fifteen words — and diff it against the board. [[wiki/Story Craft/The Beat Board|The Beat Board]] is the second discipline: card, board, sync.

## What the record is

Room price: two to three weeks of a seven-writer room per episode, roughly three quarters of the labor before a script page exists. Model-side price, every session: reverse-outline (12–15 words per beat) plus a diff; each settled fact owes a check plus a delete-test; each detail owes a source lookup or a marked hole.

It buys its keep on long-form, canon-bearing writing. A one-off short piece does not need the apparatus. Matching the apparatus to the register is part of the method.

Quit: if the board stage itself starts producing repeated corrections of one class, the division has failed. The move is narrowing the model's lane further. The person dictates structure too.

Checkable, within a week: already-corrected class hits zero; every beat traces to a board card; reverse-outline diff runs clean at session exit; every specific traces to a named source or a marked hole; ambiguous asks draw a one-line question before any long artifact.

The case against: one operator on one project — three craft pages through one adversarial pass, one serialized-fiction lost-ruling case, one showrunner's account, no run of the same writing minus the apparatus. The causal claim outruns the record. Rival reading: the failures billed to the model may be artifacts of context and prompt design, in which case the checks and boards compensate for the operator's scaffolding. On the sibling page that rival is 2 of 17 classes.

What survives both objections: hand the model structure, verify its specifics, machine-check what must persist.

On long-form the split is the collaborator. Those three moves are the whole method.

## Links into the knowledge base

- [[wiki/Concepts/The Same Model Twice|The Same Model Twice]] — operator memory failing at the same rate as the model's
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — human eye last, on taste
- [[wiki/Story Craft/The Beat Board|The Beat Board]] — card, board, and the sync-back after a writing pass
- [[wiki/Story Craft/Breaking the Story|Breaking the Story]] — the three-quarters / carefree split in full
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — the triage layer; four classes, the class picks the repair

## Open Questions

- Which corrections from the past week repeated and still lack a check?
- Which specifics carry no source?
- Where is the apparatus running on a register too light to pay?
- Which of the three 2026-07 facts has moved?
- What is the measured invention rate?

## Sources

- Vince Gilligan, interviews on the *Breaking Bad* writers' room. Roughly three quarters of the labor in the break; two to three weeks on the board per episode; twelve-day corkboard time-lapse. Full treatment on Breaking the Story.
- University of North Carolina Writing Center, reverse-outline advice. The twelve-to-fifteen-word budget is this vault's compression of that public method.
- Story Grid, per-session board-update cadence. Cadence only, treated on The Beat Board. The method is not required.
- The Same Model Twice; Higher-Order Generativity vs Higher-Order Judgment — operator-memory case and the generativity / judgment split.
