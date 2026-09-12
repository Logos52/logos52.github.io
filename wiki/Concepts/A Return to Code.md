---
title: "A Return to Code"
type: concept
status: developing
created: 2026-05-06
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - coding
  - agents
  - software
---

# A Return to Code

A return to code is a loop for making cheap custom software. You describe the program you want. An agent builds it and tests it. You correct the agent. The result is a program made in one afternoon that the market would never have funded. A result worth keeping can serve one person for one afternoon.

## Core takeaways

- Agents lower the cost of getting a program to its first run. They walk a repository, run shell commands, read the failure, and keep editing.
- A one-shot program serves one person, one job, or one afternoon. It does not have to become a product or a codebase you maintain.
- A program either runs, fails a test, writes a log, or shows the user a broken screen. Running it tells you whether it works.
- The person still names the behavior, holds taste and product judgment, catches the agent's wrong assumptions, and decides when to stop.
- The low cost of building also causes the failures: scope grows because each feature costs little, and wide edits pass with no test and no review.

## What agents made cheaper

Getting a traditional program to its first run used to take many steps: pick a framework, wire dependencies, build the interface, host it, then chase the errors. Agents remove most of that work. They walk a repository, run shell commands, read the failure, and keep editing. This works when the surrounding stack is [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]], meaning surfaces an agent can read and act on without a human click-path.

The loop is fast and direct. A wanted behavior becomes a file you can execute. That fast creative loop is [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] is the professional quality system around that loop. The two are separate concepts and should stay separate.

## What the person still does

The person's part of the work is narrower than before, and it is harder. It has five tasks: name the behavior you actually want; hold taste and product judgment; catch the agent's wrong assumptions; decide when to stop; tell "good enough to keep" from "this needs real engineering." The skill in short supply is knowing clearly what you want. Because implementation is cheap, adding more is easy. That is not a reason to add more.

## Small programs for one person

A personal app store is like a folder of spreadsheets. It is a set of small tools you own, with no company behind it. You stop waiting for a startup to ship the exact workflow, and you keep a rough tool of your own. A one-shot app is that tool when it serves one person, one job, or one afternoon. A disposable program counts as a result. It does not have to grow into a product or a codebase you maintain. Some programs are jigs: a script you throw away after the job, as a spreadsheet is thrown away after the quarter.

## Why code shows the errors

In code, a model's mistakes show. Prose can read as finished and still be wrong. A program either runs, fails a test, writes a log, or shows the user a broken screen. Running the program tells you whether it works. A one-shot program you cannot run, cannot test, and cannot throw away is not a return to code.

## Matching the model to the job

Models are not interchangeable. Some plan well, some edit well, some are fast. Choosing the model for the job, and putting enough of the right material in the context window, is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]].

## Small tools for knowledge work

Knowledge work has the same economics. This wiki can grow small tools when they save maintenance work: a markdown search command, a check that the source index is sound, a health pass for orphans and missing backlinks, a listing of still-uncompiled intake, a generator for ingest prompts. Build one only when it cuts real maintenance. That is the stop decision, applied to the wiki.

## Where the loop fails

The low cost that makes the loop worth running also causes its failures:

- A throwaway script treated as production software.
- Scope that grows because the next feature costs almost nothing.
- The operator's taste lost among the many extras the agent generates.
- A wide edit accepted with no test and no review.
- An agent trusted as if it knew the whole project, when its context window holds only part of it.

A return to code is a return only when the program runs and the operator can still stop. Cheap custom software that never runs, or that grows because growth is now easy, is untested text.

## How to practice this

1. Write down the one behavior you want from a program before you ask an agent for it. Notice whether you can state it clearly. If you cannot, work on the description before any building starts.
2. Give the description to an agent and let it build and test the program. Notice whether the agent runs shell commands, reads the failure, and keeps editing on its own. If a human click is needed at each step, the stack is not one an agent can act on.
3. Run the program. Notice which of four things happens: it runs, fails a test, writes a log, or shows a broken screen. A program you cannot run or test gives you no result.
4. Correct the agent's wrong assumptions, then decide whether the result is good enough to keep or needs real engineering. Notice when you want a feature only because adding it costs almost nothing. That is the point to stop.
5. Before building a small tool for your own knowledge work, ask whether it cuts real maintenance. Notice whether the tool removes work you already do or adds a codebase you must maintain. Build it only in the first case.
6. Check that the model fits the job, since some plan well, some edit well, and some are fast. Notice whether the context window holds enough of the right material. An agent with only part of the project in its window cannot check the rest.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: the fast creative loop that turns a wanted behavior into a file you can run.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the professional quality system around that loop; the two stay separate.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the broader frame, software as English plus models.
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: what the surrounding stack has to look like for agents to run commands and edit files.
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]: operator craft for calling tools from a model.

## Sources

- Naval Ravikant and Nivi, [A Return to Code](https://nav.al/code), 2026-04-29.
- The phrase "vibe coding" was popularised in 2025 (Andrej Karpathy).
