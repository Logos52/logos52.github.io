---
title: "Claude Cowork as Personal Work OS"
type: workflow
status: developing
created: 2026-05-23
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 11
tags:
  - cowork
  - agentic
  - workflow
  - workflows
  - memory
  - productivity
---

# Claude Cowork as Personal Work OS

Claude Cowork is a desktop agent. It reads and writes files on the local machine, following standing instructions kept in markdown files, and it does this in every session. The quality of the resulting system depends on those files and rules much more than on the model. Cowork is one layer of a stack: it makes the judgments. A local coding agent executes code. A cloud bot does the always-on monitoring. The live split between the three is on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] holds the doctrine this setup follows: specs, verification, and a standard that a human sets.

Because the system is made of files, every rule, preference, and workstation that is written down remains for the next session, and the next session goes better for that reason alone. Running local Cowork for knowledge work alongside a cloud dashboard for personal data that should stay in view is the same three-way split, seen from the file side. Overnight work needs a machine that stays awake.

## Core takeaways

- Two files run the root. `CLAUDE.md` holds the rules and loads every session. `MEMORY.md` holds facts that change. Rules and facts never share a file.
- The root file stays at 200 to 250 lines and never passes 300. The memory file stays under 150 lines; past that, entries get shortened and old ones move to `archive.md`.
- Every message makes the agent reread the whole conversation, so answers get worse as a session grows. A fresh session about every twenty messages, and several tasks in one message, limit that.
- A short PRD with explicit sign-off comes before any workflow, dashboard, or automation. Autonomy comes last, as a queue of approved builds.
- For each task, choose the smallest of the eight product layers that can do it. A workstation is an area of repeated work; a skill is a fixed checklist; programming goes to the coding agent.
- Sessions improve only when an end-of-session audit writes new rules into `CLAUDE.md` and new facts into `MEMORY.md`.

## Two ways to build it

Two approaches use the same set of files. The ambitious build runs overnight jobs, daily digests from mail and calendar, and a dashboard, and it starts every significant build with a short spec. It produces more and runs with less supervision. It also takes more setup, stricter upkeep of the memory files, and a machine that stays awake. The sustainable build treats Cowork as a reliable co-worker: a three-level folder hierarchy, a short instruction file, a short memory file, and little maintenance. That build is easier to start and less likely to grow past its limits. Both builds use the same files. They differ in how much automation is added on top.

## Local machine or cloud

Most guides skip the choice between a local system and a cloud system. A local markdown OS keeps instructions and memory in `.md` files that the agent reads at the start of each session. Those files can be moved and edited, and they depend on no outside service. The system lives on one machine and stops when that machine sleeps, so overnight work needs the machine kept awake or a remote box. A cloud build has a coding agent set up a web app on a cloud database. That system runs all the time, works from any device, and can take voice-to-text input into the database. It costs more: the user needs to be comfortable with a coding agent, and the build needs a database, a design pass, and a security check. The messengers, hosts, and voice products that guides name are one person's choices; none of them is required. Many people run both: local Cowork for knowledge work and a cloud dashboard for data that should stay in view. That combination fits most cases. A local system and a cloud system can run at the same time.

## The root files and the folder levels

Two files run the root. `CLAUDE.md` holds the instructions: tone, format, guardrails, routing, and pointers to other files. The agent loads it at the start of every session. `MEMORY.md` holds facts that persist between sessions: active projects, scheduled tasks, stable facts. Some product scaffolds write `memory.md` or a `memory/` folder instead; the name used in this system is `MEMORY.md`. Telling the agent "remember this" writes to that file only if the root file says to.

Root files apply everywhere. A workstation's files apply only inside that workstation. A project's files apply only to that project. Each level has the same three parts: instructions, memory, resources. The purpose of the levels is to give the agent the context that fits the current task. The agent works better when it gets the right amount of context at the right level of detail, because the context window holds a limited number of tokens. [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] covers that in more depth.

Rules and facts go in different files. When instructions and changeable facts sit in the same file, the system works less well. A line of the form "always", "never", or "before doing X, do Y" goes in `CLAUDE.md`. A line of the form "currently true", "this happened", or "this may change" goes in `MEMORY.md`.

## A three-folder alternative

