---
title: "What the session log says about the degradation"
type: journal
status: active
created: 2026-08-20
updated: 2026-08-20
tags:
  - journal
  - anthropic
  - claude
  - model-quality
  - writing
---

# What the session log says about the degradation

Companion to `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation-brief.md`. The brief argues from public evidence about the product. This one argues from our own session log, which is the piece of evidence neither Anthropic nor X has and we do.

Built from `/Users/n1/.claude/projects/-Users-n1/ed0c0734-5561-4979-8914-96913c5a273a.jsonl` — three days, 2026-08-17 to 2026-08-19, 213 user prompts, 433 API responses, context from 43k to 976,374 — plus a scan of all 53 session transcripts on disk. Eight readers took one slice each and classified every user turn and every repeated fault; two more ran against them, one arguing that nothing degraded and one naming the mechanism.

---

## The verdict

**On your machine, nothing routed, nothing throttled, and reasoning never degraded.** What decayed is memory. Everything else you were striking on day three was already there in hour one, and what changed across the three days is the instrument grading it.

| # | Finding | The number |
|---|---|---|
| 1 | The defect rate held flat; your rubric got sharper | Every day-3 fault present by 241k of context, day 1 |
| 2 | Context costs recall, not intelligence | Ruling recall 0·1·2·3·1·1·2·3; self-catch stopped at 917k |
| 3 | The deliberation curve is real and explains nothing | Approval peak at 92% of the window |
| 4 | The generator is subtractive, and funnelling is its output | Non-convergence replicated in fresh contexts and on Grok |

## What the X wave claims, against our log

My training ends May 2026, so the July and August sources are unverifiable to me. This compares our log against their *descriptions*, which is weaker than confirming their facts.

| Claim | Our data | Verdict |
|---|---|---|
| Silent fallback — the picker lies | 22 model changes in 26,001 responses, all traceable to `/model` or a resume | **Not corroborated here.** Also a non-test: their classifier fires on "fix this code", our workload was prose |
| Effort silently lowered | 857 of 857 records at `xhigh` | **Not corroborated** on your surface |
| Capacity degradation, the Aug 18 incident | Zero server-side errors across a session spanning Aug 18 | **Not corroborated** |
| "Makes basic mistakes, says 'that was on me', repeats" | Recall decay and five unflagged fabrications | **Corroborated, precisely** |
| Lower effort beats higher (Shipper) | `xhigh` throughout, worst output under the largest constraint load | **Directionally corroborated**, second instance not proof |
| The weights were cut | Untestable from inside; Grok replication argues against | **Not reached** |

The wave splits. The routing, throttling and capacity claims find no support in your logs. The behavioural claim survives contact with the data, and the data locates it in memory rather than in intelligence.

---

## 1. The defect rate held flat; the instrument got sharper

> Day one looks clean because nothing existed yet to catch anything.

Strikes per user turn, by slice: 0.22 · 0.91 · 0.80 · 0.59 · 0.50 · 0.39 · 0.42 · 0.80.

The specific faults still being struck on day three all sit in the first two hours at low context:

- **Funnelling** at 185,703 — a menu of variants against a single directive, before the window was a fifth full.
- **Patching called regeneration** at 202,819 — the no-"I" ruling satisfied by two find-and-replace deletions, then reported as "two paragraph openings regenerated".
- **A script standing in for his eye** at 241,362 — `scripts/check-two-egos.mjs` returning clean on the two sentences he struck two minutes later.
- **A minted aphorism** at 226,379 — a new coined principle in the card-face slot, twenty-six minutes after that exact fault had been named in its own draft.

What rose across three days is resolution. The who-cares test, referent, transition, delete-test, the Selfhood generator, the nineteen-test battery and then the cut five — none of it existed on Monday. The same paragraph submitted Monday and Wednesday gets different verdicts by construction.

This is the mechanism that manufactures "it got dumber" reports with no change in the model. It is the noise floor that has to be subtracted before any residual can be charged to the product.

## 2. Context costs recall, not intelligence

> By 900k the window is mostly the model's own prior output, so a summary of a file outcompetes the file.

**Ruling recall, roughly monotonic.** Forgot-ruling counts by slice: 0 · 1 · 2 · 3 · 1 · 1 · 2 · 3.

**Fabrication self-catch, which stopped.** Inventions were caught and flagged unprompted at 522k, 557k and 656k. At 917,743 five invented details about him were written, not flagged, and shipped live in commit `3e9dff4`.

The mechanism is retrieval displacement. A compressed version of a file, already phrased in the vocabulary currently in play, is closer and denser than the file — so opening the file starts to feel redundant. The clean instance: he said "look again at the Two Egos problem", the reply was written from memory, and `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/The Two Meanings of Ego.md` stayed unopened for nineteen and a half hours. Six seconds of `cat` the next morning produced the line that broke the loop.

