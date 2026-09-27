---
title: "pstack"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-27
description: "A Cursor plugin of playbooks, principles and a verification skill that makes a coding agent prove a change against the running app."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - grok-bot
  - cursor
  - agents
  - agentic-engineering
  - skills
---

# pstack

# pstack

pstack is a plugin for Cursor, a code editor, written by Lauren Tan of SpaceXAI. It gives a coding agent a set of saved working methods: playbooks for common jobs, short principles, and a skill that starts the app being built and saves proof that a change works. It exists because a coding agent left alone will often report that a change works when it only compiles.

## Core takeaways

- A change works when the running app shows it and the agent saves proof.
- Proof is a screenshot, a log, a response body or an exit code.
- `/poteto-mode` takes a goal and picks one of twenty-three playbooks.
- A skipped step stays in the list with a written reason.
- `/create-verification-skill` writes one command that drives the real app.
- A daily run keeps its list of features current.
- This desk keeps the main rule without the plugin.

## How it works

Install it with `/add-plugin pstack` in Cursor. The same plugin is packed for Grok Bot on its marketplace. `/setup-pstack` finds which AI models the account can use, assigns one to each of three roles, writing code, judgment and review, and writes a small always-on rule file. From then on, work starts with `/poteto-mode`: it reads the goal, matches it to one playbook, copies the playbook's steps into the todo list, and calls other skills as the steps need them. It stays on for later turns once entered.

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

- The first step is always to read the principles index.
- Skills it calls: `/how` to learn a subsystem, `/architect`, `/tdd`.
- Playbooks include bug fix, feature, refactoring, prototype and shipping.
- Others: investigation, performance, visual parity, eval, autopilot.
- More: session pickup, pause safely, worktree cleanup, opening a pull request.
- Principles are twenty-three short files in five groups.
  - The groups: core, architecture, verification, delegation, meta.
  - Examples: prove it works, subtract before you add, attack the premise.
  - Also: never block on the human, present the result, take corrections after.
- `/automate-me` drafts a personal mode skill from recent chat transcripts.
- Version 0.15.0, 8 September 2026, cut token use by 3 to 11 percent.
  - It also cleaned stray punctuation and mannered prose from the skill files.
- `/deslop`, `control-cli` and `control-ui` belong to Cursor Team Kit, a separate plugin.

## The verification skill

`/create-verification-skill` reads the repository to learn what kind of app it is (web, command line or API), how to start it, how to drive it, what evidence can be observed, and whether two copies can run apart. It asks the person only what the code does not show. It writes `.cursor/skills/verify-<app>/SKILL.md` and a features folder, then proves one feature end to end. One shared command beats a script each agent writes fresh, because fresh scripts cost tokens and give every agent a different check.

- Sections: Launch, Doctor, Drive, Evidence, Cleanup.
- One file per feature, three to five to start.
- The proof run: launch, doctor check, drive, save evidence, clean up.
- Evidence can also be terminal transcripts or database state.
- The Feature Map lists what the app has and how to reach each part.
- Its index sets the order for a full regression sweep.
- `/maintain-verification-skill` runs daily so the map does not go stale.

## The architect skill

The architect skill designs a change in four stages: ground, sketch, implement and scrap. Several models draft designs, the best is merged, and the agent writes down every place the code does not match the design. When the same kind of mismatch keeps returning, the design is dropped and the skill goes back to sketching.

- Ground: run `/how` over the code the change touches.
- Sketch: at least two distinct candidates, merged into one package.
- Implement: replace stubs with code, logging each mismatch.
- Scrap: workarounds, type escape hatches or shared state recur, so redesign.

## At Grok Bot Galaxy

Grok Bot Galaxy was a public SpaceXAI livestream, 15 to 17 September 2026, in which three staff built a company called Ship by Thursday on camera. It started as software for running a food pop-up and launched on the third day as a browser card game, Thursday Arena. A Cursor Cloud Agent, a coding agent on its own virtual machine that opens pull requests, used pstack along the way.

- Day 1: pstack made a `verify-thursday` skill, and pull request 10 merged it.
- The staff ruled that proof files stay on disk and out of git.
- Day 2: Poteto Mode and a `/verify-cupcake` run came before agents worked alone.
- Day 2: the architect skill ran four models on a game design.
  - The staff skipped the result for the prototype.
- The autopilot playbook spawns builder agents and checker agents.
- With `/setup-pstack` at its highest level, agents click through like users.

## This desk

pstack is not installed here. The desk's Grok Bot bots only report and have no app to drive. The rule kept from the plugin is that no UI work is done without a picture from the running app.

- Cursor Cloud Agents made a `verify-logos52` skill here.
- It has a weekday 08:15 maintain routine.
- Draft pull request, checks green, unmerged as of 18 September 2026.
- The owner merges pull requests himself.

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
