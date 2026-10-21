---
title: "Handle a bug report: reproduce first"
type: technique
section: "Working with Agents"
status: seed
description: "Take a vague bug report to a verified fix by triaging it at intake, having the agent reproduce it before touching code, fixing only what reproduced, and proving the fix with before-and-after screenshots."
created: 2026-10-19
updated: 2026-10-19
effort: an hour
needs: a bot
cost_note: no
aliases:
  - "Reproduce First"
tags:
  - agents
  - debugging
  - bug-reports
---

# Handle a bug report: reproduce first

Most bug reports are vague, and a fix written before anyone has seen the bug is a guess. Reproducing it first turns the report into something concrete, shows that the agent understood the problem, and gives you a before-and-after to check without running the app yourself.

**Scope.** This follows [Lauren](https://x.com/poteto/status/2094457600259842065)'s routine of having agents try to reproduce every user report, together with the triage and reproduction bots shown at a 2026-10-15 workshop and on the third day of the Grok Bot Galaxy livestream. It fits apps an agent can run and drive on its own computer.

<div class="callout">

<b>At a glance</b>

1. Triage every report as it arrives and merge duplicates into one issue.
2. Have the agent restate the problem and reproduce it before it touches code.
3. Fix only what reproduced, after checking whether the main branch already fixed it.
4. Prove the fix with screenshots of the bug and the fix, edge cases included.
5. Turn each correction you make along the way into a skill.

</div>

<figure>
<svg viewBox="0 0 480 563" width="100%" style="max-width:480px" role="img" aria-labelledby="bg-path-t">
<title id="bg-path-t">The bug path, top to bottom. A report arrives from Slack or game feedback. Triage at intake merges duplicates into one issue, so 20 reports become 1 issue. Beside it, a dashed box: a second bot was instructed to check the triage and the understanding before full autopilot. The agent restates the problem and, if you worked on that area recently, recalls that work, then reproduces the bug locally on its own computer. A dashed loop on that step says each steer becomes a skill: work locally, use the prepared cloud environment. Then three branches. Already fixed on the main branch: ship a new build. Reproduces: file it in the tracker, then fix it, then prove the fix with screenshots of the bug and the fix, light and dark mode, and a very long name the engineer steered the bot onto. Does not reproduce: a dashed branch to a question mark, because no source covers this.</title>
<rect x="40" y="8" width="300" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="50" y="28" style="font-weight:600">Report arrives</text><text x="50" y="45">Slack, game feedback</text></g>
<rect x="40" y="84" width="300" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="50" y="104" style="font-weight:600">Triage at intake</text><text x="50" y="121">Merge duplicates into one issue:</text><text x="50" y="138">20 reports, 1 issue</text></g>
<path d="M190.0,58 L190.0,82" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="190.0,82.0 185.0,73.0 195.0,73.0" style="fill:var(--mut,#666)"/>
<rect x="40" y="177" width="300" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="50" y="197" style="font-weight:600">Restate the problem</text><text x="50" y="214">If you worked on that area</text><text x="50" y="231">recently, recall that work</text></g>
<path d="M190.0,151 L190.0,175" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="190.0,175.0 185.0,166.0 195.0,166.0" style="fill:var(--mut,#666)"/>
<rect x="40" y="270" width="300" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="50" y="290" style="font-weight:600">Reproduce locally</text><text x="50" y="307">on the agent's own computer</text></g>
<path d="M190.0,244 L190.0,268" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="190.0,268.0 185.0,259.0 195.0,259.0" style="fill:var(--mut,#666)"/>
<rect x="354" y="76" width="124" height="118" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="364" y="96" style="font-weight:600">Instructed:</text><text x="364" y="113">check the triage</text><text x="364" y="130">and the</text><text x="364" y="147">understanding</text><text x="364" y="164">before full</text><text x="364" y="181">autopilot</text></g>
<path d="M340,117.5 L353,117.5" style="stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<path d="M340,282 L352,282 L352,308" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<path d="M352,308 L341,308" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="341.0,308.0 350.0,303.0 350.0,313.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="360" y="274">Each steer</text><text x="360" y="289">becomes a skill:</text><text x="360" y="304">work locally, use</text><text x="360" y="319">the prepared</text><text x="360" y="334">cloud environment</text></g>
<rect x="10" y="376" width="150" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="85.0" y="396" style="font-weight:600">Already fixed on</text><text x="85.0" y="413" style="font-weight:600">the main branch</text><text x="85.0" y="430">Ship a new build</text></g>
<path d="M85.0,356 L85.0,374" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="85.0,374.0 80.0,365.0 90.0,365.0" style="fill:var(--mut,#666)"/>
<rect x="165" y="376" width="150" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="240.0" y="396" style="font-weight:600">Reproduces</text><text x="240.0" y="413">File it in the</text><text x="240.0" y="430">tracker, then fix it</text></g>
<path d="M240.0,356 L240.0,374" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="240.0,374.0 235.0,365.0 245.0,365.0" style="fill:var(--mut,#666)"/>
<rect x="320" y="376" width="150" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="395.0" y="396" style="font-weight:600">Does not reproduce</text><text x="395.0" y="413">?</text><text x="395.0" y="430">No source covers this</text></g>
<path d="M395.0,356 L395.0,374" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="395.0,374.0 390.0,365.0 400.0,365.0" style="fill:var(--mut,#666)"/>
<path d="M190.0,320 L190.0,356 M85.0,356 L260.0,356" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M260.0,356 L395.0,356" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<rect x="80" y="471" width="320" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="240.0" y="491" style="font-weight:600">Prove the fix</text><text x="240.0" y="508">Screenshots of the bug and the fix,</text><text x="240.0" y="525">light and dark mode, and a very long</text><text x="240.0" y="542">name the engineer steered the bot onto</text></g>
<path d="M240,443 L240,469" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="240.0,469.0 235.0,460.0 245.0,460.0" style="fill:var(--mut,#666)"/>
</svg>
<figcaption>The bug path, from report to a fix with its proof.</figcaption>
</figure>


## Why it works

The reason given on the livestream, said about letting bots fix bugs, is that "only if they can actually reproduce the bug can we trust that the agent understands" the problem. This page takes that to mean the fix waits until the bug is in front of the agent. Reproducing also catches reports that need no fix at all, such as a bug that was already fixed on the main branch and only needs a new release.

## The method

1. **Triage at intake.** Have a bot read every report before a person does. Two setups show what that bot can do:
   1. At the 2026-10-15 workshop, the bot merged duplicates into an existing issue, so 20 reports of one bug became one issue, and the tracker stayed the record.
   2. On the livestream's third day, the new bot was called a triage bot in speech, though its on-screen label read playtester. It went through the game's feedback and found top-priority blank screens. It was told to reproduce each bug and file it in Notion only once the bug was confirmed. A second bot was told to check that the triage was done correctly and that the feedback was understood, before the bots moved to fixing on full autopilot. That check was given as an instruction, and the stream did not show it running.
2. **Restate the report and bring the history.** Ask the agent to say in plain words what it thinks the underlying problem is, so you catch a red herring before any code is written. If you worked on that area recently, follow [Lauren](https://x.com/poteto/status/2097732320606507506)'s habit of letting the agent recall that work before it reads the new report.
3. **Reproduce before fixing, in the right place.** The agent tries to reproduce the bug on its own computer, and you file a ticket only once the bug is confirmed. In one demo, a reproduction bot first tried a public demo site, so the speaker told it to do everything locally and save that as a skill. A second skill then pointed it at the existing cloud environment, where dependencies and secrets were already set up.
4. **Fix only what reproduced, and check the main branch first.** [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1675)'s reproduction agent once reported that a bug reproduced but was already fixed on the main branch, so the team only had to ship a new build. When the bug clearly reproduces and is still there, the agent puts up the fix.
5. **Prove the fix with screenshots and edge cases.** In a real bug thread, a reproduction bot posted screenshots of the bug and of the fix. When a designer raised a very long name as an edge case, the engineer steered the bot onto it, and a case involving the Cmd key was checked too. The bot covered light and dark mode as well. A slide from the same talk asked for a failing test and a video when you hand a small bug to a cloud agent.
6. **Turn each steer into a skill, then share the bot.** The two corrections in step 3, working locally and using the cloud environment, each became a skill, so the next report starts where the last one ended. Once the bot worked, the speaker shared it so the whole team could use it across eight code repositories.

### A prompt to copy

> When a bug report arrives, check whether it duplicates an open issue and merge it if it does. Restate the underlying problem in plain words. Then reproduce it locally on your own computer, using the app the way the reporter did. If it is already fixed on the main branch, tell me, since it may only need a new build. If it reproduces, file it with the steps and a screenshot, fix it, and show me screenshots of the bug and the fix, including light and dark mode and any edge case you can think of.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| The agent proposes a fix without having seen the bug | It is guessing | Ask it to reproduce the bug first |
| The agent reproduces on a public site, or slowly | It is in the wrong environment | Add a skill to work locally in the prepared environment |
| One bug shows up as many tickets | Nothing merges duplicates at intake | Add a triage step before anyone picks it up |

A vague report now ends as a confirmed bug with a fix you can check in a minute, and the bot gets better at the next one.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the skill that lets an agent run the app and record proof.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers when to let a reproduction bot fix and merge on its own.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the restatement and the brief.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers where a repeated correction belongs.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). Bots that listen to every report and try to reproduce it with a cloud agent, and auto-fixing once the verification skill is good enough. Paraphrased.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Restating a bug thread to catch a red herring, recalling earlier work before reading a new report. Paraphrased.
- [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1675), talk on trusting agents (2026-08-12, auto-captions). The reproduction agent that found a bug already fixed on the main branch. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107510472601985336), X post on the first and last mile (2026-10-06). Put up a fix only when the issue clearly reproduces. Paraphrased.
- Workshop on shipping code with bots and cloud agents (2026-10-15, video, via a research summary of the captions and frames). Triage first and merging duplicates, the reproduction bot and its screenshots, the long-name edge case, light and dark mode, the local and cloud-environment skills, sharing across eight repositories, the failing-test-and-video slide. Paraphrased.
- Grok Bot Galaxy livestream, day 3 (2026-09-17, caption transcript; speaker labels unreliable). The triage bot on game feedback, filing in Notion only once a bug is confirmed, reproduce first as the reason to trust a fix, the instruction for a second bot to check the triage. Paraphrased.

## Open questions

What should happen to a report the agent cannot reproduce? The livestream only says to file a bug once it is confirmed, and no source covers the rest.

How long should an agent keep trying to reproduce before it gives up? No source says.

Why did the livestream have the triage bot work with a separate playtester bot to reproduce bugs? No reason was given.

Does every fix need a failing test as well as screenshots? One slide asks for both on small bugs, but the demos showed only screenshots.
