---
title: "Question Answering Against a Wiki"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: opus
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

Question answering against a wiki means an answer starts from the compiled wiki. It does not start from a fresh search. Query is the name of that order: wiki pages first, then anything durable written back. Source files are opened only after the wiki has been asked.

The order has eight steps. It begins at the public front door, [[notes/index|notes/index.md]], and ends with a query entry in `log.md`.

## Core takeaways

- An answer starts from the compiled wiki. A fresh search is not the first step, and source files wait until the wiki has been asked.
- [[notes/index|notes/index.md]] is the public front door and is read first every time. When the full inventory is needed, `notes/catalog.md` is read too. That file is agent-only and is not a public page.
- Wiki pages are read before source files. A single step that names both is the defect this order prevents.
- A useful answer shape is the question, a short answer, a detailed answer, evidence consulted, related concepts, and follow-up questions. That is a shape. Not every query has to fill it.
- Durable answers that need review go to `01 - Workbench/`, which holds private drafts. Durable new insight is promoted into `wiki/`.
- Wiki-first is wrong when the vault has nothing on the topic. In that case, search first, then ingest.

## The eight steps

1. Read [[notes/index|notes/index.md]]. It is the public front door and always comes first. When the full inventory is needed, also read `notes/catalog.md`. That file is agent-only, not a public page.
2. Read the most relevant wiki pages. Source files come after. One step that names both is the defect this order exists to stop.
3. Search related terms across the wiki, the source folders, the workbench, and legacy archives when needed.
4. Write durable answers that need review to `01 - Workbench/`. Workbench holds private drafts. It is not the wiki.
5. Cite the pages and sources consulted.
6. Add unresolved issues to `outputs/generated-questions.md`. Do not add them to the archived `02 - System/Open Questions.md`. Human orientation lives in `journal/index.md` openQuestions and `00 Command Center/Active Questions.md`. Auto-appends go only to the generated bucket.
7. Promote durable new insight back into `wiki/`.
8. Append a query entry to `log.md`. Update [[notes/index|notes/index.md]] only if a hub or condensed front-door link changed.

## What the answer should contain

An answer should stand alone and still be usable as future context. A useful shape is the question, a short answer, a detailed answer, evidence consulted, related concepts, and follow-up questions. That is a shape. It is not a template every query must fill.

What the answer leaves behind is the named pages consulted, plus anything durable landed in Workbench or the wiki.

## When wiki-first is the wrong order

Wiki-first is wrong when the vault has nothing on the topic. In that case, search, then ingest.

The price of the order is reading the index, and the catalog when needed, before any generation. An answer that cites only the open web while matching pages existed shows the order was abandoned.

The order does not change after something durable has been filed. The next answer still asks the wiki first.

## How to practice this

1. Read [[notes/index|notes/index.md]] before you open anything else. Read `notes/catalog.md` too when you need the full inventory. Notice that no source file is open yet.
2. Read the most relevant wiki pages next. Open source files only after those pages. Notice whether any single step of yours named both at once.
3. Search related terms across the wiki, the source folders, the workbench, and legacy archives when the pages fall short. Notice whether the vault held anything on the topic.
4. Write a durable answer that needs review to `01 - Workbench/`. Cite the pages and sources you consulted. Notice that the answer names its evidence.
5. Add unresolved issues to `outputs/generated-questions.md`. Promote durable new insight into `wiki/`. Append a query entry to `log.md`.
6. Check the finished answer for citations to the open web alone. Notice whether matching wiki pages existed. That means the order was abandoned.

## Related pages

- [[notes/index|notes/index.md]]: public front door. Always first.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: why a compiled wiki beats re-reading source files.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]]: how sources become pages.
- [[Wiki Health Checks|Wiki Health Checks]]: the audit counterpart.

## Open questions

When is a web-first search the right first move: vault empty, vault stale, or a question the wiki was never meant to hold?

## Sources

- [[AGENTS]]: live Query operation.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: the compiled-first pattern.
