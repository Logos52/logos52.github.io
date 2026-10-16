---
title: "pstack"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-17
description: "A coding agent that cannot open the app leaves you as the person who clicks. pstack packages a ban on calling the job done without proof from the running app. This desk keeps the ban; it installs the plugin only after one local reader can already be driven without a person."
tags:
  - grok-bot
  - cursor
  - agents
  - agentic-engineering
  - skills
---

# pstack

A coding agent can change files without you knowing the rest of the repo. It still cannot, by default, open the application, click what a user would click, see a wrong result, and keep going. You do that checking. Your day becomes reviewing work that was never held up to the screen.

pstack is a plugin of written procedures that tries to take that checking off you. You install it in Cursor or Grok Bot. You type `/poteto-mode` at the start of a job. The coding agent then has to launch the application in the repo, use that application the way a user would, and save a screenshot, a video, a performance trace, or a command output. Until those files exist, the agent is not allowed to say the job is done. A sentence that says the tests passed is not those files. That ban is the product. Extra files in the plugin exist to enforce the ban: skills, which are written procedures, and playbooks, which are workflow files loaded only when a job matches. If those commands work, the agent can check its own edit, and you can run more than one agent on that application. Public throughput numbers for the plugin are that story at another team's scale. They are not a reason for this desk to install it. How to use Grok Bot itself is [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]].

This desk should keep the ban: an agent that edits a screen must drive that screen and leave a picture. This desk should install the plugin only after a small local verification script exists on one reader, and only after typing launch-click-screenshot by hand has become the slow step. Until then the ban is a few lines in a project `AGENTS.md` plus a launch-and-screenshot command. This desk has not installed the plugin. Install commands later on this page come from the plugin's public repository, not from a run on this Mac.

## Core takeaways

- The product is a ban: done means the running application was driven and proof files were saved. `/poteto-mode` is a packaged way to enforce the ban. It is not a new seat next to Grok Build, Cursor, or Grok Bot.
- Use the plugin only when four conditions hold at once: there is an application you can launch; an agent is already writing it; you still open it to see if the change worked; that checking is slower than writing the spec or merging.
- On this desk the slow check is clickable readers: a local Yuedu harvest reader that already runs on this machine, the public tsumugu.cc reader once it launches, later the tan phone reader. The slow check is not the notes site, not dictionary JSON, not a Bot that only watches public pages.
- If an agent cannot open the Yuedu harvest reader, tap a word, and leave a screenshot without you, you need that script. You do not need the plugin yet.
- If you later install: create a verification skill on the app you can launch, then start work with `/poteto-mode`. A verification skill is a project-local script plus a Feature Map, which is a catalog of user-facing features and how to drive them.
- The plugin's default personality is not this desk's. Approval stays in front of send, publish, delete, and production change. Auto-merge does not.

## Whether this desk should

The notes on this site already say that an agent has to be checked against the application or file it built. That is [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]. pstack does not add a new standard. It packages the same check as slash commands for a clickable app.

**Use the plugin** when the four conditions above hold and you are tired of typing the same “launch, click, screenshot” prompt. **Use the rule without the plugin** when you have the bottleneck but not yet a script that launches the app. **Skip both the plugin and a new app** when the work is prose, entry JSON, or standing watch.

A local reader of Taiwan-internet posts already runs on this machine (Yuedu harvest, localhost). The harvest reader shows a shelf, a reading column, and a word card, the same surfaces as tsumugu.cc. The harvest reader is the cheapest place to test the ban. The public reader at tsumugu.cc is the quality job if `pnpm dev` launches. The tan iOS app is the later phone surface; its signed next piece is a bilingual reader, not a greenfield product.

Do not install the pack on the notes site. Do not let a helper merge into `wiki/`. Do not start a company-from-scratch demo to learn the plugin.

## What the pack contains

A **plugin** here is a bundle of skills plus playbooks. A **skill** is a written procedure. A **playbook** is a workflow file the bundle loads only when the job matches it. `/poteto-mode` reads the job, picks a playbook, and stays on across turns until you opt out.

Around that router sit situational commands: `/create-verification-skill` and `/maintain-verification-skill` for the drive-the-app script; `/how`, `/why`, and `/teach` for explaining a subsystem; `/recall` for yesterday's chat on the same bug; `/architect` for types and signatures before bodies. You do not need that catalog on day one. You need the rule, then a script that launches one reader.

`/setup-pstack` maps models for code, judgment, and review panels. Out of the box, code delegates go to Grok and the hardest changes go to Fable 5.1. Change that if those models are the wrong price.

## If you install

