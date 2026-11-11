---
title: "Agentic Engineering"
type: hub
status: developing
created: 2026-05-02
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
prose-model: opus
written-by: grok
model: grok
source-count: 10
description: "Best-practices hub for building with agents while keeping the engineering standard: quality, specs, verification, architecture, and human responsibility. Vibe coding lets more people build software at all. Agentic engineering raises the quality that skilled builders can reach with agents. Doctrine layer: Agentic Engineering, Condensed."
tags:
  - llm
  - agents
  - engineering
  - software-3
  - ai-workflows
  - agentic-engineering
wedge_reviewed: false
---

# Agentic Engineering

> Not yet reviewed by Wedge.

Agentic engineering is building software with AI agents while holding the work to the professional standard that applied before agents. Vibe coding lets almost anyone produce software. Agentic engineering asks how to go faster without letting quality, security or responsibility slip. The agents are powerful but uneven. They do well where answers can be checked, such as code and math, and stumble on simple common sense. So the person keeps the parts agents handle badly: the spec, the design, the taste and the oversight. Agents fill in the details. What the person cannot hand off is understanding, because directing the work well depends on knowing what is being built and why.

<figure>
<svg viewBox="0 0 520 224" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ae-split-t">
<title id="ae-split-t">So the person keeps the parts agents handle badly: the spec, the design, the taste and the oversight. Agents fill in the details.</title>
<rect x="0.5" y="0.5" width="519" height="223" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="190" height="122" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="115" y="86" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">Agents fill in the details</text>
<rect x="224" y="20" width="276" height="122" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="362" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">the person keeps</text>
<rect x="244" y="64" width="81.76" height="26" rx="13.0" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="284.88" y="81.5" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the spec</text>
<rect x="333.76" y="64" width="95.2" height="26" rx="13.0" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="381.36" y="81.5" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the design</text>
<rect x="244" y="98" width="88.48" height="26" rx="13.0" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="288.24" y="115.5" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the taste</text>
<rect x="340.48" y="98" width="115.36" height="26" rx="13.0" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="398.16" y="115.5" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the oversight</text>
<rect x="20" y="156" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="260" y="186" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">What the person cannot hand off is understanding</text>
</svg>
</figure>

## What the collaborator is

An agent is closer to a capable intern than to a colleague. It recalls details very well and can carry out large tasks, yet it makes mistakes no experienced engineer would. One builder found an agent linking customer payments to accounts by matching email addresses across two services. A user could pay with one address and sign in with another, so the credits would never attach. The fix was a single unique user ID, the kind of design call the person has to own.

<figure>
<svg viewBox="0 0 520 144" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ae-jagged-t">
<title id="ae-jagged-t">The capability is jagged. Models are trained heavily on tasks whose results can be checked automatically, so they peak in those areas and lag elsewhere.</title>
<rect x="0.5" y="0.5" width="519" height="143" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="230" height="104" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="135" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">do well where answers</text><text x="135" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">can be checked</text><text x="135" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">such as code and math</text>
<rect x="270" y="20" width="230" height="104" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="385" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">stumble on simple</text><text x="385" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">common sense</text><text x="385" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">advise walking to a car wash</text><text x="385" y="106" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">50 meters away</text>
</svg>
</figure>

The capability is jagged. Models are trained heavily on tasks whose results can be checked automatically, so they peak in those areas and lag elsewhere. A current model can refactor a large codebase, then advise walking to a car wash 50 meters away when the point is to bring the car. Strength also depends on what the labs chose to train on. One model's chess improved sharply because more chess data went into training, not because it reasoned better overall.

These systems are statistical, not animal. Pressure or frustration does not change how they perform. The useful stance is steady suspicion, learning by use which tasks fall inside their strengths and which fall outside.

## Spec, standard, layer below, bounded jobs

The person owns the spec. That means working with the agent on a detailed plan, close to full documentation, and then letting the agent write the code. The person stays in charge of the top-level structure and the review.

The standard does not drop. Agentic engineering still forbids shipping security holes, and the engineer still answers for the software. The difference is pace, and the goal is to raise it without lowering the bar.

The layer underneath still matters. A person can forget exact API details, since the agent remembers them. Yet they still need to understand what the code does underneath, for instance whether an operation copies memory or reuses it. Without that, they cannot spot when the agent picks the wasteful path.

Jobs go best when they sit inside what the agent was trained on. An agent asked again and again to simplify a codebase may keep failing when the request falls outside its training. Pushing it there feels slow and forced. Tasks inside its strengths go much faster.

## What can be verified, and what speed is not

Traditional software automates what can be written as code. The current models automate what can be verified, because their training rewards checkable results. Any domain where results can be checked can be improved with enough training effort, and even writing could be judged by a panel of models. Verifiability is therefore the main guide to where agents will be strong.

Speed is not the same as quality. Code from agents often works while being bloated and full of copy-paste and fragile abstractions. Those flaws are not rewarded or punished in training, so they persist. Fast output still needs a person who cares about design. The best practitioners seem to gain far more than the old ten-times-faster engineer did, but that gain counts only when the quality bar holds.

## Context, agent-facing tools, the human, multi-model review

Context is the lever. Programming now increasingly means deciding what goes into the model's context window, so the text handed to an agent is effectively the program. An install step can be a block of instructions pasted into an agent. The agent then reads the machine, adapts to it and debugs as it goes, instead of running a brittle script.

Tools and documents should be written for agents. Most documentation still tells a human what to click. Agent-native infrastructure would describe itself to agents first, so that a single prompt could build and deploy an app without the person configuring each service by hand.

The human remains the bottleneck for understanding. Thinking can be handed to a model, but understanding cannot. A person who does not know what is being built or why cannot direct agents well. A personal knowledge base that a model helps query is one way to build that understanding.

Many agents can also be set against one build. One proposed hiring test works this way. The candidate builds a large, secure project, then a fleet of agents tries to break it, and the build should survive. Getting the most from tools also means investing in your own setup, much as engineers once tuned their editors.

## What is actually known

Most of the guidance here comes from one experienced practitioner's account, not from measured studies. The points about jagged skill and verifiability rest on his reading of how models are trained. He describes the animals-versus-ghosts framing as partly philosophy. The gain beyond ten times is his impression, not a measurement. A transition in late 2025 that made long agent workflows reliable is likewise a personal observation.

## Open questions

- How do I measure whether agents are actually speeding up my work without lowering its quality?
- How do I find out, for a new task, whether it sits inside or outside an agent's strengths?
- How detailed does a spec need to be before handing a job to an agent?
- How do I keep enough understanding of the layer underneath as more detail is handed off?

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), 2026-04-29.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: deciding what goes into the model's window
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: operating with a collaborator that has no memory
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: when to let a model think longer
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: tools and docs written for agents first
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: why understanding stays with the person
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: faster work still needs direction
- [[wiki/Red Team/Red Teaming|Red Teaming]]: testing output before trusting it
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: one working setup for agent-run coding
