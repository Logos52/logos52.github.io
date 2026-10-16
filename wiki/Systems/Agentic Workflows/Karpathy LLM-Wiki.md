---
title: "Karpathy LLM-Wiki"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: "A question against a pile of files makes the model search again and save nothing. Karpathy LLM-Wiki has the model write each source into markdown pages that stay, so the next question starts from those pages."
method: page-generator-2026-09-22
written-by: grok
tags:
  - wiki
  - agents
  - knowledge
---

# Karpathy LLM-Wiki

A question against a pile of files makes a large language model search the pile and write an answer, and the next question starts that search again. The title's LLM is that kind of model. Karpathy LLM-Wiki has the model read each new source, a document you chose to keep, once, and write the result into markdown pages that stay, so the next question begins from those pages. The links between pages are already written. Disagreements between sources are already marked. Each new source, and each answer you keep, adds to the pages.

NotebookLM, a product that answers from documents you upload, and a file upload in ChatGPT, the chat product, work the first way. You hand over documents. The model pulls out pieces at question time and writes an answer. A question that has to join several documents makes the model find those pieces and join them again, every time. Nothing is left behind for the next question.

You choose which sources go in, and you ask the questions. The model writes the summaries, the links, and the updates across pages. You rarely write a page yourself. The agent, the model with permission to edit the files, sits open beside Obsidian, the program that opens a folder of markdown and draws the links between the notes. The agent edits the markdown while you talk with it. You follow the links, look at the graph of which pages connect, and read the pages while the edits land.

Keeping pages this way fits a personal record of goals and health, a research topic you stay with for weeks, a book filed chapter by chapter with a page for each character and each theme, or a team wiki fed by threads from Slack, a team chat, plus meeting notes and customer calls, with a person checking what the model changed. It also fits any pile you keep adding to and do not want left as loose files.

## Raw files, wiki pages, and a rules file

The files split into a raw layer, a wiki layer, and a rules file.

Raw files are the articles, papers, images, and data you chose. The model reads them. The model does not change them. They stay the record of what came in.

Wiki pages are markdown the model writes. A source gets a summary. A person, a company, or a tool gets an entity page. An idea gets a concept page. Setting a person beside a company, or one idea beside another, produces a comparison. There is room for an overview and for a synthesis that changes as sources arrive. The model creates these pages and updates them when a new source comes in. You read them.

The rules file tells the model how the wiki is laid out, which conventions to follow, and what to do when a source arrives, when you ask a question, and when the wiki needs a check. Claude Code and Codex are coding agents. For Claude Code that file is often CLAUDE.md. For Codex it is often AGENTS.md. OpenCode is a third coding agent, and it can use the same kind of file. You and the model change the file as you learn what the subject needs. The file is what makes the model keep the wiki, instead of answering as a chat with no files to maintain.

## Ingest, question, and a health check

You drop a source into the raw collection and tell the model to take it in. That pass is an ingest. The model reads the source, talks through the takeaways with you, writes a summary page, updates index.md, updates the entity pages and concept pages the source touches, and adds a line to log.md. index.md is the catalog of pages. log.md is the record of what happened. One source can touch the summary, index.md, log.md, and the entity and concept pages around it. A single source might touch 10 to 15 pages. Taking sources one at a time is the pace to prefer, with you reading the summary, checking the edits, and saying what to emphasize. Many sources at once is allowed, with you checking less. Whichever pace you use, you write the pace into the rules file so the next session does the same thing.

A question goes to the wiki pages. The model looks up the relevant pages, reads them, and writes an answer that cites those pages. The answer can be a markdown page, a comparison table, a set of slides, or a chart. An answer worth keeping is filed back into the wiki as its own page. A comparison, an analysis, or a connection you noticed does not stay only in the chat. The exploration then adds to the wiki the way a source does.

Every so often you ask the model to check the wiki. The check looks for pages that contradict each other, a claim a newer source has replaced, a page nothing links to, a concept that is mentioned and has no page of its own, a missing link, and a gap a web search could fill. The model is useful here at naming the next question and the next source. The check is what keeps the wiki from drifting as it grows.

## The catalog and the log

index.md, the catalog, lists the pages. Each line has a link, a one-line summary, and, if you want it, a date or a count of sources. The lines are grouped, for example entities, concepts, and sources. The model updates the catalog on every ingest. When you ask a question, the model reads the catalog first and then opens the pages. At a moderate size, about 100 sources and a few hundred pages, that catalog is enough. You do not need a separate numerical index of the pages to find one.

The log, log.md, is a list you only add to. Each entry records an ingest, a question, or a health check, and when it happened. If every entry starts with the same kind of heading, a date, the word ingest, and a title, ordinary search can pull the latest entries. The log is how you, and the model, see what changed recently.

When the catalog is no longer enough, a search tool over the markdown helps. One such tool is qmd. qmd searches the files on your machine, from a shell command or as a tool the model can call. The model can also write a simpler search script when you need one. A browser clipper can turn a web article into markdown for the raw collection. Saving the article's images onto disk matters when a remote address later breaks. The model reads the text first, then looks at the pictures on their own, because it does not take in the text and the inline pictures in one pass. The graph in Obsidian shows which pages connect, which pages many others point at, and which pages nothing points at. The files are a git repository, so you have the history of every edit.

People drop wikis because the upkeep grows faster than the wiki repays. Updating a link, refreshing a summary, and noting that a new source contradicts an old claim is bookkeeping, and the bookkeeping spreads across many pages. A model does not forget the link, and it can touch 15 files in one pass. Your job is to choose the sources, direct the analysis, ask the questions, and decide what the pages mean. The model's job is the bookkeeping.

Karpathy LLM-Wiki sits next to a personal store Vannevar Bush described in 1945 and called the Memex, with trails between documents that matter as much as the documents. The open problem in the Memex was who would keep the trails. The model does that upkeep.

The gist that states Karpathy LLM-Wiki is an idea file. You paste the gist to Codex, Claude Code, or OpenCode, and that agent builds the details with you. The gist stays abstract on purpose. Folder names, page formats, and tools depend on the subject and on which model you use. The gist carries the pattern. The agent fills in the rest.

## How you run it

The gist lets the model maintain the pages. The rules file can make the next session repeat the ingest, the question, and the health check. The gist also allows many sources at once, with you checking less. The repeated session and the pile of sources are as automatic as the pattern gets. The write-up does not add a clock or a separate watcher.

Your run is semi-automated. You name the page, and you say what the page has to explain. The model may draft that page, write the links, update the catalog line, and add the log line. You open the page and read it. A page is ready after you have read it. The model does not open the next page, and it does not start a page you did not name. Source files stay as they arrived. [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]] is that one-source pass.

You use a page to keep the setup you build once agents write the code, and to decide whether a result is correct, safe, and worth keeping. You use a page to check whether a way of studying makes you process what you studied, and to keep how Chinese characters are built from parts that get reused. When you want the page that sits next to the one you have open, you open the link yourself.

## Related pages

- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]: one source at a time, the source file left as it arrived, the compiled page as the valuable form.
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]]: a question starts from the compiled pages, and a durable answer can be written back.
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the check for pages that contradict each other, pages nothing links to, and gaps after an ingest.
- [[wiki/Systems/Agentic Workflows/Poteto Paved Path|Poteto Paved Path]]: a different job, where a correction to an agent goes into the code or into a check that fails the build.

## Sources

- Andrej Karpathy, idea file `llm-wiki.md`, created 4 April 2026: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- qmd, the local markdown search named in that file: https://github.com/tobi/qmd
