---
title: Tsumugu
type: hub
status: developing
created: 2026-07-17
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
written-by: grok
model: grok
tags:
  - tsumugu
  - hub
  - projects
  - language
  - moc
---

# Tsumugu

Tsumugu is an offline graded-reader engine. It has a Taiwan-Mandarin pack, a Vietnamese pack that uses Vietnamese words of Chinese origin, and a fixed cast of characters who go through the lessons of a classroom textbook. The project's status and stack are on the project page.

The engine is open-source and runs client-side. Its core loop does not use a paid API. The first pack is Traditional Chinese as spoken and written in Taiwan. The Vietnamese pack starts from the [[wiki/Language/The Han-Viet Bridge|Hán-Việt bridge]]: the Sino-Vietnamese words a Vietnamese speaker already knows, used as a starting point for learning Chinese. Companion stories follow a five-book classroom Mandarin series. One pack is built on that series. A reader does not need to buy the series to use the engine. Each character's voice is fixed: the sound of their speech is stored as a written description plus a local synthesis seed, so it stays the same from one generation to the next. The in-browser reader tracks what the user knows word by word and scores how much of a passage the user already knows.

## The class

Six people are in the class in Book 1. A hand-built robot goes everywhere with them.

| | | |
|---|---|---|
| [沈文 Shěn Wén](/tsumugu/cast/shen-wen.html), the builder | [阮草 Ruǎn Cǎo](/tsumugu/cast/ruan-cao.html), the Tender | [星野遙香 Xīngyě Yáoxiāng](/tsumugu/cast/hoshino-haruka.html), the Osaka super-fan |
| [金多恩 Jīn Duō'ēn](/tsumugu/cast/kim-da-eun.html), the conservator | [阿迪 Ā Dí](/tsumugu/cast/adi.html), the Jakarta maker | [白龍 Bái Lóng](/tsumugu/cast/bai-long.html), the deadpan far-seer |
| [小圖 Xiǎo Tú](/tsumugu/cast/xiao-tu.html), the companion | | |

The locked portraits are at `/tsumugu/portraits/locked/`. 沈文 is the builder. 小圖 is a keychain-sized robot that travels in 沈文's bag. On the desk it is silent at first, and then it speaks in short, dreamy four-syllable phrases. 阮草 is from Hanoi. She is the Tender, and she stays calm under pressure. She grows mushrooms that should not be able to exist, and she gives each person the mushroom they need. 星野遙香 raises the mood of the group. She always has her camera up, and she tries the stinky tofu first. 金多恩 gets perfect scores and never checks them. She gives her judgments in four-character phrases, and she repairs broken things without drawing attention to it. 阿迪 stops arguments by offering food. He plays claw machines to win. 白龍 is an Englishman with a very dry manner and a very deep bass voice. He wears binoculars around his neck, and the café cat sleeps on him.

Supporting characters already have pages: [林薇](/tsumugu/cast/lin-wei.html), the local fixer; [蘇老師](/tsumugu/cast/teacher-su.html), the teacher who gives the students their names; [吳老闆](/tsumugu/cast/boss-wu.html), the host; [將軍](/tsumugu/cast/general.html), the café cat. Portraits, voice lines, and catchphrases are on [/tsumugu/cast-profiles.html](/tsumugu/cast-profiles.html). On that page, each portrait and each name links to that character's own page.

## Story craft

The system built to keep this cast believable across five books became a separate section of the wiki, [[wiki/Story Craft/Story Craft|Story Craft]]. It covers character and interiority, ensemble, theme, and serialized structure, and it was written from the work of building these characters. Read [[projects/tsumugu|the project page]] first for what the engine is, how it is built, and its status. Then read [[wiki/Story Craft/The Moral Core|The Moral Core]], which covers what drives each member of the cast: the short list of laws each character will accept a cost to keep. Each character's story arc first forms these laws and then tests them.

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
