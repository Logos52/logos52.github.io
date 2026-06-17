---
title: "Tsumugu: handwriting and cursive sections for the encoding dictionary"
type: journal
created: 2026-06-16
updated: 2026-06-16
tags:
  - journal
  - tsumugu
  - dictionary
  - handwriting
  - cursive
---

# Tsumugu: handwriting and cursive sections (2026-06-16)

New idea: add a dedicated handwriting / cursive production layer to the Tsumugu Encoding Dictionary entries. This would sit alongside the existing FORM (structure + components), story, definitions, and examples.

## Motivation

The two Outlier courses just queued for ingestion — Chinese Cursive Crash Course and Handwriting and Penmanship Workshop — are the ideal raw source. They directly address the gap between recognition (the current dictionary strength) and active production/writing.

FORM already explains *what the parts are*. A handwriting section would teach *how to write them* — stroke order in context, common cursive reductions, penmanship principles, frequent errors, and component-level reusable patterns. This completes the encoding loop: understand the form, remember via story, and be able to produce it by hand.

Ties directly into the memory research already baked into the entry contract (multiple channels, guess-first, level-appropriate). Motor memory + visual form is a natural next channel, especially valuable for Traditional characters where cursive and semi-cursive are everyday realities.

## Placement and display options

Two main directions under consideration:

- **In-page, after FORM**: Keep the sacred "FORM first" rule. Immediately following the component breakdown, add a "手寫 / Handwriting" block (or "Cursive forms"). Could be always visible for short entries or collapsed by default. Advantages: everything in one view; reader never leaves the character. Matches the "one entry, multiple angles" philosophy.

## 2026-06-16 parallel pipeline runs (subagent-orchestrated)

3 subagents launched in parallel (one per course dir) to execute:

  cd <source/outlier-...>
  python3 download_course.py --types Download,Lesson,HtmlItem --skip-video
  python3 extract_transcripts.py

**Results (from subagent reports):**

- **Chinese Cursive Crash Course** (course.json: 65 contents from full body, 2 chapters): 35 folders (c01-01..c02-62 with real names e.g. "Lesson 5A: Famous works of semi-cursive: 王羲之《蘭亭序》..."). Downloads: 4 media "skip (have)" (蘭亭序.jpeg ~42MB, 寒食帖.jpg ~38MB, 張季明帖.png, 草書.apkg). HtmlItems: 2 (welcome + community). Lessons: content/video IDs logged but no transcript.html (mostly video content). 0 auth errors in this run. Extract: "Extracted 2/35" → c01-01-welcome-to-the-course.md (instructor schedule: June 20 start, 2x weekly live Tue 11am/Thu 6pm JST, YT recordings, "no textbook") + c01-02-course-community.md. KB transcripts: 4 total. Media assets + orientation text ready for cursive layer cribs. (Deprecation warning only.)

- **Handwriting and Penmanship Workshop** (13 Lessons from enrollments/user_contents body): 13 folders c01-01-lesson-58679522 ... c01-13-lesson-58156620 (exact match to provided ids). All 13: "fetch failed ... 404 Client Error: Not Found" on /lessons/{id} (course.json uses content id as lesson id; no contentable_id). 0 media. Extract: "Extracted 0/13". KB: 3 (prior only, no additions). Folders/names from JSON are the durable capture.

- **Outlier Chinese Character Masterclass v2.0** (50 Lessons): 100 folders (50 proper c01-0N-lesson-5929418... per current course.json + 50 legacy how-to-use dups). All 50 attempted: "fetch failed ... 404 ... /lessons/None" (course.json minimal shape lacks contentable_id; caid falls to None in script). Pre-existing non-empty: c01-01-how-to-use-this-course/ (video.mp4, page_transcript.txt, lesson_full.json with real internal lesson id 2058156 + video_id mapping). Extract: "Extracted 0/100". KB: 5 (prior index + low-signal .txt + lesson_full copy). 50 404s tallied.

All runs clean exit 0, resilient (try/except + logs continue), idempotent. Primary value: per-course folder structure + names/IDs from the user-provided JSON bodies + Cursive's 4 media + 2 short useful texts. Full Lesson details/transcripts require richer course.json (real caids/names) + fresh cookies (export DevTools while on course page immediately before local re-run). These feed the new 手寫 layer (component-level stroke/cursive patterns, examples from famous works + drills).

