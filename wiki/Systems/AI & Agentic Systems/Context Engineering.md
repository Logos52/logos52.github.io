---
title: "Context Engineering"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-27
written-by: opus
model: grok
source-count: 2
method: outline-2026-09-27
prose-model: fable
aliases:
  - Software 3.0
  - LLM Knowledge Systems
merged-from:
  - Software 3.0
  - LLM Knowledge Systems
description: "How the text put in front of a model decides its answer, what a crowded window costs, and how an index, a log and a rules file keep it small."
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

# Context Engineering

Context engineering is choosing which text a language model is given before each step of a task. A model can use only the text it is given, so choosing that text improves its answers more than rewording a request does.

- A model works from one fixed window of text.
- Everything in the window takes some of its attention.
- Give it what the next step needs and leave the rest out.
- The files a model reads at session start act as its program.
- Read an index of pages first, then open only what is needed.
- A forgotten fact needs writing down.
- Organising notes with no step that uses them is a signal to stop.

## How it works

Each request and reply is cut into tokens, small chunks of text, and added to one running sequence called the context window. The window is the model's working memory: apart from what it learned in training, the model knows only what the window holds, and a new chat starts it empty. Everything the model should use has to be in there, and everything in there competes for its attention.

- The task, examples, files and the whole session share one window.
- Tools write into it, so a web search drops page text in.
- An uploaded document is converted to text and dropped in.
- Unrelated material in the window lowers accuracy.
- Each new token costs a little more as the window grows.
- Material at the start and end is used more reliably than the middle.

The name comes from Andrej Karpathy's numbering of software. Software 1.0 is code written by hand, Software 2.0 is weights learned from data, and Software 3.0 is text a model reads and acts on, so the text in the window is the program. People started saying "context engineering" in June 2025 in place of "prompt engineering", since a prompt sounds like one typed line and the real work is assembling the task, examples, documents, tools, state and history.

## Examples

Much code that sat between a person and a model can now be replaced by text handed to the model. In each case below, the model does on its own the work a program used to do. The person writes down the goal and the agent works out the steps.

- Installing a program: instructions pasted to an agent replace a growing shell script.
  - The agent checks the machine, runs the steps and fixes what breaks.
- Menu pictures: a menu photo plus one instruction replaces a whole app.
- A knowledge base: a model recompiles a pile of documents into a linked wiki.

## On this desk

The wiki on this desk is a folder of markdown pages, and three files program the next session: a rules file the model reads first, an index with one line for each page, and a dated log of what was done. When a question comes in or a new source is added, the model reads the index first and opens only the pages it needs. Up to a few hundred pages this works without a search engine.

```
question --> index (one line per page)
                  |
        pick the few pages needed
                  |
   window = rules + picked pages + question
                  |
       answer, then a line in the log
```

- Summaries stay short.
- Related pages are linked.
- Each page says where its facts came from.
- A repeated output becomes a skill or a spec.
- Stale sentences get audited, since the model reads them as fact.
- Pages are found by index, backlink, filename or text search.

A setup passes when the next step is obvious from what the model has read, and no whole folder had to be pasted in to get there.

## Where it fails

Most failures come from putting too much in or from blaming the model for what the window held. When an answer is bad, check the window before deciding the model is weak. When an agent forgets something, piling on history does not help it find the one line that matters, and the fix is to trace where the fact was lost.

- Stuffing: pasting everything gives worse answers than picking pages.
- Sorting instead of using: ask what question the notes were for.
- For a forgotten fact, check these in order.
  - It was never captured.
  - It was lost when a long chat was compressed.
  - It cannot be looked up across chats.
  - It did not surface for this step.
  - The task did not say why it mattered.

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

## Sources

- Simon Willison, [Context engineering](https://simonwillison.net/2025/Jun/27/context-engineering/), 2025-06-27. Records the June 2025 public naming.
- Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang, "Lost in the Middle: How Language Models Use Long Contexts," *Transactions of the Association for Computational Linguistics* (2023).
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent, 29 April 2026, ~2:28–7:22.
- Andrej Karpathy, [Software Is Changing (Again)](https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again), YC AI Startup School, June 2025.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the second angle: English as interface, the human completing the model, the model handing instructions back.
- [[raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
