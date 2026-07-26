---
date: 2026-07-22
title: "tsumugu-ed.com at six weeks: the corpus is built, the audience is not, and Bing has been locked out since July 1"
description: "Cloudflare Web Analytics puts real human traffic at 4.3 pageloads a day across six pages and zero external referrers, against a 10,277-page corpus; the Bing block was root-caused and fixed the same day, and the $500/month ad target needs roughly 900x the current traffic."
tags: [tsumugu, dictionary, analytics, cloudflare, monetization, ads, seo, bing, decision, measurement]
---

# tsumugu-ed.com at six weeks

**Verdict:** the build was far ahead of the audience because the site was, in a specific and measurable way, switched off. Google had 10,195 URLs on file and **zero indexed**, caused by a sitemap submitted under `www` against pages whose canonical tags declared the apex; Bingbot was refused at 97.7% after Cloudflare redefined `ai_training: "block"` on July 1; nothing was edge-cached, so the origin returned 504 on roughly 300 content fetches a day. All three were root-caused and fixed on 2026-07-22. Web Analytics measured 130 human pageloads across thirty days, six distinct pages and zero external referrers, and thirteen real beacon events behind that number — effectively Wedge and the friends he showed it to. The $500/month ad target needs 50,000 to 200,000 pageviews a month, and the first milestone before revenue is one organic visitor who is a stranger.

Session: Cowork (Claude Opus 4.8). Wedge asked for a review of the analytics, an account of how far the project has come, and a number for what advertising would earn; partway through he set a target of $500/month to cover AI subscriptions while tsumugu.cc is built, and ruled the word-example and audio lanes stopped. Method: live Cloudflare GraphQL pulls against both zones, a repo audit, and web-sourced ad-rate research; the ad-rate and repo lanes ran on Sonnet, the measurement and this write-up on Opus. Builds on [[journal/2026-06-19-tsumugu-ed-ai-crawler-blocking-and-ad-viability|the June 19 crawler-blocking and ad-viability entry]] and [[journal/2026-06-22-monetization-reach-and-web-novel-reader|the monetization and web-novel reader research]], and corrects one number from the first.

## What we measured, and what we could not

Two datasets, at different depths, and one hard wall.

Cloudflare Web Analytics (RUM) counts humans directly — a JavaScript beacon that bots do not execute. It was unreachable for most of this session because the token was zone-scoped; Wedge minted an account-scoped token late in the day and it opened. **Every human figure below is now measured rather than inferred.** RUM samples at 1:10, so the counts are extrapolations from roughly a tenth as many real beacon events, and they carry ±10 granularity per bucket. RUM also misses readers running ad blockers or JavaScript-disabled browsers, which biases it low.

Zone request logs carry two grains. The daily rollup (`httpRequests1dGroups`) reaches back to 2026-06-15, 38 days. Per-request detail (`httpRequestsAdaptiveGroups`) — the only grain with paths and user agents — retains eight days, 07-15 onward. 07-22 is partial and is never treated as a full day.

The wall: `clientAsn` on adaptive groups and the whole `firewallEventsAdaptiveGroups` dataset both return `does not have access`, **on the new full-scope token as well as the old one**. This is a Free-plan limitation rather than a permissions gap, and no token fixes it. Crawler identity stays user-agent-family only, which is the one soft spot in the Bing finding below.

### The correction this forced

An earlier pass at this entry estimated human traffic by classifying request logs — counting requests that carried a recognizable browser family. That produced roughly 79 human pageviews a day. RUM puts the real figure near **4.3 a day**, eighteen times lower. The gap is bots presenting browser user-agent strings, which request-log classification cannot see through and a JavaScript beacon can. The lesson generalizes past this site: on a low-traffic property, user-agent classification does not measure humans, and the June 19 entry's 7,000-humans-a-month estimate fails the same way for the same reason.

## The traffic

Over 38 days the ed zone served 287,247 requests.

| Country | Requests | Share |
|---|---|---|
| United States | 198,880 | 69.2% |
| United Kingdom | 30,513 | 10.6% |
| Poland | 15,534 | 5.4% |
| France | 13,578 | 4.7% |
| Netherlands | 7,484 | 2.6% |
| Singapore | 3,450 | 1.2% |
| **Vietnam** | **1,285** | **0.4%** |

The top five are datacenter geographies. The target market is four-tenths of one percent.

### The human audience, measured

Web Analytics for the 30 days from 2026-06-22:

| | tsumugu-ed.com | tsumugu.cc |
|---|---|---|
| Pageloads, 30 days | **130** | 70 |
| Per day | **4.3** | 2.3 |
| Lifetime pageloads on record | 190 | — |
| Days with any traffic at all | 12 of 30 | 4 of 30 |
| Distinct pages viewed | **6** | **1** |
| External referrers | **0** | 0 |

Six pages received every human view the dictionary got in a month: `/` (50), `/c/很` (40), `/browse-c-c2`, `/c/好`, `/method`, `/w/健康` (10 each). Countries: US 80, then ten apiece to the Philippines, Korea, South Africa, Vietnam and Singapore. Desktop 90, mobile 40.

**The referrer column is the finding.** Of 130 pageloads, 70 arrived with no referrer and 60 came from tsumugu-ed.com itself. Not one visit came from a search engine, a link, or a social post. The dictionary has no discovery channel operating at all — which reframes the problem: search is not underperforming, search has not started.

tsumugu.cc is starker still. Seventy pageloads, every one from the United States, every one on `/`. Nobody reached a second page.

The corpus is 10,277 pages. Six of them were read last month.

### The corpus is cold

Of 10,262 entries, machines fetched 2,526 distinct entry URLs in eight days — 24.6%. A real browser fetched **83, or 0.81%**.

Crawlers are a quarter of the way through the sitemap. People have seen under one percent of what exists.

## Three faults on the growth channel

Organic search is the entire plausible path to an audience for a 10,277-page reference site. All three findings sit on it, ranked by impact.

### Bing has been refused at 97.7%, and the July 19 fix did not reach it

| Crawler | Requests | 403s | Blocked |
|---|---|---|---|
| BingBot | 1,977 | 1,932 | **97.7%** |
| AppleBot | 53 | 37 | 69.8% |
| GoogleBot | 50 | 6 | 12.0% |

Per-day Bing 403s across 07-15 to 07-22: 198, 196, 244, 276, **330**, 277, **291**, 120. July 19 — the day `ai_bots_migration_opt_out` was set to stop exactly this — was the worst day in the window.

The mechanism is now clear. Cloudflare's [July 1 2026 AI traffic release](https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/) split AI traffic into Search, Agent and Training, each taking `disabled`, `block`, or `only_on_ad_pages`. Crawlers combining Search and Training are evaluated under the most restrictive applicable rule. The ed zone runs `ai_training: "block"`, so Bingbot — which indexes and trains under one user agent — resolves to a site-wide block. Googlebot escapes because Google trains under the separate `Google-Extended` agent, leaving plain Googlebot single-purpose. That asymmetry is exactly what the measurements show.

`ai_bots_migration_opt_out` opts a zone out of the *new defaults* arriving September 15. It does not exempt anything from a training block the owner set deliberately. It was never going to fix this.

The soft spot: this rests on Cloudflare's user-agent classification, which does not separate real Bingbot from a spoofed one. ASN verification is impossible — `clientAsn` and `firewallEventsAdaptiveGroups` are gated by the Free plan, not by token scope, and the full-permission token confirmed it. Bing Webmaster Tools settles it from Wedge's account. The steelman for doing nothing is that all 1,932 could be spoof traffic correctly refused; it does not carry, because the same reclassification demonstrably caught Google on this zone, and 288 real Bingbot requests were measured blocked here in July before the fix.

**Fixed 2026-07-22.** `ai_training` moved from `"block"` to `"only_on_ad_pages"` on the ed zone via `PUT /zones/{id}/bot_management`, full body sent, one field changed, verified byte-for-byte against a snapshot afterward. Cloudflare identifies ad-bearing pages by inspecting HTML, CSS selectors and CSP reports against roughly 400 ad-network patterns rather than by reading `ads.txt`, so on a site whose ad shell is dormant at zero bytes the training block now applies to no page — and re-arms automatically the day ads ship. The September 15 deadline stops mattering under this setting. Rollback snapshot: `bot_mgmt_ed_BACKUP.json`. Confirmation that it worked comes from Bing Webmaster Tools crawl stats and from the 403 rate falling over the next 48 hours, neither of which is available yet.

**tsumugu.cc carries the same fault, with a different victim.** Its zone still runs `ai_training: "block"`, and over the same eight days Googlebot was refused there 20 times in 64 requests — **31.2%**. Bing has not discovered .cc at all, so the symptom shows up on Google instead. Left unchanged pending a decision, since .cc was not the zone under review.

