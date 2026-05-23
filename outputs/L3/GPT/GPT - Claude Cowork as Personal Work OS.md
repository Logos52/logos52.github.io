---
type: l3-synthesis
status: draft
created: 2026-05-22
updated: 2026-05-22
source-count: 8
topics:
  - claude-cowork
  - ai-operating-system
  - agentic-workflows
  - context-engineering
  - personal-knowledge-systems
sources:
  - "[[raw/inbox/My Simple Claude Cowork System (for normal people)|My Simple Claude Cowork System]]"
  - "[[raw/inbox/Top 5 Claude Cowork Tips I Wish I Knew from Day One|Top 5 Claude Cowork Tips]]"
  - "[[raw/inbox/My Full Claude Cowork Setup (steal my workflows!)|My Full Claude Cowork Setup]]"
  - "[[raw/inbox/Using Claude Code The Unreasonable Effectiveness of HTML|Using Claude Code: The Unreasonable Effectiveness of HTML]]"
  - "[andrej-karpathy-skills/CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md)"
  - "[[raw/inbox/Claude Cowork Fundamentals In 22 Minutes|Claude Cowork Fundamentals In 22 Minutes]]"
  - "[[raw/inbox/Give Me 20 Minutes. I'll Teach You 80% of Claude Cowork|Give Me 20 Minutes. I'll Teach You 80% of Claude Cowork]]"
  - "[[raw/inbox/Top 5 Claude Cowork Tips I Wish I Knew from Day One 1|Top 5 Claude Cowork Tips I Wish I Knew from Day One 1]]"
---

# Claude Cowork as Personal Work OS

Claude Cowork becomes useful when it stops being treated as a smarter chat window and starts being treated as a local operating layer for work. The core shift is from prompting to infrastructure: persistent instructions, layered memory, workstation folders, reusable resources, and explicit build protocols. The workspace is not just a place where Claude reads files. It is a context system that teaches Claude where different kinds of work live, what rules apply there, what has happened before, and what should be preserved for next time.

The eight sources in this bundle point toward a practical architecture:

- Jeff Su's beginner setup explains the root/workstation/project hierarchy and the basic memory model.
- Jeff Su's follow-up tips explain how to prevent the workspace from degrading through bloated rules, bloated memory, and misplaced context.
- Tina Huang's setup extends the system into PRD-led builds, dashboards, recurring jobs, and autonomous overnight execution.
- The HTML article adds a richer output/interface layer: when work becomes too complex for markdown plans, Claude can produce explorable HTML artifacts, dashboards, prototypes, and review tools.
- The `andrej-karpathy-skills` `CLAUDE.md` adds a coding-agent discipline layer: think before coding, prefer simplicity, make surgical changes, and define verifiable goals.
- Tina Huang's fundamentals tutorial adds the product surface: Cowork as a local AI agent with skills, connectors, plugins, scheduled tasks, projects, and Claude Code escalation.
- Nick Milo's tutorial adds the knowledge-work surface: Cowork as an Obsidian-aware thinking partner that can build dossiers, organize files, synthesize linked notes, and create maps of content.
- The duplicate Jeff Su `Top 5` clipping appears to be a shorter copy of the same source; it reinforces the existing maintenance principles rather than changing the synthesis.

The combined lesson: a Claude Cowork system should be designed like a personal work OS with a small kernel, specialized applications, memory hygiene, reviewable interfaces, and strong operating discipline.

## Core Model

Claude Cowork runs on ordinary files. That is the deceptively simple foundation. A `CLAUDE.md` file tells Claude how to behave. A `memory.md` file tells Claude what is currently true or worth remembering. Resource files hold longer reference material that should be loaded only when relevant. Workstation folders apply this same pattern to recurring areas of work.

At the product level, Cowork is best understood as the middle mode between chat and code. Chat is the normal conversational surface. Claude Code is the specialized coding agent. Cowork is the local AI agent for nontechnical file, app, project, and workflow operations. It can see a permitted folder, inspect files, modify or create artifacts, use connectors, run skills, schedule recurring tasks, and maintain project memory.

