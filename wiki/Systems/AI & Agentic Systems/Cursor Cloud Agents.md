---
title: "Cursor Cloud Agents"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-24
description: "How a Cursor Cloud Agent runs a coding task on its own cloud machine and hands back a pull request, and how this desk uses it."
method: outline-2026-09-24
written-by: fable
prose-model: fable
tags:
  - cursor
  - agents
  - agentic-engineering
  - grok-bot
---

# Cursor Cloud Agents

A Cursor Cloud Agent is a coding agent that runs on a computer Cursor rents in the cloud, one fresh virtual machine per job. It copies a repository from GitHub or a similar host, makes its changes on a branch, and opens a pull request for a person to review. It keeps working after the laptop is closed, so it is the place for coding work that is written down in full before it starts.

## Core takeaways

- Write the whole task before starting a run. The agent has the repository and the task text, and nothing from the laptop screen.
- The output is a pull request. Use one Cloud Agent per pull request and send follow-ups to that same agent.
- Ask for proof in the pull request: a screenshot or a video of the running app, made by the agent on its own machine.
- Set up `.cursor/environment.json` once so every run starts with the tools the repository needs already installed.
- Each run costs tokens at API rates. The model and the size of the context window set the price.
- On this desk a Cloud Agent writes application code and the owner merges every pull request. No bot merges.

## How it works

- Start
  - Start a run from the Cursor editor (the Cloud option), the web page cursor.com/agents, the phone app, Slack, a comment on a GitHub issue or pull request, Linear, or the API.
  - Needs a paid Cursor plan, a connected code host (GitHub, GitLab, Bitbucket or Azure DevOps), and read and write access to the repository.
  - The run starts from the repository as it is on the host. Uncommitted files on the laptop do not go with it.
- Run
  - The machine is built from `.cursor/environment.json`: an install step, processes to keep running, and a snapshot of the disk saved after a good build so later runs start faster.
  - The agent edits, runs tests, and can open the app in a browser on its own desktop to check its work.
  - Several runs can go at the same time, each on its own machine.
  - A person can take over the machine's desktop during a run and hand it back.
- Hand back
  - The agent pushes a branch and opens a pull request with screenshots, video or logs attached.
  - The agent then waits on events: a review comment, a result from the repository's automated checks, a Slack reply, a timer. When a check on its pull request fails, it tries a fix, unless a person has pushed to the branch. `@cursor autofix off` in the pull request turns this off.
  - A person merges.

```
task text --> fresh machine --> repository copy
                  |
          edit, test, open the app
                  |
      branch + pull request + proof
                  |
       a person reviews and merges
```

## Where it fails

- A task that needs what is on the laptop screen right now belongs in the Cursor editor's Agent mode, at the keyboard.
- A run with no environment file spends its first minutes installing, or does not build at all.
- Agents merging their own work. At the Grok Bot Galaxy event in September 2026 an overnight run of about 100 to 150 pull requests included a bad SQL change that took production down for a stretch.
- Billing is on the API meter, so an expensive model or a long context runs the bill up fast.

## On this desk

- Cloud Agents have run three times as of 18 September 2026, all on the repository of the owner's website, giving draft pull requests 3, 4 and 5: a wiki page, the environment file with `npm run verify`, and a saved check named `verify-logos52` that opens the running site, with a weekday 08:15 routine that keeps it current. All checks green, none merged at that date.
- Application code comes from a Cloud Agent on its own machine. Grok Bots on the shared cloud computer only report. A Grok Bot may start a Cloud Agent and never merges.
- No overnight factory of pull requests. The limit is one person reading each change.
- No UI change is called done without a picture from the running app.

## Nearby products

| Product | Computer | Output | Laptop closed |
|---|---|---|---|
| Cursor Agent mode | the laptop, in the editor | edits in front of you | stops |
| Grok Build | the laptop, in a terminal window | edits on disk | stops |
| Grok Bot | one shared cloud computer per account | reports and files | keeps going |
| Cursor Cloud Agent | one isolated machine per job | a pull request | keeps going |

Copilot cloud agent, Codex cloud and Devin Cloud do the same job on other vendors' machines. Pick the one whose code host and subscription are already paid for.

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