A three-folder layout is another valid setup. It does not need its own separate manual. The folders are ABOUT ME, OUTPUTS, and TEMPLATES. Standing instructions in the desktop settings take the place of a root `CLAUDE.md`. Those instructions say: read every ABOUT ME file before every task; do not touch OUTPUTS or TEMPLATES unless told to; save deliverables in a named subfolder of OUTPUTS. Example ABOUT ME files: a short self-portrait, a list of banned words so the agent does not write in the default model voice, and a company file that gets updated when priorities change. One practitioner's self-portrait came to under 2,000 tokens after an interview-and-extract process. A 1,000-token company file is a stricter version of the same "keep it short" rule. When the combined ABOUT ME files grow large, they use up tokens before the task begins. A 6,000-token figure for that point is not a product limit. Templates come from finished outputs: "save this as a template" removes the content and keeps the structure. No template needs to be designed in advance.

## The eight layers of the product

The product has eight layers, each with a different job: folder access, instructions, skills, connectors, plugins, scheduled tasks, projects, and handoff to the coding agent. All eight exist in the 2026 product. For any task, the design question is which layer is the smallest that can do it. A full project for a small skill, a skill when a connector is needed, and Cowork when the coding agent is better are all the same mistake: a bigger layer than the task needs.

Connectors link the agent to mail, calendar, drive, an office suite, chat, and notes. Which connectors are available depends on plan and region. Plugins bundle skills and connectors for one domain. An official set of eleven shipped at launch, Productivity among them. Check the current plugin directory for what each plugin connects to; a note of which data warehouse a finance plugin used at one time goes stale. The Productivity Plugin is the fastest way to set up the files: `/start` creates a tasks file, a dashboard, memory files, a directory structure, `CLAUDE.md`, and `MEMORY.md`. Read the generated files before relying on them. Scheduled tasks are a first-party product feature: recurring background runs for a morning brief or a monthly cleanup. The coding agent in the same desktop app is the tool for complex software work.

## Line limits for the root and memory files

Keep the root `CLAUDE.md` at 200 to 250 lines, and never past 300. Those limits are this system's own rule; the vendor does not set them. One practitioner cut a root of 600+ lines to about 250 and reported a token drop of roughly 25%. A good root holds the memory-system rules, communication preferences, guardrails, a routing map, one-line pointers, and a one-line pointer to the workstation-creation protocol rather than the protocol itself. For each line, ask whether the agent needs it in every session or only when one kind of task comes up. Lines of the second kind move out of root.

`MEMORY.md` holds current facts. `archive.md` holds old facts. The memory file stays under 150 lines. When it passes 150, shorten the entries and move old ones to `archive.md`. Do not raise the limit. One practitioner's root stayed under 100 lines after months of use; that is one data point, not a limit. The agent does not read `archive.md` at session start unless a root instruction says to, and otherwise reads it only when asked about history. Each workstation and each project has its own `MEMORY.md`. Root only needs to record that a project exists and where it is. The read order is: root memory confirms the project exists, the routing map gives its location, then the workstation memory, then the project memory.

## Long conversations cost quality

Extra tokens in the context make the agent's answers worse, as well as costing money. Every message makes the agent reread the whole conversation history; that is how the standard chat API works. Prompt caching changes the price of that reread, not the fact that it happens. If each exchange is the same size, turn *n* sends about *n* times the first turn's new tokens: 30× at turn 30, not 31×. At about 500 new tokens per exchange, twenty messages use 105K tokens and thirty use 232K, from the triangular sum `500 × n(n+1)/2` with no cache. Real sessions also send the system prompt, `CLAUDE.md`, and memory on every turn, so history is a smaller share of the total and the total is higher. Caching can make the repeated reread cheap. One anonymous developer measured 98.5% of tokens going to rereading history and 1.5% to output. That is one measurement without cache, not a Cowork average.

The instruction that follows from this: start a new session instead of continuing a long one. Cut the earlier messages from the conversation. The desktop interface changes over time; the action is cutting the earlier messages, whatever the button is called. One claim is that a previous message cannot be edited; that describes the product interface at one time and may change. Start a fresh session about every twenty messages, and paste a handoff note as the first message of the new one. Twenty is a round number, not a measured point where quality drops. Put several tasks in one message. Three separate prompts cause three full rereads of the history. One prompt with three tasks causes one.

## Which model to use

