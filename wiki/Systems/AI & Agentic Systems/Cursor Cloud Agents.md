---
title: "Cursor Cloud Agents"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-17
description: "Cursor Agent mode needs you at the keyboard. Grok Bot's computer is shared and is not this desk's writer of diffs. Overnight application code still has to land as a pull request. Cursor Cloud Agents are isolated VMs that clone, test, and open that pull request. This desk uses them for a fully specified task on a non-wiki repo, and the owner merges."
tags:
  - cursor
  - agents
  - agentic-engineering
  - grok-bot
---

# Cursor Cloud Agents

Cursor Agent mode runs in the editor. You are at the keyboard. Close the laptop and that run is the wrong shape. Grok Bot keeps a cloud desktop that survives the closed lid, but every helper on the account shares that desktop, and this desk does not let it write diffs into a repo. Overnight application code still has to land as a pull request while you sleep.

Cursor Cloud Agents are isolated virtual machines Cursor operates. Each run clones the repo from git, can install dependencies, edit, test, drive a browser or a desktop, and usually opens a pull request with screenshots, a video, or logs. You start one from the editor, cursor.com/agents, the iOS app, Slack, a GitHub or Bitbucket comment, Linear, or the API. Local uncommitted files do not go with the run unless you commit or stash first. The old name was Background Agents. Agent mode in the editor is a different product with a similar first name. Depth on names is [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]].

This desk should use a Cloud Agent for overnight or parallel coding on a fully specified task, on a non-wiki repo, with you merging. This desk should not use it for wiki prose, for a task that still needs what is on your screen, or as a second writer on a tree someone is already editing. A Grok Bot may start one as a coordinator. The ban on calling a UI job done without a picture still applies; that ban is [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]. The dated roster is [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]].

## Core takeaways

- Use a Cloud Agent when the task can be written down completely and the laptop can close. Use Cursor Agent mode when you still need the thing on the screen. Use Grok Bot when the duty is standing watch on public material, not a diff.
- Each run is its own VM: clone, install, test, artifacts, pull request. That isolation is why two Cloud Agents can work in parallel without the 12 June failure of two writers on one local tree.
- The run starts from clean git on the remote. Commit or stash first. Source control has to be connected on the Cursor account before anyone can start a run from a repository.
- A Grok Bot that starts a Cloud Agent is a coordinator. It does not merge. It does not write `wiki/`.
- Screenshots and video on the pull request are the proof. Passing tests without a picture of a visual change is not done.
- Cloud Agents are charged at the selected model's API rates, with a spend limit you set on first use. This desk starts them only from the Cursor subscription already on the account, never by opening a metered platform key. If a run would sit outside that subscription, skip it.

## Whether this desk should

Use a Cloud Agent on tsumugu-core, tan, or another application repo when the change is specified, the handoff is a pull request, and you will not sit in the files until morning. Skip it for the notes site. Skip it when the next click still depends on what you see. Skip it when Grok Build on this Mac can finish the job before you close the lid.

The stack already assigned this seat: overnight code on a non-wiki repo, pull request as the handoff, approved through a Bot if you want a coordinator. Two writers on one tree failed on 12 June 2026. A Cloud Agent on its own VM is not that failure. A Cloud Agent and a local Cursor Agent editing the same branch at once is.

pstack does not replace this seat. pstack is a ban you can enforce inside a Cloud Agent run if the repo has a verification skill. Do not install the plugin in order to justify starting Cloud Agents.

## What a run is

An admin connects GitHub, GitLab, Bitbucket, or Azure DevOps on the Cursor account. The agent clones with read-write access, works on a separate branch, and pushes for handoff. You can also start from scratch without a repository.

The VM is only as useful as its environment: cloned repos, installed dependencies, secrets, startup commands, network. Cursor's own docs treat a missing environment as leaving an engineer without a computer. You configure that environment with agent-led setup, a saved snapshot, or a Dockerfile in `.cursor/environment.json`. Builds prepare the environment in the background so the next run starts ready. Secrets live in the Cloud Agents dashboard and inject at start; a run already going will not see a secret you added later.

Hooks from `.cursor/hooks.json` in the repo run on the VM. Hooks in `~/.cursor/hooks.json` do not, because the VM has no home directory. MCP servers can be attached from cursor.com/agents. You can take over the remote desktop to click the changed software yourself, then hand control back.

Cloud Agents can work across more than one repo. Long-running (the multi-hour harness that keeps a plan in view) is not available for multi-repo yet. Long-running is how a large job stays on track. Cloud is where the job runs. Those two are not the same product.

