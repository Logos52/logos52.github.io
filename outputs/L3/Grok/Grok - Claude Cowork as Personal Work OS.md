# Claude Cowork as Personal OS

**L3 Synthesis** — Focused on the core Claude Cowork sources (Tina Huang + Jeff Su), plus additional fundamentals and PKM-oriented material from Nick Milo, recent Tina Huang fundamentals (scheduled tasks, projects, plugins, mission control), Jeff Su's practical "gold standard" tips (Obsidian lens, memory cascading, project transplant, skill-vs-workstation discipline), and Nick Milo's IdeaVerse + Obsidian integration patterns.

---

## Core Thesis

Claude Cowork can be turned from a conversational AI into a lightweight **Personal Operating System** — a persistent, proactive workspace that handles daily execution, project building, memory management, and background work. When given the right architecture (folder structure + instruction files + memory system) and operating principles (PRDs, lean instructions, memory discipline), it becomes less of a tool you talk to and more of a system that runs *with* you.

The quality of the OS depends far more on the **architecture and operating discipline** you impose than on the raw intelligence of the model.

---

## Two Philosophies of Claude Cowork

There are currently two distinct approaches visible in the source material:

### 1. The Ambitious Full OS (Tina Huang style)
- Treats Cowork as a complete personal operating system.
- Runs autonomous building overnight (via scheduled tasks + pending/in-progress/done folders).
- Produces daily digests (morning briefs) pulling from email, calendar, Slack, investments, etc.
- Heavy use of **PRDs (Product Requirements Documents)** before any significant build.
- Strong emphasis on pushback, clarification, aggressive note-taking, and reversibility.
- Mission Control / dashboard layer for visibility into what the system is building.

This approach maximizes output and autonomy but requires more setup, ongoing memory management, and comfort with AI doing work while you sleep.

### 2. The Sustainable Simple System (Jeff Su style)
- Treats Cowork as a **reliable co-worker** rather than a full autonomous OS.
- Uses a clear 3-level hierarchy:
  - Level 0: Root (global instructions + memory)
  - Level 1: Workstations (persistent areas of responsibility)
  - Level 2: Projects (temporary, goal-oriented work)
- Relies heavily on well-structured `CLAUDE.md` and `MEMORY.md` files.
- Focuses on making the system feel like an extension of the user’s own thinking and voice.
- Prioritizes sustainability and low maintenance over maximum autonomy.

This approach is more accessible for most people and reduces the risk of the workspace becoming bloated or incoherent over time.

---

## Core Operating Principles

From the sources, several non-negotiable principles emerge for running Cowork effectively as a personal OS:

### Claude Cowork for Personal Knowledge Management

One emerging use case (highlighted especially by Nick Milo of Linking Your Thinking) is using Claude Cowork as a **thinking companion** tightly integrated with a personal knowledge management system (particularly Obsidian / IdeaVerse).

In this mode, Cowork is pointed at note folders (or the whole vault) and used for concrete operations that compound the knowledge base:
- Building a living personal "intellectual dossier" or "About Me" digest from highest-signal Atlas notes, values, goals, and frameworks; pasting the result into personal preferences so every response is grounded in the user's actual thinking DNA.
- Organizing and renaming large unstructured sets (screenshots, clippings) according to ACE (Atlas for knowledge, Calendar for time-based, Efforts for outputs), producing timestamped files + a searchable markdown index, then turning the successful workflow into a reusable, schedulable skill.
- Running periodic holistic briefings / weekly reviews that surface active projects by rank, progress made, open questions, what you might be forgetting, and suggested next actions — writing the artifact back into the IdeaVerse as a persistent building block.
- Synthesizing clusters of notes: extracting convergent themes, explicitly surfacing where sources contradict or extend the user's existing frameworks, and proposing curriculum or thinking arcs — leaving the resolution and deeper integration to the human.
- Quick beautification or metadata tasks (pull relevant images, apply consistent formatting) while the human stays in the loop for judgment.

This approach treats the workspace less as a pure productivity OS and more as an extension of the user's second brain. It requires strong folder hygiene, intentional linking, and a clear sense of where AI is allowed to propose vs. where the human must decide. The output artifacts (briefings, theme maps, organized indexes) become first-class citizens in the knowledge base rather than ephemeral chat logs.

### Exemplar: Andrej Karpathy’s CLAUDE.md

