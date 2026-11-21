---
title: "Let an agent check its own work"
type: practice
section: "Working with Agents"
status: seed
description: "Give an agent a way to run the real app, ask for proof that the check ran, and check the checking by sampling, so you stop being the tester."
created: 2026-10-19
updated: 2026-10-19
effort: an hour
needs: a tool
cost_note: no
aliases:
  - "Ask for Proof, Not Promises"
  - "Checking Agent Work"
tags:
  - agents
  - verification
  - proof
wedge_reviewed: true
---

# Let an agent check its own work

Count a task as done only when the agent has run the software and shown you evidence of what happened, and check that evidence by sampling instead of testing every change yourself.

**Scope.** This is [Lauren](https://x.com/poteto/status/2094457600259842065)'s setup (a verification skill, a shared tool and a feature map), which she also used with her own bots in the Galaxy event. The examples are web, Electron and iOS apps, where an agent can run the app and record it.

<div class="callout">

<b>At a glance</b>

- Build a verification skill first, a saved set of instructions that lets the agent run the app.
- Add a shared command-line tool and a feature map.
- Ask for proof that the check ran, such as a video and screenshots for a screen app.
- Sample the results daily, and fix the setup when agents repeat a shortcut.

</div>

<figure>
<svg viewBox="0 0 490 418" width="100%" style="max-width:480px" role="img" aria-labelledby="cw-loop-t">
<title id="cw-loop-t">Count a task as done only when the agent has run the software and shown you evidence of what happened, and check that evidence by sampling instead of testing every change yourself.</title>
<defs><marker id="cw-loop-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="30" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="74">Build the</text><text x="110.0" y="93">verification skill</text></g>
<rect x="270" y="30" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="74">Add a shared command-line</text><text x="370.0" y="93">tool and a feature map</text></g>
<rect x="270" y="166" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="191">Ask for proof that the</text><text x="370.0" y="210">check ran, such as a video</text><text x="370.0" y="229">and screenshots for a</text><text x="370.0" y="248">screen app.</text></g>
<rect x="10" y="166" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="200">You review that proof</text><text x="110.0" y="219">rather than watch</text><text x="110.0" y="238">the agent</text></g>
<rect x="10" y="302" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="346">Sample the</text><text x="110.0" y="365">results daily</text></g>
<rect x="270" y="302" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="336">if several agents</text><text x="370.0" y="355">repeat one shortcut,</text><text x="370.0" y="374">fix the setup</text></g>
<path d="M211,78.0 L268,78.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="268.0,78.0 259.0,83.0 259.0,73.0" style="fill:var(--mut,#666)"/><path d="M370.0,127 L370.0,164" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="370.0,164.0 365.0,155.0 375.0,155.0" style="fill:var(--mut,#666)"/>
<path d="M269,214.0 L212,214.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="212.0,214.0 221.0,209.0 221.0,219.0" style="fill:var(--mut,#666)"/><path d="M110.0,263 L110.0,300" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="110.0,300.0 105.0,291.0 115.0,291.0" style="fill:var(--mut,#666)"/>
<path d="M211,350.0 L268,350.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="268.0,350.0 259.0,355.0 259.0,345.0" style="fill:var(--mut,#666)"/><path d="M370.0,301 L370.0,264" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="370.0,264.0 375.0,273.0 365.0,273.0" style="fill:var(--mut,#666)"/>
<path d="M471,350.0 L478,350.0 L478,8 L110.0,8 L110.0,28" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="110.0,28.0 105.0,19.0 115.0,19.0" style="fill:var(--mut,#666)"/><g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="294.0" y="24">fix the setup</text></g>
</svg>
</figure>

## Why it works

Without a way to run the app, an agent keeps asking you to run it and click around, which is slow. With one, it reaches each feature through the screens as a user would and debugs on its own, so your testing no longer limits how much it can finish. The more a stack resists debugging and control, the harder it is to use agents productively.

## The method

1. **Build the verification skill before the features.** It teaches the agent to start your app and collect evidence that it works. Use your stack's own debugging tools, such as the browser's protocol or the iOS simulator. Treat the skill as critical infrastructure and refresh it daily.
2. **Put one small command-line tool in the skill.** Without a shared tool, each agent rebuilt its own checking scripts, which was slow and inconsistent. Give the tool descriptive error messages that say what to do next, a dry-run option on any command with destructive effects, and output in JSON.
3. **Add a feature map.** The map lists each feature, what it does and how a user reaches it, and it lives inside the skill. With it, an agent can match a vague report to the right screen. Have the agent catalog the app and write the first version.
4. **Ask for proof that the check ran.** For an app with a screen the proof is a video and screenshots. Treat them as the visible record that the code ran and the change works, which a passing test alone does not give. You review that proof rather than watch the agent, and one speaker's review bot checks finished work for missing proof, such as screenshots, and asks the coding agent to add it. For other software, a test does not count until the agent has run the code and seen it work.
5. **Check the checking.** Let low-stakes changes, like a documentation page, run with little review, and ask for a demo or prototype on riskier ones. For changes that matter, a full-autopilot run spawns several verifier agents per pull request that click through the app like a user, and you can tune that down to one because they use many tokens. Then sample the pull requests each day, and if several agents repeat one shortcut, fix the setup rather than the single agent.

<figure>
<svg viewBox="0 0 480 308" width="100%" style="max-width:480px" role="img" aria-labelledby="cw-skill-t">
<title id="cw-skill-t">Add a shared command-line tool and a feature map.</title>
<defs><marker id="cw-skill-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="460" height="288" rx="10" style="fill:none;stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:15px"><text x="26" y="36" style="font-weight:600">a verification skill, a shared tool and a feature map</text></g>
<rect x="26" y="50" width="428" height="132" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="42" y="76" style="font-weight:600">One small command-line tool</text><text x="42" y="104">Descriptive error messages that say what to do next</text><text x="42" y="128">A dry-run option on any command with destructive effects</text><text x="42" y="152">Output in JSON</text></g>
<rect x="26" y="194" width="428" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="42" y="220" style="font-weight:600">A feature map</text><text x="42" y="246">Each feature, what it does and how a user reaches it</text><text x="42" y="270">An agent can match a vague report to the right screen</text></g>
</svg>
</figure>

<figure>
<svg viewBox="0 0 480 306" width="100%" style="max-width:480px" role="img" aria-labelledby="cw-stakes-t">
<title id="cw-stakes-t">Let low-stakes changes, like a documentation page, run with little review, and ask for a demo or prototype on riskier ones. For changes that matter, a full-autopilot run spawns several verifier agents per pull request that click through the app like a user, and you can tune that down to one because they use many tokens.</title>
<defs><marker id="cw-stakes-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="460" height="80" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="36" style="font-weight:600">low-stakes changes</text><text x="26" y="60">like a documentation page,</text><text x="26" y="80">run with little review</text></g>
<rect x="10" y="102" width="460" height="80" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="128" style="font-weight:600">Riskier</text><text x="26" y="152">Ask for a demo</text><text x="26" y="172">or prototype</text></g>
<rect x="10" y="194" width="460" height="100" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="220" style="font-weight:600">Changes that matter</text><text x="26" y="244">A full-autopilot run spawns several verifier agents per</text><text x="26" y="264">pull request that click through the app like a user,</text><text x="26" y="284">You can tune that down to one because they use many tokens.</text></g>
</svg>
</figure>

### A prompt to copy

> Build [the feature and any useful context]. Use the verification skill to check your changes, and show me proof that the check ran. For a screen app, add "a video and screenshots".

## Signals and failure points

| What you see | What it means | What to do |
|---|---|---|
| The agent asks you to run the app and click around | It has no verification skill | Build the skill first |
| A screen app's pull requests arrive with no video or screenshots | The prompt may not have asked for proof | Add the proof line |
| An automated change took the live site down | Verification may not cover everything | Advice: keep sampling and add human review for high-stakes changes |

## Open questions

What proof should you ask for from software with no screen, such as a command-line tool, a library, a backend or a data script, since no source says?

Is a video or screenshots enough on its own, and how does a reviewer judge a video complete, since no source says?

How many verifier agents per pull request are enough, since the only figure is a tuning example of using one instead of 10?

How should the review depth scale with the stakes of a change, since no source gives a rule?

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). The verification skill, the stacks it fits (web, Electron, iOS), the command-line tool and its properties, the feature map, daily upkeep, the proof prompt. Paraphrased.
- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). Why verification came first, the tool inside the skill, the feature map, critical infrastructure. Paraphrased.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Tests alone are not sufficient verification until the code has run. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), [live Q&A](https://www.youtube.com/watch?v=MN9dGgmLyso) (2026-10-02, captions). Why the tool exists, the verifier agents and their cost, daily sampling. Paraphrased.
- Grok Bot Galaxy event, day 1 (2026-09-15), day 3 (2026-09-17), community named transcripts with unreliable speaker labels. Asking for a video, the missing-proof pull requests, how much human review, the outage. Paraphrased.

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the rest of the brief.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers fixing the setup.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Review less without losing control]] covers sampling and hold points.
- [[wiki/Working with Agents/Let an agent check its own work|Handle a bug report - reproduce first]] covers the report-to-fix path.

