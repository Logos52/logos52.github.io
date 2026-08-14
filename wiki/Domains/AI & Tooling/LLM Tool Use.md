---
title: "LLM Tool Use"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - tools
  - context
---

# LLM Tool Use

LLM tool use is a context channel into a closed token-emitter, chosen for the gap the weights cannot fill. The channel decides what the model can see, what it can modify, and what evidence can be checked. Good tool use is picking the channel for the epistemic job, not adding capabilities.

The base model is a self-contained statistical artifact that emits tokens. It has no last week, no calculator, and no file it has not already absorbed. Tools exist because that closed object cannot see those things. The context window — the working memory of the current conversation — is what a channel fills.

Search retrieves current or external information and inserts it into context. It exists because of the knowledge cutoff, not because search is more power. Longer search-plus-reasoning over many sources is the same job at more length; product names for that job will rot. File upload puts a specific document into the window. A Python interpreter or data-analysis channel delegates computation the zip file should not do in its head — it has no calculator. Coding IDE agents give the model file-system context and edit or command permissions; the bar for that work lives on [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]. Generated local apps and visualizations are an output channel. Voice, image, and video change input and output modalities.

How the window is then shaped is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]. This page owns which pipes feed it. The compiled wiki is itself a readable tool — [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]]. House default: the compiled wiki first, the open web only when the wiki cannot answer.

The extras are channels. The work is picking the pipe that matches the gap.

## Related

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — how the window is shaped once tools have filled it; this page owns which pipes feed it
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — IDE-agent bar; this page does not expand into that hub
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the compiled wiki as a readable tool
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]] — the ladder this list sits under; this page is the tool-pattern leaf

## Open Questions

- Which tools this wiki should expose to future LLM agents first.
- When web search is needed versus the compiled wiki.
- What should be verified by scripts rather than model judgment.

## Sources

- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw). Andrej Karpathy, YouTube, 2025-02-28. The base model as a self-contained token-emitter with a cutoff; tools as the channels that give it what pretraining cannot.
