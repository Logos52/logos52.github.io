---
title: "Dictionary site: Paper & Ink reskin, analytics hooks, English-only lock, and a properly-built search facet"
type: journal
created: 2026-06-19
updated: 2026-06-19
tags:
  - journal
  - tsumugu
  - dictionary
  - design
  - decisions
---

# Dictionary site reskin + analytics + facets (2026-06-19)

Implemented both handoff PRDs (`PRDs/dictionary-handoff/`) against the existing Python static-site generator — `tsumugu-ed/scripts/render_site.py` + `site_assets/`, **no re-platform** — then iterated through a live localhost preview with Wedge into a broader polish + a real search-facet build. All of it landed as one commit `6ede381a` on `vi/data`, pushed to `origin/vi/data` (private backup). The live tsumugu-ed.com deploy is a **separate step** (see Branch/deploy reality) and has not been done.

## What got decided, and why

**Reskin = the 4 DS deltas, applied to `site.css` + `render_site.py`.** Radius scale 16/12/8 (cards round up 8→16); paper-tuned "whisper" resting shadows (light + dark, matching `tokens/spacing.css`); the 狂草 cursive 纺 wordmark as a theme-swapped PNG (vermillion on light, cream `-paper` on dark, CSS-toggled, no JS); heavier prose italics. Where the DS `dict.css` reference lagged the PRD (it kept the old big-drop shadow and 3–4px chips), the **PRD delta + canonical tokens won**; `dict.css` matched only where it didn't contradict.

**Analytics → Cloudflare Web Analytics.** Matches `WORK-ORDER-publish-launch.md`, and the site is confirmed live + Cloudflare-proxied (`cf-ray`), so the GoatCounter fallback ("if not fronted by Cloudflare") doesn't apply. Implementation is **config-driven and empty by default** so dev/CI builds stay clean: env hooks `ANALYTICS_SNIPPET` / `GOATCOUNTER_CODE` / `CF_BEACON_TOKEN` (one wins, async/defer, no cookie banner) + `GSC_VERIFICATION` meta. Because the zone is proxied, the right activation is the **zero-code CF dashboard toggle** — so we *correctly left the build clean* (baking a token would double-count). The flip is Wedge's CF dashboard (no API token locally). Detail in memory [[tsumugu-analytics-seo]].

**Search Console: sitemap submitted; the PRD's "second HTML-tag method" doesn't apply.** GSC is a **Domain property** = DNS-only; the HTML-tag method only exists for URL-prefix properties, and Domain verification is Google's strongest anyway — so we skipped the A3 hardening (the PRD's premise assumed a property type Wedge doesn't have). Sitemap accepted as the full URL `https://www.tsumugu-ed.com/sitemap.xml`. Flagged a real **www-vs-non-www duplicate host** (both resolve, neither redirects) — tidy later.

**English-only lock (reversible).** Wedge: VI is broken and the nav had too many controls. Removed the 英/越 gloss toggle, the BETA badge, and the 直/橫 writing toggle; hardcoded `data-gloss=en` + `data-writing=horizontal` on `<html>`; one CSS block hides all VI (fixes the examples that were showing EN+VI — a specificity bug where the open-example rule overrode the gloss hide). **VI data and render code are untouched** — re-enabling = restore one toggle + delete one CSS block. Nav is back to one line; story cards are horizontal (vertical retired); closing couplet now breaks into two lines.

**Heading accents: color only, uniform size.** The `.k` accent class was swapping the font to **Kaiti**, which sets wider/heavier than the body serif at the same point size — so "form / story / built / family / what you want to say" *read* as oversized. Fix: strip the kaiti swap from `h1 .k` / `.prin-h .k`, keep only the muted `color-mix(seal 45%, ink)`. (Took three passes to land — the lesson was that "too large" was a font problem, not a size value.) Also brightened dark-mode glyph ink `#eae3d4 → #f2ede2` (DS cream read dim), and rebuilt the **favicon** from the DS whorl to the cao-shu 纺 (cream glyph on the seal chip).

