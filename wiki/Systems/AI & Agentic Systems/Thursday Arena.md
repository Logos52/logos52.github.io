---
title: "Thursday Arena"
type: concept
status: seed
created: 2026-11-11
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
description: "A browser card game built live by three people and a fleet of bots over the three days of Grok Bot Galaxy, from an empty code account to launch, overnight autopilot and a production outage."
tags:
  - agents
  - grok-bot
  - case-study
wedge_reviewed: false
---

# Thursday Arena

> Not yet reviewed by Wedge.

Thursday Arena is a free auto-battler card game that three people built in public with a fleet of bots during the Grok Bot Galaxy livestream, from 15 to 17 September 2026. They started from an empty code account and bot accounts with no bots in them, and they spent the first day building a small software factory before any product existed. That factory had a chief of staff bot, an engineering bot, a reviewing bot, an automated pull request review and a tool that let agents drive the app. Overnight research by the agents killed the first idea, a restaurant pop-up, so the second day became a game studio. A throwaway prototype grew one bot per job, and that night a plan run on full autopilot landed 168 pull requests, the small reviewed code changes that make up the project's history. On the third day the game went live and a triage bot turned player feedback into reproduced bugs. A human refused a security shortcut that a bot proposed, and near the end a bad database query from the factory took the live game down.

<figure>
<svg viewBox="0 0 520 446" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ta-days-t">
<title id="ta-days-t">Thursday Arena is a free auto-battler card game that three people built in public with a fleet of bots during the Grok Bot Galaxy livestream, from 15 to 17 September 2026.</title>
<rect x="0.5" y="0.5" width="519" height="445" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="480" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="50" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Day one</text><text x="40" y="70" style="fill:var(--qp-ink);font-size:13px">built the factory before the product</text><text x="40" y="88" style="fill:var(--qp-mut);font-size:12px">29 bots and 987 messages</text>
<path d="M260,108 L260,115" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,124 255.0,115.0 265.0,115.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="126" width="480" height="88" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="156" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Day two</text><text x="40" y="176" style="fill:var(--qp-ink);font-size:13px">pivoted to a game</text><text x="40" y="196" style="fill:var(--qp-ink);font-size:13px">grew one bot per job</text>
<path d="M260,216 L260,223" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,232 255.0,223.0 265.0,223.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="234" width="480" height="86" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="40" y="264" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Overnight</text><text x="40" y="284" style="fill:var(--qp-ink);font-size:13px">the plan ran on full autopilot</text><text x="40" y="302" style="fill:var(--qp-mut);font-size:12px">168 pull requests</text>
<path d="M260,322 L260,329" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,338 255.0,329.0 265.0,329.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="340" width="480" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="370" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Day three</text><text x="40" y="390" style="fill:var(--qp-ink);font-size:13px">launched the game and ran it live</text><text x="40" y="408" style="fill:var(--qp-mut);font-size:12px">took the live game down</text>
</svg>
</figure>

## Day one built the factory before the product

The hosts chose Slack as the place where everything would happen and parked a ticket tracker, on the reasoning that a bug reported in a channel could go straight to a fix. Their first idea was a pop-up restaurant, so they started prototyping at once while a planning document filled up in parallel.

Before writing any product code, one host asked the bot-making bot to turn the default bot into a chief of staff, then talked mostly to that chief, which handed work on to the others. The host settled the tech stack with short replies to the bot's plan, choosing hosting on Vercel and a real PlanetScale Postgres database from the start, so nothing would need replacing later. One standing rule came when the chief of staff opened a pull request. The host told it to ship straight to the main branch for now, then saw that the pull request ran to about 2,000 lines and said they were not going to read all that.

The factory itself stayed small on purpose. An engineering bot called Tater opened pull requests, a reviewing bot called Hashbrown reviewed them, and pstack went into the code repository as a plugin so every agent there got the same skills. A Cursor automation fired on every pull request posted to a Slack review channel and checked it for correctness, risk and missing tests. Within hours there were 13 pull requests.

The last piece was a verification skill, built before any feature. It gives every agent the same script for driving the app, because agents that write their own throwaway scripts burn tokens and get results nobody can reproduce. Later that day the host updated it to always record video when a change affects what the user sees. A first venue-finder prototype then went out to several agents in parallel, with the closing instruction to restate the plan before acting. By evening the fleet overlay showed 29 bots and 987 messages, and the team had not settled on any idea.

