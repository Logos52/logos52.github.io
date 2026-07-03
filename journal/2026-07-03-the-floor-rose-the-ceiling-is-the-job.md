---
date: 2026-07-03
draft: false
tags: [blog, ai, agents, software, engineering]
description: "Vibe coding raises the floor of who can build software; the ceiling, correctness, security, and judgment, is what stays a job."
---

# The Floor Rose, the Ceiling Is the Job

For most of software's history, the gate was the code. Wanting a tool and being able to build one were separated by years of learning, so most people who wanted software either bought something close enough or went without. That gate has now mostly fallen. Someone with no programming background can describe an app to an agent and watch a working version appear the same afternoon, and the standard reactions are excitement and dread in some personal ratio.

Both reactions are reading the same event, and naming it precisely takes the drama down. What fell was the floor: the minimum skill needed to make software exist at all. Anyone can build now, the way anyone with a phone can take a photograph. What did not move is the ceiling: whether the thing built is correct, secure, maintainable, and worth building, and photography makes the point by analogy. The camera in every pocket did not produce a world of great photographers. It produced infinite photographs and made the judgment about which ones matter more valuable, not less.

Watching where a floor-built project struggles shows what the ceiling is made of. An agent-written app can work in the demo and mishandle the edge case that arrives in week three; it can store passwords in ways no one should; it can be a fluent implementation of the wrong idea, solving a problem adjacent to the real one. None of those failures announce themselves in the moment of building, which is exactly what makes them ceiling problems: catching them takes someone who knows what correct looks like, and that knowledge was never in the prompt.

So the human role has not shrunk; it has moved up the stack. The work concentrates in the parts agents don't hold: deciding what is worth building, writing the spec that says what correct means, judging the architecture that will still make sense next year, verifying that what came back does what it claims, and holding enough understanding to steer. Thinking can be outsourced, and the generated options, drafts, and summaries prove it daily. Understanding can't be, because understanding is the thing that evaluates the options.

There is a real price for keeping the ceiling, and the tools themselves apply the pressure. Reviewing generated code is slower than accepting it, writing a spec is slower than typing "build me a...", and the agent's fluency makes skipping both feel safe. The discipline that used to be enforced by the difficulty of writing code now has to be chosen, which is a harder sell precisely because nothing visibly breaks on the day the choosing stops.

The floor will keep rising; each model generation lifts it again, and more people will build more software than at any point in history. What that changes is where the scarce thing lives. When making software was hard, the making was the value. Now that making is cheap, the value has moved to knowing what good looks like, and that knowledge, unlike the floor, rises only the old way.
