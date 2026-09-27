---
title: "pstack"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-24
description: "A Cursor plugin of playbooks, principles and a verification skill that makes a coding agent prove a change against the running app."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - grok-bot
  - cursor
  - agents
  - agentic-engineering
  - skills
---

# pstack

pstack is a plugin for Cursor, a code editor, written by Lauren Tan of SpaceXAI. It gives a coding agent a set of saved working methods: playbooks for common jobs, short principles, and a skill that starts the app being built and saves proof that a change works. A coding agent left alone will often report that a change works when it only compiles.

## Core takeaways

- A change counts as working when the running app shows it, and the agent saves what it saw: a screenshot, a log, a response body or an exit code.
- Work starts with `/poteto-mode`: type a goal, and it picks one of twenty-three playbooks and follows its steps.
- A skipped step stays in the list with a written reason.
- `/create-verification-skill` writes a `verify-<app>` skill: one command to drive the real app, plus a Feature Map that lists every feature and how to reach it.
- The Feature Map goes stale as the app changes, so a daily `/maintain-verification-skill` run keeps it current.
- `/deslop`, `control-cli` and `control-ui` belong to the Cursor Team Kit plugin, a separate plugin.
- This desk keeps the plugin's main rule without the plugin: no UI work is called done without a picture from the running app.

## How it works

- Install: `/add-plugin pstack` in Cursor. The same plugin is packed for Grok Bot on its marketplace.
- Setup: `/setup-pstack` finds which AI models the account can use, maps each role (writing code, judgment, review) to a model, and writes a small always-on rule file.
- `/poteto-mode`
  - Reads the goal and matches it to one playbook.
  - Copies the playbook's steps into the todo list. The first step is always to read the principles index.
  - Calls other skills as the steps need them: `/how` to learn a subsystem, `/architect` to design, `/tdd`, `/create-verification-skill`.
  - Stays on for later turns once entered.
- Playbooks cover: investigation, bug fix, performance, feature, refactoring, prototype, visual parity, eval, shipping, autonomous run, orchestrate, autopilot, session pickup, pause safely, multi-phase plan, worktree cleanup, opening a pull request.
- Principles: twenty-three short skill files, grouped as core, architecture, verification, delegation and meta. Examples, by name: prove it works; subtract before you add; test behavior, not implementation; attack the premise; never block on the human, present the result and let them correct it after.
- `/automate-me` reads recent chat transcripts and drafts a `<your-name>-mode` skill from how the person using it has worked.
- Version 0.15.0 (8 September 2026) cut token use by 3 to 11 percent depending on skills loaded, removed stray semicolons and em dashes, and cut mannered prose from the skill files.

## The verification skill

- `/create-verification-skill` reads the repo for: what kind of thing the app is (web UI, command line, API), the start command, how to drive it, what evidence can be observed, and whether two copies can run apart. It asks the person only what the code does not show.
- It writes `.cursor/skills/verify-<app>/SKILL.md` with sections Launch, Doctor, Drive, Evidence and Cleanup, plus a features folder with one file per feature, three to five to start.
- It then proves one feature end to end: launch the app, run the doctor check, drive the feature, save evidence, clean up. Evidence is screenshots, terminal transcripts, response bodies, logs, exit codes or database state.
- One shared command is better than a script the agent writes fresh each time. A fresh script per agent costs tokens and gives each agent a different check.
- The Feature Map is written for the agent: what the app has, how to reach each part, keyboard shortcuts. Its index is the order for a full regression sweep.

```
goal
  |
/poteto-mode -> playbook -> steps in todo list
  |
change made
  |
verify-<app>: launch -> doctor -> drive -> evidence
  |
proof saved -> done
```

## The architect skill

- Ground: run `/how` over the parts of the code the change touches.
- Sketch: several models each draft a design; at least two distinct candidates; the best of them is merged into one package.
- Implement: replace stubs with code. Where the code does not match the sketch, the agent writes the mismatch down.
- Scrap: when the same kind of mismatch keeps coming back (workarounds, type escape hatches, shared state), drop the design, redesign from first principles, and go back to Sketch.

## At Grok Bot Galaxy

Grok Bot Galaxy was a public livestream by SpaceXAI, 15 to 17 September 2026, in which three SpaceXAI staff built a company on camera over three days. The company, Ship by Thursday, changed product twice: software for running a food pop-up on the first day, then a browser card game, launched on the third day as Thursday Arena.

- Day 1: a Cursor Cloud Agent, a coding agent on its own virtual machine that opens pull requests, used pstack to make a `verify-thursday` skill for the pop-up software. Pull request 10 merged it. The three staff ruled that proof files stay on disk and out of git.
- Day 2: Poteto Mode and a `/verify-cupcake` run were shown before a group of agents was allowed to work alone.
- Day 2: the architect skill ran four models on a prototype design for the game; the staff skipped the result for the prototype.
- The full autopilot playbook spawns agents that build and agents that run the code to check it. With `/setup-pstack` at its highest level, a group of agents clicks through the app like users.

## This desk

- Not installed. The desk's Grok Bot bots only report, and have no app to drive.
- Cursor Cloud Agents on this desk produced a `verify-logos52` skill with a weekday 08:15 maintain routine, in a draft pull request with checks green and unmerged as of 18 September 2026. The owner merges pull requests himself.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Cursor Team Kit|Cursor Team Kit]]
- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]

## Sources

- [pstack README](https://github.com/cursor/plugins/tree/main/pstack): install, `/poteto-mode`, twenty-three playbooks, skills table, principles index, `/setup-pstack`, `/automate-me`. Read 2026-09-17.
- [create-verification-skill](https://github.com/cursor/plugins/blob/main/pstack/skills/create-verification-skill/SKILL.md): interview the repo, generate `verify-<app>`, seed the Feature Map, prove one feature, offer maintain.
- [architect](https://github.com/cursor/plugins/blob/main/pstack/skills/architect/SKILL.md): ground, sketch, implement, scrap.
- Grok Bot marketplace: https://x.ai/bot/plugin/9717366
- Example generated skill for a fictional app: https://github.com/poteto/verification-skill-example
- X articles: [Loops You Can Trust](https://x.com/poteto/status/2069824386283319343) (24 June 2026); [Part 1, verification](https://x.com/poteto/status/2094457600259842065) (31 August 2026); [Part 2, research and architecture](https://x.com/poteto/status/2097732320606507506) (9 September 2026). Part 3 announced, not published as of 17 September 2026.
- 0.15.0 notes, 8 September 2026: token savings, attack-the-premise, test-behavior-not-implementation. https://x.com/poteto/status/2097380152703615396
