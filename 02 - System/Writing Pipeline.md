---
title: "Writing Pipeline"
type: system
status: developing
created: 2026-08-26
updated: 2026-09-05
tags:
  - system
  - writing
---

# Writing Pipeline

This page is the route map for how a page gets written: content, then a pick, then outline, writing, rewrite, cold read, save. Each stage lives in its own file, and that file is the authority. This page carries the running order and the owning file for each, so an agent starting a page knows what to read and when. Where this summary and an owning file disagree, the owning file wins.

The named methods, which of them worked, and which of them died, live in `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/WRITING-PIPELINE-CATALOG.md`. The pick below offers only the Working rows of that catalog.

## The stages

**Content.** The writer reads [[02 - System/Readers|Readers]] and finds the reader this kind of page is for; that is the only picture of the reader he may use. If a page about the subject already exists, it is reduced to a list of facts, one line per fact in the writer's own words, and then closed along with the research bank, the interview, and every other source. The question the friend would ask is written down in one sentence, and if the writer cannot write it there is no page yet. On a positions page, every fact is sorted into position or reason, and reasons never get a section of their own. Owned by [[02 - System/The Generator - Selfhood v2|The Generator — Selfhood v2]], steps 0 through 2, which sits on top of [[02 - System/The Generator|The Generator]], the locked write-act that wins wherever the two seem to disagree.

**Pick.** Before the outline, the writer asks the owner two questions and waits. He does not assume Selfhood v2.

Question 1 is which generator. The Generator, then Selfhood v2, is the default for wiki pages, positions pages, and personal pages. ELI5 is a format and not a writer (ruled 2026-09-05): a contents bar, the subject defined in sentence one, example bullets opening every section, and a figure for each main idea, checked by the gate script beside `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`. Its prose comes from the Fable 5.1 one-pass method in the catalog, and Haiku no longer writes sentences. Selfhood Plain is for replies and reports, not pages.

Question 2 is which seat. Grok 4.6 in this session is the default writer. A fresh Grok session runs the rewrite pass and the cold read. Cowork is research on request, not the default writer. Fable 5.1 in the main window is the seat for the one-pass method, which takes no rewrite pass and no cold read (ruled 2026-09-02, 'Draft B is better than C'). Haiku outside the session was retired as a writer on 2026-09-05.

After the pick, the writer reads only the chosen generator. The catalog at `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/WRITING-PIPELINE-CATALOG.md` is the list he offers. He does not offer the Dead rows.

**Outline.** Before any paragraph exists, the outline goes to the owner: the sections, what each carries, in what register, and what stays out. The shape is whole, part, whole, as [[02 - System/Writing Standards|Writing Standards]] §2 defines it, and each section in the outline says which it is so the shape can be judged before a paragraph exists. The logic of the page lives in this layout rather than in its words, so the prose never says premise, conclusion, inference, or argument; the headings and the order already show which part is which. Outline first is the default for every page, and the owner can tell the writer to skip it for a page. Owned by Selfhood v2, step 2a.

**Writing.** The writer answers the question to the owner in the conversation, one paragraph at a time, and never writes the whole page in one go. After each paragraph he runs the holdings ledger, `scripts/holdings.py`, on the draft as written, and the next paragraph may use only what the ledger holds. A paragraph that refers to something the page never gave is written again from its question, not patched. A sentence flagged SLOP is written again as what this step does; if a diagram of the jobs follows, the sentence does not number them and does not define a job as missing what the last job had. A sentence flagged LOAD asks the reader to hold more than about four things; it is split. One next step per sentence. Owned by Selfhood v2, steps 2b and 3. Under ELI5-Haiku the writing step is the spec, then a cold Haiku call, then a verbatim paste. Holdings still runs on what landed.

**Rewrite.** When the draft is whole, a fresh head that has nothing in front of it but the draft and the prompt block in [[02 - System/Rewrite Prompt|Rewrite Prompt]] rewrites the page into plain, natural English and keeps every fact. The writer never runs this pass on his own draft in the same context, because the gaps in a page are invisible from inside the head that made it. The owner reads and changes the prompt file directly. Skip this pass when the generator is ELI5-Haiku. A second head rewriting those sentences is the thing that generator forbids.

**Cold read.** The page after rewrite goes to a separate reader whose only context is the draft text, following [[02 - System/Cold Read|Cold Read]]. The reader returns every word or reference the page above did not give. A paragraph with an item on the list is written again from its question. The cold read is temporary by the owner's ruling of 2026-08-22 and stays until drafts stop failing it.

**Save.** The draft is saved without rewriting. The gate in Writing Standards §3 deletes and swaps, and nothing else changes. The old page is opened again only to check facts, and a wrong fact is corrected without replacing a sentence.

## Why the pipeline has two passes

The first pass and the rewrite are split because content and register turned out to need different heads. The generator files say what goes on the page; the rewrite prompt says how the sentences sound. Two days of putting register rules into the generator produced the next form of the same fault each time, and the only fix that held was a second pass run by a fresh head on the finished draft. The record is [[journal/2026-08-22-the-context-problem|The Context Problem]], and the standing law that came out of it is in both generator files: never answer a strike with a detector.

## Reading order for an agent starting a page

Ask the owner which generator and which seat, using the Working rows in `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/WRITING-PIPELINE-CATALOG.md`. Then read the chosen generator in full. The default pick is The Generator, then The Generator — Selfhood v2. Read [[02 - System/Rejected Specimens|Rejected Specimens]] before drafting. Writing Standards holds the shape (§2), the gate (§3), what a page owes (§4), and the floor every sentence has to clear (§6). The Rewrite Prompt and Cold Read files are for the second and third heads, not the writer; the writer only needs to know the draft will pass through them, except under the Fable 5.1 one-pass method, which skips both.