The cheaper, faster model handles grammar, formatting, short answers, and brainstorming. By default that is about 80% of the work. The stronger model is for multi-step builds where the steps depend on each other, and for complex judgment; the usual threshold is three or more dependent steps. Using the strongest model for everything spends 30–70% of the budget on work the cheaper model does well enough. The cheaper model does not do that work equally well, only well enough.

## Rules for how the agent acts

`CLAUDE.md` does two jobs. It routes the agent to the right files, and it sets rules for how the agent acts. A personal AI OS needs both: a context architecture (what the agent knows) and a conduct architecture (how the agent acts). Without conduct rules, an autonomous Cowork adds features nobody asked for, edits neighbouring files, hides its uncertainty, and treats a vague request as permission to act. Four standing principles: Think before acting. Simplicity first. Surgical changes. Goal-driven execution. A public conduct file of about 60 lines carries a similar list; the line count is not fixed. Those four principles, plus four operating principles pasted in before any folders or PRDs exist (PRD-first; push back and clarify; aggressive note-taking; reversibility), change how the whole system behaves. Without them the agent builds quickly and with confidence, and builds the wrong thing.

## Write a PRD before building anything

Before any workflow, dashboard, or automation, write a PRD. Without one, Cowork can build something that looks right and is wrong, and the user finds out an hour later. A minimal PRD has: the problem; what done looks like; what is out of scope; the simplest acceptable solution; what cannot be touched; and the checks that prove the work complete. Wait for explicit sign-off before building. Build the data layer first, then dashboards, skills, and automations on top of it. One documented ambitious build took about five hours and produced a live system with connectors working. That was one demonstration; do not expect the same time for other builds. The PRD for a mission-control dashboard comes from an interview about goals, tools, and priorities, then gets reviewed and approved before anything is built. The scaffold is: a folder, a project on that folder, the PRD placed in it, then `/start` from the Productivity Plugin. The sequence matters; the time each step takes does not. Confirm live data from every planned connector before building a dashboard. Then build a dashboard over existing data, a morning brief with explicit urgency tiers (needs a response before a morning cutoff / can wait / informational), and a small set of skills. Those three are examples, not a required set. Notifications and end-to-end testing come last. A build that follows a PRD ends close to done; what remains is permissions and small adjustments.

## Workstations, skills, and plugins

A workstation is an area of work the agent returns to many times. It has its own context, rules, examples, and memory. It is not a folder for one-off tasks. Universal workstations (email, writing, research) suit workflows that cut across all of life. Dedicated workstations (personal finance, travel, a newsletter, investing) suit workflows that belong to one domain. Email HQ knows the greeting and sign-off, the rule to search before drafting, and that email tone differs from the general writing voice. Newsletter HQ knows the audience, voice examples, a drafting workflow, and a publishing checklist. Personal Finance knows a category taxonomy, vendor corrections, and tax deadlines. The best workstations hold context that the user would otherwise have to repeat in every session.

A skill is one task with a fixed checklist.

| Situation | Home |
|---|---|
| Ongoing area with its own context | Workstation |
| Human judgment inside the workflow | Workstation |
| Same checklist every time | Skill |
| Creates or updates durable files and memory | Workstation or project |

"Work on my next newsletter" is a workstation, because it involves decisions. "Generate five scored subject lines from the final draft" is a skill, because it is a fixed checklist. Do not create a skill before the workflow has proven itself: one or two real uses, then package it. The progression is one-off → refined workflow → skill → scheduled task.

A plugin packages a role for one domain: knowledge of the field, a process, and runs that need no prompting. Calling it a role does not make the plugin a person, and it does not mean the plugin runs without supervision. The file that matters most is `SKILL.md`. It holds a description block with trigger phrases and explicit statements of what the skill does not cover, numbered steps that can be tested, the output format, rules, edge cases, and a quality checklist run before every delivery. If the trigger is too vague, the skill never runs. If the trigger is too broad, the skill runs in conversations where it does not belong. The build sequence: research the role, hold an interview, write `SKILL.md`, add supporting files, test on real data with different inputs, and update the file after every miss. The tool stays the same; the instructions get better. Without connectors, Cowork works only on local files. A skill can be called by name, or it can start when the agent recognises the context. Plugins may be the most effective entry point for domain-specific workflows. That ranking has not been measured.

## Handing work to the coding agent

