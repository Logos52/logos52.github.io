---
title: "Context Engineering"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-11
written-by: grok
model: grok
source-count: 2
method: plain-rewrite-2026-09-11
prose-model: fable
aliases:
  - Software 3.0
  - LLM Knowledge Systems
merged-from:
  - Software 3.0
  - LLM Knowledge Systems
tags:
  - llm
  - context
  - agentic-engineering
  - agents
  - software
  - prompting
  - knowledge-base
  - obsidian
---

# Context Engineering

Context engineering is filling the model's visible window with the right information for the next step, and leaving the rest of the pile out. The window holds written context: instructions, examples, files, and constraints that a model interprets and acts on. Programming a computer with that written context is Software 3.0. Explicit code was the medium of the first era, learned weights the medium of the second, and written context is the medium of the third. At the scale of a small or medium markdown knowledge base, a maintained wiki is where that written context accumulates, and it can stand in for a heavier retrieval stack.

## Core takeaways

- The program is now a piece of text. Explicit code and trained weights still run in the same system as the written context.
- Context engineering is choosing which text goes into the window for the next step. Too much degrades the step, and too little leaves the model without what it needs.
- In this vault, `AGENTS.md`, `notes/index.md`, and `log.md` are the program the next session runs.
- A wiki with raw, wiki, and schema layers acts as agent memory at small-to-medium scale without a RAG stack. The model navigates it by indexes, backlinks, filenames, and search.
- The window fails in two ways: an over-long window whose middle the model reads less reliably, and a session that sorts inputs instead of using them.
- The checkable test is that the next action is obvious from what sits in front of the model, and that a middle-of-the-window dump has been refused.

## The program is now written text

What used to be won by exact code is now won by the context put in front of the model. The programming question is now which piece of text to give the agent. A long shell script or a manual setup guide can be replaced by a block of instructions. The agent can look at the machine it is on, change the next command, run it, and fix what breaks. The installer stops being a script that grows with every case it has to handle. It becomes a paste to an agent that can see the machine. That is the shape to recognise when it appears elsewhere.

A second way to say the same shift: people learned code to talk to machines, and now the machines speak English, fuzzy, sloppy, human English. Where the moat sits once the interface language is natural is one clause on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

The three eras stack. They do not replace each other cleanly. A working system still has explicit code, trained weights, and written context running together. How you keep a quality bar once the medium is context is [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]].

## Filling the window with the right information

Too much material in the window degrades the model's judgment. Too little leaves the model without what it needs. The work is the selection of that material. A better-worded prompt does not do that work.

The window on this vault is filled by a short set of files and habits. Those files and habits are instances of the practice. The practice is the selection they carry out.

## The files in this vault that program the next session

Three files in this vault are already Software 3.0 artifacts. `AGENTS.md`, `notes/index.md`, and `log.md` program future model behavior through structured context. They are the program the next session runs. Documentation sitting beside the work is a different thing; these files are read as instructions.

An index is a short catalog the model reads first so it does not scan the whole vault. [[notes/index|notes/index.md]] is read first on a query or an ingest. Operational memory is `log.md`: a dated record of what was done, so the next session does not re-discover it.

The habits around those files are ordinary. Indexes get maintained. Summaries stay compact: the right information, not the whole pile again. Related pages get linked. Source metadata stays attached. Repeated outputs become reusable skills and specs the next session can load, the move [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] already uses. Stale or unsupported claims get audited, because the model treats a wrong sentence in the window as a true one.

## The compiled layer: raw, wiki, schema

The program is now a piece of text. That is faster programming, and it is also information-processing that could not exist before. The example of information-processing that could not exist before is a compiled wiki, rather than a faster look-up of the same facts.

Language models can help a body of knowledge compound when they collect, compile, query, audit, and extend durable files such as markdown. The basic pattern is:

1. Collect source material in `raw/`.
2. Compile source material into linked wiki pages.
3. Use the wiki as context for later questions.
4. Save useful answers and visual outputs.
5. Promote durable answers back into the wiki.
6. Run audits to improve consistency and coverage.

This vault follows three layers:

