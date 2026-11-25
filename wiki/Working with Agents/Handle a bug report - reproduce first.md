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
wedge_reviewed: true
---

# Handle a bug report: reproduce first

Most bug reports are vague, and any fix made before someone has seen the bug is only a guess. Reproducing it first turns the report into something concrete, shows that the agent understood the problem, and gives you a before-and-after to check without running the app yourself.

<div class="callout">

<b>At a glance</b>

Reproducing first turns a vague report into a confirmed bug, and gives you a before-and-after you can check without running the app yourself.

</div>

<figure>
<svg viewBox="0 0 300 346" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="bg-outcomes-t">
<title id="bg-outcomes-t">Fix only what reproduced, and check the main branch first</title>
<rect x="0.5" y="0.5" width="299" height="345" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Fix only what reproduced, and</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">check the main branch first</text>
<line x1="20" y1="80" x2="280" y2="80" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="79" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="108" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">already fixed on the main</text>
<text x="20" y="130" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">branch</text>
<text x="20" y="152" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">only needs a new release</text>
<line x1="20" y1="166" x2="280" y2="166" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="194" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">the bug clearly reproduces and</text>
<text x="20" y="216" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">is still there</text>
<text x="20" y="238" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the agent puts up the fix</text>
<line x1="20" y1="252" x2="280" y2="252" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="280" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">a report the agent cannot</text>
<text x="20" y="302" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">reproduce</text>
<text x="20" y="324" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">no source covers the rest</text>
</svg>
</figure>

## Why it works

The reason given on the livestream, said about letting bots fix bugs, is that a fix is trustworthy only once the agent has actually reproduced the bug and shown it understands the problem. Read plainly, that means the fix waits until the bug is in front of the agent. Reproducing also catches reports that need no fix at all, such as a bug that was already fixed on the main branch and only needs a new release.

## The method

1. **Triage at intake.** Have a bot read every report before a person does. Two setups show what that bot can do:
   1. At the 2026-10-15 workshop, the bot merged duplicates into an existing issue, so 20 reports of one bug became one issue, and the tracker stayed the record.
   2. On the livestream's third day, the new bot was called a triage bot in speech, though its on-screen label read playtester. It went through the game's feedback and found top-priority blank screens. It was told to reproduce each bug and file it in Notion only once the bug was confirmed. A second bot was told to review the triage and confirm the feedback had been understood, before the bots moved to fixing on full autopilot. That check was given as an instruction, and the stream did not show it running.
2. **Restate the report and bring the history.** Ask the agent to say in plain words what it thinks the underlying problem is, so you catch a red herring before any code is written. If you worked on that area recently, follow one engineer's habit of letting the agent recall that work before it reads the new report ([guide](https://x.com/poteto/status/2097732320606507506)).
3. **Reproduce before fixing, in the right place.** The agent tries to reproduce the bug on its own computer, and you file a ticket only once the bug is confirmed. In one demo, a reproduction bot first tried a public demo site, so the speaker told it to do everything locally and save that as a skill. A second skill then pointed it at the existing cloud environment, where dependencies and secrets were already set up.
4. **Fix only what reproduced, and check the main branch first.** In a [talk on trusting agents](https://youtu.be/Zc07HI9Ppxk?t=1675), a reproduction agent once reported a bug that reproduced even though the main branch already had a fix for it. That meant the team only had to ship a new build. When the bug clearly reproduces and is still there, the agent puts up the fix.
5. **Prove the fix with screenshots and edge cases.** In a real bug thread, a reproduction bot posted screenshots of the bug and of the fix. When a designer raised a very long name as an edge case, the engineer steered the bot onto it, and a case involving the Cmd key was checked too. The bot covered light and dark mode as well. A slide from the same talk asked for a failing test and a video when you hand a small bug to a cloud agent.
6. **Turn each steer into a skill, then share the bot.** The two corrections in the third step, working locally and using the cloud environment, each became a skill, so the next report picks up from where the last one left off. Once the bot worked, the speaker shared it so the whole team could use it across eight code repositories.

### A prompt to copy

> When a bug report arrives, check whether it duplicates an open issue and merge it if it does. Restate the underlying problem in plain words. Then reproduce it locally on your own computer, using the app the way the reporter did. If it is already fixed on the main branch, tell me, since it may only need a new build. If it reproduces, file it with the steps and a screenshot, fix it, and show me screenshots from before and after the fix, in both light and dark mode, plus any edge case you can think of.

## Signals and failure points

| What you see | Meaning | Next step |
|---|---|---|
| The agent proposes a fix without having seen the bug | It is guessing | Ask it to reproduce the bug first |
| The agent reproduces on a public site, or slowly | It is in the wrong environment | Add a skill to work locally in the prepared environment |
| One bug shows up as many tickets | Nothing merges duplicates at intake | Add a triage step before anyone picks it up |

A vague report now ends as a confirmed bug with a fix you can check in a minute, and the bot gets better at the next one.

## Open questions

What should happen to a report the agent cannot reproduce? The livestream only says to file a bug once it is confirmed, and no source covers the rest.

How long should an agent keep trying to reproduce before it gives up? No source says.

Why did the livestream have the triage bot work with a separate playtester bot to reproduce bugs? No reason was given.

Does every fix need a failing test as well as screenshots? One slide asks for both on small bugs, but the demos showed only screenshots.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] explains how an agent gets a skill to run the app and record proof.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] explains when a reproduction bot can fix and merge on its own.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the restatement and the brief.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] explains where a correction that keeps repeating should live.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). Bots that listen to every report and try to reproduce it with a cloud agent, and auto-fixing once the verification skill is good enough. Paraphrased.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Restating a bug thread to catch a red herring, recalling earlier work before reading a new report. Paraphrased.
- [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1675), talk on trusting agents (2026-08-12, auto-captions). The reproduction agent that found a bug already fixed on the main branch. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107510472601985336), X post on the first and last mile (2026-10-06). Put up a fix only when the issue clearly reproduces. Paraphrased.
- Workshop on shipping code with bots and cloud agents (2026-10-15, video, via a research summary of the captions and frames). Triage first and merging duplicates, the reproduction bot and its screenshots, the long-name edge case, light and dark mode, the local and cloud-environment skills, sharing across eight repositories, the failing-test-and-video slide. Paraphrased.
- Grok Bot Galaxy livestream, day 3 (2026-09-17, caption transcript, speaker labels unreliable). The triage bot on game feedback, filing in Notion only once a bug is confirmed, reproduce first as the reason to trust a fix, the instruction for a second bot to check the triage. Paraphrased.
