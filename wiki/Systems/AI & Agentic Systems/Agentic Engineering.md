---
title: "Agentic Engineering"
type: hub
status: stable
created: 2026-05-02
updated: 2026-11-22
source-count: 12
description: "Building software with agents while you keep the spec, design, taste, and oversight: jagged models, verifiable work, agent-native tools, and understanding you cannot hand off."
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

Agentic engineering is building software with AI agents while holding the work to the professional standard that applied before agents. Vibe coding lets almost anyone produce software. Agentic engineering asks how to go faster without letting quality, security, or responsibility slip. The agents are powerful but uneven. They do well where answers can be checked, such as code and math, and stumble on simple common sense. You keep the spec, the design, the taste, and the oversight. Agents fill in the details. What you cannot hand off is understanding, because directing the work well depends on knowing what is being built and why.

Software 3.0 treats a block of instructions in the context window as the program. Install steps that used to be brittle scripts become text an agent can read against the real machine. That only works if you still understand the layer underneath. You can forget whether an API argument is called `dim` or `axis`, but you need to know whether two views share storage so you do not copy memory you did not mean to copy.

## Jagged capability and verifiable work

The capability is jagged. Training rewards checkable results, so models spike in code and math and lag where a check is harder. A model can refactor a large codebase, then advise walking to a car wash fifty meters away when the point is to bring the car. These systems are statistical, not animal. Steady suspicion beats frustration or praise.

Traditional software automates what can be written as code. Current models automate what can be verified. Any domain where results can be checked can be improved with enough training effort. Verifiability is the main guide to where agents will be strong. Speed is not quality. Agent code often works while bloated. Fast output still needs a person who cares about design.

One experienced practitioner describes agents as capable interns. They recall details well and can carry out large tasks, yet they make mistakes no experienced engineer would. One builder found an agent linking customer payments to accounts by matching email addresses across two services. A user could pay with one address and sign in with another, so credits never attached. The fix was a single unique user ID, the kind of design call only a person who understands the system makes.

## What stays with the person

Higher-order generativity belongs with the model: drafting, filling detail, remembering API names. Higher-order judgment stays with the person: whether the design makes sense, whether the spec matches the goal, whether the output is safe to ship. The human versus machine lens is not which tasks take longer. It is which parts of a skill must stay under human oversight because the check is social, ethical, or architectural.

You can outsource thinking without outsourcing understanding. Someone still has to know what the work is for, why it is worth doing, and how to steer the agents, and that knowledge has to get into one human head. A personal wiki an agent helps query is one way to raise understanding under that limit.

Automatic work is what an agent runs while you are away. Deliberate work is what you do in the thread: spec, review, taste calls. Both matter. Long deliberate sessions set the standard automatic jobs must meet.

## Custom software and agent-native tools

Agents cut the cost of small custom programs. What once needed a team for a week may fit in an afternoon with a clear spec and checks. The person still owns the reason the program exists and the test that says it works. Code remains a strong medium because wrong behavior shows up in running output.

Agent-native infrastructure means tools and docs written for agents first. Most documentation still tells a human what to click. Agent-native design describes services, credentials, and deploy steps in text an agent can act on without a click path. This vault keeps operating rules in markdown agents can read directly rather than hiding them in GUI-only consoles.

A language model is an engine on the computer you already have, like a motorcycle for the mind. Speed without direction is still speed in the wrong place. The metaphor is not that the model thinks for you. It is that you still steer.

## Global workspace as a mechanism note

Global workspace theory is a useful sanity check, not a product architecture. A model can report what its attention lands on in a pass, not everything held in parallel. Treat a long context as a working surface with limits, not as perfect recall. Context engineering is the separate page that names how you load that surface.

## Builder rules worth stealing

Eric Jorgenson's notebook on Elon Musk's public operating rules is one builder's harvest, not a life to copy. The durable bits for agentic work are familiar: communicate directly, delete waste, work near the constraint, and tie purpose to usefulness beyond the self. Teams get faster when they name the constraint instead of celebrating motion.

## What is actually known

Most guidance here comes from one practitioner's account and from this vault's operating experience, not from controlled studies. Claims about jagged skill and verifiability rest on his reading of how models are trained. Reported gains beyond the old "ten-times engineer" figure are impressions, not measurements.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: the short rule list
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: what goes into the model's window
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]]: no persistent memory as a constraint
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: why understanding stays with you
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: proof from the running app

## Open questions

- How do I measure whether agents speed up my work without lowering its quality?
- How do I tell whether a new task sits inside or outside an agent's strengths?
- How detailed does a spec need to be before handing a job to an agent?

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026, 2026-04-29.
- Naval Ravikant, "A Motorcycle for the Mind", 2026-02-20, nav.al/ai. Paraphrased.
- Eric Jorgenson, *The Book of Elon: A Guide to Purpose and Success*. Book notes, paraphrased.
- This vault's notes on agent-native infrastructure, automatic versus deliberate work, global workspace, and the human capability lens.