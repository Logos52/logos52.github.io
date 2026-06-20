---
title: "Dictionary audio pace: regenerate the fast clips, don't stretch them"
type: journal
created: 2026-06-19
updated: 2026-06-19
tags:
  - journal
  - tsumugu
  - dictionary
  - audio
  - tts
  - decisions
---

# Dictionary audio — pace policy locked (2026-06-19)

After several rounds of ear-checking on the validation slice, the pace-normalization design for tsumugu-ed audio is settled. The short version: **you cannot cleanly stretch a fast Mandarin clip down to target — so don't. Regenerate it.**

## How we got here (what was ruled out, and why)

1. **Flat 4.0 c/s + tolerance band + rubberband** (original 2026-06-15 plan). Normalizing everything to one rate, keeping on-pace clips untouched, stretching the rest. Failed by ear: clips coming from far away (5+ c/s → 4.0) sound weird even inside a band.
2. **Exp formula compressing >4.2 into a 3.8–4.2 band.** Spread the fast clips out instead of clumping them at the ceiling. Better, but the underlying stretch artifact on the big-slowdown clips remained.
3. **Rubberband for the big slowdowns.** Ear-tested head-to-head against sox in a three-way compare page — **rubberband is WORSE, not better.** Killed it. (`scripts/stretcher_compare.py` was the compare harness; now dead weight.)
4. **The real constraint that ended the search:** *any* slowdown beyond **×0.9** sounds weird, whatever the stretcher. So there is no clean way to stretch a 5 c/s clip to 4. Stop trying.

## Final policy (locked)

Three buckets, hard ×0.9 floor on slowdown:

- **≤4.1 c/s → keep untouched.** Natural variation and genuinely slow clips preserved. The majority.
- **4.1–4.5 c/s → sox `tempo -s` ×0.9.** Gentle 10% nudge, the most you can slow before it warbles. Flat factor, not a stretch-to-target. Rubberband and atempo are out — sox only.
- **>4.5 c/s → regenerate, don't stretch.**

**Regen mechanic:** Qwen's generation pace is a lottery (speed control unreliable — confirmed back on 2026-06-06), so a single regen is a coin-flip. So **N=3 takes, keep the best-paced one ≤4.5** — normally the slowest clean take, but for 1–2-char headwords the slowest is often a drawn-out artifact, so there prefer the most natural in-range take. If all 3 are still >4.5 → sox ×0.9 the best + **flag for manual review.** Never silently ship a fast clip.

Runaways (the over-generation false-negatives from the QA holes — 頒/懊/礙 hitting the 6 s cap) join the >4.5 clips on the same regenerate path.

## Why this is the right shape

The insight is that pace is a *generation* property, not a *post-processing* property, for anything more than a 10% correction. DSP can nudge; it can't rewrite delivery. Oversample-and-pick-slowest (N=3) turns the unreliable generation knob into a usable statistical lever — cheap at RTF 0.77 for the fast minority — which is the honest way to get a fast clip slow without artifacts.

## Open / next

- Locked into `tsumugu-ed/HANDOFF-dictionary-audio-overnight.md` (steps 2–3) and `tsumugu/PRD-Voice-Notes.md` Decision Log (2026-06-15 entry amended).
- `scripts/normalize_pace.py` rewritten to the three buckets (keep 4.1 / regen 4.5 / slow 0.9); writes `audio/regen-list.txt` + `audio/QA-PACE.html`.
- `scripts/stretcher_compare.py` is now obsolete (rubberband ruled out) — left in place, flagged for deletion.
- Slice split under the new policy: 115 keep / 55 sox×0.9 / 128 regen / 42 runaway (~50% regen — but the slice is oversampled for problem clips; real corpus will be far lower).
- **Next move:** hand the overnight ~29k-clip run to Composer with the tightened bidirectional QA + N=3 regen + three-bucket pace + R2 hosting.

---

## Session addendum — overnight-run operational decisions (same day)

After locking the pace policy above, the rest of the session turned the spec into a runnable overnight handoff. What changed:

**Rubberband killed, by ear.** Built a three-way compare page (original / sox / rubberband) to A/B/C the fast clips. Verdict: rubberband is *worse* than sox, not better. That's what forced the regenerate-don't-stretch policy — there's no clean DSP path for big slowdowns. Compare harness (`scripts/stretcher_compare.py`) and its render artifacts (`audio/cmp/`, `STRETCHER-COMPARE.html`) deleted as dead weight.

**Regen mechanic finalized.** N=3 takes, keep the best-paced ≤4.5 — slowest clean take normally, but most-natural-in-range for 1–2-char headwords (slowest is often a drawn-out artifact). Survivors (all 3 still >4.5) get sox ×0.9 + flag, never silent-shipped.

**Overnight = fully autonomous.** Cut the "stop and check with me" gates — an overnight build that blocks on a human is useless. It flags instead of pausing and writes a scannable `AUDIO-REPORT.md` to read in the morning. The only permitted halt is the pre-flight slice QA gate *failing its own thresholds* (a fail-safe so it doesn't burn the night running broken QA against 29k clips), not a wait-for-Wedge.

**Thermal/power guard added (was a false memory that one existed).** Searched the repo — there was *no* thermal throttling anywhere; the "70°C" I half-remembered setting didn't exist. Wedge's real concern is battery longevity, not chip safety (70°C is well within Apple-Silicon spec). Decisions: **run on AC** (dominant battery lever — cell doesn't cycle under load), plus a GPU-temp guard (TTS is Metal/GPU-bound) that **pauses at ≥70°C, resumes <62°C** via `macmon` (IOReport, no sudo — explicitly *not* `sudo powermetrics` unattended). Duty-cycle fallback if macmon absent. Logged in PRD-Voice-Notes Decision Log (2026-06-19) + handoff Constraints.

**Lesson worth keeping:** I asserted a 70°C setting existed when it didn't. Caught it by grepping before "adjusting" it. Verify the setting exists before tuning it — don't tune a memory.

**Status at session end:** handoff + PRD fully consistent; kickoff prompt written for Composer (`COMPOSER-KICKOFF-audio.md`). Wedge pastes it into Composer himself to run tonight. Nothing left blocking the run.
