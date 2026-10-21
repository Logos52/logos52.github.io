---
title: "Set up a first engineering bot"
type: guide
section: "Working with Agents"
status: seed
description: "Make a bot that does coding work by spawning cloud agents: have your bot-making bot create it with a short spoken brief, give it one job of orchestrating and checking cloud agents, keep its context in one place, and rewrite its description as principles when it fills with narrow rules."
created: 2026-10-20
updated: 2026-10-20
effort: one to two hours
needs: a bot-making bot, a repository and cloud agents
cost_note: no
aliases:
  - "Engineering bot"
tags:
  - agents
  - bots
  - engineering
---

# Set up a first engineering bot

In [Lauren](https://x.com/poteto/status/2094457600259842065)'s setup, an engineering bot doesn't write the code itself. Its job is to hand coding tasks to cloud agents, watch over them and check their work, which keeps the bot free and its context clean. Setting one up takes a short brief spoken to the bot that makes your bots, a check that it understood, a place for the engineering context to live, and a habit of turning its description into principles once it starts collecting narrow rules.

**Scope.** This follows [Lauren](https://x.com/poteto/status/2094457600259842065)'s practice of treating bots as coordinators of cloud agents, together with how speakers at the Grok Bot Galaxy livestream set up engineering bots for a game built live over three days. It fits anyone with a repository, cloud agents and a bot that can create other bots.

<div class="callout">

<b>At a glance</b>

1. Decide which bot you will talk to, and have it or your bot-making bot create the engineering bot.
2. Give it one job: spawn cloud agents, supervise them and check their work.
3. Ask it to restate the brief in its own words before it starts.
4. Give it the context it needs, and somewhere to keep the engineering context.
5. Add a reviewer when pull requests get too big to read.
6. When its description fills with narrow rules, rewrite it as principles.

</div>

<figure>
<svg viewBox="0 0 520 664" width="100%" style="max-width:520px" role="img" aria-labelledby="eb-setup-t">
<title id="eb-setup-t">The engineering bot setup. You talk to the chief of staff. The chief of staff opened a 2,000-line pull request by mistake, which prompted a planned reviewer bot, shown as a dashed arrow to a reviewer bot, planned, alongside the engineering bot. A short spoken brief goes to the bot-making bot: one job, orchestrate those agents, supervise them and check their work, and durable enough for serious engineering work later. A speech bubble says restate this in your own words before you start working. You can ask the bot-making bot directly, or have your chief of staff ask it. It produces the engineering bot, which doesn't write the code itself. A dashed link joins it to a cloud project that keeps track of the engineering context, and the speaker wasn't sure it would stick. The engineering bot fans out to cloud agents, and each cloud agent gets its own machine. At the bottom, its description, full of narrow rules, is rewritten as principles, with one job: own engineering outcomes.</title>
<rect x="10" y="10" width="50" height="33" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="30" style="font-weight:600">You</text></g>
<rect x="80" y="10" width="150" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="90" y="30" style="font-weight:600">Chief of staff</text><text x="90" y="47">The bot you talk to</text></g>
<path d="M60,26.5 L79,26.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="79.0,26.5 70.0,31.5 70.0,21.5" style="fill:var(--mut,#666)"/>
<rect x="370" y="10" width="140" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="380" y="30" style="font-weight:600">Reviewer bot</text><text x="380" y="47">Planned, alongside</text><text x="380" y="64">the engineering bot</text></g>
<path d="M230,35.0 L369,35.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="369.0,35.0 360.0,40.0 360.0,30.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="238" y="53">2,000-line pull</text><text x="238" y="67">request, by mistake,</text><text x="238" y="81">which prompted a</text><text x="238" y="95">planned reviewer bot</text></g>
<path d="M140,60 L140,121" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="140.0,121.0 135.0,112.0 145.0,112.0" style="fill:var(--mut,#666)"/>
<rect x="80" y="123" width="250" height="101" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="90" y="143" style="font-weight:600">Short spoken brief</text><text x="90" y="160">One job: orchestrate those agents,</text><text x="90" y="177">supervise them and check their work</text><text x="90" y="194">Durable enough for serious</text><text x="90" y="211">engineering work later</text></g>
<rect x="350" y="133" width="160" height="74" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="360" y="153">Restate this in your</text><text x="360" y="169">own words before</text><text x="360" y="185">you start working</text></g>
<path d="M350,163 L332,169 L350,175" style="fill:var(--paper,transparent);stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M140,224 L140,250" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="140.0,250.0 135.0,241.0 145.0,241.0" style="fill:var(--mut,#666)"/>
<rect x="80" y="252" width="250" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="90" y="272" style="font-weight:600">Bot-making bot</text><text x="90" y="289">Ask it directly, or have your</text><text x="90" y="306">chief of staff ask it</text></g>
<path d="M140,319 L140,345" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="140.0,345.0 135.0,336.0 145.0,336.0" style="fill:var(--mut,#666)"/>
<rect x="80" y="347" width="250" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="90" y="367" style="font-weight:600">Engineering bot</text><text x="90" y="384">Doesn't write the code itself</text></g>
<rect x="350" y="341" width="160" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="360" y="361" style="font-weight:600">Cloud project</text><text x="360" y="378">Keeps track of the</text><text x="360" y="395">engineering context</text></g>
<line x1="330" y1="372.0" x2="350" y2="372.0" style="stroke:var(--mut,#666);stroke-width:1.3;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="350" y="424">The speaker wasn't sure</text><text x="350" y="438">it would stick</text></g>
<path d="M205.0,397 L205.0,448 M65.0,448 L371.0,448" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M65.0,448 L65.0,462" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="65.0,462.0 60.0,453.0 70.0,453.0" style="fill:var(--mut,#666)"/>
<rect x="20" y="464" width="90" height="52" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="54.0" y="472" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M65.0,486 L65.0,490 M59.0,490 L71.0,490" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="65.0" y="508">Cloud agent</text></g>
<path d="M167.0,448 L167.0,462" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="167.0,462.0 162.0,453.0 172.0,453.0" style="fill:var(--mut,#666)"/>
<rect x="122" y="464" width="90" height="52" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="156.0" y="472" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M167.0,486 L167.0,490 M161.0,490 L173.0,490" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="167.0" y="508">Cloud agent</text></g>
<path d="M269.0,448 L269.0,462" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="269.0,462.0 264.0,453.0 274.0,453.0" style="fill:var(--mut,#666)"/>
<rect x="224" y="464" width="90" height="52" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="258.0" y="472" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M269.0,486 L269.0,490 M263.0,490 L275.0,490" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="269.0" y="508">Cloud agent</text></g>
<path d="M371.0,448 L371.0,462" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="371.0,462.0 366.0,453.0 376.0,453.0" style="fill:var(--mut,#666)"/>
<rect x="326" y="464" width="90" height="52" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="360.0" y="472" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M371.0,486 L371.0,490 M365.0,490 L377.0,490" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="371.0" y="508">Cloud agent</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="20" y="536">Each cloud agent gets its own machine</text></g>
<rect x="20" y="564" width="200" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="584" style="font-weight:600">Description</text></g>
<line x1="30" y1="596" x2="150" y2="596" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="30" y1="606" x2="170" y2="606" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="30" y1="616" x2="190" y2="616" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="30" y1="626" x2="150" y2="626" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="30" y1="636" x2="170" y2="636" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="30" y="650">Narrow rules</text></g>
<path d="M220,610 L299,610" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="299.0,610.0 290.0,615.0 290.0,605.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="226" y="600">Rewrite as</text></g>
<rect x="300" y="574" width="210" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="310" y="594" style="font-weight:600">Principles</text><text x="310" y="611">One job: own engineering</text><text x="310" y="628">outcomes</text></g>
</svg>
<figcaption>The engineering bot setup. A short spoken brief makes a bot that hands code to cloud agents and checks their work, and its description is rewritten as principles once it fills with narrow rules.</figcaption>
</figure>

## Why it works

[Lauren](https://x.com/poteto/status/2094457600259842065) tells her bot to spawn a cloud agent instead of doing the work itself, because that frees the bot for other things and keeps its context window clean. She thinks of her bots as coordinators who manage and supervise cloud agents, and each cloud agent gets its own machine, so the bot's computer stays free as well. On the livestream, a speaker explained splitting work across bots the same way: each bot owns its own context and becomes a bit of a specialist.

## The method

1. **Start from the bot you talk to.** On the first day of the livestream, one speaker asked their bot-making bot to turn their main bot into a chief of staff and planned to mostly talk to it. The next day a speaker explained that you can ask the bot-making bot directly or have your chief of staff ask it. Which to use depends on which bot holds the context, such as the project's credentials and what is being built.
2. **Give it one job in a short spoken brief.** The example brief a speaker gave on day 2 said the engineering bot will use pstack to spawn cloud agents to work on the game, and that its job is to orchestrate those agents, supervise them and check their work. It named the first phase, quick prototypes, and asked the bot-making bot not to make the engineer too focused on prototypes but durable enough for serious engineering work later.
3. **Ask for a restatement.** A speaker's favourite pattern is to end the brief with "Restate this in your own words before you start working", so you can confirm the bot understood a big blob of dictated text.
4. **Give it context and a home for it.** On day 1, a speaker told the engineering bot to spin up a cloud project, a kind of cloud agent suited to long work, to keep track of the application's engineering context, and to send more messages to that project whenever it needed engineering work done. The speaker wasn't sure it would stick with the project.
5. **Add a reviewer when you stop reading.** When the chief of staff bot opened a 2,000-line pull request by mistake, the speaker said they would not read all of it and planned a reviewer bot alongside the engineering bot.
6. **Rewrite the description as principles.** One speaker finds that agents tend to put all the details of a session into a rule or skill written right after a problem, which makes it less reusable. On day 2, when an engineering bot's description had become too specific, the speaker asked the bot-making bot to reread pstack's main skill and write principles to follow instead. The new description opened with one job: own engineering outcomes by orchestrating work through pstack and cloud agents, supervising and verifying. Asked for a view, another speaker said it looked good and was "better than what it was before, so we can iterate", though parts were "a little bit AI slop".

### A prompt to copy

> Create an engineering bot for me. Its job is to spawn cloud agents to work on <project>, orchestrate them, supervise them and check their work, not to write the code itself. For now we are <first phase>, but make it durable enough for serious engineering work later. Restate this in your own words before you start working.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| The bot writes code itself and stays busy | Its own context and computer are tied up | Tell it to spawn a cloud agent instead |
| It only handles the first phase well | Its brief was too narrow | Ask for a description durable enough for later work |
| A pull request is too big to read | No one reviews for you | Add a reviewer bot |
| Its description reads like a list of past incidents | Rules were written from single sessions | Rewrite it as principles |

An engineering bot set up this way stays a manager: it hands work to cloud agents, checks what comes back, and keeps a short description you can trust as the work grows.

## Related pages

- [[wiki/Working with Agents/Scope a bot like a job description|Scope a bot like a job description]] covers writing one job and standing rules for any bot.
- [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]] covers how the bot's cloud agents scale.
- [[wiki/Working with Agents/Organize a fleet of bots|Organize a fleet of bots]] covers the chief of staff and the rest of the fleet.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers how the cloud agents check their work.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). Telling the bot to spawn a cloud agent instead of doing the work, and bots as coordinators. Paraphrased.
- Grok Bot Galaxy livestream, days 1 and 2 (2026-09-15 and 2026-09-16, caption transcripts; speaker labels unreliable). The chief of staff, the spoken engineering brief, the restatement, the cloud project, the 2,000-line pull request, and rewriting the description as principles. Paraphrased, three short quotes.

## Open questions

What did the full engineering brief say? Only the spoken version is in the sources; the text was not shown on screen.

Did the cloud project hold the engineering context well enough to keep? The speaker wasn't sure, and the sources don't say what happened.

How was the reviewer bot set up, and what did it check? The plan to add one is all the sources give.
