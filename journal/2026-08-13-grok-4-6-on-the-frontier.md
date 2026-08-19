---
title: "Grok 4.6 on the frontier, not the lead"
description: "Grok 4.6 shipped 2026-08-12 at the same $2/$6 as 4.5 and scored 61 on Artificial Analysis — tying GPT-5.6 Sol, one to two points behind Claude Opus 5 and Fable 5. A same-price jump back onto the frontier, not a new leader. Day-one X read, not a stack change."
type: journal
status: published
created: 2026-08-13
updated: 2026-08-13
tags:
  - ai
  - model-comparison
  - grok
  - agents
  - decision-making
---

# Grok 4.6 on the frontier, not the lead

Verdict: Grok 4.6 shipped 2026-08-12 at the same $2/$6 as 4.5 and scored 61 on the Artificial Analysis Intelligence Index — tying GPT-5.6 Sol, one to two points behind Claude Opus 5 (63) and Claude Fable 5 (62). It is back on the frontier. It is not the new leader.

The comparison is three jobs, not three brand names. Opus 5 is Anthropic's working default ($5/$25). Fable 5 is the ceiling, twice that price ($10/$50). Sol is the peer 4.6 actually tied ($5/$30). Grok kept 4.5's sticker and 500k context. The one price regress is cache hits, $0.30 → $0.50 per 1M.

## What moved

SpaceXAI's own line: a longer supplemental run on the same 1.5T 4.5 base, then SFT regenerated from 4.5 trajectories and more agentic RL. Live day one in Cursor, Grok Build, the API, Amp, OpenRouter. First-week 2× included usage in Cursor and Grok Build.

+5 on the Intelligence Index in just over a month (+23 vs Grok 4.3). That is the jump people are screenshotting.

