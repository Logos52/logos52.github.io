---
type: l2-synthesis
status: developing
created: 2026-05-22
updated: 2026-05-23
source-count: 11
sources:
  - "https://www.youtube.com/watch?v=gdrPkpXuNks"
  - "https://www.youtube.com/watch?v=0_dSWLOHKng"
  - "https://www.youtube.com/watch?v=4wvLHFgnQZQ"
  - "https://www.youtube.com/watch?v=uGwDuvSqgYI"
  - "https://www.youtube.com/watch?v=s3ccD6m6WKc"
  - "https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md"
  - "https://x.com/milesdeutscher/status/2056750252175364388"
  - "https://x.com/rubenhassid/status/2042105069550932138"
  - "https://x.com/eng_khairallah1/status/2052684086414852546"
  - "https://x.com/eng_khairallah1/status/2052319978662347226"
  - "https://x.com/trq212/status/2052809885763747935"
l3-sources:
  - "[[workbench/Opus - Claude Cowork as Personal Work OS]]"
  - "[[workbench/GPT - Claude Cowork as Personal Work OS]]"
  - "[[workbench/Grok - Claude Cowork as Personal Work OS]]"
tags:
  - cowork
  - agentic
  - workflows
  - memory
  - productivity
---

# Claude Cowork as Personal Work OS

Claude Cowork turns Claude from a stateless chatbot into a persistent, context-aware operating system for personal and professional work. Instructions, memory, and domain knowledge live in plain markdown files on your machine, which Claude reads at session start. Because it's just files, the system compounds: every rule you teach it, every preference it records, every workstation you build makes the next session better than the last.

The quality of the system depends far more on architecture and operating discipline than on raw model intelligence.

---

## Two Philosophies

There are two distinct approaches in the source material, and choosing between them early matters.

**The Ambitious Full OS** treats Cowork as a complete personal operating system — autonomous building overnight via scheduled tasks, daily digests pulling from email, calendar, and Slack, PRDs before any significant build, and a Mission Control dashboard for visibility. It maximizes output and autonomy but requires more setup, memory discipline, and comfort with AI working while you sleep.

**The Sustainable Simple System** treats Cowork as a reliable co-worker rather than a full autonomous OS. It uses a clear three-level hierarchy, relies on well-structured CLAUDE.md and MEMORY.md files, and focuses on sustainability and low maintenance over maximum autonomy. More accessible for most people, and less likely to become bloated or incoherent over time.

Both approaches share the same underlying architecture. The difference is how far you push the automation layer.

---

## Two Architectures: Local vs. Cloud

Before picking a philosophy or building any files, there is a foundational choice most guides skip: local or cloud.

**The local markdown OS** is what most Cowork guides describe. Instructions and memory live in plain `.md` files on your machine. Cowork reads them at session start. Everything is portable, editable, and free of external dependencies. The tradeoff: it lives on one machine and stops when the machine sleeps.

**The cloud-based custom OS** is a different animal. You use Claude Code to build an actual web application — homepage with net worth, daily tasks, finances, habit tracker — backed by a cloud database like Supabase. Always-on, accessible from any device, and can accept voice input via Telegram (hold button, speak, release — data routes through Whispr into Supabase, populates the dashboard). The tradeoff: requires Claude Code comfort, a database setup, and real build time.

The cloud build sequence:
1. Design mockups first (Claude Design → color palette, theme, brand assets)
2. Export to Claude Code with a full OS prompt
3. Set up Supabase or equivalent cloud memory
4. Connect an API key and write the data schema
5. Optionally wire Telegram for voice capture (BotFather → Webhook → Vercel)
6. Run security checks and connect core features

The two approaches aren't mutually exclusive. A common hybrid: use the local Cowork markdown OS for knowledge work, writing, and research — and use a Claude Code-built cloud dashboard for real-time personal data (finances, habits, tasks) that needs to be always-visible and remotely accessible.

---

## Core Model

Two files run everything at the root level.

**CLAUDE.md** is the instruction manual — tone, format, behavioral guardrails, routing logic, and pointers to reference files. It loads at the start of every session.

