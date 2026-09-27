---
title: "Picking a computer"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-27
description: "Which of Grok Build, Cursor, Grok Bot and Cursor Cloud Agents takes a job, decided by whether it must keep running after the laptop closes."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - agents
  - grok-bot
  - cursor
  - agentic-engineering
---

# Picking a computer

# Picking a computer

Four AI products on this desk, the owner's own setup, can be given a job and left alone: Grok Build, Cursor, Grok Bot, and Cursor Cloud Agents. They differ in where the work runs, on the laptop or on a computer in the cloud, and that decides which one can take a job that must keep going after the laptop lid closes.

## Core takeaways

- Grok Build and Cursor run on the laptop and stop when it closes.
- Grok Bot's bots all share one cloud computer, files and logins.
- Only public material goes on the Grok Bot computer.
- A Cursor Cloud Agent gets a fresh cloud machine for one coding job.
- Application code goes to a Cloud Agent, reports and files to Grok Bot.
- Work done at the keyboard stays in Grok Build or Cursor.
- On this desk the owner accepts every code change himself.

## The four products

A Cloud Agent hands back a pull request: a proposed change to a project's code, held apart from the live code until a person reviews and accepts it. Accepting one is called merging. The code itself sits in a repo, a folder of code kept on GitHub. The table sets them side by side.

| Product | Where it runs | After lid closes | Hands back |
|---|---|---|---|
| Grok Build | terminal on the laptop | stops | edits in the folder |
| Cursor | editor on the laptop | stops | edits in the folder |
| Grok Bot | one cloud computer for all bots | keeps going | reports and files |
| Cursor Cloud Agents | a cloud machine per job | keeps going | a pull request with pictures |

## How to choose

Two questions settle most jobs. The first is whether the job must keep running after the lid closes. The second, for a job that must, is whether its output is application code. A task that cannot yet be written down so a stranger could finish it alone, with an outcome, limits and a way to tell it worked, stays on the laptop.

```
Must it run after the lid closes?
  no  -> Grok Build or Cursor
  yes -> Is the output application code?
           no  -> Grok Bot (public material only)
           yes -> Cursor Cloud Agent, owner merges
```

- Grok Build or Cursor: a person reads each edit as it is made.
  - Right for a task still being worked out in the files.
- Grok Bot: each bot has one job in its description.
  - It starts on a clock or a trigger.
  - A bot can open a site another bot logged into.
  - Deleting a bot removes nothing from the computer.
  - One weekly allowance covers the account, and each run spends some.
- Cursor Cloud Agent: its own machine, so two runs never share a folder.
  - `.cursor/environment.json` sets up code, dependencies, secrets and a start command.
  - Without a working start command the agent cannot test anything.
  - Billed by the amount of text read and written, at API rates.
  - The model chosen and how much it reads at once set the cost.

## The loop

Cloud Agents on this desk are started from what the bots find, and nothing merges without the owner. A bot reports, the owner turns the report into a task, and one Cloud Agent does it. As of 18 September 2026 there had been three runs, all on the repo of the owner's website, giving draft pull requests 3, 4 and 5, with all tests passing and none merged.

1. A bot notices something in public material, such as a dead link.
2. The finding becomes a task: outcome, sources, limits, deliverable, review point.
3. The owner approves the task.
4. One Cloud Agent runs it and opens a draft pull request.
5. The pull request carries test results and a picture of any visible change.
6. The owner merges or closes it.

## What this desk refuses

Every refusal comes from the shared Grok Bot computer or from the owner reading every change. A single bot that took every request and passed work to the others would need every login the others use, on the one computer they share. At a three-day public event in September 2026, an overnight run produced about 100 to 150 pull requests, and one bad database change from it took the live site down.

- No mail, ads accounts or store logins on the Grok Bot computer.
- No password manager, VPN or card on it either.
- No bot that takes every request and hands out the work.
- No overnight pull requests with nobody reading them.
- No Cloud Agent for wiki prose.
- No Cloud Agent while a local agent edits the same files.
- No Cloud Agent run that would bill beyond the owner's Cursor plan.
- A visible change without a picture is not accepted.

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
