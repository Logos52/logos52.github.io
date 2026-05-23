---
type: synthesis
status: developing
created: 2026-05-22
updated: 2026-05-22
sources:
  - "https://www.youtube.com/watch?v=gdrPkpXuNks"
  - "https://www.youtube.com/watch?v=0_dSWLOHKng"
  - "https://www.youtube.com/watch?v=4wvLHFgnQZQ"
  - "https://www.youtube.com/watch?v=uGwDuvSqgYI"
  - "https://www.youtube.com/watch?v=s3ccD6m6WKc"
  - "https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md"
tags:
  - cowork
  - agentic
  - workflows
  - memory
  - productivity
---

# Claude Cowork as Personal Work OS

Claude Cowork is a local AI agent environment that turns Claude from a stateless chatbot into a persistent, context-aware operating system for personal and professional work. The key insight is that everything — instructions, memory, domain knowledge, voice — lives in plain markdown files on your machine, which Claude reads at the start of each session. Because it's just files, the system compounds: every rule you teach it, every preference it records, every workstation you build makes the next session better than the last.

## The Core Mechanism

Two files run everything at the root level:

**CLAUDE.md** is the instruction manual. It tells Cowork how to behave — tone, format, behavioral guardrails, routing logic, and pointers to reference files. It loads at the start of every session. Because of this, keeping it lean is critical (see [[#The 300-Line Rule]]).

**MEMORY.md** is the persistent notepad. It stores what Cowork should remember between sessions — active projects and their status, scheduled tasks, and stable facts about you. When you say "remember this," Cowork writes to MEMORY.md. This is how Cowork knows what you were working on last time without you re-explaining it.

The distinction between the two matters: CLAUDE.md holds prescriptive rules (things with "always" or "never"), MEMORY.md holds facts that can change. Mixing them degrades output quality. A useful test: if an entry prescribes behavior, it belongs in CLAUDE.md; if it records a fact or status, it belongs in MEMORY.md.

## Workspace Architecture: Three Levels

The workspace is organized as a hierarchy where rules stack from the top down.

| Level | Name | Analogy | Loads |
|---|---|---|---|
| 0 | Root | Constitution | Every session |
| 1 | Workstations | State law | When task matches routing map |
| 2 | Projects | Local ordinance | When working on that specific project |

**Level 0 — Root** governs everything. The root CLAUDE.md contains: the memory system instructions, behavioral preferences, guardrail rules, a routing map (which workstation to load for which task type), and one-line pointers to reference files. The root MEMORY.md has three sections: active projects and work, scheduled tasks, and core facts about you.

**Level 1 — Workstations** are domains of your life or work, each with its own CLAUDE.md, MEMORY.md, and resources folder. Rules here stack on top of root rules but only apply when that workstation is active. There are two kinds: universal workstations (like Email HQ, which applies across all areas of life) and dedicated workstations (like Personal Finances or Newsletter HQ, which have their own contained world). A routing map entry in the root CLAUDE.md points Cowork to the right workstation based on the task.

**Level 2 — Projects** are subfolders inside workstations for time-bounded work — a specific trip, a corporate workshop, a mortgage refinance. Same structure as workstations: CLAUDE.md, MEMORY.md, resources. Projects are optional; not every workstation needs them.

## PRD-First Philosophy

Before building any workflow, dashboard, or automation inside Cowork, write a Product Requirements Document first. The PRD defines the problem, success criteria, scope, constraints, and a build plan broken into timed phases. This is the blueprint before construction — without it, Cowork can build something plausible but wrong, and you only find out an hour later.

A solid PRD forces three things: Cowork articulates what it is building, it surfaces open questions before starting, and it gets explicit sign-off before any action. This maps directly to the Goal-Driven Execution principle: transform a vague task ("build me a dashboard") into a verifiable goal ("define what the dashboard displays, what data sources feed it, and what done looks like — then build it and verify"). Cowork should not start any substantial build without a stated plan and explicit sign-off.

The PRD-first approach is especially important when setting up the initial workspace, where the first hour should always be building the data layer — setting up the pipelines (calendar, email, notes integrations) before building anything on top of them.

A useful analogy: hour one fills the lake with water (data sources and folder structure). Hours two through four build things on top of the lake — dashboards that visualize investment data, morning briefs that aggregate calendar and email, skills that transform inputs into outputs.

## Behavioral Guardrails

The CLAUDE.md at the root level is not just a routing file — it's a behavioral contract. The Karpathy CLAUDE.md (65 lines, public domain) is one of the clearest examples of what good behavioral guardrails look like: compact, self-testing, and biased toward caution over speed. Its four principles translate directly into Cowork context.

**Think Before Acting.** Before doing anything substantial, Cowork should state its assumptions explicitly. If multiple interpretations of a request exist, it should name them and ask — not pick silently and proceed. If a simpler approach to a build exists, it should say so and push back. The failure mode this prevents: Cowork confidently builds the wrong thing because it inferred intent rather than confirming it.

**Simplicity First.** The minimum action that solves the problem is the right action. No extra workstations beyond what was asked. No speculative features in a dashboard. No flexibility baked into a skill that was never requested. If a task can be handled in a single skill, don't build a workstation for it. Ask: would a thoughtful person look at this output and say it's overcomplicated? If yes, simplify.

**Surgical Changes.** When Cowork edits files — CLAUDE.md, MEMORY.md, resources, project files — it should touch only what the task requires. It should not "clean up" adjacent sections, reformat unrelated content, or refactor things that aren't broken. It should match the existing style and structure of the file it's editing. The test: every changed line should trace directly back to the user's request. If Cowork notices something unrelated that looks wrong, it should name it and ask — not silently fix it.

**Goal-Driven Execution.** For any multi-step task, Cowork should state a brief plan before executing it, with a verification check for each step. Not a long PRD for simple tasks — but a readable statement of what it will do and how it will know it's done. This is the lightweight version of PRD-first: even quick tasks benefit from a one-sentence success criterion before the work starts.

These four principles are worth encoding directly in the root CLAUDE.md, ideally as a compact reference block rather than verbose paragraphs. The Karpathy file itself — 65 lines, no preamble — is a practical model for what a lean, high-signal behavioral instruction block looks like.

## Memory Management

Memory bloat is the primary degradation risk in Cowork over time. As sessions accumulate, both CLAUDE.md and MEMORY.md grow, which wastes tokens and reduces output quality.

**For CLAUDE.md:** The target is 200–250 lines with a hard ceiling at 300. The test for every section: does Cowork need this every session, or only when a specific task comes up? If the latter, replace the section with a one-line pointer to a reference file in the resources folder. Sections like "creating new workstations" or "file naming conventions" don't need to load every session — they should live in reference files and be pulled on demand.

**For MEMORY.md:** The ceiling is 150 lines. When it's breached, the response is always compression and archiving, never raising the ceiling. Each entry should be one to two sentences maximum. Information that's no longer current — projects completed two or three months ago, past decisions, old context — moves to an ARCHIVE.md file. Cowork doesn't read ARCHIVE.md at session start, so it has no token cost; it only loads when you ask about something historical.

Per-workstation and per-project memory files are how experienced Cowork users keep the root MEMORY.md under control. When Cowork needs context on a specific project, it checks the root file to confirm the project exists, then jumps to the project-level memory file for the details. This cascading setup prevents root memory bloat even with months of heavy use.

## The Autonomous Build Pattern

For users who want Cowork to run tasks overnight or in the background, an autonomous builder pattern works well: a pending folder holds PRDs that have been approved; a scheduled task (every 30 minutes or similar) picks up any PRD from the pending folder, builds the project, and moves it to in-progress, then done or failed on completion. Build logs track what was produced. A mission control dashboard can visualize the queue and status.

This pattern works best when the laptop is awake or when running on a VPS, since local Cowork agents stop when the machine sleeps. The main use case: drop a brief before bed, wake up to a completed artifact.

## Skills vs Workstations

The distinction is simple: a workstation is a place you work; a skill is a thing you do.

A workstation is an ongoing domain with accumulated context, a voice, and evolving memory — the right structure when you'll return to the same area repeatedly and want Cowork to remember what happened last time. A skill is a repeatable process you want executed the same way every time — a subject line generator, a session audit, a meeting prep checklist. Skills run on autopilot: the input changes but the output structure and process are fixed.

Common early-build skills worth having: a today skill (on-demand morning brief), a research skill (deep dive on a specific topic or ticker), a prep skill (meeting context from calendar and transcripts), and a session audit skill (scans the session at the end and writes any unsaved preferences to memory).

## Connectors, Skills, and Plugins

Skills are just one layer of the Cowork extension ecosystem. There are three distinct types worth understanding:

**Connectors** link Cowork to third-party services — Gmail, Google Calendar, Google Drive, Microsoft 365, Slack, Notion, and many others. A connector is what allows Cowork to triage your actual inbox, pull today's calendar into a morning brief, or read files from Drive without manually uploading them. Without connectors, Cowork operates only on local files. With them, it becomes the orchestration layer across your tools.

**Skills** package repeatable workflows as portable instruction files — stored locally, shareable with others, or downloaded from the community. A brand-skill is a good example: point Cowork at your brand assets (logo screenshots, website colors), have it generate a brand book, then create a skill from that process so any future visual output gets the same treatment automatically. Skills can be invoked explicitly (type `apply brand`) or triggered automatically when Cowork recognizes the context.

**Plugins** bundle connectors and skills together for a specific domain. The Finance plugin, for instance, packages skills for financial statements, audit support, and close management alongside connectors like Snowflake, BigQuery, Gmail, and Slack. Plugins are the highest-leverage entry point for domain-specific workflows — especially for business use cases where multiple tools and skill types need to work together from day one.

The **Productivity Plugin** deserves a specific note: it is the fastest way to bootstrap the memory system for any new project. When initiated, it creates `tasks.md`, a dashboard, and a directory structure, and sets up the CLAUDE.md and MEMORY.md files automatically. Rather than hand-crafting these files from scratch, let the plugin do it — then customize from there. Anthropic built this, and it is more sophisticated than most manual setups.

## Cowork + Claude Code

For users who start building larger, more complex projects inside Cowork, there is a natural ceiling where Cowork's general capability is not enough. The escape valve is Claude Code — the dedicated coding agent in the same desktop app. The workflow is straightforward: use Cowork to define the project, build the architecture, and manage memory and workflows; switch to Claude Code when the build requires actual programming capability, complex file manipulation, or multi-file code that Cowork would handle inconsistently. The two share the same workspace folder, so handoff is just a matter of pointing Claude Code at the same directory. This combination — Cowork for orchestration and context, Claude Code for execution — is the highest-leverage setup for technical users building nontrivial tools.

## Migrating Claude Projects into Cowork

Claude Projects have two key limitations that Cowork resolves: project instructions can't be edited programmatically, and the AI-generated project memory can't be structured or directly edited. Migration is straightforward — project instructions become the workstation CLAUDE.md, project memory becomes the workstation MEMORY.md, and knowledge files move into the workstation resources folder. After migration, every change to instructions or memory can be made by telling Cowork directly, and Cowork writes the change to the correct file itself. The routing map in the root CLAUDE.md gets a new entry pointing to the new workstation.

## Practical Rules of Thumb

- Use Obsidian as a viewer and editor for markdown files. It renders them properly and makes editing far less painful. No need to learn Obsidian's other features — it's just a lens.
- Use Sonnet for roughly 80% of tasks. Switch to Opus only when a task has three or more interdependent steps. The cost difference is significant.
- Start with two or three workstations, not twenty. Let the system grow from real need. Premature workstation sprawl creates maintenance overhead before you understand how the pieces interact.
- Run `/session audit` at the end of every session. This triggers Cowork to scan the conversation for unsaved preferences and write them to memory before the session closes.
- Never repeat the same rule in multiple files. Voice principles set at root level should not be restated in every workstation. Workstation files should only contain what's specific to that domain.
- Read the [Karpathy CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md) before writing your root behavioral guardrails. It's 65 lines. It shows what lean, high-signal instructions look like in practice — and how a single stated tradeoff ("these guidelines bias toward caution over speed") does more than a page of caveats.

## Cowork as Thinking Companion

Most Cowork frameworks treat the workspace as a productivity and build environment. There is a distinct use case that deserves separate treatment: Cowork as a thinking partner operating alongside a personal knowledge base.

The key insight here is that structured notes are the best context you can give an AI. A well-linked Obsidian vault — notes with metadata, ranked importance, maps of content, and cross-references — gives Cowork a navigable model of your thinking rather than a flat pile of files. This is why "context architecture beats prompting": a system of well-organized notes outperforms any single clever prompt, because Cowork can find and surface what's relevant rather than relying on you to pre-specify it.

Several concrete applications follow from this:

**The personal dossier.** Before relying on Cowork for any meaningful work, have it scan your vault and generate a master digest — your intellectual DNA, values, recurring interests, current projects by rank, and the questions you keep returning to. Paste this into Cowork's global personal preferences settings. Now every session starts with Cowork already knowing who you are, which changes the quality of responses more than almost any other setup step.

**Weekly review.** Rather than manually reviewing your notes, ask Cowork for a holistic briefing: active projects by rank, recent intellectual work, open questions, and — critically — what you might be forgetting. Because it has read your actual notes, this isn't a generic prompt output; it's a briefing grounded in your real state.

**Synthesis across sources.** When you've accumulated notes across a research area, Cowork can identify convergent themes, surface contradictions between sources and your own frameworks, and generate jumping-off points for your own thinking. The output is a markdown file that lives in your vault — persistent, editable, and linkable to other notes. The AI surfaces tensions; resolving them remains yours.

**Maps of content.** Cowork can generate maps of content across your vault — surfacing notes that connect to a theme you're developing, even if you haven't explicitly linked them. This works best when notes are already structured with metadata and linked maps, because those give Cowork a navigable top-level understanding rather than a flat search.

The framing that makes this coherent: Cowork is not replacing your thinking system. It's reading it, working inside it, and writing back to it. Obsidian (or any markdown-based knowledge base) remains the source of truth; Cowork is the agent that can traverse it, synthesize across it, and help you see what's there.

## Related Pages

- [[Current Agentic LLM Stack]]
- [[LLM Knowledge Systems]]
- [[Knowledge Base as Thinking Partner]]
- [[Agentic Engineering]]
- [Karpathy CLAUDE.md — Behavioral Guidelines](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md)
