---
title: "Make a codebase agents can't easily mess up"
type: guide
section: "Working with Agents"
status: seed
description: "Arrange your code and tools so the easy path for an agent is the right one: keep the codebase worth copying, give each pattern one paved path, enforce boundaries in code, and give agents tools instead of letting them improvise."
created: 2026-10-20
updated: 2026-10-20
effort: ongoing
needs: a codebase you can change
cost_note: no
aliases:
  - "Software That Agents Can Work With"
tags:
  - agents
  - codebase
  - architecture
---

# Make a codebase agents can't easily mess up

Agents copy whatever they find in your code and take the shortest path to a working change, so the codebase is the strongest constraint on what they produce. If the shortest path is also the right one, even an agent with little context can open a good pull request. Getting there means keeping the code worth copying, giving each pattern one paved path, enforcing the boundaries in code, and handing agents tools rather than leaving them to improvise.

**Scope.** This is [Lauren](https://x.com/poteto/status/2102050467505430555)'s approach from building Dune, the in-house framework behind Grok Bot, which bans patterns that agents abuse and locks the code down so the easy path is correct. It fits any team whose codebase receives many agent-written pull requests, including ones from designers and product managers.

<div class="callout">

<b>At a glance</b>

1. Treat the codebase as the agents' memory and keep it in a state you would be happy to see copied.
2. Give each common task one conventional way to do it, and put related code in one place.
3. Enforce boundaries in code rather than in review.
4. Ban patterns that agents use to excuse workarounds, as Dune did with code comments.
5. Give agents a tool for routine work instead of letting each session write its own scripts.
6. Make someone the gardener who pulls bad patterns before they spread.

</div>

<figure>
<svg viewBox="0 0 500 453" width="100%" style="max-width:500px" role="img" aria-labelledby="cb-paved-t">
<title id="cb-paved-t">The paved path versus the shortcut. Above, Build the Lever: give agents tools rather than just markdown. Run one command instead of writing a throwaway script. It is attached to the path. An agent with a task reaches a good pull request along the paved path, one conventional way, which is the shortest route. Under it: each feature's code in a single folder. Below, a shortcut or workaround leaves the agent on a dashed route and is crossed out at a wall of three barriers: boundary enforced through the import graph, lint rule, and no code comments. In the corner, a gardener pulls bad patterns before they spread, shown as one bad pattern with three dashed copy boxes spreading behind it.</title>
<rect x="100" y="8" width="300" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="110" y="28" style="font-weight:600">Build the Lever</text><text x="110" y="45">Give agents tools rather than just markdown</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="262" y="74">Run one command instead of</text><text x="262" y="89">writing a throwaway script</text></g>
<line x1="250" y1="58" x2="250" y2="116" style="stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:3 3"/>
<rect x="10" y="116" width="110" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="136" style="font-weight:600">An agent</text><text x="20" y="153">with a task</text></g>
<rect x="380" y="116" width="110" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="390" y="136">Good pull</text><text x="390" y="153">request</text></g>
<rect x="130" y="116" width="240" height="62" rx="8" style="fill:none;stroke:var(--accent,#2a6);stroke-width:3"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="250" y="140" style="font-weight:600">Paved path</text><text x="250" y="157">One conventional way</text></g>
<path d="M120,141.0 L129,141.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="129.0,141.0 120.0,146.0 120.0,136.0" style="fill:var(--mut,#666)"/>
<path d="M370,141.0 L379,141.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="379.0,141.0 370.0,146.0 370.0,136.0" style="fill:var(--mut,#666)"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="250" y="196">Each feature's code in a single folder</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="start"><text x="150" y="222" style="font-weight:600">Shortcut or workaround</text></g>
<rect x="180" y="236" width="300" height="30" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="330.0" y="256">Boundary enforced through the import graph</text></g>
<rect x="180" y="276" width="300" height="30" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="330.0" y="296">Lint rule</text></g>
<rect x="180" y="316" width="300" height="30" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="330.0" y="336">No code comments</text></g>
<path d="M65,166 L65,251 L140,251" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<path d="M140,251 L170,251" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="170.0,251.0 161.0,256.0 161.0,246.0" style="fill:var(--mut,#666)"/>
<path d="M160,234 L176,268 M176,234 L160,268" style="fill:none;stroke:var(--ink,currentColor);stroke-width:2"/>
<line x1="174" y1="236" x2="174" y2="346" style="stroke:var(--ink,currentColor);stroke-width:3"/>
<rect x="10" y="376" width="160" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="396" style="font-weight:600">Gardener</text><text x="20" y="413">Pulls bad patterns</text><text x="20" y="430">before they spread</text></g>
<path d="M170,409.5 L199,409.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="199.0,409.5 190.0,414.5 190.0,404.5" style="fill:var(--mut,#666)"/>
<rect x="200" y="394.5" width="90" height="30" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="245.0" y="414">Bad pattern</text></g>
<rect x="310" y="390.5" width="50" height="24" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="335.0" y="408">copy</text></g>
<rect x="370" y="398.5" width="50" height="24" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="395.0" y="416">copy</text></g>
<rect x="430" y="390.5" width="50" height="24" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="455.0" y="408">copy</text></g>
<path d="M290,409.5 L305,409.5" style="stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:3 3"/>
</svg>
<figcaption>The paved path versus the shortcut. The right way is also the shortest, and the shortcut is blocked in code.</figcaption>
</figure>

## Why it works

[Lauren](https://x.com/poteto/status/2102050467505430555) calls the codebase the best form of memory, because agents extend whatever patterns they see in their context and rarely refactor along the way. Good patterns spread that way, and so do bad ones: one small workaround, or a comment explaining it, can become the default for every agent within days or weeks. Since agents also love taking shortcuts, she asks what happens if the framework is designed so that the shortcut is the right path. A locked-down codebase can feel annoying to humans, but it lets a contributor with little context, or an agent with little reasoning, write good code by default.

## The method

1. **Keep the code worth copying.** Start by deleting the tech debt you already have, since agents will extend it otherwise. [Lauren](https://x.com/poteto/status/2102050467505430555)'s test is whether you would be happy if an agent copied any part of the codebase, and in [her post on slop](https://x.com/poteto/status/2109699980248408574) every nit, mistake and bad pattern you notice from agents should become a constraint.
2. **Give each pattern one paved path.** There should be one conventional way to do common things, so that agents don't need to guess. Dune puts each feature's code in a single folder and has firm conventions about where code lives and how it is imported.
3. **Enforce boundaries in code.** In the code editor whose agent window inspired Dune, slow code sometimes got imported into the thread that draws the interface. Dune now enforces that boundary in code through the import graph, because the interface thread must keep every task under the 16 milliseconds each frame gets at 60 frames per second. Lessons that used to live in a style guide or in review comments belong in the codebase itself.
4. **Ban the patterns that excuse workarounds.** Dune bans code comments because agents were using them to justify a band-aid instead of solving the actual problem, and other agents then copied the comment and the workaround together.
5. **Give agents tools rather than notes.** pstack, [Lauren](https://x.com/poteto/status/2094457600259842065)'s skill set, has a principle called Build the Lever: give agents tools rather than just markdown. For verification, that means a small command-line tool, so agents run one command instead of writing a throwaway script. She wants that tool to have these properties:
   1. Commands that are easy to combine.
   2. A dry-run option for anything destructive.
   3. Subcommands that reveal features gradually.
   4. Rich help text and machine-readable output.
   5. Error messages that tell the agent what to do instead.
6. **Appoint a gardener.** Someone has to notice bad patterns creeping in and stop them early. When one appears, the instinct should be to write a lint rule against it, which stops the bleeding even if the cleanup comes later. [Her post on slop](https://x.com/poteto/status/2109699980248408574) goes further: use type systems and frameworks that shrink the space of designs an agent can choose from, so that the bad pattern becomes impossible.

### A prompt to copy

> Look through this codebase for patterns an agent would copy that we don't want copied: workarounds, comments that excuse a workaround, and tasks that can be done more than one way. For each, propose the one paved path, the lint rule or type change that would block the bad version, and the old code to delete.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| The same workaround shows up across many pull requests | An existing pattern is spreading | Delete it and block it with a lint rule |
| Agents do one task several different ways | There is no paved path | Choose one way and enforce it |
| A comment explains why the real fix was skipped | The agent is excusing a band-aid | Remove the comment and fix the cause |
| Agents write their own scripts to run the app | They have no shared tool | Build one command-line tool for it |

A codebase that agents can't easily mess up is one where copying what is already there produces good work, so each cleanup you make teaches every future agent.

## Related pages

- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers where a single correction belongs, from code to lint rule to skill.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the verification tool and the feature map.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers why a locked-down codebase lets you run more agents.

## Sources

- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping 2,500 pull requests (posted 2026-09-21, captions). The codebase as memory, the easy path as the right path, Dune's principles, banning comments, the frame budget, the gardener. Paraphrased.
- [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1968), workshop talk (2026-08-12, auto-captions via synthesis). The case for constraining greenfield code early or rewriting it (used in Open questions). Paraphrased.
- [Lauren](https://x.com/poteto/status/2109699980248408574), X post on slop (2026-10-12). The codebase is memory, every bad pattern becomes a constraint, and making anti-patterns categorically impossible. Paraphrased.
- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). Tools instead of written guidance, and the properties of an agent-friendly command-line tool. Paraphrased.

## Open questions

How should a team choose its gardener, and how much of their time does the role take? The sources name the role but give no detail.

How do you get from a codebase that grew without constraints to a locked-down one: rebuild, or add lint rules first? [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1968) says vibe-coded greenfield apps should be constrained early or rebuilt, and the talk on 2,500 pull requests says a lint rule stops the bleeding before cleanup. The Aug 12 talk describes refactoring all of Grok Bot to the new architecture over more than 600 pull requests, but none of them gives a step-by-step migration path.

Banning comments worked for Dune. The sources don't say whether it suits other codebases.
