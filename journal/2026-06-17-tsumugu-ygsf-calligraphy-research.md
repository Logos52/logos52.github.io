---
title: "Tsumugu: YGSF / 以观书法 research for handwriting sections"
type: journal
created: 2026-06-17
updated: 2026-06-17
tags:
  - journal
  - tsumugu
  - dictionary
  - handwriting
  - calligraphy
  - ygsf
  - 以观书法
---

# Tsumugu: web.ygsf.com / 以观书法 deep dive (2026-06-17)

Building directly on the 2026-06-16 handwriting sections journal. This entry logs findings from exploring the Outlier Handwriting & Penmanship Workshop materials (especially Days 14-19 components lesson) and initial + targeted research on the referenced tool/site.

## Summary of findings so far

### Outlier sources recap
- **Chinese Cursive Crash Course**: Focus on principles (connectedness, reusability, context, simplification), famous works with high-res images (王羲之《蘭亭序》, 蘇軾《寒食帖》, 米芾《張季明帖*), 草訣歌 Anki deck, character forms, stroke-order videos. Primary raw for cursive variants and model works by masters.
- **Handwriting & Penmanship Workshop**: Practical 30-day challenge for legible aesthetic handwriting (fountain/hard pen focus, not full brush art). Björkstén's *Learn to Write Chinese Characters* (Yale) as explicit textbook — read intro pp. 1-42 (provided as PDF excerpt in source). Covers basic strokes with error examples, history of scripts (oracle → seal → clerical → kaishu/xingshu/caoshu), structure principles tied to technique. Practice Units 1–7+ PDFs for strokes, composites, balance, components, additional characters (incl. 李白《靜夜思* example). Strong on production drills, component observation, penmanship.
- **Companion**: Masterclass v2 for pedagogy/method. All ingested via the same harness; video-heavy (audio extracted in source dirs; transcripts limited without ASR).

Key local paths:
- Sources: ~/Projects/tsumugu/personal/sources/outlier-handwriting-penmanship-workshop/ (and cursive)
- KB pointers: llm-knowledge-base/raw/private/outlier-*/ (READMEs, transcripts/ with 00-INDEX)
- Previous journal: 2026-06-16-tsumugu-handwriting-sections.md (full motivation, placement ideas, production layer plan)

Instructor notes (from workshop welcome/item.json and transcripts): Distinguishes Outlier deep/etymological structure from the book's surface/aesthetic focus. Practical goal: good everyday handwriting for Traditional chars.

### Discovery of web.ygsf.com
In the **Days 14-19: Components (and how to use 以觀書法 | 以观书法)** lesson:
- Instructor (John) demonstrates a "very useful tool" / "網路版本" (web version).
- Site name: **一貫書法** / **以观书法** (Yǐ Guān Shū Fǎ — "Observe/Appreciate Calligraphy").
- Features highlighted in noisy transcript:
  - Search/input a character.
  - Displays many different writings/examples from various calligraphers/masters (including signatures/簽名, traditional/simplified labels).
  - Filter on left by specific calligrapher to isolate their works only.
  - Excellent for comparing component variations (dots, stroke width/balance, connections, different "faces" of the same radical).
  - Useful for imitation: "如果你有喜歡的手寫者想要模仿，你可以在左邊選擇然後只看見那些人寫的".
  - Cross-referenced with balancing discussion and Björkstén.
  - Notes some examples may not be pure pen; still valuable models.
- Explicitly tied to component study ("以觀書法") for seeing how different hands render the same elements.

This matches the user's note. The course treats it as a live research/ observation aid for handwriting production.

## Deep dive on web.ygsf.com (以观书法)

**Primary URLs**:
- Web app: https://web.ygsf.com (JS-heavy SPA; basic fetches show "enable JavaScript" shell)
- Main/info: https://www.ygsf.com
- App: iOS/Android (high ratings ~4.9, ~987万 installs reported in some metadata)

**Core positioning** (from official descriptions, app stores, user references):
> 『以观书法』与您一起欣赏汉字之美，学习书法之道。
> "以古为鉴 *•* 观复知常"