---

## Handle a bug report: reproduce first

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
<title id="bg-path-t">The bug path, top to bottom. A report arrives from Slack or game feedback. Triage at intake merges duplicates into one issue, so 20 reports become 1 issue. Beside it, a dashed box: A second bot was told to review the triage and confirm the feedback had been understood, before the bots moved to fixing on full autopilot. The agent restates the problem and, if you worked on that area recently, recalls that work, then reproduces the bug locally on its own computer. A dashed loop on that step says each steer becomes a skill: work locally, use the prepared cloud environment. Then three branches. Already fixed on the main branch: ship a new build. Reproduces: file it in the tracker, then fix it, then prove the fix with screenshots of the bug and the fix, light and dark mode, and a very long name the engineer steered the bot onto. Does not reproduce: a dashed branch to a question mark, because no source covers this.</title>
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
<rect x="354" y="76" width="124" height="136" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="364" y="94" style="font-weight:600">told to</text><text x="364" y="109">review the triage</text><text x="364" y="124">and confirm the</text><text x="364" y="139">feedback had been</text><text x="364" y="154">understood, before</text><text x="364" y="169">the bots moved to</text><text x="364" y="184">fixing on full</text><text x="364" y="199">autopilot</text></g>
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

The reason given on the livestream, said about letting bots fix bugs, is that a fix is trustworthy only once the agent has actually reproduced the bug and shown it understands the problem. This page takes that to mean the fix waits until the bug is in front of the agent. Reproducing also catches reports that need no fix at all, such as a bug that was already fixed on the main branch and only needs a new release.

