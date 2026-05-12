---
type: concept
status: seed
created: 2026-05-06
updated: 2026-05-06
source-count: 1
tags:
  - llm
  - coding
  - agents
  - software
---

# A Return to Code

Vibe coding is a return to the original spirit of programming: making the computer do exactly the thing you want, faster and with less ceremony.

## Core Synthesis

The source frames AI-assisted development as a return to code because it restores the playful, direct loop of intent to executable artifact. The programmer can now describe a desired app, watch an agent build it, test it, correct it, and keep iterating.

This especially changes the economics of small personal software. A niche workflow that would never justify a full product can become a "one-shot app": useful for one person, one task, or one afternoon. The personal app store becomes plausible because the cost of making custom software falls toward the cost of asking clearly.

## What Changed

Traditional software production required significant activation energy: frameworks, setup, dependencies, UI work, hosting, and debugging. Coding agents compress that overhead. They can operate across a codebase, run commands, inspect errors, and keep editing.

The human role shifts toward:

- Defining the desired behavior.
- Providing taste and product judgment.
- Catching wrong assumptions.
- Choosing when to stop.
- Knowing when generated code is good enough and when it needs engineering discipline.

This is why [[wiki/Concepts/Vibe Coding|Vibe Coding]] and [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] should remain separate concepts. Vibe coding is the fast creative loop. Agentic engineering is the professional quality system around that loop.

## Useful Ideas

The personal app store is a strong mental model. Instead of waiting for a startup to build the exact app you need, you can build a rough custom tool for your own workflow.

One-shot apps are valuable even when they are disposable. The output does not have to become a company or durable codebase. Some software is more like a spreadsheet, a script, or a temporary jig.

Code remains special because it is verifiable. Unlike many domains where an LLM can sound right while being wrong, software gives immediate feedback through execution, tests, logs, and user interaction.

Model differences matter. Some models are better at planning, others at editing, others at speed. The operator's job includes matching the model to the task and giving enough context.

## Failure Modes

- Treating disposable code as production code.
- Letting the agent expand scope because implementation feels cheap.
- Losing product taste in a stream of generated features.
- Trusting a large codebase edit without tests or review.
- Forgetting that context windows still limit what the agent truly sees.

## Applications For This Vault

The same pattern applies to knowledge work. This wiki can accumulate small custom tools as needed:

- A markdown search CLI.
- A source-index validator.
- A backlink/orphan-page health check.
- A script that lists uncompiled raw sources.
- A prompt/template generator for ingest runs.

These should be added only when they reduce real maintenance cost.

## Related Concepts

- [[wiki/Concepts/Vibe Coding|Vibe Coding]]
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]

## Sources

- Naval Ravikant and Nivi, "A Return to Code" (2026-04-29). [[raw/sources/A Return to Code|Local source]]

## Open Questions

- Which personal workflows deserve a one-shot app instead of another note, template, or spreadsheet?
- What is my threshold for promoting a vibe-coded tool into maintained software?
- What tests or checks should every agent-built tool in this repo have?
