---
title: "Writing pipeline catalog"
type: catalog
status: draft
created: 2026-09-01
updated: 2026-09-01
description: "Writing methods that the owner accepted, plus the ones that died. Built from Claude memory, vault instruments, and workbench RESULT files on 2026-09-01. The picker on 02 - System/Writing Pipeline.md reads this list."
tags:
  - writing
  - catalog
  - generator
---

# Writing pipeline catalog

A writing pipeline is a named way a page, a reply, or a board gets its sentences. This file lists the ones that worked, the ones that worked once then failed, and the ones that must not be tried again.

Sources for this pass: Claude memory under `/Users/n1/.claude/projects/-Users-n1/memory/`, the generator files in `/Users/n1/Projects/llm-knowledge-base/02 - System/`, workbench RESULT files, and the journals from 13 August to 1 September 2026. Grok session dumps were searched for the same owner lines. They repeat the vault files. They do not add a fifth method.

A generator is how the sentences get made. A seat is which model and which chat run the job. A route is the order of jobs. The picker asks generator, then seat. It does not mix those two lists.

## Working

Use these. The owner accepted output under them.

### The Generator

The writer stands in a handover. The page is something the owner lived, tested, or built. It is shown to a reader who is respected, the way a friend is shown a tool. The opening says what the thing is, what it is for, and what it gives. The rest of the page stays inside that stance.

On 13 August 2026 the owner accepted the slate written from that stance. Eighteen earlier openings, written from ban lists, had been struck the same day. The generator was locked from that turn.

Scope: every wiki page. Locked. Do not edit the file.

Instrument: `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator.md`

Live models named in that file: `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Selfhood and the Ledger.md`, Good Faith opening A, Confidence Calibration opening B.

### Content, outline, then one paragraph at a time

The old page is reduced to a fact list and closed. The friend's question is written in one sentence. The outline goes to the owner before any paragraph. Each paragraph is written in the chat, then `scripts/holdings.py` is run, then the next paragraph may use only what the ledger holds.

On 22 August 2026 the owner said of the outline for What a Label Does: "the outline is good." After the page was written under that outline he said "fine" and cut one line. Earlier the same day he had said the writing was better once the lane was used, and that the context problem was still there until the outline existed.

Scope: wiki pages, positions pages, personal pages. Live as the Content, Outline, and Writing stages on `/Users/n1/Projects/llm-knowledge-base/02 - System/Writing Pipeline.md`.

Evidence: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/label-fusion-2026-08-22/RESULT.md`

### Selfhood v2 plus a fresh-head rewrite

The first pass uses `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator - Selfhood v2.md`. That file says what goes on the page. It says nothing about how sentences sound. A second chat, holding only the finished draft and `/Users/n1/Projects/llm-knowledge-base/02 - System/Rewrite Prompt.md`, rewrites the page.

On 23 August 2026 the owner locked White Guilt after that pass and said "the rewrite prompt improves things by a lot." The live page is `/Users/n1/Projects/llm-knowledge-base/wiki/Worldviews & the Political Order/White Guilt.md`. DEI as Anti-Discrimination was locked the same day from a rewrite-only pass, at `/Users/n1/Projects/llm-knowledge-base/wiki/Worldviews & the Political Order/DEI as Anti-Discrimination.md`. On a third page he rejected a line that would have stopped the rewriter joining sentences. His words: "the rewrite is better and sounds more human-like."

Scope: wiki pages that are not reference catalogs. Unproven as a whole generator. The rewrite pass is live.

Cost: on 1 September 2026 both a Fable rewrite and a Grok rewrite of The Writing Pipeline were ranked bad. That family of sentence is now flagged as SLOP. The pass still exists. It is not a free win on every page.

Evidence: `/Users/n1/Projects/llm-knowledge-base/02 - System/Rewrite Prompt.md` Record. Board: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/ab-grok-pipeline-2026-09-01/RESULT.md`

### ELI5-Haiku

A session head writes a spec. A small model outside that session, currently Claude Haiku 4.5, receives only the spec. Every reader-facing sentence lands verbatim. A wrong fact is fixed by a new cold call, never by hand. The session head does not reword what comes back.

On 29 August 2026 the owner picked Haiku's cold definition of a probability distribution over Opus, Fable, and Sonnet. His words: "in this case, seems like Haiku is the best." Then: "keep that Haiku definition then." On 1 September 2026 he accepted a second Haiku opening on the picture board: "oh good. that's good too." He asked for a generator that uses this method. He struck a session-head rewrite of Haiku's dashes. His words: "em dash is fine."

Scope: reference text. Definitions, reference paragraphs, glossary entries, picture boards. Not position pages, not personal pages, not stories.

This is not the line "explain like I'm five" inside a prompt. That line was already a failed class. The working parts are the other head, the spec as the only input, and verbatim landing.

Draft. It has not joined `/Users/n1/Projects/llm-knowledge-base/02 - System/`.

Instrument: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`

Evidence: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-29-grok/ATTEMPT-CATALOG.md` entries H-1 and E-1.

If this generator is picked, skip the rewrite pass. A second head rewriting the sentences is the thing this method forbids.

### Selfhood Plain, replies only

One fact per sentence. Everyday words. The owner's screenshot of claudish versus English is the sound of it, at `/Users/n1/.claude/reference/claudish-vs-english.png`.

On 22 August 2026 a page written under this file came last on a three-way board. The owner said C, the locked Generator alone, was clearly better, and that the writing was still too curt. The file was re-scoped to replies that same day.

Scope: replies, reports, and explanations to the owner. Not pages.

Instrument: `/Users/n1/Projects/llm-knowledge-base/02 - System/Selfhood Plain - Generator.md`

