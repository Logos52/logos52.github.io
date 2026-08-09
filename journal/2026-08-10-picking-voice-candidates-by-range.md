---
title: "Picking Voice Candidates by Range"
description: "Wedge's methodology for selecting TTS reference-voice candidates: fresh model-direct generation, ear-picks that carry melodic range, fixed seed, accrete to ten seconds."
type: journal
status: settled
created: 2026-08-10
updated: 2026-08-10
tags:
  - voice-production
  - tts
  - methodology
  - tsumugu-podcast-gaming
---

# Picking Voice Candidates by Range

The method that produced 星野's accepted voice, in Wedge's words the night it landed: "i need that sing-singy type natural speech. XINGYE sounds better than natural now because the clips i chose all have range." The selection criterion is range — a candidate take earns a keep when its short sentence moves melodically, not merely when it is calm, slow, or clean. This entry records the full procedure so future voice work starts here instead of rediscovering it.

## Why range is the criterion

ICL conditioning propagates whatever the reference audio is. A reference assembled from flat takes teaches flat delivery — 阿迪's voice went flat under exactly that assembly in the 08-09 runs, and the same night's ruling said "adding more flat voices make the voice sound flat." A reference whose every unit carries melodic movement teaches natural variation across the rendered episode. The failure pole is also on record: calm *text* through an energetic reference still shouts (23 of 24 clips, 2026-08-09), because intensity rides the audio the way accent does. Range must therefore be present in the picked takes themselves; no downstream lever adds it.

## The procedure

1. **Generate fresh, model-direct.** Candidates come from the VoiceDesign prompt (the original recipe, or the recipe with only its energy words rewritten). Never draw candidates via ICL from already-good audio — twice ruled, now law in `voice-bakeoff/HOW-TO-GENERATE-VOICES.md`.
2. **Pick by ear for identity at the target energy, with range.** A keep is the character, at the wanted energy, with melodic movement in the take.
3. **A hit fixes the seed.** 星野's two founding keeps both landed at seed 137 across two recipe grades; after that, every wave stayed at 137. New seeds audition new voices, which is only wanted before the voice is found.
4. **Accrete keeps to the ten-second mark with fresh sentences.** Never-repeated sentences through the same recipe and seed, wave after wave, until the keep pile passes 10s of speech. The floor is the RUANCAO lesson: a low-sample reference free-runs.
5. **Assemble keeps verbatim** — the kept files, fades and gaps, nothing regenerated.
6. **Probe before committing.** Render the character's hardest real lines first (for 星野, the row-91 exclamation gauntlet that broke every prior fix) and rule by ear.

Measured on the 星野 campaign: open-search keep rate ran 2 of 58; at the fixed seed the waves yielded 6 more keeps; final reference 11.34s of 8 units; probe verdict 3 of 3 good.

## What this method does not cover

End-of-line acceleration is the checkpoint's own habit and survives any reference composition; the 08-03 end-rate gate (oversample, keep the slowest-ending clean take) remains the production fallback, and the tail-worry on 星野's probe is on record awaiting the full episode. The method also says nothing yet about voices picked before the range criterion existed: 阿迪's current reference was assembled from ship lines picked for calm, and whether a range-lens re-pick improves him is the open question — his fresh render is the listening material for that call.

## Pointers

Boards: `voice-bakeoff/xy-fresh-calm.html` → `xy-fc2.html` → `xy-morelines.html` → `xy-tenmark.html` → `xy-couplemore.html` → `xy-freshref-probe.html`. Rulings: `voice-bakeoff/REF-REGISTRY.json` (fc1 through freshref-probe, 2026-08-09/10). The reference and its provenance: `voice-bakeoff/samples/fresh-calm/星野-fresh-ref-v1.wav` + `fresh-ref-v1.json`. Registration: `voice-bakeoff/ASSEMBLED-REFS.json`.
