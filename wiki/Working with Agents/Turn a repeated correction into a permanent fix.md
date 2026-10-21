---
title: "Turn a repeated correction into a permanent fix"
type: technique
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
draft: true
---

# Turn a repeated correction into a permanent fix

When an agent repeats a mistake, the setup is inviting it. The fix belongs in the code and its checks, not in another message. This page shows how to choose where a fix should live so the mistake stops costing you attention.

**Scope.** This is [Lauren](https://x.com/poteto/status/2102050467505430555)'s method for keeping a codebase safe for agents, drawn from the code editor and the agent app her team builds, and from her correction skill. It fits a codebase you can change and run checks on.

<div class="callout">

<b>At a glance</b>

- Fix a mistake that repeats, not the single reply.
- Pick the strongest of four places that works, from the code itself down to human review.
- Mine your past chats and review comments to find the repeats.
- Prove each new check fails on a real past mistake, and keep a table of what enforces each rule.

</div>

<figure>
<svg viewBox="0 0 480 426" width="100%" style="max-width:480px" role="img" aria-labelledby="cr-ladder-t">
<title id="cr-ladder-t">The four places for a fix, from the strongest rung to the weakest. One, make the mistake impossible in the code, which needs no memory. Two, add an automatic check, which is enforced on every change. Three, rules and skills for judgment calls, which depend on the agent reading them. Four, a style guide and human review, which depend on a reviewer.</title>
<defs><marker id="cr-ladder-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="380" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="200.0" y="42" style="font-weight:600">1. Make the mistake impossible</text><text x="200.0" y="62">in the code</text><text x="200.0" y="82">Needs no memory</text></g>
<rect x="10" y="114" width="380" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="200.0" y="156" style="font-weight:600">2. Add an automatic check</text><text x="200.0" y="176">Is enforced on every change</text></g>
<rect x="10" y="218" width="380" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="200.0" y="250" style="font-weight:600">3. Rules and skills, for judgment calls</text><text x="200.0" y="270">Depend on the agent reading them,</text><text x="200.0" y="290">and the person steering may ignore them</text></g>
<rect x="10" y="322" width="380" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="200.0" y="354" style="font-weight:600">4. Style guide and human review</text><text x="200.0" y="374">Depends on a reviewer. At the rate agents</text><text x="200.0" y="394">open pull requests, no one can read every line</text></g>
<path d="M440,368.0 L440,56.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="440.0,56.0 445.0,65.0 435.0,65.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="440" y="390.0">stronger</text><text x="440" y="406.0">rung</text></g>
</svg>
<figcaption>The four places for a fix. The stronger the rung, the less attention each repeat costs you.</figcaption>
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
<svg viewBox="0 0 530 366" width="100%" style="max-width:530px" role="img" aria-labelledby="cr-method-t">
<title id="cr-method-t">The method in four steps: separate the repeat from the one-off and find the repeats, try to make the mistake impossible in the code, if the bad code still compiles add an automatic check, and use rules and skills only for judgment calls. If you correct the same mistake again and its rule has nothing enforcing it, move it up a rung in the same change.</title>
<defs><marker id="cr-method-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mut,#666)"/></marker></defs>
<rect x="10" y="10" width="310" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="165.0" y="38">1. Separate the repeat from the one-off,</text><text x="165.0" y="58">then find the repeats</text></g>
<rect x="10" y="104" width="310" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="165.0" y="132">2. Try to make the mistake</text><text x="165.0" y="152">impossible in the code</text></g>
<rect x="10" y="198" width="310" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="165.0" y="226">3. If the bad code still compiles,</text><text x="165.0" y="246">add an automatic check</text></g>
<rect x="10" y="292" width="310" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:14px" text-anchor="middle"><text x="165.0" y="320">4. Use rules and skills</text><text x="165.0" y="340">only for judgment calls</text></g>
<path d="M165,75 L165,102" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="165.0,102.0 160.0,93.0 170.0,93.0" style="fill:var(--mut,#666)"/>
<path d="M165,169 L165,196" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="165.0,196.0 160.0,187.0 170.0,187.0" style="fill:var(--mut,#666)"/>
<path d="M165,263 L165,290" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="165.0,290.0 160.0,281.0 170.0,281.0" style="fill:var(--mut,#666)"/>
<path d="M321,324.0 L346,324.0 L346,230.0 L322,230.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="322.0,230.0 331.0,225.0 331.0,235.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px"><text x="356" y="250.0">If you correct the same</text><text x="356" y="266.0">mistake again and its</text><text x="356" y="282.0">rule has nothing</text><text x="356" y="298.0">enforcing it, move it</text><text x="356" y="314.0">up a rung in the same</text><text x="356" y="330.0">change.</text></g>
</svg>
<figcaption>The method in order.</figcaption>
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
