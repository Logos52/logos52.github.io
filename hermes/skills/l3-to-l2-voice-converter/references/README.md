# References for L3 → L2 Voice Converter Skill

This folder contains the living references used by the `l3-to-l2-voice-converter` skill and its light evolution companion.

## Current References (Canonical)

- `style-feedback.md` — Living log of voice/signal refinements from real L2 → L1 (wiki) edits. Consulted on every converter run via the Pre-Write Integrity Pass. Primary source for daily improvement. (See "How to Add New Feedback" inside it.)
- `voice-changelog.md` — Minimal one-line append log for changes applied via the light voice evolution skill or small manual converter tweaks. (Created as part of the lighter evolution plan.)
- `feedback/` — (Reserved for future structured feedback artifacts; currently empty.)

**External canonical sources (do not duplicate here unless symlinked):**
- Writing Standards: `../../../00 Command Center/Writing Standards.md` (core principles baked into `../converter.md`; style-feedback provides the runtime Internal Check)
- Evaluation Rubric & Test Cases (heavy evolution only): `../../evolution/references/rubric.md` and `../../evolution/references/test_cases/` (the 4 focused cases; not loaded at runtime by the daily converter or light skill)
- Tiered output homes: `outputs/L3/` and `outputs/L2/` (with their own READMEs documenting naming `YYYY-MM-DD-*-L3.md` / `-L2.md`, workflow, and L3 → L2 → L1 promotion)

## Recommended Workflow (Light Path Default)
See the sibling `../light-voice-evolution/SKILL.md` and the top-level skill guidance in `../SKILL.md`. After any L2 → L1 edit, append to `style-feedback.md`. Use "Run light voice evolution" for synthesis/proposals. Heavy evolution tools (in `../../evolution/`) are available for scored experiments.

## Recommended Setup (Symlinks if desired)

For local convenience inside this references/ folder you may symlink key externals:

```bash
ln -s "../../../00 Command Center/Writing Standards.md" references/writing-standards.md
# Test cases and rubric remain in the evolution/ tree (heavy path only)
```

The light skill and converter are deliberately designed to read the canonical locations directly, so symlinks are optional.

Update links and this README as the system evolves (light path + tiered outputs are now the norm).