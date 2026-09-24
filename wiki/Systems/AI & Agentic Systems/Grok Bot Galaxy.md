---
title: "Grok Bot Galaxy"
type: research
status: developing
draft: true
created: 2026-09-17
updated: 2026-09-24
method: outline-2026-09-24
written-by: fable
description: "What the three-day Grok Bot Galaxy livestream showed about scoping, approving and checking bots, and which of its practices this desk keeps or refuses."
prose-model: fable
tags:
  - grok-bot
  - research
  - agents
  - agentic-engineering
---

# Grok Bot Galaxy

Grok Bot Galaxy was a three-day public livestream, 15 to 17 September 2026, in which SpaceXAI staff built a company on camera with Grok Bot, a desktop app whose named bots each hold one standing job and work on a computer in the cloud, while other staff gave talks on using it in sales, support and marketing. The talks are the largest public record of how SpaceXAI wants a bot scoped, approved and checked, and the mistakes made on camera show which habits this desk keeps out.

## Core takeaways

- Scope a bot like a job description: one job, the rules that always apply in its description, today's task in the chat.
- A bot prepares; a person approves anything that leaves the account, and anything protective, such as a firewall, is left alone by default.
- Use a connector, a built-in link to a service, before a browser; a routine, a task on a clock, should report exceptions only.
- Application code is written on a separate machine per pull request, a proposed change to code that someone reviews, and done means merged, with proof from the running app in the pull request text.
- The studio's chief-of-staff bot, its unread 2000-line pull request, its overnight factory of pull requests and its production outage are the cases this desk refuses.

## What happened

- Day 1: an empty GitHub org named Ship by Thursday, three hosts, and an idea, a food pop-up in San Francisco.
  - A Grok Bot 101 session showed Teach a task, where a screen recording is saved as a skill, approval gates, and memory that lasts across chats.
  - A chief-of-staff bot opened a pull request of about 2000 lines that nobody read. The hosts ruled ship to main, no pull requests.
- Day 2: overnight agents reported the pop-up would not fit the two days left. The hosts switched to a game studio.
  - The game: a template, a shareable copy of one bot's setup, becomes a card with stats drawn from its description; a lineup of three cards; a face-off; a rating and a leaderboard; no pay-to-win.
- Day 3: shipped as Thursday Arena, thursdayarena.com, with login through X.
  - Overnight autopilot was said to have produced 100 to 150 pull requests. A bad SQL change from that batch took production down for a stretch.
  - A play-test bot ran on a preview copy of the site when checks were green, before merge.
  - Stripe showed one-time cards with a spend approval. No price list for Grok Bot was shown.
- Sessions by day: engineering, product and founders on Day 1; sales engineering, sales, sales development and support on Day 2; marketing operations, post-sales and marketing on Day 3. Giveaways required publishing a template.

Most sessions opened with one curve of bot use, then a slide of named bots for the job the session was about.

```
ask a chatbot
  -> a copilot does one task for you
    -> a bot owns a whole job
      -> a team of bots staffs a function
```

## Advice repeated across talks

- Ask a bot to write a file of its own duties, then cut or split.
- Duplicate a bot to get the same setup with an empty memory.
- Where no connector exists, watch the site's network requests once and make the same requests yourself.
- An hourly routine that finds nothing becomes a weekly one.
- Answer from public documents; hand low-confidence items to a person.
- Put a fork to the owner as three choices: lock, iterate, or hold. Record a decision as yes or no. Lock a written spec before engineering starts.
- One Cursor Cloud Agent, a coding agent on its own isolated machine that clones a repository and opens a pull request, per pull request and its follow-ups. Proof is a playable video of the real product in the pull request text, and proof files stay out of git. Write a verification skill for each app.
- Write a task row before work starts: task, owner, stage, pull request, agent, last comment. Put the date and the source beside every figure. One status line for all the bots.
- One bot owns a shared document; the others only read it.
- One slide said a bot fixes a failing build and merges its own pull request. The written rules said humans own every merge.

## What this desk keeps and refuses

| | The studio | This desk |
|---|---|---|
| Front | A chief-of-staff bot holding every login | No bot in front; every bot reports |
| Handoff between bots | Chats in Notion and Slack | Files in a repository |
| Code | Overnight autopilot, a bot merges | One Cloud Agent per pull request, the owner merges |
| On the bot computer | Mail, passwords, VPN, cards | Public material only |
| Growth | A full roster on day one | A new bot when the current reports show a gap |

Every bot on an account works on one shared cloud computer with the same files and logins, and deleting a bot does not clear them. A bot in front of the others therefore holds every login the account has. That is why this desk keeps mail, cards and passwords off the computer, keeps approval on for anything that leaves the account, and lets no bot merge code.

- Cloud Agents have run three times on this desk as of 18 September 2026, all on the site repository, producing draft pull requests 3, 4 and 5 with all checks green and none merged.
- The play-test bot matches a rule already in force here: no UI work is called done without a picture from the running app.

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
