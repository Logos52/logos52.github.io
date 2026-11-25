---
title: "Let an agent check its own work"
type: practice
section: "Working with Agents"
status: seed
description: "Give an agent a way to run the real app, ask for proof that the check ran, and check the checking by sampling, so you stop being the tester."
created: 2026-10-19
updated: 2026-11-22
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

<div class="callout">

<b>At a glance</b>

- Build a verification skill first, a saved set of instructions that lets the agent run the app.
- Add a shared command-line tool and a feature map.

</div>

<figure>
<svg viewBox="0 0 360 548" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cw-loop-t">
<title id="cw-loop-t">Count a task as done only when the agent has run the software and shown you evidence of what happened, and check that evidence by sampling instead of testing every change yourself.</title>
<rect x="0.5" y="0.5" width="359" height="547" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Count a task as done only when the</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">agent has run the software and shown</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">you evidence of what happened, and</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">check that evidence by sampling</text>
<text x="20" y="136" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">instead of testing every change</text>
<text x="20" y="160" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">yourself.</text>
<line x1="20" y1="176" x2="340" y2="176" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="175" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="204" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Build a verification skill first</text>
<text x="20" y="226" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">a saved set of instructions that lets</text>
<text x="20" y="248" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the agent run the app.</text>
<line x1="20" y1="262" x2="340" y2="262" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="290" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Add a shared command-line tool and a</text>
<text x="20" y="312" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">feature map.</text>
<line x1="20" y1="326" x2="340" y2="326" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="354" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Ask for proof that the check ran.</text>
<line x1="20" y1="368" x2="340" y2="368" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="396" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">You review that proof rather than</text>
<text x="20" y="418" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">watch the agent</text>
<line x1="20" y1="432" x2="340" y2="432" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="460" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Then sample the pull requests each</text>
<text x="20" y="482" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">day, and if several agents repeat</text>
<text x="20" y="504" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">one shortcut, fix the setup rather</text>
<text x="20" y="526" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">than the single agent.</text>
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
<svg viewBox="0 0 360 392" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cw-skill-t">
<title id="cw-skill-t">Add a shared command-line tool and a feature map.</title>
<rect x="0.5" y="0.5" width="359" height="391" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Add a shared command-line tool and a</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">feature map.</text>
<line x1="20" y1="80" x2="340" y2="80" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="79" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="108" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Put one small command-line tool in</text>
<text x="20" y="130" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">the skill.</text>
<text x="20" y="152" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">descriptive error messages that say</text>
<text x="20" y="174" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">what to do next</text>
<text x="20" y="196" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">a dry-run option on any command with</text>
<text x="20" y="218" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">destructive effects</text>
<text x="20" y="240" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">output in JSON</text>
<line x1="20" y1="254" x2="340" y2="254" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="282" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Add a feature map.</text>
<text x="20" y="304" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">The map lists each feature, what it</text>
<text x="20" y="326" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">does and how a user reaches it</text>
<text x="20" y="348" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">an agent can match a vague report to</text>
<text x="20" y="370" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the right screen</text>
</svg>
</figure>

<figure>
<svg viewBox="0 0 360 366" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cw-stakes-t">
<title id="cw-stakes-t">Check the checking.</title>
<rect x="0.5" y="0.5" width="359" height="365" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Check the checking.</text>
<line x1="20" y1="56" x2="340" y2="56" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="55" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="84" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Let low-stakes changes, like a</text>
<text x="20" y="106" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">documentation page, run with little</text>
<text x="20" y="128" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">review</text>
<line x1="20" y1="142" x2="340" y2="142" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="170" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">ask for a demo or prototype on</text>
<text x="20" y="192" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">riskier ones</text>
<line x1="20" y1="206" x2="340" y2="206" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="234" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">For changes that matter, a</text>
<text x="20" y="256" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">full-autopilot run spawns several</text>
<text x="20" y="278" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">verifier agents per pull request</text>
<text x="20" y="300" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">that click through the app like a</text>
<text x="20" y="322" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">user, and you can tune that down to</text>
<text x="20" y="344" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">one because they use many tokens.</text>
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

## Reproduce before you fix

Most bug reports are vague. A fix written before anyone has seen the bug is a guess. Merge duplicates at intake. Ask the agent to restate the problem and reproduce it on its own computer before it touches code. Fix only what reproduced, after checking whether the main branch already fixed it. Prove the fix with screenshots of the bug and the fix, including light and dark mode when the UI matters. Turn each steer into a skill so the next report starts where the last one ended.

## Before you compare two models

A model label hides precision, task type, and finish. Two checkpoints with the same parameter count can differ on all three. Quantization compresses weights. Voice models get audibly rougher at four-bit precision. A model producing its own trained-in voices is a different task from cloning a stranger's voice from a short clip. Before comparing two local models, record the exact checkpoint ID, quantization level, and variant for each. Ten evaluation rounds without those three lines tell you less than one `config.json` read.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). The verification skill, the stacks it fits (web, Electron, iOS), the command-line tool and its properties, the feature map, daily upkeep, the proof prompt. Paraphrased.
- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). Why verification came first, the tool inside the skill, the feature map, critical infrastructure. Paraphrased.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Tests alone are not sufficient verification until the code has run. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), [live Q&A](https://www.youtube.com/watch?v=MN9dGgmLyso) (2026-10-02, captions). Why the tool exists, the verifier agents and their cost, daily sampling. Paraphrased.
- Grok Bot Galaxy event, day 1 (2026-09-15), day 3 (2026-09-17), community named transcripts with unreliable speaker labels. Asking for a video, the missing-proof pull requests, how much human review, the outage. Paraphrased.

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the rest of the brief.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers fixing the setup.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]]: the brief and review sampling