This distinction matters because Cowork is not merely "Claude with files." It is a local execution environment. The user chooses a working folder, grants access, watches progress, stops or redirects if needed, and gradually teaches the system how work should be done.

The beginner mental model is a three-level hierarchy:

| Level | Scope | Files | Purpose |
| --- | --- | --- | --- |
| Root | Entire workspace | `CLAUDE.md`, `memory.md`, `00_resources/` | Global rules, routing, active projects, durable personal context |
| Workstation | Ongoing area of work | workstation `CLAUDE.md`, `memory.md`, `resources/` | Area-specific rules, workflows, examples, conventions |
| Project | Specific initiative | project `CLAUDE.md`, `memory.md`, `resources/` | Project status, decisions, deliverables, local context |

The analogy is constitutional: root rules apply everywhere, workstation rules apply only inside that area, and project rules apply only inside a specific initiative. A newsletter workstation can have editorial conventions. An email workstation can have thread-handling rules. A personal finance workstation can have category taxonomies and spending trackers. The root should know these places exist, but it should not carry all of their detail.

The point is not folder neatness. The point is relevant context. Claude performs better when the system can surface the right amount of context at the right level of specificity.

## Capability Layers

The new fundamentals source clarifies that Cowork has several capability layers, each with a different job.

| Layer | Role | Example |
| --- | --- | --- |
| Folder access | Lets Cowork operate on local files | Organize screenshots, read statements, update notes |
| Instructions | Tell Cowork how to behave in a session, folder, project, or globally | Be thorough, push back, follow brand rules |
| Skills | Reusable procedures for repeatable tasks | Screenshot renamer, brand applier, session audit |
| Connectors | Access to external services | Gmail, Google Calendar, Google Drive, Slack |
| Plugins | Bundled skills plus connectors for a domain | Finance plugin, productivity plugin |
| Scheduled tasks | Recurring background execution | Morning brief, monthly screenshot cleanup |
| Projects | Persistent workspaces with memory and files | Investments, content, bootcamp, personal |
| Claude Code handoff | Escalation for more complex software work | Extend a dashboard, add a trading-bot tab |

This adds nuance to the earlier "skills vs workstations" distinction. Skills and workstations are not the whole system. Connectors bring in outside data. Plugins package domain workflows. Scheduled tasks turn a useful action into a recurring operating rhythm. Projects bind memory, instructions, files, and connections into a persistent workspace.

The practical design question becomes:

> Is this task best handled as one folder operation, a reusable skill, a connected workflow, a plugin-assisted workflow, a scheduled task, a persistent project, or a Claude Code build?

Choosing the right capability layer keeps the system from becoming overcomplicated.

## Root Kernel

The root `CLAUDE.md` is the kernel of the system. It loads every session, so it must stay small, stable, and high-leverage. The sources converge on a practical ceiling: keep it roughly 200-250 lines, with 300 as the hard maximum.

A strong root file usually contains:

- Memory system rules: read `memory.md` at session start, write new memories when explicitly asked, distinguish rules from facts.
- Preferences: communication style, default response shape, desired level of pushback.
- Behavioral rules: things Claude should always or never do across the workspace.
- Routing map: which workstation to load for each kind of task.
- References table: one-line pointers to resource files that should be loaded on demand.
- Workstation creation protocol: ideally as a pointer to a reference file, not a long embedded section.

The root file should not contain every useful instruction. It should contain only the instructions needed in almost every session or needed to find the right downstream context. When a section only matters for a specific activity, move it into a resource file and replace it with a one-line pointer.

The governing question is:

> Does Claude need this every session, or only when a specific task comes up?

If every-session, keep it in root. If task-specific, route to it.

## Operating Discipline

