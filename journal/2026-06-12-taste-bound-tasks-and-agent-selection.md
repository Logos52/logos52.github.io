---
title: "Taste-bound tasks: generate vs elicit, and what twelve struck taglines taught about agent selection"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - agentic-engineering
  - writing
---

# Taste-bound tasks and agent selection (2026-06-12)

The same model, on the same day, audited a whole vault cleanly and then needed roughly twelve rounds to write one acceptable hero line. The gap looked like capability. It wasn't — it was a task-type difference that agent workflows should be designed around.

## The diagnosis

**Two kinds of task got conflated.** The wide work (restructure the standards, backfill decisions, recover the Atlas paper trail) runs on reasoning over readable things: a repo, a git log, written rules. The tagline was a taste-matching task — the spec existed only in Wedge's head, and the agent's only access was strikes. Wide tasks reward generation; taste tasks punish it.

**The failure mode has a name: generating instead of eliciting.** Twelve rounds of candidates, each absorbing the previous strike, each missing the next unstated rule. The collapse came when Wedge wrote four candidate lines himself and the agent explained *why they worked* — one round from there to acceptance. The solving information existed the whole time; the agent never asked for it.

**Looking beats guessing, every time it was tried.** Both mid-arc breakthroughs came from artifacts, not iteration: reading the actual dictionary entries (the 休 form line carried more register information than five rounds of feedback) and fetching the live site (which settled a layout dispute in one look). Wedge's own words, mid-session: "when you look at it, generally you understand better."

## The rules extracted

- **Taste-bound tasks start from exemplars.** Two examples the owner likes, or a pointer at the real thing, before any candidates are generated. This is now standing procedure in agent memory; it should be standing procedure for any agent (Fable, Opus, Grok) given front-facing words.
- **Strikes are training data, not waste.** The twelve rejections became the Taglines Are Catalog Lines section and the nouns-counts-states rule — the law exists because the failure happened in front of the standard-setter. The cost was real; so was the artifact.
- **Model selection stays empirical.** The open question Wedge raised: whether Opus serves better on narrow middle-tier tasks. Tier rankings say no; observed behavior is the better instrument. The honest position is to A/B it on real tasks rather than argue from the spec sheet — and the elicit-first procedure probably matters more than the model picked.

## Ruled out

- Reading the twelve rounds as a model-capability verdict. The failure was procedural (generate-first on a taste task), and the fix is workflow, not tier.

## Outstanding

- Apply the exemplar-first rule to the next front-facing task across any agent and see whether the round count actually drops — that's the falsifiable test.
- The Opus comparison, if Wedge wants it: same narrow task, both models, count the rounds.