| Bench | Grok 4.6 | Fable 5 Max | GPT-5.6 Sol Max | Notes |
|---|---|---|---|---|
| AA Intelligence Index | 61 | 62 | 61 | Opus 5 max is 63 |
| GDPval-AA v2 Elo | **1753** | 1741 | 1728 | Behind only Opus 5; one reply cites Opus 5 at 1861 on the same scale |
| AA-Briefcase Elo | 1577 | 1574 | 1502 | Fable-tier; behind the Opus 5 family |
| CursorBench v3.2 | 69.9% | **70.5%** | 67.2% | |
| DeepSWE v1.1 | 65.9% | 70% | **73%** | The coding gap that still matters |
| FrontierCode v1.1 | 61.3% | **63.6%** | 60.6% | |
| APEX-Agents | 57.5% | **59.2%** | 56.7% | |
| Terminal-Bench v3.0 | 26% | 34.1% | **34.6%** | |
| Harvey LAB | **15.8%** | 11.3% | 2.5% | |
| Arena Code WebDev | 1,618 (#7) | 1,627 | 1,622 | 4.5 was #13 at 1,553; CIs still wide |

The number doing the most work in the thread is not the Index. On AA-Briefcase, 4.6 finishes in ~53 turns and ~0.5B input tokens against Opus 5 max at ~103 turns and ~2.0B. Half the loop, roughly a quarter of the tokens. AA puts it at $0.84 per task, on the intelligence-vs-cost Pareto line with Kimi K3. τ³-Banking 50.7% (top two with Qwen3.8 Max). Terminal-Bench v2.1 88.4%, in line with the leaders.

Arena's line, already being copied: a Sol-quality model at a fraction of the price.

## What people are saying

The street read, launch day: Fable-adjacent at an 80%+ discount. That is a price sentence wearing a quality sentence's clothes. The sober read, already posted: a real +5, better agents, still not a new ceiling. DeepSWE and Terminal-Bench v3.0 are the gaps that survive the screenshot.

Hands-on is a few hours old. One Cursor user who leaned on 4.5 for speed and deferred to Opus or Sol on hard work said an hour of 4.6 already covers more of the deferred pile, and still wants Fable orchestrating 4.6 on large initiatives. Another said 4.5 needed back-and-forth and 4.6 lands on the first try, on par with last-gen Opus 4.8 — not Opus 5. A vibe-code bakeoff called it the fastest of the set and still mid-tier on quality, and would pick Terra when quality is the constraint. A fourth is swapping 4.6 and Opus 5 on webdev and cannot tell which wins.

The July corpus is about 4.5, not 4.6. People who cancelled Claude last month did it on speed, ~60% cheaper tokens, and Grok Build not burning a turn deciding whether to do the task. That complaint is still the product story 4.6 is being sold as closing. Fable still holds a trust premium on serious coding: more robust, more tested, more tokens, more minutes.

Claude-fatigue is doing as much work as the bench jump. Clarifying questions, safety nags, token burn. A Fable outage the same afternoon was treated as a reason to try 4.6.

## What this is not

This is not a stack change. The vault still runs Cowork on Fable for judgment and Grok Build for execution. The July [[journal/2026-07-01-usable-intelligence-sonnet-5-vs-opus-4-8|Sonnet 5 vs Opus 4.8]] split is a different job: fail-closed tsumugu authoring, where the gate can check the output. A frontier ranking does not retire that split.

The rejected reading is "4.6 beat Opus and Fable." It did not. It leapfrogged last month's Opus on some Elo boards and sits inside the noise of current Fable on several agent benches. Framing 1753 as "new frontier" after Opus 5 already posted higher on the same scale is the exact correction already in the thread.

What would flip this to "new leader": a week of Cursor / Grok Build work where 4.6 beats Opus 5 on the tasks this desk actually runs — long knowledge-work loops and hard SWE — not another composite point. What would flip it to a stack change: that same week, plus Fable's trust premium dying on the work that currently stays on Cowork. Neither has happened.

Price of holding the finding as a briefing: the sample is ~24 hours old. The 4.5 cancellation posts are a month of use. The "why do we even need Opus 5" posts are not.

DeepSeek V4 Pro dropped the same day at $0.435 / $0.87. If that model is even close, the Pareto claim is incomplete.

## Vault contradiction

[[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] still grades Grok 4.3 as mid-tier (Fluency 3 · Knowledge 4 · Scale 4 · Verifiability 3 · Autonomy 3), snapshot dated 2026-07, with a projected July near-Opus grade "to be re-graded on release, not asserted now." 4.5 already shipped. 4.6 is out. That row is stale.

Not silently regraded here. The lens grades are judgment calls on this desk's facets, not a paste of AA. A re-grade is its own pass: 4.6, Opus 5, Fable 5, Sol, and whatever DeepSeek V4 Pro turns out to be, against the same five axes. Until that pass, the contradiction stands in the open.

Grok 4.7 is already being talked about as a 2.1T model in two to three weeks, supposedly trained on Cursor data from the start. Some of the wait-and-see is just people holding for that.

## Sources

- [Introducing Grok 4.6](https://x.ai/news/grok-4-6) — SpaceXAI, 2026-08-12. Official eval table vs 4.5 / Sol Max / Fable 5 Max.
- [Artificial Analysis on Grok 4.6](https://x.com/ArtificialAnlys/status/2087564648325530099) — Intelligence Index 61, agent benches, $0.84/task, Briefcase turn counts.
- [SpaceXAI announcement](https://x.com/SpaceXAI/status/2087562800982077492) — $2/$6, live in Cursor and Grok Build, 2× first-week usage.
- Street read compiled 2026-08-13 from the launch thread: [@bossriceshark](https://x.com/bossriceshark/status/2087572873041093105), [@Merliiin__](https://x.com/Merliiin__/status/2087598541221056945), [@jonnygravity](https://x.com/jonnygravity/status/2087579096666488947), [@zhihanz1205](https://x.com/zhihanz1205/status/2087582589725102286), [@OmedVibeCodes](https://x.com/OmedVibeCodes/status/2087592055077740697), [@JustJorshin](https://x.com/JustJorshin/status/2087597087311458402), [@plaz28](https://x.com/plaz28/status/2087568203354415243). 4.5-era cancellation / Grok-Build-vs-Claude-Code posts are dated July–early August and are not 4.6 evidence.