The `andrej-karpathy-skills` `CLAUDE.md` is useful because it is not a domain setup, memory template, or workflow. It is a compact behavioral constitution for a coding agent. In a Cowork system, this kind of file belongs close to the root because it defines how Claude should approach implementation work across all workstations.

Its four principles translate well into Cowork:

| Principle | Cowork Interpretation |
| --- | --- |
| Think before coding | Surface assumptions, ambiguities, and tradeoffs before acting |
| Simplicity first | Build the minimum thing that solves the real problem |
| Surgical changes | Touch only what the task requires; avoid opportunistic refactors |
| Goal-driven execution | Define success criteria and verify before calling work done |

This fills a gap in many Cowork setups. A root file can tell Claude where to find context and how to remember things, but it also needs to specify how Claude should behave when it has agency. Without this layer, an autonomous or semi-autonomous Cowork system can become over-eager: building extra features, changing adjacent files, hiding uncertainty, or treating vague requests as permission to improvise.

The most reusable root-level rules from this source are:

- State assumptions explicitly before implementation.
- If multiple interpretations exist, present them instead of silently choosing.
- Push back when a simpler approach exists or the plan seems off.
- Avoid speculative features, abstractions, and configurability.
- Match existing style rather than imposing a new one.
- Every changed line should trace back to the user's request.
- Turn vague tasks into verifiable goals before acting.
- For multi-step tasks, make a short plan and attach each step to a verification check.

These rules are especially important for coding, automation, file management, and autonomous build queues. They are less about Claude Cowork's folder structure and more about preventing agentic overreach.

The deeper pattern: a personal AI operating system needs both context architecture and conduct architecture. Context architecture tells the agent what to know. Conduct architecture tells it how to act.

## Personal Context Dossier

Nick Milo's Cowork workflow adds a missing setup primitive: before asking Cowork to organize or synthesize your world, teach it what your world is.

His pattern is to point Cowork at a high-signal subset of an Obsidian vault and ask it to build an "About Me" or intellectual dossier: values, interests, goals, frameworks, recurring themes, active projects, sources, and the way the user thinks. That dossier can then be pasted into Claude's personal preferences or saved as a resource file for the workspace.

This is different from generic voice principles. Voice principles tell Claude how you sound. A personal context dossier tells Claude what you care about, how you categorize the world, and what kinds of distinctions matter to you.

The payoff appears immediately in file organization. Without the dossier, Cowork sorts screenshots into generic categories. With the dossier, it can sort by the user's own framework, such as Nick Milo's ACE structure:

| ACE Area | Meaning | Cowork Use |
| --- | --- | --- |
| Atlas | Knowledge, ideas, maps, frameworks | Sort knowledge assets and research captures |
| Calendar | Time-based inputs and events | Sort dated notes, reviews, sessions, deadlines |
| Efforts | Actions and outputs | Sort projects, launches, workshops, deliverables |

This suggests a stronger onboarding sequence for a personal Work OS:

1. Build the root and memory files.
2. Build an About Me dossier from high-signal notes.
3. Extract voice principles from writing samples.
4. Define routing/workstation structure.
5. Only then begin heavy automation.

Otherwise Cowork can act locally but think generically.

## Rules vs Memory

One of the easiest ways to degrade a Cowork workspace is mixing prescriptive rules with changeable facts.

Rules belong in `CLAUDE.md`. They describe how Claude should behave:

- Always read `memory.md` before responding.
- Before drafting a new email, check whether a related thread already exists.
- Ask clarifying questions before beginning a complex irreversible task.
- Confirm before editing files outside the approved workspace.

Memory belongs in `memory.md`. It records facts, statuses, and preferences that may change:

- Active projects and current status.
- Current tools, accounts, collaborators, or constraints.
- Recurring scheduled jobs.
- Persistent personal or business facts.

The rule of thumb:

| Test | Destination |
| --- | --- |
| "Always / never / before doing X, do Y" | `CLAUDE.md` |
| "This is currently true / this happened / this may change" | `memory.md` |

