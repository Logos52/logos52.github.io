# Evolution System

> **Light Path Recommended:** For typical voice improvements use `../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md` ("Run light voice evolution"). This heavy system is the optional advanced/experimental path for full multi-variant scoring and rich audit history.

Description  
A set of skills that run an evolutionary improvement loop for the L3 to L2 voice converter (and future converters). The system generates new prompt variants, evaluates them against test cases using a defined rubric, ranks the results, and applies the winning variant.

Core Skills  
- run-generation - **Main orchestrator, fully executable**. One-command "run a generation on the L3 to L2 converter" executes the complete loop (generate + evaluate all + rank + apply). See its SKILL.md for the self-contained procedure.
- generate-variants - **Executable**. Full population procedure (hybrid mutations) now in SKILL.md.
- evaluate-variant - **Live and executable** — see runner.md + SKILL.md. The fitness function.
- apply-update - **Executable**. Safe apply + full audit history writer + secret scan + rollback. See SKILL.md.

When to Use  
- When you want to automatically improve the quality of L3 to L2 conversions over time.
- Can be triggered manually or wired into the maintenance system.

References  
- references/rubric.md - Evaluation criteria
- references/test_cases/ - Focused test cases
- references/history/ - Generation logs (before/after, scores, notes)

Notes  
This system is designed to run inside Hermes. It uses Grok-4.3 via the current Hermes session for high-quality evaluation. All changes are logged for auditability.

**Current status:** All four skills now have complete executable procedures in their SKILL.md files (no Python, pure Hermes/Grok, self-contained where needed for orchestration). `run-generation` is the primary one-invocation entrypoint for the full L3→L2 voice evolution loop. `evaluate-variant` remains the foundation. Ready for first end-to-end run inside the Hermes TUI. See README.md for quick-start.