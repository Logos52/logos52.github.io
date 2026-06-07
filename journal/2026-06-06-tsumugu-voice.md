---
title: "Tsumugu grows a voice — local Qwen3-TTS, per-sentence"
type: journal
created: 2026-06-06
updated: 2026-06-06
tags:
  - journal
  - language
  - tsumugu
  - agentic-engineering
  - tts
links:
  - "[[journal/2026-06-05-money-mindsets-and-tsumugu]]"
  - "[[projects/tsumugu]]"
---

Phase 8 stopped being deferred today. What started as "research open-source Traditional-Chinese TTS options" ended with an engine locked, the PRD rewritten, and real audio rendering on this machine.

## The field moved while I wasn't looking

The deep dive (full survey lives in the repo's private layer, `personal/research/zh-tts-options.md`) found that open-source Mandarin TTS crossed the commercial-quality line in the last six months: Alibaba open-sourced **CosyVoice 3** in December and **Qwen3-TTS** in January — both Apache-2.0, the latter with 3-second voice cloning, instruction-controlled voices, and first-class Apple Silicon support through `mlx-audio`. **BreezyVoice** (MediaTek/NTU) remains the only Taiwan-native option, with a unique inline-zhuyin override that pairs naturally with the per-word readings Tsumugu already stores. License landmines noted for later: several big names (F5-TTS weights, Fish/OpenAudio, Spark-TTS) are non-commercial — fine privately, poison for anything published.

## Killing my own constraint

The v1 voice-notes PRD hard-required generating audio through the Supergrok heavy-subscription chat UI — manually saving clips, sentence by sentence. Today's call: **that path is gone, replaced entirely by local open-source batch TTS.** The original constraint's *spirit* (pre-baked, $0, no paid APIs in the core) is served strictly better by a batch CLI than by a subscription UI — and manual clip-saving across a 1,010-cue transcript was the v1 plan's own top-listed risk. PRD v2 written; v1 archived, not deleted.

## Bake-off, humbled

First bake-off design had four engine legs, reference-clip extraction, blind shuffling, scoring sheets. Rejected — rightly — as too complicated. The simplification that survived: **engine choice and voice choice are separate decisions**, and preset voices answer the first one in five minutes. Then every hosted demo flaked anyway (official Qwen space paused; the ZeroGPU mirror aborted), so the answer became a 30-line `mlx-audio` script on the M3. Lesson twice over: local-first, and keep protocols light.

**Verdict, by ear:** Qwen3-TTS 1.7B CustomVoice, voice **Serena** — "quite good" on real podcast sentences, including the 他們得-as-děi polyphone gauntlet (spot-check pending). BreezyVoice parked as the Taiwan-register/zhuyin fallback; GPT-SoVITS parked as the accent fine-tune track if shadowing a mainland voice ever starts to grate.

## Now / next

- Validation batch ran while this was being written — and passed: 23 real cues, **RTF 0.77 on the M3** (faster than realtime), full 1,010-cue transcript projected at **≈27 minutes**, first real `voice-notes.json` manifest produced. 得=děi confirmed by ear. The "overnight batch" worst case never materialized.
- Feature added mid-session: an Audacity-style **segment-loop practice bar** (drag-select a region of a cue's waveform, **L** to loop, pitch-corrected slowdown) — first post-MVP build item, wavesurfer.js.
- Then: the `gen voice-notes` helper built around measured numbers, reader playback synced to cue highlighting, and the shadowing mode (listen → repeat → advance).
- Open: the 得=děi ear-check; per-word hover audio strategy (on-encounter baking — Kokoro v1.1-zh or same-voice); Vietnamese needs its own TTS pass — Qwen3 doesn't speak it.
