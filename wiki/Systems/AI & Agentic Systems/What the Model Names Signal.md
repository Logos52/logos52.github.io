---
title: "What the Model Names Signal"
type: concept
status: developing
created: 2026-06-30
updated: 2026-08-14
written-by: grok
model: grok
source-count: 4
tags:
  - claude
  - grok
  - composer
  - naming
  - llm
  - models
  - agentic-engineering
---

# What the Model Names Signal

Anthropic's first three model names are verse-forms whose size tracks the job — a first look inside one generation, not a spec. Later names, and other vendors, do not play the same game. Reading the name can point at a tier before a benchmark, only inside that generation.

## The original three

The poetic ladder is Haiku, Sonnet, and Opus: named verse-forms that track small and fast, then mid, then large and slow, inside one Anthropic generation.

**Haiku** is the 17-syllable miniature, in the English-school count. Smallest, fastest, cheapest. Built to condense, not to deliberate. Reach for it on high-volume, verifiable, low-stakes work.

**Sonnet** is the 14-line form. Structure, with space left over. Everyday default: mid-tier reasoning at ordinary speed and cost.

**Opus** is Latin for "work," as in *magnum opus*. The previous top of the family, still the named workhorse for complex, layered, creative problems where being right outweighs being cheap. It is the deepest of the original three. It is not the top of the current family.

The small form is exact. The large form asks more. Match the form to the job.

| Name | The form | Reach for it when |
|---|---|---|
| Haiku | 17-syllable miniature · small · fast · cheap | High-volume, verifiable, low-stakes |
| Sonnet | 14-line structured form · balanced reasoning | The everyday default |
| Opus | A masterwork · deepest of the original three | Complex, high-stakes, creative calls |

## A genre, not a scale

The through-line — length and ambition of the poetic form tracks capability — holds for those three. It breaks when the next name is a genre rather than a scale.

**Fable** is from Latin *fabula*, "that which is told," akin to Greek *mythos*. That is the etymology. It is not a causal encoder. On 9 June 2026 Anthropic named a new class above Opus: Mythos-class. Fable is the guarded public release of that class; Mythos is the restricted twin. The safeguards distinguish them. The vendor's use is long-running agents and next-generation intelligence, not "pick this when you want a story."

Do not send a reader to Fable instead of Opus for storytelling on the strength of the word. Observed behavior of the public model — including taste-bound failure and an elicit-first habit — lives on [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]]. That is a reading of the model, not of the name.

## Inside a generation

A name marks a tier, and tiers blur across versions. A newer Sonnet can beat an older Opus, so the ladder holds within a generation, not across them. The metaphor is positioning, not a spec.

## Names that never rode the poetry

Two other names are two different bets on the same agentic-coding job. They do not ride the poetry scheme at all. They answer to throughput, price, and a coding bench.

Composer 2.5 is one vendor's in-house model, built on an open checkpoint. It is a speed specialist and a mechanical workhorse: fast, cheap, verifiable code loops. On that vendor's 18 May 2026 table it scores 79.8% on SWE-Bench Multilingual against 80.5% for Opus 4.7 on the same table. That is one dated bench, vendor-reported. Other benches on the same table are mixed; one number is not the model. The Standard card is $0.50 / $2.50 per million tokens. A Fast card exists at $3 / $15. Do not collapse those into a ratio against Opus.

Grok in Grok Build is the generalist: reasoning plus vision, broader in scope, slower. The 29 May 2026 card is ~100+ tokens per second and ~$1 / $2 per million tokens, vendor-reported.

On the [[wiki/Concepts/Human vs AI Capability Lens|capability lens]] these are two different polygons. One spikes Scale, Verifiability, and Autonomy. The other spreads wider into reasoning and multimodal work. Do not restate the scores here.

## Positioning, not a spec

Vendor-reported numbers need independent confirmation. Treat the name as a first heuristic. A task's verifiability and the dated [[wiki/Concepts/Human vs AI Capability Lens|model snapshot]] decide the actual pick. Which model to spend where, by depth rather than by name, is [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]]. The dated roster is [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]. This page is not that page.

The case against the reading: the metaphor is positioning; the ladder is within a generation; other vendors never played; Fable is a new class above, named for telling, split by safeguards; every number on this page is a dated card.

The name is a first look. The dated snapshot does the pick.

## Related

- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — observed behavior of the public model, including taste-bound failure; not what the name encodes.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the facet snapshot that actually decides the pick.
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — which model to spend where, by depth, not by name.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — the dated roster this page is not.

## Open Questions

- Has the dropped July projection — a Grok release trained on Composer-style data, near Opus parity — been re-graded on a dated card?

## Sources

- Anthropic, [Introducing the next generation of Claude](https://www.anthropic.com/news/claude-3-family), March 2024. Haiku / Sonnet / Opus as a named family.
- Anthropic, [Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), 9 June 2026, footnotes 1–2. Mythos-class above Opus; Fable public, Mythos restricted; named for telling.
- Cursor, [Composer 2.5](https://cursor.com/blog/composer-2-5), 18 May 2026. Standard card and the SWE-Bench Multilingual table.
- xAI, [Grok Build 0.1](https://x.ai/news/grok-build-0-1), 29 May 2026. Throughput and unit price, vendor-reported.
