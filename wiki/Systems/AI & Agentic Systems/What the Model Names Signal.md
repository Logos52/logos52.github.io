---
title: "What the Model Names Signal"
type: concept
status: seed
created: 2026-06-30
updated: 2026-06-30
source-count: 4
tags:
  - llm
  - models
  - claude
  - naming
  - grok
  - composer
  - agentic-engineering
---

# What the Model Names Signal

Anthropic's model names are a capability ladder dressed as poetry: the *form* in each name encodes the scale and kind of composition the model is tuned for, from a three-line haiku to a full opus. Reading the name points you to the right tier before you read a benchmark.

## The poetic ladder

- **Haiku** — the 17-syllable miniature. Smallest, fastest, cheapest; built to condense, not to deliberate. Reach for it on high-volume, verifiable, low-stakes work.
- **Sonnet** — the 14-line form, structure balanced with room to move. The mid-tier workhorse: structured reasoning at everyday speed and cost.
- **Opus** — Latin for "work," as in *magnum opus*. The largest and most capable, for complex, layered, creative problems where being right outweighs being cheap.
- **Fable** — a crafted narrative with a point. The shift to a story-form name signals a model tuned for long-form, creative, narrative generation rather than terse reasoning — generativity strong, taste-bound judgment weaker ([[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]]).

The through-line: the length and ambition of the poetic form tracks the model's capability and the kind of output it composes. A haiku is precise and small; an opus is large and demanding; a fable is a told story. Pick the form that matches the job.

| Name | Poetic form | Signals | Reach for it when |
| --- | --- | --- | --- |
| Haiku | 17-syllable miniature | small · fast · cheap | high-volume, verifiable, low-stakes |
| Sonnet | 14-line structured form | balanced reasoning | the everyday default |
| Opus | a masterwork | largest · deepest | complex, high-stakes, creative calls |
| Fable | a crafted narrative | long-form creative generation | storytelling, drafting, ideation |

## Composer 2.5 vs Grok in Grok Build

Two different bets on the same agentic-coding job. **Composer 2.5** (Cursor's in-house model, built on Kimi K2.5) is a speed specialist: ~250 tokens/sec (vendor-reported, 2–4× typical code models), SWE-Bench Multilingual ~79.8% (≈ Opus-4.7 class), at roughly a tenth of Opus's price, exposing code execution, IDE integration, and parallel agents. It is the mechanical workhorse — fast, cheap, verifiable code loops. **Grok in Grok Build** (xAI's agentic CLI) is the generalist: reasoning plus vision/multimodal, ~100+ tokens/sec and ~$1/$2 per million tokens (vendor-reported), broader in scope but slower, with independent agentic benchmarks still pending.

On the [[wiki/Concepts/Human vs AI Capability Lens|capability lens]] this is two different polygons: Composer spikes Scale, Verifiability, and Autonomy — the mechanical-coding corner — while Grok spreads wider into reasoning and multimodal but sits a notch inside the frontier today. The July Grok release, trained on Composer-style data, is projected near Opus parity; re-grade it on launch rather than now.

## The case against reading names

The metaphor is positioning, not a spec. A name marks a tier, and tiers blur across versions: a newer Sonnet can beat an older Opus, so the ladder holds within a generation, not across them. Composer and Grok don't ride the poetry scheme at all — they answer to throughput, price, and SWE-bench, where vendor-reported numbers need independent confirmation. Treat the name as a first heuristic; a task's verifiability and the dated [[wiki/Concepts/Human vs AI Capability Lens|model snapshot]] decide the actual pick.

## Sources

- [Choosing the right Claude model: Haiku, Sonnet, Opus, or Fable](https://claude.com/resources/tutorials/choosing-the-right-claude-model)
- [Decoding Anthropic's model names: Fable and the naming shift](https://www.developersdigest.tech/blog/anthropic-model-naming-explained)
- [Introducing Composer 2.5 — Cursor](https://cursor.com/blog/composer-2-5)
- [Composer 2.5 vs Grok Build 0.1 comparison](https://www.llmreference.com/compare/composer-2-5/grok-build-0.1)

## Related

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the facet snapshot for each model.
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — which model to spend where.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]]
