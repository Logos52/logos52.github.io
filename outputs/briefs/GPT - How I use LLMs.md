---
title: "GPT - How I use LLMs"
type: brief
status: draft
created: 2026-05-10
updated: 2026-05-10
model: GPT-5.5
source: "raw/sources/How I use LLMs.md"
source_url: "https://www.youtube.com/watch?v=EWvNQjAaOHw"
tags:
  - output
  - llms
  - tools
  - agentic-engineering
  - karpathy
---

# GPT - How I use LLMs

## Core Thesis

Karpathy presents LLMs as a growing ecosystem of interfaces, tools, modalities, and workflows rather than a single chatbot. The practical skill is knowing which mode to use: quick chat, thinking model, search, deep research, file upload, code interpreter, artifact generation, voice, image input, image output, video, memory, or custom GPT.

The source is less about one product and more about developing operational fluency with the LLM stack.

## Compressed Takeaways

1. **LLMs are an ecosystem.** Chat is only one interface.
2. **Model choice matters.** Different models and pricing tiers produce different tradeoffs.
3. **Thinking models are for harder reasoning.** They are slower but better for multi-step work.
4. **Tool use expands capability.** Search, code execution, file upload, and artifacts change what the model can do.
5. **Context is the main input.** Files, documents, images, and instructions shape the output.
6. **Multimodality broadens use cases.** Voice, images, OCR, video, and generated media make LLMs more general.
7. **Memory and custom instructions personalize the system.** They can help, but they need curation.
8. **The ecosystem is messy.** The user needs judgment about when each tool is appropriate.

## LLMs as a Toolkit

The source walks through LLM use as a set of modes. Each mode changes what the model can perceive or do.

Important modes:

- basic chat,
- reasoning or thinking models,
- internet search,
- deep research,
- file uploads,
- Python or data analysis,
- chart and figure generation,
- artifacts and mini-apps,
- coding tools,
- speech input and output,
- advanced voice,
- NotebookLM-style synthesis,
- image input and OCR,
- image generation,
- video input and output,
- memory,
- custom GPTs.

The practical lesson is that the user should not ask "can ChatGPT answer this?" The better question is "which LLM workflow fits this task?"

## Context Engineering

A recurring implication is that context quality controls output quality. Files, screenshots, examples, constraints, and prior notes all shape what the model can do.

Good context engineering includes:

- giving the right source material,
- separating raw source from desired output,
- specifying audience and purpose,
- naming constraints,
- asking for the right artifact format,
- iterating with feedback,
- using tools when memory alone is not enough.

This links to [[wiki/Techniques/Context Engineering|Context Engineering]] and [[wiki/Concepts/LLM Tool Use|LLM Tool Use]].

## Tool Choice

Karpathy's survey implies a practical routing table:

| Task | Better Tool Mode |
|---|---|
| quick explanation | normal chat |
| hard reasoning | thinking model |
| current facts | search |
| literature scan | deep research |
| source-grounded summary | file upload |
| numeric analysis | Python/data analysis |
| diagram or interface | artifact/app generation |
| codebase work | coding agent |
| messy visual input | image input/OCR |
| verbal brainstorming | voice |
| repeated personal workflow | memory/custom GPT |

This is the foundation for a more mature personal AI operating system.

## Relevance to This Knowledge Base

This repo already uses several of the workflows Karpathy describes:

- raw sources are stored in `raw/`,
- GPT-generated intermediate syntheses go in `outputs/`,
- stable summaries are promoted into `wiki/`,
- Quartz renders the public site,
- agents maintain the structure.

The next step is to make these modes more explicit so the user can choose whether a source should produce an output brief, a wiki page, a blog draft, a diagram, or a tool.

## Links Into the Knowledge Base

- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]

## Open Questions

1. Should the repo have a decision tree for which LLM workflow to use?
2. Should every source generate a brief before being promoted?
3. Which repeated workflows deserve custom prompts or scripts?
4. Should model choice be documented in every output artifact?

