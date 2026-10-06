---
title: "A Return to Code"
type: concept
status: developing
created: 2026-05-06
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 1
description: "Why coding agents let one person build and ship personal apps, what still goes wrong, and what the person running the agent has to keep doing."
tags:
  - llm
  - coding
  - agents
  - software
---

# A Return to Code

A Return to Code is a podcast conversation from 2026 in which Naval Ravikant explains why he started building software again. He holds a computer science degree and had not written code in decades, and he came back to it once AI coding agents began to work. The conversation helps a reader decide whether to build their own apps with an agent: what an agent builds on its own, where it goes wrong, and what the person running it still has to do.

- A coding agent runs commands and edits files by itself.
- A simple app can come from one written description.
- A complex app still needs a person to steer.
- Knowing exactly what you want is the hard part.
- Agents agree too readily, so check every fix.
- Build your own app when the need is niche or private.
- A company whose only edge is writing software is a weak investment.

## Why agents work now

Around December 2025, coding agents began to stay on task long enough to build a whole app. Before that, the setup stopped most people, since a code host, a backend host and several other tools had to be wired together, and each one came with its own jargon. The agent now does that wiring itself. It lives in the terminal and works through Unix commands, and because Unix passes text in and text out, it suits what a language model handles best.

- Earlier assistants handed back code for the person to paste in.
- The agent uses grep, sed, pipes, cron jobs and new shells.
- Most of its training code, and most operating systems, are Unix.
- It accepts loose English, spelling mistakes included.
- A high-level grasp of computers, networks and programming goes far.

| | Earlier assistant | Coding agent |
|---|---|---|
| You give | a function to write | an app to build |
| It returns | a code block | a running app |
| Who wires it up | you | the agent |

## What one person can build

A task list or a small game clone can be built today from one description. A bigger project is a personal app store: a web page, later a phone app, where each requested app arrives with one-click install and upgrades. A two-line description typed on a phone becomes an installed app within minutes. Apple ties apps from outside its store to named devices, so a store like this reaches friends and family only.

- A workout tracker came from one long prompt.
- That prompt named apps to imitate and Apple's interface guidelines.
- It added a text log of past workouts and a health-data link.
- Bug reports go from a report button to a server.
- An agent works through the reports once a day.
- Each fix waits in its own branch for a person to accept.

```
describe app --> agent builds --> personal store --> install
                     ^                                 |
                     |  daily fix of bug reports       v
                     +------- person reviews <---- users
```

## Why it holds attention

Building with an agent works like a video game, with constant feedback and work at the edge of your skill. The difference is that you set your own goal, the goal can keep growing, and the result is a real app. With a team you cannot ask an engineer to move an icon left, then right, then back on a gut feeling, and with an agent you can.

- Fundamentals get learned along the way.
- The command line, caching, network backoff and streams are examples.
- Latency against bandwidth is another.
- Children pick these up because the feedback is instant.

## Where it fails

The code an agent writes is low in quality, its architecture needs work, security holes are likely, and scaling is hard. A product for many users still needs real engineers and probably a rewrite. Agents also rarely contradict the person running them: push toward an answer and they find it, call a sound fix a hack and they apologise. Past about a million tokens of context, roughly a million words, the agent starts to lose track of the code it has written.

- It guesses and compresses its own memory.
- It fixes the same bug several times.
- It patches a symptom instead of the cause.
- It may delete the feature that held the bug.
- The person has to stop it and ask for a structural fix.
- Ten copies of one model reviewing each other add little.
- Reviewers from other companies help a little and still tend to agree.

## Why code and math first

Models improve fastest where the training data is huge and checking an answer is cheap. Code has to compile, run and pass its tests, so training can grade itself without a person. Fields with little data or no cheap check lag behind, because grading there needs human taste. Creative writing is such a field.

- Code and math have a lot of data and a cheap check.
- Creative writing has neither.
- Coding models also improved because top engineers started using them.
- Their taste fed back into training.

## The wider bets

The conversation closes with predictions about who will build software and who will profit from it. The share of people who can build an app moves from about one in a thousand to a few in a hundred, though most people still treat a computer as a black box. A company whose only edge is building software others cannot build is no longer worth venture money. Anyone can put such software together now, and agents will soon write scalable software with sound architecture.

- The remaining edges are hardware, network effects and AI models.
- Talking to an agent reduces a phone to screen, battery and connection.
- Phone makers' margins then fall toward other hardware makers'.
- One or two people can serve millions of users.
- Minecraft, Bitcoin, early Instagram and early WhatsApp had tiny teams.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: the fast creative loop that turns a wanted behavior into a file you can run.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the professional quality system around that loop; the two stay separate.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the broader frame, software as English plus models.
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: what the surrounding stack has to look like for agents to run commands and edit files.
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]: operator craft for calling tools from a model.

## Sources

- Naval Ravikant and Nivi, [A Return to Code](https://nav.al/code), 2026-04-29.
- The phrase "vibe coding" was popularised in 2025 (Andrej Karpathy).
