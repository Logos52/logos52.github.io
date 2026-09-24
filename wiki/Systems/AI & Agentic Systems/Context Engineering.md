---
title: "Context Engineering"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-24
written-by: fable
model: grok
source-count: 2
method: outline-2026-09-24
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

Context engineering is choosing what text a language model sees before it works on the next step. The model can only use what is in front of it, so that choice decides the quality of the answer more than the wording of the request does.

## Core takeaways

- A model works from one fixed window of text. Everything it should use has to be in that window, and everything in the window competes for its attention.
- The job is selection. Put in what the next step needs and leave the rest out. Too much lowers accuracy; too little leaves the model guessing.
- The files a model reads at the start of a session are its program. A rules file, an index and a log shape what the next session does.
- Read the index first, then open only what the question needs. Do not paste in everything.
- A wider window does not cure forgetting. A place to look facts up does more than a bigger pile of text.
- Stop when a session is all sorting and no thinking.

## How it works

- The window
  - Each request and reply is chopped into tokens, small chunks of text, and added to one running sequence. That sequence is the context window.
  - The window is the model's working memory. What is in it is directly usable. What is not in it is unknown to the model, apart from what it absorbed in training.
  - Starting a new chat empties the window.
- What goes in
  - The task, examples, files, retrieved pages, tool results and the conversation so far all take space in the same window.
  - Tools write into the window too. A web search drops page text in. An uploaded document is converted to text and dropped in.
- What a full window costs
  - Accuracy falls when the window holds material that does not bear on the step.
  - Each new token costs a little more to produce as the window grows.
  - Position matters. A model uses material at the start and end of a long window more reliably than material in the middle (Liu and others, "Lost in the Middle", 2023).
- Why the name
  - Andrej Karpathy's numbering: Software 1.0 is code written by hand. Software 2.0 is weights learned from data. Software 3.0 is text a model reads and acts on, so the text in the window is the program.
  - The term "context engineering" spread in June 2025 as a replacement for "prompt engineering". A prompt sounds like one line typed into a chat box. The real work is assembling everything the model needs for the task to be solvable: the task, examples, retrieved documents, tools, state and history.

## Examples

- Installing a program. The old form is a shell script that grows as it handles more kinds of machine. The new form is a block of instructions pasted to an agent, which looks at the machine, runs the steps and fixes what breaks.
- Menu pictures. An app that took a photo of a restaurant menu and fetched a picture of each dish can be replaced by handing the photo to a model with one instruction. The app in between did work the model does on its own.
- A knowledge base. A model can read a pile of documents and recompile them into a linked wiki. No hand-written code could do that before.

## How this desk does it

- Three files program the next session: a rules file the model reads first, an index that lists every page with one line each, and a dated log of what was done.
- On a question or an ingest, the model reads the index first, then opens only the pages it needs. This works without a search engine up to a few hundred pages.

```
question
   |
   v
index (one line per page) --> pick the few pages needed
   |
   v
window = rules file + picked pages + question
   |
   v
answer, then a line in the log
```

- Habits that keep the window small: summaries stay short; related pages are linked; each page carries where its facts came from; a repeated output becomes a skill or a spec; a stale claim is audited, since a wrong sentence in the window is read as fact.
- The handles a model has on a folder of markdown files: the index, backlinks, filenames and text search. Organization does the retrieval work.
- The test of a good setup: the next thinking step has less friction. The next action is obvious, and nothing had to be dumped in wholesale.

## Where it fails

- Stuffing. Pasting everything in gives worse answers than picking the pages the question needs.
- Sorting instead of using. A session spent organizing notes with no thinking step is a signal to stop and ask what question the notes were for.
- Blaming the model. When an answer is bad, check what was in the window before deciding the model is weak.
- A bigger window. Piling on history does not let the model find the one line that matters. When an agent forgets, check in order: was the fact ever captured; did it survive compression of the conversation; can it be looked up across conversations; did it surface for this step; did the task say why it matters.

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
