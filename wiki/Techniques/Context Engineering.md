---
type: technique
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 2
last-audited:
tags:
  - llm
  - context
  - agents
---

# Context Engineering

Context engineering is the practice of shaping the information available to an LLM so it can perform a task accurately and efficiently.

## Summary

In this knowledge base, context engineering includes:

- Maintaining indexes.
- Reading [[notes/index|notes/index.md]] first before query or ingest work.
- Preserving [[log|log.md]] as operational memory.
- Writing compact summaries.
- Linking related pages.
- Keeping source metadata available.
- Creating reusable outputs.
- Auditing stale or unsupported claims.

## Why It Matters

For small and medium markdown knowledge bases, careful context organization can reduce the need for complex retrieval infrastructure. The LLM can navigate the repo through indexes, backlinks, filenames, and search.

## Related Concepts

- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]

## Sources

- [[llm-wiki|llm-wiki]]
- [[How I use LLMs|How I use LLMs]]
