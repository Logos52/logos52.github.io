---
title: "Let an agent check its own work"
type: technique
section: "Working with Agents"
status: seed
description: "Give an agent a way to run the real app, ask for video proof with every task, and check the checking by sampling, so you stop being the tester."
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
---

# Let an agent check its own work

Make "done" mean the agent ran the software and shows you evidence of what happened, then check that evidence by sampling rather than testing every change yourself.

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
<title id="cw-loop-t">The checking loop in six steps: build the verification skill, add a command-line tool and a feature map, ask for proof that the check ran, review the proof, sample the pull requests each day, and when several agents take the same shortcut change the setup, then go back to the verification skill.</title>
<defs><marker id="cw-loop-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="30" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="74">1. Build the</text><text x="110.0" y="93">verification skill</text></g>
<rect x="270" y="30" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="74">2. Add a command-line</text><text x="370.0" y="93">tool and a feature map</text></g>
<rect x="270" y="166" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="191">3. Ask for proof that the</text><text x="370.0" y="210">check ran: for a screen</text><text x="370.0" y="229">app, a video and</text><text x="370.0" y="248">screenshots</text></g>
<rect x="10" y="166" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="200">4. Review the proof</text><text x="110.0" y="219">rather than watch</text><text x="110.0" y="238">the agent</text></g>
<rect x="10" y="302" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="110.0" y="346">5. Sample the pull</text><text x="110.0" y="365">requests each day</text></g>
<rect x="270" y="302" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="370.0" y="336">6. When several agents</text><text x="370.0" y="355">take the same shortcut,</text><text x="370.0" y="374">change the setup</text></g>
<path d="M211,78.0 L268,78.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="268.0,78.0 259.0,83.0 259.0,73.0" style="fill:var(--mut,#666)"/><path d="M370.0,127 L370.0,164" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="370.0,164.0 365.0,155.0 375.0,155.0" style="fill:var(--mut,#666)"/>
<path d="M269,214.0 L212,214.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="212.0,214.0 221.0,209.0 221.0,219.0" style="fill:var(--mut,#666)"/><path d="M110.0,263 L110.0,300" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="110.0,300.0 105.0,291.0 115.0,291.0" style="fill:var(--mut,#666)"/>
<path d="M211,350.0 L268,350.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="268.0,350.0 259.0,355.0 259.0,345.0" style="fill:var(--mut,#666)"/><path d="M370.0,301 L370.0,264" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="370.0,264.0 375.0,273.0 365.0,273.0" style="fill:var(--mut,#666)"/>\n<path d="M471,350.0 L478,350.0 L478,8 L110.0,8 L110.0,28" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="110.0,28.0 105.0,19.0 115.0,19.0" style="fill:var(--mut,#666)"/><g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="294.0" y="24">change the setup</text></g>
</svg>
<figcaption>The checking loop: setup first, then proof, review, sampling and a setup fix.</figcaption>
</figure>


## Why it works

Without a way to run the app, an agent keeps asking you to run it and click around, which is slow. With one, it reaches each feature through the screens as a user would and debugs on its own, so your testing no longer limits how much it can finish. The harder a stack is to debug and control, the harder it is to use agents productively.

## The method

1. **Build the verification skill before the features.** It teaches the agent to start your app and collect evidence that it works. Use your stack's own debugging tools, such as the browser's protocol or the iOS simulator. Treat the skill as critical infrastructure and refresh it daily.
2. **Put one small command-line tool in the skill.** Without a shared tool, each agent rebuilt its own checking scripts, which was slow and inconsistent. Give the tool descriptive error messages that say what to do next, a dry-run option on any command with destructive effects, and output in JSON.
3. **Add a feature map.** The map lists each feature, what it does and how a user reaches it, and it lives inside the skill. With it, an agent can match a vague report to the right screen. Have the agent catalog the app and write the first version.
4. **Ask for proof that the check ran.** For an app with a screen the proof is a video and screenshots. This page reads them as the visible record that the code ran and the change works, which a passing test alone does not give. You review that proof rather than watch the agent, and one speaker's review bot checks finished work for missing proof, such as screenshots, and asks the coding agent to add it. For other software, a test does not count until the agent has run the code and seen it work.
5. **Check the checking.** Let low-stakes changes, like a documentation page, run with little review, and ask for a demo or prototype on riskier ones. For changes that matter, a full-autopilot run spawns several verifier agents per pull request that click through the app like a user, and you can tune that down to one because they use many tokens. Then sample the pull requests each day, and when several agents take the same shortcut, change the setup.

<figure>
<svg viewBox="0 0 480 308" width="100%" style="max-width:480px" role="img" aria-labelledby="cw-skill-t">
<title id="cw-skill-t">What lives in the verification skill. One small command-line tool with descriptive error messages, a dry-run option on destructive commands and JSON output. A feature map listing each feature, what it does and how a user reaches it.</title>
<defs><marker id="cw-skill-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="460" height="288" rx="10" style="fill:none;stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:15px"><text x="26" y="36" style="font-weight:600">The verification skill holds</text></g>
<rect x="26" y="50" width="428" height="132" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="42" y="76" style="font-weight:600">One small command-line tool</text><text x="42" y="104">Descriptive error messages that say what to do next</text><text x="42" y="128">A dry-run option on any command with destructive effects</text><text x="42" y="152">Output in JSON</text></g>
<rect x="26" y="194" width="428" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="42" y="220" style="font-weight:600">A feature map</text><text x="42" y="246">Each feature, what it does and how a user reaches it</text><text x="42" y="270">An agent can match a vague report to the right screen</text></g>
</svg>
<figcaption>What the skill holds.</figcaption>
</figure>

<figure>
<svg viewBox="0 0 480 306" width="100%" style="max-width:480px" role="img" aria-labelledby="cw-stakes-t">
<title id="cw-stakes-t">Review by stakes. Low stakes, such as a documentation page, run with little review. Riskier changes get a demo or prototype. Changes that matter: a full-autopilot run spawns several verifier agents per pull request that click through the app like a user. You can tune that down to one because they use many tokens.</title>
<defs><marker id="cw-stakes-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="460" height="80" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="36" style="font-weight:600">Low stakes</text><text x="26" y="60">A documentation page:</text><text x="26" y="80">let it run with little review</text></g>
<rect x="10" y="102" width="460" height="80" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="128" style="font-weight:600">Riskier</text><text x="26" y="152">Ask for a demo</text><text x="26" y="172">or a prototype</text></g>
<rect x="10" y="194" width="460" height="100" rx="8" style="fill:var(--paper,transparent);stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px"><text x="26" y="220" style="font-weight:600">Changes that matter</text><text x="26" y="244">A full-autopilot run spawns several verifier agents per</text><text x="26" y="264">pull request that click through the app like a user.</text><text x="26" y="284">You can tune that down to one because they use many tokens.</text></g>
</svg>
<figcaption>Review by stakes, as step 5 gives it.</figcaption>
</figure>

### A prompt to copy

> Build [the feature and any useful context]. Use the verification skill to check your changes, and show me proof that the check ran. For a screen app, add "a video and screenshots".

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| The agent asks you to run the app and click around | It has no verification skill | Build the skill first |
| A screen app's pull requests arrive with no video or screenshots | The prompt may not have asked for proof | Add the proof line |
| An automated change took the live site down | Verification may not cover everything | Advice: keep sampling and add human review for high-stakes changes |

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the rest of the brief.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers fixing the setup.
- [[wiki/Working with Agents/Review less without losing control|Review less without losing control]] covers sampling and hold points.
- [[wiki/Working with Agents/Handle a bug report - reproduce first|Handle a bug report: reproduce first]] covers the report-to-fix path.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). The verification skill, the stacks it fits (web, Electron, iOS), the command-line tool and its properties, the feature map, daily upkeep, the proof prompt. Paraphrased.
- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). Why verification came first, the tool inside the skill, the feature map, critical infrastructure. Paraphrased.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Tests alone are not sufficient verification until the code has run. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), [live Q&A](https://www.youtube.com/watch?v=MN9dGgmLyso) (2026-10-02, captions). Why the tool exists, the verifier agents and their cost, daily sampling. Paraphrased.
- Grok Bot Galaxy event, day 1 (2026-09-15), day 3 (2026-09-17), community named transcripts with unreliable speaker labels. Asking for a video, the missing-proof pull requests, how much human review, the outage. Paraphrased.

## Open questions

What proof should you ask for from software with no screen, such as a command-line tool, a library, a backend or a data script, since no source says?

Is a video or screenshots enough on its own, and how does a reviewer judge a video complete, since no source says?

How many verifier agents per pull request are enough, since the only figure is a tuning example of using one instead of 10?

How should the review depth scale with the stakes of a change, since no source gives a rule?
