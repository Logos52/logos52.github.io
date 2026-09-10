# CLAUDE.md

**Decision documents** (PRDs, proposals, decision notes, memos) additionally follow the High-Signal Decision Writing section of `02 - System/Writing Standards.md`.

**Vault pages** (wiki, positions, personal) are not briefs; they are made by the pipeline in `02 - System/Writing Pipeline.md`: content and outline first (`02 - System/The Generator.md`, then `02 - System/The Generator - Selfhood v2.md`), the draft written to the owner one paragraph at a time against the holdings ledger, then a rewrite pass by a fresh head holding only the draft and `02 - System/Rewrite Prompt.md`, then a cold read per `02 - System/Cold Read.md`. Outline first is the default for every page; the owner can waive it. Epigrams never ship in any writing, including internal documents (ruled 2026-08-25).

## 4. Surgical Changes

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


## Feedback protocol (standing rule — canonical in ~/Projects/AGENTS.md)

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both, and record the principle in the appropriate standard. Prose is generated as a continuous explanation to a real person first, then filtered through the writing standards — never assembled from rule-compliant fragments.
