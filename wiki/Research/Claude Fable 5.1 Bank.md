---
title: "Claude Fable 5.1 Bank"
type: research
status: reference
created: 2026-09-02
updated: 2026-09-02
description: "Fact list for a rolling public page on Claude Fable, current version 5.1. Raw material only. The writer closes this file while drafting."
tags:
  - research
  - claude
  - fable
  - models
  - agentic-engineering
source-count: 18
---

# Claude Fable 5.1 Bank

Raw reference. One fact per line. Grades: **documented** (vendor docs or official post), **reported** (press or several outlets), **single-source** (one outlet, verify before shipping), **firsthand** (this desk). The writer does not paste this file into the page.

**Novelty note.** Entries checked: [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] (Fable 5 operating notes, last updated 2026-08-14), [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] (writer seat moved off Fable 2026-09-01), [[01 - Workbench/Fable - Research Bank - Claude and Grok Tools.md]] (tools, 2026-08-26), [[journal/2026-09-01-grok-writes]]. This bank differs by compiling the 5.1 launch (2026-09-01) plus the first day of field talk, including Anthropic's own "mannered prose" prompt. It is not a rewrite of the June Fable 5 page.

## Brief for the writer (Fable)

The owner wants a **rolling webpage** for Fable 5.1, and is considering the same shape for most models this desk uses. Rolling means one public page per model family that gets a new dated pass when a point release ships. It is not a new URL per decimal.

Recommended target: update [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]]. Do not invent a second glossary entry. The glossary already holds Fable as a **model**. The page title stays Claude Fable. Sentence one names the current version. A short dated section holds Fable 5 as history.

Do not reverse the stack. As of 1 September 2026 this desk's default writer is Grok 4.6. Cowork on Fable is research on request. Late-August Fable prose was a rewrite tax. A 5.1 writing improvement is a field claim to weigh, not a silent restack.

Write under the mannered-prose instruction in `01 - Workbench/fable-51-mannered-prose-prompt-2026-09-02.md`. Put that block in a user message. Anthropic prefers user over system for it.

Reader: a stranger who owns ordinary English and ordinary life, and has heard of Claude. They do not own Mythos, effort levels, or cache reads until the page says what those are.

Friend's question: what is Fable 5.1, what changed from 5, and should this desk use it for what.

Shape, whole–part–whole: open on what Fable is now (the model, the current version, what it is for). Parts: card (price, window, effort), what 5.1 changed without a code change, writing and mannered prose, long-running work, science claims, safeguards, what this desk does with it, cost and when to stop. Close on the same ground: a dated card, not a standing worker; the stack page is the roster.

Do not write "X is a Y" as a flourish. A definition that names the thing and stops is allowed. Do not write recurrence-minus ("lacks what the last one had"). Do not write not-X-but-Y as the news. Do not open on "something happens." Counts only with the things counted. Vendor benches stay vendor benches: say who measured them. Names, years, titles in Sources. Outline to the owner before paragraphs if he has not waived it.

Invariants already on the live Fable page stay unless a 5.1 fact contradicts them: exemplar-first on taste-bound work, point it at the real artifact, prune dead rules, encode corrections the same day, demand measures. Those are not 5.1 news.

Reusable shape for other model cards: current version in sentence one; card (ship date, price, window, effort); what changed this release; behavior that shows up without a code change; writing; what this desk uses it for; steelman, cost, quit, check; dated previous version; sources. Split invariants from tactics. Update the date in the stack page separately. Do not fork a new wiki page for 5.2 if 5.1's page can take a new dated section.

## The card