**MEMORY.md** is the persistent notepad — active projects and their status, scheduled tasks, and stable facts about you. When you say "remember this," Cowork writes to MEMORY.md.

The workspace hierarchy is constitutional: root rules apply everywhere, workstation rules apply only inside that area, project rules apply only inside a specific initiative.

| Level | Scope | Files | Purpose |
| --- | --- | --- | --- |
| Root | Entire workspace | `CLAUDE.md`, `memory.md`, `00_resources/` | Global rules, routing, active projects, durable personal context |
| Workstation | Ongoing area of work | `CLAUDE.md`, `memory.md`, `resources/` | Area-specific rules, workflows, examples, conventions |
| Project | Specific initiative | `CLAUDE.md`, `memory.md`, `resources/` | Project status, decisions, deliverables, local context |

The point is relevant context, not folder neatness. Claude performs better when the system surfaces the right amount of context at the right level of specificity.

---

## The Simpler Alternative: Three Folders

The workstation hierarchy is powerful but not the only valid architecture. A simpler approach that works well for individuals focused on output rather than system complexity:

```
Claude Cowork/
  ABOUT ME/
    about-me.md          ← who you are, how you work, what good looks like
    anti-ai-writing.md   ← words you hate, patterns that make you cringe
    my-company.md        ← goals, strategy, what you're saying no to
  OUTPUTS/               ← one subfolder per project; Cowork saves here
  TEMPLATES/             ← skeletons of your best work, built automatically
```

**Global Instructions** (Settings → Cowork → Edit Global Instructions) replace the root CLAUDE.md in this model — read every file in ABOUT ME before every task, never touch OUTPUTS or TEMPLATES unless pointed there, save deliverables to OUTPUTS under a named subfolder.

The three ABOUT ME files carry different signal. `about-me.md` covers who you are, your standards, and what good and bad look like in your field (ceiling: 2,000 tokens — build it by having Cowork interview you, then extract patterns, not raw transcripts). `anti-ai-writing.md` is a list of banned words and cringe patterns; without it Claude writes like Claude, with it Claude writes like you. `my-company.md` records current goals, quarterly focus, and what you're actively saying no to (ceiling: 1,000 tokens — update when priorities change, not on a schedule).

**Templates** fill themselves from successful outputs. When Cowork produces something worth reusing, say "save this as a template in TEMPLATES/" — it strips the content and saves the skeleton. Reference it later with "use the template in TEMPLATES/[name]." No upfront design required.

Keep all three ABOUT ME files under 6,000 tokens combined. Beyond that, Cowork starts summarizing them loosely rather than reading carefully, and the context window gets eaten before real work starts.

---

## Capability Layers

Cowork has several distinct capability layers, each with a different job. Choosing the right layer keeps the system from becoming overcomplicated.

| Layer | Role | Example |
| --- | --- | --- |
| Folder access | Lets Cowork operate on local files | Organize screenshots, read statements, update notes |
| Instructions | Tell Cowork how to behave in a session, folder, or globally | Be thorough, push back, follow brand rules |
| Skills | Reusable procedures for repeatable tasks | Screenshot renamer, brand applier, session audit |
| Connectors | Access to external services | Gmail, Google Calendar, Google Drive, Slack |
| Plugins | Bundled skills plus connectors for a domain | Finance plugin, productivity plugin |
| Scheduled tasks | Recurring background execution | Morning brief, monthly screenshot cleanup |
| Projects | Persistent workspaces with memory and files | Investments, content, bootcamp, personal |
| Claude Code handoff | Escalation for more complex software work | Extend a dashboard, add a trading-bot tab |

For any task, the design question is: is this best handled as a folder operation, a skill, a connector workflow, a plugin, a scheduled task, a project, or a Claude Code build?

---

## Root Kernel

The root `CLAUDE.md` loads every session, so it must stay small and high-leverage. Practical ceiling: 200–250 lines, hard maximum at 300.

A strong root file contains: memory system rules, communication preferences, behavioral guardrails, a routing map (which workstation to load for which task type), one-line pointers to reference files, and a workstation creation protocol — that last one as a pointer, not an embedded section.

