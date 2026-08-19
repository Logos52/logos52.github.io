---
title: "What is actually going on with Fable and Opus"
type: decision
status: current
created: 2026-08-20
updated: 2026-08-20
tags:
  - anthropic
  - claude
  - fable
  - opus
  - model-quality
---

# What is actually going on with Fable and Opus

Fable and Opus feel worse than they did at launch. That checks out. Anthropic swapping the models for dumber copies does not — we found no sign of it. The worse feeling is coming from how the product works now, and from this week on your Mac.

Fable shipped in June and for a few days it was excellent. Then Anthropic started rerouting some Fable requests to Opus 4.8. Other people's tests caught that. Yours didn't. Opus 5 came out in July as the cheaper daily model, and people who'd been using Fable found it worse: it quits mid-task, it argues, it isn't as good. This week on your Mac, Fable kept hitting the usage cap, so the work ran on Opus 5. In the long writing session the model started forgetting things it had already decided. In April, Anthropic admitted they made Claude Code worse for seven weeks. Boris Cherny, who runs Claude Code, said this month he uses the same Fable as everyone else and feels it getting worse too.

We did not find Anthropic swapping the model files for dumber copies. When Fable actually runs, the bench that re-tested it looked like launch. In your Claude Code transcripts, the model that answered was the one you picked, at maximum effort.

That's 64 Claude Code sessions on this machine, 28,470 replies, every recorded effort setting at xhigh, plus 71,993 replies from helper models. We only have transcripts for Claude Code — not Claude.ai, Cursor, or Cowork. Earlier notes: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation-brief.md` and `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-session-log.md`.

## The comparison, named

| Object | Peak | "Now" | What actually changed |
|---|---|---|---|
| **Fable 5 weights, when they run** | 9–12 June 2026 | After 1 July return | BridgeMind: same scores *if the request reaches Fable*. Classifier and quota decide whether it does. |
| **Fable 5 the product** | Those four days, uncaged, on the $100 plan | 50% weekly cap, July 1 classifier, visible (and previously silent) fallbacks | You often do not get Fable. |
| **Opus the daily driver** | 4.6 / 4.8, Feb–May | Opus 5 since 24 July, this week's default here | Personality of Fable, not the ceiling. Skills and prompts from 4.8 fight it. |
| **This machine, this week** | Fable-heavy July–early August | Week of 17 August: 160 Fable parent turns vs 1,081 Opus 5 | The long session was Opus 5 at `xhigh` into 976k of context. |

## Why it feels worse

The local log can kill some of these for Claude Code on this machine and still leave the others standing.

### 1. Classifier as router

A flagged Fable or Opus 5 request is not a refusal. It is a handoff to a weaker or differently-aligned model. Anthropic's June claim: fallbacks in fewer than 5% of sessions. After the 12–30 June Commerce shutdown, the 1 July classifier was retrained on Amazon's "fix this code" framing. Anthropic said this "comes at the cost of flagging benign requests more often during routine coding and debugging." They did not publish a rate.

BridgeMind re-ran BridgeBench the day Fable returned. Debugging 86.2 → 25.9, refactoring 73.6 → 38.4. Follow-up: when Fable completed a task, June 12 parity. Nine of twelve debug tasks never reached Fable; they went to Opus 4.8. 8,695 likes, 2.0M views. Simon Willison, 11 June, watching Fable debug a CSS scrollbar: after inventing a CORS probe server and a Quartz screenshot pipeline, "Fable hit some invisible guardrail and downgraded itself to Opus." Opus finished the job from Fable's transcript. That is the mechanism in the wild, at launch, from someone who logs transcripts.

Opus 5's own 24 July launch footnote: "Opus 4.8 served as fallback on safety-classifier refusals for Opus 5 and Fable 5" on Frontier-Bench. The published score is a routed system. Laurie Voss the same day: a streamed reply can splice two models mid-sentence. The `model` field on the response is the fact; the name you typed is a request.

Boris Cherny, 13 August, replying to "Must be nice when Fable isn't constantly downgrading you to Opus 4.8": "I use the same Fable as everyone else, and also feel the pain of downgrades. We landed improvements here, and more to come." That is the head of Claude Code, on the record, using the users' word.

