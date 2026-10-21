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
---

# Organize a fleet of bots

A handful of bots tangle quickly when you talk to each one separately and each keeps its own version of the facts. The fix is to give the fleet a shape: one bot you talk to that hands out the work, other bots with one job each, a group chat for each project, and one shared document that every bot keeps up to date. A regular checkup of the whole fleet then catches the bots that keep making the same mistake.

**Scope.** This draws on [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s own fleet, shown in a video tour of the bots she uses, together with the bot teams that speakers built and ran during the three days of the Grok Bot Galaxy livestream. It fits anyone running more than a few bots, for work or at home.

<div class="callout">

<b>At a glance</b>

1. Talk to one chief of staff bot, and let it hand work to the others.
2. Give every other bot one job and a name.
3. Put the bots working on one project into a group chat.
4. Keep one shared document as the source of truth, and tell every bot to keep it updated.
5. Check the fleet on a schedule for repeated mistakes and wasteful routines.

</div>

<figure>
<svg viewBox="0 0 520 573" width="100%" style="max-width:520px" role="img" aria-labelledby="fl-shape-t">
<title id="fl-shape-t">The fleet shape. A dashed frame labelled In Lauren's fleet holds her chief of staff, the front door, which talks to an engineering lead that breaks tasks down and delegates, and the bots under the engineering lead, each with a name and one job. The frame also holds the bot-making bot, which gives each bot one job and a name. You talk to the chief of staff. Below a dividing line, a separate general example: a group chat for each project, and one shared document. Bots with one job each share a group chat for one project. A shared document is the source of truth, and every bot keeps it updated. Dashed lines join it to the bots, and one line is broken where a bot can't open its page. At the bottom, a fleet checkup on a schedule, which Lauren's bot-making bot runs, looks through all the bots and their chat transcripts for repeated mistakes and wasteful routines.</title>
<rect x="10" y="38" width="60" height="33" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="58" style="font-weight:600">You</text></g>
<rect x="120" y="38" width="182" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="130" y="58" style="font-weight:600">Chief of staff</text><text x="130" y="75">The front door</text></g>
<path d="M70,54.5 L119,54.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="119.0,54.5 110.0,59.5 110.0,49.5" style="fill:var(--mut,#666)"/>
<rect x="368" y="38" width="138" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="378" y="58" style="font-weight:600">Bot-making bot</text><text x="378" y="75">Gives each bot</text><text x="378" y="92">one job and</text><text x="378" y="109">a name</text></g>
<line x1="302" y1="63.0" x2="368" y2="63.0" style="stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:4 3"/>
<path d="M211,88 L211,114" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="211.0,114.0 206.0,105.0 216.0,105.0" style="fill:var(--mut,#666)"/>
<rect x="120" y="116" width="182" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="130" y="136" style="font-weight:600">Engineering lead</text><text x="130" y="153">Breaks tasks down</text><text x="130" y="170">and delegates</text></g>
<path d="M211,183 L211,207 M129.0,207 L293.0,207" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M129.0,207 L129.0,221" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="129.0,221.0 124.0,212.0 134.0,212.0" style="fill:var(--mut,#666)"/>
<rect x="90" y="223" width="78" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<path d="M98,233 L112,233 L118,238 L112,243 L98,243 Z" style="fill:none;stroke:var(--mut,#666);stroke-width:1.1"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="122" y="242">Name</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="98" y="263">One job</text></g>
<path d="M211.0,207 L211.0,221" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="211.0,221.0 206.0,212.0 216.0,212.0" style="fill:var(--mut,#666)"/>
<rect x="172" y="223" width="78" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<path d="M180,233 L194,233 L200,238 L194,243 L180,243 Z" style="fill:none;stroke:var(--mut,#666);stroke-width:1.1"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="204" y="242">Name</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="180" y="263">One job</text></g>
<path d="M293.0,207 L293.0,221" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="293.0,221.0 288.0,212.0 298.0,212.0" style="fill:var(--mut,#666)"/>
<rect x="254" y="223" width="78" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<path d="M262,233 L276,233 L282,238 L276,243 L262,243 Z" style="fill:none;stroke:var(--mut,#666);stroke-width:1.1"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="286" y="242">Name</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="262" y="263">One job</text></g>
<rect x="80" y="10" width="436" height="275" rx="12" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.3;stroke-dasharray:7 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="92" y="29" style="font-weight:600">In Lauren's fleet</text></g>
<line x1="10" y1="307" x2="510" y2="307" style="stroke:var(--rule2,#999);stroke-width:1"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="start"><text x="10" y="325" style="font-weight:600">A group chat for each project, and one shared document</text></g>
<rect x="18" y="347" width="308" height="90" rx="20" style="fill:none;stroke:var(--accent,#2a6);stroke-width:1.3;stroke-dasharray:6 4"/>
<rect x="30" y="373" width="88" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="74.0" y="398">One job</text></g>
<rect x="128" y="373" width="88" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="172.0" y="398">One job</text></g>
<rect x="226" y="373" width="88" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="270.0" y="398">One job</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="32" y="365">Group chat for one project</text></g>
<path d="M360,347 L492,347 L510,365 L510,459 L360,459 Z M492,347 L492,365 L510,365" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:1.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="370" y="371" style="font-weight:600">Shared document</text><text x="370" y="388">Source of truth.</text><text x="370" y="405">Every bot</text><text x="370" y="422">keeps it updated</text></g>
<path d="M314,393 L360,393" style="stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:3 3"/>
<path d="M172.0,413 L172.0,447 L400,447 L400,459" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:3 3"/>
<path d="M74.0,413 L74.0,467 L130,467" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:3 3"/>
<path d="M134,461 L146,473 M146,461 L134,473" style="stroke:var(--ink,currentColor);stroke-width:2"/>
<path d="M150,467 L470,467 L470,459" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:3 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="156" y="485">Can't open its page</text></g>
<rect x="10" y="503" width="500" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<circle cx="38" cy="531" r="11" style="fill:none;stroke:var(--ink,currentColor);stroke-width:2"/><path d="M46,539 L56,549" style="stroke:var(--ink,currentColor);stroke-width:3"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="70" y="525" style="font-weight:600">Fleet checkup on a schedule</text><text x="70" y="541">Looks through all the bots and their chat transcripts</text><text x="70" y="557">for repeated mistakes and wasteful routines</text></g>
</svg>
<figcaption>The fleet shape. One front door, bots with one job each, a group chat per project and one shared document, with a checkup on a schedule.</figcaption>
</figure>

## Why it works

One livestream speaker compared this shape to a coding agent, where an orchestrator fans work out to others. You then interact with the orchestrator rather than with each bot, and you stay in one thread of context. A shared document gives every bot the same facts, and on the livestream one speaker called such documents the way for bots to work with other bots and with the company's context. For engineering work the codebase already plays that role, as the best source of context and memory, but for many operational tasks it helps to write docs.

## The method

1. **Make one bot the front door.** A chief of staff bot takes your requests and passes them on, and it can create new bots too. Asked to spin up three bots that would help, a chief of staff typically creates something like an inbox manager and a scheduler. In [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s fleet she mostly talks to her chief of staff, which talks to an engineering lead bot whose job is to break tasks down and delegate rather than do the work.
2. **Give each other bot one job and a name.** When a bot-making bot drew up a new bot on the livestream, it gave the bot one job so that it was a specialist and not a bot that tries to do everything. [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s bot-making bot gives her bots food names.
3. **Group bots by project.** One speaker works out each bot's swim lane and then puts the bots for one initiative, such as website conversion, into a group chat where they work on it together. Initiatives start and stop, while the bots themselves are always on and keep getting better. In the same video as [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg), the other presenter puts three bots with different roles, such as product and design, into one group chat so they can work out ideas together.
4. **Keep one shared document as the source of truth.** One speaker said they would tell their bot-making bot to tell the whole team "that the notion is going to be the source of truth and every bot should keep it updated". By the last day, the team's shared documents held a task board, the database schema, the game's rules and a launch checklist written live. On screen, a bot that could not reach its page stalled mid-demo, so check that every bot can open the document.
5. **Check the fleet on a schedule.** [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg)'s bot-making bot runs a fleet checkup that looks through all of her bots and their chat transcripts for a bot that keeps doing something it shouldn't. For each one it proposes a fix, such as a new skill, a new bot or a changed routine. It also reviews routines for waste, because a bot that wakes every 10 minutes burns usage. One livestream speaker runs routines only once or twice a day, finding more frequent ones noisy.

### A prompt to copy

> You are my chief of staff. Hand each request to the bot whose one job fits it, or ask the bot-making bot to create one if none does. Tell every bot that our shared document is the source of truth and that they must keep it updated. On a regular schedule (the sources give no cadence), read the bots' transcripts and routines, and tell me which bot keeps repeating a mistake and which routine wakes up more often than it needs to.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| You open every bot's thread to keep up | There is no front door | Route requests through one chief of staff |
| Two bots give different answers about the same fact | Each keeps its own version | Point both at the shared document |
| A bot stalls on a page it can't open | Its connection to the document is broken | Check access before relying on it |
| A bot keeps making the same mistake | Nobody checks the fleet | Add a scheduled checkup |

With one front door, single-job bots, a group chat per project and one shared document, a fleet behaves like a small team working from one set of notes, and the checkup keeps it that way as it grows.

## Related pages

- [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]] covers coordinator agents for coding work.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers what to do with a mistake the checkup finds.
- [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]] covers the codebase as memory for engineering bots.

## Sources

- [Lauren](https://www.youtube.com/watch?v=xZ5TEaleUdg) with another presenter, video tour of their bots (uploaded 2026-09-27, auto-captions). Her chief of staff and engineering lead bots, the food names, the fleet checkup; and the other presenter's group chat for three bots with different roles, such as product and design. Paraphrased.
- Grok Bot Galaxy livestream, days 2 and 3 (2026-09-16 to 2026-09-17, caption transcripts and visual notes; speaker labels unreliable). The chief of staff as orchestrator, bots creating bots, one job per bot, group chats per initiative, the shared document as the source of truth, the stalled page, routine frequency. Paraphrased, one short quote.

## Open questions

How should a fleet handle two bots updating the same part of the shared document at once? The sources don't say.

When should a request skip the chief of staff and go straight to a bot? One speaker still opens each bot's thread, and the sources give no rule.

How often should the fleet checkup run? The video gives no cadence.