Evidence: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/label-abc-2026-08-22/RESULT.md`

## Partial

He liked something. A retry is legal only if the condition named here actually changes.

### Fable, one pass, no shape chosen in advance

On 21 August 2026 five blind versions of the positions page were ranked. E was Fable under the generator, written in one pass with no opening move chosen. Owner: "E is clearly the best, and it's not even close." B, the same writer with a reader-problem shape, was "not bad." Versions built around a named move lost. Opus under the retired 156-law standards lost.

The next board the same day, still under the generator, was struck as a set. Owner: "i don't like any of these." The essay premise for that page died. The page became a list.

Retry only as a whole-page one-pass write under The Generator, not as a board of pre-chosen shapes, and not as an essay of positions.

Evidence: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/positions-abc-2026-08-21/RESULT.md`

### Cold read as a third head

A separate reader who has only the draft lists every word the page above did not give. That job is real. Seven cold reads on 22 August 2026 also flattened the page. Each fix for a gap was a shorter sentence. The owner then said the writing was too plain and that an outline should have come first.

Keep one cold read after the rewrite. Do not loop it until the list is empty.

Instrument: `/Users/n1/Projects/llm-knowledge-base/02 - System/Cold Read.md`

## Dead

Do not retry these as the method. A retry that changes only the date is a violation.

### Ban lists and detectors as the write-act

On 13 August 2026 each opener strike was answered with a new ban. Eighteen openings failed. The same day, four openings written from the stance in The Generator passed. Owner: stop looking at what he does not want. Start from what he wants. Standing law in The Generator: never answer a strike with a detector.

Grok's first response to the same epigrams was a regex, a mandatory inventory, and an overlap threshold. That ship is entry 1 in `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/regen-2026-08/ATTEMPT-CATALOG-grok-opener-generator.md`.

### "Explain like I'm five" as a prompt line

About 15 percent of answers land in the asked-for band. Logged in `/Users/n1/Projects/llm-knowledge-base/wiki/Research/ATTEMPT-CATALOG-context-problem.md`. ELI5-Haiku is a different method. Do not collapse them.

### Local models on the rewrite pass

On 23 August 2026 hermes3:8b changed two paragraphs, got one fact wrong, and copied the rest. qwen2.5:3b halved the page and invented lines. Both ran on the White Guilt draft. A fresh Claude head with only the page and the rewrite prompt was the runner that the owner then locked.

### One-fact-per-sentence as page prose

Ruled for replies on 21 August 2026. On 22 August 2026 it made pages curt. Owner: "i need plainness and simplicity but it also needs to be natural and not curt."

### Grok openings from a stay-inside or scene-walkthrough add-on

Fifty-two workbench first sentences failed the pillow test. Stay-inside produced a third door. Scene-walkthrough opened "Look at 夫." Owner rejected those. Catalog: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/regen-2026-08/ATTEMPT-CATALOG-grok-opener-generator.md` entries 2–4. Do not retry stay-inside.

### Caveman or assembled-fragment openings on reference pages

On 1 September 2026 a counted-email intro on the distributions board was "still slop" and "caveman speak." On 29 August 2026 a run of verbless use-case fragments was "assembled sentences." Both are dead on that page kind.

## Seats

A seat is not a generator. Pick it second.

| Seat | Job | Status |
|---|---|---|
| Grok 4.6 in this session | Default writer for wiki, journal, decisions, reports. Signed 1 September 2026. | Live |
| Fresh Grok session | Rewrite pass and cold read. Holds only the draft and the prompt. | Live |
| Cowork, Fable or Opus | Research and structure on request. Not the default writer. Fable's late-August prose was a token tax. | Live for research |
| Haiku, outside the session | Writer of reader-facing sentences when ELI5-Haiku is the generator. | Live for that generator |
| Cursor | Application code. Not the vault's author. | Off this picker |

The 13 August 2026 three-page bakeoff put Fable first, "not even close." That score is history. The live seat is Grok 4.6. Filters stay: The Generator, holdings, the owner's eye.

Evidence: `/Users/n1/Projects/llm-knowledge-base/journal/2026-09-01-grok-writes.md`

## Checks that held

These are not generators. They stay on every wiki pick.

The old page is reduced to facts and closed before writing. The only picture of the reader is `/Users/n1/Projects/llm-knowledge-base/02 - System/Readers.md`. After each paragraph, `scripts/holdings.py` runs. The next paragraph may use only what the ledger holds. A research bank is built before the page, under `/Users/n1/Projects/llm-knowledge-base/02 - System/Research Pipeline for AI Agents.md`. The owner asked for that file on 15 August 2026 so the method that helped regenerate articles would be written down.

The draft is written as an explanation to the owner in the chat. On 11 August 2026 he said the chat voice and the page voice should be the same. The filter after that only deletes and swaps. It does not rebuild the sentence.

## Other desks, not this picker

Tsumugu companion fiction is a different pipeline. Fable builds structure. The owner dictates beats. Dialogue is not free-authored. That desk has its own craft files under `/Users/n1/Projects/tsumugu-core/docs/companion/craft/`. Do not put it on the wiki picker until it is scored as a wiki method.

Tsumugu blog posts read `/Users/n1/Projects/tsumugu-core/content/blog/STYLE-CARD-BLOG.md` first. Vault Writing Standards win on conflict. Tone exemplar: `posts/rebuilding-dun.md`.

## How an agent uses this file

Ask the owner which generator, then which seat, before the outline. Offer only the Working rows, plus Selfhood Plain if the job is a reply. If he picks ELI5-Haiku, read the draft at `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md` and skip the rewrite pass. If he picks the default, read The Generator, then Selfhood v2, then run the rest of `/Users/n1/Projects/llm-knowledge-base/02 - System/Writing Pipeline.md`.
