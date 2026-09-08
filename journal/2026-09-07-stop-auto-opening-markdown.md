---
title: "Stop auto-opening markdown"
type: journal
status: settled
created: 2026-09-07
updated: 2026-09-07
description: "Claude and Grok must not macOS-open .md files. Full /Users/n1/... paths stay in replies. HTML, images, PDF, and audio still open. JSON still does not."
tags:
  - journal
  - grok
  - claude
  - agents
---

# Stop auto-opening markdown

Wedge ruled on 7 September 2026: Claude and Grok stop auto-opening `.md` files. No other AI subscription is in this instruction.

What was being decided: whether agents keep running macOS `open` on every markdown file they mention, against writing the path and leaving markdown closed.

Claude Desktop had become macOS's default app for markdown. Agents then ran `open` on every `.md` they named, which launched Claude Desktop. Wedge said he does not actually read those markdown files much.

The 7 August 2026 OPEN + FULL PATH rule required both an `open` and a full `/Users/n1/...` path. A 23 August memory said stop opening and stop giving paths. `/Users/n1/.claude/CLAUDE.md` and `/Users/n1/.claude/settings.json` were never changed, so agents kept opening. Chat reminders lost to a UserPromptSubmit hook in `/Users/n1/.claude/settings.json`, which injected the 7 August wording on every Claude prompt.

Leaving `/Users/n1/.claude/CLAUDE.md` and `/Users/n1/.claude/settings.json` alone, and telling each agent in chat, is the option not taken. That is what 23 August already did. Chat reminders failed because the UserPromptSubmit hook and `/Users/n1/.claude/CLAUDE.md` still ordered `open`. Flip back to chat-only if that hook is gone and Wedge wants markdown opened again for a specific job.

Cost: a markdown file an agent writes will not appear on screen unless Wedge opens the path himself, or asks. Finder double-click still launches Claude.app until Claude.app is unpinned as the markdown default.

Written into `/Users/n1/.claude/CLAUDE.md`, `/Users/n1/.claude/settings.json`, `/Users/n1/.grok/AGENTS.md`, and `/Users/n1/.grok/rules/00-shared-core.md`. HTML pages, images, PDF, and audio still get `open`. JSON and config still do not. Full paths stay in replies.
