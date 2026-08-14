---
title: Tsumugu
type: hub
status: developing
created: 2026-07-17
updated: 2026-08-14
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

Tsumugu is an offline graded-reader engine carrying a Taiwan-Mandarin pack, a Vietnamese pack via the Chinese-origin word bridge, and a fixed cast walking a classroom textbook's lessons. This page maps the cast and the doors. Status and stack live on the project page.

The engine is open-source, client-side, and runs without a paid API in the core loop. The first pack is Traditional Chinese as spoken and written in Taiwan. The Vietnamese pack bootstraps through the [[wiki/Language/The Han-Viet Bridge|Hán-Việt bridge]] — a Vietnamese speaker's Sino-Vietnamese words used as a head start on Chinese. Companion stories follow a five-book classroom Mandarin series. That series is one pack's spine, not a product the reader must buy to use the engine. Voices are frozen: each character's speech sound is locked as a written description plus a local synthesis seed so it does not drift. The in-browser reader tracks knowledge per word and scores how much of a passage is already known.

## The class

Six people form the class in Book 1. A hand-built robot goes everywhere with them.

| | | |
|---|---|---|
| [沈文 Shěn Wén](/tsumugu/cast/shen-wen.html) — the builder | [阮草 Ruǎn Cǎo](/tsumugu/cast/ruan-cao.html) — the Tender | [星野遙香 Xīngyě Yáoxiāng](/tsumugu/cast/hoshino-haruka.html) — the Osaka super-fan |
| [金多恩 Jīn Duō'ēn](/tsumugu/cast/kim-da-eun.html) — the conservator | [阿迪 Ā Dí](/tsumugu/cast/adi.html) — the Jakarta maker | [白龍 Bái Lóng](/tsumugu/cast/bai-long.html) — the deadpan far-seer |
| [小圖 Xiǎo Tú](/tsumugu/cast/xiao-tu.html) — the companion | | |

Locked portraits sit at `/tsumugu/portraits/locked/`. 沈文 is the builder. 小圖 rides in 沈文's bag: a keychain-sized robot, silent on the desk, then dreamy four-syllable bursts. 阮草, from Hanoi, is the Tender and the cool hand; she grows impossible mushrooms and feeds you the one you need. 星野遙香 lifts the room; camera always up, stinky tofu first. 金多恩 posts perfect scores she never checks, delivers four-character verdicts, and quietly mends broken things. 阿迪 ends arguments with food and plays claw machines to win. 白龍 is a bone-dry Englishman with a cavernous bass, binoculars round his neck, and the café cat asleep on him.

Supporting names already have pages: [林薇](/tsumugu/cast/lin-wei.html) the local fixer; [蘇老師](/tsumugu/cast/teacher-su.html) the name-giver; [吳老闆](/tsumugu/cast/boss-wu.html) the host; [將軍](/tsumugu/cast/general.html) the café cat. Portraits, voice lines, and catchphrases live on [/tsumugu/cast-profiles.html](/tsumugu/cast-profiles.html). Each portrait and name opens that character's own page.

## The craft that grew

The system built to keep this cast believable across five books grew into its own wing, [[wiki/Story Craft/Story Craft|Story Craft]] — character and interiority, ensemble, theme, serialized structure, distilled from building these people. Start at [[projects/tsumugu|the project page]] for what the engine is, how it is built, and status. Then [[wiki/Story Craft/The Moral Core|The Moral Core]] for the cast's engine: the short list of laws each character will pay for, forged and tested by their arcs.

## Doors

- [[wiki/Story Craft/The Moral Core|The Moral Core]] — laws a character will pay for; the full cast table
- [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Story Under a Vocabulary Ceiling]] — a full arc staged under a hard character cap, deepening book by book as the reader earns the language
- [[wiki/Story Craft/Arc Types|Arc Types]] — five shapes, one skeleton, fixed by a single decision at the crux
- [[wiki/Story Craft/Story Craft|Story Craft]] — the whole wing grown from this cast
- [[projects/tsumugu|Tsumugu]] — comprehensible-input generator meets graded reader; build story, stack, and status
- [[projects/tsumugu-ed|Tsumugu Ed]] — encoding dictionary: character pages built on form and story
- [[journal/2026-06-04-tsumugu|The build log]] — engine and reader, phases 0–7
- [[journal/2026-06-06-tsumugu-voice|The voice log]] — local open-source TTS bake-off; each voice frozen as description plus seed
- [[journal/2026-06-23-tsumugu-core-super-app-textbook-companion|The super-app turn]] — pivot to one unified textbook companion
- [[journal/2026-07-02-tsumugu-prd-set|The PRD set]] — signed product spine

Live: [the reader](https://logos52.github.io/tsumugu/) · [the wiki](https://logos52.github.io/tsumugu-wiki/) · [the engine](https://github.com/Logos52/tsumugu).

This hub is the class photo and the doors. Status, stack, known-word band, export, and conversion guard live on the project page and will rot if copied up. The founding PRD is vault-only; it is not a public door. A stranger can reach the reader, the wiki, the repo, and the Moral Core from here.

## Sources

- [[projects/tsumugu|the project page]] — status authority
- [Reader](https://logos52.github.io/tsumugu/) · [wiki](https://logos52.github.io/tsumugu-wiki/) · [engine repo](https://github.com/Logos52/tsumugu)