<figure>
<svg viewBox="0 0 520 414" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ta-factory-t">
<title id="ta-factory-t">The factory itself stayed small on purpose.</title>
<rect x="0.5" y="0.5" width="519" height="413" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="130" y="20" width="260" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">chief of staff</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">handed work on to the others</text>
<rect x="20" y="122" width="220" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="130" y="152" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Tater</text><text x="130" y="172" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">opened pull requests</text>
<rect x="280" y="122" width="220" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="390" y="152" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Hashbrown</text><text x="390" y="172" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">reviewed them</text>
<path d="M200,91 L138.356,115.657" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="130,119 136.5,111.0 140.2,120.3" style="fill:var(--qp-mut)"/>
<path d="M244,156 L267,156" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="276,156 267.0,161.0 267.0,151.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="224" width="480" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="254" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">A Cursor automation</text><text x="260" y="274" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">fired on every pull request</text><text x="260" y="292" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">checked it for correctness, risk and missing tests</text>
<path d="M260,193 L260,212" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,221 255.0,212.0 265.0,212.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="326" width="480" height="68" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="260" y="356" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">a verification skill</text><text x="260" y="376" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">gives every agent the same script for driving the app</text>
</svg>
</figure>

## Day two pivoted to a game and grew one bot per job

The agents' overnight research said a restaurant was more than the team could do in two days, so the hosts pivoted to a game studio. On a whiteboard, bot templates from the Grok Bot marketplace became characters with stats and rarity tiers. A player would draft a team of three characters and pit that lineup against another one. A skill rating and a leaderboard would rank players, and nothing would be pay-to-win.

Before any code, the hosts wrote a plan. It followed pstack's planning playbook, which includes a checklist for verifying the app and sketches of the data types, and it went into the code repository. The engineer bot was then made by voice. Its brief said to use pstack and poteto-mode to spawn cloud agents, and it defined the job as orchestrating those agents, supervising them and checking their work. The bot would start with quick prototypes, but it had to stay durable enough for serious engineering later. That first prototype skipped sign-in and the database entirely, and the host told the agent to skip the slower multi-model architecture step too, since they were only prototyping.

The hosts added bots one job at a time through the bot-maker or the chief of staff. Their jobs covered design, critique, 3D animation experiments, art, sound and mentions in Slack. A critique bot's planning page returned a missing-page error mid-demo. The host then had the bot-maker tell eight bots that one Notion workspace was the source of truth they should all keep updated, and the bot-maker saved that rule to shared memory. The engineer bot's description had meanwhile filled with narrow rules, so the bot-maker rewrote it as principles. By late afternoon the prototype was being converted into a React app on a Go backend.

## Overnight the plan ran on full autopilot

The first design, a one-on-one face-off of stats, was not much fun when the hosts played it. Overnight they borrowed mechanics from games they liked and wrote new plans with their bots and cloud agents. Telling poteto-mode to run a plan on full autopilot splits the plan into small phases and stands up a small factory. Some agents implement small pull requests, others run the app, click around and try to break it, and the changes then merge themselves. By the morning 168 pull requests had landed, and one host said they had not looked at the code at all.

<figure>
<svg viewBox="0 0 520 338" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ta-autopilot-t">
<title id="ta-autopilot-t">Some agents implement small pull requests, others run the app, click around and try to break it, and the changes then merge themselves.</title>
<rect x="0.5" y="0.5" width="519" height="337" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">splits the plan into small phases</text>
<rect x="20" y="98" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="136" y="128" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">Some agents implement</text><text x="136" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">small pull requests</text>
<rect x="268" y="98" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="128" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">others run the app, click</text><text x="384" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">around and try to break it</text>
<path d="M210.4,71 L144.565,92.237" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="136,95 143.0,87.5 146.1,97.0" style="fill:var(--qp-mut)"/>
<path d="M309.6,71 L375.435,92.237" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="384,95 373.9,97.0 377.0,87.5" style="fill:var(--qp-mut)"/>
<rect x="20" y="196" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="226" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">the changes then merge themselves</text>
<path d="M136,169 L201.835,190.237" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="210.4,193 200.3,195.0 203.4,185.5" style="fill:var(--qp-mut)"/>
<path d="M384,169 L318.165,190.237" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="309.6,193 316.6,185.5 319.7,195.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="270" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="260" y="300" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">By the morning 168 pull requests had landed</text>
<path d="M260,247 L260,258" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,267 255.0,258.0 265.0,258.0" style="fill:var(--qp-mut)"/>
</svg>
</figure>

## Day three launched the game and ran it live

The morning added a playtester bot called Play, which picked up any pull request that passed the automated test suite and played the full game end to end on the preview build. Launch work then moved sign-in with X from a test setup to production and chased a DNS problem and a cross-site request error. The game account posted that it was live at 1:18 PM Eastern Time.

