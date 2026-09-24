---
title: "A Return to Code"
type: concept
status: developing
created: 2026-05-06
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 1
description: "Why coding agents made one person able to build and ship personal apps, what still goes wrong, and what the operator has to keep doing."
tags:
  - llm
  - coding
  - agents
  - software
---

# A Return to Code

A Return to Code is a 2026 podcast conversation in which Naval Ravikant, who holds a computer science degree but had not written code in decades, explains why he started building software again once AI coding agents began to work. It helps a reader decide whether to build their own apps with an agent, because it says what an agent builds on its own, where it goes wrong, and what the person who runs the agent still has to do.

## Core takeaways

- A coding agent runs in a terminal, executes commands and edits files on its own. Earlier tools only handed back code to paste.
- A simple app can be built from one written description. A complex app still needs a person to steer.
- Knowing exactly what you want is the hard part. The agent handles the tools and the jargon.
- Agents agree with the person running them too readily, so that person has to check every fix and refuse a quick patch.
- Once a codebase outgrows the agent's working memory, the agent loses track, and the person has to direct how the code is structured.
- A custom app is worth building when the need is niche, private or personal. A mass-market app still serves a common need better, because someone hand-tuned it.
- A company whose only edge is that it can write software is now a weak investment.

## Why agents work now

- Around December 2025 coding agents began to stay on task and build whole apps, which made a return to code worth the time.
- Setup used to be what stopped people: wiring a code host, a backend host and many tools together, and learning the jargon for each. The agent does the wiring.
- The agent lives in the terminal and uses the Unix commands (grep, sed, pipes, cron jobs, new shells). Most of the code it was trained on and most operating systems are Unix, which is text in and text out, and text is what a language model handles best.
- The agent takes loose English, spelling mistakes included, and turns it into code. A high-level grasp of computer architecture, networking and programming is enough to go far.

| | Earlier assistant | Coding agent |
|---|---|---|
| You give | a function to write | an app to build |
| It returns | a code block | a running app |
| Who wires it up | you | the agent |

## What one person can build

- One description in, one working app out. A task list or a small game clone can be built from one description today.
- A personal app store: a web page, later a phone app, where each requested app lands with one-click install and upgrades. A two-line description typed on a phone becomes an installed app within minutes.
- Example: a workout tracker built from one long prompt naming products to imitate, Apple's interface guidelines, a text log of past workouts, charts, strength scores and a link to the phone's health data.
- Limit: Apple ties apps outside its store to named devices, so a personal store reaches friends and family only.
- A bug loop: a user taps a report button, the logs go to a server, an agent works through every report once a day, and each fix waits in its own branch for a person to ship or reject.

```
describe app --> agent builds --> personal store --> install
                     ^                                 |
                     |  daily fix of bug reports       v
                     +------- person reviews <---- users
```

## Why it holds attention

- It works like a video game: constant feedback, and work at the edge of your skill. The differences are that you set your own goal, that goal can keep growing, and the result is real.
- Building with a team means compromise. You cannot ask an engineer to move an icon left, then right, then back, on a gut feeling. With an agent you can.
- Fundamentals of computing get learned on the way: the command line, caching, network backoff, streams, latency against bandwidth. Children pick this up where teaching tools failed, because the feedback is instant.

## Where it fails

- Code quality is low, the architecture needs work, security holes are likely, and scaling is hard. A product that must serve many users needs real engineers and probably a rewrite.
- Agents rarely contradict the person running them. Push toward an answer and they find it. Call a fix a hack and the agent apologises even when it was a sound fix.
- Past about a million tokens of context, roughly a million words, the agent guesses, compresses its memory, fixes the same bug several times, patches a symptom, or closes a bug by deleting the feature the bug was in. The person has to stop it and ask for a fix in the structure of the code.
- Ten copies of one model reviewing each other only add more tokens, since they share one training set. Automatic review of each pull request by models from other companies helps a little, and the reviewing models still tend to agree with each other.

## Why code and math first

- Models do best where the data is huge and checking is cheap. Code must compile, run and pass tests, so training can grade itself.
- Fields with little data or no cheap check, such as creative writing, lag behind, because grading needs human taste.
- Coding models improved recently in part because top engineers started using them, and their taste fed back into training.

## The wider bets

- The share of people who could build an app moves from about one in a thousand to a few in a hundred. Most people still treat a computer as a black box.
- Pure software, a company whose only edge is building what others cannot, is no longer worth venture money: anyone can hack it together, and agents will soon build scalable software with sound architecture. The remaining edges are hardware, network effects and AI models.
- When people talk to an agent instead of tapping apps, the phone is reduced to a screen, a battery and a connection, and the phone maker's margins fall toward those of other hardware makers.
- A company of one or two people can serve millions of users, as Minecraft, Bitcoin, early Instagram and early WhatsApp showed with tiny teams.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: the fast creative loop that turns a wanted behavior into a file you can run.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the professional quality system around that loop; the two stay separate.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the broader frame, software as English plus models.
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: what the surrounding stack has to look like for agents to run commands and edit files.
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]: operator craft for calling tools from a model.

## Sources

- Naval Ravikant and Nivi, [A Return to Code](https://nav.al/code), 2026-04-29.
- The phrase "vibe coding" was popularised in 2025 (Andrej Karpathy).