**This machine.** No classifier-fallback notice in 28,470 parent responses. No assistant text of the form "routed to Opus 4.8." Effort is `xhigh` on every recorded turn (22,889 / 22,889). The 26 multi-model parent sessions collapse, on inspection, to `/model` commands, resume forks sharing the timestamp `2026-07-17T08:58:10.504Z`, and one user line "i just switched to Fable." The writing session of 17–19 August is 1,032 `claude-opus-5` and one synthetic. Silent classifier routing did not happen here. That is a strong negative on Claude Code for a prose-and-vault workload. It is a non-test for the debug-and-refactor workload BridgeMind measured.

### 2. Silent degradation, then the walk-back

Fable's system card, at launch, described a second safeguard class that did not refuse and did not fall back. On frontier-ML work (pretraining pipelines, distributed training, accelerator design) it would quietly rewrite the answer via hidden prompts, steering vectors, or small fine-tunes. Quote: "will not be visible to the user." Estimated 0.03% of traffic. Jeremy Howard: silent handicaps should not be a thing in a paid product. On 11 June Anthropic reversed it as "the wrong tradeoff" and moved those requests to a *visible* Opus 4.8 fallback.

The 48-hour version is dead. The capability it proved is not: Anthropic can change what a named model does without changing the name. Visible fallback is the honest form. Quota demotion and harness edits are the ones that still hide.

**This machine.** Not in scope. The workload was never frontier-ML training.

### 3. Quota as a forced downgrade

Fable is the expensive SKU. Weekly caps, the 50% "included" slice, rate limits, and "capacity may be tight" are how the product moves you onto Opus 5 without a classifier firing.

@ClaudeDevs, 18 August: extending the +50% Claude Code weekly limits through 31 August because "strong demand for our models means that capacity may be tight." Status incident the same day: elevated errors on Mythos 5, Fable 5, Opus 5, Sonnet 5, Haiku 4.5. Users experience 503s as stupidity.

**This machine.** 45 capacity errors across parent sessions (23 `rate_limit`, 22 `server_error`), clustered on 13 August (10) and around the Opus 5 launch week. In session `d425cb0a`, 17 August 19:44–20:13: three consecutive Fable calls came back `rate_limit`. At 20:14 the `/model` command ran and the CLI wrote "Set model to Opus 5 and saved as your default for new sessions." Then "proceed." That is not a silent swap. It is Fable becoming unavailable and Opus 5 becoming the default. Parent-turn mix by week:

| Week | Fable | Opus 5 | Opus 4.8 |
|---|---|---|---|
| 22–24 (early June) | 0 | 0 | 733 |
| 26 (Fable arrives) | 656 | 0 | 708 |
| 28 | 2,132 | 0 | 1,435 |
| 29 (Opus 5 launches) | 3,650 | 3,125 | 967 |
| 30 | 3,473 | 1,198 | 0 |
| 31 | 4,267 | 258 | 0 |
| 32 | 2,234 | 1,448 | 0 |
| **33 (17 Aug–)** | **160** | **1,081** | **0** |

The week the complaint was filed, this machine was no longer on Fable. A long Opus 5 session at 976k of context is not a Fable evaluation.

### 4. The harness moves under you

Anthropic, 23 April 2026 postmortem, three changes, none of them the weights:

1. 4 March: Claude Code default effort `high` → `medium`. "The wrong tradeoff." Reverted 7 April. Sonnet 4.6, Opus 4.6.
2. 26 March: a cache flag meant to drop old thinking once after an hour idle dropped it *every subsequent turn*. Forgetfulness, repetition, odd tools, usage burning (every request a cache miss). Fixed 10 April.
3. 16 April: "≤25 words between tool calls, ≤100 in the final answer." Ablations: **3% drop in code-generation quality** on Opus 4.6 and 4.7. Reverted 20 April.

They wrote that the API and inference layer were unaffected. Read that as a confession about the product layer. Users reported "dumber" for seven weeks while dogfooding ran on a different build.

