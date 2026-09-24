---
title: "Using Grok Bot"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-24
description: "How to set up a Grok Bot, give it a first task, turn the task into a routine, hold the weekly usage, and keep private logins off the shared computer."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - workflows
---

# Using Grok Bot

Grok Bot is a desktop app from SpaceXAI. You create a named bot, give it one standing job, and it does that job on a computer in the cloud that keeps running after your laptop is closed. Most first setups fail on one of three things: a login every bot can reach, a usage allowance spent in days, or a routine that reports nothing useful.

## Core takeaways

- One job per bot. The lasting rules go in the description you write for the bot; today's task goes in the chat.
- Every bot on the account works on the same cloud computer and can use every login and file on it. Put nothing there that one bot should not be able to reach.
- Do a task in chat first. Save it as a skill once it works. Put the skill on a routine only after three manual runs came back right.
- Usage is one weekly allowance for the whole account. A routine that fires every 15 minutes runs about 100 times a day and can spend the week in days.
- Keep a bot's output to a file or a short report. Sending, buying, deleting and publishing stay behind approval.
- Old chat turns get dropped over time. Facts a bot must keep go in a file under /workspace, which survives updates.

## How to do it

- Set up
  - Install the app from x.ai/bot. It needs a paid Cursor plan or a SuperGrok subscription.
  - Create a bot with a short name and a description of one job. A name over 255 characters makes the first run fail with a connection error.
  - Put the standing rules in the description, including a stop-line: never send, spend, publish or merge unless that is the named job.
- First task
  - Say five things: what to finish, which sites, files or apps to use, what to avoid, what shape the result takes, and where the bot should pause for you to look.
  - When the bot meets a password, a two-factor code, a CAPTCHA or a payment, it hands you its screen. You do that step and hand the screen back. Secrets go through a masked form the bot sends, never into the chat.
  - If the result is wrong, say what is wrong and let the bot redo it.
- Make it repeat
  - Ask the bot to save the working task as a skill. Teach a task records your screen for up to ten minutes, with no microphone, and gives a draft skill that still needs decision rules and approval limits written in.
  - A routine runs a skill on a clock or after an event such as a Slack message. Fifty routines per bot. Test run does real work, so use safe inputs.
  - Recurring work goes on a fresh bot with an empty chat. A long chat makes every routine on that bot cost more.
  - Prefer a clock to an event trigger. Event triggers need narrow matching rules, and some do not fire.
- Keep it quiet
  - A sweep that finds nothing sends one line, or nothing. Five lines or fewer when it finds something.
  - Cadence is coarse: three times a week, or daily when there is something new.
  - Reuse a bot you have before you create one. Hiding a bot does not pause its routines; pause them first, then delete.

```
chat task -> works? -> save as skill -> 3 manual runs
                                            |
                              routine on a clock, one bot
                                            |
                              file or short report -> you
```

## The shared computer

- The account gets one cloud computer. All bots share it. Each bot gets its own screen on that computer, and all screens share the files, the browser and the logins.
- A login made for one bot is open to every bot until it expires. Deleting a bot leaves its logins and files on the computer.
- Files under /workspace stay across updates. Packages you install wipe on an update, so do not build a custom stack on the computer.
- Connectors (Slack, GitHub, Notion and other apps) are account-wide and are cheaper and steadier than clicking through a site. Where no connector exists, record the site's steps once and replay them.

## Usage

- One routine run costs about 0.01% of the week. Two polling bots have used 15% of a week in half a day.
- A bot that chats with other bots to hand off work spends far more than a bot that writes a file for the next one to read.
- An open-ended "keep going until done" task can spend the week in one run. Give a task a maximum item count and a stop.
- Blank replies while the computer preview still works usually mean the week's allowance is gone.

## When it breaks

- Order from SpaceXAI: retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins. Reset puts the computer back to a saved earlier state.
- Endless Reconnecting usually means the account has no paid access.
- A Slack trigger needs the Grok Bot app invited to the Slack channel it watches, and Test run does not exercise Slack.
- If the built-in memory fails to save, write the notes as a file.
- Routines can pause after a long time away from the app. Open it and check them.

## What this desk refuses

- Nothing private on the shared computer: no mail, no ads accounts, no store logins, no password manager, no VPN, no card.
- Bots only report. Work between bots passes through files in a repository, never through a chat.
- No chief-of-staff bot in front of the others. It would hold every login, and all bots share one computer.
- No bot merges code. Application code is written by a Cursor Cloud Agent on its own isolated machine, and the owner merges the pull request.
- A new bot is added only when the current reports show a gap.

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
