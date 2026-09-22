# CLAUDE.md

**Decision documents** (PRDs, proposals, decision notes, memos) additionally follow the Decision documents section of `02 - System/Writing Standards.md`.

**Vault pages** (wiki, positions, personal) are not briefs. This file is Claude's instruction set for the vault. Grok has its own (`AGENTS.md`, `GROK.md`). For Claude, ruled 2026-09-18 and 2026-09-20:

- The old page is read once and closed, and the page is written fresh as a plain explanation of its subject to the owner, in his style. No step waits on him (ruled 2026-09-20). When he tells Claude to put a specific text on a page, it goes on word for word.
- One style rule: avoid all mannered prose. The target is the owner's own writing in `02 - System/Owner Writing Samples.md`, read before writing a page. What never ships and the page layout are in `02 - System/Writing Standards.md`, which is short. There is no generator file.
- A political page (anything in `wiki/Worldviews & the Political Order/`, or any page arguing a position on politics or society) passes `02 - System/Bias QA.md` before the owner sees it (ruled 2026-09-18).
- Several windows may be working in this vault. Run `git status` before staging. Stage and push only files this window wrote, unless the owner says to push everything.

## Surgical changes

**When updating an existing page, touch only what the new source changes.**

- Don't improve adjacent sections you weren't asked to touch.
- Don't rewrite for style when the task is to integrate new material.
- Match the existing voice and structure.
- Every changed line should trace to the new source or the user's request.
- If you notice something unrelated that looks wrong, mention it — don't silently fix it.

## File Conventions

**Two locations, two different rules. A prefix is a staging marker and never survives promotion.**

| Where | What it is | Filename |
|---|---|---|
| `01 - Workbench/` | Private, gitignored working drafts, until promoted or archived | `[Model] - [Title].md` for a model first pass · `L2 - [Title].md` for a fused synthesis |
| `wiki/**` | **The knowledge base itself** — the durable, published surface | **`[Title].md`. No model name, no tier prefix, ever.** |

**"Fold this into the knowledge base" means `wiki/`.** It does not mean the workbench. Nothing under
`wiki/` has ever carried a prefix; match the frontmatter of the section the page joins (title, type,
status, created, updated, tags).

- Workbench brief frontmatter: title, type: brief, status: draft, created, updated, model, source, source_url, tags

---


## Feedback protocol, for Claude

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both. When he strikes a text, stop. Do not rewrite it until he says what he wants. Do not add a rule, a memory or a record line unless he says "make this a rule" (ruled 2026-09-18). Prose is generated as a continuous explanation to a real person, never assembled from rule-compliant fragments.