Then the opposite move. 24 July, Opus 5 launch: Anthropic removed more than 80% of Claude Code's system prompt for Opus 5 and Fable 5, "no measurable loss on our coding evaluations." Boris Cherny at YC: every six months, delete CLAUDE.md, skills, and hooks, then see what the model can do without them. Dan Shipper the same week: Opus 5 fought Compound Engineering; deleting the old skills made it better; *lower* effort beat higher because more thinking amplified the annoying behaviors.

Old harness makes the new model worse. New harness made the old model worse in April. Both are real. Neither is a weight cut.

**This machine.** All 22,889 effort records are `xhigh`. The April default-effort cut is not what happened here. The 80% prompt strip *is* the air the 17–19 August session was breathing: Opus 5, xhigh, against a vault of skills and a three-day ban stack. That is Shipper's setup, not a clean model test.

### 5. Subtractive constraints collapse the generator

A constraint can delete a candidate. It cannot supply one. Run a three-day session where every strike adds a rule and none is retired, and the surviving set funnels toward one option with a fallback. That reads as "it won't just write." Inside the model it is a search over a shrinking legal set.

The 17–19 August log already has this, and the replication is the part that survives a "long-context" dismissal: the same non-convergence ran in *fresh* subagent contexts (sixteen rounds 17 → 24 → 13 failures, a different set each round; ten rounds under the cut battery fired all five tests every round, round ten worse than round one) and on a Grok writer that had never seen the nineteen tests. Fresh-context plus cross-model puts the fault in the task shape and the training default, not in a Tuesday nerf.

Public rhyme: Drew Breunig, 27 July — Fable and Opus share over-dramatic flourishes, canned phrases, choppy structure; "You can almost feel the RL rewards that have neutered all diversity." Anthropic's Fable 5 guide: skills written for prior models are often too prescriptive and degrade output. Cherny's 80% cut is the same claim from the other side.

**This machine.** This is the writing-session mechanism. It is not why a TypeScript debug task routes to Opus 4.8. Do not use it to explain BridgeMind.

### 6. Context occupancy is memory loss, not IQ loss

By 900k the window is mostly the model's own prior output. A compressed summary of a file, already in the vocabulary of the current turn, outcompetes the file. Opening the file starts to feel redundant. Recall of rulings decays; self-catch of fabrications stops; reasoning tasks need not.

**This machine, session `ed0c0734`, 17–19 August, Opus 5 xhigh.** Context from 43,280 to 976,374. Ruling-recall counts by slice (from the session-log analysis, which this audit did not re-litigate turn-by-turn): 0 · 1 · 2 · 3 · 1 · 1 · 2 · 3. Unprompted fabrication-catch at 522k, 557k, 656k; at 917,743 five invented details shipped. Across all 64 parent sessions: 27 "this session is being continued from a previous conversation that ran out of context" continuations. Compaction is not an incident. It is the product's way of surviving its own window, and it costs the thing people are calling intelligence.

The deliberation curve (median thinking tokens falling 2,229 → 969 as context filled, on no-tool turns) is real and does not explain the strike rate. The approval peak sat at 857–942k. Task type tracks thinking better than "the model got tired."

### 7. The session says Fable; cheaper models do most of the work

Parent sessions on this machine: Fable 17,163, Opus 5 7,110, Opus 4.8 4,098, Sonnet 5 52. Helper models ("subagents"): Opus 5 38,793, Opus 4.8 17,526, Sonnet 5 8,524, Fable 6,806, Haiku 4.5 94. Helpers outnumber parent replies 72k to 28k. When the session is labelled Fable, most of the work is already Opus 5, Opus 4.8, or Sonnet 5.

This is the architecture Anthropic and power users now recommend (plan with Fable, execute with Opus subagents; Machina, 2 August: "Fable is overkill for the day to day — so proxy other models inside Claude Code"). It is also how a Fable session gets dumber without Fable getting dumber: the workers were never Fable.