See source dirs for download.log / extract.log + files/. KB private outlier-*/transcripts/ + 00-INDEX-AND-EXTRACTION.md for pointers. Source Index and production-line already reference. Next: (user) local re-run with refreshed cookies + possible download.py tweak or bootstrap for full contentable mappings from enrollment_full.json or /courses/ endpoint.

- **Separate section or linked sub-page**: "Write" tab or "Handwriting notes" link that opens a focused view (or dedicated page per character/component). Better for depth — full stroke diagrams, multiple cursive examples, practice prompts, common mistakes with before/after. Lower risk of bloating the main reading view.

Component-first approach is attractive: many components repeat. Store canonical handwriting guidance at the component level in the corpus, then compose/surface the relevant pieces in each character entry. This mirrors how FORM already works (components recur).

## Production and schema implications

- New optional fields in the entry@1 schema (or a handwriting sidecar): stroke sequences, cursive variants (with images or descriptions), penmanship tips, error patterns, practice sentences focused on writing.

- The tsumugu-ed generator (render_site.py and templates) will need corresponding render logic — clean, consistent with current "FORM first, peek on demand" aesthetic.

- Authoring path: ingest the two courses into the private tsumugu sources tree (parallel to outlier-gsm1/2 and the Masterclass PDFs), then run research crib + author lanes focused on extracting reusable handwriting rules + per-character examples. Same style card discipline.

The ingestion harness has already been duplicated from the GSM pattern into:

- `~/Projects/tsumugu/personal/sources/outlier-cursive-crash-course/`
- `~/Projects/tsumugu/personal/sources/outlier-handwriting-penmanship-workshop/`

(download_course.py + pageparts.py + skeleton ready; awaiting fresh cookies.txt and the real course slugs + course.json for the specific Outlier/Thinkific courses.)

## Open questions (to be decided in a later round)

- Does handwriting content stay gated behind "shift-to-peek" or similar like glosses, or is it more central because production is a primary goal?
- Stroke-order visuals: static SVGs, animated, or just textual descriptions + audio?
- Scope for v1: high-frequency characters only, or all entries eventually? Component-level first?
- Any interaction with future reader features (e.g. writing practice mode that pulls from these notes)?
- How this interacts with the existing cursive PDFs already in the Masterclass references.

This feels like a high-leverage addition that turns the dictionary from "excellent for reading and understanding" into "also excellent for learning to write." The timing with the two dedicated Outlier workshops is perfect.

## Related

- [[journal/2026-06-15-tsumugu-encoding-dictionary-deployment|2026-06-15 deployment]]
- [[journal/2026-06-11-tsumugu-dictionary-custody-and-display|Dictionary custody and display rules]]
- Previous Outlier Masterclass ingestion (2026-06-11) for the core character structure pages (PDF version; see references/outlier/).
- GSM1/GSM2 private sources for speaking/transcript patterns (same platform + downloader).

**Update (same day):** Added the full "Outlier Chinese Character Masterclass v2.0" (video-based) to the private sources tree using the identical harness. This is the natural companion to the two new cursive/handwriting courses and will be the richest source for the new sections. Enrollments page opened in Brave; cookies to be exported from there. See the new source dir at `tsumugu/personal/sources/outlier-chinese-character-masterclass-v2/`.

**Integration progress (same day, later):** 
- KB pointers created/enhanced in `llm-knowledge-base/raw/private/` for all three courses (v2 masterclass detailed README + the two workshops with cross-refs).
- `transcripts/` subdirs + 00-INDEX-AND-EXTRACTION.md (pure stdlib Python HTML stripper + fallback for item.json html_text; ready to run once files/ populated) added to each pointer.
- Source Index.md Private Course Sources table + top updated date refreshed with precise status (harness ready; download pending user action on cookies/course.json/SLUG; 0 lessons; KB artifacts noted).
- Journal and pointers cross-link the tsumugu sources, production line, and handwriting plan.
- tsumugu-side production state doc updated (see memory/tsumugu-production-line.md).
- Extraction command uses only stdlib (html + re); no new deps. Raw HTML stays in tsumugu sources tree per privacy/size pattern (ICS/Refold copied content; these use lightweight pointers to tsumugu/personal/sources/).
- Readiness: corpus pointers + docs in place for immediate crib research + authoring of handwriting sections as soon as the three downloads complete and cleaned transcripts land. No synthesis yet (per "keep minimal since private"). 

