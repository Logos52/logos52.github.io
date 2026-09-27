---
title: "Wiki Status, Health & Breakdown Passes"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-09-27
written-by: opus
model: grok
source-count: 2
method: draft-2026-09-27
prose-model: opus
aliases:
  - Wiki Health Checks
  - Wiki Status Checks
  - Wiki Breakdown Pass
merged-from:
  - Wiki Status Checks
  - Wiki Breakdown Pass
description: "The status, lint and breakdown passes that find problems across the wiki and report them before any page changes."
tags:
  - workflow
  - lint
  - llm
  - audit
  - maintenance
  - wiki-health
  - wiki-expansion
---

# Wiki Status, Health & Breakdown Passes

A health check is a pass by an AI model over a whole wiki, looking for problems and reporting them to the wiki's owner without changing any page. A wiki that nobody maintains fills with orphan pages, stale claims and contradictions nobody has noticed, and people give up on it when the upkeep grows faster than its value. Regular passes catch these problems while they are small, and a model makes the upkeep cheap enough to keep doing.

## Core takeaways

- Every pass starts from a full catalog of pages.
- Report first; do not move or rewrite files during the pass.
- Status, lint and breakdown are one sweep with different permissions.
- Show a table of candidate pages before creating any.
- Unanswered questions go only to a list for later sessions.
- A tracked file is public on GitHub even if the published site hides it.

## Three passes

The three passes cover the same tree and start from the same files. What separates them is what the pass may do: look, flag, or create. A status pass answers what needs cleanup and whether the public site is sound. A lint pass runs the full set of checks on a schedule. A breakdown pass looks for new pages to make, and it is the only one allowed to create anything, after the owner sees the candidates.

| Pass | Permission | When to run it |
| --- | --- | --- |
| Status | look | the owner asks what state the wiki is in |
| Lint | flag | periodic review |
| Breakdown | create | a hub has grown large, or one idea sits on several pages |

## The status walk

The walk reads the public index of main pages, the recent log of operations, the top-level folders and the catalog. It counts pages by folder and type and lists what changed recently. Anything suspicious is flagged for the lint and left as it is.

- Counts by folder and by page type.
- Recently updated pages.
- Likely orphans, pages with no sources, stale pages, bloated pages.

## The lint checks

Each check below looks for a different problem. Some come from the way pages are built, such as a page with no sources. Others appear only as the wiki grows, such as a claim a newer source has overturned, or a concept mentioned on many pages that has no page of its own.

- Sources that were never compiled.
- Pages with no sources.
- Orphans: pages nothing links to.
- Duplicates and contradictions between pages.
- Stale claims a newer source has replaced.
- Concepts mentioned without a page of their own.
- Missing links between related pages.
- Pages that should be split.
- Public or private risk.

The privacy check matters because the repository is public. A file git tracks can be read as raw text on GitHub even if the site never renders it, so private material has to stay out of the repository altogether. A source audit script flags tracked files that hold private content.

## The report

A pass ends in a report, not in edits. A long report goes in a drafts folder, in a dated file named with the model, and the log gets a line. The owner decides what to act on.

- Summary, findings, suggested edits.
- A table of candidate pages before any page is created.
- Open questions go to the list for later sessions, never the owner's journal.
- No new health-check framework or tool is added.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: why a compiled wiki needs audits.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]]: ingest sibling.
- [[journal/index|journal openQuestions]]: human orientation. Do not auto-append here.
- [[02 - System/Writing Standards|Writing Standards]]: how pages should read and how a new page has to be written. Unpublished on the public site.

## Sources

- [[AGENTS]]: live Status, Lint, and Breakdown operations.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: why a compiled wiki needs audits.
