---
type: synthesis
status: developing
created: 2026-05-22
updated: 2026-05-23
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
tags:
  - cowork
  - agentic
  - workflows
  - memory
  - productivity
---

# Claude Cowork as Personal Work OS

Claude Cowork is a local AI agent environment that turns Claude from a stateless chatbot into a persistent, context-aware operating system for personal and professional work. The key insight is that everything — instructions, memory, domain knowledge, voice — lives in plain markdown files on your machine, which Claude reads at the start of each session. Because it's just files, the system compounds: every rule you teach it, every preference it records, every workstation you build makes the next session better than the last.

## Two Architectures: Local vs. Cloud

Before choosing how to build a personal OS with Claude, there's a foundational choice that most guides skip: local or cloud.

**The local markdown OS** is what most Cowork guides describe. Instructions and memory live in plain `.md` files on your machine. Cowork reads them at session start. Everything is portable, editable, transparent, and free of external dependencies. The tradeoff: it lives on one machine, stops when the machine sleeps, and the "dashboard" is essentially Obsidian rendering your notes.

**The cloud-based custom OS** is a different animal. You use Claude Code to build an actual web application with a visual dashboard — homepage with net worth, daily tasks, finances, habit tracker, calendar — backed by a cloud database like Supabase. The app is always-on, accessible from any device, and can accept voice input via Telegram (hold button, speak, release — data routes through Whispr into Supabase, populates the dashboard). The tradeoff: it requires Claude Code comfort, a database setup, and meaningful build time. But the result is a bespoke personal app that self-evolves as you add features.

The build sequence for the cloud approach:
1. Design mockups first (Claude Design → color palette, theme, brand assets)
2. Export to Claude Code with a full OS prompt
3. Set up a cloud memory system (Supabase or equivalent)
4. Connect an API key and write the data schema
5. Optionally wire Telegram for voice capture (BotFather → Webhook → Vercel)
6. Run security checks
7. Connect core features (Calendar, journaling, habit tracking, etc.)

The local and cloud approaches aren't mutually exclusive. A common hybrid: use the local Cowork markdown OS for knowledge work, writing, research, and file operations — and use a Claude Code-built cloud dashboard for real-time personal data (finances, habits, health, tasks) that needs to be always-visible and remotely accessible. The cloud backend (Supabase) can also receive data from AI sessions, making it a persistent memory layer that any Claude surface can read and write.

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

## The Simpler Alternative: Three Folders

The workstation hierarchy is powerful but not the only valid architecture. A simpler approach that works well for individuals focused on output quality rather than system complexity: three folders, three context files, one global instruction block.

```
Claude Cowork/
  ABOUT ME/
    about-me.md          ← who you are, how you work, what good looks like
    anti-ai-writing.md   ← words you hate, patterns that make you cringe
    my-company.md        ← goals, strategy, what you're saying no to
  OUTPUTS/               ← one subfolder per project; Cowork saves here
  TEMPLATES/             ← skeletons of your best work, built automatically
```

**Global Instructions** (Settings → Cowork → Edit Global Instructions) replace the root CLAUDE.md in this model. They tell Cowork to read every file in ABOUT ME before every task, never read OUTPUTS or TEMPLATES unless specifically pointed there, and save deliverables to OUTPUTS under a named subfolder.

The three ABOUT ME files carry different signal:

- `about-me.md` covers who you are, how you work, your standards, what good and bad look like in your field, and explicit instructions for Claude. Hard ceiling: 2,000 tokens. Build it by having Cowork interview you with 20 questions across five areas (who you are, how you work, what good looks like, what you hate, your rules). Extract patterns from your answers — don't save raw transcripts.
- `anti-ai-writing.md` is a list of banned words, cringe patterns, and formatting rules. Without it, Claude writes like Claude. With it, Claude writes like you minus the parts you hate.
- `my-company.md` records your current goals with specific targets, what you're spending time on this quarter, and what you're actively saying no to. Update it when priorities change, not on a schedule. Hard ceiling: 1,000 tokens.

