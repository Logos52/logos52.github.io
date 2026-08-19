---
date: 2026-08-17
title: "tsumugu-ed.com GSC validation failed because Google has not chosen to index, not because a new block appeared"
description: "Search Console's 'Crawled — currently not indexed' validation failed on tsumugu-ed.com. Live technical SEO is clean. Googlebot is back but spending crawl budget on search JSON. tsumugu.cc is indexed and still has no crawlable link to the dictionary."
tags: [tsumugu, dictionary, seo, search-console, indexing, measurement]
---

# tsumugu-ed.com GSC validation failed because Google has not chosen to index, not because a new block appeared

**Verdict:** the email is the expected result of clicking Validate Fix on a quality judgment. Nothing is blocking the crawl. Google last stored the canary pages in June, when canonicals still pointed at `.html` / `/index.html`; live pages are now extensionless, apex, 200, `robots ALLOWED`. Googlebot returned in mid-August and on 2026-08-17 spent 16 of 26 requests on `/assets/search/*.json`. tsumugu.cc `/` is **Submitted and indexed** (last crawl 2026-08-13) and its static HTML contains zero links to tsumugu-ed.com.

Session: Grok (n1). Wedge pasted the Search Console notice that some pages are still affected by 'Crawled - currently not indexed' after a requested validation. Method: live curl of robots/sitemap/canonicals, GSC URL Inspection + 90-day Search Analytics via `~/.gsc/gsc_pull.py`, Cloudflare GraphQL `httpRequestsAdaptiveGroups` on zone `e536abb48b97d6e188d63c598bf8c743`. Continues [[journal/2026-07-22-tsumugu-ed-analytics-and-monetization-review|the July 22 review]] and the July 29 Grok handoff.

## What Google still has on file

90-day Search Analytics: **301 impressions, 2 clicks**, all but one impression in 2026-06-18–06-25 (peak 130 on 06-20). One leftover click on 2026-07-03. Every day since: zero.

Sitemap: 10,277 URLs, 0 errors. Last downloaded 2026-07-28T10:03:51Z (one second after the previous submit). Resubmitted 2026-08-17T10:40:07Z; `isPending: true`.

URL Inspection, 2026-08-17:

| URL | coverageState | lastCrawlTime | userCanonical (last crawl) | googleCanonical |
|---|---|---|---|---|
| `/` | Alternate page with proper canonical tag | 2026-06-24 | `/index.html` | `/` |
| `/c/很` | Crawled - currently not indexed | 2026-06-18 | `/c/很.html` | `/c/很` |
| `/c/好` | Crawled - currently not indexed | 2026-06-22 | `/c/好.html` | `/c/好` |
| `/w/健康` | Crawled - currently not indexed | 2026-06-22 | — | `/w/健康` |
| `/browse` | Crawled - currently not indexed | 2026-06-22 | `/browse.html` | `/browse` |
| `/grammar` | Crawled - currently not indexed | 2026-06-18 | `/grammar.html` | `/grammar` |
| `/method` | URL is unknown to Google | never | — | — |

`robotsTxtState` ALLOWED and `pageFetchState` SUCCESSFUL on every URL Google has seen. The stored `userCanonical` values are the June `.html` / `index.html` tags. Live pages no longer emit those.

## What is live today

- Apex `tsumugu-ed.com` 200; `www` 301s to apex.
- `/index.html`, `/browse.html`, `/c/很.html` 308 to the extensionless URL.
- Canonical on `/` is `https://tsumugu-ed.com/`. Canonical on `/c/很` is `https://tsumugu-ed.com/c/很`. No `noindex`. No `hreflang`.
- Sitemap lists `/`, `/method`, `/browse`, `/grammar`, `/about`, 2,662 `/c/`, 7,001 `/w/`, 597 `/g/`, 13 browse facets. Zero `www`, zero `.html`.
- `ai_training: only_on_ad_pages` (the July 22 Bing fix) still holds. `crawler_protection: enabled`, Super Bot Fight Mode on; Googlebot is passing as `verifiedBotCategory: Search Engine Crawler`.

Googlebot is no longer absent. Last four days of zone logs:

| Day | Googlebot 200 / 308 / 301 | Bingbot 200 / 308 |
|---|---|---|
| 08-17 | 22 / 3 / 1 | 35 / 56 |
| 08-16 | 0 | 75 / 72 |
| 08-15 | 17 / 3 / 1 | 105 / 100 |
| 08-14 | 56 / 9 / 0 | 188 / 190 |