This distinction matters because rules shape behavior while memory shapes awareness. If memory becomes full of instructions, Claude may apply them inconsistently. If `CLAUDE.md` becomes full of status facts, it bloats the root file and makes every session more expensive.

## Memory Diet

Root memory also loads frequently, so it needs a diet. The sources suggest treating `memory.md` like a whiteboard and `archive.md` like a filing cabinet.

Root `memory.md` should stay short and current. A useful structure:

```markdown
# Active Projects and Work

- Project: current status, next step, relevant workstation/project folder.

# Scheduled Tasks

- Task name: cadence, purpose, owner/location.

# Core Memory

- Durable fact or preference in one to two sentences.
```

Each memory entry should be concise. A ceiling around 150 lines is a practical constraint. When the file grows beyond the ceiling, the answer is compression and archiving, not raising the ceiling.

`archive.md` preserves older records without loading them every session. This allows the system to keep history without charging every conversation for old context. Claude can check the archive only when the user asks about older events or decisions.

Workstations and projects should also have their own `memory.md` files. The root memory only needs to know that a project exists and where to find it. The project memory can hold subject lines, Notion links, past decisions, travel details, campaign status, and other local context.

This creates cascading recall:

1. Root memory says the project exists.
2. Routing map points Claude to the relevant workstation.
3. Workstation memory gives area-specific state.
4. Project memory gives concrete local details.

This is the difference between a workspace that compounds and a root memory file that becomes a junk drawer.

## Workstations

A workstation is a durable area of work with its own context, rules, examples, and memory. It is a place Claude goes to do a kind of work repeatedly.

There are two major types:

| Type | Example | Use When |
| --- | --- | --- |
| Universal workstation | Email HQ, Writing HQ, Research HQ | The workflow cuts across many areas of life or business |
| Dedicated workstation | Personal Finance, Travel, Newsletter, Investing | The workflow belongs to one domain with its own facts and artifacts |

An Email HQ workstation might know:

- Default greeting and sign-off conventions.
- How to search for existing threads before drafting.
- Which labels, archive rules, or snooze rules the user prefers.
- How email tone differs from the user's general voice profile.

A Newsletter HQ workstation might know:

- Audience positioning.
- Voice and style examples.
- Drafting workflow.
- Publishing checklist.
- Subject-line skill handoff.

A Personal Finance workstation might know:

- Category taxonomy.
- Spending tracker spreadsheet.
- Correction rules for recurring vendors.
- Tax deadlines and savings targets.

The strongest workstations are not just folders. They are local operating environments. They hold reusable context that Claude would otherwise need to be told again and again.

## Skills vs Workstations

The sources make an important distinction: a workstation is a place you work; a skill is a thing you do.

Use a workstation when the work requires accumulated context, ongoing judgment, memory, examples, and area-specific rules. Use a skill when the task is repeatable and should run the same way each time.

| Question | If Yes | If No |
| --- | --- | --- |
| Is this an ongoing area with its own context? | Make a workstation | Consider a skill |
| Does it need human judgment inside the workflow? | Workstation | Skill may be enough |
| Should the output follow the same checklist every time? | Skill | Workstation or project |
| Does the task create or update durable files/memory? | Workstation/project | Skill |

Example: "Work on my next newsletter" is a workstation task because it surfaces decisions about topic, angle, audience, and draft direction. "Generate five scored subject lines from the final draft" is a skill because it can run as a stable checklist.

This distinction prevents two opposite errors:

- Turning every repeated action into a bloated workstation.
- Turning contextual work into a brittle skill that lacks memory and judgment.

The newer sources add a creation pattern for skills: first perform the task manually with Cowork, refine the result, then ask Cowork to package the successful process as a skill. Nick Milo's screenshot-renamer example follows this path. Cowork first proposes categories, the user improves the context, Cowork renames and organizes files, then the successful workflow becomes a reusable skill and finally a scheduled monthly task.

