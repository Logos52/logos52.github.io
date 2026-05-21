# Kanban Integration for l3-to-l2-voice-converter

When operating on the `kb-synthesis` board:

1. When a task enters the "L3 → L2 Conversion" column, run the normal converter logic.
2. After successful conversion, move the task to "L2 Ready".
3. Always add a comment with:
   - Summary of changes made
   - Which rules from style-feedback.md were applied
   - Link to the generated L2 draft

Example comment:
```
Converted task #42 using current converter + latest style-feedback.
Applied rules from style-feedback.md (2026-05-18 Core Operator Voice Refinements + later entries).
Output written to outputs/L2/ready/2026-05-22-Task42-Title-L2.md (following tiered L3/L2 structure).
Moved to L2 Ready.
```

(See `outputs/L2/README.md` and `light-voice-evolution/SKILL.md` for current naming and the recommended light evolution path.)
