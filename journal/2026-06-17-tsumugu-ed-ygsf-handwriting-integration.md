---
title: "Tsumugu-ed: Incorporating web.ygsf.com for handwriting sections with master calligrapher examples"
type: journal
created: 2026-06-17
updated: 2026-06-17
tags:
  - journal
  - tsumugu
  - dictionary
  - tsumugu-ed
  - handwriting
  - calligraphy
  - ygsf
  - 以观书法
---

# Tsumugu-ed: Incorporating web.ygsf.com for handwriting sections (2026-06-17)

**Verdict:** Add a dedicated "手寫 / Handwriting" section (or sub-tab) to tsumugu-ed.com entries. Source authentic variants and exemplar characters from web.ygsf.com (以观书法) for one or two master calligraphers per core style (楷 Kai, 行 Xing, 草 Cao). Start with 1–2 high-frequency characters per style as proof-of-concept; expand component-first. This complements the existing FORM layer, Björkstén drills from the Penmanship Workshop, and model works from the Cursive Crash Course. It turns recognition into production knowledge using real historical handwriting.

## Context and motivation
From prior work (see 2026-06-16-tsumugu-handwriting-sections.md and the 2026-06-17 YGSF research entry):
- Outlier Handwriting & Penmanship Workshop and Cursive Crash Course provide primary private sources (Björkstén textbook excerpts + practice PDFs; high-res images of 王羲之 蘭亭序, 蘇軾 寒食帖, 米芾 張季明帖; 草訣歌 Anki).
- Days 14-19 lesson explicitly demonstrates web.ygsf.com as the tool for viewing components "以觀書法" across different hands.
- tsumugu-ed.com (built via render_site.py from entries/*.json) already renders FORM, definitions, stories, related, and search. A handwriting layer fits naturally after FORM without bloat (collapsed by default or shift-peek like glosses).

web.ygsf.com is a searchable database of >4M calligraphy forms (楷/行/草/隶/篆 + ancient) from historical masters, plus hard-pen examples. Core value for us: filter by calligrapher, compare variants of the same character or component, and surface high-quality images of authentic traces. The site covers exactly the styles we need and was recommended in the workshop by the instructor.

## Transcript takeaways from Day 14-19: Components (and how to use 以觀書法 | 以观书法)
From the Handwriting & Penmanship Workshop (noisy ASR transcript; key points extracted and cleaned for clarity):

- Lesson focus: Components and "雜質" (variations or "impurities" in writing, referencing Björkstén). The course emphasizes practical observation of how components are actually written across hands.
- Primary tool introduced: **以觀書法** (or 一貫書法 / Yí Guàn Shū Fǎ). The web version has identical functionality to other versions of the tool.
- Search workflow: Enter any character. The site displays many different renderings/writings from various historical calligraphers and writers.
- Filtering: Use the left sidebar to select a specific calligrapher. This isolates only their examples of that character (including visible signatures/簽名).
- Imitation and study value: "如果你有喜歡的手寫者想要模仿，你可以在左邊選擇然後只看見那些人寫的" (If you like a particular writer's style and want to imitate them, select on the left to see only their work). "這很有用尤其是如果你想模仿那個人寫的" (This is especially useful if you want to imitate that person's writing).
- Component-level insights: Demonstrates variations in the same strokes or components (e.g., "點" dots and their connections, horizontals, balance/width of elements, short vs. long strokes, connected vs. discrete forms).
- Examples discussed: Different treatments in characters/radicals (wide vs. narrow faces, varying lengths, connection patterns). Ties back to earlier discussions on balancing components.
- Practical advice: Many examples are good models ("很多這些人寫得很不一樣但他們都算是好"); focus on relatively standard ones when learning, but all aid observation. "我建議你去看比較接近標準的寫作方式" (I suggest looking at relatively standard writing methods).
- Overall: "你可以開始看見寫得如何很好" (You can start to see how well it is written). Valuable even when examples are brush vs. pen or non-standard, as they reveal real-world handwriting diversity while linking to structure.

These takeaways directly support integrating web.ygsf.com for component-aware handwriting examples in tsumugu-ed entries.

## Proposed integration into tsumugu-ed.com
1. **Schema / data layer** (in tsumugu-ed):
   - Optional `handwriting` object per entry (or sidecar for components).
   - Fields: `style` (kai | xing | cao), `master` (e.g. "顏真卿"), `work` (e.g. "多寶塔碑"), `character_examples` (array of specific glyphs or image refs with description of variant features), `notes` (penmanship observations, reductions, balance).
   - Or component-level: Store reusable patterns keyed to radicals/components, then compose per entry.

2. **Render on tsumugu-ed.com** (updates to render_site.py + site_assets):
   - After the FORM / components block, add a "手寫 / Handwriting" section.
   - Display: 1–2 style tabs or accordions (楷書, 行書, 草書).
   - For each: 1–2 master calligraphers + 1–2 sample characters/components.
   - Show: Thumbnail or embedded image (public domain / attributed from YGSF or equivalent museum sources), short description of distinctive features (e.g., "Yan’s powerful, balanced strokes with heavy pressure on horizontals"), link to full work on ygsf.com or museum if available.
   - Optional: "Compare" view across styles for the same character.
   - Keep it production-oriented: focus on how the form is actually written (stroke order implications, common cursive reductions, aesthetic balance), not pure art history.
   - Performance: Lazy-load images; keep total payload small (target <50KB additional per entry).

3. **Content sourcing and authoring workflow**:
   - Use web.ygsf.com interactively for research (search character → filter master → inspect variants).
   - Crib lane (Grok): Pull factual descriptions of variants, which master is iconic for the style, key penmanship traits.
   - Author lane: Write concise notes + select 1–2 clearest examples per style.
   - Private assets (course images + Björkstén PDFs) provide technique drills and specific model works; YGSF supplies breadth and additional masters.
   - Start small: Pilot on 10–20 high-frequency entries (e.g., from TOCFL A1 or backbone). Validate against style card (no hedge words, encoding power focus).

## Sample implementation: one representative character per style + 1–2 masters
Choose simple, high-utility characters that appear across styles and allow clear comparison of handwriting (e.g., common radicals or practice characters). Examples drawn from standard canon and confirmed coverage on YGSF-style databases. Use public-domain rubbings or attributed images; cross-reference with course materials.

### 楷書 (Kai / Regular script)
Iconic masters: 歐陽詢 (Ouyang Xun, early Tang – structured, "Ou style"), 顏真卿 (Yan Zhenqing, high Tang – powerful, balanced "Yan style").

**Sample character: 永 (yǒng) or a component like the horizontal in common forms.**
- Yan Zhenqing example (e.g., from 《多寶塔碑》 or similar stele rubbings): Strong, slightly flared horizontals with deliberate weight; stable, monumental presence. Good model for balanced, legible Kai.
- Notes for entry: "Yan’s Kai emphasizes even pressure and clear separation; horizontals often carry subtle upward tilt for energy. Use as reference for standard modern handwriting."

(Ouyang Xun for contrast: Tighter, more angular structures.)

### 行書 (Xing / Running / Semi-cursive)
Iconic masters: 王羲之 (Wang Xizhi – the benchmark), 米芾 (Mi Fu – dynamic, "Mi dots"), 蘇軾 (Su Shi – natural, from course materials).

**Sample character: 之 (zhī) or a character from Lanting Xu context.**
- Wang Xizhi (from 《蘭亭序》 rubbings/copies): Fluid connections, elegant proportions, controlled speed. The "of" particle shows graceful linking without full cursive collapse.
- Mi Fu or Su Shi variant: More personal flair – Su’s from 寒食帖 shows relaxed, expressive flow with varying pressure.
- Notes: "Xing bridges Kai legibility and Cao speed. Wang’s version is the classical ideal for Traditional handwriting; observe how strokes merge subtly for speed while preserving component identity."

(Ties directly to course images of Lanting and Hanshi.)

### 草書 (Cao / Cursive / Grass script)
Iconic masters: 王羲之 (foundational), 張旭 (Zhang Xu – "wild" or mad cursive), 懷素 (Huai Su – monk’s expressive wild style), with 智永 for more structured Cao.

**Sample character: A radical or full character like elements from 草訣歌 practice (e.g., simplified forms of common components).**
- Zhang Xu / Huai Su example (from wild cursive works like 《古詩四帖》 or Autobiography): Highly abbreviated, connected strokes forming rhythmic "grass" patterns; energy over legibility.
- Wang Xizhi variant (earlier, more restrained Cao): Still connected but more readable anchors to standard forms.
- Notes: "Cao prioritizes speed and expression. Masters reduce components dramatically (see 草訣歌 mnemonics); study for recognition of real-world handwriting while maintaining the underlying structure from FORM."

(Direct overlap with course 草訣歌 Anki and character forms.)

For tsumugu-ed display: Show side-by-side or tabbed images (1–2 per master/style) with caption: "Yan Zhenqing (Kai) rendering of [char] – note balanced weight." Link "See more variants on YGSF" or "Full work". Include short "Production tip" drawn from workshop (e.g., "Practice the connecting stroke as in Huai Su for fluid Cao").

## Benefits, trade-offs, and success criteria
**Benefits**:
- Completes the production loop (recognize → encode via story → write by hand).
- Leverages free/public aspects of YGSF + private course assets.
- Component-first reuse scales across entries.
- Differentiates tsumugu-ed.com: authentic master handwriting alongside etymology and stories.

**Trade-offs / constraints**:
- Image licensing: Prefer public domain rubbings (museums, Wikimedia) or fair-use educational excerpts; attribute YGSF where images are sourced or inspired by it.
- Scope: Limit to 1–2 chars per style initially to avoid bloat. Component-level data preferred over per-entry duplication.
- Display: Must stay secondary to FORM. Mobile-friendly.
- Research cost: YGSF is interactive (no easy bulk export); use for targeted cribs.

**Falsifiable success criteria** (first 20 entries):
- At least one clear master example per style rendered.
- User can distinguish style traits from the section.
- No increase in entry authoring time beyond one extra crib pass.
- Validate via random sample against Björkstén/Outlier principles.

## Immediate actions
1. Pilot: Pick 5–10 entries (e.g., common from backbone or TOCFL). Search YGSF for the sample characters/styles above.
2. Update schema lightly in tsumugu-ed if needed.
3. Prototype render in a local build of exports/site.
4. Feed into next crib/authoring wave: Research lane pulls variants from YGSF + course; author lane selects and describes.
5. Cross-check with existing course images for consistency (e.g., Su Shi and Wang examples).

This keeps the handwriting layer practical, beautiful, and aligned with the lookup-first + encoding-power philosophy. Web.ygsf.com gives us the breadth of real master hands that the private workshops alone cannot provide at scale.

Related artifacts:
- llm-knowledge-base/journal/2026-06-16-tsumugu-handwriting-sections.md
- 2026-06-17-tsumugu-ygsf-calligraphy-research.md
- tsumugu/personal/sources/outlier-*/ (workshop files, Björkstén PDF, course images)
- tsumugu-ed/schema/ and scripts/render_site.py
- PRD-Production-Pipeline.md and PRD-Entry-Authoring.md

## Pen-Focused Handwriting for Language Learners (2026-06-17 reflection)

I'm not interested in brush calligraphy at all. This is mainly for pen—specifically ballpoint pen—because I'm targeting students who are learning Chinese as a language.

For them, it might be really interesting to follow examples of calligraphers who are interested in *learning how to write characters*, not just recognize them, but to enjoy the process of learning to write them well.

Take me for example: I am really interested in learning 行書 (Xing Shu / running script), but I was unable to because I couldn't find any good resources for it. But if it was located inside the dictionary, I can learn how to write the character as a calligrapher would at the same time as I'm learning the character itself. It would make the experience of acquiring vocabulary much more enjoyable and multi-dimensional—combining meaning, story, components, *and* the actual handwriting pleasure.

This approach turns passive recognition into active, pleasurable production right inside the entry. For language learners, that integration could be powerful.

Related: This reinforces the decision to prioritize hard-pen (ballpoint/fountain) friendly masters and examples when curating the handwriting layer for tsumugu-ed.com, drawing from practical resources like the Outlier Penmanship Workshop and web.ygsf.com.

Next journal will report on pilot results or specific character examples once researched.