A particularly strong real-world example of a lean, high-signal instruction file is Andrej Karpathy’s public `CLAUDE.md`. It focuses on four core behavioral guidelines for coding tasks:

- **Think Before Coding**: Explicitly state assumptions, surface tradeoffs, ask clarifying questions, and push back when a plan seems off.
- **Simplicity First**: Write the minimum code that solves the stated problem. Avoid speculative features, over-abstraction, or flexibility that wasn’t requested.
- **Surgical Changes**: Only touch what is necessary. Match existing style. Do not refactor unrelated code.
- **Goal-Driven Execution**: Convert vague requests into verifiable goals with clear success criteria and checkpoints.

This file is deliberately narrow and opinionated. It demonstrates the power of a small set of strong principles over long, exhaustive instruction lists. It aligns closely with the “keep it lean” philosophy seen in sustainable Cowork setups.

### 1. PRD First (Especially for Anything Non-Trivial)
Before building software, workflows, or complex systems, force Cowork to write a detailed Product Requirements Document. This includes:
- Problem statement
- Success criteria
- Scope and constraints
- Build plan
- Open questions + explicit sign-off

This dramatically reduces the chance of the system building the wrong thing.

### 2. Keep Root Instructions Lean (The 300-Line Rule + CLAUDE.md vs MEMORY.md Discipline)
The main `CLAUDE.md` (or equivalent root instruction file) should stay under ~300 lines (ideally 200-250). Anything longer becomes hard for the model to follow consistently. Move detailed, context-specific instructions into workstations or projects.

A key maintenance practice is the explicit test for placement: if an entry is prescriptive ("always do X", "never do Y", behavioral guardrails, routing rules), it belongs in CLAUDE.md. If it is a changeable fact or status ("my current project uses X tool", "last week's decision was Y"), it belongs in MEMORY.md. Running this audit regularly (or asking Cowork to flag misplaced entries) prevents the two files from polluting each other and keeps both lean and purposeful.

For day-to-day editing of these files, many practitioners open the Cowork workspace folder as an Obsidian vault solely as a high-quality markdown lens (headings, bullets, easy search/zoom). No deep Obsidian features are required; it simply makes the instruction and memory files readable and editable without token waste or visual noise.

### 3. Memory Requires Active Dieting
Cowork’s memory system will bloat over time. Without deliberate management (archiving old projects, summarizing, maintaining a clean `MEMORY.md`), performance and coherence degrade. Memory hygiene is not optional — it is core infrastructure.

### 4. Right Architecture > Raw Intelligence
The folder hierarchy, instruction files, and memory design matter more than using the most powerful model. A well-architected simple system will outperform a poorly architected ambitious one.

### 5. Skills vs Workstations (and the Skill Check)
Not everything needs to be a full workstation. Simple, repeatable tasks are often better handled as **skills** (focused instruction sets). Over-creating workstations creates unnecessary complexity.

The practical test: if it is an ongoing area of responsibility with its own voice, accumulated context, and evolving decisions, treat it as a workstation (with dedicated CLAUDE.md + MEMORY.md). If it is a repeatable process you want executed the same way every time (checklist, formatting, scoring), package it as a reusable skill that can run more autonomously.

A related discipline is the "project transplant": legacy work that began in Claude's Projects feature is migrated into Cowork workstations so that instructions and memory become editable markdown files under your control rather than opaque UI fields. This enables compounding (every improvement today improves tomorrow's output) and proper cascading memory.

### 6. Daily Execution Rhythm and Scaffolding (Scheduled Tasks, Plugins, Connectors)
Ambitious setups use scheduled tasks for recurring work (morning briefs drawn from calendar + email, portfolio digests, inbox triage) that run on a timer and deliver to notes or dashboards. Productivity plugins can scaffold a new project or workstation with task.md, dashboard, directory, and memory files automatically, plus a /update command to keep memory current without manual dieting.

Connectors (Gmail, Calendar, Drive, Slack, etc.) and plugins (finance, productivity) extend reach without custom code. For heavy coding or complex builds, escalate from Cowork to the specialized Code agent while sharing the same folder context. These tools lower the activation energy for the "always-on" layer of the OS while still requiring human judgment on what belongs in the autonomous vs. co-pilot layer.

