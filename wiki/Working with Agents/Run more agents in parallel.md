---
title: "Run more agents in parallel"
type: guide
section: "Working with Agents"
status: seed
description: "Scale past a few agents by running them in the cloud instead of in local copies of the repository, letting a bot or coordinator spawn and supervise them, splitting work into parallel pieces, and fanning out verification."
created: 2026-10-20
updated: 2026-10-20
effort: a day to set up
needs: a verification skill and cloud agents
cost_note: no
aliases:
  - "Parallel agents"
tags:
  - agents
  - parallelism
  - cloud-agents
---

# Run more agents in parallel

Once one agent can take your prompt and mostly drive it to a change you can merge, you are free to run more of them at once. The way to scale is to move the agents to the cloud, where each gets its own computer, and to let a bot or coordinator agent hand out the work and supervise it, so that you are not opening every chat yourself. Verification has to scale with them, and on the last day of one livestream, a software factory took production down with a bad database query.

**Scope.** This follows [Lauren](https://x.com/poteto/status/2094457600259842065)'s setup for running agents in the cloud and the coordinator agents she described in a live Q&A, together with how speakers at the Grok Bot Galaxy livestream split work across bots. It fits anyone whose agents can already check their own work.

<div class="callout">

<b>At a glance</b>

1. Start once a single agent can mostly land its own work.
2. Run the extra agents in the cloud, not in local copies of the repository.
3. Have your bot or a coordinator agent spawn and supervise them.
4. Split the work into pieces that can run side by side.
5. Fan out verification too, sized to what you can afford.
6. Keep a person on anything that can break production.

</div>

<figure>
<svg viewBox="0 0 520 671" width="100%" style="max-width:520px" role="img" aria-labelledby="pa-fan-t">
<title id="pa-fan-t">Coordinator fan-out. You talk to your bot, which spawns a cloud agent instead of doing the work. In the corner, crossed out: local worktrees top out at about 10 agents. Inside the cloud, a coordinator agent does no work of its own and passes context to the agents under it, while 30 or so issues arrive at once. Your bot or the coordinator agent spawns cloud agents, and each gets its own computer. Verifier agents fan out under each one, and you can tune it from 10 verifiers down to 1. From the cloud, the path passes through an ask first gate before production. A separate faded panel, not connected to the gate: near the end of the livestream, a software factory had brought production down with a bad database query, and signups would reopen soon.</title>
<rect x="10" y="10" width="60" height="33" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="30" style="font-weight:600">You</text></g>
<rect x="100" y="10" width="200" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="110" y="30" style="font-weight:600">Your bot</text><text x="110" y="47">Spawns a cloud agent</text><text x="110" y="64">instead of doing the work</text></g>
<path d="M70,26.5 L99,26.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="99.0,26.5 90.0,31.5 90.0,21.5" style="fill:var(--mut,#666)"/>
<g style="opacity:.75"><rect x="330" y="10" width="180" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<rect x="342" y="22" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M353,36 L353,40 M347,40 L359,40" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<rect x="350" y="28" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M361,42 L361,46 M355,46 L367,46" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<rect x="358" y="34" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M369,48 L369,52 M363,52 L375,52" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="390" y="30">Local worktrees</text><text x="390" y="45">Top out at about</text><text x="390" y="60">10 agents</text></g>
</g>
<path d="M338,18 L378,58 M378,18 L338,58" style="stroke:var(--ink,currentColor);stroke-width:1.8"/>
<rect x="10" y="107" width="500" height="342" rx="14" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:6 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="start"><text x="22" y="127" style="font-weight:600">Cloud</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="330" y="127">30 or so issues arrive at once</text></g>
<rect x="380" y="135" width="10" height="10" rx="2" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<rect x="394" y="135" width="10" height="10" rx="2" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<rect x="408" y="135" width="10" height="10" rx="2" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<rect x="422" y="135" width="10" height="10" rx="2" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<rect x="290" y="163" width="210" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="300" y="183" style="font-weight:600">Coordinator agent</text><text x="300" y="200">Does no work of its own</text><text x="300" y="217">Passes context to the</text><text x="300" y="234">agents under it</text></g>
<path d="M415,145 L415,161" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="415.0,161.0 410.0,152.0 420.0,152.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="240" y="210" style="font-weight:600">or</text></g>
<path d="M200,77 L200,269 M395,247 L395,269 M62,269 L446,269" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M62.0,269 L62.0,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="62.0,291.0 57.0,282.0 67.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="20" y="293" width="84" height="54" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="51.0" y="301" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M62.0,315 L62.0,319 M56.0,319 L68.0,319" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="62.0" y="337">Cloud agent</text></g>
<path d="M62.0,347 L34,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="34" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M62.0,347 L62,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="62" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M62.0,347 L90,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="90" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M158.0,269 L158.0,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="158.0,291.0 153.0,282.0 163.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="116" y="293" width="84" height="54" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="147.0" y="301" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M158.0,315 L158.0,319 M152.0,319 L164.0,319" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="158.0" y="337">Cloud agent</text></g>
<path d="M158.0,347 L130,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="130" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M158.0,347 L158,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="158" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M158.0,347 L186,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="186" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M254.0,269 L254.0,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="254.0,291.0 249.0,282.0 259.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="212" y="293" width="84" height="54" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="243.0" y="301" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M254.0,315 L254.0,319 M248.0,319 L260.0,319" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="254.0" y="337">Cloud agent</text></g>
<path d="M254.0,347 L226,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="226" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M254.0,347 L254,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="254" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M254.0,347 L282,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="282" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M350.0,269 L350.0,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="350.0,291.0 345.0,282.0 355.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="308" y="293" width="84" height="54" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="339.0" y="301" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M350.0,315 L350.0,319 M344.0,319 L356.0,319" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="350.0" y="337">Cloud agent</text></g>
<path d="M350.0,347 L322,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="322" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M350.0,347 L350,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="350" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M350.0,347 L378,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="378" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M446.0,269 L446.0,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="446.0,291.0 441.0,282.0 451.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="404" y="293" width="84" height="54" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<rect x="435.0" y="301" width="22" height="14" rx="2" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/><path d="M446.0,315 L446.0,319 M440.0,319 L452.0,319" style="stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="446.0" y="337">Cloud agent</text></g>
<path d="M446.0,347 L418,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="418" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M446.0,347 L446,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="446" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<path d="M446.0,347 L474,362" style="stroke:var(--mut,#666);stroke-width:1"/><circle cx="474" cy="369" r="7" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="20" y="395">Each gets its own computer. Verifier agents fan out under each one.</text></g>
<path d="M22,435 A18,18 0 0 1 58,435" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.5"/><path d="M40,435 L51,422" style="stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="70" y="431">Tune it from 10 verifiers down to 1</text></g>
<path d="M260,449 L260,477" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="260.0,477.0 255.0,468.0 265.0,468.0" style="fill:var(--mut,#666)"/>
<rect x="190" y="479" width="140" height="36" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="260" y="502" style="font-weight:600">Ask first</text></g>
<path d="M260,515 L260,539" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="260.0,539.0 255.0,530.0 265.0,530.0" style="fill:var(--mut,#666)"/>
<rect x="190" y="541" width="140" height="36" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="260" y="564" style="font-weight:600">Production</text></g>
<g style="opacity:.7"><rect x="10" y="607" width="500" height="58" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:3 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="22" y="629" style="font-weight:600">Near the end of the livestream</text><text x="22" y="644">A software factory had brought production down with a bad database query,</text><text x="22" y="659">and signups would reopen soon</text></g>
</g>
</svg>
<figcaption>The coordinator fan-out. Your bot or a coordinator agent spawns and supervises the cloud agents, verification fans out with them, and production still asks first.</figcaption>
</figure>

## Why it works

Running agents in local copies of the repository, which git calls worktrees, uses a lot of storage and computing power, so depending on the repository and the machine you may top out at about 10 agents. Cloud agents each have a real computer, which means they can install dependencies, run your app and record videos and screenshots the way a user would. When your bot spawns a cloud agent rather than doing the work itself, the bot stays free for other things and its context window stays clean, and a coordinator, which she also calls a chief of staff, can see the forest as well as driving the work.

## The method

1. **Start once one agent can mostly land its work.** [Lauren](https://x.com/poteto/status/2094457600259842065) raises parallel agents once a verification skill has helped land a few pull requests, because that is what frees you to run more.
2. **Move the agents to the cloud.** Set up a cloud environment for your repository; when you first do, an agent helps you configure it. If your local development setup is already good, this should not be a big lift.
3. **Make a bot or coordinator the manager.** Tell your bot to spawn a cloud agent instead of doing the work. [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2616s) also uses coordinator agents that run in the cloud, do no work of their own and pass context to the agents under them. When 30 or so issues arrive at once, the coordinator works out how to distribute them across its agents.
4. **Split the work into parallel pieces.** On the livestream, one speaker tagged several design fixes and started a separate agent on each, which suits polish work where you have many small changes in your head. Another had one bot split 200 companies into batches of 40 and research them in parallel. That speaker also keeps one bot per function, such as email or outbound. [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=3109s) runs the equivalent of more than 10 chiefs of staff, each working on a different area, such as the desktop app's performance or bugs that users report. For related issues, [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2616s) warns that one agent per task loses the thread between them and duplicates work, so she gives them to one coordinator.
5. **Fan out the verification.** A swarm skill sends many cloud agents to run your verification skill at once, so you can confirm a performance win with a big enough sample or fuzz the app for regressions. [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=3170s)'s full autopilot spawns several verifier agents for each pull request, which uses a lot of tokens, though you can tune it from 10 verifiers down to 1.
6. **Keep a person on production.** Near the end of the livestream, a speaker reported that a software factory had brought production down with a bad database query, and signups would reopen soon. Another speaker, on day 2, sets deploying to production and using internal systems to ask first rather than run automatically.

### A prompt to copy

> Spawn a cloud agent for each of these tasks instead of doing them yourself. Pass each one the context it needs, have it verify its change in the running app and show me a video and screenshots as proof. Ask me before anything deploys to production.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| Your machine slows down past a handful of agents | Local copies are hitting their limit | Move the agents to the cloud |
| Your bot's replies get worse as it works | Its context is filling with the work | Have it spawn cloud agents instead |
| Many pull requests arrive that you can't trust | Verification has not scaled with the agents | Fan out verifier agents before adding more |
| A change from your agents takes production down | A risky change reached production unchecked | Make production deploys ask first, as one speaker did on day 2 |

Running agents in parallel works when they live in the cloud, a manager hands out the work, and verification keeps pace, with a person still holding the door to production.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the verification skill and the verifier agents.
- [[wiki/Working with Agents/Review less without losing control|Review less without losing control]] covers ask-first gates and reviewing output from many agents.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers how far to scale at each step and why jumping ahead fails.
- [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]] covers keeping quality up as more agents write code.

## Sources

- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). When to parallelize, worktrees versus cloud agents, spawning cloud agents from a bot, the swarm skill. Paraphrased.
- [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2616s) with [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso), live Q&A (2026-10-02, transcript). Coordinator agents, more than 10 of them by area, verifier agents tuned from 10 to 1. Paraphrased.
- Grok Bot Galaxy livestream, day 2 (2026-09-16, caption transcript; speaker labels unreliable). Separate agents per design fix, batches of 40 companies, one bot per function, ask first on production. Paraphrased.
- Grok Bot Galaxy livestream, day 3 (2026-09-17, caption transcript). The bad database query that took production down. Paraphrased.

## Open questions

What check would have stopped the bad database query on day 3? The stream reports the outage but not its cause beyond the query, or the fix.

How many agents is too many for one coordinator? The sources give 30 or so issues at once and more than 10 coordinators, but no limit.

How should you split the cost between more workers and more verifiers? The sources say verification is token-intensive and tunable, without numbers.
