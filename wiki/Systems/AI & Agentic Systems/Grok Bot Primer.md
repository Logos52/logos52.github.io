---
title: "Grok Bot Primer"
type: concept
status: developing
created: 2026-08-25
updated: 2026-09-24
method: outline-2026-09-24
written-by: fable
description: "How this desk staffs Grok Bot: one shared cloud computer, a weekly allowance, public material only, and the owner approving what leaves the account."
aliases:
  - Standing Research Agents
  - Grok Bot Fleet Structures
  - Bot Operating Rules
merged-from:
  - Standing Research Agents
  - Grok Bot Fleet Structures
  - Bot Operating Rules
prose-model: fable
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - workflows
  - research
---

# Grok Bot Primer

Grok Bot is a desktop app from SpaceXAI. You create named bots, give each one a standing job, and they work on a computer in the cloud that keeps running when the laptop is shut. This desk's setup follows three facts about the product: every bot on an account shares that one computer and its logins, usage is a weekly allowance for the whole account, and the owner reads what a bot produces before anything leaves the account.

## Core takeaways

- All bots on an account share one cloud computer, its files and its logins, so a site one bot logged into is open to every other bot.
- Usage is a weekly allowance for the whole account; a bot that polls often or chats at length can use the whole allowance in hours.
- One bot gets one job, written in its description; a catch-all helper is the setup to avoid.
- A bot prepares and the owner approves anything that leaves the account: a send, a purchase, a delete, a publish, a change to a live system.
- On this desk every bot reads public material only and ends its run by writing a file the owner reads.
- Application code is written by a Cursor Cloud Agent, a coding agent that works on its own isolated machine, and the owner merges the result himself.

## How it works

- The computer
  - One cloud computer per user, not per bot. Deleting a bot removes its profile, its chat and its routines; its files and logins stay on that computer.
  - Files in a shared folder named /workspace stay across product updates; packages installed on the computer are wiped by an update.
  - At a login, a two-factor prompt, a captcha or a payment, the bot hands the screen to the owner and takes it back after. A password goes through a masked form, never the chat.
- A bot
  - A name, a description and a memory.
  - Lasting rules go in the description; today's task goes in the chat.
  - Duplicating a bot copies its setup with an empty memory.
  - Hiding a bot does not pause its routines. An account holds at most fifty bots and group chats combined.
- Skills and routines
  - A skill is a saved way of doing a task. A routine runs a skill on a clock or when something happens in Slack or GitHub.
  - Order: do the task in chat, save it as a skill, then put the skill on a routine.
  - "Teach a task" records the screen for up to ten minutes, no microphone, and gives a draft skill that still needs its rules and its approval points added by hand.
  - "Test run" on a routine does real work. One bot holds at most fifty routines. Routines may pause after a long period away from the app.
- The allowance
  - Each routine run uses a small part of the weekly allowance. A routine every 15 minutes is about 100 runs a day.
  - Two polling bots used 15% of a week's allowance in half a day. A bot that chatted all day used the whole allowance in hours.
  - A long chat makes every routine on that bot cost more, so recurring work goes on a fresh bot.
  - A routine reports exceptions only; an hourly routine that finds nothing becomes a weekly one.
- Approval
  - The app asks before a send, a purchase, a delete, a publish, or a change to a live system.
  - A first task says what should be finished, which sources the bot may use, what limits it works under, what it hands back, and where it stops for review.

```
task in chat ---worked---> skill ---on a clock---> routine
                                                     |
                                                     v
                                     a file in /workspace
                                                     |
                                                     v
                                        the owner reads it
```

## Desk rules

- Bots only report. Work between bots passes through files in a repository, never through a chat.
- Only public material goes on the shared computer: no mail, no ads accounts, no store logins, no password manager, no VPN, no card.
- Approval stays on for anything that leaves the account. No bot merges code; the owner merges each pull request himself.
- No chief-of-staff bot, one bot that takes every request and passes it to the others. No manager bots over engineer bots.
- No unattended run that opens pull requests overnight. How many changes ship is limited by the weekly allowance and by the owner reading each change.
- A new bot is added only when the current reports show a gap. SpaceXAI publishes playbooks that run a chief of staff on mail and calendar and put mail, ads and store logins on the shared computer; this desk does not copy them.
- Three bots on this desk hold standing jobs:
  - Watch runs checks on public sites, writes one file per run and reports only when something changed. A day with nothing to report is normal.
  - Brief sweeps public sources each morning and files one brief, exceptions first.
  - Steward reports weekly allowance use and routine health, one line per bot, and makes backups. It does not hand out work.
- Roster: 9 bots on 25 August 2026, 18 by 18 September 2026.

## Where it fails

