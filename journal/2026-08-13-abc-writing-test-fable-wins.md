---
title: "A/B/C writing test: Fable takes all three"
type: journal
created: 2026-08-13
updated: 2026-08-13
tags:
  - journal
  - llm-wiki
  - writing
---

# A/B/C writing test: Fable takes all three (2026-08-13)

**Ruling on 13 August: Fable writes the wiki regeneration.** Retired for routing on 1 September ([[journal/2026-09-01-grok-writes|Grok writes]]). Three pages, three arms each — the page as it
stands, Grok 4.6, and Fable — all working from identical research banks and a byte-identical brief.
Wedge's verdict on reading them: Fable better in all three cases, *"and it's not even close."*

## What was tested

| Page | Why it was chosen |
|---|---|
| Fixed vs Growth Mindset | Reader owns the term, so a definition delivers nothing. The operating claim sits buried at line 203 of the control — could an arm find it and lead with it? |
| ICS System | Reader does not own the term, so the definition is the payload — but the page is tangled in paid-course material a reader cannot reach. |
| Attention Management — Preserving Flow | Ordinary competence against heavy evidence. The control case. |

Both arms were blind to the original page and to each other, wrote from the same bank, and were held
to the same constraints. Shared brief:
`01 - Workbench/regen-2026-08/abc-test/SHARED-BRIEF.md`

## Mechanical layer

All six regenerated pages passed: no links lost, no composed prose carried over. The mechanical
layer did not separate the arms at all, which is the expected result — it verifies compliance, not
quality.

The single sharp divergence was length on ICS System: Grok cut the body from 1,113 words to 512,
Fable took it to 1,293. Grok's cut followed the bank's own instruction to shrink the page to a door;
the ruling went against it anyway.

## Two flaws in the test, on the record

**The blind was broken by the board.** The comparison board printed each pane's file path, and the
paths read `abc-test/fable/` and `abc-test/grok/`. The letters were shuffled independently per page
and the shuffle worked — Fable landed B, B, A and the control moved every row — but the paths gave
the arms away regardless. Whether the ruling was made before or after noticing them is unresolved.

**The arms were not equally exposed.** Grok's research lane had written roughly 260 banks against
this vault before its arm ran; Fable came in cold. That cuts in Grok's favour, so it does not
undermine the result — it means a narrow Grok win would have been discountable, and a Fable win is
not.

## What it settles, and what it does not

Settles: Fable writes. This is the second independent comparison pointing the same way — the earlier
Flow State bakeoff had Fable's opening ruled perfect against two Opus arms on the same page from the
same bank.

Does not settle: whether Grok is a weaker writer generally, or weaker *at this vault's register*. It
had the standard, the specimens and the accepted openings in front of it, same as Fable. That is the
honest limit of a three-page sample.

Unchanged: Grok keeps the research lane, where it has been productive — 287 banks on disk against a
255-page queue. Research is agent-agnostic; writing is not.

## Artifacts

- Board: `01 - Workbench/regen-2026-08/abc-test/ABC-BLIND-BOARD.html`
- Arms: `01 - Workbench/regen-2026-08/abc-test/{grok,fable}/`
- Shared brief: `01 - Workbench/regen-2026-08/abc-test/SHARED-BRIEF.md`
- Writing handoff: `02 - System/Wiki Regeneration Handoff.md`

## Next comparison, if there is one

Strip the paths off the board. Copy each arm to a neutral filename before boarding, and keep the map
outside the artifact the ruling is made from.
