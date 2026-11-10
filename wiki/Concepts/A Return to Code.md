---
title: "A Return to Code"
type: concept
status: draft
created: 2026-05-06
updated: 2026-11-10
method: fresh-from-notes-2026-11-10
description: "Coding agents made custom software cheap enough to build for one person, while the person still has to know what they want, catch mistakes and decide when to stop."
tags:
  - llm
  - coding
  - agents
  - software
wedge_reviewed: false
---

> Not yet reviewed by Wedge.

# A Return to Code

A return to code is what happens when coding agents make custom software cheap enough to build for one person, one job or one afternoon. Around December 2025, those agents reached a point where they could stay on a task, build an application from end to end and work through thorny problems. They run in a text command line, execute shell commands, read files and keep editing when something fails. The person still has to know what they want, catch wrong assumptions and decide when to stop.

That cheapness is also where the loop breaks down. Once a codebase grows past what the model can hold at once, the agent starts to guess. It patches the wrong place, or removes a feature and calls the bug fixed. Agents try to please, so they will agree that a change was a hack even when it was not. Code still has an advantage over prose here, because a program has to compile, run and pass a test. Domains with lots of examples and an easy way to check the output, such as code and mathematics, are where these models do best.

## What agents made cheaper

Starting a program used to take a lot of setup. A person had to hook services together, learn the jargon of hosting tools and hold a pile of commands in mind before any of the fun part began. Agents lowered that barrier because they talk in ordinary language and translate into the programming dialects and system commands underneath. They forgive spelling mistakes and uneven wording. A high-level grasp of how computers, networks and programs fit together is enough to go a long way.

The agents that crossed the line were not paste-in assistants. They live in a command line, which suits them because their training was text. Underneath they connect to a Unix-like system. From there they can run commands, read and write files, chain small tools together, schedule later work and start more tasks as needed. Give them a description and they can return a working application, then improve it from there.

## Small programs for one person

A loop like that makes a personal collection of apps possible. One example is a workout tracker built to one person's log. It added graphs, strength scores drawn from papers, a body diagram and a link to heart-rate data, and it landed in a private app store on their phone. Broad, carefully tuned products still win when they already cover the use. The new opening is for something custom, private or too narrow for anyone else to have built.

Knowing what you want is the hard part. With a team, even a person in charge makes compromises, because asking an engineer to nudge the same icon back and forth on gut feel wears the team down. An agent does not get tired of that, so the result can stay true to one person's vision. Early prototypes may be weakly structured, hard to scale and open to security holes. Shipping to many users still calls for a real team and often a rewrite. Experimenting, trying a design and getting a first version in front of someone has no better path right now.

The same cheapness also changes who can build. Most people will still treat computers as a closed box. For people who are creative, self-motivated and articulate, and who can hold a clear picture of the thing they want, nobody now stands between them and a prototype. The share of people who might build an app moves from about 0.1 percent of the population toward one, two or three percent.

## Why code shows the errors

Models got unusually good at code because the field gives them a huge pile of examples and an easy way to see whether a result worked. The code has to compile and run. A pre-written test can say whether it did the job. Mathematics is similar, with many solved problems and a checkable answer. Self-driving has the same pair of plenty of data and a clear test.

Writing is different. A model can produce endless essays, and no simple test says which ones are good. Grading them by hand is only as strong as the taste of the people doing the grading. High-taste feedback is harder to collect than it looks, and coding recently got more of it as skilled engineers began using the tools and feeding their sense of quality back in.

## What the person still does

The operator still names the behavior, holds onto taste, catches bad assumptions and decides when a result is good enough to keep. Clear direction matters more than it did, because building without it is now so easy.

As the codebase grows, that guidance becomes the main job. Today's models hold about a million tokens of context, which will look small later. Once the project no longer fits, they compact what they remember, lose the plot, guess, fix the same bug several times or apply a local patch when the real problem sits somewhere else. They will sometimes "fix" a bug by deleting the feature that triggered it. The operator has to stop them and send them back to the design.

The models are eager to please. If the operator already leans toward an answer, the models will usually find their way there. They rarely contradict a person who sounds sure. Tell one that a change was a hack, and it will agree, even when the change was sound. Several copies of the same model talking to one another do not solve this well, because they share a brain and a training set. Using more than one model on a change, the way a second reader reviews a patch, helps more than asking one model to debate itself.

Different models also have different strengths. One may meet the user at their level and present ideas visually. Another may be stronger when the question is really a search. Another may be less filtered, and stronger on news or hard technical problems. The person chooses which one to trust for the job, then remains the last gate on what ships.

## Where the loop fails

Cheap building creates its own failure modes. A throwaway prototype gets treated as something that can face the world. An operator may trust an agent as if it could see the whole project, when its memory holds only part of it.

There is a market version of the same fact. If the only advantage a company has is software that other people do not know how to build, that advantage is shrinking. Someone can assemble the same thing today, and the agents themselves are improving quickly. Hardware, network effects and new models are firmer ground. The individual case is simpler. For a person writing programs again after a long gap, the useful result is still a program that runs. It can be thrown away after it has done its job.

## Open questions

- How does a person tell a cheap prototype from something that now needs real engineering?
- How does an agent that wants to please change the way its operator has to check its work?
- How does a codebase that no longer fits in the model's memory change who has to hold the design?

## Sources

- Naval Ravikant and Nivi, "A Return to Code", 2026-04-29, <https://nav.al/code>. Paraphrased.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the professional quality system around that loop. The two stay separate.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the broader frame, software as English plus models.
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: what the surrounding stack has to look like for agents to run commands and edit files.