What shipped is an auto-battler with cards made from marketplace bot templates, each with attack, health and its own ability, and a player spends gold on a lineup across three rounds. Players signed in with X earn a skill rating, and a practice mode needs no account.

Running it live leaned on the same habits as building it. When matchmaking scores looked wrong, the instruction was to investigate with a cloud agent and not open a pull request, only report back what was going on. Player feedback flowed into a Slack channel, and the host asked the chief of staff to set up a workflow that triaged it, tried to reproduce each issue and filed a ticket in Notion. Automatic fixing waited for later, and the workflow had to filter off-topic posts, profanity and odd links, and stay alert to prompt injection. The new triage bot, Crumble, soon found blank screens and a rank display that went stale.

The fix step then ran on autopilot, with two conditions because the game was now live. Every change had to pass the game's own verify skill and a swarm of cloud agents, each on its own computer, playing and stress-testing the game. The bots also had to reproduce an issue before fixing it, with the reviewing bot checking that the triage had understood the report. When the chief of staff proposed letting agent traffic bypass the site's protection against flooding attacks, a human chose to hold and keep the protection on.

A snapshot at 4:25 PM Eastern Time showed 3,666 practice games, 1,248 sign-ins with X, a win rate of 46.8% and 253 feedback items. Computer-run opponents had been beating new players, and over the day the public win rate moved from about 42% to about 47%. Near the end of the broadcast a faulty SQL query from the factory took the live game down and signups paused. A second season was out by 19 September.

<figure>
<svg viewBox="0 0 520 160" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ta-snapshot-t">
<title id="ta-snapshot-t">A snapshot at 4:25 PM Eastern Time showed 3,666 practice games, 1,248 sign-ins with X, a win rate of 46.8% and 253 feedback items.</title>
<rect x="0.5" y="0.5" width="519" height="159" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" style="fill:var(--qp-mut);font-size:12px">A snapshot at 4:25 PM Eastern Time</text>
<rect x="20" y="56" width="111" height="84" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="75.5" y="98" text-anchor="middle" style="fill:var(--qp-ink);font-size:22px;font-weight:600">3,666</text>
<text x="75.5" y="122" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">practice games</text>
<rect x="143" y="56" width="111" height="84" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="198.5" y="98" text-anchor="middle" style="fill:var(--qp-ink);font-size:22px;font-weight:600">1,248</text>
<text x="198.5" y="122" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">sign-ins with X</text>
<rect x="266" y="56" width="111" height="84" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="321.5" y="98" text-anchor="middle" style="fill:var(--qp-ink);font-size:22px;font-weight:600">46.8%</text>
<text x="321.5" y="122" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">win rate</text>
<rect x="389" y="56" width="111" height="84" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="444.5" y="98" text-anchor="middle" style="fill:var(--qp-ink);font-size:22px;font-weight:600">253</text>
<text x="444.5" y="122" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">feedback items</text>
</svg>
</figure>

## Open questions

How does a team decide which work stays on full autopilot once real players arrive?

What makes a bot description drift into narrow rules over a single day?

How should a playtester bot judge whether a game is fun?

## Sources

- Grok Bot Galaxy livestream, days 1 to 3, 15 to 17 September 2026, machine caption transcripts with no speaker labels. Day 1 lines 40-41, 246-247, 312-313, 331-332, 386-389, 492-498, 531-534, 568-569, 598. Day 2 lines 7, 16-37, 41-42, 148, 161-163, 185-196, 356-364, 594. Day 3 lines 11-17, 120-123, 142-143, 203, 209-211, 237-245, 810. Paraphrased. Replays: [day 1](https://x.com/i/broadcasts/1AxRnZbVpjaxl), [day 2](https://x.com/i/broadcasts/1PKqrNyvmYwGb), [day 3](https://x.com/i/broadcasts/1YGNrbXEeazGw).
- Galaxy end-of-day visual notes for 15, 16 and 17 September 2026, a scrub of the replay. Fleet overlay, the bot roster, the source-of-truth broadcast, the security hold and the day 3 numbers.
- Posts from the hosts and the game account on X, 16 to 19 September 2026, read through the X API. The pivot post, the launch post and the second season.
- Hosts: Lauren Tan ([poteto](https://x.com/poteto)), Matt Palmer ([mattyp](https://x.com/mattyp)) and Roshan Sadanani ([roshan_s](https://x.com/roshan_s)). The game is at [thursdayarena.com](https://thursdayarena.com).

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Working with Agents/Organize a fleet of bots|Organize a fleet of bots]]
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]