- Scheduled writing turns generic within weeks unless the owner keeps reading it. Each bot gets a freshness check and a review date, and a bot is retired when its output stops changing what the owner reads or does.
- A bot left unwatched can fail while still reporting success, so a run that ends with a success message still needs its file checked.
- A bot's memory does not replace the system a fact came from; a fact that changes is read from that system each time. Safety rules go in the description.
- The built-in memory write failed for a stretch in September 2026.
- First-run faults reported by other users: a "can't reach your computer" message was a bot name over 255 characters; others were missing paid access and a used-up weekly allowance.
- Troubleshooting order: retry, restart, Recover, Update, then Reset last. Recover and Update keep files and logins; Reset puts the computer back to its last saved copy.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: the product how-to; this page is how this desk staffs helpers
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: coding plugin a helper can load; not a roster change
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: September 2026 event findings; does not override the refusals on this page
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: the product against the model that shares its name and against Grok Build, and the subscription it comes with
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: the maker's how-to pages this setup is choosing against, filed as sketch D and not as a roster; one-finder and finding-as-spec as they showed up in a first-party studio playbook
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: named-runner claims with confidence tags
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: why every lane ends with the owner, and why judgment stays there
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: where the fleet sits among the other agents
- [[wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg|Automation and the Job Iceberg]]
- [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the older manual checks the audit helper now runs on schedule

## Sources

- [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq): one computer per user, not per Bot; bots are not a security boundary; delete does not clear files or logins; weekly usage. Re-fetched 2026-08-31.
- [Grok Bot documentation](https://docs.x.ai/grok-bot/overview): the shared-computer architecture, routines, and the quota model.
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots): hide does not pause a routine; account cap of fifty bots and group chats combined; a catch-all helper named as the anti-pattern.
- [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations): fifty routines per bot; routines may pause after a long period away; prepare before execute; approval for send, purchase, delete, publish, production change; no-data and stale-data policy.
- [Get started](https://docs.x.ai/grok-bot/get-started): first request names outcome, sources, constraints, deliverable, review point.
- [Grok Bot Guides](https://x.ai/bot/guides): five first-party playbooks captured 2026-08-31; field evidence of a chief of staff and of mail, ads, and store logins this setup refuses; one-finder and finding-as-spec from the 25 August studio playbook; filed as sketch D. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]].
- [Session fences: bots are not a security boundary](https://forum.cursor.com/t/grok-bot-ship-real-session-fences-bots-are-not-a-security-boundary/168476): Cursor forum, 2026-08-16. A bot on one screen opens a site another bot logged into.
- Lauren Kwok, Grok Bot team, 2026-08-23: [long chats make routines expensive; a 15-minute routine is about 100 runs a day; put recurring work on a fresh bot](https://x.com/poteto/status/2091368467060662497)
- Austin Lin: [each routine fire about 0.01% of weekly quota; two polling bots used 15% in half a day](https://x.com/siraustin/status/2090543651508171180)
- Geoffrey Cheng: [a chatty chief of staff burned a week in hours; quieter handoffs used about 15% of that](https://x.com/geoffrey1211/status/2091565230295753099)
- Alpha Batcher: [packages installed on the computer wipe on update; files in the shared folder /workspace stay](https://x.com/alphabatcher/status/2089876344259629339)
- Flavio Copes: [Blog Pulse: one bot, daily file, never publishes](https://flaviocopes.com/grok-bot/), the file-per-run pattern Watch copies
- Kun Chen, 2026-08-23: [a VISION.md per repo so a bot can triage issues; a person merges](https://x.com/kunchenguid/status/2091638832307536357)
- Ryan Staley: [140 bookmarks graded, a third kept, ten skills made](https://grokbot.dev/use-cases/grade-bookmarks-into-skills/)
- [grokbot.dev feed](https://grokbot.dev/api/v1/feed.json): 131 write-ups on 2026-08-24, sorted by purpose for this page. Cards cited: [weekly disk cleanup](https://grokbot.dev/use-cases/weekly-disk-cleanup/), [13,425 prompts extracted from 557 chats](https://grokbot.dev/use-cases/extract-art-prompts/), [a paper as a four-minute animation](https://grokbot.dev/use-cases/math-explainer-video/), [a research desk that grades its own calls](https://grokbot.dev/use-cases/ai-research-desk/)
- Matt Palmer, *Intro to Grok Bot*, 2026-08-11: first-party practitioner essay. Sweep-and-file specimens match Watch and Brief. Grocery and delivery specimens are the usage the public-only line refuses. Bank: [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]].
- On scheduled content drifting generic within weeks: [Things I built with AI that completely fell apart](https://thoughtbymalte.substack.com/p/things-i-built-with-ai-that-completely)
- On unmonitored agents degrading while reporting success: [You can't train an AI agent and then just go away](https://www.saastr.com/you-cant-train-an-ai-agent-and-then-just-go-away-we-did-and-it-fell-off-the-rails), [a taxonomy of silent agent breakage](https://www.telerik.com/blogs/when-status-ok-still-failure-taxonomy-silent-ai-agent-breakage-how-detect)
- Named-runner catalog row on fleet spend: [[wiki/Research/Grok Bot Field Packet 2026-08-15|Grok Bot Field Packet 2026-08-15]]
