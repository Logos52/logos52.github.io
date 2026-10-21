---
title: "Scope a bot like a job description"
type: guide
section: "Working with Agents"
status: seed
description: "Give each bot one job and write its description the way you would write a job description for a new teammate: its lane, its standing rules, and the materials and access it needs to be an expert. Keep the description at the level of principles."
created: 2026-10-20
updated: 2026-10-20
effort: one to two hours per bot
needs: a bot with an editable description
cost_note: no
aliases:
  - "Giving an Agent One Job and Standing Rules"
tags:
  - agents
  - bots
---

# Scope a bot like a job description

A bot works best with one job, written down the way you would describe a role for a new teammate. The description says what the bot owns and what it doesn't, holds the standing rules it follows every time, and points to the materials and access it needs to be good at that job. Written well, the description stays short and general, so it keeps working as the bot takes on new tasks within its lane.

**Scope.** This draws on how speakers at the Grok Bot Galaxy livestream scoped their bots over three days, for slides, marketing, sales, customers and engineering. It applies to any bot whose description you can edit.

<div class="callout">

<b>At a glance</b>

1. List the work you need done, then group it into domains.
2. Give each bot one job and write its lane like a job description.
3. Put the rules it should follow every time into its description.
4. Give it the materials and access to be an expert at that job.
5. Let it widen its scope once you trust it.
6. Keep the description at the level of principles.

</div>

<figure>
<svg viewBox="0 0 520 510" width="100%" style="max-width:520px" role="img" aria-labelledby="sc-card-t">
<title id="sc-card-t">A bot's job description card, for a new teammate. One job: have one bot with one job. Lane: what it owns, in the middle, with leaves to other bots on each side, and arrows outward labelled let the scope grow with trust. Standing rules it follows every time: a particular font with particular colors, and a screenshot of each slide once it is done. Materials and access: relevant information and materials, and connected to your Slack and email. Below the card, details from one task are crossed out, with an arrow to principles: keep the description at the level of principles.</title>
<rect x="10" y="10" width="500" height="368" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="start"><text x="30" y="34" style="font-weight:600">Job description</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="end"><text x="490" y="34">For a new teammate</text></g>
<line x1="26" y1="46" x2="494" y2="46" style="stroke:var(--rule2,#999);stroke-width:1"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="66" style="font-weight:600">One job</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="86">Have one bot with one job</text></g>
<line x1="26" y1="100" x2="494" y2="100" style="stroke:var(--rule2,#999);stroke-width:1"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="120" style="font-weight:600">Lane</text></g>
<rect x="30" y="132" width="130" height="40" rx="4" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:4 3"/><g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="95" y="150">Leaves to</text><text x="95" y="164">other bots</text></g>
<rect x="170" y="132" width="180" height="40" rx="4" style="fill:none;stroke:var(--accent,#2a6);stroke-width:2"/><g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="260" y="157" style="font-weight:600">What it owns</text></g>
<rect x="360" y="132" width="130" height="40" rx="4" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:4 3"/><g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="425" y="150">Leaves to</text><text x="425" y="164">other bots</text></g>
<path d="M230,188 L152,188" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="152.0,188.0 161.0,183.0 161.0,193.0" style="fill:var(--mut,#666)"/>
<path d="M290,188 L368,188" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="368.0,188.0 359.0,193.0 359.0,183.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="260" y="208">Let the scope grow with trust</text></g>
<line x1="26" y1="220" x2="494" y2="220" style="stroke:var(--rule2,#999);stroke-width:1"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="240" style="font-weight:600">Standing rules</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="150" y="240">Follows every time</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="40" y="262">• A particular font with particular colors</text><text x="40" y="280">• A screenshot of each slide once it is done</text></g>
<line x1="26" y1="292" x2="494" y2="292" style="stroke:var(--rule2,#999);stroke-width:1"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="312" style="font-weight:600">Materials and access</text></g>
<path d="M36,324 L48,324 L52,328 L52,344 L36,344 Z" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="60" y="340">Relevant information and materials</text></g>
<rect x="36" y="354" width="16" height="12" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M36,354 L44,361 L52,354" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="60" y="365">Connected to your Slack and email</text></g>
<rect x="10" y="406" width="230" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="426" style="font-weight:600">Details from one task</text></g>
<line x1="20" y1="442" x2="200" y2="442" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="20" y1="454" x2="170" y2="454" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="20" y1="466" x2="200" y2="466" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<line x1="20" y1="478" x2="170" y2="478" style="stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M18,436 L232,494 M232,436 L18,494" style="stroke:var(--ink,currentColor);stroke-width:1.5"/>
<path d="M240,454 L279,454" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="279.0,454.0 270.0,459.0 270.0,449.0" style="fill:var(--mut,#666)"/>
<rect x="280" y="424" width="230" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="290" y="444" style="font-weight:600">Principles</text><text x="290" y="461">Keep the description at the</text><text x="290" y="478">level of principles</text></g>
</svg>
<figcaption>A bot's job description. One job, a lane, the rules it follows every time and the materials it needs, kept at the level of principles.</figcaption>
</figure>

