---
title: "Wiki Status, Health & Breakdown Passes"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-09-11
written-by: grok
model: grok
source-count: 2
method: plain-rewrite-2026-09-11
prose-model: fable
aliases:
  - Wiki Health Checks
  - Wiki Status Checks
  - Wiki Breakdown Pass
merged-from:
  - Wiki Status Checks
  - Wiki Breakdown Pass
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

A wiki maintenance pass reads the tree and writes a report. Three passes exist. A status check is a read-mostly audit of the present shape of the knowledge base and the next repair. Lint is a scheduled review of coverage, contradictions, orphans, source discipline, and, in a public repo, whether anything private has leaked. A breakdown pass finds missing pages and split candidates before a hub is asked to hold more, and it puts the candidates in a table before anything is created.

The files stay where they are while any of the three happens. The artifact of a status check or a lint is a dated report. No page is rewritten. The wiki holds its coverage, consistency, and source discipline only under a scheduled review.

## Core takeaways

- A status check is read-mostly. It names the present shape of the wiki and the next repair, and it moves no files.
- Lint runs nine checks, from uncompiled sources to public/private publication risk. In a public GitHub repo the privacy check is required.
- A breakdown pass searches for concepts that have no page and for bloated pages, then puts the candidates in a table before any page is created.
- A lint writes a dated report file to the workbench. A status pass writes one only when the report is substantial. A report with no line in `log.md` cannot be found next month.
- Unresolved questions from a pass go only to `outputs/generated-questions.md`, never to the human journal.
- Pages are flagged, never rewritten beyond a small fix, and never created, except by the breakdown pass after its table passes the candidate test.

## What a pass may and may not do

The wiki keeps its coverage, consistency, and source discipline only under a scheduled review. The review reads the present shape of the knowledge base and names the next repair. The files stay where they are while the read happens. The artifact is a dated report. No page is rewritten.

Four rules hold for a status pass.

1. Files are not reorganized during a status pass unless the user asks.
2. Pages are not rewritten during a status pass unless there is a clear small fix.
3. Recommendations are concrete and page-level.
4. The report stays short enough to act on. Status is read-mostly.

Pages are not created during a lint. Only the breakdown pass creates pages, and only after its candidate table.

## Which pass to run

Run a status check when the ask is what needs cleanup, whether the wiki is healthy, which pages matter most, what should improve next, or whether the public site has obvious structure problems.

Run a lint on a schedule. Lint is a periodic review of coverage, contradictions, orphans, source discipline, and publication risk. An orphan is a page nothing else points to. In a public repo the review also asks whether anything private has leaked.

Run a breakdown pass when a hub has grown large, when several pages mention the same idea, or when new directions are wanted. A hub is a connector page. It orients. It does not carry every subtopic.

## The status walk

1. Read [[notes/index|notes/index.md]], recent `log.md`, and the top-level `wiki/` folders. For a breakdown pass, also read the relevant hub pages. Also read `notes/catalog.md`. The catalog is how counts by type happen without walking the tree, and how "mentioned without a page" is findable. It is agent-only and is not a public page.
2. Count wiki pages by folder and page type when useful.
3. Identify recently updated pages.
4. Identify likely orphans, pages missing source sections, stale pages, and bloated pages. These are flags. The pass does not fix them.
5. Return a concise report with recommended next actions.

## The nine lint checks

1. Uncompiled sources.
2. Wiki pages with no sources.
3. Orphan pages.
4. Broken links.
5. Duplicate concepts.
6. Contradictory claims.
7. Stale pages superseded by newer sources.
8. Good candidate pages not yet written. They are flagged and not created.
9. Public/private publication risk. Private means untracked. A page that is only un-rendered is not private. In a public GitHub repo this check is required.

## The report

A status report holds these fields.

| Field | What it holds |
|---|---|
| Page counts | By folder and type |
| Recently updated | What moved |
| High-value pages | What matters now |
| Orphan candidates | Pages nothing points to |
| Split candidates | Pages the breakdown pass may table later |
| Source gaps | Pages with no sources |
| Public/private risks | High-level only |
| Recommended next actions | Named pages, not generic advice |

Write a durable status report to `01 - Workbench/GPT - YYYY-MM-DD Wiki Status.md` only if the report is substantial. Write the lint report to `01 - Workbench/GPT - YYYY-MM-DD Wiki Health Check.md` unless the user asks for a different location. The lint report carries a summary, findings, and suggested edits. When a durable report or a wiki change is made, append a `lint` or `maintenance` line to `log.md`. A status pass that writes a report and leaves no log line cannot be found next month. Unresolved questions auto-append only to `outputs/generated-questions.md`, never to [[journal/index|journal openQuestions]].