This creates a useful progression:

```text
One-off task -> refined workflow -> skill -> scheduled task
```

Do not create a skill before the workflow has proven itself. Let the procedure earn its shape through one or two real uses, then package it.

## Project Transplant

Claude Projects can be useful, but Cowork workstations are more editable, composable, and durable. The migration pattern is straightforward:

| Claude Project Component | Cowork Destination |
| --- | --- |
| Project instructions | Workstation or project `CLAUDE.md` |
| Project memory | `memory.md` with editable sections |
| Knowledge files | `resources/` folder |
| Repeated project workflow | Workstation rules or skills |

The benefit is direct file control. Instead of an opaque project memory paragraph, you get a structured markdown file that can be edited, compressed, archived, and linked. Instead of static knowledge uploads, you get resource files Claude can update or route to. Instead of manual project improvements, you can ask Cowork to add a rule to a specific workstation file.

Project transplanting is how old chatbot workflows become compounding local systems.

## PRD-First Building

Tina Huang's setup adds a stronger build protocol: before Claude builds anything substantial, it writes a PRD and gets sign-off.

This is the build-side equivalent of memory hygiene. It prevents the system from silently drifting from the user's real intent.

A good PRD-first rule says:

- Define the problem.
- Define success criteria.
- Clarify scope and non-scope.
- List constraints.
- Ask open questions.
- Propose a build plan.
- Wait for explicit approval before building.

This matters most when Cowork is used for software, dashboards, automations, data pipelines, or workflows with side effects. The PRD acts as a blueprint. It gives the human a chance to correct direction before Claude spends a long session building the wrong thing.

The PRD can also scaffold the whole Cowork system itself. For example, a "Mission Control" PRD might define:

- Initial projects.
- Folder architecture.
- Data inputs.
- Memory architecture.
- Dashboards.
- Skills.
- Scheduled jobs.
- Testing and polish.

The useful mental model is a data lake plus applications. First establish the folder/data layer: where calendar exports, emails, investment data, transcripts, receipts, or project notes will flow. Then build dashboards, skills, and automations on top.

The Karpathy-style root discipline makes PRD-first building stricter. The PRD should not only describe the intended product; it should also constrain Claude's behavior while building:

- What assumptions are being made?
- What should be explicitly out of scope?
- What is the simplest acceptable solution?
- What existing conventions must be matched?
- What files or systems should not be touched?
- What tests or checks prove the work is complete?
- What actions require confirmation because they are hard to reverse?

This turns the PRD from a feature brief into an execution contract. It reduces two common failure modes: plausible-but-wrong builds and overbuilt systems that solve a larger problem than the user actually had.

## Projects and Productivity Plugins

The fundamentals source uses "projects" in a slightly different but compatible sense from the earlier workstation hierarchy. In the product UI, a Cowork project is a persistent self-contained workspace wrapped around a folder, with its own instructions, memory, files, and connections. This matches the synthesis's Level 2 project idea, but the product framing emphasizes UI-level persistence.

Tina Huang's pattern is to initialize serious projects with a productivity plugin because it scaffolds useful files such as tasks, dashboards, directories, `CLAUDE.md`, and memory files. The key insight is not "use this exact plugin." The key insight is:

> Do not hand-roll memory scaffolding when a maintained plugin can create a better default system.

This matters for nontechnical users. Earlier Cowork guidance can make it sound as if everyone should manually maintain `CLAUDE.md` and `memory.md` from scratch. The plugin route lowers the setup burden and may produce more sophisticated defaults. The tradeoff is that plugin-generated structure still needs inspection, pruning, and alignment with the user's broader root/workstation architecture.

In the L2 synthesis, this should become a balanced rule:

- Use plugins to bootstrap standard scaffolding.
- Keep the architecture legible.
- Audit generated files before trusting them.
- Do not let plugin defaults override the root conduct rules.

## Autonomous Builder

