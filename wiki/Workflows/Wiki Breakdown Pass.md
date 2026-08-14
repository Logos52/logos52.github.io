---
title: "Wiki Breakdown Pass"
type: workflow
status: developing
created: 2026-05-08
updated: 2026-08-14
written-by: grok
model: grok
source-count: 1
tags:
  - workflow
  - maintenance
  - llm
  - wiki-expansion
---

# Wiki Breakdown Pass

A breakdown pass finds missing pages and split candidates before a hub is asked to hold more. Breakdown here is a planned search with a table before anything is created, not a crash. Notice comes first. Change comes after the table.

## Table first

A hub is a connector page. It orients. It does not carry every subtopic. The pass is useful when a hub has grown large, when several pages mention the same idea, or when new directions are wanted. [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]] is read-mostly and does not create. This pass is the create-after-table pass.

1. Read [[notes/index|notes/index.md]], recent `log.md`, and the relevant hub pages. Also read `notes/catalog.md`. The catalog is how "mentioned without a page" is findable. It is agent-only, not a public page.
2. Search `wiki/` for recurring named concepts, techniques, workflows, tools, books, people, or systems that have no dedicated page.
3. Identify bloated pages where a subtopic has enough substance to stand alone. A third substantial paragraph is the smell.
4. Rank by usefulness to active systems, number of references, and clarity of purpose.
5. Present a candidate table before creating pages, unless the user has already asked to create them.
6. When creating, add backlinks from the parent or the hub. Update [[notes/index|notes/index.md]] only when a new hub or condensed page earns a front-door link.
7. Append a `compile` or `maintenance` entry to `log.md`.

## What is worth a page

The goal is to identify subtopics with enough practical value to deserve their own page. A candidate is worth creating when it can support a clear role, a useful summary, practical implications, related links, and at least one source or parent page. A page that would only contain a definition and one vague paragraph is not created.

| Kind of page | Split when |
|---|---|
| Hub | A subtopic needs several substantial paragraphs |
| Technique | A step has its own procedure or failure modes |
| Synthesis | A recurring concept is useful outside the original |
| Book | A takeaway becomes a general principle |
| Workflow | A recurring sub-step is reusable |

The candidate table uses five columns: Candidate · Proposed folder · Why it matters · Current references · Priority.

Breakdown that creates stubs, dumps every new page onto the front door, or runs as a status pass is the case against. The price is a table, then only the rows that pass the candidate test. A candidate that cannot support summary, implications, and links, or two passes that only add definition-and-a-paragraph pages, is the quit signal. The checkable residue is a table before creation, an index that moved only for a hub or condensed page, and a log line.

The wiki is larger only where the table said a page could carry its own weight.

## Links into the knowledge base

- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]] — read-mostly sibling. Does not create.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]] — lint sibling. Flags; does not table-then-create.
- [[02 - System/Writing Standards|Writing Standards]] — how a new page has to be written. Unpublished on the public site.

## Open Questions

When is a third substantial paragraph still not a split — a worked example, a bound, a local illustration?

## Sources

- [[AGENTS]] — live Breakdown operation.
