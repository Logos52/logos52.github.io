---
title: "Artifacts of Record"
description: "The compaction ruling on the Tsumugu Podcast (Gaming) voice work: ~1.5 GB of takes, caches, and audition banks deleted today, with this entry as the surviving record of the method those rounds bought — machine as ranker, ear as judge, diversity built by mechanism, selection applied identity-first — and a map of where every ruling lives."
type: journal
status: published
created: 2026-08-01
updated: 2026-08-01
tags:
  - workflow
  - ai-agents
  - tts
  - voices
  - podcast
  - decision-making
  - local-models
---

# Artifacts of Record

Verdict, in my own words: I'm compacting the voice-experiment tree today, and this entry is the part meant to survive it. About 1.5 GB of takes, caches, and audition banks across fifteen rounds goes; the roughly 98 MB live system stays — the seven locked character voices, the 28-of-28 mood bank, the production pins, the lock sheets. Everything load-bearing was already banked as an artifact of record, so deleting the rounds behind it costs nothing that a decision still points at. What those rounds bought is a method, and the method is what I am keeping here.

The deliverable, stated once: seven locked voices plus a complete four-state mood bank — 亮 / 沉 / 軟 / 累 across all seven characters, 28 of 28 banked — rendered entirely on local Qwen TTS, every keep-or-redo decision made by my ear on single-take listening boards. The cast locks live in VOICE-LOCKS.md; the mood bank and its era's laws in MOOD-LOCKS.md; the clause grids and per-character canon derivations in MOOD-DESIGN.md; the standing run contract in HANDOFF-ROUND15-MASTER.md; the production manifest is `tan-voices.json`; and the banked wavs themselves — the artifacts of record, never overwritten — sit in `samples/emotion-pins/ab/`.

## The method that survived

Machine as ranker, never judge. Objective gates hard-fail and nothing else does: script-match against the line, Cantonese markers, a clean head and tail. Musicality and energy only sort the survivors. This was the ROUND 15 fix (HANDOFF-ROUND15-MASTER.md), and it held all the way through the mood bank — "FAILED — no file" stayed a banned outcome, and my ear stayed the only judge of identity and expression.

Candidates built for diversity by mechanism, not by re-rolling seeds. Each state got four candidates on four framings — physical delivery, concrete scene, attitude, minimal — so a set could not collapse into four near-identical takes, which is exactly what a seed-only fan-out produces (the Grok A/B that came back ABCD-indistinguishable, in the sibling entry). The design carried, and it carried differently per person: 阿迪's ear chose the scene mechanism across his whole grid, 星野 and 金多恩 leaned physical, 阮草's low states won as minimal. Different characters wanted different mechanisms, which is the whole reason to build the spread on purpose.

Per-line delivery, ruled per line. One wav per script line, the takes of a line paired on the page, keep-① / keep-② / redo-L*n* — because some lines suck while others are fine, and regenerating a good line is waste (Law E, HANDOFF-ROUND15-MASTER.md).

Underdone is the direction of error. The reasons have their own entry ([[journal/2026-07-31-underdone-beats-overdone|Underdone Beats Overdone]]) and I won't retell them; here the lesson only fixes which way every clause is graded — 一點, closing 不誇張, no intensity word anywhere.

Depth belongs in the timbre, never stacked with whisper volume. 白龍's states came back garbled, "deeper than what the model is capable of." The codec floor was real, and the compounding cause was mine: the board rendered him deep and low-volume and slow at once, and deep pitch at whisper volume is codec-garble territory. Rebuilt with the depth carried in the timbre and the delivery at normal volume and pace — the recipe that won his production voice — the garble left and the grid completed 4 of 4. The no-mood-bank fallback I had held in reserve retired unused.

Delivery hygiene at both ends. Nothing before the first scripted word, nothing after the last: 阿迪's 帶笑 timbre chuckles before his lines, so the front-trim law cuts the take at the first-word onset, and a laugh fused into the first syllable is a re-roll rather than a trim. Backups sit in `_pre-fronttrim/`.

