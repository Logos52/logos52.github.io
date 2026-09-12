---
title: "The AI Industrial Revolution"
type: concept
status: seed
created: 2026-06-15
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - agents
  - agentic-engineering
  - leverage
  - naval
---

# The AI Industrial Revolution

On 2 June 2026, four people from the software and hardware frontier said that an engineer is now judged on the factory. The factory is the setup that keeps producing the next pieces of work after the current one ships. Before agents, an engineer was judged on the artifact, meaning the one piece of work delivered. Once agents write the implementation, the score moves off any single delivered piece and onto the setup that produces the next ones.

Three of the four were founders of frontier companies, one each from a software platform, an aerospace company, and a science company. The fourth was the host. They spoke for an hour about their own work. What they said is a report from that day about their own companies. None of it was measured across the industry.

## Core takeaways

- Once agents write the implementation, an engineer is judged on the setup that keeps producing work. The score no longer sits on any single delivered piece.
- Where a result can be checked, give one problem to several models, measure the human time saved, and keep the run that works. One pass through a frontier model costs less than one hour of a human.
- Models return routes and trade-offs at a principal engineer's level. They also state estimates with confidence when the estimate has no basis. The human's job becomes checking the assembled system and signing off on it.
- Repeated moves get extracted into reusable skills. Where checks are expensive, the smartest model is still the one to use. Cheaper models are enough where checks are cheap.
- The software seat said higher output leads to more hiring. The work that stays with humans is work outside what the model was trained on, done with intent, plus judgment that a named person answers for.
- The panel was three founders and a host, and each benefits if this account is believed. Most generated output is slop, and a product that is cheap to start is costly to keep alive over a thousand days.

## What the engineer's job becomes

In idea work, the panel claimed the gap between one engineer and another is now a hundred times or a thousand times. Their reason is that output in idea work was never linear. That multiplier is what the panel said on that day. It is not a finding from labor economics.

Where a result can be checked, the panel's method is to spend tokens in order to save time. They call it waste tokens, save time. Give the same problem to several models. Measure the human time each run saved. Keep the run that works. One pass through a frontier model still costs less than one hour of a human. The method fails where checking the result is expensive. It also works less well at the creative frontier, where the work has to stay close to the model. The names of the models in that lineup will go out of date. The method itself stays usable. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] records that tactic with its date, together with the other half of the same tactic, writing specs as the source code.

## Checking what the model returns

Models now return possible routes and the trade-offs between them at the level a principal engineer would. Models also state estimates with confidence when the estimate has no basis. A model will refuse a bad design call. The panel's example: asked to put high-cardinality telemetry in one store, a model will say to consider another store. The same model will then invent a schedule and present it as reliable. What overrides the model is the human's taste and judgment. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] already holds taste and judgment as the part of the job that lasts.

Because the human overrides the model, the human's role becomes verifier. The verifier signs off in one of two ways. Either the verifier understands the consequences of the change, or the verifier has written a test harness for it. The standard for a pull request is no longer that a human has read every line. The standard is that the consequences are understood and a person has signed off, or that simulations and type-checkers back the change. The real cost comes over the thousand days after the change: security, tests, running in production, and the will to keep spending tokens once the demo already looks finished. The panel said the same shift applies to lawyers and operators. In each case the work moves to checking the assembled system and putting a name under it.

## Teaching the agent repeated moves

Training the agent is the other half of the job, the half the panel called culture. Repeated moves get extracted into reusable skills. [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] is built for that extraction. Where checking a result is expensive, the smartest model is still the one to use. Cheaper models are enough where checks are cheap. [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Thinking Models]] refines that choice by cost and latency. One speaker described the mix of model traffic through his company's gateway. That description is a remark from the panel. It is not a published data series.

## The same method in hardware

The same method has moved into hardware work. Software engineers build the architectures. Domain experts then write their own pieces on top of those blocks and reuse what already exists. [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]] covers that move in depth.

The aerospace seat gave numbers from his own company. A jet engine has on the order of a thousand blades. The old unit of work was one engineer spending one day on one blade for one analysis. Two engineers can now iterate on an entire engine. Those are his numbers from that day. They are not an industry statistic.

The same company ran a week in which everyone, from the receptionist up, had to build something with the new tools. They said most of what came back had a real effect on the company's work. Few of the results were toys.

One seat reported on that same June day that the long stretches of debugging with no end in sight are gone. A blocker that used to take a week now clears in an afternoon. An older lesson said writing software is supposed to feel miserable, and that the misery is how an engineer learns. That lesson stopped matching their days. The software seat described existing infrastructure as a token cache the agent forks from. In plain terms, the agent copies work that already exists and builds on it instead of generating it again.

## Who gets the gains

The open argument is whether the return goes to intelligence or to agency, and people on both sides were in the room. One seat sees the split moving from seventy to thirty in favor of intelligence toward a split where agency dominates. The other seat says the split is ninety-nine to one in favor of intelligence, because agents now supply the agency. The two agree on who captures the return: the person who opens the model and asks it what to build.

