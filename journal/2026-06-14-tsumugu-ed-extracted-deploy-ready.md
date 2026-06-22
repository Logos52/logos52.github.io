---
title: "Tsumugu: dictionary extracted to its own repo (tsumugu-ed), deploy walkthrough ready"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-14
updated: 2026-06-14
tags:
  - journal
  - tsumugu
  - dictionary
  - production
  - decisions
---

# Tsumugu: tsumugu-ed extracted, deploy ready (2026-06-14)

## The move

Pulled the dictionary out of `tsumugu/personal/dictionary` into its own top-level project **`~/Projects/tsumugu-ed`** — aligning the filesystem with the name already used everywhere in the PRDs ("tsumugu-ed corpus"). It deserves separation as the standalone, soon-public thing it is.

- It was already its own git repo, so history travelled with a plain `mv`. The **big pending commit landed in the move** (Pre-move checkpoint) — everything from the gloss fixes through search + SEO is now committed; working tree clean.
- **validate green from the new location**; prod scripts (`render_site`, `build_search_index`, `validate`, `gen_helpers`, the `.command`s) are all `__file__`-relative, so they survived untouched.
- Fixed **15 files** with hardcoded old-path references (incl. `expand.py`'s `ROOT`); remaining references are historical logs (keep the record) and the regenerable `.venv-screens` virtualenv. Auto-memory was clean.
- **Open:** whether the dictionary's PRDs (still scattered across `~/Projects/` and `~/Projects/tsumugu/`) should also move into `tsumugu-ed` for full self-containment. Their path refs were fixed; relocation is deferred.

## Deploy decisions (for context)

- **Host: Cloudflare Pages, not GitHub Pages** (the site PRD's original choice). Two reasons: GitHub Pages' free tier *prohibits commercial use* (a real risk once ads land), and Cloudflare Pages gives unlimited bandwidth vs GitHub's 100 GB cap. One platform for domain + DNS + CDN + host + analytics. Caveat: Cloudflare Pages free tier caps at **20,000 files** — at 9,667 now, watch it as HSK grows.
- **Domain: Cloudflare Registrar**, at-cost ~$8–10/yr (.com), free WHOIS privacy. Total launch cost ≈ one domain.
- **Repo:** `github.com/Logos52/tsumugu-ed` (private — fine; Pages serves the built output publicly). Branch `display/w3-indexes-exports`.
- **Build, not serve:** `exports/site/` is **gitignored**, so Pages must build it — build command `python3 scripts/render_site.py` (stdlib-only), output `exports/site`, `SITE_ORIGIN` as a Pages env var for canonical + sitemap. Fallback: `npx wrangler pages deploy exports/site` (direct upload of a local render).

## What's ready / outstanding

- **Walkthrough written:** `tsumugu-ed/DEPLOY-WALKTHROUGH.md` — first-time click-by-click: repo push → Cloudflare account → Pages build config → register domain → custom domain + HTTPS → analytics + Search Console → license/legal.
- **Wedge's to-do:** commit the path fixes + push; walk the deploy; pick the domain name; legal glance before announce.
- **Deferred (`POLISH-BACKLOG.md`):** 50 無聲, 276 cosmetic cribs, 579 frequency-tail words, C2, example sentences, audio. None block launch.