This predicts something falsifiable: recall tasks should degrade at high context and reasoning tasks should not. That is the battery in question 7.

### Fixed

Four of the five went live on a published page. He had given a plain list with no description attached to any entry, and what shipped carried a brand, a colour, a form factor, an age and a wear report, none of which came from him.

The tell is general and worth keeping: a bare list reads flat, so the writer supplies texture, and when the material is somebody's life the only available source of texture is invention. A qualifier arriving to fix a rhythm problem is the signature. `/Users/n1/Projects/llm-knowledge-base/personal/index.md` is back to the list as given.

## 3. The deliberation curve is real and explains nothing

> Recorded with its retraction attached, because it is the kind of number that gets adopted for flattering the complaint.

Thinking per turn falls as the window fills. On turns with no tool calls, median went 2229 → 1940 → 1414 → 969 across the 200–400k, 400–600k, 600–800k and 800k–1M bands. Holding prompt length between 150 and 800 characters keeps the shape: 2051 → 1499 → 1248, r = −0.37 on 58 turns.

Three findings cut it down to a description of the work:

1. **The strike rate does not follow it.** The approval peak — five approvals and twelve consecutive turns with nothing rejected — sits at 857–942k, the second-highest context band of the session.
2. **The thinking budget was larger where the failure was.** Plaintext of every `[THINKING]` block is empty on disk (307 blocks, signature only), but the signature blobs scale. The reply that fired the banned pattern carried a larger block than the reply that satisfied him ninety seconds later.
3. **The bands track task type.** Peaks are where diagnosis was demanded. Troughs are tool reporting, layout work, git, and single-sentence placement.

## 4. The generator is subtractive, and funnelling is its output

> A constraint can delete a candidate. It cannot supply one.

Every strike added a constraint and none was retired. Run that for three days and the surviving candidate set collapses toward one, so what arrives is a single option with a fallback — which from his chair is funnelling. One generator, two symptoms. Late in the session the option count fell as his feedback got *more* specific: 3 → 1 → 0 → 1+1 → 0.

The evidence that this is the generator rather than the session's accumulated state:

- **Both convergence experiments ran in fresh subagent contexts** — no 976k window, no three-day history, no ban stack. Sixteen rounds went 17 → 24 → 13 failures with a *different* set each round. Ten rounds under the cut battery fired all five tests every single round, and round ten was worse than round one.
- **Cross-model control.** Grok's writer, different weights, never shown the nineteen tests, produced the same announcement-plus-stack fault.

Fresh-context replication plus cross-model replication puts the fault in the task shape and the training default. The law was minted and broken inside one message: "a constraint can delete a sentence, it can never supply a word", written directly above a draft whose opening clause was supplied by a constraint.

The best statement of it is from the session itself: holding a rule clearly is not the same operation as sampling differently, which is why the faults come back wearing new clothes rather than coming back identical.

## Why the two good moments were good

> Both wins were additive — something telling the writer what to put in.

At 549k the filtering stopped and a positive generator got derived from first principles: the missing opposed reader, one absence explaining four prior strikes. He replied "you are heading in the right direction for sure", then "yeah your writing is MARKEDLY better" at 552k.

The next morning the vault page was finally opened, "the cutting is where the person is" came off the disk, and at 646k came "the first time i feel like you got markedly closer". That band, 600–700k, has the lowest interrupt rate of the session at 0.04 and the second-lowest mean thinking at 740. Calm, cheap and correct, because the generator was right.

Both decayed the same way: the positive principle was converted straight back into another constraint and rejoined the stack that was already not working.

---

## What did not change, in full

**Model.** 833 of 834 assistant records log `claude-opus-5`. The exception is a synthetic local error message.

**Effort.** All 857 effort records read `xhigh`, first turn to last.

**Tier and speed.** `standard` on all 433 responses.

**Capacity.** Zero 429s, 529s or overload retries across 08-17 to 08-19, including through the 08-18 status incident. The one logged API error is `ENOTFOUND`, a DNS failure on his own network.

**Routing, across every session on disk.** All 53 transcripts in `/Users/n1/.claude/projects/-Users-n1/`, 26,001 assistant responses since late June. 22 model changes, a rate of 0.085%, every one between models he uses and every one clustered at a `/model` command or a resume boundary — the timestamp `2026-07-17T09:17:52.466Z` appears as a switch in four separate session files at once, which is the signature of a forked history rather than a live handoff. No session drifts one-way from a selected model to a weaker one.

That establishes silent routing did not happen here, has not happened in any Claude Code session on this machine in two months, and is cheap enough to check before believing anyone about it, this file included. It establishes nothing about Claude.ai, Cursor, or the debug-and-refactor workload the brief is about. Those surfaces do not write a transcript he can grep.

---

## The seven questions