Some work is beyond what Cowork can do on its own. Use Cowork to define the project, the architecture, the memory, and the workflows. Switch to the coding agent for programming, complex file manipulation, and code spread across many files. Both tools share the same workspace folder, so the handoff is pointing the coding agent at that directory. Cowork does the coordinating. The coding agent does the execution.

## Giving Cowork a description of the user

Before asking Cowork to organise a set of notes, tell it who the notes belong to. Point it at a small set of high-signal notes and ask for an About Me digest: values, interests, goals, frameworks, themes, ranked projects, recurring questions. Paste the digest into the standing personal preferences. Voice principles tell the agent how the user sounds. The dossier tells it what the user cares about and which distinctions matter. Without the dossier, Cowork works on the local files but sorts them into categories that would fit anyone. Those categories are correct in general and wrong for this user.

## Working against a note vault

The use of Cowork as a thinking partner is covered on [[wiki/Workflows/Knowledge Base as Thinking Partner|Knowledge Base as Thinking Partner]]. What Cowork adds to that is writing files back into the vault. Structured notes are the best context an AI can be given. A markdown vault with metadata, ranked importance, maps of content, and cross-references gives the agent a structure it can move through instead of an unordered set of files. That is why [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]] argues for a compiled markdown wiki as the context layer. Well-organised notes produce better results than any single prompt. Uses: a weekly review based on the actual notes; a synthesis that writes a markdown file back into the vault; maps of content that list notes with no links to them. The AI points out contradictions between notes. The user decides how to resolve them. The markdown knowledge base stays the source of truth. Cowork reads it, synthesises, and writes back.

## Three sessions in a day

The most concrete always-on setup is three sessions a day. The morning briefing runs on its own: it sorts the inbox by urgency, drafts routine replies, flags two or three messages for the user's judgment, pulls the calendar, writes a prep brief for each meeting, and puts all of it in one desktop file. The test of the brief is whether reading that one file shows the whole day. Not every brief passes. The midday production session is started by hand, and Cowork works on actual files. Task templates state the input source, the processing steps, the output format, and where to save. For large jobs the product can start sub-agents. They work some of the time and fail at other times, and the product does not guarantee that they run in parallel. The end-of-day wrap-up runs on its own: mail sent and received, meetings, files touched, tasks done, tasks still pending. The most useful part is a carry-forward section that appears in the next morning's brief as the day's priorities.

Once a week, on Friday, spend a short time reviewing the system. Fifteen minutes is one person's habit, not a measured best length. Ask three questions: what did the brief miss; what needed redoing; which recurring task should be automated next.

## The autonomous build queue

Autonomous building means a queue of approved build units. It does not mean the agent does whatever it decides. A brief left in the queue at night becomes a finished artifact by morning only if a machine stayed awake and the brief was approved.

The folders for autonomous builds are one person's layout, not a product feature: `pending/`, `in_progress/`, `done/`, `failed/`, `logs/`. A scheduled task picks up approved PRDs, builds them, and moves them from folder to folder. How often it runs is one person's choice. Guardrails: only approved PRDs enter the queue; the agent asks before any destructive action; failed builds are logged and not retried without notice; a verification check runs before anything moves to `done/`. With a `failed/` folder and logs, nobody has to watch the queue while it runs. Local Cowork still stops when the laptop sleeps. A remote box runs all day and night, with API keys and data on that machine, and builds can be started from a phone. Put on the remote box only what the user would already hand to a cloud agent. Anything else stays local.

## HTML for review, markdown for storage

Markdown is the source of truth. HTML is a temporary artifact for review. Markdown works well for durable notes; complex agent work often needs a richer surface for review. HTML artifacts are useful for PRDs with diagrams and tradeoffs, for dashboards, for visual research reports, and for custom editors that export JSON, markdown, or prompts. The useful pattern is an HTML page with an export path: copy as markdown, or copy as a diff.

## Closing a session

Sessions build on each other only when useful discoveries get written to a file before the session ends. The end-of-session audit lists: new preferences; rules for `CLAUDE.md`; facts for `MEMORY.md`; old facts to move to the archive; follow-up tasks. Compress each item. Do not paste the conversation. After something goes especially well, ask whether the process should become a skill, a scheduled task, or a project rule. The loop is: do work → audit → save reusable lessons → compress old context → next session better.

