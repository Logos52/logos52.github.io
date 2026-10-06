---
title: "Knowledge Base as Thinking Partner"
type: workflow
status: developing
created: 2026-05-12
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
description: "Using a wiki and an AI model to decide what to think about next, with a weekly review of links, patterns and contradictions."
tags:
  - workflow
  - knowledge-base
  - metacognition
---

# Knowledge Base as Thinking Partner

A knowledge base, also called a vault, is a set of notes kept in one place, and it can be used to decide what to think about next as well as to store what was read. Most vaults drift toward storage: sources pile up, nobody asks the notes anything, and they never change a decision. Here a person and an AI model work on the same notes, and the notes turn into questions, links between ideas and a choice of what to work on.

## Takeaways

- A vault used only for storage becomes an archive nobody reads.
- The person picks sources and asks questions.
- The model does the summarising, linking and filing.
- A good answer is filed back as a new wiki page.
- A weekly review looks for links, patterns and contradictions.
- If saving new material stops, the review has nothing new to work on.

## How it works

The vault has three layers: source files that are never edited, wiki pages written from them, and a rules file that tells the model how to maintain both. Every note is plain text in one folder, so a model can read across all of them at once. When the notes lived in separate apps, the person had to find and make each link by hand. Keeping links and summaries up to date is the work that makes people give up on a wiki, and it is the part handed to the model.

- Each new source note has the same five fields.
  - The core argument in one sentence.
  - Three to five key points.
  - A reaction, left blank for the person to write.
  - The existing notes it relates to.
  - One question it leaves open.
- The related-notes field does the linking people once did from memory.
- A health check on the wiki also proposes new questions and sources.

| | Archive | Thinking partner |
| --- | --- | --- |
| Goes in | sources | sources, reactions, questions |
| Comes out | search results | links, contradictions, a next question |
| A good answer | stays in a chat | becomes a wiki page |
| A contradiction | goes unnoticed | is quoted and left open |

## The weekly review

Once a week the model reads every note added in the last seven days and writes what they mean together, rather than a summary of each. Checking a week's input before choosing the next step is a form of [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|metacognition]], which means watching your own thinking. A quiet week still gives a useful review, because it shows which subjects got no attention.

- Links: two or three non-obvious ones between separate notes.
- Patterns: a theme in three or more notes, named in one sentence.
- Contradictions: two notes that conflict, both quoted, left unresolved.
- One note most worth developing, with one sentence on why.

## Where a thought goes

Not every thought belongs on a wiki page. Passing thoughts and open questions change from week to week, so they go to a lighter place, and a later session picks them up from there. Only a good answer or comparison is settled enough to become a page.

- Passing thought, active question, current focus: the [[journal/index|journal]].
- A question the wiki could not answer: a list kept for later sessions.
- A good answer or comparison: a new wiki page.

## Where it fails

The workflow depends on new material coming in. When saving new sources stops, the vault goes stale within about two weeks, and the review stops finding links. Saving a link or a note has to take under ten seconds, from any device, or it will not happen.

- Slow saving: things are not saved at all.
- A review that only summarises: no links, no next question.
- Contradictions settled by the model: the person loses the decision.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the three-layer pattern this workflow sits on.
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]: how sources become pages.
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: how a question is answered from the wiki first.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the lint workflow.
- [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition: The Control Layer]]: the control layer the weekly review is a special case of.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the building entry page, and the questions the workflow starts from.
- [[journal/index|Journal]]: temporary thinking, and the destination for a passing thought, an active question, and current focus.

## Sources

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]: vault pattern this workflow sits on.
- [[AGENTS]]: house operating rules for ingest, query, and write-back.
- Sönke Ahrens, *How to Take Smart Notes* (2017); Vannevar Bush, "As We May Think" (1945); Douglas Engelbart (1962): the popular "notes as thinking" lineage. Named here only. Not required reading. Nothing in them replaces the five moves or the archive/partner table.
