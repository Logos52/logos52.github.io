---
title: Tsumugu
type: hub
status: developing
created: 2026-07-17
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
description: "Tools for learning to read Chinese, with a reading-material generator, a graded reader and a character dictionary, and links to each."
tags:
  - tsumugu
  - hub
  - projects
  - language
  - moc
---

# Tsumugu

Tsumugu is a set of tools for learning to read Chinese: a generator of reading material pitched just above what the learner already knows, a graded reader built on it, and a dictionary that explains each character through its shape and a short story. Everything a learner meets in it is meant to be mostly understood on first reading, so reading more is how the language gets learned.

## Core takeaways

- The reader, the wiki and the engine code are public.
- Each text keeps to a limit on which characters it may use.
- A record of known words sets what the next text can contain.
- Each book's story goes further as the reader knows more characters.
- The dictionary gives each character a page on its form and story.
- Current status is kept only on the Tsumugu project page.

## What the links hold

The links below fall into three groups. The Story Craft pages hold the storytelling side: what the people in the story will not give up, the shapes a story arc can take, and how a full story works under a limit on vocabulary. The project pages hold the product: the generator and reader, and the character dictionary. The logs hold the build history, from the first engine to the change of direction toward one companion app for a textbook.

- Story craft: the cast's values, arc shapes, writing under a character limit.
- Product: the reader and generator, and the character dictionary.
- Build log: the engine and reader, built in phases.
- Voice log: a test of local text-to-speech models for reading texts aloud.
- Each voice is fixed by a written description plus a seed.
- Change of direction: one app built as a companion to a textbook.

## Links

- [[wiki/Story Craft/The Moral Core|The Moral Core]]: the laws a character will accept a cost to keep, and the full cast table
- [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Story Under a Vocabulary Ceiling]]: a full story arc written under a hard limit on how many Chinese characters the text may use, with the story going deeper in each book as the reader learns more of the language
- [[wiki/Story Craft/Arc Types|Arc Types]]: five arc shapes that share one underlying structure, where a single decision at the crux sets which shape an arc takes
- [[wiki/Story Craft/Story Craft|Story Craft]]: the full story craft section, written from the work on this cast
- [[projects/tsumugu|Tsumugu]]: a comprehensible-input generator combined with a graded reader; the page covers how it was built, the stack, and the status
- [[projects/tsumugu-ed|Tsumugu Ed]]: an encoding dictionary, with a page for each Chinese character built on its form and a story
- [[journal/2026-06-04-tsumugu|The build log]]: engine and reader, phases 0–7
- [[journal/2026-06-06-tsumugu-voice|The voice log]]: a comparison test of local open-source TTS models; each voice fixed as a description plus a seed
- [[journal/2026-06-23-tsumugu-core-super-app-textbook-companion|The super-app turn]]: the change of direction to one unified textbook companion
- [[journal/2026-07-02-tsumugu-prd-set|The PRD set]]: the signed documents that define the core of the product

Live: [the reader](https://logos52.github.io/tsumugu/) · [the wiki](https://logos52.github.io/tsumugu-wiki/) · [the engine](https://github.com/Logos52/tsumugu).

Status, stack, known-word band, export, and conversion guard are kept only on the project page, because copies of them elsewhere would go out of date. The founding PRD is kept only in the vault and is not linked publicly. The reader, the wiki, the repo, and the Moral Core are all public.

## Sources

- [[projects/tsumugu|the project page]]: the authoritative source for status
- [Reader](https://logos52.github.io/tsumugu/) · [wiki](https://logos52.github.io/tsumugu-wiki/) · [engine repo](https://github.com/Logos52/tsumugu)
