---
title: "Regeneration Checklist"
type: system
status: developing
created: 2026-08-13
updated: 2026-08-13
tags:
  - system
  - writing
  - llm-wiki
---

# Regeneration Checklist

Step zero for any agent regenerating a wiki page. Nothing is drafted until every item below is done and proved.

## 1. Single source per fact

Each source is authoritative for one thing. Reading a summary of a source instead of the source is how the first pilot failed: the opening-move mechanics were summarized in two places, the two disagreed, and the generator worked from the summary.

| Source | Authoritative for | Never trust another file for this |
|---|---|---|
| `02 - System/Writing Standards.md` | Which laws bind, which moves are legal, the genre sheet, the pre-ship pass | — |
| `wiki/Writing Craft/Opening Moves Catalog.md` | **How the assigned move works.** Read the numbered entry and its specimen. Where a gloss and its specimen disagree, the specimen wins | The standard's roster is names only |
| The page's research bank | Claims, verification verdicts, reachable citations, gaps, house-term definitions | — |
| The original page | Read **only** by the bank agent, never by the writer. Everything the writer needs from it is transcribed into the bank | The writer works from the bank alone |
| `02 - System/Rejected Specimens.md` | Lines struck in review, with reasons. Read before drafting; a rule is wrong if a specimen there passes it | — |

## 2. The read list

**The generator never opens the original page, and never opens a previous draft.** Reading prior
prose turns generation into revision: one bakeoff arm read the earlier draft first and produced 153
shared 12-word runs, then regenerated from the ledger alone and cut that to 1. The bank agent reads
the original; the writer works from the bank. That single boundary is what makes "no sentence
survives" achievable rather than aspirational.

In this order, before a sentence is drafted:

1. **The research bank** for this page, in full. It carries everything the original had that matters:
   the claim ledger, the verification verdicts, the reachable citations, the gaps, the house terms,
   and the outbound link list with exact targets.
2. **The Opening Moves Catalog entry** for the assigned move: the numbered entry, its verified
   specimen, and the master rule at the top of that page.
3. **The genre sheet** in the Writing Standards for this page's genre, plus §15's specimens and
   `02 - System/Rejected Specimens.md`.

Everything the checker verifies mechanically — opener limits, link preservation, shared n-grams,
term counts, frontmatter — stays out of the generation prompt. A rule a script enforces is noise to
a writer, and the writing degrades under rules it must hold while composing. What belongs in front of
the writer is only what no script can judge.

## 3. Proof of read

A claim to have read is not evidence of reading. The generator returns one **verbatim quote of at least eight consecutive words** from each of the four sources, chosen from the part that governs this page — not the title, not a heading, not the frontmatter.

Every quote is grepped against the file on disk after generation. A quote that is not found verbatim means the source was not read, and the draft is rejected before its self-grade is even considered. A self-grade on an unread source is worthless.

## 4. Pre-draft checks

Answer these before drafting, in the returned structure:

1. **Which move is assigned, and what does its specimen actually do?** State the specimen's shape in one sentence. If the specimen contradicts what you expected from the move's name, the specimen wins.
2. **What is this page's genre, and which laws does its sheet relax?** Name them by number.
3. **Which claims did the bank mark contradicted or unsupported?** Each is corrected or marked honestly, never dressed in confident prose.
4. **How many outbound links must survive, and what does each contribute?** Every link gains a clause.

## 4a. Prime the shape

Whole–part–whole is planned before drafting, never discovered during it. A page that finds its shape while writing ends inside a part. Write the plan out first:

1. **The whole, in one sentence.** What this page is about, stated so a stranger could act on it. The opening paragraph delivers this and introduces at most one term; more than one fails L20a.
2. **The parts, in order.** Each one named, with the clause that ties it back to the whole as it enters. A part that cannot be tied back is not a part of this page.
3. **Where the whole resurfaces.** Between which parts re-orientation earns its place, if any. WPWPW is legal; a mechanical W-P-W is not required.
4. **The close, stated as a fact the reader gains.** What the opening whole looks like advanced by the parts — the problem now solvable, the threshold now known, the choice now decidable. Write the actual gain, not "returns to the thesis." A close that only restates the opening is a replay and fails L26.