**Templates** are the compounding mechanism in this model. When Cowork produces something you want to reuse — a report format, an email structure, a research brief — say "save this as a template in TEMPLATES/" at the end of the session. Cowork strips the content and saves the skeleton: sections, order, format, length. Reference it later with "use the template in TEMPLATES/[name]." The template folder fills itself from successful outputs rather than being designed upfront.

The total context load for this system stays under 6,000 tokens across all three ABOUT ME files. When files exceed that, Cowork starts summarizing them loosely instead of reading them carefully — the context window gets eaten before real work starts.

## The Full OS Build

The ambitious setup takes roughly five hours and produces a live, connected system: a daily digest pulling from email, calendar, and Slack; a custom dashboard; a skills suite; and an autonomous builder that produces new artifacts overnight. Here is the build sequence.

**Operating instructions first.** Before touching folders or PRDs, paste operating instructions into Cowork's global settings encoding four principles. PRD first always — Cowork must write a full PRD before building anything and wait for explicit sign-off before starting. Push back and clarify — Cowork should disagree when a plan seems wrong, name tradeoffs, and surface open questions before proceeding, not after. Aggressive note-taking — Cowork documents everything it builds and every decision made along the way. Reversibility — confirm before any action that's hard to undo; when in doubt, stop and ask. These four principles change the character of the system. Without them, Cowork builds fast and confidently in the wrong direction.

**Write the mission control PRD.** The PRD defines everything: what projects you're building, the folder architecture, and a build plan broken into timed phases. This is the blueprint before construction — without it, Cowork can produce something plausible but wrong, and you only discover it an hour later. The PRD should be specific enough that Cowork knows exactly what "done" looks like for each phase. Use a prompt to have Cowork generate your version by interviewing you on your goals, tools, and priorities — then review and approve before anything is built.

**Scaffold the folders.** Create a `cowork/` folder. Open Cowork → Projects → New Project → Use Existing Folder. Reference the PRD in the project instructions. Drop the PRD file into the folder. Then: "Please start building with the mission control PRD." Run `/start` to activate the Productivity Plugin first — it creates the task file, dashboard, memory files, and directory structure automatically. Build from that scaffold rather than from scratch.

**Hour 1: Data layer.** Nothing upstream works without this. Activate every connector you plan to rely on — email, calendar, Slack, or whatever feeds your work. Confirm each one is pulling live data. Build the folder structure. Verify the morning brief can aggregate actual data from actual sources. If a connector fails or pulls stale data, fix it now. This is the lake. Everything else is built on top of it. Do not skip ahead.

**Hours 2–4: Build on the data.** Three starting points apply broadly to most setups:

