# Hermes Agent

Hermes functions as an autonomous operator for your work. It maintains continuity across sessions, writes its own tools, and moves projects forward without constant direction.

The core problem it solves is the repeated context tax of having to re-explain your preferences, projects, conventions, and history every time a new session begins. Hermes treats the agent as a long-term collaborator that lives in your filesystem, learns from corrections, and compounds capability over time.

## Why Hermes

Most agents are rebuilt from scratch with every new conversation. Hermes is designed to accumulate understanding instead. It keeps a persistent record of how you work, what you care about, and what you’ve already solved. The operating philosophy is simple: the highest-leverage use of an agent is not faster answers, but removing the constant need to re-establish context.

This is achieved through a small set of high-leverage mechanisms: a strong identity defined in [[SOUL.md]], tiered memory that survives restarts, and the ability for the agent to write, validate, and improve its own skills over time.

## Hermes Agent vs Grok Build

Grok Build excels at rapid, high-quality generation in a single pass. It is best when you want a clean artifact quickly without ongoing state.

Hermes is built for sustained, stateful work. It remembers corrections from previous sessions, knows which projects are active, and can continue tasks across days. Where Grok Build is a powerful generator, Hermes is a persistent runtime with its own memory system, skill evolution loop, and long-term state.

Use Grok Build for speed and fresh starts. Use Hermes when the work has history, ongoing context, or requires the agent to operate with accumulated knowledge.

## Core Operating Model

Hermes runs on four main components:

- **SOUL.md**: The operating contract that defines how Hermes communicates, when it should push back, what it can do autonomously, and what quality of output it must maintain. This file sets the agent’s identity more than the model or tools do.
- **Three-tier memory**: Short-term context for the current turn, mid-term memory for the session, and long-term persistent memory that survives across restarts and is searchable.
- **Self-evolving skills**: Hermes can create, test, and refine its own skills. The GEPA engine runs in the background to validate and prune them.
- **Autonomy controls**: You set how much the agent is allowed to act without asking, ranging from conservative to highly independent.

## Useful Commands & Patterns

These commands and workflows appear most frequently in effective Hermes usage:

- `hermes run` — Start a session with full memory and skills loaded.
- `hermes skills list` — View available skills and their current status.
- `hermes memory search <query>` — Search across long-term memory.
- `hermes config set model <name>` — Change the underlying model for the active profile.
- `hermes plugins install <repo>` — Install plugins such as lossless-hermes-py.
- `hermes agent create <name>` — Create a new specialized agent with its own SOUL and memory.
- `hermes evolve` — Trigger the skill evolution and pruning process.
- `hermes session summarize` — Generate a structured session summary for `raw/sessions/`.

Effective patterns include:

- Maintain a strong [[SOUL.md]] and review it when behavior starts to drift.
- Create a session summary after any substantial work so future sessions inherit the context.
- Run separate agents for distinct roles instead of overloading a single agent.
- Let Hermes write skills for repetitive tasks rather than repeating instructions.
- Periodically run the evolution loop to remove low-value skills and strengthen useful ones.

## Hermes Skills for Wiki Work

Hermes includes several skills that integrate directly with wiki maintenance and synthesis work. These are particularly useful when operating an LLM-maintained knowledge base as described in [[Agentic Engineering]].

- **obsidian** — Read, search, create, and edit notes inside an Obsidian vault with full structural awareness.
- **synthesis-page-writing** — Enforces operational, high-signal writing standards and removes meta-framing.
- **llm-wiki-maintenance** — Performs link validation, taxonomy consistency, and structural audits across the wiki.
- **wiki-operational-style** — Applies a consistent operator-first voice across synthesis and diagnostic pages.
- **note-taking** — Supports structured capture and lightweight note operations that complement Obsidian workflows.

These skills are most effective when loaded together (especially `obsidian` + `synthesis-page-writing`) during active wiki work.

## When to Use Hermes

Use Hermes when the work meets any of these conditions:

- It spans multiple sessions or days
- You have recurring preferences or corrections the agent should internalize
- You want the agent to maintain project state and continue work between your active periods
- You are managing multiple specialized agents rather than one general-purpose one

For quick, stateless generation or pure exploration, lighter tools are often more appropriate.

---

**Related Pages**
- [[Agentic Engineering]]
- [[SOUL.md]]