## The method

1. **Triage at intake.** Have a bot read every report before a person does. Two setups show what that bot can do:
   1. At the 2026-10-15 workshop, the bot merged duplicates into an existing issue, so 20 reports of one bug became one issue, and the tracker stayed the record.
   2. On the livestream's third day, the new bot was called a triage bot in speech, though its on-screen label read playtester. It went through the game's feedback and found top-priority blank screens. It was told to reproduce each bug and file it in Notion only once the bug was confirmed. A second bot was told to review the triage and confirm the feedback had been understood, before the bots moved to fixing on full autopilot. That check was given as an instruction, and the stream did not show it running.
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
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Trust agents more over time]] covers when to let a reproduction bot fix and merge on its own.
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

---

## The Same Model Twice

# The Same Model Twice

A model's label hides three variables that decide its output quality: precision, task type, and finish. A comparison between two models that has not fixed all three tells you nothing. We learned this by spending ten evaluation rounds looking for "a stronger model". The stronger model was the same model, quantized to a quarter of its precision, doing a harder job.

## Core takeaways

- Two checkpoints with the same parameter count can differ in precision, task type, and finish. Each of the three changes output quality on its own.
- Quantization compresses the model's weights. Text models lose little at 4-bit. Voice models get audibly rougher, and the damage lands in texture and stability.
- A model producing its own trained-in voices does a solved task. The same model cloning a stranger's voice from a short clip works from far less information, and at equal size the preset voice wins almost by construction.
- "Base" in a model name means the un-tuned checkpoint meant to be built on. The variant suffix tells you which task the checkpoint was finished for.
- Before comparing two local models, record three lines for each: exact checkpoint ID, quantization level, and variant. Ten rounds of evaluation gave us less information than one `cat config.json`.
- Full precision costs about double the disk and memory of 4-bit. For final-quality audio, buy precision. For bulk text, buy parameters.

## What happened

