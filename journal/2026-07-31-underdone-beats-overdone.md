---
title: "Underdone Beats Overdone"
description: "A working lesson from the voice production: when a fix pass keeps bouncing between too much and too little, the target sits below what the tool can control, so keep the nearest stable take, carry the nuance through the script and take-selection, and build candidate diversity on purpose instead of hoping seeds produce it."
type: journal
status: published
created: 2026-07-31
updated: 2026-07-31
tags:
  - workflow
  - ai-agents
  - tts
  - voices
  - podcast
  - decision-making
---

# Underdone Beats Overdone

Verdict, in my own words: I would rather the emotions come out underdone than overdone, and when a fix pass keeps bouncing between "too much" and "too little," that bounce may be the tell that the target sits below what the tool can actually control. The move then is to stop iterating, keep the nearest stable take, and carry the nuance the voice can't hold through the script and the choice of take. This is the working lesson out of the last two weeks on the Tsumugu Podcast (Gaming) voices, and the thing I am still turning over about how to use the AI and Qwen properly.

The evidence is a stack of burned rounds, all the same shape. 星野's energy: I asked for it one notch down, and the first fix pass came back with more energy than the take it was meant to fix; several rounds went by before a usable one. The singing gate ran the same whiplash at the machine's own hands, a loose threshold shipping audible singing to my ear and a strict one starving whole render runs into "FAILED — no file," twice in a single round. Overdone, then underdone, then overdone. And when I finally listened to the emotion states we had banked, "tired" and "excited" read as slightly tired, barely there. I am at peace with that. Maybe it is even on purpose. I would rather live there than in the theatrical version.

The pattern behind all of it: I spend a lot of time with the AI and it keeps saying "oh no, that's overdone," then "oh no, that's underdone." A lot of that time went to chasing perfection where it only made things worse, or maybe to chasing a precision the technology cannot yet deliver — asking for one exact notch assumes the tool has a notch that fine. When the output oscillates around a target instead of landing on it, the target may be finer than the control the tool gives me. The ping-pong is data, and it is telling me to stop.

Naming it moved two things. The machine got demoted from judge to ranker (HANDOFF-ROUND15-MASTER.md): objective defects hard-fail, musicality only sorts the takes, my ear is the only judge of energy and character, and "FAILED — no file" became a banned outcome. And the mood came off the voice's back — the script carries the mood, the voice carries the timbre. 白龍's "serious" voice was rebuilt as a neutral everyday voice that happens to be deep and clean, with the seriousness moved into what he actually says.

What I actually want next is narrower, and I will say it plainly: per-character A/B tests across the mood states, so I can hear one character's "tired" against three other "tired"s and pick. I tried exactly that with Grok and the four candidates came back with negligible differences — ABCD indistinguishable to the ear. The likely reason is that the four varied only their random seed under one fixed mood clause, and the clause decides the delivery, so the seed moved almost nothing a listener could hear. The open experiment, running in-house now, is whether the spread can be built on purpose instead of hoped for: different concrete framings of the same emotion, different temperatures, machine-verified as an audible spread before my ear is ever spent on it. Underdone stays the direction I err; that was never a target I set for those banked states in advance, only what I heard when I listened and decided I could live with it.

The case against: sometimes one more take is exactly the fix, and understatement as a default risks a whole cast that reads flat. Both are true. The resolution is that the ear rules per take. The default only decides which way to err when a take is ambiguous, and it errs quiet. It is a stopping rule for the chase loop; it bans no iteration and drops no floor of emotion onto a line that wants more.

The lesson cost real rounds — the 星野 energy passes that went the wrong direction, the two starved runs in one ticket that delivered nothing — and what it buys is a method that ends the chase instead of feeding it: keep the nearest stable take, put the nuance in the script, let the ear rank, and construct the diversity deliberately rather than trusting seeds to produce it. It is the same shape as the checkpoint lesson from earlier in this saga ([[wiki/Concepts/The Same Model Twice|The Same Model Twice]]), where ten evaluation rounds argued with a limit the tool had already set. The work is to stop iterating against a wall and spend the effort where the tool still answers.
