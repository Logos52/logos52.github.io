---
type: reference
status: developing
created: 2026-05-17
updated: 2026-05-17
tags:
  - agentic
  - tooling
  - models
  - workflows
  - llm-knowledge-base
---

# Current Agentic LLM Stack

This page documents the models, tools, and workflows used for agentic work on the `llm-knowledge-base` project.

## Current Stack

| Layer              | Tool / Model                  | Purpose                                      | Notes |
|--------------------|-------------------------------|----------------------------------------------|-------|
| **Remote Model**   | Grok 4.3 (via API)            | High-level reasoning, synthesis, framing     | Strong at conceptual work and system-level thinking |
| **Local Model**    | Hermes 3 8B (via Ollama)      | Local execution, file editing, iteration     | Fast local access, fully private |
| **Agent Interface**| Hermes (via Ollama)           | Primary interface for agentic work on the wiki | Direct local model access |
| **Local Runner**   | Ollama                        | Runs local models on this machine            | Currently running `hermes3:8b` |
| **Instructions**   | `AGENTS.md`                   | Project-specific rules and configuration     | Loaded by the agent at startup |

## Model Usage Patterns (Hybrid Approach)

We deliberately use a **hybrid model workflow** rather than relying on a single model:

- **Grok** → Used for high-level thinking, system design, tone calibration, and complex synthesis.
- **Hermes 3 (8B)** → Used for direct file work, editing, auditing, implementation, and tasks that benefit from local file access and privacy.

See [[Hybrid Model Workflows, Grok + Hermes|Hybrid Model Workflows, Grok + Hermes]] for the current division of labor and rationale.

## Configuration

- Hermes is launched with the alias `hermes-kb`, which automatically:
  - Uses `ollama/hermes3:8b`
  - Reads `AGENTS.md`
- Environment variable `OLLAMA_API_BASE=http://localhost:11434` is set for local model access.

## Key Principles

- **Local vs Remote**: Use local models (Hermes) when working directly with files or private material. Use remote models (Grok) when stronger reasoning or conceptual depth is needed.
- **Instructions matter more with smaller models**: Hermes 3 8B requires more explicit and structured instructions than Grok.
- **Context discipline**: Be intentional about what is loaded into context, especially with the 8B model.
- **Private material**: The private/ICS material is treated as high-quality source truth but is **never cited** in public wiki pages.

## Current Limitations

- Only using the 8B version of Hermes 3.
- No advanced agent orchestration yet (single agent per session).
- Limited web access (Playwright not installed).

## Evolution

- **Early 2026**: Primarily used Grok for all work on the knowledge base.
- **May 2026**: Began experimenting with local models. Installed Hermes 3 via Ollama as the primary agent interface for file-level and execution work. Started documenting hybrid model workflows and model-specific instructions in `AGENTS.md`.

## Tooling Wishlist & Future Experiments

- Evaluate Hermes 3 70B (when hardware or workflow allows)
- Explore multi-agent setups (e.g. one agent for research/synthesis, another for editing and review)
- Add better RAG / retrieval capabilities over the full knowledge base
- Test other strong local models (e.g. newer Qwen or Command-R variants)
- Experiment with more structured agent orchestration tools
- Improve context management and long-running agent sessions

## Related Pages

- [[Agentic Engineering|Agentic Engineering]]
- [[Hybrid Model Workflows, Grok + Hermes|Hybrid Model Workflows, Grok + Hermes]]
- [[How Top Performers Learn|How Top Performers Learn]]
- [[Context Engineering|Context Engineering]]
- [[Vibe Coding|Vibe Coding]]
