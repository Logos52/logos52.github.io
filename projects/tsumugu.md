---
title: "Tsumugu"
type: project
status: current
stack:
  - TypeScript
  - LLM agents (batch)
  - Open dictionary data
order: 2
blurb: "Comprehensible-input generator meets graded reader, hooked into a persistent record of the vocabulary you've learned."
created: 2026-06-03
updated: 2026-06-08
tags:
  - projects
---

## What it is

Comprehensible-input generator meets graded reader, hooked into a persistent record of the vocabulary you've learned. Tsumugu takes the premise of Karpathy's LLM-wiki and extends it into an auto-generating reader — hover-over definitions, custom encoding pages, and in-language definitions and summaries. Each text is generated to land in the comprehensible-input range (80–95% known words), so the wiki evolves naturally to match your level as your vocabulary grows. Wikis are meant to grow vertically (deeper text) with added vocabulary, but horizontally (more pages) depending on your consumption habits — TV shows, YouTube videos, etc.

The engine is a public skeleton (Apache-2.0); languages are packs on top. The first two are **Traditional Mandarin (Taiwan)** and **Vietnamese**, the latter using a **Hán-Việt bridge** that leans on Chinese to bootstrap Vietnamese's large Sino-Vietnamese vocabulary.

## How it's built

Fully **client-side and offline** — the reader runs free in the browser; all LLM work happens in **batch**, run by coding agents (Claude Code / Grok Build) against scripts, with **no paid API in the core loop**. The app just consumes the files the agents produce. One core engine (reader, cross-language word store, knowledge-level colouring, comprehensible-input scoring) is parameterized by a language pack (dictionary, segmenter, phonetics, leveling), with a built-in pull SRS (no scheduler) plus Anki export, and an OpenCC guard on all Traditional-Chinese output. Structure: a public engine repo, a public Quartz LLM-wiki, and a private layer for dictionaries and personal vocabulary.

## Status

Built — Phases 0–7 (engine + offline reader + batch-generation CLI + wiki / bridge / cross-reference), audited at eight of twelve PRD criteria, the rest open-core by design. The wiki is live at <https://logos52.github.io/tsumugu-wiki/>. Built with Grok Build + Claude Code. Full record: [[journal/2026-06-04-tsumugu|the build log]].

Phase 8 (voice) in progress as of 2026-06-06: per-sentence voice notes generated **locally, in batch, with open-source TTS** (Qwen3-TTS via mlx-audio — Apache-2.0, $0, offline after generation) for listen + read + shadowing, replacing the earlier subscription-UI plan. Engine chosen by listening bake-off: [[journal/2026-06-06-tsumugu-voice|the voice log]].

## Links

- **Live reader — try it in the browser:** <https://logos52.github.io/tsumugu/>
- **Live wiki — the graded-reader content:** <https://logos52.github.io/tsumugu-wiki/>
- **Engine — public, Apache-2.0:** <https://github.com/Logos52/tsumugu>
- **Wiki source (Quartz):** <https://github.com/Logos52/tsumugu-wiki>
