---
title: "Cursor Cloud Agents"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-27
description: "How a Cursor Cloud Agent runs a coding task on its own cloud machine and hands back a pull request, and how this desk uses it."
method: outline-2026-09-27
written-by: opus
prose-model: fable
tags:
  - cursor
  - agents
  - agentic-engineering
  - grok-bot
---

# Cursor Cloud Agents

# Cursor Cloud Agents

A Cursor Cloud Agent is a coding agent that runs on a computer Cursor rents in the cloud, one fresh virtual machine per job. It copies a repository from GitHub or a similar host, makes its changes on a branch, and opens a pull request for a person to review. It keeps working after the laptop is closed, so it is the place for coding work that can be written down in full before it starts.

- Write the whole task down before the run starts.
- The agent gets the repository and the task text only.
- One Cloud Agent per pull request, with follow-ups sent to that agent.
- The pull request carries a screenshot or video of the running app.
- Set up `.cursor/environment.json` once so runs start ready.
- Runs bill at API prices, so bigger models and contexts cost more.
- On this desk the owner, never a bot, merges each pull request.

## How it works

A run has three stages: start, run and hand back. It starts from the repository as it stands on the code host, so files not yet committed on the laptop stay behind. The agent works on its own machine, where it can build, test and open the app in a browser to check its work. It ends by pushing a branch and opening a pull request, then keeps listening for review comments and check results until a person merges.

```
task text + repo on host --> fresh machine
        |
edit, test, look at the app
        |
branch + pull request with proof
        |
review or failed check --> agent fixes
        |
person merges
```

- Start from the editor's Cloud option, cursor.com/agents, the phone app or Slack.
  - Also from a GitHub issue comment, Linear or the API.
- Needs a paid Cursor plan and a connected code host.
  - GitHub, GitLab, Bitbucket or Azure DevOps, with read and write access.
- `.cursor/environment.json` gives an install step and processes to keep running.
  - A disk snapshot after a good build makes later runs start faster.
- Several runs can go at once, each on its own machine.
- A person can take over the machine's desktop and hand it back.
- A failed check on its pull request makes the agent try a fix.
  - It stops if a person has pushed to the branch.
  - `@cursor autofix off` in the pull request turns fixes off.

## Where it fails

Most failures come from giving the agent a job it cannot see enough of, or from letting agents merge their own work. At the Grok Bot Galaxy event in September 2026, an overnight run of about 100 to 150 pull requests included a bad SQL change that took production down. A task that needs what is on the laptop screen right now belongs in the Cursor editor's Agent mode instead.

- No environment file: the first minutes go on installing, or nothing builds.
- A dearer model or a larger context raises the bill.

## On this desk

On this desk a Cloud Agent writes the application code, and the Grok Bots, the agents on a shared cloud computer, only report. A Grok Bot may start a Cloud Agent but does not merge. Runs are not queued overnight in bulk, because one person reads each change before it merges and that sets the pace.

- Three runs by 18 September 2026, all on the owner's website repository.
- They gave draft pull requests 3, 4 and 5.
- All checks green, none merged at that date.
- No UI change is done without a picture from the running app.

## Nearby products

Four products can look alike because each runs an agent on code. They differ in which computer does the work, what they hand back, and whether the work stops when the laptop closes. Copilot cloud agent, Codex cloud and Devin Cloud do the same job as a Cloud Agent on other vendors' machines.

| Product | Computer | Output | Laptop closed |
|---|---|---|---|
| Cursor Agent mode | the laptop, in the editor | edits in the editor | stops |
| Grok Build | the laptop, in a terminal | edits on disk | stops |
| Grok Bot | one shared cloud computer per account | reports and files | keeps going |
| Cursor Cloud Agent | one isolated machine per job | a pull request | keeps going |

Pick the one whose code host and subscription are already paid for.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]

## Sources

- [Cloud Agents](https://cursor.com/docs/cloud-agent): isolated VMs, parallel runs, computer use, artifacts, remote desktop, multi-repo, kickoff surfaces, source control, environments, hooks, MCP, billing at API pricing, formerly Background Agents. Read 2026-09-17.
- [Cloud agent setup](https://cursor.com/docs/cloud-agent/setup): agent-led setup, snapshots, `.cursor/environment.json`, start from scratch.
- [Cloud agent capabilities](https://cursor.com/docs/cloud-agent/capabilities): artifacts, computer use, remote desktop, Cursor Cloud MCP.
- [Models and pricing](https://cursor.com/docs/models-and-pricing): selected model and context window size drive token cost.
- [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]]: Cloud Agents as Cursor's standing-ish write surface; hooks from `.cursor/hooks.json` only; compiled 2026-08-15.
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: overnight PR seat; Ultra spend condition for one Cloud Agent.
- [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|12 June 2026]]: two writers on one tree.
