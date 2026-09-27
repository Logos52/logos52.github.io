---
title: "Picking a computer"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-24
description: "Which of Grok Build, Cursor, Grok Bot and Cursor Cloud Agents takes a job, decided by whether it must keep running after the laptop closes."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - agents
  - grok-bot
  - cursor
  - agentic-engineering
---

# Picking a computer

Four AI products on this desk, the owner's own setup, can be given a job and left alone: Grok Build, Cursor, Grok Bot, and Cursor Cloud Agents. They differ in where the work runs, on the laptop or on a computer in the cloud, and that difference decides which one can take a job that must keep going after the laptop lid closes.

## Core takeaways

- Grok Build and Cursor run on the laptop. A job in either stops when the laptop closes.
- Grok Bot lets an account set up several bots, each with one standing job. All of them run on the same cloud computer and share its files and logins, so only public material goes there.
- A Cursor Cloud Agent runs on a cloud machine rented for that one job, copies a project's code from its repo, a folder of code kept on GitHub, works, and hands back a proposed change for a person to accept.
- Application code goes to a Cloud Agent. Reports and files go to Grok Bot. Work done while sitting at a keyboard stays in Grok Build or Cursor.
- No bot and no agent accepts a code change on this desk. The owner reads and accepts each one.

## The four products

A pull request is a proposed change to a project's code, held apart from the live code until a person reviews and accepts it. Accepting one is called merging.

| Product | Where it runs | Survives a closed lid | What it hands back |
|---|---|---|---|
| Grok Build | terminal on the laptop | no | edits in the working folder |
| Cursor | editor on the laptop | no | edits in the working folder |
| Grok Bot | one cloud computer shared by all the account's bots | yes | reports and files |
| Cursor Cloud Agents | a cloud machine per job | yes | a pull request, with screenshots or video |

## How to choose

```
Must it run after the lid closes?
  no  -> Grok Build or Cursor
  yes -> Is the output application code?
           no  -> Grok Bot (public material only)
           yes -> Cursor Cloud Agent, owner merges
```

- Grok Build or Cursor: a person sits at the keyboard and reads each edit as it is made.
  - Right for a task still being worked out in the files.
  - If the task cannot be written down so a stranger could finish it alone (an outcome, limits, a way to tell it worked), it stays here.
- Grok Bot: the one cloud computer the account's bots share.
  - Each bot has one job written in its description and starts on a clock or a trigger.
  - One bot's logins are open to every other bot. A bot can open a site another bot logged into, and deleting a bot removes nothing from the computer.
  - Usage is a weekly allowance for the whole account, and each run spends some of it.
- Cursor Cloud Agent: a fresh cloud machine for one coding task.
  - Each run gets its own machine, so two runs can work at once without editing the same folder.
  - The machine needs the project's code, its dependencies, secrets, and a start command; a file in the repo, `.cursor/environment.json`, sets these up. Without a working start command the agent cannot test anything.
  - Billing is at API rates per token, so the model chosen and how much text it reads at once drive what a run costs.

## The loop

1. An existing bot notices something in public material: a failed automated test, a dead link, a feature that stopped working.
2. What the bot found becomes a written task with these parts: outcome, sources, constraints, deliverable, review point.
3. The owner approves the task.
4. One Cloud Agent runs it on its own machine and opens a draft pull request. The pull request carries proof: automated test results, and a screenshot or video for any visible change.
5. The owner merges or closes the pull request.

- Runs so far, as of 18 September 2026: three, all on the repo of the owner's web site, giving draft pull requests 3, 4 and 5. The automated tests passed on all three and none was merged.

## What this desk refuses

- No mail, ads accounts, store logins, password manager, VPN or card on the shared Grok Bot computer.
- No single bot that takes every request from the owner and passes the work on to the other bots. Such a bot would need every login the other bots use, on the one computer they all share.
- No overnight run that opens pull requests with nobody reading them. The weekly allowance and a person reading each change set the limit. At a three-day public event in September 2026 an overnight run produced about 100 to 150 pull requests, and one bad database change from it took the live site down.
- No Cloud Agent for wiki prose, and none when a local agent is editing the same files, when the next run would bill beyond the owner's Cursor plan, or when a visible change comes back without a picture.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]

## Sources

- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: seats signed 2026-08-21, 2026-08-26, 2026-09-01.
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]], [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]], [[wiki/Systems/AI & Agentic Systems/pstack|pstack]], [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: the four pages this map points at.
- [Cloud Agents](https://cursor.com/docs/cloud-agent): isolated VMs, artifacts, API-rate billing. Read 2026-09-17.
- [Get started](https://docs.x.ai/grok-bot/get-started) and [FAQ](https://docs.x.ai/grok-bot/faq): standing computer, per user not per Bot.
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: refused chief of staff and mail.