- Raw sources: immutable evidence in the `raw/` source lifecycle, especially `raw/inbox/`, `raw/sources/`, `raw/processed/`, and local-only `raw/private/`.
- Wiki: LLM-owned compiled understanding in `wiki/`.
- Schema: maintainer instructions in [[AGENTS|AGENTS.md]], supported by [[notes/index|notes/index.md]] and `log.md`.

The purpose of the layers is accumulation. The model should not re-summarize raw sources from scratch for every question. It maintains a current synthesis in the wiki, reads the index first, and answers from that compiled layer.

## Why a maintained wiki can stand in for a retrieval stack

At small-to-medium scale, a well-maintained markdown wiki can act as practical agent memory without requiring a complex RAG stack. The model can read indexes, summaries, source notes, and related pages directly, then write improved artifacts back into the repository. The model navigates through four handles: indexes, backlinks, filenames, and search. None of those handles is a license to accumulate. Selection is still the job.

## What a working window feels like

The test is whether the next thinking step has less friction. Workspace, files, instructions, and references should make the next right work more likely without rebuilding the situation from scratch.

Four signs that the window is doing its job:

- The relevant material is easy to find.
- Constraints are explicit.
- The next action is obvious.
- Judgment is helped, and the volume of material does not degrade it.

## The two failures

Over-long or noisy context degrades the next step. Performance is not monotonic in window length. Models use the start and the end of a long window more reliably than the middle. Filling the window as full as possible feels thorough, and it measures worse. [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]] is the other thing that occupies the same window: every tool result is more text the middle can lose.

The second failure is separate from the over-long window. Context work has become a shortcut when it turns into sorting inputs instead of using them to think or build. The checklist becomes chores that postpone the work. A session spent organizing, with no next thinking step, is the signal to stop.

[[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] spends the same window as the deliberate channel. [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] is the rival explanation for a "bad model": the window was wrong.

## Where the human still completes the model

Today the human still completes the model. An API key is the example: the model needs one, and only the human can go and get it. As tools expose command lines and text interfaces, the model starts handing instructions back. The split of work between the human and the model is already moving.

## The price and the checkable test

The price is maintaining the index, the log, and the compact summaries. Reading the index first is a claim about corpora of this scale. It does not hold for every corpus. The checkable test is that the next action is obvious from what sits in front of the model, and that a middle-of-the-window dump has been refused. What is left out of the window makes the next step easier as much as what is put in.

## How to practice this

1. Read `notes/index.md` before a query or an ingest. Notice that the model does not scan the whole vault.
2. Write what was done into `log.md`, with the date. Notice that the next session does not re-discover it.
3. Answer a question from the wiki before re-reading raw sources. Notice that the raw sources did not need re-summarizing.
4. Replace a long setup script with a block of instructions pasted to an agent that can see the machine. Notice the agent change the next command, run it, and fix what breaks.
5. Refuse a dump of material into the middle of the window. Notice whether the next action is obvious from what remains.
6. Stop a session that has been sorting inputs with no next thinking step. Notice that the checklist had become chores postponing the work.

## Related pages

- [[notes/index|notes/index.md]]: read this first on query or ingest
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: the query workflow that starts from the index
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]: tools as another thing that occupies the window
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the hub, and how you keep a quality bar once the medium is context. Its context section holds the same material at less depth
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: context as the deliberate channel
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]]: rival explanation: bad context, not bad model
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: English as the interface, and the instruction-reversal: the human still completes the model; the model starts handing instructions back.
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]

## Open questions

- What other parts of this repo are best thought of as Software 3.0 instructions, beyond the three files already named?
- How should prompts, specs, and agent instructions be versioned?
- What is the minimum metadata schema that remains useful after the wiki grows?
- What scale requires a search index or RAG layer?
- How should public summaries cite private or copyrighted raw material?

## Sources

- Simon Willison, [Context engineering](https://simonwillison.net/2025/Jun/27/context-engineering/), 2025-06-27. Records the June 2025 public naming.
- Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang, "Lost in the Middle: How Language Models Use Long Contexts," *Transactions of the Association for Computational Linguistics* (2023).
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent, 29 April 2026, ~2:28–7:22.
- Andrej Karpathy, [Software Is Changing (Again)](https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again), YC AI Startup School, June 2025.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the second angle: English as interface, the human completing the model, the model handing instructions back.
- [[raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