### 7. The Gold Standard Problem (Why Setups Degrade)
Without deliberate architecture and maintenance disciplines, Cowork workspaces reliably degrade: root files bloat past the point of reliable instruction-following, token costs explode, output quality drops, and the system begins to feel like a high-maintenance chat rather than a compounding OS. The sustainable path treats the absence of a universal "gold standard" as a prompt to adopt a small set of non-negotiable hygiene rules (300-line ceiling with active relocation, CLAUDE/MEMORY test, archive + cascading memory, workstation vs skill test, Obsidian lens for maintenance, project transplant for legacy work) rather than hoping raw model intelligence or more plugins will compensate. The ambitious path adds scheduled automation and mission-control visibility but still requires the same underlying memory and instruction diet to remain coherent over months of daily use.

---

## How It Functions as a Personal OS

When set up well, Claude Cowork can handle several operating-system-like functions:

- **Daily Execution Layer** — Scheduled morning briefs or daily digests (calendar + email + personal priorities) delivered to notes or a mission-control dashboard; weekly holistic briefings that rank active projects, surface progress, open questions, and "what you might be forgetting."
- **Project & Build Layer** — Autonomous or semi-autonomous creation of tools, dashboards, trackers, and workflows, with projects providing persistent context (instructions + memory + resources) and the ability to escalate complex coding to the specialized Code agent.
- **Memory & Context Layer** — Persistent, queryable, cascading memory (root + per-workstation + per-project) plus an archive layer that is loaded only on demand; personal intellectual dossiers that ground every interaction in the user's actual thinking.
- **Decision Support Layer** — Prepping for meetings, researching, reviewing expenses, synthesizing note clusters, and explicitly surfacing contradictions between new sources and existing frameworks for the human to resolve.
- **Background Processing & Skill Library** — Work that happens on a timer (monthly screenshot organization, inbox triage); reusable skills that encode "exactly how I like this done" so the same task produces consistent, personalized results without re-explaining.

The most advanced setups combine a **daily operating rhythm** (scheduled briefs + mission control visibility) with **background building capacity** and a growing library of personal skills, all while keeping the human firmly in the judgment seat for anything that involves taste, priority, or irreversible decisions.

---

## Relationship to the Broader System

Claude Cowork sits at the intersection of several existing threads in the knowledge base:

- **Attention Management & Focus Management**: A well-run Cowork system can reduce cognitive load and decisional delays, but a poorly managed one can become another source of context switching and shallow attention.
- **Knowledge Base as Thinking Partner**: Cowork can act as an active builder and maintainer of the knowledge base (especially when pointed at an Obsidian IdeaVerse or wiki folder). It produces persistent artifacts (dossiers, briefings, theme maps, organized indexes, contradiction analyses) that live inside the user's notes rather than disappearing into chat history; the Obsidian vault simultaneously serves as the high-signal source of personal context and the final home for everything Cowork generates.
- **Self-Regulation**: Running Cowork effectively requires strong metacognition — knowing when to let it run autonomously vs when to stay in the loop.
- **Agentic Systems**: Cowork is one concrete implementation of turning a frontier model into a persistent, multi-project agent. It shares DNA with Hermes-style agents but is more workspace-oriented.

---

## Open Questions

- What is the right balance between autonomy and oversight for a personal OS?
- How should memory architecture evolve as the number of active projects grows?
- How does heavy Cowork usage affect the user’s own thinking and taste over time?
- When does a Cowork-style system start competing with (or replacing) parts of a traditional second brain / knowledge base?
- What are the failure modes of running your entire operation through one AI workspace?

---

**Sources (primary focus):**
- My Full Claude Cowork Setup (steal my workflows!) — Tina Huang
- My Simple Claude Cowork System (for normal people) — Jeff Su
- Top 5 Claude Cowork Tips I Wish I Knew from Day One — Jeff Su (original)
- Claude Cowork Fundamentals In 22 Minutes — Tina Huang (recent; scheduled tasks, projects + productivity plugin, mission control dashboards, connectors/plugins/skills, Code escalation)
- Give Me 20 Minutes. I'll Teach You 80% of Claude Cowork — Nick Milo (IdeaVerse, ACE framework, personal dossier, weekly holistic briefings, skill-ifying organization, surfacing contradictions for human resolution)
- Top 5 Claude Cowork Tips I Wish I Knew from Day One (1) — Jeff Su (recent; Obsidian as MD translator, CLAUDE.md vs MEMORY.md test, cascading memory per workstation/project, project transplant from Claude Projects, skill-vs-workstation test, human judgment in workflows)

Additional context drawn from related agent and workflow material in the inbox.