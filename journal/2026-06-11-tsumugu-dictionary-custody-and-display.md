---
title: "Tsumugu dictionary: style pass shipped, corpus gets custody, display rules locked"
type: journal
created: 2026-06-11
updated: 2026-06-11
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu dictionary: custody and display (2026-06-11)

A style-review request ("update the dictionary to the new writing style") surfaced something bigger: the corpus — the project's compounding asset — lived in no repo at all. The session ended with the content under version control, a signed-ready PRD for scaling to 4,000 entries, and a display contract for the entry pages. Same-day second Tsumugu session; the writing standard installed this morning was applied to its first real corpus by evening.

## Decisions

**Style pass: applied corpus-wide, and the register held.** Ten entries rewritten and approved as the sample; generalizing showed the §0.5–0.6 register rounds had already anticipated most of the vault standard — only 5 of 20 entries needed changes (鬧's label-opener, 射's negative opener, three stories where verbs now carry the scene: 刺激, 依賴, 衰退). 智力 stays story-less: what looked like a gap is a recorded transparency-triage decision, honored rather than "fixed." The lesson worth keeping: a well-run authoring contract converges on the same place as the writing standard — the standard's job was catching the residue, not rewriting the corpus.

**Custody: `tsumugu-ed`, private, one JSON file per entry.** PRD-Dictionary-Content-Store written and revised through review. Core calls: JSON over Markdown/SQLite as source (agents author it; every consumer parses it; SQLite stays the compiled export), a unified `entry@1` schema executing the long-flagged C1 merge, hard authored/generated directory split (entries/ hand-authored; indexes/ and exports/ rebuilt, never edited), audio manifests in git but never media. Flip conditions recorded per the new standard. Repo is Wedge's first private one — free; CI minutes are the only metered thing and validation runs in seconds.

**License: CC BY-NC-SA 4.0 at the publish boundary.** Free for students; NC blocks third parties from repackaging the corpus into their own monetized apps — which protects the planned ad revenue. As copyright holder Wedge is unbound by his own license and can dual-license commercially later. Binding guard recorded: CC-CEDICT is BY-SA share-alike; its derived sense data stays in the engine's lookup layer and out of published entries, or the license is infected. Lawyer half-hour before public launch, not before P1.

**Audio narrowed: examples + headword only.** Form/story/meanings render text-only. Cuts full-coverage storage from ~50 GB to ~30 GB, the render queue by a third, and — the unplanned dividend — strips the wave-chrome from every non-example section, which is most of the visual weight on entry pages. Hosting at scale deliberately parked; the manifest design isolates it.

**Display rules: FORM first, peek on demand, English gated.** Three calls, all recorded in tsumugu DECISIONS.md: (1) FORM first on every entry — sitewide rule, kills the per-entry `leadOrder` field, supersedes 鬧's authored story-first lead; (2) shift-to-peek word glosses (tap on touch) — hover alone shows nothing, guess-first preserved; (3) tap-to-reveal sentence translations — amends Round-1's "renders complete" ban via the distinction that survived scrutiny: content staging stays banned, gating *L1 translations* is interference management, the opposite move. 簡明中文 paraphrase rung approved in principle, field reserved, authoring deferred (~20k lines at full corpus if ever filled; `checkDefLevel` is the gate).

**Expansion shape: Simplified joins, Japanese decides later.** Simplified/HSK is a variant layer over the same entries (~95% overlap — a separate dictionary would be the duplicate-notes failure mode at corpus scale). Kanji is genuinely different content; repo-vs-sibling decided when real, with `lang` baked into the schema core now at zero cost.

## Ruled out

- A separate Simplified dictionary (parallel rot of 4,000 near-identical entries).
- CC BY-SA (licenses a competitor to wrap the corpus in their own ad-funded app; going more open later stays possible, the reverse doesn't).
- Markdown or SQLite as the corpus source format.
- Re-rendering the four section clips made stale by the style pass — mooted same day by the audio policy.

## Outstanding

- Two one-click runs on Wedge's side: `PUSH-DICTIONARY.command` (corpus → tsumugu-ed) and `PUBLISH-STYLE-PASS.command` (live demo pages: new text, FORM-first, shift-peek).
- PRD sign-off → P1: `entry.schema.json`, TOCFL+HSK collision dry-run, migration of the 21 artifacts, CI gates.
- Composer: WORK-ORDER-display-redesign.md (tap-reveal modes, wave-chrome strip, touch parity, `zhSimple` render branch).
- Known lag: 射's FORM clip still speaks the pre-pass line until Composer's pass settles whether section players go away entirely.
- Parked: audio hosting backend; license legal check before P3.
