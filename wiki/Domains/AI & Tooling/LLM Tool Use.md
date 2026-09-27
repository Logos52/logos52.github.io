---
title: "LLM Tool Use"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 1
description: "How search, file uploads and code runners put new text in front of a language model, and which tool each kind of question needs."
tags:
  - llm
  - tools
  - context
---

# LLM Tool Use

A large language model on its own can only produce text from what it absorbed in training, and that training stops at a cutoff date and is stored as a blurred average of what it read. Tools are the ways an app puts new text in front of the model: a web search, an uploaded file, or the output of a program the model wrote. Knowing which tool a question needs tells you when to trust an answer and when to check it.

## Core takeaways

- The model knows only its training and what is in the conversation.
- A tool adds text to the conversation for the model to read.
- Recent events need a search, since training ends at a fixed date.
- Exact numbers need a program, since the model guesses at arithmetic.
- A specific book or paper needs uploading, since the model recalls it vaguely.
- Apps differ in their tools, and a missing tool means a guess.
- An answer built on fetched text can be checked against its links.

## How it works

Everything in a chat, your messages and the model's replies, is one running strip of text, cut into small chunks called tokens. That strip is the model's working memory for the conversation, and a new chat starts with an empty one. When the model reaches a question it cannot answer from training, it writes a special marker. The app stops the model, runs the tool, and pastes the tool's output into the strip as ordinary text, and the model then carries on from what now sits in front of it.

```
you ask ──> model writes "search: X"
                  │
            app runs search, pastes
            page text into the chat
                  │
            model answers from that text
```

- The model's own knowledge is a compressed copy of its training text.
- Text in the conversation is read directly and is far more reliable.
- Some models call a tool on their own.
- Others need you to switch the tool on.

## The main tools

Each tool fills a different gap in what the model knows. Search covers anything recent or niche. Uploads cover documents you want read closely, where the model's memory of them would be vague. A code runner covers calculation and charts, where a model working from memory gives answers that look right and are wrong.

- Search: runs queries, visits pages, loads their text, answers with citations.
- Deep research: many searches plus long reasoning, run for tens of minutes.
- File upload: a PDF or chapter turned to text and loaded whole.
- Code runner: the model writes a program and the app runs it.
- Memory: saved notes about you, added to the start of every chat.
- Custom instructions: standing rules on tone and format for every chat.

## How to use it

Match the tool to the gap before you ask. For news or a release date, turn search on instead of trusting the model to notice on its own. To read a paper or a book, paste the chapter in and ask your questions against it. For any sum you could not do in your head, check that the app ran code.

- Open the cited links, since a reference list alone proves nothing.
- A plausible number with no code behind it is a guess.

Most apps also offer a reasoning model, which works through steps before it answers. Try the normal model first and switch to the reasoning model for maths or code.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: how the window is shaped once tools have filled it. LLM Tool Use covers which channels feed the window.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the standard for IDE-agent work. LLM Tool Use does not expand into that hub.
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: the list of skills this tool list sits under. LLM Tool Use is the tool-pattern page beneath it.

## Sources

- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw). Andrej Karpathy, YouTube, 2025-02-28. The base model as a self-contained token-emitter with a cutoff; tools as the channels that give it what pretraining cannot.
