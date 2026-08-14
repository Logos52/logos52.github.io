---
title: "Software 3.0"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 3
tags:
  - llm
  - software
  - context
  - prompting
---

# Software 3.0

Software 3.0 is programming a computer with written context — instructions, examples, files, and constraints — that a model interprets and acts on. Explicit code was the old medium. Learned weights were the middle one.

## The lever is context

What used to be won by exact code is now won by the context you put in front of the model. The programming question is now which piece of text to give the agent. A long shell script or a manual setup guide can be replaced by a block of instructions. The agent can look at the machine it is on, change the next command, run it, and fix what breaks. The installer is no longer a ballooning script. It is a paste to an agent that can see the machine.

That is the shape to recognise in the wild. How the window that holds those instructions gets filled is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]].

## What that looks like here

Three files in this vault are already Software 3.0 artifacts. `AGENTS.md`, `notes/index.md`, and `log.md` program future model behavior through structured context. They are not documentation sitting beside the work. They are the program the next session runs.

## The second angle, and the bound

A second way to say the same shift: people learned code to talk to machines, and now the machines speak English — fuzzy, sloppy, human English. The question of where the moat sits, once the interface language is natural, is one clause on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]], not the definition here.

Today the human still completes the model. Go get this API key; only you can do that. As tools expose command lines and text interfaces, the model starts handing instructions back. The pair is already moving. The three eras stack; they do not replace each other cleanly. A working system still has explicit code, trained weights, and written context in the same box. How you keep a quality bar once the medium is context is [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]].

The program is now a piece of text. That is not only faster programming. It is also information-processing that could not exist before. Karpathy's own next example is a compiled wiki rather than a faster look-up of the same facts — [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]].

## Related

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — English as the interface, and the instruction-reversal: the human still completes the model; the model starts handing instructions back.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — how you keep a quality bar once the medium is context.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — the craft of filling the window that 3.0 programs through.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the "new thing that could not exist" example: a compiled wiki, not only faster code.

## Open Questions

- What other parts of this repo are best thought of as Software 3.0 instructions, beyond the three files already named?
- How should prompts, specs, and agent instructions be versioned?

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent, 29 April 2026, ~2:28–7:22.
- Andrej Karpathy, [Software Is Changing (Again)](https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again), YC AI Startup School, June 2025.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — the second angle: English as interface, the human completing the model, the model handing instructions back.
