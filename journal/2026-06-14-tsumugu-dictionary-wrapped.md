---
title: "Tsumugu: the dictionary is wrapped — moving to production"
type: journal
created: 2026-06-14
updated: 2026-06-14
tags:
  - journal
  - tsumugu
  - dictionary
  - milestone
  - decisions
---

# Tsumugu: dictionary wrapped (2026-06-14)

Calling the Tsumugu Encoding Dictionary's content phase **done**. Decision: wrap now, polish
later, move to the production phase.

## Final state

- **9,663 entries** (2,662 characters + 7,001 words), validation green — ids unique, filenames canonical.
- **TOCFL A–C complete:** every character and word, A1 through C1.
- **Quality:** the single-source 說文 misquote debt was surfaced (273 gloss conflicts, via the
  re-pointed `crib_diff`) and adjudicated by an Opus pass — verified fixes (苛 → 小草, 乳 → suckle).
- **Tooling fixed:** `crib_diff` keys on 也-gloss mismatch (trustworthy cross-check); queue
  auto-promote killed the recurring `researched→queued` gate; scholar-notes mirrored across twins.

## Explicitly deferred (not gaps)

Captured in `tsumugu/personal/dictionary/POLISH-BACKLOG.md` so they stay findable:
1. Verify the 50 無聲 characters.
2. Re-sync the 276 cosmetic gloss-conflict cribs (entries already corrected).
3. The 579-word frequency tail (reach past TOCFL).
4. C2 / 精通級 — needs an external word list first.

None block coverage or correctness. Polish is post-production.

## Outstanding action

The wrap work — the gloss-fixed entries plus the full maintenance pass — is **uncommitted**
(2,267 files; `.git` is host-side only in this sandbox). The literal wrap is a host-side commit.

## Next: production phase

The content spine is done; the pivot is to **production** — getting the dictionary into the
product. Scope to be re-interviewed (export/build pipeline, the reading-layer integration, the
front-facing Quartz site, or a release). Logged here as the handoff point.
