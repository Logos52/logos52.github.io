---
title: "Raw to Wiki Compilation"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-10-06
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 2
description: "How a new article, transcript or paper is filed, indexed and written into every wiki page it bears on."
tags:
  - workflow
  - ingest
  - llm
  - source-ingestion
---

# Raw to Wiki Compilation

Raw to wiki compilation is how a new source, such as an article, a transcript or a paper, becomes part of a wiki that an AI model maintains for its owner. The source is filed unchanged and recorded in an index of sources, its facts are written into every wiki page it bears on, and a line is added to a log of operations. Done this way, the facts are worked out once and kept current, and a later question is answered from the pages.

## Takeaways

- Source files are never edited unless the owner asks.
- Every source gets a row in the Source Index.
- One source can change many wiki pages, including ones it contradicts.
- Links go both ways between the pages it touches.
- Every run ends with a line in the log.
- The owner keeps the final say on every sentence.

## The steps

A source arrives as a clipping, a transcript or a paper, and is saved as a file that stays as it is. Before writing anything, the model reads the public index of main pages, a full catalog of pages, the Source Index and the recent log, so it knows what the wiki already holds. It then reads the source and works out which pages the new material changes. Material the owner marked private is read only with his permission.

1. Read the index, the catalog, the Source Index and the recent log.
2. Read the source.
3. Add or update its row in the Source Index.
   - The row holds title, author, URL, date, type and topic.
   - It also notes the risk of publishing the source, or its privacy.
4. Write or update every page the source bears on.
   - Include pages it contradicts.
   - Add links in both directions.
5. Append an entry to the log.

```
new file --> inbox --> source (kept as is)
                         |
                         v
                  Source Index row
                         |
                         v
         wiki page A, page B, page C + links
                         |
                         v
                     log entry
```

## Where things live

The source folders are split by stage, so it is clear what has been compiled and what has not. Drafts have their own workbench folder, and only a finished page goes into the wiki. A log entry starts with the date in square brackets, then one word for the operation, then a title, so the recent history can be read with a simple text search.

- Inbox: new clippings not yet read.
- Sources: material being worked on.
- Processed: sources already compiled.
- Private: sources for the owner only.
- Sessions: records of agent activity.
- Workbench drafts are named with the model first.
- Wiki pages carry no model name.
- Log line: `## [2026-09-27] ingest | Title`.

## Rules for the page

A page is updated in place. The model re-reads it, fits the new material into its existing sections, and changes its updated date. Nothing is added as a note at the bottom. The index gets a new line only when a new hub or condensed page needs a link from it.

- Never invent a source, citation, author, date or URL.
- Mark a claim that is uncertain as uncertain.
- No long copyrighted passages on a public page.
- Full copyrighted transcripts stay private.

The [[wiki/Systems/Agentic Workflows/Karpathy LLM-Wiki|Karpathy LLM-Wiki]] pattern has the model write and own every sentence of the wiki, and this workflow keeps the final say with the owner.

## Related pages

- [[notes/index|notes/index.md]]: front door. Updated only for a new hub or condensed link.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the three-layer pattern.
- [[Wiki Health Checks|Wiki Health Checks]]: lint after ingest.
- [[Question Answering Against a Wiki|Question Answering Against a Wiki]]: the query workflow.
- [[wiki/Systems/Agentic Workflows/Karpathy LLM-Wiki|Karpathy LLM-Wiki]]: the pattern of compiling sources into pages once, with the model owning the sentences. This workflow keeps the sentences with you.

## Sources

- [[AGENTS]]: live Ingest operation.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: the compiled-first pattern.