### Nothing is cached, and the origin times out 300 times a day

Every page checked on both zones returns `cache-control: public, max-age=0, must-revalidate` with `cf-cache-status: DYNAMIC`. The daily rollup agrees: cached requests read 0 or 1 against tens of thousands. A fully static site is sending every request, crawler included, to the Pages origin.

The origin is failing under it. 504 Gateway Timeouts by day: 243, 240, 276, 318, 333, 301, 312, 124 — roughly 2,147 in eight days, landing on real content: `/w/不必.html`, `/c/一`, `/w/華中`, `/c/行`, and `/browse` fetched from Vietnam.

One chain rather than three problems. No edge cache means all load reaches origin; origin timeouts mean about 300 content fetches fail daily; a crawler meeting timeouts at that rate slows its walk through the 75% of the corpus it has not reached.

### www served a full duplicate, and it is why nothing was indexed

Search Console access arrived late in the session and resolved the question the request logs could not. The sitemap on file was **`https://www.tsumugu-ed.com/sitemap.xml`** — submitted 2026-06-19, last downloaded 2026-06-22, **10,195 URLs submitted, 0 indexed**.

URL Inspection showed the mechanism:

| URL | Google's verdict | Google's chosen canonical |
|---|---|---|
| `/` | Alternate page with proper canonical tag | `tsumugu-ed.com/` |
| `/c/很` | Alternate page with proper canonical tag | **`www.tsumugu-ed.com/c/很`** |
| `/browse` | Crawled, currently not indexed | `tsumugu-ed.com/browse` |

The sitemap pointed Google at www; www served the whole site at 200 because the 301 was never set; every page's own canonical tag declared non-www. Google crawled one host, was told the other was authoritative, and indexed neither. `robotsTxtState` was `ALLOWED` and `pageFetchState` `SUCCESSFUL` throughout, so nothing was blocked — the pages were reachable and discarded.

**Fixed 2026-07-22.** A dynamic redirect rule now 301s `www.tsumugu-ed.com` to the apex with path and query preserved, verified against `/`, `/c/很` and `/browse?x=1`. The www sitemap was deleted and `https://tsumugu-ed.com/sitemap.xml` submitted in its place: 10,277 URLs, zero errors, zero warnings, downloaded by Google within a minute of submission.

### The site ranked in June, then stopped

Search Analytics over 90 days: **301 impressions, 2 clicks.** The whole history:

```
06-18   8     06-22   9     06-26   0
06-19  92     06-23  14     06-27   0
06-20 130     06-24  11
06-21  34     06-25   2
```

Impressions peaked on 06-20 and decayed to zero within six days. The AI crawler block set went on 06-19. The corpus was never rejected by a market; it was visible for roughly a week and then removed itself through configuration.

### Nothing was cached at the edge

`cache-control: public, max-age=0, must-revalidate` with `cf-cache-status: DYNAMIC` on every page, and cached requests reading 0–1 per day against tens of thousands. Every request, crawler included, reached the Pages origin, which returned 504 on roughly 300 content fetches a day.

**Fixed 2026-07-22.** A cache rule now overrides origin TTL — edge 4 hours, browser 1 hour — and `/`, `/c/很`, `/browse`, `/w/健康` and `/grammar` all return `HIT` with `max-age=3600`. The cost is up to four hours of staleness after a deploy, which a purge step in `PUSH-DICTIONARY.command` would remove.

## Trends worth naming

**The June 15 shape.** 76,553 requests and 38,312 pageviews against 146 unique visitors — the signature of a single harvester, matching the Meta-ExternalAgent diagnosis in the June 19 entry.

**The blocks worked.** Daily requests fell from 76,553 on June 15 to 455 on July 20. The June 19 entry left "verify the block bit, bandwidth should crater" open; it cratered, and that thread closes.

**The threat counter turning on.** Threats sat at 0–36 a day through June, then jumped on 07-05 to 558, 1,382, 780 — the three-tier AI-bot policy commit (`f1f3e6338`) beginning to bite.

**The UK wave, 07-14 to 07-18.** GB requests of 1,372, 2,100, 1,545, 4,728, 3,285 while human traffic stayed flat. Unattributable without ASN access.

**Scanner texture.** Among 2,644 distinct non-asset paths in eight days: `/wp-admin/install.php` 228 times, `/.git/config` 8, `/test/wp-includes/wlwmanifest.xml` 7 — probing for surfaces a static site does not have.