- **Dashboard.** A visual layer over data you already have — investments, projects, tasks, health metrics. The specific domain changes; the pattern doesn't. Build this first while your energy is highest.
- **Morning brief.** Email + calendar + Slack compiled into one daily file, delivered on a schedule. Define your urgency tiers explicitly: what counts as "needs response before 9am," what can wait until later in the week, what is informational only. The more specific the tiers, the more useful the briefing.
- **Skills suite.** Start with three: a today skill (on-demand morning brief refresh), a research skill (deep dive on a specific topic, ticker, or problem), and a prep skill (who you're meeting with and what context matters). More skills get added as recurring needs surface.

**Hour 5: Polish.** Notifications, end-to-end testing, verification. Expect roughly 95% smooth execution following the PRD; the remaining 5% is permissions and minor adjustments discovered during the build. This hour cleans those up.

**The autonomous builder.** This is the advanced layer — skip it on the first pass if preferred. The pattern: Cowork drafts PRDs for new tools and workflows, you review and approve, approved PRDs go into `pending/`. A scheduled task (every 30 minutes or similar) checks `pending/`, picks up any queued PRD, builds it, and moves it to `in_progress/`, then `done/` or `failed/`. Build logs track what was produced. A mission control dashboard visualizes the queue. Drop a brief before bed; wake up to a completed artifact. The failure cases — the `failed/` folder and logs — tell you exactly what went wrong without requiring you to babysit the build.

**On always-on operation.** Local Cowork stops when the laptop sleeps. For the autonomous builder to run overnight, either keep the machine awake or move to a VPS (cloud server). A VPS means the agent runs 24/7, your API keys and data stay on your own infrastructure, and you can trigger builds from a phone, close the app, and come back to the result.

**After the initial build.** The five-hour setup produces a working system. The value compounds through weekly refinement — 15 minutes every Friday: what did the brief miss this week, what did Cowork produce that needed redoing, what recurring task appeared this week that should be automated next? Update the relevant prompts and skills. The person who has refined their system for three months has a meaningfully different relationship with their work than the person who set it up once and never touched it.

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

## Token Conservation

Token cost isn't just a billing concern — it's a quality concern. Every message in a session causes Claude to re-read the entire conversation history. Message 30 costs 31x more tokens than message 1. At ~500 tokens per exchange, 20 messages burns 105K tokens; 30 messages burns 232K. One developer tracked that 98.5% of his tokens went to re-reading history; only 1.5% went to actual output. The session length problem compounds fast.

**Restart, don't follow up.** When Cowork produces something wrong, the instinct is to type "no, I meant..." and send another message. Don't. Every follow-up stacks on the full conversation history. Instead, click "restart the conversation from here" on an earlier message — ideally going back to the last good checkpoint. In Cowork you can't edit a previous message directly, so when something goes wrong early, start a new session with a better prompt.

**Fresh session every ~20 messages.** When a session gets long, ask Claude to summarize everything into a handoff note, copy it, start a new session, and paste the summary as the first message. You keep the context; you lose the bloat.

**Batch tasks into one message.** Three separate prompts equal three full context reloads. One prompt with three tasks equals one reload. Instead of sequential requests, combine: "Summarize this article, extract the main points, and suggest a headline."

**Match model to task.** Sonnet handles grammar checks, formatting, short answers, and brainstorming at a fraction of Opus cost. Reserve Opus (especially with extended thinking) for work that genuinely requires it: multi-step interdependent builds, complex judgment calls, and high-stakes drafts. The cost difference is significant; using Opus for everything wastes 30–70% of your budget on tasks Sonnet handles equally well.

**Keep context files lean.** Cowork reads your ABOUT ME or resource files before every task. If those files are bloated, thousands of tokens are burned before real work starts. The about-me file should stay under 2,000 tokens; all ABOUT ME files combined under 6,000. When files exceed those thresholds, Cowork starts summarizing loosely rather than reading carefully.

**Use the rolling window.** Claude operates on a rolling 5-hour usage window. Burning your entire limit in one morning session leaves most of your daily capacity unused. Splitting work across two or three sessions — morning, afternoon, evening — lets earlier usage roll off before you return.

## The Autonomous Build Pattern

For users who want Cowork to run tasks overnight or in the background, an autonomous builder pattern works well: a pending folder holds PRDs that have been approved; a scheduled task (every 30 minutes or similar) picks up any PRD from the pending folder, builds the project, and moves it to in-progress, then done or failed on completion. Build logs track what was produced. A mission control dashboard can visualize the queue and status.

This pattern works best when the laptop is awake or when running on a VPS, since local Cowork agents stop when the machine sleeps. The main use case: drop a brief before bed, wake up to a completed artifact.

## Daily Operating Rhythm

The most concrete implementation of an always-on Cowork system is a three-session daily structure, each automated or triggered at a specific time.

**Morning Briefing (7am, automated).** Before you open your laptop with intention, Cowork has already scanned your inbox and categorized every message by urgency tier, drafted responses for routine emails, flagged the two or three that need your actual judgment, pulled the day's calendar, created a prep brief for each meeting, checked Slack for overnight activity, and compiled everything into a single Morning Briefing document on your desktop. You read one file; you know exactly what the day looks like. The urgency tiers are yours to define — what counts as "needs response before 9am" in your context is different from someone else's. The more specific the tiers, the better the briefing.

**Midday Production Block (manual trigger).** This is the workhorse session. You trigger it when ready to do real work. The key distinction from chat: Cowork works on your actual files — it creates documents, updates spreadsheets, compiles reports, and saves everything where it belongs. It does not give you text to copy and paste. Build a library of task templates for your most common recurring work: each template specifies the input source, processing steps, output format, and save location. For complex jobs, Cowork can spin up sub-agents that process multiple files in parallel — a folder of 20 documents gets handled in minutes, not hours.

**End-of-Day Wrap-up (5pm, automated).** Before you close the laptop, Cowork compiles what happened: emails sent and received, meetings and what was discussed, files created or modified, tasks completed, what's still pending. The critical element is the **carry-forward section** — items that didn't get resolved today are explicitly flagged to appear in tomorrow's morning briefing as priorities. The end-of-day report seeds the next morning's briefing, creating a continuous loop of awareness where nothing falls through the cracks between days.

**Weekly refinement (15 minutes, Friday).** The system improves only if you invest in updating it. Every Friday, review the week's briefings and outputs across three questions: what did the briefing miss that you had to discover yourself? what did Cowork produce that you had to redo? what new recurring task appeared this week that should be automated next? Update the relevant prompts and templates. The person who has refined their system for three months has a fundamentally different relationship with their work than the person who set it up once and never touched it. Cowork is infrastructure you build, not a tool you use.

## Skills vs Workstations

The distinction is simple: a workstation is a place you work; a skill is a thing you do.

A workstation is an ongoing domain with accumulated context, a voice, and evolving memory — the right structure when you'll return to the same area repeatedly and want Cowork to remember what happened last time. A skill is a repeatable process you want executed the same way every time — a subject line generator, a session audit, a meeting prep checklist. Skills run on autopilot: the input changes but the output structure and process are fixed.

Common early-build skills worth having: a today skill (on-demand morning brief), a research skill (deep dive on a specific topic or ticker), a prep skill (meeting context from calendar and transcripts), and a session audit skill (scans the session at the end and writes any unsaved preferences to memory).

## Building a Plugin: The AI Employee Model

A skill is a thing you do. A plugin is an AI employee — a complete role that knows your industry, follows your exact process, produces your exact output format, and runs workflows autonomously. The distinction matters: skills handle repeatable tasks; plugins handle entire job functions.

A plugin is a folder with a specific structure:

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

**SKILL.md is the most important file.** It contains: a description block with trigger phrases and explicit negative boundaries ("use this when... do NOT use for..."), a numbered process where every step is specific and testable rather than vague ("compare current period to previous period and calculate percentage change" not "analyze the data"), an output format specification, rules (non-negotiables), edge cases, and a quality checklist that runs before every delivery.

The description trigger is the most commonly mishandled part. Too vague and the skill never activates. Too broad and it hijacks unrelated conversations. List 5–7 specific trigger phrases AND explicit negative boundaries in the same block.

**Build sequence:** Research the role first — what does this professional actually do, step by step? Then interview yourself: what's your specific version of this process, your shortcuts, your quality checks? The best plugins are built from your expertise, not generic best practices. Write the SKILL.md from that combined input. Build the supporting files (plugin.json, slash command, global instructions, reference materials). Install, test on real data — not samples — five times with different inputs. Update the SKILL.md after every run that misses.

**The refinement loop is what makes it exceptional.** By run 10, output quality is dramatically higher than run 1. By week 8 of weekly 15-minute reviews, the plugin produces work that would take a human junior hire months of training to match. The tool doesn't get better on its own — the instructions do, and the instructions are entirely within your control.

Once a primary skill is reliable, expand: add a second skill, chain skills into multi-step workflows triggered by a single command, add scheduled tasks, add sub-agents for parallel processing. A research analyst plugin can do competitive monitoring. A content plugin can produce a full week of formatted content in one production run.

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
- Consider voice input for prompts and answers. You speak at 150 words per minute; you type at 60. Tools like Wispr Flow (hold a key, speak, release — text appears wherever your cursor is) work directly inside the Cowork chat box. The speed gain is real, but the bigger benefit is richer context: speaking naturally produces more detail than a typed prompt, and more context produces better output.
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
