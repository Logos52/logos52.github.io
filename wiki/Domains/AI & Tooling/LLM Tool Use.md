---
title: "LLM Tool Use"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - tools
  - context
---

# LLM Tool Use

LLM tool use is the use of a channel that carries information into a language model's context window. The model itself is a closed system that emits tokens. It cannot reach anything outside itself. A channel is chosen to supply one thing the model's weights cannot supply. The channel decides what the model can see, what it can modify, and what evidence can be checked.

Good tool use means picking the channel that matches the thing the model needs to know or check. Adding capabilities does not by itself make tool use good.

## Core takeaways

- A base model is a self-contained statistical object that emits tokens. It holds nothing from after its training cutoff, has no calculator, and has no file it did not absorb in training.
- A tool is a channel that carries something into the model's context window, or carries output out of it. Tools exist because the model cannot reach those things by itself.
- Search exists because of the knowledge cutoff. It puts current or outside information into the window. It does not add power to the model.
- A Python interpreter or data-analysis channel takes over computation. The model has no calculator, so it should not do arithmetic by predicting tokens.
- Picking a tool means matching the channel to the thing the model lacks. A longer list of features does not by itself improve tool use.
- In this knowledge base, the compiled wiki is the first tool to check. The open web is used only when the wiki cannot answer.

## What the base model cannot do on its own

The base model is a self-contained statistical artifact that emits tokens. It holds no information from after its training cutoff. It has no calculator. It has no file it did not already absorb during training. Tools exist because the model cannot see any of those things by itself.

The context window is the working memory of the current conversation. A channel is anything that fills the context window with something the model did not have.

## The channels and what each one supplies

Search retrieves current or external information and inserts it into the context window. Search exists because the model has a knowledge cutoff. It does not give the model more power. A longer run of search plus reasoning over many sources is the same job at greater length. The product names for that job will go out of date.

File upload puts a specific document into the window.

A Python interpreter or data-analysis channel takes over computation. The model has no calculator, so it should not do arithmetic by predicting tokens.

Coding IDE agents give the model file-system context and permission to edit files or run commands. The standard for that work is set on [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]].

Generated local apps and visualizations are an output channel. Voice, image, and video change the input and output modalities.

## Filling the window and shaping it

Tool use decides which channels feed the context window. How the window is shaped after the channels have filled it is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]].

The compiled wiki is itself a tool the model can read. That use is described on [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]. The default rule in this knowledge base: the compiled wiki first, and the open web only when the wiki cannot answer.

Each tool listed above is a channel. The work is picking the channel that matches the thing the model lacks.

## How to practice this

1. Before you add a tool to a task, name the one thing the model cannot supply by itself. Notice whether the missing thing is recent information, a document, a computation, or a file system. Choose the channel that supplies that one thing.
2. Before you turn on search, ask whether the answer depends on information from after the model's training cutoff. Notice that search only inserts outside text into the context window. It does not add power to the model.
3. When a task needs arithmetic or data analysis, send the computation to a Python interpreter. Notice that the model has no calculator. Without the interpreter it would produce the number by predicting tokens.
4. When a question comes up in this knowledge base, check the compiled wiki first. Go to the open web only when the wiki cannot answer. Notice how often the wiki answers by itself.
5. When you name a search product in a note, write the job it does beside the name. Do the same for products that run search plus reasoning over many sources. Notice that the product name goes out of date while the job does not.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: how the window is shaped once tools have filled it. LLM Tool Use covers which channels feed the window.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the standard for IDE-agent work. LLM Tool Use does not expand into that hub.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: the compiled wiki as a readable tool.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: the list of skills this tool list sits under. LLM Tool Use is the tool-pattern page beneath it.

## Open questions

- Which tools this wiki should expose to future LLM agents first.
- When web search is needed versus the compiled wiki.
- What should be verified by scripts rather than model judgment.

## Sources

- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw). Andrej Karpathy, YouTube, 2025-02-28. The base model as a self-contained token-emitter with a cutoff; tools as the channels that give it what pretraining cannot.
