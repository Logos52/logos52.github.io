---
title: "tsumugu-ed.com: traffic was ~99% bots, ads ruled out, AI training crawlers blocked"
type: journal
created: 2026-06-19
updated: 2026-06-19
tags:
  - journal
  - tsumugu
  - dictionary
  - cloudflare
  - decisions
  - ai-crawlers
---

# tsumugu-ed AI crawler blocking + ad viability (2026-06-19)

Started from a Cloudflare account-analytics screenshot that looked like a breakout: last 24h showed **45.11k requests, 216 MB bandwidth (+312%), 22.62k visits, 22.69k page views**. Question was "this is so fast — can I run ads, and for how much?" Pulled the thread; it was a mirage. The real story is a single AI scraper, and the session ended with a crawler block set applied in Cloudflare.

## What got decided, and why

**Ads ruled out — the traffic isn't monetizable.** The tells were in the ratios before we even confirmed: ~9.5 KB per "page view" (real content pages pull 1–3 MB) and ~2 requests per view (a browser fires dozens) — i.e. not browsers rendering pages. Confirmed by uniques: **237 real humans in 24h** against 22.62k "visits," so ~99% of traffic is bots. 237 uniques/24h ≈ ~7k humans/month, far below ad-network floors (Mediavine 50k sessions, Ezoic ~10k *human* visits). AdSense has no floor but would earn cents **and** the bot noise risks an invalid-traffic flag → ban, not revenue. So: no ads. The headline numbers are not a real audience and shouldn't be trusted as one.

**Root cause = Meta-ExternalAgent.** Cloudflare's AI Crawl Control (zone → AI → Security) showed **Meta-ExternalAgent at 21.17k allowed requests of ~22.6k total — ~94%**. That single AI-training crawler *is* the +312% bandwidth spike. Everything else was small (ClaudeBot 20, GPTBot 10) or zero.

**Block AI training crawlers, keep search + preservation — the two goals don't actually conflict.** Wedge wanted the dictionary "widely used" *and* AI scrapers throttled. These aren't in tension: search crawlers (Googlebot, Bing, etc.) drive human discovery; training crawlers just harvest. So the rule is block the harvesters, leave the indexers. Done via per-crawler toggles in AI Crawl Control (Free plan; each toggle reversible in one click). Wedge applied the set manually.

**API to "channel" scrapers — ruled out (reuse over build).** Floated building a public rate-limited API endpoint to absorb the scraping. Killed it: no evidence any *legitimate* consumer wants programmatic access — it's all harvesters. Building infra to solve a problem we don't have. Revisit only if a real integration partner or visible human demand appears.

**`-User` and `-SearchBot` are NOT training bots — lean keep.** Correction to an earlier rule-of-thumb that blocked by suffix: the `-User` bots (ChatGPT-User, Claude-User, MistralAI-User, Perplexity-User) fire when a *human* asks an assistant to fetch the page live = a real reader via AI. The `-SearchBot` group (Claude-SearchBot, OAI-SearchBot) indexes the site so it *surfaces* in AI search = discovery, not training. Both lean **keep** under the "widely used" goal; block only if the goal flips to "zero AI footprint."

## The ruleset (reusable — slot new crawlers in by bucket)

**Block — AI training / bulk harvesters:**
Meta-ExternalAgent, Meta-ExternalFetcher, FacebookBot, ClaudeBot, GPTBot, Amazonbot, Bytespider, TikTok Spider (both ByteDance), CCBot (Common Crawl — feeds most datasets), PerplexityBot, DuckAssistBot, Anchor Browser, Manus Bot, Google-CloudVertexBot, Novellum AI Crawl, ProRataInc, Terracotta Bot, Timpibot.

**Keep — search engines + preservation (this is "widely used"):**
Googlebot, BingBot, Applebot (plain), Baidu, PetalBot (Huawei) — genuine search indexers. Cloudflare Crawler (benign). archive.org_bot, Arquivo Web Crawler (web *preservation*, not AI training).

**Your call — AI, but can still send real readers (leaned keep):**
ChatGPT-User, Claude-User, MistralAI-User, Perplexity-User (human-triggered live fetch); Claude-SearchBot, OAI-SearchBot (AI-search discovery).

Rule of thumb: `-Extended` / `Bot` / `Agent` / `Fetcher` / `spider` / `CCBot` = block; plain search-engine names = keep; `-User` and `-SearchBot` = keep unless going zero-AI. Watch the Google/Apple split — Googlebot & Applebot (keep) vs Google-Extended & Applebot-Extended (block).

## Open threads

- **Rate limiting not set up.** Blocking catches crawlers that announce themselves by user-agent; spoofers faking a browser UA won't be caught by name. A rate limit on the lookup endpoint is the backstop. Recommended, not yet done.
- **Verify the block bit.** Check tsumugu-ed analytics in 24–48h — bandwidth and "visits" should crater (~94% drop). If they don't, traffic is getting through under a fake UA → rate limiting becomes necessary, not optional. (Offered to set a reminder for this.)
- **Stop trusting the visit/pageview counts** until the bot floor is gone — they were ~99% inflated.
- Carryover from 2026-06-19 reskin entry: **www-vs-non-www duplicate host** still unresolved (both resolve, neither redirects).
