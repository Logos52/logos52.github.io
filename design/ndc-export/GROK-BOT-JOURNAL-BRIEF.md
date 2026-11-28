# Note to Grok Bot: fill in the Journal page

File: `journal.html`. A rail on the left lists the months; the body on the right shows one month at a time. Each month has a paragraph (class `jm-syn`) and four weeks, W1 to W4 (days 1–7, 8–14, 15–21, 22 to the end of the month), newest first. Each week has a one-sentence line (class `jr-syn`), its entries, and its AI news.

## 1. AI news, for every month
News exists for October and November 2026 only, and those 15 rows are a draft from news sites and release trackers. May to September have none.

**The pattern for one news row**
- One row per event, placed in the week it happened, newest first.
- The day number, then a headline, then the name of the source.
- Headline: the product and what changed, in ten words or fewer. No adjectives of praise. Examples: "Claude Haiku 5.5, about 75% cheaper than Haiku 4.5", "Gemini 4 Argon generally available".
- Link the row to the maker's own announcement (the lab's blog or its post on X). Use a news site only when there is no announcement, and name that site as the source.
- At most three rows a week. Put first the events that changed the work recorded in the journal that week.
- Only events you can date to the day.

The row appears twice, once in the Months view (inside `<div class="jr-news">`) and once in the Two tracks view (inside `<div class="jt-news">`). Both use the same markup:

```html
<a class="jr-row" href="https://source.example/announcement" target="_blank" rel="noopener"><span class="jr-d">9</span><span>Claude Fable 5.2 and Mythos 5.2 <span class="jr-src">Anthropic</span></span></a>
```

**To do**
- Check the 15 October and November rows against the makers' own announcements, fix dates and headlines, and replace the tracker links with the announcements.
- Add rows for May to September 2026.
- One conflict to settle: a weekly roundup has GPT-6.1 Sol launching in the week to 2 October, while a daily edition has GPT-6 reaching ChatGPT on 7 October.
- Each month paragraph still ends with an HTML comment starting `GROK BOT:`. Replace it with one clause tying the month's work to that month's releases, or delete it.

## 2. October and November 2026 have no journal entries
The repo's journal stops on 18 September 2026. The October and November content on the page, and W4 of September, was written from commit messages and page creation dates in Logos52/logos52.github.io. Rows in those weeks are plain text, not links.
- Draft entries written from the commit messages are in `scratch/journal-drafts/`, one file per row, twelve in all. Each states only what the commits state. Add the reasons and decisions, then move them into the journal.
- Eight rows have no commit behind them and so no draft: The Big Idea: Agents Do, You Steer (18 Oct); Ten Working with Agents pages written (20 Oct); Worldviews & the Political Order: hub and seven question groups (23 Oct); New pages: Style, Exam Technique, Attention Span and Focus Training, Using Grok Bot (10 Nov); Test a bot before it ships (11 Nov); Razors (21 Nov); Builders’ Logs 2026 and thirteen builder pages (22 Nov); Use Cases; Planning and Automation (22 Nov).
- One date to check: the page dates the seven Worldviews question groups to 23 October, but the commit that adds seven Worldviews group hubs is dated 11 November.
- Once real entries exist, rewrite the two month paragraphs and the week lines from them.

## 3. Entry titles
Fourteen titles were changed on the page and should be changed the same way in the journal files.
- Dates removed from three titles: "Tsumugu PRD set authored (core + ed)", "Ideas Bank — Expansion", "Focus Management and Curvilinear Design".
- Eleven long titles cut at a natural break, with no words changed. Each now ends at: "…Google has not chosen to index"; "…the audience is not"; "Writing voice — agent prose reverts to selling"; "The Hán-Việt bridge — deep dive"; "…the domain Map"; "Simplified edition decided and the VN toggle goes live"; "…English-only lock"; "…for handwriting sections"; "…custom CJK search built"; "…grammar gets its own decomposition"; "Taste-bound tasks: generate vs elicit".
- In the Threads view only, the leading "Tsumugu:" or "Tsumugu —" is dropped inside the Tsumugu thread. That is done on the page and needs no change in the files.
- New titles: no date in the title, and short enough to fit one line (about 85 characters).

## 4. Threads
The Threads view groups entries by keywords in their titles: Tsumugu, Language study, Worldviews, Wiki and site, Models and agents, Writing, Other. This is a guess. Give each journal entry one thread tag in its front matter, and build the view from the tag.

## 5. Copy guidance for anything written here
- Month paragraph: two or three sentences. Week line: one sentence.
- Never say what is not on the site. This is the one hard rule.
- Preferences, to weigh with judgment: neutral phrasing over "I" language, and no notes on how a page was made or what tooling made it.
- Chinese is Traditional only.
- No counts or sort notes as page furniture.
- All synopses now on the page are drafts by the design assistant and can be rewritten.