## Why it works

A bot's description works almost like a system prompt, which some people call the bot's soul, and it affects how the bot works. One speaker described scoping as identifying a new teammate you need help from, and said tight scoping keeps each bot specialized enough to get its piece of work done. That, the speaker said, is how you get the most efficiency out of a team of bots. Another speaker gives a bot very explicit instructions because that makes it more consistent.

## The method

1. **Inventory the work first.** Asked how to set up roles for bots, one speaker said to start by listing everything you need done, so that you can group it. That speaker groups bots by domain, such as finance, dealing with customers or marketing.
2. **Give each bot one job, written like a job description.** Know the swim lanes, roles and responsibilities, and scope the bot tightly enough that it can specialize. Another speaker put it as "have one bot with one job", whether a chief of staff delegates to them or you talk to each bot yourself. In one demo, the description the bot-making bot wrote also specified one job, so that the bot wouldn't try to do everything.
3. **Write standing rules into the description.** One presenter's slide bot has very explicit instructions in its description on how to edit an existing deck: use a particular font with particular colors, and send back a screenshot of each slide once it is done. Because the bot already has that predefined set of things to do, going back and forth with it is easier. A description can also set the voice the bot uses with you.
4. **Give it what an expert needs.** Treat bots as team members you are onboarding: make them an expert in their field and give them all the relevant information and materials to be great at that job. Trust starts with access, such as connecting the bot to your Slack and email. You can then ask it to study that context and tell you what job it can take off your plate.
5. **Let the scope grow with trust.** One speaker's bots start with a specific domain and expand their scope as that speaker brings them questions outside it.
6. **Keep the description at the level of principles.** Looking at a description that had become too specific, one speaker noted that a rule or skill written right after one problem tends to absorb that session's details, which makes it less reusable. [[wiki/Working with Agents/Set up a first engineering bot|Set up a first engineering bot]] shows one being rewritten as principles.

### A prompt to copy

> Create a bot whose one job is <job>. Write its description like a job description for a new teammate: what it owns, what it leaves to other bots, the rules it follows every time (<rules>), and the materials and access it needs to be an expert. Keep the description to principles, not details from one task.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| A bot tries to do everything | It has no single job | Split the work and give each bot one job |
| Its output varies from run to run | Its standing rules aren't in the description | Write explicit rules into the description |
| It can't do its job well | It lacks materials or access | Give it what an expert in that role would need |
| Its description reads like notes from one session | It has become too specific | Rewrite it as principles |

Scoped this way, each bot holds one job, with its own rules and materials, and a short description you can keep editing as the work changes.

## Related pages

- [[wiki/Working with Agents/Set up a first engineering bot|Set up a first engineering bot]] applies this to a bot that runs cloud agents.
- [[wiki/Working with Agents/Organize a fleet of bots|Organize a fleet of bots]] covers how single-job bots work together.

## Sources

- Grok Bot Galaxy livestream, days 1 to 3 (2026-09-15 to 2026-09-17, caption transcripts; speaker labels unreliable). Grouping by domain, one bot with one job, the slide bot's rules, the description as a system prompt, onboarding bots as experts, scoping like a job description, and expanding scope with trust. Paraphrased, one short quote.

## Open questions

Should a bot cover one client or all of them? Speakers called this preference, and the sources give no rule.

What should a description leave out? The sources say what goes in, not what to exclude.

How long should a description be? No length is given.