We generate character voices locally for an audio project. The original voices came from a TTS model we called "the old model". A newer download, which we called "the stronger model", kept producing voices that were less clear, less stable, and similar to one another. We ran ten rounds of bake-offs on it: new seeds, blends, reference engineering, style instructions. The new model never delivered the quality we wanted. In every blind A/B against the old model's output, the old model won or tied.

Then we read the two checkpoints off the disk instead of relying on what we assumed about them:

- "Old model": `Qwen3-TTS-12Hz-1.7B-VoiceDesign-bf16`. 1.7B parameters, full bf16 precision, 4.2 GB.
- "New model": `Qwen3-TTS-12Hz-1.7B-Base-4bit`. **The same 1.7B parameters**, 4-bit quantized, 2.2 GB.

Same architecture, same size, same family. The "upgrade" was a drop in precision under a different variant name. The variant name mattered as well. VoiceDesign generates voices it was trained to finish. Base clones arbitrary voices from about 60 seconds of reference audio, which is a harder task done with much less information. We had stacked two downgrades, called the stack "stronger", and then spent two days puzzled that it underperformed.

## Precision

Quantization is a compression of the model's weights. Text models lose little at 4-bit. Voice models get audibly rougher, and the damage lands hardest in texture and stability, which are the qualities a voice is judged on. The sign is one block in the checkpoint's `config.json`: a `quantization` entry, `bits: 4` in ours. Checking it takes ten seconds. Nobody checked it for two days.

## Task type

A model generating its own trained-in voices is doing a solved task. Those voices are finished products, polished end to end. The same model cloning a stranger's voice from a short clip is working from far less information. At equal size, a preset voice beats a cloned voice almost by construction. "The cloning model sounds worse" is the expected result. We read it as a defect.

## Finish

"Base" in a model name means the un-tuned checkpoint meant to be built on. The variant suffix carries real information. The family we were using ships as Base (cloning), VoiceDesign (designed voices), and CustomVoice. CustomVoice is a third variant, plausibly purpose-built for the exact original-voice task we were hand-rolling on Base. We never noticed it for two days because we never listed the family.

## How to pin the three variables

Before comparing any two local models, record three lines per model: **exact checkpoint ID, quantization level, variant/task type.** On disk that is `ls ~/.cache/huggingface/hub` plus the `quantization` block in each `config.json`. If a comparison is already running and one side disappoints, check its quantization before abandoning it. The bf16 or 8-bit sibling of a 4-bit checkpoint usually exists, and it usually explains the gap. Read the whole variant family before building workarounds. The tool you are improvising may already ship as a variant.

## What full precision costs

Full precision costs roughly double the disk and memory of 4-bit (4.2 GB against 2.2 GB here) and generates more slowly. For text LLMs at long context, that trade often favors quantization: more parameters at less precision can win. The rule depends on the domain. For final-quality audio, buy precision. For bulk text, buy parameters.

## When pinning is not worth it

Most of the time the defaults are fine, and ceremony around every download is its own waste. The discipline pays at the moment you are about to compare. When two models' outputs will be judged against each other, their labels must be fully expanded, because that is when a hidden variable turns directly into wasted rounds.

## What the case shows

The model that "underperformed" was never weaker. It was the same model with two handicaps we had added ourselves: lower precision and a harder task. Ten rounds of evaluation produced less insight than one `cat config.json`. Quality differences between models are explained by precision, task, and finish before they are explained by capability, and the label states none of the three. Expand the label before you compare.

## How to practice this

1. Before comparing two local models, write three lines for each: exact checkpoint ID, quantization level, and variant. Run `ls ~/.cache/huggingface/hub` to get the checkpoint IDs. Notice whether the two models share the same parameter count.
2. Open each checkpoint's `config.json` and look for a `quantization` block. Notice whether one side reads `bits: 4` while the other is full precision.
3. If one side of a running comparison disappoints, check its quantization before you abandon it. Look for the bf16 or 8-bit sibling of the 4-bit checkpoint. Notice whether the sibling closes the quality gap.
4. List the whole variant family before you build a workaround. Notice whether a variant already ships for the task you are hand-rolling.
5. Weigh the cost by domain before choosing precision. Notice that full precision takes about double the disk and memory, 4.2 GB against 2.2 GB here. For final-quality audio, take precision. For bulk text, take parameters.