**Search facets: were half-built; now built properly.** Diagnosis (answering "why does clicking do nothing?"): they were designed as a **post-query filter** (`WORK-ORDER-search-build.md` §25 — "intersects facet-map ids with the result set"), so they looked dead on an empty box; the **band index was mislabeled** (`?`, `T1–T5`, `C2` instead of A1–C1, because `build_search_index.parse_band` didn't normalize "TOCFL N" the way `render_site.parse_band` does); and only the first 28 chips by codepoint showed. Built: **empty-state browse** (a facet value with no query lists its entries), band labels **normalized to A1–C1** (grammar patterns excluded from the band facet), chips **frequency-sorted with counts**, and a truncation note instead of a silent 24-cap.

## Branch / deploy reality (the thing that nearly bit us)

`main` is **corpus-only** — its entire `scripts/` is just `validate.py`. The whole site stack (`render_site.py`, `build_search_index.py`, `site_assets/`) lives on the `display/*` and `vi/*` branches. `vi/data` = `display/w3-indexes-exports` + the VI work; our UI commit sits on top. So:

- Our work **can't go on `main`** (no files to patch), and **can't cleanly cherry-pick to `display/w3`** either — that branch predates the entire VI system (no `glosstog`/`chrome_pair`; `render_site.py` ~540 lines diverged). Our commit is structurally entangled with `vi/data`'s VI-era renderer.
- `exports/site/` is **gitignored** and there's **no deploy workflow / gh-pages branch** — only a `validate` CI. So **pushing source ≠ updating the live site**; the build+deploy is a separate step (likely a Cloudflare Pages build or a local build).
- Decision: pushed `vi/data` to `origin/vi/data` as a **private backup** (VI is render-OFF, so it wouldn't show even if built). Production routing + redeploy stay Wedge's.

## Open threads

- **Deploy our UI work to production.** Which branch does tsumugu-ed.com actually build from? Our work is only on `vi/data` (entangled with held VI). Needs Wedge's deploy-branch decision, then a rebuild + redeploy. Until then the live site is unchanged.
- **Turn on Cloudflare Web Analytics** — CF dashboard → Web Analytics → add `tsumugu-ed.com` (automatic setup; proxied zone).
- **www vs non-www** — pick a canonical host and 301 the other.
- **VI** stays held for native review (unchanged by us; just toggled off in the render).

## Addendum — CI gate fixes (`8e130ace`)

The first push of `vi/data` (no prior upstream) tripped CI red — but **not on our work**; it was the branch's first-ever CI run surfacing two pre-existing tooling bugs in `audit_gates.py all`. Both fixed (tooling-only, no entry data):

- **`check-exports`** falsely reported "`indexes/` non-deterministic." It compared the on-disk `indexes/` (gitignored → absent in a clean CI checkout) against a regen, so `before` was always empty ≠ populated `after`. Now it regenerates twice and compares the two regenerations — a real determinism test. Verified deterministic across runs and hash seeds.
- **`check-zhuyin`** failed all 18 erhua 兒 words. 兒 stores reading `'r'`; `syl2zhuyin('r')` stripped the `r` initial to an empty final and hit `FIN['']` → `KeyError('')` (the empty `CONV FAIL … ''`). The authored zhuyin (`˙ㄦ`) was already correct — only the checker was broken. Treat bare `'r'` as neutral `'er'` → `˙ㄦ`.

`audit_gates.py all` now green; CI on `8e130ace` passed. (General lesson: a determinism gate must compare two fresh regenerations, never on-disk-vs-regen, when the artifact is gitignored.)

## Deploy — LIVE (2026-06-19)

Shipped. tsumugu-ed.com is **Cloudflare Pages**, auto-building one production branch = `display/w3-indexes-exports` (build `python3 scripts/render_site.py` → `exports/site`; `exports/` is gitignored, so Pages builds it). A push to `vi/data` only made a *preview* deploy — that's why the changes weren't showing. Fix: fast-forwarded `display/w3` → `vi/data`'s tip (an ancestor, clean ff), CF Pages rebuilt + deployed in ~30s. Verified live: cursive wordmark, cao favicon, search facets all present on tsumugu-ed.com.

Wedge chose to deploy **all of `vi/data`**, so the A1+A2+A3 example-sentences pass rode along (his informed call). `vi/data` is a **hot branch** — it moved twice mid-deploy (the example-sentences session was actively committing), so production is pinned to a verified sha, not the moving branch.

**Open: GitHub CI red on production (cosmetic).** The example-sentences pass added an `opencc`-dependent Simplified gate but didn't add `opencc` to `.github/workflows/validate.yml` (only `jsonschema pypinyin`). CI throws "opencc unavailable" for every example → thousands of *false* failures. Content is valid (local validate w/ opencc = 0 problems) and the live site is fine; Cloudflare Pages doesn't gate on GitHub CI. **Handed to the example-sentences session** to add `opencc` to CI (or make the gate skip when absent). General lesson: a new gate dependency must be added to the CI workflow, or the gate must degrade gracefully.

## Still open

- **Cloudflare Web Analytics** — flip the dashboard toggle (zero-code, proxied zone) — see [[tsumugu-analytics-seo]].
- **`opencc` in CI** — example-sentences session's fix (above).
- **www vs non-www** — pick a canonical host and 301 the other.
- **VI** stays held for native review (render-OFF on the live site; present-but-hidden in HTML source).
