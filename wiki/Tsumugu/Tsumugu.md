---
title: "Tsumugu"
type: moc
status: developing
created: 2026-07-17
updated: 2026-07-17
tags:
  - tsumugu
  - moc
  - projects
  - language
---

# Tsumugu

This wing maps the Tsumugu project: an open-source graded-reader engine (Apache-2.0, client-side, offline, no paid API in the core loop) carrying a Traditional-Chinese (Taiwan) reading system on top — an in-browser reader with per-word knowledge tracking and comprehensible-input scoring, an encoding dictionary, a published Quartz wiki, and a companion-reading series that follows the ACCC textbook (當代中文課程, Books 1–5, 64 lessons) through a recurring eleven-character cast with frozen, locally-synthesized voices. A Vietnamese pack bootstraps through the Hán-Việt bridge — Chinese leveraged into Vietnamese's Sino-Vietnamese vocabulary. The craft system built to keep that cast believable across five books — arcs, moral cores, character webs, story under a vocabulary ceiling — grew into its own wing, [[wiki/Story Craft/Story Craft|Story Craft]].

**Start here:** [[projects/tsumugu|the project page]] for what it is, how it's built, and status, then [[wiki/Story Craft/The Moral Core|The Moral Core]] for the cast's engine — the laws each character pays for, forged and tested by their arcs.

## The cast

Portraits, voice lines, and catchphrases: [the cast page](/tsumugu/cast-profiles.html). Each name below opens the character's own page.

- [沈文](/tsumugu/cast/shen-wen.html) — the maker; the American veteran with the hand-built robot companion
- [阮草](/tsumugu/cast/ruan-cao.html) — the one who chooses her people; from Hanoi, love as a thing you do
- [星野遙香](/tsumugu/cast/hoshino-haruka.html) — the Osaka super-fan, camera always up
- [金多恩](/tsumugu/cast/kim-da-eun.html) — the quiet perfect test-taker who sees what's real
- [白龍](/tsumugu/cast/bai-long.html) — the deadpan watcher on the fourth floor
- [阿迪](/tsumugu/cast/adi.html) — the warm Jakarta host who answers everything with food
- [林薇](/tsumugu/cast/lin-wei.html) — the local fixer who knows every shortcut
- [小圖](/tsumugu/cast/xiao-tu.html) — the palm-sized robot; care, not capability
- [蘇老師](/tsumugu/cast/teacher-su.html) — the teacher who names people
- [吳老闆](/tsumugu/cast/boss-wu.html) — the café owner; feeds first, asks nothing
- [將軍](/tsumugu/cast/general.html) — the café cat; likes almost no one

## The story system

- [[wiki/Story Craft/The Moral Core|The Moral Core]] — a moral core is the short list of laws a character will pay for; the arcs forge it, and it is tested by the arcs. Carries the full cast table: each core, what forged it, what tests it.
- [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Story Under a Vocabulary Ceiling]] — the constraint that shapes every reading: a full arc stages at 250 characters and deepens book by book, interiority arriving exactly as fast as the reader earns the language to hold it.
- [[wiki/Story Craft/Arc Types|Arc Types]] — the shapes the cast's arcs run on: five types, one skeleton, fixed by a single decision at the crux.
- [[wiki/Story Craft/Story Craft|Story Craft]] — the whole wing: character and interiority, ensemble architecture, theme, serialized structure — nineteen pages distilled from building this cast.

## The product

- [[projects/tsumugu|Tsumugu]] — the project page: comprehensible-input generator meets graded reader, with the build story and stack.
- [[projects/tsumugu-ed|Tsumugu Ed]] — the encoding dictionary: character pages built on form and story.
- Live: [the site and reader](https://logos52.github.io/tsumugu/) · [the graded-reader wiki](https://logos52.github.io/tsumugu-wiki/) · [the engine, Apache-2.0](https://github.com/Logos52/tsumugu)

## The build record

- [[journal/2026-06-04-tsumugu|The build log]] — the engine and reader, phases 0–7.
- [[journal/2026-06-06-tsumugu-voice|The voice log]] — the listening bake-off that chose local open-source TTS; every character's voice frozen as description + seed.
- [[journal/2026-06-23-tsumugu-core-super-app-textbook-companion|The super-app turn]] — the pivot to one unified textbook companion.
- [[journal/2026-07-02-tsumugu-prd-set|The PRD set]] — the signed product spine.
- [[PRDs/PRD-Tsumugu|PRD-Tsumugu]] — the founding document.
