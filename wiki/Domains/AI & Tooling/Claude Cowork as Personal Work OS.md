---
title: "Claude Cowork as Personal Work OS"
type: workflow
status: developing
created: 2026-05-23
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 11
description: "Setting up Claude Cowork with plain text instruction, memory and skill files so it keeps your context between sessions."
tags:
  - cowork
  - agentic
  - workflow
  - workflows
  - memory
  - productivity
---

# Claude Cowork as Personal Work OS

Claude Cowork is a mode of the Claude desktop app that works on the files in a folder you choose and on the apps you connect to it. A few plain text files in that folder hold your projects, your rules and your writing style. Cowork reads those files, so you stop explaining the same context every time you open it.

## Takeaways

- One instruction file loads every session, so keep it short.
- The instruction file holds rules.
- The memory file holds facts that change.
- Split work into areas, each with its own rules and memory.
- Do a task by hand first, then save it as a skill.
- Put a skill on a schedule only when it needs no judgment.
- Old memory moves to an archive file that loads only on request.

## What Cowork is

Cowork sits in the Claude desktop app beside Chat and Code, and it needs a paid plan. You give it an end goal. It plans the work, splits the plan into steps, runs any code in a sealed workspace and hands back the result. By default the work runs on Anthropic's computers, and Cowork can reach the files on your own machine only while the desktop app is open. Each Cowork session starts with more setup than a session in Claude Code, so a job that only edits files costs less in Code.

- It reads, moves, renames and creates files in a folder you allow.
- Connectors link it to your mail, calendar and other apps.
- It can run a task on a schedule, such as a morning digest.
- It can drive the screen when an app has no other way in.

## How the files work

The setup is a folder with an instruction file, a memory file and a resources folder, all plain text. The instruction file is named CLAUDE.md, Cowork reads it at the start of every session, and it says how Cowork should behave. The memory file is named memory.md, it holds what is going on right now, and a rule in the instruction file tells Cowork to read it first and to write to it when you say "remember this". The resources folder holds longer material, such as a description of your writing voice, which Cowork opens only when a task needs it.

```
root:  CLAUDE.md  memory.md  resources/
  |
  +-- email/     CLAUDE.md  memory.md  resources/
  +-- finance/   CLAUDE.md  memory.md  resources/
        |
        +-- trip-2026/  CLAUDE.md  memory.md
```

- Root rules apply to everything, and area rules add to them.
- An area is a part of your life: email, finances, a newsletter.
- A project inside an area gets its own three files.
- A table in the root file maps each task to an area.
- A rule lives in one file only, never repeated lower down.

## Keeping it lean

Both root files load at the start of every session, so every line in them costs tokens every time. One user cut his instruction file from over 600 lines to about 250, and his token use fell by about a quarter. The test for a rule is whether Cowork needs it in every session or only for a particular task. A rule for a particular task moves to a reference file, and a one-line pointer to that file stays behind. The same test sorts memory from rules. A line with "always" or "never" in it is a rule. A fact that could change tomorrow is memory.

- Instruction file: 200 to 250 lines, 300 at most.
- Memory file: one or two sentences per entry, 150 lines at most.
- Over either limit, compress and archive instead of raising the limit.
- archive.md keeps old entries and loads only when you ask about them.
- Each area keeps its own memory, so the root stays small.

Cowork can run on a cheaper Claude model or a larger one. Use the cheaper model by default and the larger one only for a long chain of steps.

## Skills and schedules

A skill is a saved set of instructions for one task you repeat. The order that works is to do the task in a normal session, adjust it until the result is right, and then ask Cowork to make a skill from what it just did. An area is where you work on a part of your life, and a skill is one task you run. A task that needs your decisions along the way stays in an area. A task that runs like a checklist becomes a skill, and a skill can go on a schedule.

- Start with two or three areas, and add one as needs appear.
- End a session with an audit that saves any unsaved preferences.
- Ask for a written plan and your sign-off before any build.
- Require a confirmation before anything hard to undo.
- Memory grows over time and needs regular trimming.

## On this desk

This setup splits the work between Cowork, a coding agent and a cloud bot. Cowork takes the decisions that need judgment. Checking on work that ran while you were away is one more switch of attention in the day. Scheduled output is therefore kept to what gets read.

- The coding agent writes the code.
- The cloud bot does the monitoring while the laptop is closed.

## Related pages

- [[wiki/Self Management/Flow State|Attention Management]]: checking on unsupervised autonomous work is one more context switch, and the daily rhythm carries that cost.
- [[wiki/Workflows/Knowledge Base as Thinking Partner|Knowledge Base as Thinking Partner]]: the thinking-partner use case lives there. Cowork adds the writing of files back into the vault.
- [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition]]: the decision between supervising the agent and letting it run.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the doctrine of specs, verification, and a standard a human sets. Cowork is one implementation.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: the live split. Cowork makes judgments, the coding agent executes, the cloud bot does the always-on monitoring.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: why a compiled markdown wiki is the context layer agents should read.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: the local-agent rung on that page's ladder of skills. Cowork is the worked example.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]]: the related page on conduct and on keeping the thinking with the user.
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: Cowork as a work OS is not vibe coding applied to a person's life.

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