## Moving old Claude Projects in

In Claude Projects, as of a mid-2026 desktop, instructions could not be edited by a program, and AI-generated project memory could not be structured or edited directly. That is a limit of the product interface at that time; check again before treating it as current. The migration map: project instructions go to a workstation or project `CLAUDE.md`; project memory goes to an editable `MEMORY.md`; knowledge files go to `resources/`; a repeated workflow goes to workstation rules or a skill. After migrating, tell Cowork about the change; it writes the correct file, and the routing map gets a new entry. Moving a project this way turns an old chatbot workflow into a local system whose files improve over time.

## Ways the system fails

Each of these failures has a fix.

| Failure | What it looks like | Fix |
|---|---|---|
| Root bloat | Every new lesson lands in root, even when task-specific | Root holds routing and governance only; task-specific lessons go elsewhere |
| Memory bloat | An unstructured transcript of old facts | Ceilings, 1–2 sentence entries, per-workstation memory, `archive.md` |
| Rule-memory confusion | Prescriptive language in memory, changeable facts in rules | Regular audit against the always/never vs currently-true test |
| Workstation sprawl | A folder for every passing interest | Start with two or three; add only on recurring need |
| Capability confusion | A full project for a small skill, a skill when a connector is needed, Cowork when the coding agent is better | Smallest layer that fits |
| Skill misuse | Judgment-heavy workflows packaged as skills, or small checklists turned into workstations | Ask whether it is an area of repeated work (workstation) or a fixed checklist (skill) |
| Autonomous drift | Builds without alignment, review, or logging | PRD-first, sign-off, queue states, dashboard |
| Agentic overreach | A local request treated as permission to improve the surrounding system | Every changed line comes from the request or an approved PRD; extra cleanup is proposed, never done unasked |
| Hidden ambiguity | The agent silently picks an interpretation | Name the ambiguity, state the assumption, ask when the wrong choice is costly |
| Generic personalization | Categories that are correct in general and wrong for this user | Dossier and high-signal resource files |
| Unreadable plans | Dense specs that cannot be reviewed | HTML artifacts for dense specs |

## How to start

Start with the root, one universal workstation, and one dedicated workstation. Add more when the same friction repeats. One example tree, not the required one: root `CLAUDE.md`, `MEMORY.md`, `archive.md`, and `00_resources/` (voice principles, the about-me dossier, memory-system rules, and a pointer to the workstation-creation protocol); one Email HQ; one Writing HQ; a Mission Control dashboard over queues, briefs, and builds; and a small skills folder once a workflow has proven itself. Add autonomy last. Write conduct rules and a PRD before creating folders. Prove a skill by hand before scheduling it. Set up an approved queue only after both.

## Oversight and the case against

Checking on unsupervised autonomous work is one more context switch in the day. [[wiki/Self Management/Flow State|Attention Management]] covers that cost. Running Cowork well means deciding when to supervise and when to let it run; [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition]] covers that decision. [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] covers the related point: the user should still do the thinking that the files record.

The arguments against this setup. Local Cowork stops when the machine sleeps. Autonomy without a PRD queue produces builds that go in the wrong direction. Putting mail and API keys on a remote box is a security decision with real risk, not a convenience setting. Scheduled tasks, plugins, skills, and connectors are product features. `pending/` queues, Friday reviews, and voice input into a database are recipes from individual users. The recipes are not part of the product. A user who waits for the product to supply them will keep waiting.

## What it costs, when to pull back, how to check

The cost is setup hours, then a short weekly review. The quality loss from extra tokens remains even when caching makes the money cost small. A root file past 300 lines stops working as a routing file and becomes a store of lessons.

Pull back when two weeks of unsupervised autonomy produce artifacts that look right and are wrong, or when the root file passes 300 lines and no longer routes. The next move is to cut autonomy back to an approved queue, compress the root to routing, and supervise until the morning file can be acted on without reopening mail.

Two checks show the system works: a morning file that can be acted on without reopening mail, and a session audit that changed a file.

## How to practice this

