---
title: "Karpathy LLM-Wiki"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-24
description: "Karpathy's pattern for a knowledge base an AI model writes and maintains: three layers, three jobs, where it fails, how this wiki differs."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - wiki
  - agents
  - knowledge
---

# Karpathy LLM-Wiki

Karpathy LLM-Wiki is a short idea file by Andrej Karpathy for a personal knowledge base that an AI model writes and maintains. It settles who does what: the person who owns the knowledge base collects sources and asks questions, the model writes every page, keeps the links current and flags contradictions.

## Core takeaways

- Keep three folders: raw sources the model may read and never edit, wiki pages the model writes, and one schema file that tells the model how the wiki is laid out and what each job involves.
- Ingest one source at a time and read what the model changed, since a single source can touch 10 to 15 pages.
- An answer to a good question goes back into the wiki as a page, so the question and its answer are not lost in chat history.
- Run a health check now and then for pages that contradict each other, claims a newer source has overtaken, pages nothing links to, and concepts with no page of their own.
- An index file listing every page with a one-line summary is enough for around 100 sources and a few hundred pages; a search tool comes later.
- The file is abstract on purpose: paste it into a coding agent and work out the details with it.

## How it works

```
raw/   sources, never edited
  |  ingest
  v
wiki/  pages the model writes   <-- schema file:
  |  query                          rules for the model
  v
answer, filed back into wiki/
```

- Three layers
  - Raw sources: articles, papers, transcripts, images, data files. The person collects them; the model reads them and never changes them.
  - The wiki: markdown pages the model writes. A summary of each source, pages for people and things, concept pages, comparisons, an overview.
  - The schema: a file such as CLAUDE.md or AGENTS.md that says how the wiki is structured, which conventions the pages follow, and what steps each job takes. The person and the model change it over time as they learn what works.
- Three jobs
  - Ingest: a new file lands in raw. The model reads it, talks through the main points with the person, writes a summary page, updates the index, updates every page the source touches, and adds a line to a log file.
  - Query: the person asks a question. The model reads the index first, opens the pages that match, and writes an answer with citations. An answer can be a page, a table, a slide deck or a chart. A good answer is saved as a new page.
  - Lint: the health check above. The model also suggests new questions and new sources to look for.
- Two special files
  - index.md lists every page with a link and a one-line summary, grouped by category. The model updates it on every ingest and reads it first on every question.
  - log.md is an append-only timeline of ingests, queries and health checks. A fixed prefix on each entry, such as the date and the job name, lets a grep pull the last few entries.
- Tools, all optional
  - Obsidian, a note app, as the place to read: the person follows links and watches Obsidian's graph view, a map of which pages link to which, while the model edits.
  - Obsidian Web Clipper turns a web article into a markdown file for raw.
  - qmd, a local search engine for markdown files that combines keyword search, search by meaning and a model re-ranking what it finds. It has a command line and a server a coding agent can call as a tool, for when the index file stops being enough.
  - Git for history, since the wiki is a folder of markdown files.

People abandon a hand-kept wiki because upkeep grows faster than use: cross-references go stale, summaries fall behind, contradictions go unnoticed. The model can touch fifteen files in one pass and does not skip a link, so upkeep costs close to nothing and the wiki stays current. What remains for the person is choosing sources, steering the questions, and thinking about what the results mean.

## Where it fails

- The file does not claim a compiled page can be followed by a reader who has only that page. A reader who was not in the conversation can meet a term the page never explained.
- A model that holds the whole wiki while writing asserts connections no source contained. A user report from April 2026 described the model welding unrelated notes together; a 2024 study of model-written Wikipedia articles, called STORM, found the same failure and called it over-association.
- The schema drifts from what the model actually does. On this knowledge base, the owner's own wiki, a 355-line schema had drifted from behavior after months on a base of more than 400 pages.
- Links rot as pages are renamed, merged or removed, and nothing catches it between health checks.
- A model cannot read a markdown file with inline images in one pass; it reads the text first and views the images separately.

## What the owner's wiki does differently

- Sources are compiled one at a time, with the source file left as it arrived, the same as the pattern.
- The sentences stay with the owner. In the pattern the model owns the page; here a page is written fresh from a fact list and the owner reads and rejects prose.
- Since 2026-08-22 a page is drafted with the rest of the wiki closed, from notes and a fact list only, so the writer cannot assert links between pages it can see and the reader cannot.

## Related pages

- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]: one source at a time, the source file left as it arrived, the compiled page as the valuable form.
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: a question starts from the compiled pages, and a durable answer can be written back.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the check for pages that contradict each other, pages nothing links to, and gaps after an ingest.
- [[wiki/Systems/Agentic Workflows/Poteto Paved Path|Poteto Paved Path]]: a different job, where a correction to an agent goes into the code or into a check that fails the build.

## Sources

- Andrej Karpathy, idea file `llm-wiki.md`, created 4 April 2026: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- qmd, the local markdown search named in that file: https://github.com/tobi/qmd
