---
title: Tsumugu
type: project
status: stable
created: 2026-07-17
updated: 2026-11-21
tags:
  - tsumugu
  - hub
  - projects
  - language
source-count: 6
---

# Tsumugu

Tsumugu is a graded Mandarin story product for Vietnamese speakers learning through constrained Han text: fixed 字 floors per book, a recurring café cast, comprehensible-input coverage targets, and story-craft doctrine written to keep everyone alive while bonds and identity carry the stakes. The public cast site holds portraits and voice lines; this wiki page orients the fiction engine and links craft doctrine to build status.

## What the fiction engine assumes

[[wiki/Story Craft/Story Craft|Story Craft]] is the parent hub after the 2026 cut. Arc typing at the crux, non-lethal stakes, motif ledger, world-as-pressure, tonal runs, burnout shape, and reading-frame audits folded there. Operating spine: [[wiki/Story Craft/Story Craft, Condensed|Story Craft, Condensed]].

- [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Story Under a Vocabulary Ceiling]] (word list as reveal schedule; ~250–1000 字 floors; peak scenes near 98% known words.)
- [[wiki/Story Craft/Premise and Controlling Idea|Premise and Controlling Idea]] / moral core (values a person will pay a real price to keep (project moral core).)
- [[wiki/Story Craft/The Wound and the Lie|The Wound and the Lie]], [[wiki/Story Craft/The Character Web|The Character Web]], [[wiki/Story Craft/The Beat Board|The Beat Board]] (interior chains, ensemble web, beat cards and payoff plants.)
- [[wiki/Story Craft/Stakes Without Mortality|Stakes Without Mortality]], [[wiki/Story Craft/Interiority Through Action and Object|Interiority Through Action and Object]] (bonds before threats; objects before feeling-words.)

For entry from Vietnamese, [[wiki/Language/The Han-Viet Bridge|The Han-Viet Bridge]] maps Sino-Vietnamese readings to characters learners already half-know.

## Cast (public site)

Portraits, voice samples, and catchphrases: [cast profiles](https://logos52.github.io/tsumugu/cast-profiles.html). Core table:

| | | |
|---|---|---|
| [沈文](/tsumugu/cast/shen-wen.html) | [阮草](/tsumugu/cast/ruan-cao.html) | [星野遙香](/tsumugu/cast/hoshino-haruka.html) |
| [金多恩](/tsumugu/cast/kim-da-eun.html) | [阿迪](/tsumugu/cast/adi.html) | [白龍](/tsumugu/cast/bai-long.html) |
| [小圖](/tsumugu/cast/xiao-tu.html) | | |

Also live: [林薇](/tsumugu/cast/lin-wei.html), [蘇老師](/tsumugu/cast/teacher-su.html), [吳老闆](/tsumugu/cast/boss-wu.html), [將軍](/tsumugu/cast/general.html). Signature objects and relationship meters in fiction follow the Story Craft pages above (mushroom, camera, mended bowl, batik shirts, red thread, rank gags as spelled in the hub motif section).

## Reader and pedagogy constraints

Stories aim for **comprehensible input**: i+1 difficulty, low anxiety at peaks, compelling enough that the reader forgets the text is foreign. That is design doctrine, not settled SLA law (see hedges on [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Vocabulary Ceiling]]). Engine-side, tutor scoring stays in code ([[wiki/Learning Craft/Don't Outsource the Learning|Let code keep the score]]) so the model teaches but does not own the gradebook.

**Five readings per lesson** (anchor plus texture) mirror Story Craft’s bottle/tentpole split: one arc-and-theme reading, lighter ensemble passes, B-story against A-story gravity, all within the same 字 ceiling for that book.

## Fiction vs. product boundary

This wiki page is orientation for writers and agents maintaining canon. Plot payoffs, unpublished endings, and bible columns live in private project docs and gitignored material where needed; public cast HTML is character marketing, not spoiler storage. When craft doctrine and a cast card disagree, doctrine on Story Craft pages wins until the owner revises the card.

## Agent maintenance

On ingest or compile passes that touch Tsumugu fiction: update Story Craft leaf pages first when doctrine changes; sync this hub link list; do not duplicate merged arc/motif/tone prose here. Point to [[wiki/Story Craft/Story Craft|Story Craft]]. Append `log.md` on substantive compile. Run `npm run verify` when site-facing copy changes.

Voice and portrait assets live under `public/tsumugu/`; changing cast voice samples or HTML cast pages is a site change, not a wiki-only edit. Moral-core tests in MORAL-CORE should stay aligned with [[wiki/Story Craft/Premise and Controlling Idea|Premise and Controlling Idea]] when either file moves.

## Product and build links

| Link | Role |
|---|---|
| [[projects/tsumugu|Project page]] | Stack, status, repo layout |
| [[projects/tsumugu-ed|Tsumugu Ed]] | Dictionary-from-structure companion |
| Reading at your vocabulary | Daily i+1 stories pattern |
| [[wiki/Learning Craft/Don't Outsource the Learning|Let code keep the score]] | Tutor scoring in code, not model memory |
| [Tsumugu wiki (site)](https://logos52.github.io/tsumugu-wiki/) | Public product wiki |
| [[journal/2026-06-04-tsumugu|Build log]] · [[journal/2026-06-06-tsumugu-voice|Voice bake-off]] · [[journal/2026-06-23-tsumugu-core-super-app-textbook-companion|Super-app turn]] · [[journal/2026-07-02-tsumugu-prd-set|PRD set]] | History |

## Open questions

- How moral-core tests distribute across books without repeating the same crucible.
- How 字 budgets gate which character admits which need in which installment.
- How Han-Viet bridge depth scales once stories pass the first 字 floor.

## Sources

- [[projects/tsumugu|Project page]]: stack and status (authoritative for build).
- [Tsumugu wiki](https://logos52.github.io/tsumugu-wiki/): public product docs.
- [[wiki/Story Craft/Story Craft|Story Craft]] hub and [[wiki/Story Craft/Story Under a Vocabulary Ceiling|Vocabulary Ceiling]]: fiction constraints referenced by content pipeline.
- Journal entries listed above: build and product history.