Cursor **Subscriptions**, as of 19 August 2026, are event sources a Cloud Agent can watch: a pull request, a Slack thread, or a schedule. **Automations** fire Cloud Agents on a cron or on GitHub, Slack, Linear, PagerDuty, or a webhook. Cursor `/goal` gives a Cloud Agent a long-lived objective until an independent check can reproduce the claim. Grok `/goal` is a different product with the same slash name.

## If you start one

1. Write the task so a stranger could finish it with the laptop closed: outcome, constraints, how you will know it worked. If you cannot write that, stay in Cursor Agent mode.
2. Commit or stash local work. Confirm source control is connected.
3. Start from **Cloud** in the editor dropdown, from cursor.com/agents, or ask a Grok Bot to spawn one and stop.
4. Require artifacts on a visual change: screenshot or video on the pull request.
5. You merge. A green CI bar is not a merge. Auto-fix that merges its own pull request is a slide this desk refused on [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]].

A first Cloud Agent on tsumugu-core that cannot launch the reader has the same problem as pstack without a verification skill. Fix the environment first.

## The case against, the cost, and when to quit

The case for Cloud Agents is that overnight application code needs a computer that is not your laptop and is not the Bot's shared desktop. The case against is billing and environment. They are charged at API pricing for the selected model. A larger context window costs more. You set a spend limit on first use. This desk already refused a metered Anthropic API. A Cloud Agent that burns past the Cursor subscription is that meter in another logo.

The other cost is setup. A VM without a working launch command cannot close the loop. Artifacts then become a video of a crash.

Quit if you are still sitting in the files for the same task. Quit if the pull request has no picture of a visual change. Quit if the run and a local agent are both editing the same branch. Quit if the next run would bill outside the subscription. Quit if the job was wiki prose.

Checkable expectation: one fully specified overnight change on a non-wiki repo arrives as a pull request you can review from artifacts without checking out the branch. If you had to clone locally to know whether it worked, the environment is not done.

## How to practice this

1. Write a five-part task for a change you already understand. Notice whether it still needs the screen. If it does, do not start a Cloud Agent.
2. Start one run from the editor Cloud dropdown on an application repo. Notice whether uncommitted files were missing.
3. On a visual change, require a screenshot on the pull request. Notice whether tests-passed-only would have fooled you.
4. If a Grok Bot starts the run, notice that the Bot stops at the handoff and you merge.

If you still sat in Cursor until it finished, this was the wrong computer. If a pull request arrived with pictures and you only chose merge or not, this was the right one.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: why four products look like overnight work, and which computer this desk actually opens
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: standing watch on a shared desktop; a Bot may start a Cloud Agent and must not merge
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: the ban that a Cloud Agent run still has to meet on a clickable app
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: public demo of Bot-as-coordinator and auto-merge this desk refuses
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: Cloud Agents, Agent mode, long-running, Subscriptions, `/goal`
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: overnight PR seat, already assigned
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: proof on the artifact
- [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]]: Cloud Agents overlap Grok Bot more than they overlap Grok Build

## Open questions

- After one overnight run on tsumugu-core, does the environment snapshot launch the reader, or is the artifact a video of a crash?
- Does Ultra still cover the next Cloud Agent, or would that run sit on API rates this desk refused?
- When a Bot starts the Cloud Agent, is the pull request small enough to review, or does the coordinator dump a stack?

## Sources

- [Cloud Agents](https://cursor.com/docs/cloud-agent): isolated VMs, parallel runs, computer use, artifacts, remote desktop, multi-repo, kickoff surfaces, source control, environments, hooks, MCP, billing at API pricing, formerly Background Agents. Read 2026-09-17.
- [Cloud agent setup](https://cursor.com/docs/cloud-agent/setup): agent-led setup, snapshots, `.cursor/environment.json`, start from scratch.
- [Cloud agent capabilities](https://cursor.com/docs/cloud-agent/capabilities): artifacts, computer use, remote desktop, Cursor Cloud MCP.
- [Models and pricing](https://cursor.com/docs/models-and-pricing): selected model and context window size drive token cost.
- [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]]: Cloud Agents as Cursor's standing-ish write surface; hooks from `.cursor/hooks.json` only; compiled 2026-08-15.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: overnight PR seat; Ultra spend condition for one Cloud Agent.
- [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|12 June 2026]]: two writers on one tree.
