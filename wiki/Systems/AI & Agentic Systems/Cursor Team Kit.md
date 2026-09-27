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

Cursor Team Kit is a plugin for the Cursor code editor, published by Cursor. A plugin is a package of saved procedures, called skills, each run by name in chat, and this kit's skills cover the chores that follow a code change: watching a repository's automated checks, cleaning a branch, opening a pull request, and proving a screen change in a real browser. On this desk it matters because it holds the skill that proves a screen change, and the rule here is that no screen work counts as done without a picture taken in the app after the change.

## Core takeaways

- Install it inside Cursor with `/add-plugin cursor-team-kit`. Version 1.2.0, MIT licence, author on the plugin file Eric Zakariasson.
- It needs nothing beyond a repository, GitHub and a local browser. No outside service is wired in.
- `control-ui` is the skill that proves a screen change. It starts the app, drives it in a local browser, and keeps a picture from before and after each action.
- `deslop` removes habits typical of model-written code from a branch and leaves what the code does unchanged.
- pstack, a second Cursor plugin, tells its users to run `/deslop`, `control-cli` and `control-ui`. pstack ships none of these, so its guide says to install this kit beside it.

## What is in it

- Skills, grouped by chore:
  - Checks: `loop-on-ci` watches the repository's automated checks and retries on failure until they pass; `fix-ci` reads a failing check's log and applies a fix; `check-compiler-errors` runs the compile and type-check commands and reports failures.
  - Pull requests: `new-branch-and-pr`, `review-and-ship`, `make-pr-easy-to-review`, `get-pr-comments`, `fix-merge-conflicts`, and `pr-review-canvas`, which writes an HTML walkthrough of the change.
  - Proof: `verify-this` takes a before artifact and an after artifact, such as two screenshots or two measurements, and gives a verdict on a claim. `control-cli` builds a harness for a terminal program; a harness is a small script that starts the program, drives it and records what it shows. `control-ui` builds the same for an app in a browser, or for a desktop app built with Electron, which wraps a browser as a desktop program. `run-smoke-tests` runs the repository's Playwright tests, Playwright being a library that drives a browser from a script, and sorts the failures.
  - Cleanup and habits: `deslop`; `workflow-from-chats` turns a preference stated in chat into a skill, a rule or a doc; `thermo-nuclear-code-quality-review` is an unusually strict maintainability review.
  - Status: `what-did-i-get-done` and `weekly-review` turn a person's own commits over a period into a status update.
- Subagents: `ci-watcher` watches GitHub Actions runs and returns a short pass or fail summary; a second subagent runs the strict quality review against a diff.
- Rules, both for TypeScript: a switch over a union or enum handles every case, and imports stay at the top of the file.

## How control-ui works

- Start the app with the dev command the repository documents.
- Look for a browser-driving setup the repository already has and reuse it: Playwright tests, Cypress tests (Cypress is another browser-driving library), Storybook (a page that renders each screen component on its own), or a script that launches the Electron app.
- Without one, build a temporary harness. For a web app, connect to the local address the dev server prints. For an Electron app, turn on its remote debugging port, a port the app opens so a script can control the browser inside it. Playwright is not added to the repository's dependencies for a single probe unless asked.
- Pick the page by a marker in the app itself, such as its title or an element known to be on it.
- Pick elements by their accessibility role, their label, or a `data-*` attribute the repository already uses.
- Then a loop: take a picture, do exactly one action (click, type, keypress, drag, scroll, navigate or resize), take a fresh picture, check that the screen changed as expected. With one action between pictures, a change seen in the second picture traces to that action.
- Save the before and after pictures when proof was asked for. `verify-this` reads them.
- Use the raw browser protocol (the Chrome DevTools Protocol, the channel a debugger uses) only when ordinary browser commands cannot do it: CPU profile, heap snapshot, network throttling, colour scheme emulation, console capture.
- Guardrails: no reuse of an element reference after a move to another page; no click by coordinates without a fresh picture; test data stays local and disposable; no screenshots or heap snapshots from a workspace holding private data without agreement from whoever owns the workspace; no selector copied from another repository.
- At the end, close dev servers, debug sessions and temporary browser profiles.

## How deslop works

- Diff the branch against main.
- Remove what a person on the team would not have written: comments the file does not otherwise use, try/catch blocks or guard checks on paths the code already trusts, casts to `any` that only silence the type checker, deep nesting an early return would flatten, anything else out of step with the file.
- The edit fixes a clear bug it meets and changes nothing else about what the code does. Edits stay small. The summary is one to three sentences.

## With pstack

- pstack is a second Cursor plugin, by Lauren Tan. Its rule: a change counts as checked only after the running app was driven and looked at. A claim in chat does not count.
- Its entry skill is `poteto-mode`. It takes a goal, picks a playbook, and calls other skills as the steps need them. Those steps call `/deslop`, `control-cli` and `control-ui`, which pstack does not bundle.
- Both plugins are folders in the same `cursor/plugins` repository on GitHub.
- pstack's `create-verification-skill` writes a `verify-<app>` skill for one repository: a file per user-facing feature, and one feature proved by launching the app, driving it, capturing evidence and cleaning up. `control-ui` is the general browser harness such a skill drives for a web app.
- At Grok Bot Galaxy, a three-day SpaceXAI livestream on 15 to 17 September 2026, a play-test bot ran a preview deployment of the change once the checks were green and before merge. That is the check a verification skill and `control-ui` do.

## On this desk

- pstack is not installed. The rule in use: no screen work is called done without a picture from the running app.
- During the livestream, Cursor Cloud Agents, Cursor's agents that run on a hosted machine and open pull requests, ran on the repository of the owner's public notes site, which publishes this wiki. One run added a `verify-logos52` verification skill and set a routine that runs pstack's `maintain-verification-skill` each weekday morning at 08:15, to re-check the skill's feature list against the site. It stands as a draft pull request with green checks, unmerged as of 18 September 2026.
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
