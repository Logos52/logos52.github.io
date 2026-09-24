---
title: "Grok Bot, Condensed"
type: condensed
status: developing
draft: true
created: 2026-08-27
updated: 2026-09-24
description: "Short notes on Grok Bot: the shared cloud computer, the weekly allowance, skills and routines, approvals, and what this desk keeps off it."
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

Grok Bot is a desktop app from SpaceXAI. You create a named bot, write its one standing job in its description, and it does that job on a computer in the cloud that keeps running after your laptop closes. Knowing how the computer, the allowance and the approvals work settles which jobs to give a bot and which to keep off it.

## Core takeaways

- Every bot on the account shares one cloud computer, with its files, browser and logins. A login made for one bot is open to all of them, so bots are not a way to keep secrets apart.
- Give each bot one job. The maker warns against a general helper bot. Standing rules go in the description; today's task goes in the chat.
- Usage is one weekly allowance for the whole account. A routine that fires every 15 minutes runs about 100 times a day, and two polling bots spent 15% of a week in half a day.
- Build in this order: do the task in chat, save it as a skill (a saved way of doing a task), then put the skill on a routine (a run on a clock or on an event).
- The product stops and asks before a send, a purchase, a delete, a publish or a production change. Keep that on; a bot prepares, a person approves what leaves the account.
- A bot must not merge code. Application code goes to a Cursor Cloud Agent, a coding agent on its own isolated machine that opens a pull request, and a person merges it.
- On this desk bots only report, pass work to each other through files in a repository, and see public material only: no mail, no ads accounts, no store logins, no card.

## How it works

- An account gets one cloud computer, and all its bots run on it.
  - Files in the shared folder /workspace stay across updates; installed packages wipe on an update.
  - Deleting a bot removes its profile, chat and routines; files and sign-ins stay on the computer.
  - Hiding a bot does not pause its routines. Routines may pause after a long time away from the app.
- A first task names the outcome, the sources, the constraints, the deliverable and the review point.
- When a bot meets a login, a two-factor prompt, a captcha or a payment, it hands the screen to the person, who does it and hands the screen back.
- Approval rules are written in plain words in the settings. A review model checks each proposed action, and a "require approval" rule beats an "always allow" rule.
- A long chat makes every routine on that bot cost more, so recurring work goes on a fresh bot. Duplicating a bot copies its setup with an empty memory.
- Make routines report exceptions only: a bot that finds nothing sends nothing, and an hourly routine that never finds anything becomes a weekly one.
- Cap: fifty bots and group chats combined per account, fifty routines per bot.
- Something broken: retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins; Reset puts the computer back to its last saved copy.

```
task in chat --> save as skill --> routine on a clock
                                       |
                              bot prepares the output
                                       |
                    person approves anything that leaves
```

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
