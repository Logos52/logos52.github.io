---
title: "Tsumugu"
type: moc
status: developing
created: 2026-07-17
updated: 2026-07-20
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

The six who form the class in Book 1, and the robot who goes everywhere with them. Portraits, voice lines, and catchphrases: [the cast page](/tsumugu/cast-profiles.html). Each portrait and name opens that character's own page.

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1.1rem;margin:1.2rem 0;">
<a href="/tsumugu/cast/shen-wen.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/shen-wen.jpg" alt="沈文 Shěn Wén" style="width:100%;border-radius:10px;display:block;" /><strong>沈文</strong> — the builder</a>
<a href="/tsumugu/cast/ruan-cao.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/ruan-cao.jpg" alt="阮草 Ruǎn Cǎo" style="width:100%;border-radius:10px;display:block;" /><strong>阮草</strong> — the Tender</a>
<a href="/tsumugu/cast/hoshino-haruka.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/hoshino-haruka.jpg" alt="星野遙香 Xīngyě Yáoxiāng" style="width:100%;border-radius:10px;display:block;" /><strong>星野遙香</strong> — the super-fan</a>
<a href="/tsumugu/cast/kim-da-eun.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/kim-da-eun.jpg" alt="金多恩 Jīn Duō'ēn" style="width:100%;border-radius:10px;display:block;" /><strong>金多恩</strong> — the conservator</a>
<a href="/tsumugu/cast/adi.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/adi.jpg" alt="阿迪 Ā Dí" style="width:100%;border-radius:10px;display:block;" /><strong>阿迪</strong> — the maker</a>
<a href="/tsumugu/cast/bai-long.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/bai-long.jpg" alt="白龍 Bái Lóng" style="width:100%;border-radius:10px;display:block;" /><strong>白龍</strong> — the deadpan far-seer</a>
<a href="/tsumugu/cast/xiao-tu.html" style="text-decoration:none;"><img src="/tsumugu/portraits/locked/xiao-tu.jpg" alt="小圖 Xiǎo Tú" style="width:100%;border-radius:10px;display:block;" /><strong>小圖</strong> — the companion</a>
</div>

- [沈文](/tsumugu/cast/shen-wen.html) — the builder; [小圖](/tsumugu/cast/xiao-tu.html) rides in his bag
- [阮草](/tsumugu/cast/ruan-cao.html) — from Hanoi, the cool hand: grows impossible mushrooms, feeds you the one you need
- [星野遙香](/tsumugu/cast/hoshino-haruka.html) — the Osaka super-fan who lifts the room; camera always up, stinky tofu first
- [金多恩](/tsumugu/cast/kim-da-eun.html) — perfect scores she never checks, four-character verdicts, broken things quietly mended
- [阿迪](/tsumugu/cast/adi.html) — the Jakarta maker who ends arguments with food and plays claw machines to win
- [白龍](/tsumugu/cast/bai-long.html) — bone-dry Englishman, cavernous bass, binoculars round his neck, the café cat asleep on him
- [小圖](/tsumugu/cast/xiao-tu.html) — [沈文](/tsumugu/cast/shen-wen.html)'s hand-built keychain-sized robot; silent on the desk, then dreamy four-syllable bursts

The supporting cast — [林薇](/tsumugu/cast/lin-wei.html) the local fixer, [蘇老師](/tsumugu/cast/teacher-su.html) the name-giver, [吳老闆](/tsumugu/cast/boss-wu.html) the host, and [將軍](/tsumugu/cast/general.html) the café cat — arrives on its own pass.

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
