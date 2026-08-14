---
title: "Question Answering Against a Wiki"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 2
tags:
  - workflow
  - query
  - llm
  - question-answering
---

# Question Answering Against a Wiki

An answer starts from the compiled wiki, not from a fresh search. Query is that order: pages first, then anything durable written back. Source files wait until the wiki has been asked.

## The order

1. Read [[notes/index|notes/index.md]]. Public front door, always first. When the full inventory is needed, also read `notes/catalog.md` — agent-only, not a public page.
2. Read the most relevant wiki pages. Source files come after. One step that names both is the defect this card exists to stop.
3. Search related terms across the wiki, the source folders, the workbench, and legacy archives when needed.
4. Write durable answers that need review to `01 - Workbench/`. Workbench is private drafts, not the wiki.
5. Cite the pages and sources consulted.
6. Add unresolved issues to `outputs/generated-questions.md`. Not the archived `02 - System/Open Questions.md`. Human orientation lives in `journal/index.md` openQuestions and `00 Command Center/Active Questions.md`. Auto-appends go only to the generated bucket.
7. Promote durable new insight back into `wiki/`.
8. Append a query entry to `log.md`. Update [[notes/index|notes/index.md]] only if a hub or condensed front-door link changed.

## What the answer leaves

An answer should stand alone and still be usable as future context. A useful shape is the question, a short answer, a detailed answer, evidence consulted, related concepts, and follow-up questions — a shape, not a template every query must fill.

Wiki-first is wrong when the vault has nothing on the topic: then search, then ingest. The price is reading the index, and the catalog when needed, before any generation. An answer that cites only the open web while matching pages existed is the quit signal. The residue is named pages consulted, and anything durable landed in Workbench or the wiki.

The same order, after something durable has been filed: the wiki was asked first.

## Links into the knowledge base

- [[notes/index|notes/index.md]] — public front door. Always first.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — why compiled wiki beats re-reading source files.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]] — how sources become pages.
- [[Wiki Health Checks|Wiki Health Checks]] — the audit sibling.

## Open Questions

When is a web-first search the right first move — vault empty, vault stale, or a question the wiki was never meant to hold?

## Sources

- [[AGENTS]] — live Query operation.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the compiled-first pattern.
