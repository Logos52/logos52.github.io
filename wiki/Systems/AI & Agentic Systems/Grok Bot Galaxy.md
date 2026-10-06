---
title: "Grok Bot Galaxy"
type: research
status: developing
draft: true
created: 2026-09-17
updated: 2026-09-27
method: outline-2026-09-27
written-by: opus
description: "What the three-day Grok Bot Galaxy livestream showed about scoping, approving and checking bots, and which of its practices this desk keeps or refuses."
prose-model: fable
tags:
  - grok-bot
  - research
  - agents
  - agentic-engineering
---

# Grok Bot Galaxy

# Grok Bot Galaxy

Grok Bot Galaxy was a three-day public livestream, 15 to 17 September 2026, in which SpaceXAI staff built a company on camera with Grok Bot, while other staff gave talks on using it in sales, support and marketing. Grok Bot is a desktop app whose named bots each hold one standing job and work on a computer in the cloud. The talks are the largest public record of how SpaceXAI wants a bot scoped, approved and checked, and the mistakes made on camera show which habits this desk keeps out.

## Takeaways

- Scope a bot like a job description: one job per bot.
- Lasting rules go in the description, and today's task in the chat.
- A bot prepares, and a person approves anything that leaves the account.
- Leave anything protective, such as a firewall, alone by default.
- Use a connector, a built-in link to a service, before a browser.
- Routines, tasks on a clock, should report exceptions only.
- Done means merged, with proof from the running app.

## What happened

Three SpaceXAI hosts started on Day 1 with an empty GitHub org named Ship by Thursday and the idea of a food pop-up in San Francisco. Overnight, agents reported the pop-up would not fit the two days left, so on Day 2 the hosts switched to a game studio. On Day 3 it shipped as Thursday Arena, thursdayarena.com, a browser card game with login through X. All the code was written by Cursor Cloud Agents, coding agents that each run on their own isolated machine and open a pull request, a proposed code change for review.

- Day 1: a beginner session, then the first code.
  - Teach a task saves a screen recording as a skill.
  - Approval gates and memory that lasts across chats were shown.
  - A chief-of-staff bot opened a pull request of about 2000 lines nobody read.
  - The hosts then ruled: ship to main, no pull requests.
- Day 2: the game design.
  - A template, a shareable copy of a bot's setup, becomes a card.
  - Its stats come from the bot's description.
  - Three cards make a lineup, and lineups face off for a rating.
  - There is a leaderboard and no paying to win.
- Day 3: the launch.
  - Overnight autopilot was said to produce 100 to 150 pull requests.
  - A bad SQL change from that batch took production down for a stretch.
  - A play-test bot ran on the preview once checks passed, before merge.
  - Stripe showed one-time cards with a spend approval.
  - No price list for Grok Bot was shown.

Most talks were for people outside engineering. Day 1 ran engineering, product and founders, Day 2 ran sales engineering, sales, sales development and support, and Day 3 ran marketing operations, post-sales and marketing. Giveaways required publishing a template. Most sessions opened with the curve of bot use drawn below, then a slide of named bots for that session's job.

```
ask a chatbot
  -> a copilot does one task for you
    -> a bot owns a whole job
      -> a team of bots staffs a function
```

## Advice repeated across talks

Many speakers gave the same advice in different words. It covers how to set up a bot, how to keep routines cheap, how to hand decisions to a person, and how to run code work with agents. One slide contradicted the written rules: it said a bot fixes a failing build and merges its own pull request, while the rules said humans own every merge.

- Ask a bot to write a file of its own duties, then cut or split.
- Duplicate a bot for the same setup with an empty memory.
- With no connector, watch a site's network requests once and call them yourself.
- An hourly routine that finds nothing becomes a weekly one.
- Answer from public documents, and hand low-confidence items to a person.
- Put a fork to the owner as three choices: lock, iterate or hold.
- Record a decision as yes or no.
- Lock a written spec before engineering starts.
- One Cloud Agent per pull request and its follow-ups.
- Proof is a playable video in the pull request.
- Proof files stay out of git.
- Write a verification skill for each app.
- Before work, write a task row: task, owner, stage, pull request, agent, comment.
- Put the date and the source beside every figure.
- One status line for all the bots.
- One bot owns a shared document, and the others only read it.

## What this desk keeps and refuses

Every bot on an account works on one shared cloud computer with the same files and logins, and deleting a bot does not clear them. A bot in front of the others therefore holds every login the account has. This desk keeps mail, cards and passwords off that computer, keeps approval on for anything that leaves the account, and lets no bot merge code.

| | The studio | This desk |
|---|---|---|
| Front | chief-of-staff bot with every login | no bot in front, all report |
| Handoff | chats in Notion and Slack | files in a repository |
| Code | overnight autopilot, a bot merges | one Cloud Agent per change, owner merges |
| Bot computer | mail, passwords, VPN, cards | public material only |
| Growth | full roster on day one | a new bot when reports show a gap |

- Three Cloud Agent runs here by 18 September 2026, all on the site repository.
- They gave draft pull requests 3, 4 and 5, all green, none merged.

The play-test bot matches a rule already in force here: no UI work is done without a picture from the running app.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: how to type a helper, a skill, and a routine
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: one shared computer, helpers that only report, and no manager in the middle
- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which computer the next job opens
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: the isolated machine that writes the pull request
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: proof from the running app
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: earlier how-to pages from the maker, with the same refused middle
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: which seat already holds each job
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: proof on the artifact a coding agent hands back

## Sources

- Event hub: https://x.ai/galaxy — schedule for 15–17 September 2026 at The Howard, 661 Howard Street, San Francisco; livestream 8:30 AM–6:00 PM Pacific each day.
- Event page on Luma: https://luma.com/3ifrgttw — "you will see how Grok Bot fits into each stage of the development process" and "walk away with actionable use cases for your function." Fetched 2026-09-18.
- Day 1 X broadcast: https://x.com/i/broadcasts/1AxRnZbVpjaxl
- Day 2 X broadcast: https://x.com/i/broadcasts/1PKqrNyvmYwGb
- Day 2 public timeline (slide and screen first): https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TIMELINE-day2.md
- Day 3 X broadcast: https://x.com/i/broadcasts/1YGNrbXEeazGw
- Day 3 public timeline (slide and screen first): https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TIMELINE-day3.md
- [Get started](https://docs.x.ai/grok-bot/get-started) and [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations): five-part first task, skill before routine, ask in chat.
- [FAQ](https://docs.x.ai/grok-bot/faq): computer assigned per user, not per Bot.
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: chief of staff, mail, ads, one-finder, finding-as-spec.
- Spoken record of the three days: [[wiki/Research/Grok Bot Galaxy Transcripts|Grok Bot Galaxy Transcripts]]