Bindu Reddy, 9 June, internal coding evals: for 98% of tasks Fable does what GPT-5.5 or Opus 4.8 does at 2× cost; for 2% of hard tasks it is worth it. The rational product is a router. The emotional product is "I paid for Fable."

### 8. Unproven: silent quantization / a cheaper shard

Widely believed, not shown. Survives because layers 1, 3, 4, and 7 are hidden by default, so a bad Tuesday cannot be falsified. Moonshot pausing Kimi K3 signups when GPUs filled was praised as the honest alternative. Cherny's "pain of downgrades" is the closest internal admission, and it more naturally reads as classifier and quota than as a secret 4-bit Fable.

**This machine.** Untestable from inside a transcript. Service tier and speed are `standard` on 28,350+ responses. That is not a proof against a different serving shard; it is the only serving metadata the log has.

## What the local log does to the X wave

Claude's own 20 August writeup of session `ed0c0734` argued: on this machine nothing routed, nothing throttled, reasoning never degraded, what decayed is memory, the defect rate held flat while the rubric got sharper. Re-audit of all 64 parent sessions, not just that one, updates the scoreboard.

| Public claim | This machine | Verdict |
|---|---|---|
| Silent classifier fallback, picker lies | 0 fallback notices in 28,470 parent turns; multi-model sessions are `/model`, forks, or explicit switches | **Not happening here.** Non-test for debug/refactor. |
| Effort silently lowered | 22,889 / 22,889 `xhigh` | **Not happening here.** |
| Capacity degradation | 45 rate_limit/server_error events; three Fable `rate_limit`s on 17 Aug then `/model` → Opus 5 as default; 1 `server_error` inside the 17–19 Aug writing session (19 Aug 10:56) | **Happening as availability, not as a quiet IQ cut.** The 18 Aug status incident does not show up as a cluster of errors in `ed0c0734`. |
| "Makes basic mistakes, says that was on me, repeats" | Recall decay, fabrication self-catch stopping at 917k, subtractive-generator funnel | **Happening. Located in memory + constraints, not in a weight swap.** |
| Lower effort beats higher (Shipper) | Session was xhigh throughout; more thinking on a failing turn than on the recovery ninety seconds later | **Directionally compatible, not a test.** |
| Fable this week is unusable | Parent mix this week 160 Fable / 1,081 Opus 5; Fable rate-limited off | **This week's work ran on Opus 5, not Fable.** |
| Weights were cut | Untestable from inside; fresh-context and Grok replication of the writing fault argue against a Claude-only cut | **Not reached.** |
| Rubric got sharper, so Monday's paragraph fails Wednesday's tests | Day-3 faults already present in the first two hours at 185k–241k context; who-cares / referent / nineteen-test battery did not exist on Monday | **Real reporting bias.** Subtract it before charging the product. |

Where the session-log analysis overclaimed: "zero server-side errors" in the 17–19 August session — there is one `server_error` on 19 August 10:56. "Silent routing has not happened in two months" — true for classifier fallbacks; false as a blanket if "routing" includes "Fable rate-limited, user put on Opus 5 as default." Where it holds: the writing-session failures were produced by the model on the picker, at xhigh, and the residual after subtracting rubric-sharpening is memory and a subtractive generator.

## What X is adding that the first brief underweighted

Load-bearing, not the 19 August drive-by cluster:

