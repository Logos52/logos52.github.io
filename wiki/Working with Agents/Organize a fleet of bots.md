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

A handful of bots get tangled fast if you speak to each separately and every one holds its own version of the facts. The fix is to give the fleet a shape: one bot you talk to that hands out the work, other bots with one job each, a group chat for each project, and one shared document that every bot keeps up to date. A regular checkup of the whole fleet then catches the bots that keep making the same mistake.

**Scope.** This draws on [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s own fleet, shown in a video tour of the bots she uses, together with the bot teams that speakers built and ran during the three days of the Grok Bot Galaxy livestream. It suits anyone running more than a few bots, for work or at home.

<div class="callout">

<b>At a glance</b>

1. Talk to one chief of staff bot, and let it hand work to the others.
2. Give each of the other bots a name and one job.
3. Gather the bots on one project in a shared group chat.
4. Make one shared document the source of truth, and have every bot keep it current.
5. Check the fleet on a schedule for repeated mistakes and wasteful routines.

</div>

<figure>
<svg viewBox="0 0 300 660" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="fl-parts-t">
<title id="fl-parts-t">With one front door, single-job bots, a group chat per project and one shared document, a fleet behaves like a small team working from one set of notes, and the checkup keeps it that way as it grows.</title>
<rect x="0.5" y="0.5" width="299" height="659" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">With one front door, single-job</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">bots, a group chat per project</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">and one shared document, a</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">fleet behaves like a small</text>
<text x="20" y="136" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">team working from one set of</text>
<text x="20" y="160" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">notes, and the checkup keeps</text>
<text x="20" y="184" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">it that way as it grows.</text>
<line x1="20" y1="200" x2="280" y2="200" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="199" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="228" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">one bot you talk to that hands</text>
<text x="20" y="250" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">out the work</text>
<text x="20" y="272" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">receives your requests and passes</text>
<text x="20" y="294" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">them on</text>
<line x1="20" y1="308" x2="280" y2="308" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="336" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">other bots with one job each</text>
<text x="20" y="358" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">a specialist and not a bot that tries</text>
<text x="20" y="380" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">to do everything</text>
<line x1="20" y1="394" x2="280" y2="394" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="422" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">a group chat for each project</text>
<text x="20" y="444" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">where they work on it together</text>
<line x1="20" y1="458" x2="280" y2="458" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="486" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">one shared document that</text>
<text x="20" y="508" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">every bot keeps up to date</text>
<text x="20" y="530" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">gives every bot the same facts</text>
<line x1="20" y1="544" x2="280" y2="544" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="572" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A regular checkup of the whole</text>
<text x="20" y="594" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">fleet</text>
<text x="20" y="616" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">catches the bots that keep making</text>
<text x="20" y="638" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the same mistake</text>
</svg>
</figure>

## Why it works

One livestream speaker compared this shape to a coding agent, where an orchestrator fans work out to others. You then interact with the orchestrator rather than with each bot, and you stay in one thread of context. A shared document gives every bot the same facts, and on the livestream one speaker called such documents the way for bots to work with other bots and with the company's context. For engineering work the codebase already plays that role, as the best source of context and memory, but for many operational tasks it helps to write docs.

## The method

1. **Make one bot the front door.** A chief of staff bot receives your requests and passes them on, and it can create new bots too. Asked to spin up three bots that would help, a chief of staff typically creates something like an inbox manager and a scheduler. In [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s fleet she mostly talks to her chief of staff, which talks to an engineering lead bot whose job is to break tasks down and delegate rather than do the work.
2. **Give each other bot one job and a name.** When a bot-making bot drew up a new bot on the livestream, it gave the bot one job so that it was a specialist and not a bot that tries to do everything. [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s bot-making bot gives her bots food names.
3. **Group bots by project.** One speaker works out each bot's swim lane and then puts the bots for one initiative, such as website conversion, into a group chat where they work on it together. Initiatives start and stop, while the bots themselves are always on and keep getting better. In the same video as [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg), the other presenter puts three bots with different roles, such as product and design, into a single group chat so they can develop ideas with one another.
4. **Make one shared document the source of truth.** One speaker said they would tell their bot-making bot to tell the whole team that the shared document is the source of truth, and that every bot should keep it updated. By the last day, the team's shared documents held a task board, the database schema, the game's rules and a launch checklist written live. On screen, a bot that could not reach its page stalled mid-demo, so check that every bot can open the document.
5. **Check the fleet on a schedule.** [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s bot-making bot runs a fleet checkup that looks through all of her bots and their chat transcripts for a bot that keeps doing something it shouldn't. For each one it proposes a fix, such as a new skill, a new bot or a changed routine. It also reviews routines for waste, because a bot that wakes every 10 minutes burns usage. One livestream speaker runs routines only once or twice a day, finding more frequent ones noisy.

### A prompt to copy

> You are my chief of staff. Hand each request to the bot whose one job fits it, or ask the bot-making bot to create one if none does. Tell every bot that our shared document is the source of truth and that they must keep it updated. On a regular schedule (the sources give no cadence), read the bots' transcripts and routines, and tell me which bot keeps repeating a mistake and which routine wakes up more often than it needs to.

## Signals and failure points

| If you see | The cause | The fix |
|---|---|---|
| You open every bot's thread to keep up | There is no front door | Route requests through one chief of staff |
| Two bots give different answers about the same fact | Each keeps its own version | Point both at the shared document |
| A bot stalls on a page it can't open | Its connection to the document is broken | Check access before relying on it |
| A bot keeps making the same mistake | Nobody checks the fleet | Add a scheduled checkup |

With one front door, single-job bots, a group chat per project and one shared document, a fleet behaves like a small team working from one set of notes, and the checkup keeps it that way as it grows.

## Open questions

How should a fleet handle two bots updating the same part of the shared document at once? The sources don't say.

When should a request skip the chief of staff and go straight to a bot? One speaker still opens each bot's thread, and the sources give no rule.

How often should the fleet checkup run? The video gives no cadence.

## Related pages

- [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]] covers coordinator agents for coding work.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] says what to do with a mistake the checkup finds.
- [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]] covers the codebase as memory for engineering bots.

## Sources

- [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg) with another presenter, video tour of their bots (uploaded 2026-09-27, auto-captions). Her chief of staff and engineering lead bots, the food names and the fleet checkup, plus the other presenter's group chat for three bots with different roles, such as product and design. Paraphrased.
- Grok Bot Galaxy livestream, days 2 and 3 (2026-09-16 to 2026-09-17, caption transcripts and visual notes, speaker labels unreliable). The chief of staff as orchestrator, bots creating bots, one job per bot, group chats per initiative, the shared document as the source of truth, the stalled page, routine frequency. Paraphrased, one short quote.