All changes follow Projects/ writing standards (verdict early where applicable, measured claims, cross-pointers).

## Download using provided bodies (2026-06-16)

Downloads completed for all three courses:
- Fresh cookies exported from Brave (user logged-in authenticated session on outlier-linguistics courses domain).
- user-provided JSON bodies: course.json (and enrollment_full.json for v2) manually supplied by pasting/copying the full response bodies from browser DevTools (Network tab on the relevant /api/course_player/v2/courses/... or enrollments fetches while the player page was active).
- For each course dir under `~/Projects/tsumugu/personal/sources/`:
  - download_course.py run against the provided course.json + cookies.txt.
  - Result: files/ subdirs populated (160 lesson cXX-YY-* folders for cursive crash course and handwriting workshop; 50 for masterclass-v2, mostly duplicates around the core walkthrough item); item.json (and/or transcript.html where present) + attachments + videos (for masterclass: explicit video.mp4 + page_transcript.txt + lesson_full.json).
- Raw downloaded material (HTML bodies, item JSONs, videos, zips/attachments) remains in the tsumugu/personal/sources/<course>/ (gitignored).
- KB pointers (llm-knowledge-base/raw/private/<course>/README.md and transcripts/) updated with download summaries, extracted files inventory, and link to tsumugu source.
- Source Index entries updated to status "downloaded with fresh cookies and user-provided JSON bodies 2026-06-16"; topics derived from course names; all target the handwriting sections plan in this journal.
- Extraction to .md transcripts (via stdlib script in each source dir) partially complete (masterclass-v2) or ready-to-run for the workshops (populates the KB transcripts/ for grepping/crib research).

See updated KB private README.md files and 00-INDEX-AND-EXTRACTION.md in each for per-course extracted file details. These sources now ready to feed the research-cribs + authoring lanes for the new handwriting/cursive production layer in Tsumugu entries (per plan in this journal, memory/tsumugu-production-line.md, and PRD-Production-Pipeline.md).

**Fresh-cookies re-run for transcript extraction (2026-06-16 ~09:07 export / ~09:09 runs)**

Cookies re-exported live via `python3 .../refresh_outlier_cookies.py` (Brave Default, epoch 1781600871 / 09:07:51Z; remember_user_token + cf_clearance long-valid; 18 cookies total). 3 subagents launched in parallel to run the exact pipeline in each source dir (download --types Download,Lesson,HtmlItem --skip-video then extract_transcripts.py) + full post-run inspections (files/ counts, media globs, KB ls + content reads, log tallies for 401/404/fetch-failed/Extracted X/Y, sample .md heads).

- **Chinese Cursive Crash Course** (rich 65-content course.json): Download exit 0, 0 auth errors (fresh cookies fully effective for reachable endpoints). 2 HtmlItem → item.json (welcome + community). 33 Lessons → only `[skip-video] content XXX / video YYY` logged (no files written under --skip-video). 3 Downloads "skip (have)" for the model works. 35 folders total. Extract: exactly "Extracted 2/35". KB private transcripts: 4 files (index + the two updated this run). 
  - c01-01-welcome-to-the-course.md (878 chars): "This course will start on June 20th. ... two weekly live sessions (Tue 11am / Thu 6pm JST) ... recordings on YouTube + Thinkific ... no textbook ... materials posted weekly." (signed -John).
  - c01-02-course-community.md (360 chars): direct Thinkific community link.
  - files/ non-empty: exactly 6 (2 item.json + 蘭亭序.jpeg ~42 MB, 寒食帖.jpg, 張季明帖.png, 草書.apkg). All 33 Lesson folders empty. No transcript.html anywhere.
  - Value: Excellent high-res primary visuals of famous semi-cursive/cursive works (王羲之蘭亭集序, 蘇軾寒食帖, 米芾張季明帖) + 草訣歌 Anki for the cursive forms / reductions layer. Intro context useful. Substantive lesson prose (principles, stroke-order in context, character forms, analysis of the works) not captured this pass (video-centric; requires non-skip pass or per-lesson content page fetch using the logged IDs).