The public repository is [github.com/cursor/plugins/tree/main/pstack](https://github.com/cursor/plugins/tree/main/pstack). The plugin is written for Cursor and Grok Bot. This desk's first try belongs there, not in a third-party port.

**Cursor**, in a chat in the repo:

```
/add-plugin pstack
/setup-pstack
/create-verification-skill
```

**Grok Bot:** **Settings → Plugins**, install pstack (marketplace id `9717366`), enable it for that helper, then `/setup-pstack` and `/create-verification-skill` in chat. Type `/` if the commands do not autocomplete; enable the plugin under **Settings → Plugins → Yours**.

`/create-verification-skill` interviews the repo, not you: what a user touches, how the app starts, how an agent can click it, what can be captured, whether two instances can run side by side. It writes a project-local skill (in Cursor under `.cursor/skills/verify-<app>/`) with launch, doctor, drive, evidence, cleanup. It seeds a Feature Map under `features/`. It then has to run those instructions once on one mapped feature and confirm the evidence still exists after cleanup. A generated skill that was never executed is a draft.

`/maintain-verification-skill` is for when a route, a label, or a flow changes. The map lies if you skip it.

Paste shapes after that exists:

```
/poteto-mode read this bug report. restate in your own words and in plain english what you think the underlying issue is
```

```
/poteto-mode this list flickers when idle. repro first with the verification skill, then fix, and show me a screenshot and a video as proof
```

On Grok Bot, to keep the helper's computer free: spawn a Cursor Cloud Agent to run `/poteto-mode`, collect the video, and stop. You merge. That coordinator pattern is on [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]].

Reach for `/architect` when the change crosses a module boundary: types and signatures first, empty bodies, scrap the sketch if implementation needs `any`, casts, or the same workaround at unrelated call sites. Restate the problem in the agent's words before the first edit. Prototype two UI options and pick from screenshots. Those three moves are the pack's substitute for a long abstract plan.

## What this desk refuses

The pack includes a principle, never-block-on-the-human, that says to proceed and let the person course-correct after the fact. This desk still requires approval in front of send, publish, purchase, delete, and production change.

The plugin is used in public with helpers merging their own pull requests. This desk's Bot never writes `wiki/`. Application-code merges stay with the owner.

The pack prefers Cursor Cloud Agents over local git worktrees for parallelism. This desk still isolates a second local writer with a worktree, because two agents editing one tree failed on 12 June 2026. Cloud Agents are the overnight PR seat, not a reason to run two writers on the laptop checkout.

This vault already has writing standards. Do not paste the pack's `/unslop` over them. `/automate-me` drafts a personal router from your transcripts; that is closer to this desk than copying `/poteto-mode` as a personality.

## The case against, the cost, and when to quit

The case for the pack is that a helper which cannot drive the app leaves you as the person who clicks. The case against is token cost and personality clash. Review panels can call several frontier models on one design. `/why` assumes connectors this desk does not run on every repo. `/poteto-mode` stays on across turns; on a one-line fix that is extra text in the window.

Quit if `/create-verification-skill` cannot launch the app. Fix the dev environment first. Quit if the Feature Map is a week behind the UI. Quit if the helper returns passing tests and no screenshot for a visual change. Quit if you installed the plugin before an agent could drive the harvest reader without you.

Checkable expectation: one bounded visual or interaction change returns before-and-after pictures you can inspect without replaying the session. If the first pass produces no failed check, it has not verified anything. That test is already on [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]].

## How to practice this

1. Ask an agent to open the local Yuedu harvest reader, tap a word, and leave a screenshot. If that fails, write the launch-and-drive script. Stop there until it works.
2. If that script exists and you are repeating the same prompt, then install the plugin in Cursor on that repo, run `/setup-pstack` and `/create-verification-skill`, and notice whether the generated skill is a command you can rerun or a markdown file nobody drives.
3. On one small real bug, start with restatement, then repro, then fix, then proof. Notice whether the restatement matches the bug you meant.
4. When a visual fork appears, ask for two prototypes and screenshots. Notice that you are choosing from pictures, not from a paragraph.

If an agent still cannot open the harvest reader without you, the plugin was the wrong next step. If the agent left a screenshot and you only chose which picture to keep, the ban is doing the work, with or without the plugin.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: pstack is a ban, not a computer
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: the VM that can enforce the ban overnight
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: the app you would install this plugin into if the helper should keep running after the laptop closes
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: the September 2026 event where this plugin showed up in public; not a reason to install
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the standard this plugin packages as slash commands
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: skill, plugin, Custom Mode, Cloud Agents
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: Cursor is the IDE seat; Grok Bot is standing watch; this plugin is not a seat
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: why a CLI the agent can rerun beats a paragraph of clicks

## Open questions

- After one week on the harvest reader, does a hand-written launch script close the loop, or is `/create-verification-skill` still worth the pack?
- Does `/poteto-mode` pinned as a Custom Mode earn its tokens on small fixes, or only on jobs that cross a module boundary?
- Does a Grok Bot coding helper with this plugin stay a coordinator, or does it start writing diffs on the shared computer?

## Sources

- [pstack README](https://github.com/cursor/plugins/tree/main/pstack): install, `/poteto-mode`, twenty-three playbooks, skills table, principles index, `/setup-pstack`, `/automate-me`. Read 2026-09-17.
- [create-verification-skill](https://github.com/cursor/plugins/blob/main/pstack/skills/create-verification-skill/SKILL.md): interview the repo, generate `verify-<app>`, seed the Feature Map, prove one feature, offer maintain.
- [architect](https://github.com/cursor/plugins/blob/main/pstack/skills/architect/SKILL.md): ground, sketch, implement, scrap.
- Grok Bot marketplace: https://x.ai/bot/plugin/9717366
- Example generated skill for a fictional app: https://github.com/poteto/verification-skill-example
- X articles: [Loops You Can Trust](https://x.com/poteto/status/2069824386283319343) (24 June 2026); [Part 1, verification](https://x.com/poteto/status/2094457600259842065) (31 August 2026); [Part 2, research and architecture](https://x.com/poteto/status/2097732320606507506) (9 September 2026). Part 3 announced, not published as of 17 September 2026.
- 0.15.0 notes, 8 September 2026: token savings, attack-the-premise, test-behavior-not-implementation. https://x.com/poteto/status/2097380152703615396
