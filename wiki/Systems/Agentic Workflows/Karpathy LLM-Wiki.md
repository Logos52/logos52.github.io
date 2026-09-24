---
title: "Karpathy LLM-Wiki"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: ""
method: page-generator-2026-09-22
written-by: grok
tags:
  - wiki
  - agents
  - knowledge
---

# Karpathy LLM-Wiki

## Related pages

- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]: one source at a time, the source file left as it arrived, the compiled page as the valuable form.
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: a question starts from the compiled pages, and a durable answer can be written back.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the check for pages that contradict each other, pages nothing links to, and gaps after an ingest.
- [[wiki/Systems/Agentic Workflows/Poteto Paved Path|Poteto Paved Path]]: a different job, where a correction to an agent goes into the code or into a check that fails the build.

## Sources

- Andrej Karpathy, idea file `llm-wiki.md`, created 4 April 2026: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- qmd, the local markdown search named in that file: https://github.com/tobi/qmd