The governing question for every line: does Claude need this every session, or only when a specific task comes up? If every-session, keep it in root. If task-specific, route to it.

---

## Rules vs Memory

One of the easiest ways to degrade a workspace is mixing prescriptive rules with changeable facts.

**Rules belong in `CLAUDE.md`** — how Claude should behave: always read `memory.md` before responding; check for an existing thread before drafting a new email; ask clarifying questions before beginning a complex irreversible task.

**Memory belongs in `memory.md`** — facts, statuses, and preferences that may change: active projects and current status, current tools and collaborators, recurring scheduled jobs, persistent personal or business facts.

| Test | Destination |
| --- | --- |
| "Always / never / before doing X, do Y" | `CLAUDE.md` |
| "This is currently true / this happened / this may change" | `memory.md` |

Rules shape behavior. Memory shapes awareness. Mixing them degrades both.

---

## Memory Diet

Treat `memory.md` like a whiteboard and `archive.md` like a filing cabinet. The whiteboard holds what's active and current. The filing cabinet holds everything else.

```markdown
# Active Projects and Work
- Project: current status, next step, relevant workstation/project folder.

# Scheduled Tasks
- Task name: cadence, purpose, owner/location.

# Core Memory
- Durable fact or preference in one to two sentences.
```

Ceiling: 150 lines. When the file grows beyond it, compress and archive — never raise the ceiling. Old context moves to `archive.md`, which Cowork doesn't read at session start (no token cost) and only loads when you ask about something historical.

Workstations and projects should have their own `memory.md` files. Root memory only needs to know a project exists and where to find it. The cascade: root confirms the project → routing map points to the workstation → workstation memory gives area-specific state → project memory gives local details. This is the difference between a workspace that compounds and a root memory file that becomes a junk drawer.

---

## Token Conservation

Token cost is a quality concern, not just a billing one. Every message causes Claude to re-read the entire conversation history. Message 30 costs 31x more tokens than message 1. At ~500 tokens per exchange, 20 messages burns 105K tokens; 30 messages burns 232K. One developer tracked that 98.5% of his tokens went to re-reading history; only 1.5% went to actual output.

**Restart, don't follow up.** When Cowork produces something wrong, the instinct is to type "no, I meant..." and keep going. Don't — every follow-up stacks on the full history. Click "restart the conversation from here" on an earlier message and start with a better prompt.

**Fresh session every ~20 messages.** When a session gets long, ask Claude to summarize everything into a handoff note, copy it, start a new session, paste the summary as the first message. You keep the context; you lose the bloat.

**Batch tasks into one message.** Three separate prompts equal three full context reloads. One prompt with three tasks equals one.

**Match model to task.** Sonnet handles grammar checks, formatting, short answers, and brainstorming at a fraction of Opus cost. Reserve Opus for multi-step interdependent builds and complex judgment calls. Using Opus for everything wastes 30–70% of your budget on tasks Sonnet handles equally well.

**Keep context files lean.** The about-me file should stay under 2,000 tokens; all ABOUT ME files combined under 6,000. Beyond those thresholds, Cowork summarizes loosely rather than reads carefully.

---

## Behavioral Guardrails

The root `CLAUDE.md` is a behavioral contract, not just a routing file. One [publicly available example](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md) — 65 lines — is the clearest illustration of what lean, high-signal guardrails look like. Its four principles translate directly into Cowork context.

| Principle | Cowork Interpretation |
| --- | --- |
| Think before acting | Surface assumptions and ambiguities before doing anything substantial |
| Simplicity first | Build the minimum thing that solves the real problem |
| Surgical changes | Touch only what the task requires; no opportunistic cleanup |
| Goal-driven execution | State a plan and define success criteria before executing |

Without conduct architecture, an autonomous Cowork system becomes over-eager: building extra features, changing adjacent files, hiding uncertainty, treating vague requests as permission to improvise. A personal AI OS needs both **context architecture** (what to know) and **conduct architecture** (how to act).

---

## PRD-First Building

Before building any workflow, dashboard, or automation, write a Product Requirements Document first. The PRD defines the problem, success criteria, scope, constraints, and build plan. Without it, Cowork can build something plausible but wrong, and you only find out an hour later.

