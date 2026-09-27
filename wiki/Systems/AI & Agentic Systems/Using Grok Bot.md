---
title: "Using Grok Bot"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-27
description: "How to set up a Grok Bot, give it a first task, turn the task into a routine, hold the weekly usage, and keep private logins off the shared computer."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - workflows
---

# Using Grok Bot

# Using Grok Bot

Grok Bot is a desktop app from SpaceXAI. You create a named bot, give it one standing job, and the bot does that job on a cloud computer that keeps running after your laptop is closed. Every bot on your account shares that one computer and one weekly usage allowance, so what matters is what goes on the computer, how often each routine fires, and what a bot sends back.

## Core takeaways

- One job per bot, lasting rules in its description, today's task in chat.
- Every bot can use every login and file on the shared computer.
- Do a task in chat, save it as a skill, then schedule it.
- Schedule only after three manual runs come back right.
- A routine every 15 minutes runs about 100 times a day.
- Output goes to a file or a short report.
- A send or a purchase needs approval.

## How to do it

Install the app from x.ai/bot, which needs a paid Cursor plan or a SuperGrok subscription. Create a bot with a short name and a one-job description, and put a stop-line in the description: never send, spend, publish or merge unless that is the named job. The first task should say what to finish, which sites, files or apps to use, what to avoid, what shape the result takes, and where the bot should pause for you to look. When the bot meets a password, a two-factor code, a CAPTCHA or a payment, it hands you its screen, you do that step, and you hand it back.

- A name over 255 characters makes the first run fail.
- Secrets go through the bot's masked form and never through the chat.
- If a result is wrong, say what is wrong and let the bot redo it.

## Making it repeat

A skill is a saved way of doing a task, and a routine runs a skill on a clock or after an event such as a Slack message. Ask the bot to save a working task as a skill. Teach a task records your screen for up to ten minutes with no microphone and gives a draft skill that still needs its decision rules and approval limits written in. Recurring work goes on a fresh bot with an empty chat, because a long chat makes every routine on that bot cost more.

- Fifty routines per bot.
- Test run does real work, so use safe inputs.
- Prefer a clock to an event trigger.
- Event triggers need narrow matching rules, and some do not fire.
- A sweep that finds nothing sends one line, or nothing.
- A sweep that finds something sends five lines or fewer.
- Run three times a week, or daily when there is something new.
- Reuse an existing bot before creating one.
- Hiding a bot does not pause its routines, so pause them, then delete.

## The shared computer

The account gets one cloud computer, and every bot works on it. Each bot has its own screen, and all the screens share the files, the browser and the logins. A login made for one bot is open to every bot until it expires, and deleting a bot leaves its logins and files behind.

- Files under `/workspace` survive updates.
- Facts a bot must keep go in a file there.
- Packages you install are wiped on an update, so build no custom stack.
- Connectors to Slack, GitHub, Notion and others are account-wide.
- Connectors are cheaper and steadier than clicking through a site.
- With no connector, record the site's steps once and replay them.

## Usage

The allowance is charged by the steps and the tokens, units of text, a bot uses, and the count of messages plays no part. One routine run uses about 0.01% of the week, and two bots polling every 15 minutes used 15% of it in half a day. Bots that hand work to each other through chat cost far more than bots that leave files: one chat-based setup used a full week in hours, and the same work through files used about 15% of that.

- A task told to keep going until done can spend a week in one run.
- The same work in short slices with an item cap used 20%.
- That left five days of the week.
- Blank replies with a working computer preview mean the week is spent.

## When it breaks

SpaceXAI's order for fixes is retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins, and Reset puts the computer back to a saved earlier state. Most other faults have a known cause.

- Endless Reconnecting usually means no paid access.
- A Slack trigger needs the app invited to the watched channel.
- Test run does not exercise Slack.
- If built-in memory fails to save, write notes to a file.
- Routines may pause after a long absence, so open the app and check.

## What this desk refuses

