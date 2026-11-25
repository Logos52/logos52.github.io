---
title: "Organize a fleet of bots"
type: guide
section: "Working with Agents"
status: seed
description: "Keep many bots from tangling: talk to one chief of staff bot, give every other bot one job, group bots by project, keep one shared document they all update, and check the fleet on a schedule."
created: 2026-10-20
updated: 2026-10-20
effort: an afternoon to set up
needs: several bots and a shared document
cost_note: no
aliases:
  - "Giving an Agent the Right Facts"
tags:
  - agents
  - bots
  - organization
wedge_reviewed: true
---

# Organize a fleet of bots

A handful of bots get tangled fast if you speak to each separately and every one holds its own version of the facts. The fix is to give the fleet a shape. One bot you talk to hands out the work, the other bots have one job each, each project gets a group chat, and every bot keeps one shared document up to date. A regular checkup of the whole fleet then catches the bots that keep making the same mistake.

<div class="callout">

<b>At a glance</b>

1. Talk to one chief of staff bot, and let it hand work to the others.
2. Give each of the other bots a name and one job.
3. Gather the bots on one project in a shared group chat.
4. Make one shared document the source of truth, and have every bot keep it current.
5. Check the fleet on a schedule for repeated mistakes and wasteful routines.

</div>

<figure>
<svg viewBox="0 0 300 658" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="fl-parts-t">
<title id="fl-parts-t">One bot you talk to hands out the work, the other bots have one job each, each project gets a group chat, and every bot keeps one shared document up to date.</title>
<rect x="0.5" y="0.5" width="299" height="657" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">One bot you talk to hands out</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">the work, the other bots have</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">one job each, each project</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">gets a group chat, and every</text>
<text x="20" y="136" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">bot keeps one shared document</text>
<text x="20" y="160" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">up to date.</text>
<line x1="20" y1="176" x2="280" y2="176" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="175" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="204" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">One bot you talk to hands out</text>
<text x="20" y="226" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">the work</text>
<text x="20" y="248" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">receives your requests and passes</text>
<text x="20" y="270" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">them on</text>
<line x1="20" y1="284" x2="280" y2="284" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="312" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">the other bots have one job</text>
<text x="20" y="334" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">each</text>
<text x="20" y="356" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">a specialist and not a bot that tries</text>
<text x="20" y="378" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">to do everything</text>
<line x1="20" y1="392" x2="280" y2="392" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="420" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">each project gets a group chat</text>
<text x="20" y="442" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">where they work on it together</text>
<line x1="20" y1="456" x2="280" y2="456" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="484" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">every bot keeps one shared</text>
<text x="20" y="506" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">document up to date</text>
<text x="20" y="528" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">gives every bot the same facts</text>
<line x1="20" y1="542" x2="280" y2="542" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="570" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A regular checkup of the whole</text>
<text x="20" y="592" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">fleet</text>
<text x="20" y="614" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">catches the bots that keep making</text>
<text x="20" y="636" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the same mistake</text>
</svg>
</figure>

## Why it works

A fleet with one front door works like a coding agent, where an orchestrator fans work out to others. You then interact with the orchestrator rather than with each bot, and you stay in one thread of context. A shared document gives every bot the same facts, and such documents are how bots work with other bots and with the company's context. For engineering work the codebase already plays that role, as the best source of context and memory, but for many operational tasks it helps to write docs.

## The method

1. **Make one bot the front door.** A chief of staff bot receives your requests and passes them on, and it can create new bots too. Asked to spin up three bots that would help, a chief of staff typically creates something like an inbox manager and a scheduler. In one fleet, the owner mostly talks to the chief of staff, which talks to an engineering lead bot whose job is to break tasks down and delegate rather than do the work.
2. **Give each other bot one job and a name.** Bot-making bots are bots whose job is creating other bots. During a livestream build, one drew up a new bot with a single job so that it was a specialist and not a bot that tries to do everything. In one fleet, the bot-making bot gives every bot a food name.
3. **Group bots by project.** Work out each bot's swim lane (its area of work), then put the bots for one initiative, such as website conversion, into a group chat where they work on it together. Initiatives start and stop, while the bots themselves are always on and keep getting better. Another setup puts three bots with different roles, such as product and design, into a single group chat so they can develop ideas with one another.
4. **Make one shared document the source of truth.** Have the bot-making bot tell the whole team that the shared document is the source of truth, and that every bot should keep it updated. By the last day of one three-day build, the team's shared documents held a task board, the database schema, the game's rules and a launch checklist written live. In one demo, a bot that could not reach its page stalled partway through, so check that every bot can open the document.
5. **Check the fleet on a schedule.** In one fleet, the bot-making bot runs a fleet checkup. The checkup looks through all the fleet's bots and their chat transcripts for a bot that keeps doing something it shouldn't. For each one it proposes a fix, such as a new skill, a new bot or a changed routine. It also reviews routines for waste, because a bot that wakes every 10 minutes burns usage. One fleet runs its routines only once or twice a day, because more frequent ones were noisy.

### A prompt to copy

> You are my chief of staff. Hand each request to the bot whose one job fits it, or ask the bot-making bot to create one if none does. Tell every bot that our shared document is the source of truth and that they must keep it updated. On a regular schedule, read the bots' transcripts and routines, and tell me which bot keeps repeating a mistake and which routine wakes up more often than it needs to.

## Signals and failure points

| If you see | The cause | The fix |
|---|---|---|
| You open every bot's thread to keep up | There is no front door | Route requests through one chief of staff |
| Two bots give different answers about the same fact | Each keeps its own version | Point both at the shared document |
| A bot stalls on a page it can't open | Its connection to the document is broken | Check access before relying on it |
| A bot keeps making the same mistake | Nobody checks the fleet | Add a scheduled checkup |

## Open questions

How should a fleet handle two bots updating the same part of the shared document at once?

When should a request skip the chief of staff and go straight to a bot?

How often should the fleet checkup run?

## Related pages

- [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]] covers coordinator agents for coding work.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] says what to do with a mistake the checkup finds.
- [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]] covers the codebase as memory for engineering bots.

## Sources

- [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg) with another presenter, video tour of their bots (uploaded 2026-09-27, auto-captions). Her chief of staff and engineering lead bots, the food names and the fleet checkup, plus the other presenter's group chat for three bots with different roles, such as product and design. Paraphrased.
- Grok Bot Galaxy livestream, days 2 and 3 (2026-09-16 to 2026-09-17, caption transcripts and visual notes, speaker labels unreliable). The chief of staff as orchestrator, bots creating bots, one job per bot, group chats per initiative, the shared document as the source of truth, the stalled page, routine frequency. Paraphrased, one short quote.
