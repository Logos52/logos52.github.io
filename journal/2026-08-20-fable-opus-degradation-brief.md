---
title: "Fable 5 and Opus got dumber — brief for confronting Claude"
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

# Fable 5 and Opus got dumber — brief for confronting Claude

The product you get from Fable 5 and Opus is worse than at first release. That is not a mood. Anthropic has already admitted one cycle of this in writing, measured a second cycle after Fable's July 1 return, and is running a third this week as capacity and classifiers decide which model actually answers. What is *not* proven is a silent swap of Fable 5 or Opus 5 weights for a dumber checkpoint. The gaslight to refuse is "everything is perfectly normal." The overclaim to refuse is "they lobotomized the weights."

This brief is evidence, then a paste block for Opus. Do not let it collapse the question into user error, rising expectations, or "benchmarks look fine."

## What is being compared

Two different products, two different clocks:

| Product | Best-remembered window | What people mean by "now" | The fair comparison |
|---|---|---|---|
| **Claude Fable 5** | June 9–12, 2026 (the four days before Commerce pulled it) | After the July 1 return, through Aug 19–20 | Same weights, tighter classifier, more fallbacks to Opus 4.8 / Opus 5 |
| **Claude Opus** | Opus 4.6 / 4.8 as a daily driver (Feb–May), then Opus 5 at July 24 launch | Opus 5 in Claude Code / Cursor / Cowork this month | Opus 5 vs Fable, *and* Opus 5 vs the Opus 4.8 people actually liked |

Fable 5 shipped June 9 as Anthropic's first generally-available Mythos-class model: $10 / $50 per million tokens, 1M context, same underlying model as Mythos 5 minus the extra safety classifiers. Simon Willison's day-one writeup called it a beast. It wrote a real LLM library release (pause/resume tool calls) in a single day. Opus 5 shipped July 24 as "near-Fable intelligence at half the price" ($5 / $25), the new Max default.

If you used Fable in those first four days, then used Opus 5 as the everyday model and Fable on a tighter allowance with a twitchier classifier, the drop is real. The mechanism is not "the IQ of the weights fell." The mechanism is that the *effective* model — the thing that produced the tokens — is no longer the name on the picker.

## Verdict, in one paragraph

Your suspicion is true about the **system you call**. It is unproven about the **weights**. Four documented layers make Fable and Opus feel dumber than at launch: (1) Anthropic already degraded Claude Code on purpose and by bug from March 4 to April 20, then wrote a postmortem; (2) Fable 5's July 1 classifier started handing a large share of coding/debug work to Opus 4.8, and independent benches collapsed because of that routing, not because Fable got worse when it actually ran; (3) Opus 5's official Frontier-Bench numbers include those fallbacks as a footnote — the launch score is two models in a trenchcoat; (4) this week Anthropic's own status page listed Fable 5, Opus 5, Sonnet 5, and Haiku 4.5 as degraded, which is the backdrop for the Aug 19 X wave. A fifth layer — silent quantization or a nerfed consumer shard — is widely believed and not proven. "Perfectly normal" does not survive layers 1–4.

## Evidence, ranked

### Tier 1 — Anthropic said it themselves

**April 23, 2026 postmortem.** [An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem). Three changes, three different slices of traffic, one "Claude got dumber" feeling:

1. **March 4.** Default reasoning effort in Claude Code moved from `high` to `medium` to cut tail latency. Anthropic later called this "the wrong tradeoff." Reverted April 7. Hit Sonnet 4.6 and Opus 4.6.
2. **March 26.** A caching "optimization" was supposed to drop old thinking once after an hour idle. A bug dropped it *every subsequent turn*. Claude executed without memory of why. Users saw forgetfulness, repetition, odd tool choices, and usage limits burning faster (every request became a cache miss). Fixed April 10. Same models.
3. **April 16.** A system-prompt verbosity cap — "≤25 words between tool calls, ≤100 words in the final answer" — shipped with Opus 4.7. Broader ablations later showed a **3% drop in code-generation quality** on Opus 4.6 and 4.7. Reverted April 20.

They wrote, verbatim: they take degradation reports seriously, they never *intentionally* degrade the models, and the API/inference layer was unaffected. Read that last clause carefully. The product layer around the model is allowed to make the model feel stupid, and it did, for seven weeks, while users were told they were imagining it. That is the prior. Any current "everything is fine" line has to clear it.