On this desk, the owner's own setup, the refusals follow from the shared computer and the allowance. A router bot, one that takes requests in and hands work out to the others, would need every login on a computer every bot already shares, and bot-to-bot chat is the costliest use of the allowance. Application code goes to a Cursor Cloud Agent on its own isolated machine, and the owner merges the proposed change, a pull request, himself.

- No mail, ads accounts, store logins, password manager, VPN or card.
- Bots only report.
- Work between bots passes through files in a repository and never chat.
- No router bot.
- No bot merges code.
- No bot creates bots, and a new one needs the owner's yes.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot, Condensed|Grok Bot, Condensed]]
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]

## Sources

- [Get started](https://docs.x.ai/grok-bot/get-started): install, sign-in, first Bot, five-part first task, takeover for auth, review then skill or routine. Read 2026-09-17.
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations): skill before routine, `/` and `@`, Teach a task (ten minutes, no microphone), fifty routines per Bot, Test run does real work, event triggers, design-for-trust list. Read 2026-09-17.
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps): one computer per user, screens are not a security boundary, `/workspace`, connectors as Plugins, recover vs reset. Read 2026-09-17.
- [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting): retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins. Reset restores the last snapshot. Read 2026-09-18.
- [FAQ](https://docs.x.ai/grok-bot/faq): computer assigned per user, not per Bot. Re-fetched 2026-08-31; load-bearing sentence unchanged in the 17 September read of the computer page.
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots): hide does not pause a routine; catch-all helper named as the thing not to create.
- Forum, 10 September 2026: first-run “Can’t reach your computer” can be a Bot name longer than 255 characters reported as a connection error. https://forum.cursor.com/t/grok-bot-macos-initial-setup-fails-agent-computer-unreachable/171270
- Forum, 14–17 September 2026: endless Reconnecting is missing paid access. https://forum.cursor.com/t/grok-bot-is-stuck-on-reconnecting-to-your-computer-and-cannot-connect-to-my-existing-bot-computer-since-september-14/171563
- Forum, 14–17 September 2026: blank replies with a working computer preview is a spent week. https://forum.cursor.com/t/grok-bot-windows-chat-then-blank-computer-preview-works-please-recover-agent-computer/171615
- Forum, 14–17 September 2026: every helper failing under the usage limit is a lost computer; wait for the service. https://forum.cursor.com/t/grok-bot-android-all-bots-fail-to-generate-after-reset-computer-view-works-weekly-usage-72-not-capped/171735
- Forum, 14–17 September 2026: a Slack trigger needs the app invited to a private channel, and Test run skips Slack. https://forum.cursor.com/t/grok-bot-slack-routine-trigger-never-fires-while-test-run-and-slack-return-both-work/171676
- Forum, 14–17 September 2026: a GitHub “issue assigned” trigger does not fire; use a clock. https://forum.cursor.com/t/grok-bot-github-issue-assigned-routine-never-fires-5-attempts-recreated-routine-app-has-repo-access/171791
- Forum, 14–17 September 2026: silence after an image tool cleared without Reset. https://forum.cursor.com/t/grok-bot-one-bot-silent-after-image-gen-restart-this-bots-runner-only-do-not-reset/171840
- Forum, 14–17 September 2026: unexpected error on iPhone is a phone-app bug; open the chat on desktop. https://forum.cursor.com/t/grok-bot-hit-an-unexpected-error/172070
- Forum, 14–17 September 2026: no device can connect, and each Reset delays the repair. https://forum.cursor.com/t/t-f86577-cannot-connect-on-windows-macos-and-iphone-since-11-sep/171962
- Forum, 16 September 2026: the built-in memory write fails; write the notes as files. https://forum.cursor.com/t/grok-bot-update-state-memory-writes-fail-fleet-wide-brain-docs-snapshot-was-cut-short-before-completing/171895
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: one-finder, finding-as-spec, refused chief of staff and mail.
- Day 1 X broadcast, 15 September 2026: https://x.com/i/broadcasts/1AxRnZbVpjaxl
- Day 2 X broadcast, 16 September 2026: https://x.com/i/broadcasts/1PKqrNyvmYwGb
- Day 2 public timeline: https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TIMELINE-day2.md
- Compiled findings: [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
