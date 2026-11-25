---
title: "Turn a repeated correction into a permanent fix"
type: practice
section: "Working with Agents"
status: seed
description: "When you correct the same mistake twice, move the fix out of your messages and into the code, the checks or the rules, starting with the strongest place that works."
created: 2026-10-19
updated: 2026-10-19
effort: an hour
needs: a codebase
cost_note: no
aliases:
  - "Turning a Correction Into a Rule"
tags:
  - agents
  - trust
  - lint
wedge_reviewed: true
---

# Turn a repeated correction into a permanent fix

When an agent repeats a mistake, the setup is inviting it. The fix belongs in the code and its checks, not in another message. Choosing where a fix lives decides whether the mistake keeps costing you attention.

<div class="callout">

<b>At a glance</b>

- Fix a mistake that repeats, not the single reply.
- Pick the strongest of four places that works, from the code itself down to human review.
- Mine your past chats and review comments to find the repeats.

</div>

<figure>
<svg viewBox="0 0 360 410" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cr-places-t">
<title id="cr-places-t">The stronger the rung, the less attention each repeat costs you.</title>
<rect x="0.5" y="0.5" width="359" height="409" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">The stronger the rung, the less</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">attention each repeat costs you.</text>
<line x1="20" y1="80" x2="340" y2="80" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="79" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="108" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A change that makes the mistake</text>
<text x="20" y="130" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">impossible needs no memory</text>
<line x1="20" y1="144" x2="340" y2="144" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="172" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">an automatic check is enforced on</text>
<text x="20" y="194" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">every change</text>
<line x1="20" y1="208" x2="340" y2="208" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="236" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A rule or skill depends on the agent</text>
<text x="20" y="258" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">reading it, and the person steering</text>
<text x="20" y="280" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">may ignore it.</text>
<line x1="20" y1="294" x2="340" y2="294" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="322" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A style guide depends on a reviewer,</text>
<text x="20" y="344" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">and at the rate agents open pull</text>
<text x="20" y="366" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">requests, no one can read every</text>
<text x="20" y="388" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">line.</text>
</svg>
</figure>

## Why it works

An agent sees the files it opened, copies the nearest example and takes the shortest path, so your codebase teaches it more than your messages do. A bad pattern then spreads, and one workaround comment can become the default in every agent's output within days or weeks. Correcting one agent leaves that cause in place, so when several agents take the same shortcut, change the environment.

The places for a fix differ in how much they depend on someone remembering. A change that makes the mistake impossible needs no memory, and an automatic check is enforced on every change. A rule or skill depends on the agent reading it, and the person steering may ignore it. A style guide depends on a reviewer, and at the rate agents open pull requests, no one can read every line. The stronger the rung, the less attention each repeat costs you.

## The method

1. **Separate the repeat from the one-off, then find the repeats.** A single incident may need no fix, so wait for a pattern, such as the same mistake twice or several agents taking the same shortcut. Ask the agent to read your past chats, review comments, reverts and the comments that explain workarounds, then group them into classes of mistake.
2. **Try to make the mistake impossible in the code.** This is the strongest rung because nothing has to be remembered. Give each piece of state one owner and each task one supported way. Hide internals so the wrong import fails, and delete the old paths an agent would copy.
3. **If the bad code still compiles, add an automatic check.** Use a lint rule, compiler diagnostic, test or build step, and write the lint error so it names what to use instead. If the pattern is already common, fail only the changes that add more of it, which stops the spread, and have agents rewrite the old uses later. Prove each check fails on a real past mistake.
4. **Use rules and skills only for judgment calls.** Nothing fails when an agent skips them, so they sit below the checks. A prompt you keep retyping also belongs here, as a saved playbook or another bot. Keep a table in the agent's instruction file that pairs each rule with what enforces it. If you correct the same mistake again and its rule has nothing enforcing it, move it up a rung in the same change.

<figure>
<svg viewBox="0 0 360 368" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cr-method-t">
<title id="cr-method-t">Pick the strongest of four places that works, from the code itself down to human review.</title>
<rect x="0.5" y="0.5" width="359" height="367" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Pick the strongest of four places</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">that works, from the code itself</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">down to human review.</text>
<line x1="20" y1="104" x2="340" y2="104" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="103" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="132" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Separate the repeat from the</text>
<text x="20" y="154" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">one-off, then find the repeats.</text>
<line x1="20" y1="168" x2="340" y2="168" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="196" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Try to make the mistake impossible</text>
<text x="20" y="218" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">in the code.</text>
<line x1="20" y1="232" x2="340" y2="232" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="260" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">If the bad code still compiles, add</text>
<text x="20" y="282" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">an automatic check.</text>
<line x1="20" y1="296" x2="340" y2="296" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="324" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Use rules and skills only for</text>
<text x="20" y="346" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">judgment calls.</text>
</svg>
</figure>

### A prompt to copy

> Look through my past chats and the review comments where I corrected agents. Group the mistakes into classes that happened at least twice. For each class, choose the strongest fix that works: make it impossible in the code, add an automatic check, or write a rule. Show me each class with the evidence, the fix you chose, and why a stronger one did not work. Answer your own open questions by prototyping, and show me the plan before you change anything.

You now have a loop in which each correction ends in the code, in a check, or in a rule whose weakness you know, so fewer repeats reach you.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| You make the same correction again | The rule exists but nothing enforces it | Move it up a rung in the same change |
| One workaround or comment keeps appearing in new changes | Agents are copying what exists | Delete the pattern and block new uses |
| A new lint rule fails on many old lines | The pattern is already common | Fail only changes that add more, and clean up the old uses |

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the brief that prevents misses at the start.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the proof and the sampling that show which mistakes repeat.
- [[wiki/Start Here/The Big Idea Agents Do, You Steer|The Big Idea: Agents Do, You Steer]] gives the overview.

## Sources

- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). The ladder of places for a fix, agents copying existing patterns, a workaround spreading, a lint rule to stop the spread. Paraphrased.
- [Lauren](https://x.com/poteto/status/2111133080526495985), X post on trusting agents' work (2026-10-16) and [X post on a correction skill](https://x.com/poteto/status/2106542593656111276) (2026-10-03). The ordered layers, the prompt to mine past chats and review comments. Paraphrased.
- [Lauren](https://github.com/cursor/plugins/tree/main/pstack)'s correction skill in pstack (version at the time of writing). Classes of mistake, the order of fixes, errors that name the fix, proving a check on a past mistake, the rule table, exceptions with a reason and expiry. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), [live Q&A](https://www.youtube.com/watch?v=MN9dGgmLyso) (2026-10-02, transcript). One-off versus a repeat across agents, mining past chats for the times you intervened. Paraphrased.
- Grok Bot Galaxy event, day 1 (2026-09-15, community transcript). Moving a prompt you keep repeating into a playbook or another bot. Paraphrased.

## Open questions

Does the ladder have four rungs or five? The 2026-10-16 post lists four, while the talk says five pieces but clearly names four.

What stops an agent from loosening a lint rule or deleting a failing test? One reader asked this and had no answer in what we read, and the correction skill only requires a reason, an expiry date and a human's approval for exceptions.

How many repeats justify a fix? The correction skill counts a class at two, and the Q&A only says several agents.

Does the method fit teams that do not own their code, such as a bot setup with no codebase? No source says.
