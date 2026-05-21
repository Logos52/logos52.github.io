---
title: "GPT - llm-wiki"
type: brief
status: draft
created: 2026-05-10
updated: 2026-05-10
model: GPT-5.5
source: "raw/sources/llm-wiki.md"
source_url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
tags:
  - output
  - llm-wiki
  - knowledge-base
  - architecture
---

# GPT - llm-wiki

## Core Thesis

Karpathy's LLM wiki pattern replaces one-shot retrieval with persistent synthesis. Instead of dumping documents into a RAG system and rediscovering relationships every time, the LLM incrementally compiles raw sources into a structured, interlinked wiki.

The wiki becomes a compounding artifact. Every source, query, synthesis, and cleanup pass can make the system more useful.

## Compressed Takeaways

1. **Raw sources are the source of truth.** They should be kept intact.
2. **The wiki is the compiled layer.** It is generated and maintained by the LLM.
3. **The schema disciplines the agent.** Files like `AGENTS.md` tell the model how to operate.
4. **Ingest is integration.** A new source should update summaries, concepts, indexes, backlinks, and logs.
5. **Query outputs can be filed back.** Good answers should become durable pages or outputs.
6. **Linting keeps the wiki healthy.** Agents can find contradictions, stale claims, missing links, and gaps.
7. **Index and log are navigation primitives.** Index is content-oriented; log is chronological.
8. **Obsidian is the IDE.** The LLM edits; the human reads, directs, and checks.

## Architecture

The source describes three layers:

1. **Raw sources**: articles, papers, transcripts, repos, datasets, images, notes.
2. **Wiki**: generated markdown pages, summaries, concept notes, backlinks, and syntheses.
3. **Schema**: the operating instructions that define conventions and workflows.

This repo extends that pattern with an additional output layer:

1. `raw/`: source material.
2. `outputs/`: intermediate GPT-generated briefs, answers, diagrams, and drafts.
3. `wiki/`: stable public knowledge pages.
4. `journal/`: active public thinking.
5. `blog/`: polished personal essays.

## Why the Output Layer Matters

The original pattern moves from raw source to wiki. This repo now benefits from a middle layer.

The output layer is useful because:

- not every synthesis deserves to be canonical,
- source briefs can be compared before promotion,
- the model used can be recorded,
- drafts can remain local or semi-private,
- outputs can act as staging artifacts for future wiki updates.

This file itself is an example of that workflow.

## Operations

The core operations are:

- **Ingest**: read a source and integrate it.
- **Query**: answer questions against the existing wiki.
- **Lint**: inspect structure, contradictions, stale claims, gaps, or broken links.
- **Output**: generate reusable artifacts from sources or queries.
- **Promote**: move durable insights into canonical wiki pages.

The human role is to curate sources and decide what matters. The LLM role is to summarize, connect, maintain, and update.

## Links Into the Knowledge Base

- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]]
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]]

## Open Questions

1. Should `outputs/` be documented as a formal fourth layer in README or AGENTS?
2. What is the promotion checklist from output brief to wiki page?
3. Should generated output briefs be public, private, or selectively published?
4. Should the system maintain an output index?