- **Cherny, 13 August** ([2088021539883208958](https://x.com/bcherny/status/2088021539883208958)): same Fable, feels the downgrades, "more to come." The reply he was answering named the destination: Opus 4.8.
- **Willison, 11 June**: invisible guardrail, mid-session downgrade to Opus, Opus inherits Fable's tricks. The launch-week demonstration of layer 1.
- **Shipper / Every, 24 July**: Opus 5 "hard to love," "poor man's Fable," stops early, fights old skills; delete the skills; try *lower* effort. Routing table: Fable for hard, GPT-5.6 for the rest, Opus 5 when Fable tokens run out.
- **@aienginerd, 26 July**: Opus 5 "not Fable level — not even close"; ~70% of issues it surfaces rejected by Sol as wrong; "get the task done" rather than "get it done right"; "benchmark maxxxing is real."
- **Machina, 2 August**: Anthropic failed at a daily driver; Opus 5 exceptional at precise work (3D, frontend) and barely usable outside it; Fable overkill, so proxy Sol and Kimi inside Claude Code.
- **Kulshekhar, 17 August**: almost never does exactly what you asked; adjacent, often undesirable; "I can't believe we're getting the same models that those at Anthropic use." Cherny's reply four days earlier is the answer: they are, and they feel the downgrades.
- **Saka, 19 August**: "I was debugging in Fable, and it routed to Opus 5, then to Opus 4.8 on the next request." Live classifier chain, this week.
- **@vele48, 19 August**: "throwing you from fable to opus 4.8 whatever the question is."

The 19 August "Fable unusable overnight" cluster sits on the 18 August status incident. Treat it as temperature. The June–July posts and Cherny are the structure.

## Steelman of "perfectly normal"

The weights that run still match launch when they run. BridgeMind said so. Opus 5's partner quotes (Cursor, Devin, Zapier, Harvey) are not fake. Old skills degrade new models; Cherny deleted 80% of the prompt for a reason. Effort is a different model under one name; this machine was on xhigh, Shipper's best Opus 5 results were not. Long context feels like IQ loss in every frontier model. This week's outage explains the last 48 hours of X. On this machine the writing faults were already present at 185k of context on day one, and the instrument grading them was built during the session.

That position correctly kills a secret weight-swap. It does not make the product fine. A SKU that rate-limits you onto a lesser sibling, spends most tokens on cheaper subagents, folds fallbacks into its own benches, and has already admitted a seven-week harness degradation is not "the same model as June." "Skills are the problem" is true and is also how the cost of a breaking change gets dumped on the user.

The condition that would flip this back: a public, dated classifier-fire rate on ordinary debug/refactor under the original <5%; a week of clean status; Fable actually reachable for a full week's work on this machine; the same eight-prompt battery (two prose regenerations, two multi-file edits, four ruling-recalls) at 50k and at 900k, fallbacks off, `model` field logged, matching 12 June / 24 July. Until those exist, "perfectly normal" is a claim without a measurement.

## What to do with this, given the log

The lever with evidence *here* is session hygiene and SKU honesty, not a conspiracy about weights.

- Log the effective model: `message.model`, effort, fallback blocks, rate_limit events. The grep is cheap. More than one model name with no `/model` and no resume is the classifier test.
- Do not evaluate Fable in a week whose parent mix is 160 / 1,081 the other way. This week was an Opus 5 + context test.
- Compact or restart before 600k. Recall and self-catch are what died in the log. Re-read the file; do not recall the file.
- After a strike, add material. Do not add a constraint. The fresh-context experiments say the amendment loop does not converge.
- Plan with Fable when it is actually Fable. Execute knowing the workers are probably Opus 5 / 4.8 / Sonnet 5. That is the system you already run.

The brief's questions for Anthropic still stand, with two updates from this audit: (1) ask Cherny what "downgrades" means in the 13 August reply — classifier, quota, or serving; (2) ask for the share of Claude Code tokens in a "Fable" session that were not Fable, parent plus subagents.

## Sources

- https://www.anthropic.com/engineering/april-23-postmortem
- https://www.anthropic.com/news/claude-opus-5
- https://simonwillison.net/2026/Jun/9/claude-fable-5/
- https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/
- https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/
- https://www.linkedin.com/pulse/when-you-call-opus-5-dont-know-which-model-answered-laurie-voss-rjcac
- https://x.com/bridgemindai/status/2072662214704533888
- https://x.com/danshipper/status/2080700057892815114
- https://x.com/bcherny/status/2088021539883208958
- https://x.com/aienginerd/status/2081344436177379662
- https://status.claude.com/incidents/q7txxvbsftgq
- Local: 64 parent jsonl under `/Users/n1/.claude/projects/`, session `ed0c0734-5561-4979-8914-96913c5a273a` (17–19 Aug), session `d425cb0a-ac7d-4edb-ad26-58be76035ccf` (Fable rate-limit then `/model` Opus 5, 17 Aug)
