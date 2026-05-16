---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - knowledge-base
  - obsidian
---

# LLM Knowledge Systems

Language models can help a body of knowledge compound when they collect, compile, query, audit, and extend durable files such as markdown.

## Summary

The basic pattern is:

1. Collect source material in `raw/`.
2. Compile source material into linked wiki pages.
3. Use the wiki as context for later questions.
4. Save useful answers and visual outputs.
5. Promote durable answers back into the wiki.
6. Run audits to improve consistency and coverage.

## Architecture

This vault follows three layers:

- Raw sources: immutable evidence in `raw/` and `Clippings/`.
- Wiki: LLM-owned compiled understanding in `wiki/`.
- Schema: maintainer instructions in [[AGENTS|AGENTS.md]], supported by [[notes/index|notes/index.md]] and [[log|log.md]].

The point is accumulation. The LLM should not re-summarize raw sources from scratch for every question. It should maintain a current synthesis in the wiki, then answer from that compiled layer first.

## Why It Matters

At small-to-medium scale, a well-maintained markdown wiki can act as practical agent memory without requiring a complex RAG stack. The LLM can read indexes, summaries, source notes, and related pages directly, then write improved artifacts back into the repository.

## Related Concepts

- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]

## Sources

- [[llm-wiki|llm-wiki]]
- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]

## Open Questions

- What is the minimum metadata schema that remains useful after the wiki grows?
- What scale requires a search index or RAG layer?
- How should public summaries cite private or copyrighted raw material?