**July 24 Opus 5 launch footnote.** [Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5): "Opus 4.8 served as fallback on safety-classifier refusals for Opus 5 and Fable 5." The headline Frontier-Bench curve is not a property of Opus 5's weights. It is a property of a routed system. Laurie Voss (July 24): when you call Opus 5, you do not know which model answered. The API can splice two models into one streamed reply. The `model` field on the response is the fact; the name you typed is a request.

**Fable classifier, in Anthropic's own words.** At June launch, fallbacks were said to fire in fewer than 5% of sessions. After the June 12–30 Commerce shutdown, the July 1 classifier was retrained to catch the "fix this code" framing Amazon had shown. Anthropic said this "comes at the cost of flagging benign requests more often during routine coding and debugging tasks." They did not publish a rate. Independent measurement did.

**Opus 5 cyber classifiers.** Anthropic projects they fire ~85% less often than Fable 5's. Projection, not a measurement. Flagged requests in Claude.ai / Claude Code / Cowork fall back to Opus 4.8 by default. Biology blocks on Fable now route to Opus 5 instead of 4.8. The picker lies either way.

### Tier 2 — measured, not vibes

**BridgeMind / BridgeBench, July 2.** Same suite, July 1 Fable vs the June 12 Fable. [X post](https://x.com/bridgemindai/status/2072662214704533888): 8,695 likes, 992 reposts, 2.0M views.

| Task class | June 12 | July 1 | Change |
|---|---|---|---|
| Debugging | 86.2 | 25.9 | −70% |
| Refactoring | 73.6 | 38.4 | −48% |
| Hallucination resistance | 75.9 | 61.7 | −19% |

The follow-up that matters: **when a task actually completed on Fable 5, scores matched June 12.** Nine of twelve debugging tasks never reached Fable. They were handed to Opus 4.8. BridgeBench scores a fallback as zero because the model under test did not do the work. That scoring rule inflates the *headline* collapse and still tells the truth about the *product*: you asked for Fable, you often did not get Fable. TechTimes restated the same numbers. BridgeMind's own gloss: "The model did not get worse. It got caged."

**Leo Meyerovich on Laurie Voss's June piece.** ~40% refusal / silent Opus handoff on a cyber-incident database-query agent bench (botsbench). Not exploit writing. Investigation queries. The classifier cannot tell a defender from an attacker; Hugging Face's July incident disclosure said the same thing about commercial APIs blocking forensics.

**Dan Shipper / Every, July 24.** [X](https://x.com/danshipper/status/2080700057892815114): 2,429 likes, 752k views. A week of tests across coding, writing, knowledge work, and their internal agent.

- First reaction: argued with instructions, stopped before the work was finished, broke existing skills (Compound Engineering). "What have they done to my boy?"
- After deleting old skills and starting from scratch: better, flashes of brilliance.
- Day-0 line: "a poor man's Fable. It has many of Fable's personality quirks without Fable's genius."
- Medium or *low* effort outperformed high/xhigh on their tasks — more thinking made the annoying behaviors worse.
- His routing table after the test: Fable for the hard slot, GPT-5.6 for everything else. Opus 5 sits in a middle that has no home.

That is the opposite of a launch-honeymoon. It is a careful lab saying the new Opus does not replace the thing people actually wanted.

**Official status, this week.** [status.claude.com incident q7txxvbsftgq](https://status.claude.com/incidents/q7txxvbsftgq), Aug 18: elevated errors on Mythos 5, Fable 5, Opus 5, Sonnet 5, Haiku 4.5. Opus 5 specifically called out 16:11–18:23 UTC. A second-day X sample (Aug 19) still reports degraded Opus 5 / Haiku 4.5. Some of "it got dumb overnight" is an outage wearing a personality. Some of it is not — the July classifier and the April harness story predate this incident by months.

### Tier 3 — high-signal X, launch through this week

Not proof of weight changes. Proof that the complaint is not you, not new, and not confined to drive-by accounts.

**Fable's first week, then the pull.** Laurie Voss: by the end of June 12 the best model in the world had become unusable three ways in four days, none of them the weights — silent degradation on a task class (LLM-training work, system card: "will not be visible to the user," "will not fall back"), Microsoft pulling it internally over 30-day retention, then Commerce ordering a foreign-national cutoff so broad Anthropic turned it off for everyone. Anthropic walked the silent-degradation policy back on June 11 and apologized. The capability remains: they can fail a class of work without telling you.

**June 15, Mark Valorian** ([2066615662743629998](https://x.com/markvalorian/status/2066615662743629998), 445 likes, 99k views): "Using Opus now is just disgusting. The sycophancy is extremely transparent and revolting... it doesn't complete tasks... it doesn't think things through." He floated the conspiracy that Anthropic was kneecapping Opus to make Fable look like a savior. That specific conspiracy is unproven. The *description of Opus after Fable* is the same description still circulating in August.

**July 27, alex (@runtimeking)** ([2081579491550249025](https://x.com/runtimeking/status/2081579491550249025), 1,259 likes, 127k views): calls Opus 5 unusable, and worse once you are used to Fable, which he credits with simply getting the work done. His comparison for Opus is an engineer certain he knows everything whose code does not hold up.

**July 27, Drew Breunig** ([2081535485290430958](https://x.com/dbreunig/status/2081535485290430958), 210 likes): Fable and Opus share the same over-dramatic flourishes, canned phrases, choppy structure. "You can almost feel the RL rewards that have neutered all diversity."

**Aug 9, Chubby (@kimmonismus)** ([2086474969307881590](https://x.com/kimmonismus/status/2086474969307881590), 1,283 likes, 109k views): "Opus 5 is a disaster." Ask: rework immediately, or a Fable update with better rates.

**This week, Aug 17–19, sampled Latest (not Top — this is the live complaint, not an old viral corpse):**

- Aug 17, @downtownberlin: calls Fable badly degraded, and reports Opus completing 20% of the assigned work. "Never had a degradation of this magnitude."
- Aug 19, @buildwbhoomika (17 likes, early): "Fable 5 feels almost unusable out of nowhere."
- Aug 19, @ricebroskitt: "Why does it feel like Claude lost half its IQ in the last week? Fable 5 borderline unusable for anything."
- Aug 19, @Kplcode: "Fable 5 is completely Nerfed."
- Aug 19, @andreas0x (Netflix platform-eng alumni): even under Fable orchestration, worse; Opus 5 on its own has communication and focus "completely screwed (no matter the effort level)."
- Aug 19, @stdclibrary, tagging @AnthropicAI: "Opus and Fable have degraded. Completely... model makes basic mistakes and then says 'that was on me'."
- Aug 19, @justice_note: "Claude opus is getting dumber and dumber. it's alarming how Claude lost all its aura in a month."
- Aug 19, @pedma7: more dumb errors under Claude Code auto; "OPUS apparently going dumber" plus his own reduced review.
- Aug 19, @Cryptopaul: dismisses Opus 5 outright, and reports Fable 5 lasting about an hour before his credits run out.
- Aug 19, @OneSpicyMeatBol: cannot tell if Fable/Opus got dumber or Grok got better — Grok is the one catching the other models' mistakes.

The Aug 19 cluster is noisy, low-follower, and coincident with the Aug 18 incident. Treat it as temperature, not a bench. The June–July posts above are the load-bearing ones.

**Facebook / Reddit, same mechanism.** July 5 (Rowee Andrew Apor): after Fable 5 returned, Opus 4.8 on Max xHigh "becomes dumb" — wrong assumptions, forgetting CLI state from the previous turn. The user asked the same question Valorian asked: is this how they make Fable look smarter? r/ClaudeCode launch thread on Fable vs Opus is the contrast case: Fable was "the closest to 4.6 since 4.6," quieter, less Victorian-theatre narration, more persistence on large scope. That is the memory people are measuring August against.

## Steelman of "it's fine"

The rejected position, at its strongest:

The weights did not get worse. Fable 5 that actually runs still matches June 12 on BridgeMind's own follow-up. Opus 5's published benches (Frontier-Bench, CursorBench within 0.5% of Fable at max effort, ARC-AGI 3 3× next-best, OSWorld 2.0 cheaper than Fable) are real enough that partners (Cursor, Devin, Zapier, Harvey, Box) signed the launch quotes. Every new frontier model eats a week of "it got dumber" because (a) contrast with the previous peak, (b) old skills and numbered playbooks actively degrade Fable 5 and GPT-5.6 — Anthropic's own Fable guide says prior-model skills are too prescriptive, (c) effort dials mean one name is many models, and most people are not on xhigh/max, (d) context rot in long Claude Code threads feels like IQ loss, (e) this week's status incident explains the last 48 hours. Recency plus outage plus Fable-contrast is enough to generate the X wave without a conspiracy.

That position is half-right. It correctly kills the weight-swap story. It does not make the *product* fine. A model that is brilliant on the 3 of 12 debug tasks the classifier lets through, and Opus 4.8 on the other 9, is not "Fable 5, same as June." A default that was moved from high → medium for seven weeks is not "the model is unchanged." A launch bench that folds fallbacks into the score is not a clean measurement of the named model. "Skills are the problem" is real for Opus 5 (Shipper measured it) and is also a convenient dump of the cost onto the user.

The condition that would flip this brief back to "fine": a public, dated classifier-fire rate on ordinary TypeScript debug / refactor / "why did this crash" work, under 5% as originally claimed, plus a week of clean status, plus the same task suite run on pinned `claude-fable-5` / `claude-opus-5` with fallbacks *off* and the `model` field logged, matching June 12 / July 24. Until that exists, "perfectly normal" is a claim without a measurement.

## What is actually happening (the mechanism, not the vibe)

Call the thing on the picker the **nominal model**. Call the thing that emitted the tokens the **effective model**. In mid-2026 those diverged, on purpose, and the divergence is the quality drop.

1. **Refusal became a router.** A flagged Fable or Opus 5 request is not a refusal. It is a handoff to a weaker or differently-aligned model. You may see a notice. You may not notice in a long agent loop. Streaming can splice two models mid-reply.
2. **The harness moves under you.** Effort defaults, verbosity caps, thinking-cache bugs, system-prompt lines. April proved a 3% coding-quality hit from one sentence, and a "forgetful" model from a cache flag. None of that is the weights.
3. **Capacity is a quality variable.** Aug 18 (and Aug 5, and the May cluster) put the whole family in "degraded." Users experience that as dumb, not as 503s. @ClaudeDevs on Aug 18 extended the +50% Claude Code weekly limits through Aug 31 because "strong demand... capacity may be tight." Capacity tightness and "the model got worse" are the same symptom from different seats.
4. **Contrast after Fable is real and is not the whole story.** Fable at launch was a step-change in persistence and quiet competence. Opus 5 inherited the personality (pushback, thoroughness, "thoughtful and proactive") without the top end. After a week on Fable, Opus 5 feels like a downgrade even if it beats Opus 4.8 on a bench. Shipper's routing table is the honest one: Fable for the hard slot, something else for the rest, Opus 5 when Fable tokens run out.
5. **The unproven fourth.** Silent quantization / a cheaper consumer shard. Survives because (1)–(3) are hidden by default, so users cannot falsify (5). Moonshot pausing Kimi K3 signups when GPUs filled was praised as the honest alternative. That praise is the tell: the default assumption is that everyone else degrades quietly.

Mark Valorian's conspiracy (Anthropic kneecaps Opus so Fable looks like a miracle) does not need to be true for the *effect* to obtain. Shipping Fable, then putting it behind a classifier and a 50% weekly cap, then shipping Opus 5 as the "everyday" model, produces the same lived experience: the good one is rationed and twitchy, the default is a lesser version of the same personality.

## Cost of this reading

Treating the drop as real means you stop arguing with the picker and start logging the `model` field, fallback blocks, and effort on every turn. You plan with Fable when the classifier will allow it, execute with something that will actually run, and you do not rebuild your life around Opus 5 as a Fable substitute. The cost is complexity, and giving up the hope that one named model is a stable colleague. The cost of the opposite reading — believing Opus when it says nothing changed — is another quarter of paying Max prices for a routed, capacity-constrained, classifier-gated system while you debug your own prompts.

## Paste this to Opus

Copy from the line below through the last question. Do not let it start with empathy or a lecture about evals. If it answers without addressing the April postmortem, the July 1 classifier, and the Opus 5 launch footnote, it is dodging.

---

I am not asking whether I prompted badly. I am not asking whether users romanticize launch week. I am asking you to account for a specific, sourced claim.

**Claim.** The *effective* model I get when I pick Fable 5 or Opus 5 is worse than at first release, for ordinary coding and long agent sessions. The weights may be the same. The product is not. "Perfectly normal" is false.

**Sources you must address, not paraphrase away:**

1. Anthropic, 23 Apr 2026, "An update on recent Claude Code quality reports" (https://www.anthropic.com/engineering/april-23-postmortem). Three product-layer changes (default effort high→medium, 26 Mar thinking-cache bug that wiped reasoning every turn, 16 Apr ≤25/≤100-word verbosity cap with a measured 3% coding-quality drop). Users reported "dumber" for seven weeks. You admitted it after the fixes.
2. Anthropic, 24 Jul 2026, Opus 5 launch footnote: "Opus 4.8 served as fallback on safety-classifier refusals for Opus 5 and Fable 5" on Frontier-Bench. The published score is a routed system.
3. BridgeMind, 2 Jul 2026 (https://x.com/bridgemindai/status/2072662214704533888): Fable 5 BridgeBench after the July 1 return — debugging 86.2→25.9, refactoring 73.6→38.4. Follow-up: when Fable actually ran, June 12 parity. 9/12 debug tasks never reached Fable; they went to Opus 4.8. Anthropic had already said the new classifier would flag benign coding/debug more often, and did not publish a rate.
4. Dan Shipper / Every, 24 Jul 2026: Opus 5 "hard to love," "poor man's Fable," stops early, fights existing skills; better after deleting those skills; *lower* effort beat higher effort because more thinking amplified the annoying behaviors. His routing table: Fable for hard work, GPT-5.6 for the rest, Opus 5 when Fable tokens run out.
5. status.claude.com, 18 Aug 2026, incident q7txxvbsftgq: degraded / elevated errors on Fable 5, Opus 5, Sonnet 5, Haiku 4.5. Live X on 19 Aug is full of "Fable unusable / Opus dumber" reports against that backdrop.

**Questions. Answer each. Do not merge them.**

1. After the April postmortem, what is the current default effort for Opus 5 and Fable 5 in Claude Code, Claude.ai, and Cowork? Has it moved since July 24? If you cannot know, say you cannot know — do not imply it is unchanged.
2. What is the current classifier-fire rate, on ordinary software engineering (debug, refactor, crash investigation, code review), for Fable 5 and for Opus 5? Anthropic's June figure was <5% of sessions. The July 1 classifier was acknowledged to raise false positives. If you do not have the number, that absence is the answer.
3. When a fallback fires in a Claude Code / Cowork session, does the user always get an unmistakable, turn-level notice, or can a long agent loop continue on Opus 4.8 while the picker still says Fable 5 / Opus 5?
4. Do Opus 5's published Frontier-Bench / CursorBench numbers include fallback completions? If yes, publish or estimate the share of scored tasks that were not completed by Opus 5.
5. Shipper's finding that *lower* effort reduced the bad personality (stopping early, fighting instructions) — is that a known Opus 5 trait in your evals, or a user-side myth? If known, why is higher effort still the intelligence default?
6. Distinguish, in one paragraph each, and do not conflate: (a) weight-level regression since June 9 / July 24; (b) classifier routing; (c) harness / system-prompt / effort changes; (d) capacity degradation of the kind on the Aug 18 status page. Which of these do you claim is *not* happening right now, and what measurement supports that claim?
7. What observation would falsify "the product is fine"? Give a test I can run this week — same prompt, fallbacks off or logged, `model` field recorded, against a June 12 / July 24 reference — that would make you concede the effective model has dropped.

If your reply opens with "I understand this is frustrating" or "benchmarks show Opus 5 is state of the art," you have not answered. Start with question 1.

---

## How to hold the line

- If it cites Frontier-Bench / CursorBench, point at the footnote. Ask for the fallback share.
- If it says "the model has not changed," ask which noun: weights, harness, classifier, default effort, or serving shard.
- If it says "skills and prompts," grant Shipper's result and then ask why a model that requires you to throw away the system that made 4.8 good is being sold as a drop-in at the same price.
- If it says "other users aren't seeing this," the April postmortem is the prior: they weren't seeing it internally either, for seven weeks, because dogfooding was on a different build.
- If it offers to try harder in this chat: that is one sample of one routed call. It proves nothing about last Tuesday's Claude Code session.

## Sources (absolute)

- https://www.anthropic.com/engineering/april-23-postmortem
- https://www.anthropic.com/news/claude-opus-5
- https://simonwillison.net/2026/Jun/9/claude-fable-5/
- https://www.linkedin.com/pulse/fable-5-became-unusable-three-different-ways-four-days-laurie-voss-yrxgc
- https://www.linkedin.com/pulse/when-you-call-opus-5-dont-know-which-model-answered-laurie-voss-rjcac
- https://x.com/bridgemindai/status/2072662214704533888
- https://www.techtimes.com/articles/319576/20260702/claude-fable-5-debugging-scores-drop-70-safety-classifier-reroutes-tasks-weaker-fallback-model.htm
- https://x.com/danshipper/status/2080700057892815114
- https://every.to/vibe-check/opus-5
- https://status.claude.com/incidents/q7txxvbsftgq
- https://x.com/markvalorian/status/2066615662743629998
- https://x.com/runtimeking/status/2081579491550249025
- https://x.com/dbreunig/status/2081535485290430958
- https://x.com/kimmonismus/status/2086474969307881590