Once the workspace has a PRD-first discipline, it can support a more advanced pattern: autonomous building.

The autonomous builder pattern has a queue:

| Folder | Meaning |
| --- | --- |
| `pending/` | Approved PRDs or briefs waiting to be built |
| `in_progress/` | Work currently being built |
| `done/` | Completed builds |
| `failed/` | Failed builds with logs and reason |
| `logs/` | Build records, decisions, errors, and handoff notes |

A scheduled task checks `pending/`, picks up approved PRDs, builds them, moves them through the queue, and records what happened. A dashboard can make the queue visible: current builds, recent completions, failed tasks, recurring schedules, and next opportunities.

This is powerful but risky. The system needs guardrails:

- Only approved PRDs enter the build queue.
- Claude must preserve reversibility and ask before destructive actions.
- Failed builds should be logged, not silently retried forever.
- The dashboard should reveal what changed.
- Human review remains part of the loop.
- The build should remain surgical: no unrelated cleanup, refactoring, or feature expansion unless the PRD explicitly asks for it.
- Each build should have a verification check attached before it can move to `done/`.

Autonomous building is not "let the agent do everything." It is a queue-based workflow where the agent executes approved units of work while preserving reviewability.

## Knowledge Workspace Integration

Nick Milo's Obsidian examples show Cowork acting less like an automation worker and more like a thinking companion. Because an Obsidian vault is a folder of markdown files, Cowork can inspect a scoped subset of the vault, synthesize across notes, create new markdown files, update existing notes, and place outputs directly back into the knowledge system.

Several patterns are especially relevant to this repository:

- Scope folder access deliberately. Give Cowork the exact folder or subfolder needed, not the entire knowledge base by default.
- Ask Cowork to surface themes, contradictions, and extensions across a source folder.
- Have Cowork write outputs as markdown files directly into the vault.
- Use linked notes and maps of content as wayfinding structures for AI.
- Ask Cowork to answer "Where am I? What matters? What am I missing?" as a weekly review.
- Let AI surface candidate connections, but keep human judgment responsible for interpretation and acceptance.

The strongest insight is that linked notes become AI infrastructure. Folder structure helps the agent find broad areas. Links and maps of content help the agent understand relationships. High-level maps prevent the agent from searching the entire vault from scratch every time.

This maps directly to the knowledge base's own raw-to-wiki workflow. A Cowork-like agent should not only process raw sources; it should read the existing maps, syntheses, and concept pages first so it can understand where new material belongs.

There is also a useful warning: Cowork can surface tensions and contradictions in a user's notes, but it cannot resolve them for the user. The human still owns taste, judgment, priority, and philosophical commitment.

## HTML as Interface Layer

Markdown is excellent for durable notes, instructions, and memory. But complex agent work often needs richer review surfaces.

The HTML source argues that Claude Code can produce HTML artifacts when markdown becomes too flat. In the Cowork context, HTML can become the interface layer of the personal work OS.

Use HTML for:

- PRDs that need diagrams, mockups, data flow, or tradeoff comparisons.
- Dashboards for builds, investments, schedules, inboxes, or project status.
- Code review explainers with annotated diffs and severity markers.
- Design prototypes with sliders, states, and live controls.
- Research reports that need visual structure.
- Custom editors that export changes back as JSON, markdown, or prompts.

This pairs naturally with Cowork. Markdown remains the source of truth for rules, memory, resources, and wiki notes. HTML becomes the temporary or shareable artifact for reading, reviewing, comparing, and editing complex work.

The most useful pattern is an HTML artifact with an export path:

- "Copy as markdown"
- "Copy as JSON"
- "Copy prompt"
- "Copy diff"
- "Export selected options"

That turns a visual interface back into instructions Claude can act on.

The fundamentals source gives a concrete example: a local spending dashboard generated from many credit-card statements. This is a good canonical HTML use case because it combines local file access, data cleaning, categorization, insight generation, and visual review. It also shows why Cowork is different from chat upload: Cowork can operate on a larger local folder and leave behind a reusable local artifact.