Regenerate from a prompt when the goal is a new voice. The final board bakes each state pure-prompt — the character's timbre description with the mood clause appended, at a chosen seed and temperature — and the wav itself is the lock, because the inner roll index was never recorded. An earlier architecture edited a fixed identity pin instead, blending only a pitch contour onto a timbre held byte-true; that preserves the person mathematically, which is correct for four states of one character and the wrong tool the moment the brief is a different voice. Cloning the production audio reproduces the voice you were trying to leave (the Base-clone-versus-VoiceDesign half of this sits in [[wiki/Concepts/The Same Model Twice|The Same Model Twice]]).

## The Goodhart trap, and the honest test that closed it

The lesson that cost the most to see clearly: selection pressure has to be applied identity-first. 沈文's 軟 and 累 came back and I said they were completely different people — not flat, strangers. The root cause was Goodhart in the selector. We had asked the machine to maximize the difference between states with no identity constraint, and it was measuring difference in prosody-only features that cannot see timbre. Maximize separation on features blind to who is speaking, and the cheapest "difference" the search finds is a different speaker.

So we ran the calibration honestly before trusting any gate: does a cheap timbre fingerprint actually separate 沈文 from the strangers, tested on his own labeled takes? It does not. The margin was −0.012 in log-mel space — no threshold exists, because his ruled takes legitimately span 104–181 Hz and overlap the drift. I did not ship a gate that failed its own calibration; a real identity gate needs a learned speaker embedding, a small local model I can download the day I decide the ear needs the backup. For now my ear outperforms every metric we have, and that is the finding, stated as a finding.

What did survive the test is narrower and useful: f0-distance-from-neutral works as a gross-outlier advisory for stable-pitch voices. 白龍 confirmed it mechanically — neutral at 77 Hz, strangers flagged as high as 218 Hz, his clean deep takes 78–93 Hz. So 沈文's re-audition shipped ranked by f0-closeness to his neutral, the exact inverse of the bug, and delivered eight identity-first takes to my ear instead of eight plausible impostors. A separate variation pass did report real between-state spread (mean 1.878 z-units), and the honest read is that part of that spread was strangers, not states, which is the same Goodhart artifact wearing a good-looking number. The whole trail is in MOOD-LOCKS.md and `pure-prompt-report.json`.

## What the burned rounds cost

The arc was not efficient and I won't pretend it was. Rounds went to chasing a precision below the tools' resolution, which is the sibling entry's whole lesson. Rounds went to gates mis-calibrated in both directions — a loose singing threshold shipping audible singing to my ear, a strict one starving whole render runs into no file. And rounds went to an architecture that preserved identity cleanly at the moment the brief wanted audible variation, which is the identity-first pipeline solving the opposite problem well. That is the price. The method above is what it bought, and the method is cheap to carry forward while the rounds are expensive to keep.

## The case against deleting the evidence

The honest argument for keeping all of it: deleted takes cannot be re-eared. If I ever doubt a ruling — was 星野's 沉 the flat one I heard it as, did 阿迪's scene mechanism beat his physical — the losing candidates are gone and I cannot rehear the comparison that settled it. That is a real loss, and I am choosing it with my eyes open.

The answer is the distinction the whole compaction turns on. Every take a decision points at is already banked as an artifact of record: the winning wav in `samples/emotion-pins/ab/`, the recipe in the lock sheet, the reasoning in MOOD-LOCKS.md and MOOD-DESIGN.md. A take that no decision points at is weight, not memory. Fifteen rounds of losing candidates document that I looked, and the bank documents what I chose and why. Keeping the rest would preserve the search when I already have the result.

The tree goes down to its live system today. The voices are locked, the mood bank is 28 of 28 and ruled by ear, and the laws that produced them are written into VOICE-LOCKS.md, MOOD-LOCKS.md, and MOOD-DESIGN.md where the next run will find them. The one decision still open — the production-pin re-lock — inherits a bank of natural-pace, ear-ruled source material in place of a heap of superseded rounds. That is what the compaction protects, and it is why I can delete the rest without deleting the work.