**Scale and coverage** (consistent across sources):
- **Calligraphy dictionary**: >4 million character forms (行、草、隶、篆、楷 + ancient: 甲骨文, 金文, 简帛, 篆刻 etc.).
- **Hard pen**: >1.3 million additional forms (aligns perfectly with workshop's fountain pen focus).
- High-res 名帖大全 (famous copybooks/rubbings) with transcriptions and annotations.
- Extensive master works library.

**Specific masters and works** (from App Store listing and references):
- **王羲之**: 快雪时晴帖, 十七帖, 七月帖, 二谢帖, 丧乱帖, 奉橘帖, 平安帖, 遊目帖, 姨母帖, 初月帖, 雨后帖, 远宦帖, etc. (core for Xing/Cao).
- **颜真卿**: 多宝塔碑, 颜勤礼碑, 祭侄文稿, 争座位帖, 王琳墓志, 裴将军诗, 湖州帖, 麻姑仙坛记, 乞米帖, 东方朔画赞, 祭伯父文稿, 刘中使帖, 李玄靖碑, 大唐中兴颂, 颜氏家庙碑, 自书告身帖, etc. (iconic for Kai + some Xing/Cao energy).
- **米芾**: 苏太简参政帖, 蜀素帖, 苕溪诗, 行书三札, 研山铭, 多景楼诗册, 吴江舟中诗, etc.
- **苏轼**: 前赤壁赋, 寒食诗帖 (directly matches course images), 洞庭春色赋, 归去来兮辞, 醉翁亭记, etc.
- Others explicitly listed or commonly available: 黃庭坚, 智永, 张旭, 怀素, 欧阳询, 柳公权, 赵孟頫, 钟繇, 宋徽宗 (瘦金体), 徐浩, 李邕, 文征明, 董其昌, 乾隆, 齐白石, etc.
- Covers top figures for the three styles the user is targeting.

**Key features** (from app descriptions, reviews, tutorials):
- **Searchable dictionary**: Input hanzi → results across all scripts/styles. View individual character variations from different masters/works.
- **By calligrapher / filter**: Select specific artist to see only their traces (exactly as demonstrated in the workshop lesson). Supports imitation and style comparison.
- **名帖 / copybooks**: Browse full high-res works with context, transcriptions.
- **集字创作工具**: Aggregate authentic master traces for composition (poems, couplets, custom text). Includes ready-made poetry/couplet collections.
- **Courses & learning**: Large library of tutorials and single-character 临摹 (copying) videos from 名师.
- **印谱 / seals**: Full database searchable by text.
- **Ancient lexicons**: Integrated Kangxi Dictionary, Shuowen Jiezi, and other classical references for research.
- Additional: Hard pen support, export/print options (users mention printing practice sheets), collection/favorites.

**Usability notes** (from reviews, integration mentions, papers):
- Clean, focused interface for learners and researchers.
- High volume of content; actively maintained/expanded (copyright 2019–2025 by 以观文化).
- Used as data source in academic work (e.g., calligraphy recognition datasets pulling master images).
- Web + apps; some advanced features (full exports, certain collections) may be paid, but core search/browse is strong in free tier.
- Reviews praise it as one of the best for seeing real variations, set composition, and comprehensive coverage. Recommended alongside other tools (e.g., in font design, learning communities).
- Instructor John Renfroe has publicly called https://web.ygsf.com his "go-to" in calligraphy discussions.

**Relevance to Tsumugu / handwriting production layer**:
- Directly supports the component-first approach discussed in journals: Observe how masters handle the same radicals/components in different styles and contexts.
- Excellent for curating "3 most famous calligraphers per style" examples:
  - **楷書 (Kai)**: 欧阳询, 颜真卿, 柳公权 (strong coverage via Yan's steles and standard examples).
  - **行書 (Xing)**: 王羲之 (Lanting etc.), 米芾, 苏轼 (course images overlap perfectly; many specific works).
  - **草書 (Cao)**: 王羲之, 张旭, 怀素 (plus 智永 for structured cursive).
- High-quality images suitable for dictionary "手寫" sections (variations, before/after, style notes). Can complement the private course assets (Lanting, Hanshi, Zhang Jiming images + Anki + Björkstén drills).
- Practical + historical: Workshop for technique/rules, this site for master models and visual research.
- Potential uses: Per-entry variant examples, component reference library, crib input for authoring lane, inspiration for production (reductions, penmanship tips).

**Limitations / notes**:
- Web version is client-heavy (hard to scrape statically; best used interactively).
- Focus is primarily on historical/traditional masters and works (not modern fonts, though hard pen section helps).
- Some premium features; attribution/citation needed for any public use of images.
- Complements rather than replaces the Outlier sources (course provides specific model works + pedagogical framing).

## Next steps / open questions
- Interactive deep dive on specific characters/components (e.g., common ones from backbone or TOCFL) using the site + course PDFs/images.
- Curate shortlist of 3 masters per style with 1–2 signature works each, noting component insights.
- Evaluate integration: Schema fields for handwriting variants? Image sourcing/rights? How it feeds cribs (Grok research lane) vs. authoring.
- Cross-reference with other resources (e.g., museum digital collections, Björkstén full bibliography).
- Consider ASR on workshop videos for fuller transcripts of the demo.
- Update production line docs and tsumugu-ed if we decide to prioritize this layer.

Logged for continuity with 2026-06-16 entry and memory/tsumugu-production-line.md. All per writing standards (measured claims, pointers to artifacts, collaborative "we").

Related: Previous Outlier ingestion notes, PRD-Production-Pipeline.md (handwriting layer), tsumugu-ed schema discussions.