## Session Audit

Cowork compounds only if useful discoveries survive the session. A session audit is the maintenance step that captures unsaved principles, preferences, decisions, and follow-ups before the conversation ends.

At the end of a meaningful session, ask Claude to audit:

- New preferences it learned.
- Rules that should be added to `CLAUDE.md`.
- Facts or statuses that should be added to `memory.md`.
- Old facts that should be archived.
- Workstation-specific improvements.
- New resources, examples, or project notes that should be saved.
- Follow-up tasks or scheduled jobs.

The audit should also respect the rules vs memory distinction. It should not dump the whole conversation into memory. It should compress the session into durable changes.

This is one of the key compounding loops:

1. Do work.
2. Audit the session.
3. Save only reusable lessons.
4. Compress or archive old context.
5. Make the next session better.

The same logic applies to successful task workflows. After Cowork does something especially well, audit not only what should be remembered, but whether the process should become a skill, scheduled task, project rule, or resource file.

## Failure Modes

Claude Cowork systems degrade in predictable ways.

### Root Bloat

The root file becomes a catch-all. Every new lesson gets added there, even when it only applies to one task. The fix is relocation: keep the root as a routing and governance layer, not a warehouse.

### Memory Bloat

Memory becomes an unstructured transcript of old facts. The fix is ceilings, one-to-two sentence entries, workstation/project memory, and `archive.md`.

### Rule-Memory Confusion

Facts go into `CLAUDE.md`; rules go into `memory.md`. The fix is an audit that flags prescriptive language in memory and temporary facts in rules.

### Workstation Sprawl

Too many workstations are created before the user understands the pattern. The fix is to start with two or three high-value workstations and add new ones only when the need recurs.

### Capability Confusion

The user reaches for the wrong Cowork layer: using a full project for a small repeatable skill, using a skill when a connector/plugin is needed, or using Cowork when Claude Code is the better tool. The fix is to choose the smallest capability layer that fits: folder task, skill, connector, plugin, schedule, project, or code handoff.

### Skill Misuse

Judgment-heavy workflows get turned into skills, or small checklists get turned into workstations. The fix is the "place I work vs thing I do" test.

### Autonomous Drift

Claude builds without enough alignment, review, or logging. The fix is PRD-first execution, explicit sign-off, queue states, and a build dashboard.

### Agentic Overreach

Claude treats a local request as permission to improve the surrounding system. The fix is a surgical-change rule: every changed line, file, or artifact should trace back to the user's request or the approved PRD. Adjacent cleanup can be mentioned as a recommendation, but it should not be silently bundled into the work.

### Hidden Ambiguity

Claude silently picks an interpretation when the request has multiple plausible meanings. The fix is an assumption-surfacing rule: for ambiguous or multi-step work, Claude should name the ambiguity, state the assumption, and ask when the wrong choice would be costly.

### Generic Personalization

Cowork has file access but lacks a model of the user's interests, priorities, and frameworks. The fix is a personal context dossier and high-signal resource files. Without this, Cowork can organize files correctly but categorize them in ways that do not match the user's life.

### Unreadable Plans

Markdown plans become too long to review. The fix is HTML artifacts for dense specs, diagrams, comparisons, dashboards, and custom editing interfaces.

## Starter Architecture

A practical starter Cowork OS could look like this:

```text
Cowork OS/
  CLAUDE.md
  memory.md
  archive.md
  00_resources/
    voice-principles.md
    about-me-dossier.md
    memory-system-rules.md
    workstation-creation-protocol.md
    file-creation-rules.md

  Email HQ/
    CLAUDE.md
    memory.md
    resources/
      email-style-patterns.md
      inbox-zero-workflow.md

  Writing HQ/
    CLAUDE.md
    memory.md
    resources/
      voice-examples.md
      editorial-checklist.md

  Mission Control/
    CLAUDE.md
    memory.md
    resources/
      dashboards/
      daily-brief/
      builds/
        pending/
        in_progress/
        done/
        failed/
        logs/

  Skills/
    screenshot-renamer/
    brand-applier/
    session-audit/
```