1. Write the root `CLAUDE.md` and `MEMORY.md`, then one universal workstation and one dedicated workstation. Add a folder only when the same friction repeats. Notice whether the root stays under 300 lines as lessons accumulate.
2. Go through every line in the root files. Move each "always" or "never" rule to `CLAUDE.md` and each changeable fact to `MEMORY.md`. Notice whether any rule sits in memory or any fact sits in the rules.
3. Before building anything, write a PRD: the problem, done, out of scope, simplest solution, what cannot be touched, checks. Wait for explicit sign-off before building. Notice whether the finished build leaves only permissions and small adjustments.
4. Start a fresh session about every twenty messages, with a handoff note as the first message. Put several tasks in one message instead of sending them one at a time. Notice whether answers improve after the restart.
5. End every session with an audit: new preferences, rules for `CLAUDE.md`, facts for `MEMORY.md`, facts to archive, follow-up tasks. Notice whether at least one file changed.
6. Run the morning brief and read the one file it produces. Notice whether the day can be acted on without reopening mail.

## Related pages

- [[wiki/Self Management/Flow State|Attention Management]]: checking on unsupervised autonomous work is one more context switch, and the daily rhythm carries that cost.
- [[wiki/Workflows/Knowledge Base as Thinking Partner|Knowledge Base as Thinking Partner]]: the thinking-partner use case lives there. Cowork adds the writing of files back into the vault.
- [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition]]: the decision between supervising the agent and letting it run.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the doctrine of specs, verification, and a standard a human sets. Cowork is one implementation.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: the live split. Cowork makes judgments, the coding agent executes, the cloud bot does the always-on monitoring.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: why a compiled markdown wiki is the context layer agents should read.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the right context at the right level of detail, covered in more depth.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: the local-agent rung on that page's ladder of skills. Cowork is the worked example.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]]: the related page on conduct and on keeping the thinking with the user.
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: Cowork as a work OS is not vibe coding applied to a person's life.

## Open questions

- The right balance of autonomy versus oversight, and how that balance shifts as the system matures.
- Memory architecture as projects accumulate: the structural limits of the cascade. One root staying under 100 lines is a data point, not a limit.
- Whether heavy Cowork use reinforces or erodes independent judgment and taste. The live stack page is where this is being tested in practice.
- When a Cowork-style system starts competing with a traditional second brain, and whether that is a problem.
- Whether conduct architecture should become a standalone concept page across agentic systems. The four principles already live in this vault's Cowork contract and on Agentic Engineering.
- Whether the personal context dossier should become standard onboarding for any agentic system.

## Sources

- [My Full Claude Cowork Setup](https://www.youtube.com/watch?v=gdrPkpXuNks). Tina Huang. Ambitious overnight build, daily digest, dashboard, PRD-first.
- [My Simple Claude Cowork System (for normal people)](https://www.youtube.com/watch?v=0_dSWLOHKng). Jeff Su. Three-level hierarchy, lean files, sustainable co-worker.
- [Top 5 Claude Cowork Tips I Wish I Knew from Day One](https://www.youtube.com/watch?v=4wvLHFgnQZQ). Jeff Su. 300-line root, 150-line memory, memory file for current facts with an archive file for old ones, workstation vs skill.
- [Give Me 20 Minutes. I'll Teach You 80% of Claude Cowork](https://www.youtube.com/watch?v=uGwDuvSqgYI). Nick Milo. Dossier from a high-signal note subset; thinking companion against a linked vault.
- [Claude Cowork Fundamentals In 22 Minutes](https://www.youtube.com/watch?v=s3ccD6m6WKc). Tina Huang. Product surface: folders, skills, connectors, plugins.
- [A public ~60-line conduct file](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md). Third-party mirror of lean guardrails (think before acting; simplicity; surgical changes; goal-driven execution). Not a first-party canonical file.
- [Local vs cloud personal OS](https://x.com/milesdeutscher/status/2056750252175364388). Miles Deutscher. Cloud dashboard pattern; recipes, not a required stack.
- [April 2026 Cowork update](https://x.com/i/status/2042105069550932138). Ruben Hassid. History reread, triangular token use, restart / batch / match-the-model, three-folder ABOUT ME shape.
- [Automating the workflow](https://x.com/i/status/2052684086414852546). Plugin and automation pattern.
- [Building a Cowork plugin](https://x.com/i/status/2052319978662347226). Packaged role, `SKILL.md` as the main file.
- [The unreasonable effectiveness of HTML](https://x.com/i/status/2052809885763747935). HTML as a review surface with an export path back to markdown.