## The breakdown pass

A breakdown pass is a planned search with a table before anything is created. The goal is to identify subtopics with enough practical value to deserve their own page. A status check does not create pages. The breakdown pass creates them, after the table.

After the reading step, with the relevant hub pages read, the pass runs six steps.

1. Search `wiki/` for recurring named concepts, techniques, workflows, tools, books, people, or systems that have no dedicated page.
2. Identify bloated pages where a subtopic has enough substance to stand alone. A third substantial paragraph is the sign.
3. Rank by usefulness to active systems, number of references, and clarity of purpose.
4. Present a candidate table before creating pages, unless the user has already asked to create them.
5. When creating, add backlinks from the parent or the hub. Update [[notes/index|notes/index.md]] only when a new hub or condensed page earns a front-door link.
6. Append a `compile` or `maintenance` entry to `log.md`.

A candidate is worth creating when it can support a clear role, a useful summary, practical implications, related links, and at least one source or parent page. A page that would only contain a definition and one vague paragraph is not created.

| Kind of page | Split when |
|---|---|
| Hub | A subtopic needs several substantial paragraphs |
| Technique | A step has its own procedure or failure modes |
| Synthesis | A recurring concept is useful outside the original |
| Book | A takeaway becomes a general principle |
| Workflow | A recurring sub-step is reusable |

The candidate table uses five columns: Candidate · Proposed folder · Why it matters · Current references · Priority.

## Price, case against, quit signals, and residue

The price of a status pass is a short read, a report only when substantial, and a log line if filed. The price of a lint is a dated workbench file; no page is rewritten. The price of a breakdown pass is a table, then only the rows that pass the candidate test.

The case against a status pass is one that reorganizes, rewrites, files a substantial report with no log line, or says "the wiki needs cleanup" with no page names. The case against a lint is one that only counts broken links, creates pages, dumps into the human journal, or skips privacy. The case against a breakdown pass is one that creates stubs, dumps every new page onto the front door, or runs as a status pass.

Quit signals for a status pass: files moved, pages rewritten beyond a small fix, or a report that cannot be found in `log.md` the next month. Quit signals for a lint: a report with no privacy line in a public repo, or questions appended to the journal. Quit signals for a breakdown pass: a candidate that cannot support summary, implications, and links, or two passes that only add definition-and-a-paragraph pages.

The checkable residue of a status pass is answers to the two status questions, present shape and next repair, any durable file at the live path, and a `lint` or `maintenance` line if it was filed. The residue of a lint is the file at the lint filename, a log line, and the generated-questions bucket receiving any auto-appends. The residue of a breakdown pass is a table before creation, an index that moved only for a hub or condensed page, and a log line. After a breakdown pass the wiki has new pages only where the table said a candidate passed the test.

## How to practice this

1. Before any pass, read `notes/index.md`, recent `log.md`, and `notes/catalog.md`. Notice that the catalog gives counts by type without walking the tree.
2. Run a status check when asked what needs cleanup or which pages matter most. Notice that every recommendation names a page.
3. Run the nine lint checks on a schedule. Notice whether the report has a privacy line. In a public repo it must.
4. Write the report to the dated workbench filename and append a `lint` or `maintenance` line to `log.md`. Notice that a report without a log line cannot be found next month.
5. When a hub has a third substantial paragraph on one subtopic, table it as a split candidate. Notice whether the candidate can support a summary, implications, and links before creating it.
6. Send unresolved questions to `outputs/generated-questions.md`. Notice that nothing is appended to the human journal.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: why a compiled wiki needs audits.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]]: ingest sibling.
- [[journal/index|journal openQuestions]]: human orientation. Do not auto-append here.
- [[02 - System/Writing Standards|Writing Standards]]: how pages should read and how a new page has to be written. Unpublished on the public site.

## Open questions

- How often is "periodic" when the vault is under regen versus when it is quiet?
- What makes a report "substantial" enough to file: a page-count shift, a privacy flag, a split candidate, or only a user request?
- When is a third substantial paragraph still not a split: a worked example, a bound, a local illustration?

## Sources

- [[AGENTS]]: live Status, Lint, and Breakdown operations.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: why a compiled wiki needs audits.
