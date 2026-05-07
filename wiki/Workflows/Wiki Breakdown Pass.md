---
type: workflow
status: seed
created: 2026-05-08
updated: 2026-05-08
source-count: 1
tags:
  - llm
  - workflow
  - maintenance
  - wiki-expansion
---

# Wiki Breakdown Pass

A wiki breakdown pass finds missing pages, split candidates, and new connections. It expands the wiki deliberately instead of letting hub pages become overloaded.

## Purpose

The goal is not to create pages for every mention. The goal is to identify subtopics with enough practical value to deserve their own page.

Breakdown is useful when a hub page has grown large, when several pages mention the same idea, or when the user wants new directions for the wiki.

## Workflow

1. Read [[notes/index|notes/index.md]], recent [[log|log.md]], and relevant hub pages.
2. Search `wiki/` for recurring named concepts, techniques, workflows, tools, books, people, or systems without dedicated pages.
3. Identify bloated pages where a subtopic has enough substance to become its own page.
4. Rank candidates by usefulness to the user's active systems, number of references, and clarity of purpose.
5. Present a candidate table before creating pages unless the user has already asked to create them.
6. When creating pages, add backlinks from parent pages and update [[notes/index|notes/index.md]].
7. Append a `compile` or `maintenance` entry to [[log|log.md]].

## Candidate Test

A candidate page is worth creating when it can support:

- a clear role in the knowledge base,
- a useful summary,
- practical implications,
- related links,
- and at least one source or parent page.

Avoid pages that would only contain a definition and one vague paragraph.

## Common Split Patterns

| Parent Pattern | Split When |
| --- | --- |
| Hub page | A subtopic needs several substantial paragraphs. |
| Technique page | A step has its own operating procedure or failure modes. |
| Synthesis page | A recurring concept becomes useful outside the original synthesis. |
| Book page | A takeaway becomes a general principle used elsewhere. |
| Workflow page | A recurring sub-step becomes reusable across workflows. |

## Output

Use a table like this before creating pages:

| Candidate | Proposed folder | Why it matters | Current references | Priority |
| --- | --- | --- | --- | --- |

## Related

- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[00 Command Center/Writing Standards|Writing Standards]]

## Sources

- [[AGENTS]]
