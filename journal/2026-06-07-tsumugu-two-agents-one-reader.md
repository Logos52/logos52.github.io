---
title: "Two agents, one reader — Tsumugu's study layer lands"
type: journal
created: 2026-06-07
updated: 2026-06-07
tags:
  - journal
  - language
  - tsumugu
  - agentic-engineering
  - ux
links:
  - "[[journal/2026-06-06-tsumugu-voice]]"
  - "[[projects/tsumugu]]"
---

Yesterday Tsumugu grew a voice. Today the reader grew into an instrument you can study with — and it was built by two agents working the same repo at the same time.

## The reader became an instrument

The synced reader became something you drive:

- **Click a sentence and it plays — just that sentence**, stopping at its end instead of running on. ↑/↓ (and `,`/`.`) step line to line and auto-play; Space replays the line under the cursor; the ▶ button still plays the whole video through.
- **An audio-source toggle (🎙️).** The same gestures play either the original video audio or **Serena's** clean TTS take, with the video parked on the sentence's frame. One source at a time — a bug where both played at once traced to YouTube's async `seekTo` resuming a paused player.
- **An A/B loop strip (🆎)** for looping a slice of the video. A true waveform of YouTube audio is impossible (the embed hands us no audio samples), so the strip is a sentence-snapping timeline: drag the ends and they lock to cue boundaries, so even a long video stays select-by-sentence without needing zoom.
- **Hoverable Chinese summaries** — the "now talking about…" line is now segmented into the same hover-to-grade words as the body text.
- **Quiet by default.** Hover stopped popping a card on every word; it's Shift-hover now, Migaku-style. The catch was a _persisted_ setting silently overriding the new default — a one-time migration cleared it.

## Two agents, one repo

The part worth remembering: a second agent was building **per-speaker dual-voice** (assign different voices to different speakers in a dialogue) in the same files at the same time. It became a small lesson in agent coordination:

- We split lanes — one owned the reader/transcript core, the other took CSS, `index.html`, `scripts/`, and the libs it authored — so commits never collided.
- A scroll-back bug fix landed in shared territory. Rather than entangle two uncommitted trees, we left it **live but uncommitted** and let the other agent's commit carry it. It survived intact, verified after the fact.
- The "player keeps refreshing back to the top" mystery turned out to be the dev server full-reloading on every file save while two agents typed at once — two hands on one keyboard.

## Sweating the details

- **我 ran away.** A bare single word would make the TTS hallucinate a six-second clip; the fix re-rolls any take longer than a length-based cap. 32 hallucinated word clips re-rendered clean.
- **"(segmentation artifact)" was jargon.** About a fifth of one transcript's glossary entries were mis-segmented non-words tagged with that phrase. Reworded to the plain meaning plus a Chinese note explaining the bad split, and the generation prompt now knows to stop emitting the jargon.

## Made it pretty — and truly offline

- A brand lockup: the **紡 glyph** as the logo and favicon, set in the brush reading face with the badge's blue→purple→pink gradient. The abstract swoosh is parked as a future loading spinner.
- A polish pass over buttons, the scrubber, print, dark mode, and a mobile layout.
- The one that matters: **the reading font is self-hosted now.** LXGW WenKai was the last thing the reader fetched from a CDN, so an offline reader fell back to a system serif. Vendored under OFL (~4.4 MB, lazy per unicode-range), the reading face works with zero network. Tsumugu is finally, fully zero-cost and offline end to end.

## Now / next

- **Karaoke word-sync** scoped, not built: feasible via forced alignment, but it needs per-word timing data and a video-vs-Serena timing split. Tiered plan parked — Serena-aligned first (clean audio, reliable), the native video later.
- Deferred while the parallel build settles: a loading spinner (the swoosh earns its keep) and Read↔Review transitions.
- Open: confirm the dual-voice work as it lands; decide the karaoke tier; Vietnamese still needs its own TTS pass — Qwen3 doesn't speak it.