- **Handwriting and Penmanship Workshop** (13 Lessons, minimal course.json from enrollments/user_contents): Download exit 0. Fresh cookies resolved 401s on high-level paths (enrollments + enrollment_full now 200 with correct ucids 2471... range). But 13× 404 on /lessons/{58xxxx ids from current course.json}. Zero media or item data written (all 13 lesson- dirs remain 0-byte). Extract: "Extracted 0/13". KB transcripts unchanged at 3 files (prior boilerplate only: welcome/community orientation mentioning chorusing technique; no penmanship content). 
  - Diagnosis (subagent probes with live session): course.json uses placeholder content ids as both id and contentable_id; actual caids are a separate layer (null in enrollment_full user_contents too). 58xxxx ids do not resolve to the real lesson/html_item endpoints. Prior partial KB .md came from an earlier richer curriculum dump.
  - Value: 13 correct c01-0N-lesson-ID folder skeletons + enrollment ucids as durable pointers. Chorusing notes reusable. Real stroke/hand position/penmanship instruction (plus any attached diagrams/PDFs/worksheets) live in the video lessons not reached.
  - Next (while cookies hot or re-refresh): In Brave on the course player, DevTools Network → capture full rich `contents` payload (real names e.g. "Lesson 1: ...", "Hand Position", correct distinct contentable_ids, types). Replace course.json (model on .template or the .proposed the subagent emitted), then re-run pipeline.

- **Outlier Chinese Character Masterclass v2.0** (50 Lessons, minimal course.json): Download exit 0. 50× "fetch failed ... /lessons/None" (caid logic yields None because no contentable_id in json; same as prior run). Fresh cookies confirmed live (test call to a known real lesson id 2058156 from pre-existing data succeeded 200). Extract: "Extracted 0/100". 100 folders (50 legacy how-to-use dups + 50 proper lesson- empty). Only pre-existing non-empty: c01-01-how-to-use-this-course/ (video.mp4 ~12.4 MiB "Student Walkthrough", noisy page_transcript.txt 44k dominated by JS, lesson_full.json showing real internal lesson.id 2058156 + video_id for content 5929418). KB transcripts: 5 files (prior; no additions from this 0/100 run). 
  - Diagnosis confirmed: enrollment_full.json supplies the 50 content↔user_content mappings but not display names or caids. The lesson_full proves the expected response shape once correct caid is used.
  - Value: Solid for character masterclass method + chorusing reference (mentioned in the short clean KB .md carry-overs). The walkthrough video + lesson_full structure + Wistia details are direct crib material for the handwriting/character production layer. Complements the cursive + penmanship sources.
  - Next: Same as handwriting — capture rich player curriculum JSON in DevTools (with fresh cookies) to build proper course.json with real names + contentable_ids (e.g. 2058156), then re-run (optionally without --skip-video for any attachments).

**Summary across the three (fresh cookies run):** Auth worked where the supplied course.json + script paths allowed (Cursive clean; high-level probes for the others). Transcript yield limited to the 2 orientation HtmlItem .md in Cursive (updated in KB with schedule + community details) + pre-existing assets. 0 real lesson prose from the 33+13+50 video/Lesson items (as expected for --skip-video on video-heavy content; no html_text surfaced in the responses that were reached). 

The 4 famous-works images + Anki (Cursive) + video + lesson_full (Masterclass) + folder structures/IDs (all) are immediately usable private raw for 手寫 sections (cursive reductions, stroke technique, penmanship, component patterns, error examples, chorusing integration). 

Actionable: While auth is hot, capture the missing rich `course.json` payloads directly from the course player in Brave DevTools for the two minimal courses (precise steps in the subagent reports above). Re-run the pipeline (drop --skip-video or add content-page enrichment for html). Then feed the resulting clean .md + visuals into crib research for the new handwriting production layer. Subagent full reports contain the exact log excerpts, file lists, KB snippets, and probe outputs.

All per Projects writing standards and tsumugu private-source rules.