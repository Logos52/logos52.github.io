# References

This folder contains the supporting materials used by the evolutionary skills.

## Contents

- `rubric.md` — Current evaluation rubric for scoring L3 → L2 converter variants.
- `test_cases/` — Focused test cases used to evaluate prompt variants.
- `history/` — Records of each evolutionary generation (before/after, scores, notes, and which variant won).

## Notes

- These files (`rubric.md`, `test_cases/`, `history/`) are the source of truth for the *heavy* evolutionary system.
- For the recommended lightweight daily path, see `../../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md` and its `voice-changelog.md` (one-line appends only).
- The history folder will be populated automatically by the `apply-update` skill when the heavy path is used. Light-mode changes use the minimal `voice-changelog.md` instead.
- See the parent `../README.md` for clear guidance on light vs. heavy.