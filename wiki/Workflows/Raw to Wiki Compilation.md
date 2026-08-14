---
title: "Raw to Wiki Compilation"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-08-14
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

The compiled page is the valuable form of a source, not the file left in a pile. Ingest is one source in, wiki pages better, an index row written, a log line appended. The source file stays as it arrived.

## One source in

1. Land the source in the inbox, the sources folder, or the private source folder when explicitly approved. The private folder is read-only for agents unless the user allows a write.
2. Read [[notes/index|notes/index.md]], the Source Index (the register of what has been taken in), and recent `log.md`. Also read `notes/catalog.md` before minting a page. Without the catalog, ingest mints duplicates. The catalog is agent-only, not a public page.
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

Ingest that pastes, ingest that mints a duplicate because the catalog was skipped, and a front door that lists every new page are the cases against. The price is metadata, a Source Index row, and a page made meaningfully better, not a dump. A new wiki page that is a long excerpt, or a second page for a concept that already has one, is the quit signal. The checkable residue is a Source Index row, an unchanged source file, and a log line.

The pile is still the pile. The wiki is what got more valuable.

## Links into the knowledge base

- [[notes/index|notes/index.md]] — front door. Updated only for a new hub or condensed link.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the three-layer pattern.
- [[Wiki Health Checks|Wiki Health Checks]] — lint after ingest.
- [[Question Answering Against a Wiki|Question Answering Against a Wiki]] — the query sibling.

## Open Questions

When does a source stay uncompiled forever — cited, indexed, never turned into a page?

## Sources

- [[AGENTS]] — live Ingest operation.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the compiled-first pattern.
