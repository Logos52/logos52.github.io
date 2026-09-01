---
title: "Cold Read"
type: system
status: temporary
created: 2026-08-22
updated: 2026-09-01
tags:
  - system
  - writing
---

# Cold Read

A cold read is a check done by someone who has not read anything but the draft. It exists because the writer cannot see his own gaps: a sentence that assumes something the reader was never told looks complete to the head that holds the thing. The owner ruled on 2026-08-22 that the cold read is temporary. It stays until drafts stop failing it.

## How it is run

1. The draft is finished and the holdings ledger (`scripts/holdings.py`) has been run after every paragraph.
2. A separate agent is given the draft text and nothing else. No research bank, no interview, no generator file, no conversation, no other page. The prompt is the block below, with the draft pasted under it.
3. The agent returns a list. Each item is one sentence, one word or reference in it, and what a reader would have to already know for that word to make sense.
4. Every paragraph with an item on the list is written again by the writer, from the question the paragraph answers. It is not patched.
5. The ledger is run again. If the list was long, the cold read is run again.
6. Only then does the owner see the draft.

## The prompt

> You have never read this page or anything about its subject, its author, or the site it is on. You know ordinary English and ordinary life, including what everyday things like an army, a website, or a face are. Read the text below once, in order. For every sentence, ask: what would I have to already know for this sentence to make sense, and did the sentences above give it to me? Return every word, name, phrase, pronoun, or comparison that the text above did not give you, one per line, with the sentence it is in and what you would need to have been told. Only report a gap that actually stops you following the sentence; do not report ordinary-life knowledge. Report every "it", "this", "that", or "they" that could point at more than one thing in the sentences near it, and say which things.
>
> Then cover every other sentence and read this one alone. Try to tell a friend what happened, in new words, with no empty nouns. If you cannot, report the sentence and the empty nouns. A job defined as lacking what the last job had is this. "Not X but Y" where neither half names a thing in the world is this. An ordinary word used in a private sense that this sentence does not restate is this, even if an earlier sentence defined it. Do not report a join whose words are ordinary, such as "What follows is the short form." Do not report a contrast that names both sides.
>
> Do not judge style. Do not suggest rewrites. Do not read any file. The text is all you have. If nothing stops you in a paragraph, say "clear" for that paragraph.

## Record

- 2026-08-22, What a Label Does, draft by the lane: first read returned 40 items, about half real; the draft was rewritten and read again. Sort and outcome in `01 - Workbench/label-abc-2026-08-22/COLD-READ-1.md`.
- Same day, second draft: the second read passed a sentence whose "it" could be the label or what the writer is ("What this site does differently is where it puts it."). The owner caught it. The prompt had told the reader not to report pronouns with a sensible nearest referent; that exemption came out. The ledger now flags it/this/that with more than one candidate noun nearby.
- Same day, fourth read: the items were holes in the argument, not missing words. Adding clauses to close them made the page longer and opened new holes. When a read returns logic, the page is written again from its question with the argument straight; it is not patched. The reader also catches contradictions between paragraphs, which is the second job it turns out to do.
- 2026-09-01. Owner on The Writing Pipeline: a sentence can use a word the sentence above already defined and still be slop, because a stranger covering the rest of the page cannot say what happened. The prompt now covers each sentence alone. Seeing guide: `01 - Workbench/riddle-sentence-how-to-see.md`. Specimen 36 in Rejected Specimens.
