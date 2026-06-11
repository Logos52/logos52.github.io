# H7 — Replace home ledger strip: open questions + daily retrieval; ledger → footer

Decision (2026-06-11, Wedge): the ledger strip serves visitors, not the primary audience (future-Wedge). It demotes to one footer line; its slot becomes two blocks that make the wiki practice its own teachings. All copy below is final — use verbatim.

## 1. Ledger → footer

- Remove the ledger strip from `HomeLanding.tsx`.
- Footer (all pages): append one mono 11px line in text-faded, from `ledgerData.json`'s most recent entry: `last pass: 2026-06-11 · wiki expansion · 14 pages`. Render nothing if the JSON is empty.
- Keep `tools/ledger.mjs` and the prebuild hook unchanged.
- **Hygiene fix (fold in):** add `quartz/components/ledgerData.json` to `.gitignore` and `git rm --cached` it — it's generated every build and currently churns in git.

## 2. Open questions block

- Source: `journal/index.md` frontmatter `openQuestions` (array of strings — **already populated, do not invent content**). Read it from the journal index's parsed frontmatter at build time.
- Render: heading `Open questions` (Lora 14px), then up to 3 questions as plain text lines (Lora 13px, text-body), each followed by nothing — questions are not links. Below the list, one mono 10px link: `→ journal` to `/journal`.
- If the frontmatter field is missing or empty, render nothing.

## 3. Daily retrieval block

- Purpose: a spaced-retrieval rep against the wiki itself. One page per day, deterministic.
- Client-side (the pick must change daily without rebuilds): reuse the `contentIndex.json` fetch the home graph already makes — do not fetch it twice. Filter to slugs starting `wiki/`, exclude `/index` pages, with modified date ≥ 30 days before today. Pick index = `dayOfYear % candidates.length` (UTC). If no candidates qualify, render nothing.
- Render: heading `Today's retrieval` (Lora 14px); the picked page title as a link (Lora 15px), with a 3px left border in its domain color (`domainOf(slug)` from `domains.ts`); under it, mono 10px text-faded: `untouched 30+ days — reconstruct it before you click.`
- Until the JS runs, the block renders its heading with an empty slot; no layout shift bigger than one line.

## 4. Layout

Two columns in the old strip's position (between legend chips and Trails): Open questions left, Today's retrieval right; `gap: 24px`; stack on mobile (questions first). Top/bottom 1px borders, matching the removed strip's framing.

## Acceptance

- Home shows the two blocks; the retrieval pick is identical across reloads on the same day; footer carries the one-line ledger on every page; `git status` shows no `ledgerData.json` churn after a build.
- Note: `quartz.config.ts` has an uncommitted working-tree change (`Users/**` ignore guard, added by Claude) — include it in this commit.
- Commit: `atlas(H7): open-questions + daily-retrieval strip; ledger to footer`.