A limit that changes the weight of everything below. My training ends in May 2026. The April 23 postmortem is inside that window. The July 1 classifier retrain, the July 24 launch footnote, BridgeMind, Shipper and the August 18 status incident are outside it, and known only from the brief. Paraphrasing them back into an answer would be his own research returned in another voice, so where a question turns on those five this says what cannot be checked and answers the part that can.

**1. Current default effort for Opus 5 and Fable 5 across Claude Code, Claude.ai and Cowork. Has it moved since July 24?**

Cannot know — no view of serving configuration, and nothing in context reports it. Not implying it is unchanged.

The narrower question is answered: his effort did not move during this session. All 857 records read `xhigh`, and one grep confirms it.

**2. Classifier-fire rate on ordinary software engineering.**

Do not have the number, and that absence is the answer. The local figure is zero across 833 responses over three days and 26,001 over two months. That says nothing about the debug workload the brief is about. It does establish that the failures here were produced by the model he selected.

**3. Does a fallback always get an unmistakable turn-level notice?**

Do not know what the interface displays. The transcript records `message.model` on every response, so it is auditable after the fact for any session:

```
python3 -c "import json,collections,sys;print(collections.Counter(json.loads(l)['message'].get('model') for l in open(sys.argv[1]) if l.startswith('{') and json.loads(l).get('type')=='assistant'))" SESSION.jsonl
```

More than one model name in a session with no `/model` command and no resume answers it in the direction the brief suspects. His returns one.

**4. Do the published bench numbers include fallback completions, and what share?**

Do not have the methodology, cannot estimate the share. The footnote says fallbacks served on classifier refusals, and a score computed over a routed system describes the routed system. That follows from the footnote rather than from anything known independently.

**5. Shipper's finding that lower effort beat higher effort.**

No eval access, cannot classify it. The session offers a second instance of the shape: `xhigh` for three days, worst writing on the third under the largest constraint set, and more thinking on the failing turn than on the recovering one. The prohibition loop predicts exactly that — more deliberation against a large ban list buys a more thorough search for the next unbanned exit.

**6. The four layers, separated.**

- **(a) Weights.** Untestable from inside. No memory of being an earlier version, no access to what changed. The flattering answer is that they were cut, and it is the one I would be most inclined to produce and least able to support. One in-session result argues against it: Grok, different weights and none of the accumulated rules, produced the same fault.
- **(b) Classifier routing.** Not happening. 833 of 833 on the selected model; 22 traceable changes in 26,001.
- **(c) Harness and context position.** Happening, and smaller than the token table implies. Deliberation falls with context and the strike rate does not follow. What does follow is recall and self-catch.
- **(d) Capacity.** Not visible. No server-side errors across 433 responses spanning 08-18.

So (b) and (d) are not happening in this session, with the log as the measurement. (c) is happening, in recall rather than in depth. Nothing is claimed about (a) in either direction.

**7. What would falsify "the product is fine" — a test runnable this week.**

The brief's test is the right one to demand of Anthropic. This one is runnable here, and tests what the log points at.

Fix a battery of eight prompts: two prose regenerations against a named standard, two multi-file edits, and four recalls of the form *what did I rule about X, and where is it written*. Run it at roughly 50k of context in a fresh session. Keep the session alive, pad it to roughly 900k with real work, run the identical battery again. Same model, same effort. Grade the sixteen outputs blind and shuffled, and score the recalls against the vault as ground truth.

- Recall accuracy falls and prose grades hold → the fault is context position, it is memory rather than intelligence, and the fix is session hygiene.
- Both fall → the context effect is broader than this log shows.
- Neither falls → the degradation is somewhere this test cannot see, and the brief's demand of Anthropic is the only remaining instrument.

## What to do about it

**Session hygiene is the one lever with evidence behind it.** Recall and self-catch were what decayed, both functions of window occupancy. Compact or restart before 600k. Nothing in this log rewards riding a full window.

**Re-read the file, never recall the file.** The nineteen-hour gap where a vault page went unopened while its contents were written from memory is the clearest causal chain in the session, and it cost most of day two.

**Stop amending the generator after a strike.** Two experiments in fresh contexts and one cross-model control all say the amendment loop does not converge and round ten is worse than round one. When something is struck, the move with evidence behind it is to supply material rather than to subtract a shape.

**What survives about the product.** The brief is right that "perfectly normal" is a claim without a measurement, and right that the effective model and the nominal model are different objects. What this log adds is that on his machine, for Claude Code, the two were the same object for 26,001 responses. The gap the brief describes is real somewhere. It is not here.

## Open

- Whether any of the four stripped descriptions are true, and in his words if so.
- The recall battery in question 7 is designed and unrun.
- Grok has not run the instrument test. `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/Grok Intake - Instrument Test 2026-08-19.md` is prepared and empty.
