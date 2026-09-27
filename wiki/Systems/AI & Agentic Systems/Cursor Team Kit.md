---
title: "Cursor Team Kit"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-27
description: "A Cursor plugin of saved procedures for CI, pull requests and proving a screen change in a local browser, and how it pairs with pstack."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - cursor
  - agents
  - skills
  - agentic-engineering
---

# Cursor Team Kit

# Cursor Team Kit

Cursor Team Kit is a plugin for the Cursor code editor, published by Cursor, and a plugin is a package of saved procedures, called skills, each run by name in chat. This kit's skills cover the chores after a code change: watching a repository's automated checks, cleaning a branch, opening a pull request, and proving a screen change in a real browser. On this desk no screen work counts as done without a picture taken in the app after the change, and this kit holds the skill that takes that picture.

## Core takeaways

- Install inside Cursor with `/add-plugin cursor-team-kit`.
- Version 1.2.0, MIT licence, listed author Eric Zakariasson.
- It needs only a repository, GitHub and a local browser.
- `control-ui` drives the app in a browser and keeps before and after pictures.
- `deslop` strips model-written habits from a branch without changing behaviour.
- pstack, another Cursor plugin, calls these skills from this kit.

## What is in it

Most of the kit is skills, grouped here by the chore they handle. A harness, which several skills build, is a small script that starts a program, drives it and records what it shows. The kit also has two subagents, helpers that run a narrow job and report back, and two TypeScript rules.

- Checks: skills that watch the automated checks and fix failures.
  - `loop-on-ci` retries until the automated checks pass.
  - `fix-ci` reads a failing check's log and applies a fix.
  - `check-compiler-errors` runs compile and type checks and reports.
- Pull requests: skills that open, tidy and review a pull request.
  - `new-branch-and-pr`, `review-and-ship`, `make-pr-easy-to-review`.
  - `get-pr-comments`, `fix-merge-conflicts`.
  - `pr-review-canvas` writes an HTML walkthrough of the change.
- Proof: skills that drive the app and judge a before and after.
  - `verify-this` judges a claim from a before and an after artifact.
  - `control-cli` builds a harness for a terminal program.
  - `control-ui` builds one for a browser app or an Electron desktop app.
  - `run-smoke-tests` runs Playwright browser tests and sorts failures.
- Cleanup and habits: skills that tidy code and save your preferences.
  - `deslop` cleans a branch.
  - `workflow-from-chats` turns a stated preference into a skill, rule or doc.
  - `thermo-nuclear-code-quality-review` is a very strict review.
- Status: `what-did-i-get-done` and `weekly-review` summarise your commits.
- Subagents: `ci-watcher` summarises GitHub Actions runs.
  - A second subagent runs the strict review.
- TypeScript rules: switches cover every case, and imports stay at the top.

## How control-ui works

The skill starts the app with the repository's own dev command and looks for a browser-driving setup the repository already has, such as Playwright or Cypress tests, Storybook, or an Electron launch script. Without one it builds a temporary harness that connects to the dev server's local address, or to an Electron app's remote debugging port. Then it runs a loop: take a picture, do exactly one action, take a fresh picture, and check the screen changed as expected. With one action between pictures, any change traces to that action.

- Pick the page by a marker in the app, such as its title.
- Pick elements by role, label or an existing `data-*` attribute.
- One action: click, type, keypress, drag, scroll, navigate or resize.
- Save before and after pictures when proof is asked for.
- Use the debugger's channel, Chrome DevTools Protocol, only for profiling and similar.
- No Playwright added to dependencies for one probe unless asked.
- No element reference reused after moving to another page.
- No click by coordinates without a fresh picture.
- Test data stays local and disposable.
- No screenshots of a private workspace without its owner's agreement.
- Close dev servers, debug sessions and temporary profiles at the end.

## How deslop works

The skill diffs the branch against main and removes what a person on the team would not have written. It fixes a clear bug if it meets one and changes nothing else about what the code does. Edits stay small, and the summary is one to three sentences. The things it removes are listed below.

- Comments out of keeping with the file.
- try/catch blocks and guards on paths the code already trusts.
- Casts to `any` that only silence the type checker.
- Deep nesting an early return would flatten.

## With pstack

pstack is a second Cursor plugin, by Lauren Tan, and both are folders in the same `cursor/plugins` repository on GitHub. Its rule is that a change counts as checked only after the running app was driven and looked at. Its entry skill, `poteto-mode`, takes a goal, picks a playbook and calls `/deslop`, `control-cli` and `control-ui`, which pstack does not bundle, so its guide says to install this kit beside it.

- `create-verification-skill` writes a `verify-<app>` skill for one repository.
  - One file per user-facing feature, and one feature proved end to end.
  - `control-ui` is the browser harness it drives for a web app.

At Grok Bot Galaxy, SpaceXAI's livestream of 15 to 17 September 2026, a play-test bot ran each preview once checks were green, before merge.

## On this desk

pstack is not installed here, and the rule in use is that no screen work is done without a picture from the running app. During the livestream, Cursor Cloud Agents, which run on a hosted machine and open pull requests, worked on the repository of the owner's public notes site. One run added a `verify-logos52` skill and a weekday 08:15 routine that re-checks its feature list against the site.

- That change is a draft pull request with green checks.
- Unmerged as of 18 September 2026.
- No bot merges code, and the owner merges every pull request.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]

## Sources

- [cursor-team-kit README](https://github.com/cursor/plugins/blob/main/cursor-team-kit/README.md), read 2026-09-22. Author on the plugin file: Eric Zakariasson. Version 1.2.0.
- [control-ui](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/control-ui/SKILL.md)
- [deslop](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/deslop/SKILL.md)
- pstack README, section "not shipped here": `/deslop`, `control-cli`, and `control-ui` are in this kit. https://github.com/cursor/plugins/tree/main/pstack