**The reader is the more human property.** Browser-family pageview share from the same dataset: tsumugu-ed 915 of 10,897 (8.4%); tsumugu.cc 1,377 of 4,645 (**29.6%**). Vietnam surfaces there in a way it does not here — 707 requests on 07-10, 96 on 07-08. The reader draws an audience three and a half times more human by proportion, on a fraction of the pages, three weeks after launch. The June 22 research argued from theory that ads reward engagement over lookups; this is the first measurement of it across Wedge's own properties.

## How far this has come

Six weeks from the first commit on 2026-06-11.

| | Characters | Words | Grammar patterns |
|---|---|---|---|
| Entries | 2,662 | 7,001 | 597 |
| Hán-Việt reading | 99.9% | n/a by schema | n/a |
| Vietnamese gloss | 100% | 100% | 100% chip gloss |
| Example sentences | 95.0% | **0.4%** | 86.3% |
| Story card | 100% | 23.3% | 64.5% |
| Simplified variant | 36.9% | 58.8% | n/a |
| `related[].whyVi` | 100% | 100% | n/a |

10,278 HTML pages emitted, 10,277 in the sitemap, live and serving 200. `validate.py` passes on 9,663 entries plus 597 patterns. The rail-purity gate passes across all 10,278 pages with zero Tier-1 and zero Tier-2 residue, so the 12,756-string re-authoring of 07-20 holds.

A 10,000-entry bilingual corpus with a Hán-Việt axis at 99.9% coverage, built solo in six weeks, is a real asset. It is also an asset that 0.81% of has been seen by a person. Both hold at once, and the second is a distribution problem rather than a verdict on the first.

Three things the audit surfaced that the documentation does not reflect:

**The word-example lane never started.** Characters carry examples at 95.0%; words at 0.4%, 26 of 7,001, across six work-order files. The largest content gap in the corpus, on the 7,001-entry side. Ruled stopped today.

**The audio pipeline stopped on 2026-06-23 and carries three inconsistent progress numbers.** `audio/STATUS-REPORT.md` records 3,840 of 30,735 clips; the last QA log shows 7,488 scanned with 3,908 passing; `exports/audio-manifest.json` tracks 15,046. R2 upload never ran, and the live site has zero audio references. Ruled stopped today.

**Grammar Discovery Phase A fails its own gate.** `check_grammar_discovery.py` reports `browse.html missing grammar.html?tbcl=1`; the TBCL label renders as plain text with no query-string link. The 07-09 PRD is extensive and the code was never built.

Velocity by week: 63, 130, 7, 23, 1, 0, 9, with July commits landing on 8 of 22 elapsed days. Read alone that is a stall, and it is not one — tsumugu-core went the other way over the same period, 21 June commits to 47 in July, its July dates falling inside tsumugu-ed's silent gaps. Effort moved from dictionary content to the reader. tsumugu-wiki has been dormant since June.

Carried uncommitted in the working tree: four files dated 07-09 to 07-21, including the WO-D reader-rail audit. Eight fully-merged local branches were never deleted. `PROJECT-STATUS.md` is 31 days stale and `POLISH-BACKLOG.md` 38, and every corpus percentage the former cites still matches today exactly.

## What ads would make, and what $500 a month requires

On measured traffic — 130 human pageloads a month — at 85% fill and a blended page RPM of $3 (Vietnam) to $8 (a US-leaning mix):

| Scenario | Pageviews/month | Gross/month | Gross/year |
|---|---|---|---|
| **Measured today** | 130 | **$0.33 – $0.88** | $4 – $11 |
| Modest SEO success | 10,000 | $26 – $68 | $306 – $816 |
| **The $500 target** | **50,000 – 200,000** | **~$500** | ~$6,000 |
| Fraction of the incumbent's reach | 500,000 | $1,275 – $3,400 | $15,300 – $40,800 |

