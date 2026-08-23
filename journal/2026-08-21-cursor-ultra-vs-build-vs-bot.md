---
title: "Cursor Ultra vs Grok Build vs Grok Bot"
type: journal
status: current
created: 2026-08-21
updated: 2026-08-21
tags:
  - grok
  - cursor
  - routing
---

# Cursor Ultra vs Grok Build vs Grok Bot

You have three unused-or-underused seats on one Heavy bill. Cursor Ultra is at 0%. Grok Build is at 21%. Grok Bot comes with Ultra and you are not using it. They do not share a token bucket. The wiki and the codebases already have a split: Grok Build and Claude Code do the vault and batch authoring; nothing is using the IDE seat.

Put Cursor on the TypeScript/Swift/HTML products. Keep Grok Build on the vault, research, and batch pipelines. Use Grok Bot for work that should keep going when you are not at the TUI.

## What you actually run

| Project | What it is | Shape | Who should own it |
|---|---|---|---|
| **llm-knowledge-base** | Karpathy wiki + Astro site + regen + journal | 355 wiki pages, 887 raw notes, 124 journal files, research banks | **Grok Build** (and Claude Code). Not Cursor as the writer. |
| **tsumugu-core** | Offline reader, voice, blog, workers | ~2000 app files, TS/Vite, lots of audio | **Cursor Ultra** for code. Build for content/docs. |
| **tsumugu-ed** | Dictionary: 9,663 entries, example-sentence factory | 10k+ JSON, Python/TS work orders, audio still thin | **Build** for authoring loops. **Cursor** for the site/frontend PRDs. |
| **tsumugu-wiki** | Generated language wiki | Huge compiled tree | Same as the vault: Build/Claude, not Cursor-as-author. |
| **tan** | iOS audio notebook. PRD unsigned except yuedu. Swift v0 skeleton | `app/Tan.xcodeproj`, library pipeline not started | **Cursor** for the Swift app. **Build** for Mac-side TTS/library scripts. |
| **wnac** | Finance dashboard, P1 live | Python → `dashboard.html` | **Cursor** if you restyle or extend the dashboard. **Build** for `analyze.py` / insight prompts. |
| **cos** | Personal OS, HTML dashboard, TUI retired | Deprioritized | Leave it. Bot only if you revive daily refresh. |
| **wnab** | Actual Budget fork, retired | Archive | Do not open in Cursor “to use Ultra.” |
| **kind-travel-mockups** | Small HTML | Side | Cursor if you touch it. |

The wiki already follows Karpathy: `raw/` immutable, `wiki/` compiled, schema in `AGENTS.md`. Cursor does not make that better. It makes **seeing and changing application code** better.

## What each product is

**Grok Build** (this TUI, 21%). Agent in the terminal. Files, git, subagents, workflows, X search, the study lane, `open` to Obsidian. Already how tsumugu batch work and the knowledge base get done. Best when the job is “read many markdown files, write markdown or JSON, run a script.”

**Cursor Ultra** (0%). An IDE with Composer and Grok 4.6 (and other models) on a **separate** meter. Diffs, multi-file TS/Swift, jumping a 2000-file app, UI you can click. Same model family as Build, different harness and different policy (Cursor’s Grok is tighter on cyber-ish tasks; Build is the looser coding agent).

**Grok Bot**. Desktop/mobile agent that keeps working when the TUI is closed. Knowledge-work coworker, not a wiki maintainer. Included with Ultra. Do not give it write access to `wiki/` without the schema and your eye.

## Routing

| Job | Where |
|---|---|
| Wiki ingest, regen, journal, research banks, lint, writing-standards work | **Grok Build** |
| Tomorrow’s skills / intro study lane | **Grok Build** (two windows) |
| tsumugu-core reader, Vite, tests, worker, UI | **Cursor Ultra** |
| tan SwiftUI app, Xcode project, iOS build errors | **Cursor Ultra** |
| tsumugu-ed example-sentence *authoring* (7,001 words still ~0%) | **Grok Build** (batch, already the production line) |
| tsumugu-ed / tsumugu-core *frontend* bugs, layout, CSS | **Cursor Ultra** |
| tan library generation, TTS, `manifest.json` on the Mac | **Grok Build** |
| wnac `dashboard.html` restyle, JS tabs | **Cursor Ultra** |
| wnac categorization / `brain.py` prompt work | **Grok Build** |
| Overnight “keep researching X / draft a brief I’ll file tomorrow” | **Grok Bot** |
| Daily tan yuedu source hunt (X, news) while you are not at the desk | **Grok Bot** → files in a drop folder; **Build** compiles into the vault/library |
| Anything that must match Writing Standards or report intros | **Grok Build**, after the how-i-write skill exists |
| Multi-model compare inside one editor (Composer vs Grok 4.6) | **Cursor Ultra** |
| Click around a giant TS repo and ask “why is this red” | **Cursor Ultra** |

Hard no for Cursor: do not make it the wiki’s author. You already decided the model does not own the prose. Cursor’s 0% should go to tsumugu-core and tan, where an IDE is the point.

Hard no for Bot: do not let it ingest into `wiki/` unattended. Drop into `raw/inbox/` or a tan staging folder. Compile on Build, with you looking.

## First uses of the 0% (so Ultra is not wasted)

Do these in Cursor, Grok 4.6, Ultra meter:

1. Open `/Users/n1/Projects/tsumugu-core`. Run the app’s typecheck/tests. Pick one real UI bug or the next reader feature. Stay in the editor for a week of that repo.
2. Open `/Users/n1/Projects/tan/app`. Get `Tan.xcodeproj` building. Cursor for Swift; do not move the unsigned PRD into “the model decided.”
3. If the dictionary site still has the frontend repair PRD, do that in Cursor against whatever repo serves the public site — not by regenerating 10k JSON.

Leave Grok Build on: vault, tsumugu-ed authoring, tan *content* pipeline, this study lane.

Leave Grok Bot for one experiment: a drop-folder brief (X + news → a markdown file in `raw/inbox/` or tan `library/` staging). You file it. Build does not have to be open.

## How this fits the study lane

Stage 2 skills stay on **Build**. `/how-i-write` and report intros are for this TUI and Claude Code, not for Cursor Composer.

If Cursor needs a voice, that is a Cursor rule (`.cursor/rules`) copied from the same journal notes — a second copy of the law, not a second skill ecosystem. Rule that in Stage 2 if you want one file in both harnesses.

## What not to do

- Do not “use Ultra” by opening random markdown so Cursor is the default `.md` app. That is not leverage; that is Launch Services.
- Do not run the 7,001-word example-sentence factory inside Cursor. It is a batch authoring line. Build already does that.
- Do not buy a fourth coding agent. You have Build, Ultra, and Claude Code. Bot is the away-from-desk slot.
