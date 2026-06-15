---
title: "Tsumugu grammar browse fixed; roadmap cut (FSRS out, idioms in); site copy"
type: journal
created: 2026-06-15
updated: 2026-06-15
tags:
  - journal
  - tsumugu
  - decisions
---

# Tsumugu grammar browse + site copy (2026-06-15)

Two strands today: closing out the grammar browse (verify Composer's fixes, hand back the last bug) and a pass of front-facing copy on the Home and About pages. All edits went into the generator (`tsumugu-ed/scripts/render_site.py`, `scripts/site_assets/site.css`), not the build output. Rendered clean — 2662 chars + 7001 words + 515 grammar; `validate.py` green (9663 entries + 515 patterns, ids unique).

## Grammar browse — round 2 verified, round 3 handed back

Composer's round-2 fixes landed and were verified against the live catalog:

- Catalog collapsed **515 → 303 points** (umbrella↔children reconciliation + calibration-vs-official dedup).
- The **464-point 其他語法 "other" wall is gone** — every point now carries a real `function`.
- The **338-point 獨立點 "standalone" wall is gone**.
- Duplicate chips dropped from **53 to 6**.

The cut-by controls (function / tier / family / level) are sound now. One presentation bug remained and was diagnosed: every chip carried the entry's full `definition.en` **sentence** (mean 62 chars, up to 238) as its label, so the finder read as a wall of English prose. Handed back to Composer (round 3, `HANDOFF-grammar-browse-english.md`): chip English must be a terse gloss — `gloss_short()` or the `patternName` parenthetical (不 → "not / won't / no") — with the full definition staying on the entry page. Lead with the glyph; one bilingual label per drawer, not per chip.

**Flagged, not acted:** the function classifier put **132 of 303 points into 連接與列舉 (Connect & list)** — 44% in one drawer, itself a near-wall. Subdividing that function is a separate taxonomy decision, Wedge's call.

## Decisions

**Recall and spacing (FSRS) struck from the roadmap.** No feasible plan, so the spaced-review / recall-before-reveal study mode is out. Removed the 第六 item from the Home "How an entry is built" list. This is a real scope cut, not just copy.

**Idiom (成語) segment added to the roadmap.** Placed as a coverage/roadmap line — "A 成語 idiom segment is next on the loom" — in the Home loom caption, not in the entry-parts list (idioms are a segment, not a part of a character entry) and not yet its own nav segment. Marked "soon."

**Advertising/monetization line removed from the About door.** Struck "Entries are written and checked one at a time… Use of the dictionary costs nothing; light advertising may come later to cover operating costs." About opener now stops at "a dictionary for students of Chinese." (License/CC line below is untouched.)

**Redundancy cut on Home.** Removed the English name line "The name: tsumugu — Japanese, to spin thread" — it duplicated the 紡ぐ tagline directly above it.

**Feedback channel deferred.** Weighed a domain email alias vs. personal Gmail vs. email + GitHub; parked to get the site production-ready. Lean when picked up: domain alias over personal Gmail (keeps nxlogos@ private); GitHub only if technical issues/contributions are wanted.

## Site mechanics

Footer now sticks to the viewport bottom (`body` flex column, `min-height:100vh`; `footer{margin-top:auto}`) so the short About page no longer floats it mid-screen. Site-wide, harmless on long pages.

## Outstanding

- Composer to apply the round-3 chip-English fix and re-render.
- Decide whether 連接與列舉 (132/303) gets subdivided.
- Confirm the umbrella↔children reconciliation is complete vs. partial — 6 duplicate chips still remain after the 515→303 collapse.
- Pick a feedback channel when ready (alias vs. Gmail vs. +GitHub).