Start with the root, one universal workstation, and one dedicated workstation. Do not build thirty workstations up front. Let the system grow from repeated friction.

## Starter Build Sequence

1. Create the root folder.
2. Add root `CLAUDE.md`, `memory.md`, and `archive.md`.
3. Add `00_resources/` with voice principles and system protocols.
4. Build an About Me dossier from high-signal notes or writing.
5. Define the routing map in root `CLAUDE.md`.
6. Create Email HQ as the first universal workstation.
7. Create one dedicated workstation for a real recurring domain.
8. Add session audit as a skill or reusable command.
9. Add memory compression and archive rules.
10. Turn one proven one-off workflow into a skill.
11. Transplant one old Claude Project into a workstation or product-level project.
12. Add operating-discipline rules for assumptions, simplicity, surgical changes, and verification.
13. Add PRD-first build rules before any substantial automation.
14. Use HTML artifacts for dashboards, PRDs, and dense review surfaces.
15. Only then consider autonomous build queues or scheduled tasks.

## Open Questions for Promotion

- Should this become a `wiki/Systems/AI & Agentic Systems` page or a `wiki/Workflows` page?
- Should "Claude Cowork" be treated as a tool-specific workflow or generalized into "Personal Agent OS"?
- How does this overlap with existing pages on [[wiki/Concepts/Agentic Engineering|Agentic Engineering]], [[wiki/Concepts/LLM Tool Use|LLM Tool Use]], and [[wiki/Techniques/Context Engineering|Context Engineering]]?
- Should HTML artifacts become their own concept note, or remain a section inside agentic workflows?
- Should "conduct architecture" become a separate concept page for reusable agent behavior rules?
- Should "personal context dossier" become a standard onboarding artifact for agentic systems?
- How should this repository use maps of content as wayfinding infrastructure for AI processing?
- What parts of this should be adapted directly into this repository's own `AGENTS.md`, `CLAUDE.md`, and raw-to-wiki workflow?

## Compilation Targets

- [[wiki/Systems/AI & Agentic Systems/Claude Cowork as Personal Work OS]]
- [[wiki/Techniques/Context Engineering]]
- [[wiki/Workflows/Knowledge Base as Thinking Partner]]
- [[wiki/Concepts/Agentic Engineering]]
- [[wiki/Concepts/LLM Tool Use]]

## Source Notes

- Jeff Su's simple setup is strongest for the workspace hierarchy, root/workstation/project model, persistent memory, and practical workstation examples.
- Jeff Su's tips video is strongest for maintenance rules: 300-line root ceiling, rule vs memory distinction, memory diet, project transplant, and skill/workstation distinction.
- Tina Huang's setup is strongest for PRD-first building, dashboards, daily briefs, scheduled jobs, and autonomous build queues.
- The HTML article is strongest as an interface-layer supplement: when markdown becomes too dense, use HTML for reviewable plans, explainers, dashboards, prototypes, and custom editors.
- The `andrej-karpathy-skills` `CLAUDE.md` is strongest for conduct architecture: assumptions, simplicity, surgical edits, and verifiable execution.
- Tina Huang's fundamentals tutorial is strongest for Cowork's product surface: local agent setup, skills, connectors, plugins, scheduled tasks, product-level projects, productivity plugin scaffolding, and Claude Code escalation.
- Nick Milo's tutorial is strongest for Cowork as knowledge-work partner: personal dossiers, scoped vault access, Obsidian workflows, screenshot/file organization, maps of content, and AI-assisted weekly review.
- The duplicate Jeff Su `Top 5` file appears to be a shorter clipping of the same video already included; no distinct claims were added beyond the existing maintenance principles.
