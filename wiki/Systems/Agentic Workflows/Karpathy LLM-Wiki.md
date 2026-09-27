---
title: "Karpathy LLM-Wiki"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-27
description: "Karpathy's pattern for a knowledge base an AI model writes and maintains: three layers, three jobs, where it fails, how this wiki differs."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - wiki
  - agents
  - knowledge
---

# Karpathy LLM-Wiki

# Karpathy LLM-Wiki

Karpathy LLM-Wiki is a short idea file by Andrej Karpathy for a personal knowledge base that an AI model writes and maintains. It settles who does what: the person who owns the knowledge base collects sources and asks questions, and the model writes every page, keeps the links current and flags contradictions.

## Core takeaways

- Keep raw sources, model-written pages and one schema file apart.
- The model reads raw sources and never edits them.
- One source at a time, since one source can touch 10 to 15 pages.
- A good answer goes back into the wiki as a page.
- Run a health check now and then for contradictions and orphan pages.
- An index file is enough for about 100 sources.
- The file is abstract on purpose, and a coding agent works out the details.

## How it works

The knowledge base has three layers. Raw sources are articles, papers, transcripts, images and data files that the person collects. The wiki is markdown pages the model writes: a summary of each source, pages for people and things, concept pages, comparisons and an overview. The schema is one file, such as CLAUDE.md or AGENTS.md, that says how the wiki is laid out, which conventions pages follow and what steps each job takes, and the person and the model change it as they learn what works.

```
raw/   sources, never edited
  |  ingest
  v
wiki/  pages the model writes   <-- schema file:
  |  query                          rules for the model
  v
answer, filed back into wiki/
```

- Ingest: a new file lands in raw.
  - The model reads it and talks through the main points.
  - It writes a summary page and updates every page the source touches.
  - It updates the index and adds a line to the log.
- Query: the model reads the index, opens matching pages, answers with citations.
  - An answer can be a page, a table, a slide deck or a chart.
- Lint: the health check.
  - Pages that contradict each other.
  - Claims a newer source overtook.
  - Pages nothing links to.
  - Concepts with no page of their own.
  - The model also suggests new questions and sources.

Two files hold the wiki together. `index.md` lists every page with a link and a one-line summary, grouped by category, and the model reads it first on every question. `log.md` is an append-only timeline of ingests, queries and health checks, and a fixed prefix on each entry, such as the date and the job name, lets a grep pull the last few. The tools below are all optional.

- Obsidian, a note app, is a place to read and follow links.
- Its graph view maps which pages link to which.
- Obsidian Web Clipper turns a web article into a markdown file.
- qmd is a local search engine for markdown files.
  - It mixes keyword search, search by meaning and model re-ranking.
  - A coding agent can call it as a tool once the index is not enough.
- Git keeps the history, since the wiki is a folder of files.

People abandon a hand-kept wiki because upkeep grows faster than use: cross-references go stale, summaries fall behind, contradictions go unnoticed. The model can touch fifteen files in one pass without skipping a link, so upkeep costs close to nothing. What remains for the person is choosing sources, steering the questions and thinking about what the results mean.

## Where it fails

The idea file does not require that a page make sense to a reader who has only that page, so a reader can meet a term the page never explained. A model that holds the whole wiki while writing also asserts connections no source contained. A user report from April 2026 described the model joining unrelated notes, and STORM, a 2024 study of model-written Wikipedia articles, found the same failure and called it over-association.

- The schema drifts from what the model actually does.
  - On this site, a 355-line schema drifted over months on 400-plus pages.
- Links break as pages are renamed, merged or removed.
- Nothing catches broken links between health checks.
- A model reads a markdown file's text first and its images separately.

## This desk's wiki

This site is the owner's own wiki, and it follows the pattern for sources: each is compiled one at a time and the source file stays as it arrived. It differs on who owns the sentences: in the pattern the model owns the page, and here a page is written fresh from a fact list while the owner reads and rejects the prose. The rest of the wiki is closed while a page is written.

- Since 22 August 2026, pages are drafted with the rest of the wiki closed.
- The writer works from notes and a fact list only.
- That keeps the writer from linking pages the reader has not seen.

## Related pages

- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]: one source at a time, the source file left as it arrived, the compiled page as the valuable form.
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: a question starts from the compiled pages, and a durable answer can be written back.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the check for pages that contradict each other, pages nothing links to, and gaps after an ingest.
- [[wiki/Systems/Agentic Workflows/Poteto Paved Path|Poteto Paved Path]]: a different job, where a correction to an agent goes into the code or into a check that fails the build.

## Sources

- Andrej Karpathy, idea file `llm-wiki.md`, created 4 April 2026: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- qmd, the local markdown search named in that file: https://github.com/tobi/qmd