The first-order view says most roles vanish. The exaggerated version of that view says nine hundred and ninety-eight roles out of a thousand go. The software seat gave the second-order view, which reaches the opposite result. In his telling, higher output leads to hiring more crews. Roles are not deleted. Tiny groups, and a rush of new companies, ship what used to need a department. Jargon and credentials no longer keep outsiders out of a field. The barrier of twenty years in a field before a person can contribute falls. Generalists who think across domains gain. Strong operators become more worth hiring.

The work that stays with humans is work outside what the model was trained on, done with intent, plus judgment that a named person answers for. [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] sets the ceiling on that remainder. [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] grades the same split as the AI axis. In 2025, a public flood of images in one studio's style put that style inside what models are trained on, and its value as art fell to nothing. The panel named that flood as their example of what happens when a distinctive thing becomes cheap to sample.

The leverage of the factory inside one codebase is the same pattern [[wiki/Concepts/The Age Of Nonlinear Returns|The Age Of Nonlinear Returns]] already names.

## What happens to planning

One seat ignored the standing instruction to always use plan mode. His bet is that the model improves faster than a person can learn the tooling around it. The other seat said models now plan on their own.

Two kinds of planning come apart here. Planning as ritual means a human writes the route by hand. That kind loses its value. Planning as spec means stating the problem, the success criteria, the scope, and the trade-off wanted. That kind stays useful. The split is still open, because a rule to write the plan first is still in force. The prediction that can be tested is this: drafting the plan moves to the model, and ownership of intent and acceptance criteria stays with the human.

## Who was on the panel

The panel was three founders of frontier companies and a host. Each of them spoke in a way that favors his own business or position. One sells the agent cloud and the building blocks. One is an AGI maximalist. The panel was selected for people for whom this is already working.

The same software seat said most generated output is slop, in large amounts. Every generated website now looks identical. A product that is cheap to start becomes costly to keep alive a thousand days later.

The host conceded three things. There is no reliable way to know when a model is wrong. Always choosing the smartest model pushes the market toward an oligopoly, a market with only a few suppliers. Working as human plus AI is a bet on a period that will end.

## How much the hour is worth

The hour is a report from people who already work this way. It should be trusted only as far as it matches what this vault has already run.

The main claim of the hour is that an engineer is now judged on the factory. How much that claim is worth depends on three things: the amount of slop, the cost of keeping a product alive over a thousand days, and the panel's own interest in the claim. Weighed against those three, the hour is a useful report from June 2026. It does not show that the same holds outside those companies.

## How to practice this

1. Pick a task whose result you can check. Give the same problem to several models and keep the run that works. Notice how much of your own time the winning run saved.
2. Ask a model for the routes and trade-offs on one design decision and for a schedule. Check the schedule against what you know. Notice whether the model invented it with the same confidence it used on the routes.
3. Before you sign off on a change an agent wrote, write down its consequences or write a test harness. Notice whether you can put your name under the change without reading every line.
4. Write down one move you repeat in your work and turn it into a reusable skill. Notice which of your checks are cheap enough that a cheaper model is enough.
5. For your next plan, write only the problem, the success criteria, the scope, and the trade-off you want. Let the model draft the route. Notice whether a route you wrote by hand would have added anything.
6. Take a product you started cheaply and list what it will cost over the next thousand days: security, tests, production. Notice whether the demo looking finished has stopped you spending tokens on it.

## Related pages

- [[wiki/Concepts/The Age Of Nonlinear Returns|The Age Of Nonlinear Returns]]: factory leverage is this frame inside a codebase
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: where waste-tokens-save-time is filed as a dated tactic
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: taste and judgment as the durable half; the hub this field report strengthens
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]], skill extraction: capture repeated moves into reusable skills
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: hardware crossing; domain experts on engineer-built architectures
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]]: intelligence-versus-agency and the out-of-distribution ceiling
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: always-want-the-smartest-model, refined by cost and latency
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: adjacent stack page
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: verifier role and intelligence-versus-agency, graded as the AI axis
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: sibling field report from the same host
- [[wiki/Concepts/A Return to Code|A Return to Code]]: sibling field report from the same host
- [[wiki/Concepts/Nothing Ever Happens Is Over|Nothing Ever Happens Is Over]]: sibling field report from the same host
- [[wiki/Concepts/The AI Productivity Curve|The AI Productivity Curve]]: whether the capex here is showing up in the productivity statistics
- [[wiki/Concepts/Riding the AGI|Riding the AGI]], sibling field report: commoditization stack, time-contracted advantage
- [[wiki/Money/America's Industrial Revival - The Freight Signal|America's Industrial Revival]]: macro demand-side read on the same AI-capex stimulus

## Open questions

Where is the line between planning-as-spec and planning-as-ritual, while write-the-plan-first is still mandated?

On which tasks is verification actually cheap?

What in this workflow is generativity to hand off, and what is judgment to keep?

Which repeated moves in vault maintenance become skills, if train-the-agent is applied here?

## Sources

Naval Ravikant, Nivi, Guillermo Rauch, Blake Scholl, and Michael Hodak. "The AI Industrial Revolution." *Naval*, 2 June 2026. https://nav.al/industrial. Roundtable: software-platform seat (Vercel), aerospace seat (Boom), science seat (Science), and host. The 2025 studio-style image flood they named as a referent is the public GPT-4o event of that year.