On 08-17, of 26 Googlebot requests in the sampled path list, **16 hit `/assets/search/entries-*.json`**. The rest were robots.txt plus a handful of `/c/` `/w/` `/g/` HTML, several of those still arriving as `.html` and taking a 308. Bing's 308 share is still ~50% — leftover `.html` URLs in its queue, not new internal links (live HTML has zero `.html` hrefs).

## Why Validate Fix failed

'Crawled - currently not indexed' is Google's choice not to add a fetched URL to the index. Validate Fix recrawls a sample and asks the same question again. The sample is still a 10,277-page programmatic dictionary with no referring domains in GSC and no static link from the one indexed sibling property. The recrawl does not change the judgment, so the email fires.

The steelman for treating this as a remaining technical bug is the homepage still sitting on "Alternate page" and the stored `.html` canonicals. Those are last-crawl artifacts from June. They update only when Google recrawls those URLs. Request Indexing in the GSC UI is the only API-legal way to force that recrawl; the URL Inspection API is read-only.

## What moved today, and the price

- Sitemap resubmitted via the GSC API. Cost: none. Effect: Google will re-download 10,277 URLs; it does not request indexing.
- `write_robots()` in `tsumugu-ed/scripts/render_site.py` now `Disallow: /assets/search/`. Cost: Google's renderer will not fetch the client search index; entry HTML does not need it. Lands on the next Pages deploy. Not live until then.

The binding remaining lever is a crawlable link from `https://tsumugu.cc/` (indexed) to `https://tsumugu-ed.com/` (not). The core homepage HTML has zero `tsumugu-ed` hrefs; dict popups in the reader are JS and point at `.html`. Front-facing copy for that link is unsigned.

## Outstanding

- Request Indexing in the GSC UI on `/`, `/method`, `/browse`, `/grammar`, `/c/很`. No API for this.
- Push the robots change so `/assets/search/` drops out of the crawl queue.
- Sign a static tsumugu.cc → tsumugu-ed.com link (placement + copy).
- Do not click Validate Fix again on this issue until those URLs show as indexed. It will fail the same way.

**Next move.** Wedge: five Request Indexing clicks, then a ruling on the cc link. The robots change is staged for the next dictionary push.

## Addendum — validation export 2026-08-18

Wedge dropped `/Users/n1/Downloads/tsumugu-ed.com-Coverage-Validation-2026-08-18/`. Issue: `Crawled - currently not indexed`. **1,034 URLs: 1,000 Pending, 34 Failed.**

Last-crawl dates: 997 in 2026-06-23–06-30, 3 on 07-02, **34 on 08-13–08-15**. The 34 Failed are exactly the August recrawls. Google finished those, they are still not indexed, and that is what tripped the email. The other 1,000 have not been recrawled for this validation yet.

Failed set, live-checked 2026-08-18: 26 extensionless apex pages 200; 7 `.html` 308 to the clean URL; 1 `www` 301 to apex. The eight redirect URLs cannot pass this validation — the correct outcome is “page with redirect,” not “indexed.” The 26 200s are the real refusal.

`/`, `/method`, `/browse`, `/grammar`, `/c/很` are **not** in this export. The sample is entry pages (`/w/` 651, `/c/` 310, `/g/` 70, browse facets 3). 59 slugs appear as both `.html` and clean.

## Addendum — simplified-first discovery (2026-08-18)

Wedge named the remaining worry: simplified-first discovery, no simplified URL. Not the validation failures. Decision draft: `/Users/n1/Projects/tsumugu-ed/PRD-Simplified-URL-Discovery.md` (unsigned).

Recommendation in that file: 301 aliases for unambiguous `/c/询` → `/c/詢` (and words/grammar), dual-glyph titles, no second HTML corpus. 982 chars and 4,119 words differ; 61 char and 49 word simp-keys collide (后, 发, 手表). Site search already matches `hs`; `/c/询` is a 404.

**Ruling (Wedge, 2026-08-18, verbatim):** “i don't want you to replace traditional with simplified. i consider that quite rude.” “i want both simplified and traditional discovery.” Then: a traditional URL landing on a simplified character is confusing, “and vice versa is true too.” “i feel like you should know this, i shouldn't have to explain it.”

Law: the glyph in the path is the **landing** default. In-page 繁/简 still flips the view on that URL. Wedge: “the url defaults to whatever script the URL script is.. but you can switch inside the page to simplified. don't add unnecessary complexity.” Internal clicks follow the current script. Shipped 2026-08-18: twins live (`/c/询` 200, locked simp). Sitemap resubmitted (15,520 locs, pending Google download). IndexNow accepted 15,520 URLs in 2k batches. robots disallows `/assets/search/`. tsumugu.cc footer+header now have a crawlable `https://tsumugu-ed.com/` link (site-v2 dist deployed + purged). Request Indexing remains UI-only.
