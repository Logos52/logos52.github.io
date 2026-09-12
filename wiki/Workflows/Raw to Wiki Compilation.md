---
title: "Raw to Wiki Compilation"
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
  - ingest
  - llm
  - source-ingestion
---

# Raw to Wiki Compilation

Raw to Wiki Compilation is the workflow for taking one source at a time into the knowledge base. The compiled page is the valuable form of a source. A source file left in a pile is not.

One run of the workflow takes in one source, makes wiki pages better, writes a row in the Source Index, and appends a line to `log.md`. The Source Index is the register of what has been taken in. The source file stays as it arrived. The pile of source files does not change. The wiki pages are what get more valuable.

## Core takeaways

- One run handles one source: land it, extract metadata, update pages, write an index row, append a log line.
- Read `notes/catalog.md` before minting a page. Without the catalog, ingest mints duplicates. The catalog is agent-only, not a public page.
- Source files are immutable evidence and are not overwritten.
- Wiki pages stay synthetic: they explain, compare, connect, and cite. Long copyrighted text is not copied into public wiki pages.
- One source note per source, and one wiki page per durable concept.
- After a run, three things can be checked: a Source Index row, an unchanged source file, and a log line.

## The steps for one source

1. Land the source in the inbox, the sources folder, or the private source folder when explicitly approved. The private folder is read-only for agents unless the user allows a write.
2. Read [[notes/index|notes/index.md]], the Source Index, and recent `log.md`. Also read `notes/catalog.md` before minting a page.
3. Extract metadata. The live set is title, author, URL, date, type, topic, and publication/privacy risk. License is still useful.
4. Add or update the source row in the Source Index.
5. Identify durable concepts and contradictions with existing pages.
6. Create or update wiki pages for those concepts. Every page touched should become meaningfully better.
7. Add backlinks between source notes, concepts, tools, people, papers, and workflows.
8. Update [[notes/index|notes/index.md]] only if a new hub or condensed page needs a front-door link. The catalog regenerates on build. The index is not a dump of every ingest.
9. Append an ingest or compile entry to `log.md`.

## What must not happen

1. Source files are not overwritten. They are immutable evidence.
2. Long copyrighted text is not copied into public wiki pages.
3. Wiki pages stay synthetic: explain, compare, connect, and cite.
4. One source note per source.
5. One wiki page per durable concept.

## How a run goes wrong

Three failures are the reason for these rules: an ingest that pastes source text into a page, an ingest that mints a duplicate page because the catalog was skipped, and a front door that lists every new page.

A run costs metadata, a Source Index row, and a page made meaningfully better. A dump does not count as any of those.

Stop the run when a new wiki page turns out to be a long excerpt, or when a concept that already has a page gets a second one.

## How to practice this

1. Land one source in the inbox or the sources folder. Use the private source folder only with explicit approval. Check afterwards that the source file is unchanged.
2. Read notes/index.md, the Source Index, recent log.md, and notes/catalog.md. Notice whether one of the source's concepts already has a page.
3. Extract title, author, URL, date, type, topic, and publication or privacy risk. Add or update the source row in the Source Index.
4. Create or update a wiki page for each durable concept in the source. Read each page after the edit and ask whether it is meaningfully better.
5. Add backlinks between source notes, concepts, tools, people, papers, and workflows. Add a front-door link in notes/index.md only for a new hub or condensed page.
6. Append an ingest or compile entry to log.md. Then look for all three: the index row, the unchanged source file, the log line.

## Related pages

- [[notes/index|notes/index.md]]: front door. Updated only for a new hub or condensed link.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the three-layer pattern.
- [[Wiki Health Checks|Wiki Health Checks]]: lint after ingest.
- [[Question Answering Against a Wiki|Question Answering Against a Wiki]]: the query workflow.

## Open questions

When does a source stay uncompiled forever, cited, indexed, never turned into a page?

## Sources

- [[AGENTS]]: live Ingest operation.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: the compiled-first pattern.
