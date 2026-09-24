---
title: "Grok Bot, Condensed"
type: condensed
status: developing
draft: true
created: 2026-08-27
updated: 2026-09-24
description: "How the one shared cloud computer, the weekly allowance, skills, routines and approvals in Grok Bot decide which jobs this desk gives a bot."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - condensed
---

# Grok Bot, Condensed

Grok Bot is a desktop app from SpaceXAI. You create a named bot, write its one standing job in its description, and the bot does the job on a cloud computer, which keeps running after your laptop closes. Knowing how the computer, the allowance and the approvals work settles which jobs to give a bot and which to keep off it.

## Core takeaways

- All bots on an account run on one cloud computer and share its files, browser and logins. SpaceXAI says not to use separate bots to keep secrets apart.
- Give each bot one job. SpaceXAI warns against a general helper bot. The bot's description holds its standing rules. The chat holds today's task.
- A skill is a saved way of doing a task. A routine runs a skill or a task on a clock or when an event happens. Do the task in chat first, then save it as a skill, then put the skill on a routine.
- Usage is one weekly allowance for the whole account, and every routine run spends some of it. A routine running every 15 minutes runs about 100 times a day. Two bots checking a source on a clock spent 15% of a week's allowance in half a day.
- The product stops and asks before a send, a purchase, a delete, a publish or a production change. Leave that on. The bot drafts the send or the purchase, and a person approves it before it goes out.
- A bot must not merge code. Code work goes to a Cursor Cloud Agent, a coding agent on its own separate machine. The coding agent opens a pull request, and a person merges it.
- On this desk bots only report. Work between bots passes through files in a repository. Only public material goes on the shared computer, so no bot reads mail.

## How it works

- One cloud computer per account, and every bot runs on it.
  - Files in the shared folder /workspace stay across updates. An update wipes installed packages.
  - Deleting a bot removes its profile, chat and routines. Files and sign-ins on the computer stay.
  - Hiding a bot does not pause its routines. Routines may pause after a long time away from the app.
- A first task names an outcome, sources, constraints, a deliverable and a review point.
- At a login, a two-factor prompt, a captcha or a payment, the bot hands the screen to the person. The person does that step and then returns control to the bot.
- Approval rules are written in plain words in Settings. A review model checks each proposed action. A "require approval" rule wins over an "always allow" rule.
- A long chat makes every routine on that bot cost more, so recurring work goes on a fresh bot. Duplicating a bot copies its profile, skills and routines, not its chat or memory.
- A routine reports only when it finds something unusual. A routine that listens for a broad event, such as every new message, makes noise, spends the allowance and acts on input that does not matter.
- A test run on a routine does real work.
- Cap: fifty bots and group chats combined per account, fifty routines per bot.
- When something breaks: retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins. Reset puts the computer back to its last saved copy.

## Sources

- The peer-support agent: ComPeer, Liu and others, UIST 2024, https://arxiv.org/abs/2407.18064
- The phone game: Lifeline, Mars Jokela and Dave Justus, 2015, https://www.gamedeveloper.com/design/building-a-narrative-out-of-push-notifications-in-i-lifeline-i-
- Turn-taking: Matt Webb, 2025, https://interconnected.org/home/2025/05/23/turntaking
- The particle row: 好讀周報, 2025, https://udncollege.udn.com/29386/
- The 21 practices: Matt Van Horn, 2026, https://x.com/mvanhorn/status/2092629365045559547
- The loop and stop rule: Avid, 2026, https://x.com/Av1dlive/status/2092622516544270781
- The product's first task: https://docs.x.ai/grok-bot/get-started
- The product's how-to hub: https://x.ai/bot/guides — five playbooks captured 2026-08-31. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]] — how to use the app: first helper, skill, routine
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]] — the fleet told as one setup, for a stranger
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]] — the product against the model that shares its name
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]] — the maker's how-to pages this setup is choosing against
