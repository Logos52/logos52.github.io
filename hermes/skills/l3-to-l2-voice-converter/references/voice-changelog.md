# Voice Changelog

Minimal, one-line log of changes made to the L3 → L2 voice converter or produced L2 artifacts via the **light voice evolution** skill (or small manual tweaks).

This is the lightweight companion to `style-feedback.md`. It records *what* was changed and when, with almost zero ceremony. For rich multi-variant scoring, full before/after diffs, and detailed audit history, use the optional heavy tools in `hermes/skills/evolution/` (which write to `references/history/`).

## Entry Format

Append one line per change at the end of the file (the light skill does this automatically on "apply"):

```
YYYY-MM-DD HH:MM | <concise description of the change or file(s)> | <source / invocation> | <optional note or version>
```

- Keep the description under ~80 characters when possible.
- Source examples: `light-voice-evolution (scan of 2026-05-20 sessions)`, `manual edit via converter run`, `light-voice-evolution on raw/sessions/maintenence-*.md`.
- The light skill always uses the `outputs/L3/` and `outputs/L2/` tiered locations for any generated drafts.

## Example Entries

2026-05-22 09:15 | Initialized voice-changelog.md for light evolution tracking | light-voice-evolution setup
2026-05-22 14:22 | Strengthened Post-Draft Silent Audit language in converter Pre-Write Integrity Pass | light-voice-evolution (flexible scan of style-feedback + recent L3) | converter updated
2026-05-22 15:40 | Produced polished L2 for 2026-05-20-Self-Regulation-Hub-Audit-L3.md | light-voice-evolution "Polish this L3..." | outputs/L2/2026-05-22-Self-Regulation-Hub-Audit-L2.md
2026-05-22 16:55 | Phase 5 verification run of light voice evolution on raw/sessions/maintenence-2026-05-18.md (and self-regulation audit sample); produced example L2 in tiered outputs + confirmed naming/changelog append | light-voice-evolution (verification test per plan Phase 5) | outputs/L2/2026-05-22-Verification-Light-Evolution-Maintenence-L2.md
2026-05-22 18:30 | Produced L2 versions for two real L4 clippings via light voice evolution (Hermes analyst + Gbrain/Lossless) | light-voice-evolution on outputs/L3/2026-05-22-*-L3.md | outputs/L2/2026-05-22-Hermes-as-a-Real-time-Analyst-L2.md + 2026-05-22-Gbrain-and-Lossless-Persistent-Knowledge-L2.md
2026-05-22 19:10 | Full L4→L3→L2 cycle on new clipping using light voice evolution (Obsidian Dashboard) | light-voice-evolution on outputs/L3/2026-05-22-Obsidian-Dashboard-L3.md (new style-feedback rules applied) | outputs/L2/2026-05-22-Obsidian-Dashboard-L2.md
2026-05-22 19:45 | L4→L3→L2 on Hermes "SuperGrok" clipping with current voice standards | light voice evolution on new L3 | outputs/L3/2026-05-22-Hermes-Agent-Go-SuperGrok-L3.md + outputs/L2/2026-05-22-Hermes-Agent-Go-SuperGrok-L2.md
2026-05-22 21:10 | Recalibrated 30-Day Mindset Challenge L2 to middle density (precise operator language, no "scary/bad" oversimplification, full week depth from raw sources, artifact-as-subject rule applied) | light voice evolution + direct user feedback on overcorrection | outputs/L2/2026-05-22-30-Day-Mindset-Challenge-Full-Synthesis-L2.md + outputs/L2/ready version

## Notes

- **Primary daily improvement loop remains manual and zero-ceremony**: After any L2 → L1 (wiki) promotion, append concrete rules + before/after examples to `style-feedback.md`. The converter consults it on every run.
- The light-voice-evolution skill is the recommended way to turn accumulated feedback + real L3 usage into prompt or artifact improvements.
- This file is append-only for normal use. Do not rewrite history.
- Old heavy evolutionary runs (if performed) may still reference the richer `evolution/references/history/` instead of (or in addition to) this log.

## References

- `style-feedback.md` (the "why" — rules and examples)
- `../light-voice-evolution/SKILL.md` (the tool that appends here)
- `converter.md` (the live prompt being improved)
- `outputs/L3/` and `outputs/L2/` (canonical homes for any L3/L2 artifacts produced during light evolution runs)