The plan is returned alongside the draft so the shape can be checked against what was written. A draft whose parts do not match its plan was not primed; it was improvised.

## 5. Hard constraints at draft time

1. Every ledger claim is carried or dropped on the record.
2. Every outbound wikilink survives with its exact target, and gains a clause saying what that page contributes.
3. No sentence from the original survives. Long shared phrase-runs mean the page was edited, not regenerated, and it fails.
4. House terms keep their names and get definitions a stranger can enter. No paid-course citations, links, or implications.
5. Frontmatter preserved; Sources section carries the bank's reachable citations.
6. Length serves the material. A page that was already right-sized does not grow. Growth past 1.5× on a page the census scored clean is a defect, not a deliverable.

## 5a. Two layers, and what a flag is worth

Carried from `02 - System/Two Egos QA.md`, which established this on 2026-08-10 and is the
authority for voice QA on any first-person surface.

1. **The mechanical layer produces a worklist, not a verdict.** `scripts/regen-check.py` computes
   what can be computed. Its hard checks are verdicts. Everything else is a candidate list.
2. **An empty worklist is not a pass.** Patterns cannot see a staged confession, irony armor, or a
   scoreboard moved outside by implication.
3. **The judgment pass rules every sentence, flagged or not.** For first-person prose that means the
   three line-checks: the I owns events, wants, and judgments, never qualities; internal scoreboard
   only; the residue test.
4. **No flag graduates to a verdict without a validated basis.** Run any proposed threshold against
   the accepted exemplars and the rejected specimens first. Keep it only if accepted output passes
   and rejected output fails. A threshold that fails an accepted page is wrong about the page.
5. **Known false positives stay on record**, not silently tolerated: use–mention, auxiliary "I'm"
   inside event narration, and shared phrase-runs that are terms of art or quoted sources.
6. **A kept flag states its reason** beside the ruling.

## 5b. Waves, not parallel fan-out

Corrections must reach the next page. A batch run in parallel cannot learn from itself: on
2026-08-13 eight pages ran simultaneously in fresh contexts and produced the same two faults eight
times, while six pages run sequentially the day before took one strike total and the remaining four
were accepted untouched.

- Wave one is one page. Its correction lands in `02 - System/Rejected Specimens.md`, and in the
  standard if it is a law.
- Every later wave reads the specimen corpus before drafting.
- Waves widen only as the corpus thickens: 1, then 2, then 5, then 20.
- A fault appearing twice in one wave means the wave was too wide.

## 5c. The retry ladder — scope the regeneration to the layer that failed

Before regenerating anything, name which layer the diagnosis points at. Structure and prose fail
separately, and a sound structure is an asset worth keeping.

| Diagnosis points at | Scope | The shape plan |
|---|---|---|
| The opening does not name the whole; the page ends inside a part; a part cannot be tied back; the shape fights the material | **whole page** | re-derived from scratch |
| Cadence, appended formulations, abstract subjects, a passage that does not flow, a wrong claim | **that passage only** | **inherited unchanged** |
| A single wrong word or a fact to correct | still the passage, never the line | inherited unchanged |

Rules that hold at every rung:

1. **Never edit in place.** A passage comes again whole, re-derived from the shape plan and the
   source material, with the prior passage dead. Line edits are what leave seams.
2. **The shape plan is reusable.** A plan that passed is carried into every later attempt on that
   page. Re-deriving a good structure to fix a bad paragraph is how a good page becomes worse — both
   controls in the 2026-08-13 pilot failed exactly that way.
3. **Check the joins.** A regenerated passage re-stitches: its first sentence picks up a thread from
   the sentence before it, and the sentence after it still receives what the passage hands forward.
   The join is where a passage swap shows.
4. **Count the strikes on the page, not the passage.** Three failed attempts on one page halts the
   run regardless of how narrow each attempt was.

## 6. Pre-ship

Run the standard's §16 pass in order, cite law numbers, quote every exhibit from your own draft. Borderline is a fail. A failure returns one generalized diagnosis, never a list of line fixes.

## 7. What disqualifies a draft before grading

- A proof-of-read quote not found on disk.
- A dropped claim with no reason in the drop log.
- A missing or invented wikilink.
- An opening paragraph introducing more than one term.
- Shared phrase-runs with the original beyond names, quoted sources, and terms of art.
