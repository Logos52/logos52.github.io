---
title: "Cursor Team Kit"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-24
description: "A Cursor plugin of saved procedures for CI, pull requests and proving a screen change in a local browser, and how it pairs with pstack."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - cursor
  - agents
  - skills
  - agentic-engineering
---

# Cursor Team Kit

Cursor Team Kit is a plugin published by Cursor for its own code editor. It adds saved procedures for four chores that follow a code change: watching a repository's automated checks, cleaning a branch, opening a pull request, and proving a screen change in a real browser. Anyone who uses pstack needs it, because three procedures pstack's guide calls for are shipped only here.

## Core takeaways

- Install it inside Cursor with `/add-plugin cursor-team-kit`. Version 1.2.0, MIT licence, author on the plugin file Eric Zakariasson.
- It needs no outside service beyond a repository, GitHub and a local browser.
- `/deslop`, `control-cli` and `control-ui` are named by pstack but ship in this kit, so the two plugins are installed together.
- `control-ui` makes a screen change checkable: it drives an app in a local browser and keeps a picture from before and after each action.
- `deslop` strips habits typical of model-written code from the branch without changing what the code does.
- Every skill in the kit stops at an open pull request, and none merges.

## What is in it

- Skills (a skill is a saved way of doing a task, run by name in chat):
  - Checks: `loop-on-ci` watches the run and retries until it passes; `fix-ci` reads a failing job's log and applies a fix; `check-compiler-errors` runs the compile and type checks.
  - Pull requests: `new-branch-and-pr`, `review-and-ship`, `make-pr-easy-to-review`, `get-pr-comments`, `fix-merge-conflicts`, and `pr-review-canvas`, which writes an HTML walkthrough of the change.
  - Proof: `verify-this` compares a before artifact with an after artifact and gives a verdict; `control-cli` builds a local harness for a command-line or terminal app; `control-ui` builds one for a web or Electron app; `run-smoke-tests` runs the Playwright tests and sorts what failed.
  - Cleanup and habits: `deslop`; `workflow-from-chats` turns a preference stated in chat into a skill or a doc; `thermo-nuclear-code-quality-review` is a strict maintainability review.
  - Status: `what-did-i-get-done` and `weekly-review` turn authored commits into a status update.
- Subagents: `ci-watcher` for GitHub Actions runs, and the code quality reviewer.
- Rules: two TypeScript rules, exhaustive switch on unions and enums, and no inline imports.

## How control-ui works

- Start the app with the repo's own dev command.
- Reuse the repo's Playwright, Cypress, Storybook or Electron scripts if they exist. Without them, build a throwaway harness on the dev server address or on a Chromium debug port. Playwright is not added as a dependency for one probe.
- Pick the page by a stable marker in the app, not by tab order. Pick elements by role, label or a data attribute, not by screen coordinates.
- Then a loop: picture, one action, picture, check for a change. One action per turn, so each picture answers one question.
- Raw browser protocol only when ordinary browser commands cannot do it: CPU profile, heap snapshot, network throttling, colour scheme, console capture.
- At the end, close dev servers, debug sessions and temporary profiles. Screenshots from a workspace with private data are not kept unless whoever owns them agrees.

```
start app -> find harness -> pick page
                                |
     +--------------------------+
     v
  picture -> one action -> picture -> did it change?
     ^                                    |
     +--------- next action <-------------+
```

## How deslop works

- Diff the branch against main.
- Remove what a person on the team would not have written: comments the file's style does not use, try/catch or guard checks on trusted paths, casts to `any` that only silence the type checker, deep nesting an early return would flatten, anything else out of step with the surrounding code.
- Behaviour stays unchanged unless a clear bug is in the way. Small edits, a summary of one to three sentences.

## With pstack

- pstack is a Cursor plugin by Lauren Tan built on one rule: proof comes from the running app, never from a claim. Its `poteto-mode` calls `/deslop`, `control-cli` and `control-ui` but bundles none of them. Both plugins sit as folders in the same `cursor/plugins` repository on GitHub.
- pstack's `create-verification-skill` writes a `verify-<app>` skill for one repo, with a file per user-facing feature and one proved run. `control-ui` is the general harness that skill drives for any web app.
- At Grok Bot Galaxy, a three-day SpaceXAI livestream in September 2026, a play-test bot ran a preview deployment once the checks were green and before merge. That check is the job of a verification skill and of `control-ui`.

## On this desk

- pstack is not installed. The rule is: no UI work is called done without a picture from the running app.
- A Cursor Cloud Agent run on the site repo produced a `verify-logos52` verification skill with a weekday 08:15 maintain routine, as a draft pull request, unmerged as of 18 September 2026.
- No bot merges code. The owner merges every pull request.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]

## Sources

- [cursor-team-kit README](https://github.com/cursor/plugins/blob/main/cursor-team-kit/README.md), read 2026-09-22. Author on the plugin file: Eric Zakariasson. Version 1.2.0.
- [control-ui](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/control-ui/SKILL.md)
- [deslop](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/deslop/SKILL.md)
- pstack README, section "not shipped here": `/deslop`, `control-cli`, and `control-ui` are in this kit. https://github.com/cursor/plugins/tree/main/pstack