AdSense pays out at $100 and not before, per [Google's own documentation](https://support.google.com/adsense/answer/1709871). At measured traffic, reaching a single payout takes **between nine and twenty-five years**. That is the honest answer to what ads earn on this site today, and it is not a rounding error to be optimised away — it is the distance the traffic has to travel before the question becomes interesting.

**The $500 target, priced.** The band is wide because audience geography moves it more than anything else. At a Vietnam-majority audience on raw AdSense, $500 a month needs about **196,000 pageviews**. At a mixed or US-leaning audience, about **74,000**. On Mediavine's Journey tier — 1,000 monthly sessions, 70% share — better demand plausibly lands it near **50,000 to 100,000**. A planning figure of **120,000 pageviews a month** sits honestly in the middle.

Against 130 a month, that is roughly **900 times the current traffic**.

The reframe that makes it tractable anyway: 120,000 pageviews across 10,277 pages is **11.7 pageviews per page per month, one visit per page every two and a half days.** A dictionary page ranking for its own headword clears that without difficulty. Nothing here requires a page to perform extraordinarily. It requires pages to be found at all, from six read last month and zero external referrers.

The calibration against the market: tratu.soha.vn, the leading Vietnamese dictionary site, runs near 312,000 visits a month at 1.93 pages per visit, so roughly 602,000 pageviews. The $500 target is about **20% of the incumbent's traffic**, which is a serious multi-quarter SEO campaign rather than a configuration fix.

Two structural facts constrain the ceiling, and both are load-bearing.

**Succeeding at the actual mission disqualifies the site from the networks that pay most.** Raptive dropped its floor to 25,000 monthly pageviews in October 2025 and gates entry on 50% tier-1 traffic below 100,000 pageviews, 40% above; a majority-Vietnamese site cannot clear that at any volume. Ezoic moved to 250,000 monthly visits for sites added after February 19 2026. Mediavine's January 2026 restructure opens Journey at 1,000 monthly sessions on a 70% share and weights tier-1 traffic favourably in review. The ladder runs AdSense, then Mediavine Journey, and stops there for a long time. This makes audience mix a revenue lever and not only a mission question: the same 100,000 pageviews are worth four to five times more from tier-1 readers than from Vietnamese ones.

**A dictionary earns fewer impressions per visitor than almost any other format.** The closest real comparator, tratu.soha.vn, runs 1.93 pages per visit at a 67% bounce rate. Impressions scale with pageviews, and a lookup is one or two.

The RPM figures carry a caveat worth keeping. Country and niche RPM data lives almost entirely in undisclosed-methodology SEO aggregator blogs, one of which presented itself as 2026 data and published in September 2021. Ratios between countries are more trustworthy than absolute dollars; Vietnam's tier-3 classification is corroborated across ad-tech sources including Mediavine's own stated review criteria.

### What sits alongside ads

Dataset licensing is the asymmetric play. A Hán-Việt-bridged corpus at 99.9% coverage across 2,662 characters is not reproducible without redoing the work, and it earns with no traffic at all. Market pricing is opaque — the LDC discloses per-corpus fees only at checkout, and no public comparator survived verification — which is a reason to probe rather than to discount.

The reader is the engagement vehicle, and the 29.6% human share on tsumugu.cc against 8.4% here is the first measured evidence for what the June 22 research argued from theory.

Donations track audience relationship rather than pageviews, which puts them near zero until there are return visitors to have a relationship with.

**What would flip the ranking:** organic traffic clearing 100,000 pageviews a month with tier-1 share above 40% opens Raptive at a 75% share and changes the arithmetic by an order of magnitude. Nothing measured here argues for revisiting the standing position that everything already shipped stays free.

## Open questions

1. Is the Bing block real, or spoofed traffic being correctly refused? Bing Webmaster Tools answers this from Wedge's account in a way the API cannot.
2. Does `ai_training` move from `block` to `only_on_ad_pages` — which on an ad-free site blocks training crawlers on no pages today and activates the moment ads go live — or does the stance itself change?
3. Does `cache-control: max-age=0` on every page reflect a deliberate choice, or Cloudflare Pages' default carried unexamined? The 504s hang off the answer.
4. The www duplicate has now survived two journal entries. Is the 301 waiting on something?
5. Which audience does the $500 target chase? A Vietnamese-majority audience needs roughly 196,000 pageviews; a mixed one needs 74,000 for the same money. That is a product decision wearing a revenue costume.
6. Grammar Discovery Phase A fails its own gate with an extensive PRD behind it. Does it get built, or does the PRD get marked unshipped?

The corpus is built and the delivery layer under it is leaking: crawlers meeting 403s and 504s, a duplicate host splitting whatever authority accrues, and a quarter of the pages indexed after six weeks. None of that is a content problem, which is the useful part. The expensive work is done and holding, and what stands between it and readers is a short list of configuration decisions.
