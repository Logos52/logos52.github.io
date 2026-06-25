---
title: "AI Mandarin Reader — graded reader meets LLM-wiki"
type: journal
created: 2026-06-03
updated: 2026-06-03
tags:
  - journal
  - language
  - ideas
links:
  - "[[wiki/Language/Refold Language Learning System]]"
---

An idea logged for later: a personal AI reader for **Traditional Mandarin** — a graded reader crossed with the LLM-wiki pattern, built to teach through real input rather than textbook drills.

## The idea

Paste in real Mandarin sources — Dcard threads, articles, or video transcripts — and have the reader surface the idioms (成語) and vocabulary that are still unknown. Each unfamiliar item gets its own durable page where an AI explains it in context: meaning, usage, register, a few real examples. Over time the pages accumulate into a personal Mandarin wiki. An optional voice mode (via Grok) reads passages aloud for listening and shadowing, and answers questions about a text interactively.

## Why LLM-wiki principles fit

This is the [[wiki/Workflows/Raw to Wiki Compilation|raw → wiki compilation]] loop pointed at a language: source material in, durable linked pages out, each pass leaving the base more useful. An idiom looked up once becomes a node that gets reused and spaced, instead of a lookup that evaporates. It plugs into the existing learning loop — [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|SIR]] for review, [[wiki/Language/Refold Language Learning System|Refold]] for the immersion frame — rather than standing up a new system from scratch.

## Improvements and directions

- **Keep it active, not a lookup crutch.** The point of immersion is high-attention input ([[wiki/Language/Attention is Important|attention is important]]). Gate the reveal — guess first, then expose meaning — so the reader trains comprehension instead of replacing it. The [[wiki/Techniques/Building the Radar|radar]] concern applies: frictionless lookups can quietly turn active reading passive.
- **Track what's already known.** The value is surfacing the *unknown*. A known-words list (even rough) lets the reader skip what's learned, focus attention where it counts, and feed a spacing schedule so idioms resurface before they fade.
- **Traditional + Taiwan specifics.** Dcard is Taiwanese, so this leans Traditional characters and Taiwan register. Decide the phonetic layer early — Zhuyin (注音) fits the Taiwan context; Pinyin is more portable.
- **Let the pages compound into a graph.** Idiom and vocab pages can link by shared characters or themes, so the same focus-graph treatment used elsewhere on the site becomes a living map of the Mandarin being built.
- **Voice via Grok.** Transcript → spoken passage for shadowing, then "explain this line," then comprehension questions. Read-aloud first; conversation later.

## Don't reinvent

Language Reactor, Migaku, Du Chinese, Pleco, and LingQ already cover immersion and lookup well. The differentiator here is the **durable, compounding wiki** (own pages, own taste, a linked graph), the Traditional/Taiwan focus, and Grok voice — worth confirming that gap is real before building.

## First small step

One article → a handful of idiom and vocab pages, hand-run through the loop, before any automation. Language work needs serious forethought, so prove the loop on a single text first.

## Update — 2026-06-03 · Scoped into Tsumugu (PRD drafted)

Worked the logged idea up into a full PRD with Claude; it grew well past the original "graded reader × LLM-wiki" sketch.

**What it became.** Tsumugu — an open-source, language-agnostic graded-reader + LLM-wiki *engine* (public skeleton, Apache-2.0), with language *instances* on top: 中文Craft (Traditional Mandarin) first, ViệtCraft (Vietnamese) second. One engine + language packs + a shared cross-language word store.

**Decisions (and why).**
- Full standalone, Migaku-grade; consciously overrode my "don't reinvent" rule. Must work fully *without* Migaku (it's an optional source, not a dependency).
- One engine + packs, not two repos — the Vietnamese-via-Chinese idea needs a shared store.
- Multi-language now (zh-Hant + vi both first-class), over the safer Chinese-first path.
- Hán-Việt bridge: use my Chinese to bootstrap Vietnamese — Sino-Vietnamese words (~40%) shown with their Hanzi + known meaning; Chinese known-words cross-seed Vietnamese comprehension. Honest limit: the native spoken core isn't Sino.
- Reader UX = LingQ's numeric grading (1 New / 2 Recognized / 3 Familiar / 4 Learned + Known/Ignore, buttons + hotkeys) + Migaku's hover popup. (The 1–4 model is LingQ's; Migaku is category-based.)
- Comprehensible-input default Extensive ~95% known (Intensive ~80% available).
- Explanations in the target language (monolingual, leveled), English/other-L2 toggle.
- External-vocab cross-reference (the Migaku ask done right): reconcile Migaku/Pleco/Anki into one view; import-first, write-back gated.
- LLM provider configurable — Claude for Traditional writing, Grok for voice; mandatory OpenCC guard (Grok leaks Simplified).
- Tooling: Grok Build + Claude Code (no Codex). License Apache-2.0, open-core (public engine, no data/keys; private layer = dictionaries + my vocab).
- Video: text-first transcripts + AI commentary on hard sections.
- Vietnamese seed: build my own starter deck from beginner transcripts/videos as I go.

**Open / next.** Confirm names; word-status sign-off; provider eval for Vietnamese; repo + private-layer locations; bridge data sourcing. Full detail: [[projects/tsumugu|Tsumugu]].

## Update 2 — 2026-06-03 · Tsumugu finalized (PRD v11, handed to Claude Code)

Name locked: **Tsumugu** (紡ぐ, "to weave"; earlier names retired). Build-ready PRD at `~/Projects/tsumugu/PRD.md` (+ vault `[[projects/tsumugu|Tsumugu]]`); repo scaffolded (README, Apache LICENSE, AGENTS.md/CLAUDE.md, pack-authoring stub, DESIGN-HISTORY).

Final shape:
- **Two public repos + one private folder:** engine (core logic) · wiki (Quartz llm-wiki) · personal (packs/vocab/word-store). All-public is fine — the folder is just organization. zh+vi combined for now, splittable later.
- **Pure client-side** (Chromium ext + web app); segmentation pluggable.
- **No paid API:** all LLM generation runs in **batch** via Claude Code / Grok Build scripts; the app consumes the files. Unknown words pre-baked for instant offline hover; flag-for-clarification feeds the next run.
- **Built-in pull SRS** (`ts-fsrs`, no scheduler/nagging) **+ Anki export**. Click an SRS word → an AI **encoding-layer** page.
- **Wiki = Karpathy-style llm-wiki via Quartz**, public + offline-HTML, fed by **Obsidian Web Clipper → Inbox → agent clean → Wiki** (reuses my llm-knowledge-base stack).
- **Hán-Việt bridge** AI-generated as-you-go, seeded by my Migaku known-Mandarin export; cross-seeds Vietnamese. **External-vocab cross-reference** reconciles Migaku/Pleco/Anki.
- Audio = free Web Speech API; **Grok to evaluate voice later**. Video = text-first transcripts + AI commentary. Apache-2.0, open/prior-art.

Next: Claude Code builds from the PRD (Phase 0 → 1 …). Open items: PRD §12.