A minimal PRD covers: what the problem is, what done looks like, what's explicitly out of scope, what the simplest acceptable solution is, what can't be touched, and what checks prove the work is complete. Wait for explicit sign-off before building.

The useful mental model: fill the lake before building on it. Establish the folder and data layer first — where calendar exports, emails, investment data, and project notes will flow. Then build dashboards, skills, and automations on top.

---

## The Full OS Build

The ambitious setup takes roughly five hours and produces a live, connected system: a daily digest pulling from email, calendar, and Slack; a custom dashboard; a skills suite; and an autonomous builder that produces new artifacts overnight. Here is the sequence.

**Operating instructions first.** Before touching folders or PRDs, paste operating instructions into Cowork's global settings encoding four principles. PRD first always — Cowork must write a full PRD before building anything and wait for explicit sign-off before starting. Push back and clarify — Cowork should disagree when a plan seems wrong, name tradeoffs, and surface open questions before proceeding, not after. Aggressive note-taking — Cowork documents everything it builds and every decision made along the way. Reversibility — confirm before any action that's hard to undo; when in doubt, stop and ask. These four principles change the character of the system. Without them, Cowork builds fast and confidently in the wrong direction.

**Write the mission control PRD.** The PRD defines everything: what projects you're building, the folder architecture, and a build plan broken into timed phases. The PRD should be specific enough that Cowork knows exactly what "done" looks like for each phase. Use a prompt to have Cowork generate your version by interviewing you on your goals, tools, and priorities — then review and approve before anything is built.

**Scaffold the folders.** Create a `cowork/` folder. Open Cowork → Projects → New Project → Use Existing Folder. Reference the PRD in the project instructions. Drop the PRD file into the folder. Then: "Please start building with the mission control PRD." Run `/start` to activate the Productivity Plugin first — it creates the task file, dashboard, memory files, and directory structure automatically. Build from that scaffold rather than from scratch.

**Hour 1: Data layer.** Nothing upstream works without this. Activate every connector you plan to rely on — email, calendar, Slack, or whatever feeds your work. Confirm each one is pulling live data. Build the folder structure. Verify the morning brief can aggregate actual data from actual sources. If a connector fails or pulls stale data, fix it now. This is the lake. Do not skip ahead.

**Hours 2–4: Build on the data.** Three starting points apply broadly:

- **Dashboard.** A visual layer over data you already have — investments, projects, tasks, health metrics. The domain changes; the pattern doesn't.
- **Morning brief.** Email + calendar + Slack compiled into one daily file on a schedule. Define your urgency tiers explicitly: what counts as "needs response before 9am," what can wait, what is informational only.
- **Skills suite.** Start with three: a today skill (on-demand morning brief refresh), a research skill (deep dive on a specific topic or problem), and a prep skill (who you're meeting with and what context matters). More skills get added as recurring needs surface.

**Hour 5: Polish.** Notifications, end-to-end testing, verification. Expect roughly 95% smooth execution following the PRD; the remaining 5% is permissions and minor adjustments discovered during the build.

**The autonomous builder.** Final layer — skip on the first pass if preferred. Approved PRDs go into `pending/`. A scheduled task (every 30 minutes or similar) checks `pending/`, picks up any queued PRD, builds it, and moves it to `in_progress/`, then `done/` or `failed/`. Build logs track what was produced. A mission control dashboard visualizes the queue. Drop a brief before bed; wake up to a completed artifact. The `failed/` folder and logs tell you what went wrong without requiring you to babysit the build.

**On always-on operation.** Local Cowork stops when the laptop sleeps. For the autonomous builder to run overnight, keep the machine awake or move to a VPS. A VPS means the agent runs 24/7 with your API keys and data on your own infrastructure, and you can trigger builds from a phone.

**After the initial build.** The five-hour setup produces a working system. Value compounds through weekly refinement — 15 minutes every Friday: what did the brief miss, what did Cowork produce that needed redoing, what recurring task appeared that should be automated next? Cowork is infrastructure you build, not a tool you use.

---

## Workstations

A workstation is a durable area of work with its own context, rules, examples, and memory. It's a place Claude goes to do a kind of work repeatedly, not a folder for one-off tasks.

| Type | Example | Use When |
| --- | --- | --- |
| Universal workstation | Email HQ, Writing HQ, Research HQ | The workflow cuts across many areas of life or business |
| Dedicated workstation | Personal Finance, Travel, Newsletter, Investing | The workflow belongs to one domain with its own facts and artifacts |

An Email HQ workstation knows default greeting and sign-off conventions, how to search for existing threads before drafting, and how email tone differs from your general voice. A Newsletter HQ workstation knows audience positioning, voice examples, a drafting workflow, and a publishing checklist. A Personal Finance workstation knows your category taxonomy, correction rules for recurring vendors, and tax deadlines.

The strongest workstations aren't just folders — they're operating environments that hold reusable context Claude would otherwise need to be told again and again.

---

## Skills vs Workstations

A workstation is a place you work. A skill is a thing you do.

| Question | If Yes | If No |
| --- | --- | --- |
| Is this an ongoing area with its own context? | Make a workstation | Consider a skill |
| Does it need human judgment inside the workflow? | Workstation | Skill may be enough |
| Should the output follow the same checklist every time? | Skill | Workstation or project |
| Does the task create or update durable files/memory? | Workstation/project | Skill |

"Work on my next newsletter" is a workstation task — it surfaces decisions about topic, angle, and audience. "Generate five scored subject lines from the final draft" is a skill — same checklist, fixed output format, no judgment required.

Don't create a skill before the workflow has proven itself. Let the procedure earn its shape through one or two real uses, then package it.

```text
One-off task → refined workflow → skill → scheduled task
```

---

## Building a Plugin: The AI Employee Model

A skill is a thing you do. A plugin is an AI employee — a complete role that knows your industry, follows your exact process, and runs workflows autonomously.

```
my-plugin/
  .claude-plugin/
    plugin.json          ← identity: name, role, description
  skills/
    primary-task/
      SKILL.md           ← the brain: step-by-step process
  commands/
    run-task.md          ← slash commands: /prefix:command
  references/
    templates.md         ← templates, benchmarks, examples
  global-instructions.md ← standing orders: personality, defaults
  folder-instructions.md ← project-specific context
```

**SKILL.md is the most important file.** It contains a description block with 5–7 trigger phrases and explicit negative boundaries ("use this when... do NOT use for..."), a numbered process where every step is specific and testable, an output format specification, rules, edge cases, and a quality checklist that runs before every delivery. Too vague a trigger and the skill never activates; too broad and it hijacks unrelated conversations.

Build sequence: research the role, interview yourself about your specific version of the process, write SKILL.md from that combined input, build the supporting files, then test on real data — not samples — five times with different inputs. Update SKILL.md after every run that misses.

The refinement loop is what makes it exceptional. By run 10, output quality is dramatically higher than run 1. The tool doesn't get better on its own — the instructions do.

---

## Connectors, Skills, and Plugins

**Connectors** link Cowork to third-party services — Gmail, Google Calendar, Google Drive, Microsoft 365, Slack, Notion. Without connectors, Cowork operates only on local files. With them, it becomes the orchestration layer across your tools.

**Skills** package repeatable workflows as portable instruction files — stored locally, shareable, or downloaded from the community. They can be invoked explicitly or triggered automatically when Cowork recognizes the context.

**Plugins** bundle connectors and skills together for a specific domain. The Finance plugin, for instance, packages skills for financial statements and audit support alongside connectors like Snowflake, BigQuery, Gmail, and Slack. Plugins are the highest-leverage entry point for domain-specific workflows.

The **Productivity Plugin** is the fastest way to bootstrap a new project's memory system. It creates `tasks.md`, a dashboard, and a directory structure, and sets up CLAUDE.md and MEMORY.md automatically. Use it rather than hand-rolling scaffolding — then customize. Audit the generated files before trusting them fully.

---

## Cowork + Claude Code

There is a natural ceiling where Cowork's general capability is not enough for larger or more complex builds. The escape valve is Claude Code — the dedicated coding agent in the same desktop app. Use Cowork to define the project, build architecture, and manage memory and workflows; switch to Claude Code when the build requires actual programming, complex file manipulation, or multi-file code. Both share the same workspace folder, so handoff is just pointing Claude Code at the same directory. Cowork for orchestration; Claude Code for execution.

---

## Personal Context Dossier

Before asking Cowork to organize or synthesize your world, teach it what your world is.

Point Cowork at a high-signal subset of your notes or writing and ask it to build an "About Me" digest — your values, interests, goals, frameworks, recurring themes, active projects by rank, and the questions you keep returning to. Paste this into Cowork's global personal preferences. Now every session starts with Cowork already knowing who you are, which changes response quality more than almost any other setup step.

This is different from generic voice principles. Voice principles tell Claude how you sound. A personal context dossier tells Claude what you care about, how you categorize the world, and what kinds of distinctions matter to you.

Without the dossier, Cowork can act locally but think generically — organizing files into categories that are technically correct but don't match the user's actual life.

---

## Cowork as Thinking Companion

Most Cowork frameworks treat the workspace as a productivity and build environment. There's a distinct use case worth treating separately: Cowork as thinking partner operating alongside a personal knowledge base.

Structured notes are the best context you can give an AI. A well-linked Obsidian vault — notes with metadata, ranked importance, maps of content, and cross-references — gives Cowork a navigable model of your thinking rather than a flat pile of files. Context architecture beats prompting: a system of well-organized notes outperforms any single clever prompt, because Cowork can find and surface what's relevant rather than relying on you to pre-specify it.

Concrete applications:

**Weekly review.** Ask Cowork for a holistic briefing: active projects by rank, recent intellectual work, open questions, and what you might be forgetting. Grounded in your actual notes, not a generic template output.

**Synthesis across sources.** Cowork can identify convergent themes across a cluster of notes, surface contradictions between sources and your existing frameworks, and generate jumping-off points for your own thinking. The output is a markdown file that lives in your vault — persistent, editable, linkable. The AI surfaces tensions; resolving them remains yours.

**Maps of content.** Cowork can surface notes that connect to a theme you're developing, even if you haven't explicitly linked them. Works best when notes are already structured with metadata and maps — those give Cowork a navigable top-level understanding rather than a flat search.

Cowork isn't replacing your thinking system. It's reading it, working inside it, and writing back to it. Obsidian (or any markdown-based knowledge base) remains the source of truth; Cowork is the agent that can traverse it, synthesize across it, and help you see what's there.

---

## Daily Operating Rhythm

The most concrete implementation of an always-on Cowork system is a three-session daily structure.

**Morning Briefing (7am, automated).** Before you open your laptop with intention, Cowork has already scanned your inbox and categorized every message by urgency tier, drafted responses for routine emails, flagged the two or three that need your actual judgment, pulled the day's calendar, created a prep brief for each meeting, and compiled everything into a single document on your desktop. You read one file; you know what the day looks like. Define your own urgency tiers — what counts as "needs response before 9am" in your context is different from anyone else's.

**Midday Production Block (manual trigger).** The workhorse session — triggered when you're ready to do real work. The key distinction from chat: Cowork works on your actual files. It creates documents, updates spreadsheets, compiles reports, and saves everything where it belongs. Build a library of task templates for your most common recurring work: each template specifies the input source, processing steps, output format, and save location. For large jobs, Cowork can spin up sub-agents that process files in parallel.

**End-of-Day Wrap-up (5pm, automated).** Cowork compiles what happened: emails sent and received, meetings and what was discussed, files created or modified, tasks completed, what's still pending. The critical element is the **carry-forward section** — items that didn't get resolved today are explicitly flagged to appear in tomorrow's morning briefing as priorities. The end-of-day report seeds the next morning's briefing, creating a continuous loop where nothing falls through the cracks between days.

**Weekly refinement (15 minutes, Friday).** Every Friday: what did the briefing miss that you had to discover yourself? What did Cowork produce that you had to redo? What new recurring task appeared that should be automated next? Update the relevant prompts and templates. Cowork is infrastructure you build, not a tool you use.

---

## The Autonomous Build Pattern

Once the workspace has PRD-first discipline, it can support autonomous building.

| Folder | Meaning |
| --- | --- |
| `pending/` | Approved PRDs waiting to be built |
| `in_progress/` | Work currently being built |
| `done/` | Completed builds |
| `failed/` | Failed builds with logs and reason |
| `logs/` | Build records, decisions, errors, handoff notes |

A scheduled task checks `pending/`, picks up approved PRDs, builds them, moves them through the queue, and records what happened. Required guardrails: only approved PRDs enter the queue; Claude asks before destructive actions; failed builds are logged, not silently retried; each build has a verification check before moving to `done/`. Autonomous building is a queue-based workflow where the agent executes approved units of work — not "let it do everything."

This pattern works best when the laptop is awake or when running on a VPS, since local Cowork agents stop when the machine sleeps.

---

## HTML as Interface Layer

Markdown is excellent for durable notes, instructions, and memory. Complex agent work often needs richer review surfaces.

Use HTML artifacts for: PRDs that need diagrams or tradeoff comparisons; dashboards for builds, investments, or project status; research reports that need visual structure; custom editors that export changes back as JSON, markdown, or prompts. The most useful pattern is an HTML artifact with an export path — "copy as markdown," "copy diff" — that turns a visual interface back into something Claude can act on.

Markdown remains the source of truth. HTML is the temporary artifact for reviewing, comparing, and editing complex work.

---

## Session Audit

Cowork compounds only if useful discoveries survive the session. At the end of any meaningful session, ask Claude to audit: new preferences it learned; rules to add to `CLAUDE.md`; facts or statuses to add to `memory.md`; old facts to archive; and follow-up tasks or scheduled jobs. The audit compresses the session into durable changes — it doesn't dump the whole conversation into memory.

After Cowork does something especially well, also ask whether the process should become a skill, scheduled task, or project rule.

The loop: do work → audit the session → save only reusable lessons → compress old context → make the next session better.

---

## Migrating Claude Projects into Cowork

Claude Projects have two key limitations Cowork resolves: project instructions can't be edited programmatically, and AI-generated project memory can't be structured or directly edited.

| Claude Project Component | Cowork Destination |
| --- | --- |
| Project instructions | Workstation or project `CLAUDE.md` |
| Project memory | `memory.md` with editable sections |
| Knowledge files | `resources/` folder |
| Repeated project workflow | Workstation rules or skills |

After migration, every change to instructions or memory is made by telling Cowork directly — it writes the change to the correct file. The routing map gets a new entry pointing to the new workstation. Project transplanting is how old chatbot workflows become compounding local systems.

---

## Failure Modes

Claude Cowork systems degrade in predictable ways.

**Root Bloat.** The root file becomes a catch-all. Every new lesson gets added there even when it only applies to one task. Fix: keep the root as a routing and governance layer, not a warehouse.

**Memory Bloat.** Memory becomes an unstructured transcript of old facts. Fix: ceilings, one-to-two sentence entries, per-workstation memory files, and `archive.md`.

**Rule-Memory Confusion.** Rules go into `CLAUDE.md`; facts go into `memory.md`. When inverted — prescriptive instructions in memory, status facts in the rules file — Claude applies rules inconsistently and the root grows with noise. Fix: a regular audit that flags prescriptive language in memory and changeable facts in rules.

**Workstation Sprawl.** Too many workstations created before the pattern is understood. Fix: start with two or three and add new ones only when a real recurring need emerges.

**Capability Confusion.** Reaching for the wrong layer: full project for a small repeatable skill, skill when a connector is needed, Cowork when Claude Code is the better tool. Fix: choose the smallest layer that fits.

**Skill Misuse.** Judgment-heavy workflows get packaged as skills, or small checklists get turned into full workstations. Fix: the "place I work vs thing I do" test.

**Autonomous Drift.** Claude builds without sufficient alignment, review, or logging — work happens but it's not what was intended and there's no record of what changed. Fix: PRD-first execution, explicit sign-off, queue states, build dashboard.

**Agentic Overreach.** Claude treats a local request as permission to improve the surrounding system. Fix: every changed line should trace back to the user's request or approved PRD. Adjacent cleanup can be flagged as a recommendation but never silently bundled in.

**Hidden Ambiguity.** Claude silently picks an interpretation when the request has multiple plausible meanings. Fix: for ambiguous or multi-step work, Claude names the ambiguity, states the assumption, and asks when the wrong choice would be costly.

**Generic Personalization.** Cowork has file access but lacks a model of the user's interests and frameworks. Fix: personal context dossier and high-signal resource files. Without it, Cowork organizes files correctly but categorizes them in ways that don't match the user's actual life.

**Unreadable Plans.** Markdown plans become too long to review. Fix: HTML artifacts for dense specs, diagrams, tradeoff comparisons, and custom editing interfaces.

---

## Starter Architecture

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

Start with the root, one universal workstation, and one dedicated workstation. Let the system grow from repeated friction.

---

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
12. Add operating-discipline rules: assumptions, simplicity, surgical changes, verification.
13. Add PRD-first build rules before any substantial automation.
14. Use HTML artifacts for dashboards, PRDs, and dense review surfaces.
15. Only then consider autonomous build queues or scheduled tasks.

---

## Relationship to the Broader System

Claude Cowork sits at the intersection of several existing threads in the knowledge base:

**Attention Management.** A well-run Cowork system reduces cognitive load and decisional delays. A poorly managed one becomes another source of context switching and shallow attention — especially when autonomous tasks run without sufficient oversight.

**Knowledge Base as Thinking Partner.** When pointed at an Obsidian vault or wiki folder, Cowork produces persistent artifacts — dossiers, briefings, theme maps, organized indexes, contradiction analyses — that live inside your notes rather than disappearing into chat history. The vault simultaneously serves as the high-signal source of personal context and the final home for everything Cowork generates.

**Self-Regulation.** Running Cowork effectively requires strong metacognition: knowing when to let it run autonomously vs. when to stay in the loop.

**Agentic Systems.** Cowork is one concrete implementation of turning a frontier model into a persistent, multi-project agent. The architectural patterns — context architecture, conduct architecture, cascading memory, PRD-first building, autonomous build queues — generalize to other agentic systems.

---

## Open Questions

- What is the right balance between autonomy and oversight for a personal OS, and how does it shift as the system matures?
- How should memory architecture evolve as active projects accumulate — are there structural limits to the cascading model?
- How does heavy Cowork usage affect the user's own thinking and taste over time? Does it reinforce or erode independent judgment?
- When does a Cowork-style system start competing with (or replacing) parts of a traditional second brain, and is that a problem?
- Should "conduct architecture" become a standalone concept page applicable across agentic systems beyond Cowork?
- Should the personal context dossier become a standard onboarding artifact for any agentic system, not just Cowork?
- How should this repository use maps of content as wayfinding infrastructure for AI processing of its own contents?

---

## Sources

- [My Full Claude Cowork Setup (steal my workflows!)](https://www.youtube.com/watch?v=gdrPkpXuNks)
- [My Simple Claude Cowork System (for normal people)](https://www.youtube.com/watch?v=0_dSWLOHKng)
- [Top 5 Claude Cowork Tips I Wish I Knew from Day One](https://www.youtube.com/watch?v=4wvLHFgnQZQ)
- [Give Me 20 Minutes. I'll Teach You 80% of Claude Cowork](https://www.youtube.com/watch?v=uGwDuvSqgYI)
- [Claude Cowork Fundamentals In 22 Minutes](https://www.youtube.com/watch?v=s3ccD6m6WKc)
- [CLAUDE.md — behavioral guidelines reference](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md)
- [Personal OS build: local vs. cloud](https://x.com/milesdeutscher/status/2056750252175364388)
- [Claude Cowork setup — April 2026 update](https://x.com/rubenhassid/status/2042105069550932138)
- [Automating your entire workflow with Cowork](https://x.com/eng_khairallah1/status/2052684086414852546)
- [Building a Cowork plugin](https://x.com/eng_khairallah1/status/2052319978662347226)
- [The unreasonable effectiveness of HTML](https://x.com/trq212/status/2052809885763747935)