- Claude Fable 5.1 shipped 1 September 2026. documented. [launch](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- API id `claude-fable-5-1`. Same model as Claude Mythos 5.1 with different safeguards. Mythos 5.1 is only for vetted programs (cyber, life sciences). documented. [what's new](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1)
- Context window 1 million tokens. Max output 128k tokens. Adaptive thinking always on. Effort is the dial: `low`, `medium`, `high` (docs' starting point), `xhigh`, `max`. documented.
- Default effort: High in Claude Code, Medium in Cowork and on claude.ai. documented. [launch]
- Input $10 per million tokens. Output $50 per million. Same as Fable 5 except cache reads. documented.
- Cache reads $0.25 per million tokens (0.025 × input), down from 0.1 on other Claude models. Anthropic's estimate: about 25% less than Fable 5 on typical token-billed work, up to about 45% on highly agentic work. documented. [launch] [what's new]
- Batch processing $5 input / $25 output per million. documented.
- 1M window is standard price across the whole window. documented.
- Knowledge cutoff is not in the official what's-new page fetched 2026-09-02. A review site said June 2026. single-source until official. Do not ship the cutoff without a first-party cite.
- Text watermark on Fable 5.1 output (EU AI Act, models after 2 August 2026). No extra tokens, no user data in the mark. C2PA on supported images and video via the Files API. documented.
- Covered Model. 30-day data retention. Not zero-retention unless Anthropic authorizes it. Enterprise Frontier Safeguards (customer-held cloud) later in fall 2026; until then eligible customers can use zero retention. documented.
- Available on Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry. documented.
- Forced `tool_choice` of type `any` or named tool returns 400. Auto and none still work. documented.
- Thinking blocks are bound to the conversation that produced them. Editing earlier turns invalidates them (enforced for accounts created on or after 31 August 2026). Earlier models cannot read 5.1 thinking blocks. documented.

## What 5.1 changed from 5 (shows up without a code change)

- Parallel tool calls in coding and computer-use loops may go one-per-turn where 5 batched several. Quality the same; extra turns cost time and tokens. A one-line batching instruction restores batching. documented. [prompting](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1)
- Fewer user-facing progress updates during long tool runs, more so at higher effort. Default `thinking.display` is `"omitted"`, so those updates never reach the user unless the client asks for `"updates"`. documented.
- At `low` effort it searches less and answers from memory more. Raise effort or add a search nudge. documented.
- Prose is denser in places: longer sentences, fewer paragraph breaks than Fable 5. documented. See Writing.
- Less bold, fewer headers and lists in chat than earlier Claude models. Anti-formatting rules written for those models can now suppress structure the content needs. documented.
- Summaries more often copy source wording without marking a quote. documented.
- Small text-file edits more often rewrite the whole file. Same result, more output tokens. documented.
- Capability gains over 5 are largest at higher effort. At `medium`, results roughly match Fable 5 at lower cost. documented.
- Gains concentrate in: long agentic coding, documents/spreadsheets/slides, multistep research, vision on dense charts, full 1M-context work, computer use. Multilingual on par with 5. documented.

## Vendor benches (Anthropic launch table, 2026-09-01)

Say who measured. Do not treat as this desk's measurement. Fable 5.1 vs Fable 5 vs Opus 5 vs GPT-5.6 Sol, Anthropic's setup, production safeguards on. Where safeguards intervened, some cyber tasks went to Opus 4.8 and biology to Opus 5, which they say likely reduced Fable scores.

- Terminal-Bench-Science 0.1: 52.6 / 24.7 / 29.0 / 22.4. Standard error about ±3.5–4.5 points. Public leaderboard (different setup) had Opus 5 at 30.0 and Fable 5 at 21.4. documented. [launch]
- Terminal-Bench 4.0: 55.8 (Mythos 5.1 60.9) / 42.0 / 52.3 / 37.3. documented.
- GDPval-AA v2: 1853 / 1723 / 1824 / 1711. documented. (Row identity from launch table plus [binaryverseai](https://binaryverseai.com/claude-fable-5-1-review/) — verify labels if shipping the number.)
- CursorBench 3.2: 73.4 / 70.5 / 70.0 / 67.2. SpaceXAI's Sualeh Asif, in the launch quotes, said 73.4% at max effort. documented.
- OSWorld 2.0: 31.4 / 17.1 / 26.9 / 19.6. Anthropic footnote: Fable 5 and 5.1 scored zero on tasks where safeguards fired; numbers not comparable to older OSWorld publishes. documented.
- Humanity's Last Exam appears on the launch page as several rows (partial, strict, no tools, with tools). Copy from the launch table, do not invent which row is which. documented.

## Science claims (vendor, 2026-09-01)

- Mythos 5.1 with open protein-design tools: on three Adaptyv Bio competition targets, binding affinities 10× the best submitted designs; hit rate nearly 50% across 12 targets vs typical 10–15% today. Designs sent to two external labs. documented. [launch]
- Fable 5.1 trained a network on Magellan radar to make a higher-resolution elevation map of about one third of Venus; released on Zenodo CC. documented.
- Mythos 5.1 sped seven open-source protein/genomics models up to 2.5× on an H100 with identical outputs; estimated 30–60% GPU cost cut on genome-wide analyses. Plan to open-source. documented.
- These are Anthropic's own research demos, not independent replication. Grade documented-as-claimed. The page may not need the protein and Venus work; they are Mythos/science, not the desk's Fable seat.

## Writing, including mannered prose

- Anthropic: 5.1 writing is generally a step up, fewer stock phrases and less unexplained jargon. In some cases denser than 5. documented. [prompting § Writing density]
- They named the leftover fault **mannered prose**. Definition, their words: it substitutes metaphor and flourish for direct statement. Example: "a parameter worth varying" becomes "a dial worth turning." Example: "this point still matters" becomes "this point earns its keep." The phrases exist to display the writer. The reader works harder. Metaphors drag in connotations the writer did not choose. The fix is the literal phrase when one exists. documented.
- They say put that definition in a user message (preferred) or the system prompt. The short line "Please remove all mannered prose" also tends to work. documented.
- Felix Rieseberg, Anthropic, HN 2026-09-01: 5.1 sounds less stereotypically like other Claude models, more natural, follows style instructions more reliably; more work to do. single-source (employee). [HN 49525378](https://news.ycombinator.com/item?id=49525378)
- Boris Cherny, Claude Code, X 2026-09-01: 5.1 writes better and has better tone; they heard the Claude-speak feedback; solid progress, more to come. single-source (employee). https://x.com/bcherny/status/2094864064648536068
- Canva, Danny Wu, launch quote: writing more understandable, follows their guidance better; preferred 5.1 over 5 in a blind test. documented (customer quote on launch page).
- Ramp, Dwight Temple: for research, greenfield, long-horizon, use 5.1 as orchestrator; 38-hour unattended ML run. documented (customer quote).
- Every, Dan Shipper, launch quote: "Friendly Fable. Fable-level intelligence, Opus-level price, Sonnet-speed." About twice as fast as Opus 5 and half the tokens in their tests. documented (customer quote). Treat as Every's test, not a price-card change: API sticker is still $10/$50.
- Every vibe check (Shipper / Caitlin Parrott, day-one): 5.1 gets to the core tension faster; leftover "hippy-dippy" literary sentences; extra-high effort can hurt writing. reported. [Every](https://every.to/vibe-check/fable-5-1-vibe-check)
- Lisa Peyton, 2026-09-01: Fable 5.1 Medium won voice; Fable 5 followed word bans and still lost on cadence (binary inversions, stacked short fragments). Fable 5 invented a timestamped anecdote; 5.1 High flagged a guessed detail. single-source. [Peyton](https://lisapeyton.com/claude-fable-5-1-vs-fable-5-marketing-writing-test/)
- YouTube comment on Every's video: first thing 5.1 writes is still "Do X, not Y." single-source, anecdotal.
- Rick Brewster (Paint.NET), X 2026-09-02: Opus 5 prose was driving him bonkers; glad 5.1 is out. single-source.
- Sam Shaddox, X 2026-09-02: posted Anthropic's mannered-prose block as "the official fix" for anyone who hates Claude's writing style. single-source. https://x.com/agenticattorney/status/2095035714358726885
- This desk, firsthand, 2026-08/09: Fable 5 (not 5.1) wrote "a head that lacks something the head before it had" and the false repair "That run cannot see the notes the last run used." Owner: a person would not say the second. Same family as mannered prose (flourish / recurrence instead of the objects this job is handed). See `01 - Workbench/riddle-sentence-how-to-see.md`. firsthand.
- This desk, firsthand: live Probability Distributions opening "Something happens over and over, and each time it leaves a number behind" was struck 2026-08-28 as "bullshit opus writing." Still on the live page as of 2026-09-01. firsthand.
- This desk, 2026-09-01: default writer moved to Grok 4.6 because late-August Fable prose was a rewrite tax. firsthand. [[journal/2026-09-01-grok-writes]]
- 5.1 writing praise is one day old. Parrott's caution: new models look human until their tells are found. Do not restack the writer seat on launch-day quotes.

## Long-running work and coding (field)

- Jane Street: more coding problems solved than Fable 5 or Opus 5; stays readable on long multi-step tasks where prior models became hard to follow. documented (customer quote).
- Cognition: moving Opus 5 Devin traffic to 5.1 launch day; matched or edged Fable 5 at lower cost per task; cache-read price makes Fable-class economical for workloads they had kept on Opus, starting with code review. documented (customer quote).
- Millennium: 5.1 found a one-in-a-million crash in a vendor library that engineers and other models, including Fable 5, had missed for years. documented (customer quote). Single incident.
- MongoDB: ~three-day prototype, hours unattended, verification loops. documented (customer quote).
- CodeRabbit, 2026-09-01: almost the same known-issue hits as Fable 5, 87 fewer final comments, 186 fewer nitpicks; completed the stated task and stopped instead of filling every blank. reported. [CodeRabbit](https://www.coderabbit.ai/blog/fable-5-1-model-review)
- Snorkel, 2026-09-01: vs Opus 5 on their Terminal-Bench+ slice, both solved 18, Opus alone 5, Fable alone 2; on shared successes 5.1 used 58% fewer output tokens and finished 36% faster; more outright failures. reported. [Snorkel](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark)
- Browserbase: hardest browser-agent bench 82% in ~10 minutes vs 74% Opus 5 and 57% Fable 5, fewer tokens. documented (customer quote).
- Red Hat: root cause of every broken build they tested, all effort levels; updates more concise. documented (customer quote).
- Simon Willison, 2026-09-02: SVG pelican; `max` effort 13 min 54 s, $3.30, 65,927 output tokens; best Anthropic pelican he has seen, still less flair than Gemini 3.7 Flash. single-source. [simonwillison.net](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/)

## Safeguards (keep short on a rolling card)

- Fable 5.1 can return `stop_reason: "refusal"`. Fallback targets: Opus 4.8 and Opus 5. No bill for a refusal before any output. documented.
- Cyber: identifying vulnerabilities allowed; exploit development not. Anthropic: ~60% fewer cyber-safeguard interventions per Claude Code session vs Fable 5's previous safeguards. documented.
- Biology: elementary/medical false positives down 85% vs Fable 5 launch; research-and-development life-science queries still go to Opus. Mythos life-sciences program with the US government. documented.
- Finding vulnerabilities in source is permitted. Compile-check phrasing, lesser-known languages, and base64 in tool output still raise false positives. documented.

## What this desk already holds

- [[wiki/Systems/AI & Agentic Systems/Claude Fable]]: Fable 5, June 2026. Earns on wide tasks over files on disk. Fails on taste-bound work without exemplars. Five invariants listed there. Suspension 12 June 2026, later returned. firsthand / that page.
- Stack as of 1 September 2026: Grok 4.6 is primary writer; Cowork (Fable 5 / Opus 5) is research on request. firsthand.
- Token-metered API is off the roster (2026-08-28: "i don't like anything with API."). Cowork/Code seats are subscription. firsthand.
- No 5.1 hands-on on this desk as of the bank date. Do not invent a 5.1 firsthand writing result.

## Strongest case against a 5.1 restack

- Sticker is still $10/$50. Cache-read cut helps long cached loops, not a short Cowork chat with little cache.
- One day of field quotes. Parrott: tells appear later.
- Snorkel: more outright failures than Opus 5 on their slice, even though cheaper when it succeeds.
- Denser prose is official. Mannered prose is official. This desk already paid a rewrite tax on Fable 5 prose.
- Extra-high / max effort can balloon tokens (Willison $3.30 pelican; Every: extra-high can hurt writing).
- Safeguard fallback still redirects some work to Opus.
- Writer-seat ruling is one day older than the 5.1 launch. A restack needs a scored pass on this desk's pages, not a launch post.

## Cost, quit, check (for the honesty kit)

- Cost: subscription minutes on Cowork/Code, or $10/$50 if anyone used the API (this desk does not). Cache reads $0.25/MTok. Max-effort long writes are the expensive shape.
- Quit: three taste-bound rounds with exemplars on the table and still missing (already on the Fable 5 page). A 5.1 wiki draft that still needs a Grok rewrite pass is the same tax as August.
- Check: one real Cowork research lane and one scored wiki paragraph on 5.1 with the mannered-prose user message, compared to Grok 4.6 on the same brief. If 5.1 still needs a rewrite pass, the writer seat stays.

## Open questions for the page

- After two weeks of 5.1, does the mannered-prose user message actually cut the recurrence-minus family on this desk, or does it only cut "dial" / "earns its keep"?
- Does Medium effort win voice and High win substance here the way Peyton saw, and does that match Every's extra-high-hurts-writing note?
- Does cache-read pricing change anything for Cowork sessions that barely cache, or only for Claude Code loops?
- Is the rolling-page template (one family page, dated version section) the shape for Grok 4.6, Opus 5, and Sonnet 5 as well?

## Sources

- [Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) — ship date, same-model split, price/cache estimates, benches, customer quotes, science demos, safeguards. Fetched 2026-09-02.
- [What's new in Claude Fable 5.1](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1) — API id, window, pricing table, breaking changes, behavior diffs. Fetched 2026-09-02.
- [Prompting Claude Fable 5.1](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1) — mannered prose definition and both prompt lengths; density; formatting; quoting; effort. Fetched 2026-09-02.
- [System card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
- HN [49525378](https://news.ycombinator.com/item?id=49525378) — Felix Rieseberg, 2026-09-01.
- Boris Cherny, https://x.com/bcherny/status/2094864064648536068
- [Every vibe check](https://every.to/vibe-check/fable-5-1-vibe-check)
- [Lisa Peyton bakeoff](https://lisapeyton.com/claude-fable-5-1-vs-fable-5-marketing-writing-test/)
- [CodeRabbit](https://www.coderabbit.ai/blog/fable-5-1-model-review)
- [Snorkel](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark)
- [Simon Willison pelican](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/)
- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — Fable 5 operating notes
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[journal/2026-09-01-grok-writes]]
- `01 - Workbench/fable-51-mannered-prose-prompt-2026-09-02.md`
- `01 - Workbench/riddle-sentence-how-to-see.md`
