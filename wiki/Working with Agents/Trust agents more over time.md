---
title: "Trust agents more over time"
type: technique
section: "Working with Agents"
status: seed
description: "Climb from watching every agent chat to agents that merge their own work, one step at a time, giving each step evidence to rest on and holding back the changes you cannot undo."
created: 2026-10-19
updated: 2026-10-19
effort: weeks
needs: a codebase
cost_note: no
aliases:
  - "Case: Shipping Thousands of Changes a Month"
tags:
  - agents
  - trust
  - autonomy
draft: true
---

# Trust agents more over time

How much agents can do for you depends on how much you trust their work. Trust grows in steps, and each step lets agents do more while you watch less.

**Scope.** This is [Lauren](https://www.youtube.com/watch?v=Zc07HI9Ppxk)'s path from watching every chat to agents that merge their own pull requests overnight. It fits software work you can check and revert, and changes you cannot undo are a harder case.

<div class="callout">

<b>At a glance</b>

- Start on your own machine, where you can watch the agent work.
- Move to cloud agents, then to merging with review afterwards.
- Keep a hold on any change you cannot undo.
- Climb one step at a time.

</div>

<figure>
<svg viewBox="0 0 520 671" width="100%" style="max-width:520px" role="img" aria-labelledby="tr-ladder-t">
<title id="tr-ladder-t">The trust ladder, three rungs from the bottom up. Rung 1, start local and watch: agents bring up your app on your own machine and check their work, you watch how it drives the app, and you climb once you trust what it reports. Rung 2, cloud agents pick up work: agents take each new bug report, reproduce it on their own computer and return a pull request, you read the reports and pull requests, and you climb once the checks have held. Between rungs 2 and 3, a 1-hour hold before each merge. Rung 3, agents merge and you review afterwards: agents merge their own pull requests overnight and you read what landed on the main branch the next morning. When you find a problem, an arrow goes back down: revert, modify or tighten the setup. Beside rungs 2 and 3, a hold for changes you cannot undo: they lose data or cannot be reverted, how far to trust them depends on how well the work can be verified, and a team on full autopilot still required each bug reproduced and checked first. A crossed-out shortcut jumps from rung 1 to hundreds of agents at once, which wastes tokens and money and brings sloppy pull requests and regressions. Where you start: one to five chats, correcting each one.</title>
<rect x="0" y="8" width="205" height="44" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="102" y="35" style="font-weight:600">Hundreds of agents at once</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="215" y="23">Jumping here wastes tokens and</text><text x="215" y="38">money: sloppy pull requests</text><text x="215" y="53">and regressions</text></g>
<rect x="50" y="86" width="285" height="119" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="108" style="font-weight:600">3. Agents merge, you review afterwards</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="129">Agents:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="144">merge their own pull requests overnight</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="163">You:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="178">read what landed on the main branch</text><text x="62" y="195">the next morning</text></g>
<rect x="50" y="263" width="285" height="153" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="285" style="font-weight:600">2. Cloud agents pick up work</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="306">Agents:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="321">take each new bug report, reproduce it</text><text x="62" y="338">on their own computer, return a pull request</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="357">You:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="372">read the reports and pull requests</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="391">Earns the next rung:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="406">the checks have held</text></g>
<rect x="50" y="474" width="285" height="153" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="496" style="font-weight:600">1. Start local and watch</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="517">Agents:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="532">bring up your app on your own machine</text><text x="62" y="549">and check their work</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="568">You:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="583">watch how it drives the app</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="62" y="602">Earns the next rung:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="62" y="617">you trust what it reports</text></g>
<path d="M120,472 L120,418" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="120.0,418.0 125.0,427.0 115.0,427.0" style="fill:var(--mut,#666)"/>
<path d="M120,261 L120,207" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="120.0,207.0 125.0,216.0 115.0,216.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="130" y="231">1-hour hold before</text><text x="130" y="245">each merge</text></g>
<path d="M240,207 L240,261" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="240.0,261.0 235.0,252.0 245.0,252.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="248" y="224">revert, modify</text><text x="248" y="238">or tighten</text><text x="248" y="252">the setup</text></g>
<path d="M48,550.5 L20,550.5 L20,54" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="20.0,54.0 25.0,63.0 15.0,63.0" style="fill:var(--mut,#666)"/>
<g style="stroke:var(--ink,currentColor);stroke-width:2.5"><line x1="10" y1="224.0" x2="30" y2="244.0"/><line x1="30" y1="224.0" x2="10" y2="244.0"/></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="192.5" y="649">Where you start: one to five chats,</text><text x="192.5" y="664">correcting each one</text></g>
<rect x="353" y="86" width="165" height="244" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-width:2.5"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px;font-weight:600"><text x="361" y="108">Hold: changes you</text><text x="361" y="124">cannot undo</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="361" y="150">They lose data or</text><text x="361" y="165">cannot be reverted.</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="361" y="190">How far to trust them</text><text x="361" y="205">depends on how well</text><text x="361" y="220">the work can be</text><text x="361" y="235">verified.</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="361" y="260">A team on full</text><text x="361" y="275">autopilot still required</text><text x="361" y="290">each bug reproduced</text><text x="361" y="305">and checked first.</text></g>
</svg>
<figcaption>The trust ladder. Each rung rests on evidence from the one below, and changes you cannot undo keep a hold.</figcaption>
</figure>


## Why it works

Low trust forces micromanagement, the way a manager who does not trust a team ends up looking over every shoulder. Micromanaging then eats the time you would need to build the skills and tools that earn trust.

Each step rests on evidence from the one below. You move to the cloud after watching the agent check its work locally, and you let agents merge once those checks have held. The checks can still be wrong, as with trusting that a colleague ran their code, but a change you can revert keeps a wrong call cheap.

## The method

1. **Start local and watch.** Have the agent bring up your app on your own machine, so you can see how it drives the app and checks its work. Move on once you trust what it reports.
2. **Move to cloud agents that pick up work on their own.** Let a cloud agent take each new bug report, reproduce it on its own computer and return a pull request. In one case it reported that a bug reproduced but was already fixed on the main branch, which saved an hour of checking.
3. **Let agents merge, and review afterwards.** Read what landed on the main branch the next morning, and revert, modify or tighten the setup where you see a problem. The first night is scary, but one morning brought about 20 merged pull requests, and they were good.
4. **Keep a hold on what you cannot undo.** Some changes lose data or cannot be reverted, and how far you can trust those depends on how well the work can be verified. When a team put its live game's bug fixes on full autopilot, it still required each bug to be reproduced and checked first.
5. **Climb one rung at a time.** Jumping from a handful of agents to hundreds wastes tokens and money. Start with something simple and low risk, and let your own standards set the pace rather than another person's setup.

### A loop to copy

> Watch [channel] for feedback about the app and open a ticket for each item. For each ticket, start a cloud agent to triage it and reproduce the issue on its own computer. If the issue clearly reproduces, put up a fix and have a small group of agents test the pull request. If they find no issues, message me, then rebase and merge it after 1 hour unless I ask for changes.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| Your day goes to watching chats and correcting | You are low on the ladder | Spend the time on the setup instead |
| More agents bring sloppy pull requests and regressions | You scaled before you had trust | Go back a step and run fewer agents |
| You hesitate to let a kind of change merge itself | It may not be reversible | Keep a hold for that kind of change |

You now have the whole climb, from watching locally to reviewing after the merge, with each step resting on evidence from the one before and a hold on what you cannot undo.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the checks every step rests on.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers what to change when you find a problem after merging.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the brief at the start.
- [[wiki/Start Here/The Big Idea Agents Do, You Steer|The Big Idea: Agents Do, You Steer]] gives the overview.

## Sources

- [Lauren](https://www.youtube.com/watch?v=Zc07HI9Ppxk), talk on trusting agents (2026-08-12, auto-captions). Trust and micromanagement, start local, the bug-reproduction cloud agent, about 20 merged pull requests, not jumping to hundreds of agents, no shortcut and no blind trust. Paraphrased.
- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). One to five agents as the hardest phase, a hundred untrusted agents giving slop pull requests. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), live Q&A (2026-10-02, transcript). Stuck micromanaging at low trust, agents merging overnight with review in the morning, the scary first night, reversible and irreversible changes. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107510472601985336), X post on the first and last mile (2026-10-06). The feedback loop with a 1-hour hold before merging. Paraphrased.
- [Lauren](https://x.com/poteto/status/2109436202554372476), X post on verification (2026-10-11). Checks are an approximation and can be wrong, like trusting a colleague ran their code. Paraphrased.
- Grok Bot Galaxy event, day 3 (2026-09-17, caption transcript). Full autopilot on the live game with reproduction and checks first, starting simple and low risk. Paraphrased.

## Open questions

How do you know you trust a step enough to climb? The sources describe the feeling and the evidence but give no test or threshold.

What hold fits work that cannot be undone and is hard to verify? The Q&A leaves it open.

How small should each merged change be so that reverting stays cheap? No source says.
