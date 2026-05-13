---
type: workflow
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - workflow
  - source-ingestion
---

# Raw to Wiki Compilation

Source material becomes more valuable when it is turned into durable, linked, cited wiki pages.

## Workflow

1. Add source material or source notes under `raw/` or `Clippings/`.
2. Read [[notes/index|notes/index.md]], [[raw/Source Index|Source Index]], and recent [[log|log.md]] entries.
3. Extract metadata: title, author, URL, date, license, topic, and status.
4. Add or update the source row in [[raw/Source Index|Source Index]].
5. Identify durable concepts and contradictions with existing pages.
6. Create or update wiki pages for those concepts.
7. Add backlinks between source notes, concepts, tools, people, papers, and workflows.
8. Update [[notes/index|notes/index.md]].
9. Append an ingest or compile entry to [[log|log.md]].

## Rules

- Do not overwrite raw evidence.
- Do not copy long copyrighted text into public wiki pages.
- Keep wiki pages synthetic: explain, compare, connect, and cite.
- Prefer one source note per source.
- Prefer one wiki page per durable concept.

## Related Concepts

- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[Wiki Health Checks]]
- [[Question Answering Against a Wiki]]

## Sources

- [[llm-wiki|llm-wiki]]
