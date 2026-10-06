---
title: "Question Answering Against a Wiki"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 2
description: "The order an AI model answers a question in: the index, then wiki pages, then source files only when needed."
tags:
  - workflow
  - query
  - llm
  - question-answering
---

# Question Answering Against a Wiki

When an AI model is asked a question about a subject a wiki covers, it can answer from the wiki pages, which were written from source material such as articles and transcripts, and open the source files only when the pages fall short. A model that searches the source files for every question finds and joins the same pieces each time, and nothing it works out is kept. Reading a short index first, then the pages, is faster, and a good answer can be filed back so the next question starts further along.

- Read the public index first, every time.
- Then read the wiki pages the index points to.
- Open source files only when the pages are not enough.
- Name every page and source the answer used.
- File a good answer back as a new page.
- Put an unanswered question on a list for later sessions.

## The steps

The order runs from the cheapest read to the most expensive. The index is a short list of overview pages and short summary pages, picked by hand, so it shows where a subject lives in a few lines. The wiki pages already hold the links, summaries and flagged contradictions that a fresh search of the sources would have to rebuild. Source files are the last stop, for a detail the pages left out or a claim that needs checking.

```
question
   |
   v
index --> wiki pages --> answer
              |            |
              v            v
   source files, only    new wiki page,
   if pages fall short   if worth keeping

unanswered question --> list for later
```

- Index: overview and summary pages picked by hand, read first.
- Catalog: the full list of pages, kept for AI agents.
- The index, the catalog and a text search are enough locally.
- The published site has its own search, so no extra tool is added.

## What an answer looks like

An answer takes the form the question needs: a short reply, a page, a comparison table, a slide deck or a chart. It names the pages and sources it drew on, so the reader can check it. A comparison or analysis worth keeping becomes a wiki page, so questions add to the wiki the same way new sources do.

- Name the pages and sources the answer used.
- Keep answers that took real work as new pages.
- The owner's live open questions stay in his journal.

## Where it fails

Reading the index and then the pages works while the wiki stays a moderate size, around a hundred sources and a few hundred pages. At that size the index and a text search find what a question needs. Past it, a proper search tool starts to matter. The other failure is a model that skips the wiki and goes straight to the sources, which throws away the work already compiled.

## Related pages

- [[notes/index|notes/index.md]]: public front door. Always first.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: why a compiled wiki beats re-reading source files.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]]: how sources become pages.
- [[Wiki Health Checks|Wiki Health Checks]]: the audit counterpart.

## Sources

- [[AGENTS]]: live Query operation.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: the compiled-first pattern.
