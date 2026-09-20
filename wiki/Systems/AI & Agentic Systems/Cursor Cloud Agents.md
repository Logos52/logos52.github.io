---
title: "How to start a Cursor Cloud Agent"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-20
description: "Steps to start one Cursor Cloud Agent run on an application repo: check that the task fits, prepare the account and the repo, start the run, then review and merge the pull request."
method: pstack-technical-writing-how-to
written-by: fable
tags:
  - cursor
  - agents
  - agentic-engineering
  - grok-bot
---

# How to start a Cursor Cloud Agent

This guide starts one Cloud Agent run on an application repo. The run ends with a pull request that you review and merge.

Do not run a Cloud Agent and a local Cursor Agent on the same branch at the same time.

## Check that the task fits

Use a Cloud Agent when all of these are true:

- The repo is an application repo, such as tsumugu-core or tan.
- The change is fully specified.
- The handoff is a pull request, and you merge it.
- You will not work in the files until morning.

Do not use a Cloud Agent in any of these cases:

- The job is wiki prose, or the repo is the notes site.
- The next click still depends on what you see on your screen.
- Someone is already editing the same tree.
- Grok Build on this Mac can finish the job before you close the laptop.
- The run would bill outside the Cursor subscription that is already on the account. Do not open a metered platform key to pay for a run.

## Prepare the account and the repo

Do these steps once for each repo.

1. If source control is not connected on the Cursor account, ask an admin to connect GitHub, GitLab, Bitbucket, or Azure DevOps. No one can start a run from a repository before that. To start from scratch without a repository, skip this step.
2. The first time you use Cloud Agents, set a spend limit. Cursor charges each run at the API rates of the selected model, and a larger context costs more.
3. Configure the environment for the VM. The VM needs the cloned repos, the installed dependencies, the secrets, the startup commands, and the network. Use one of these methods:
   - agent-led setup
   - a saved snapshot
   - a Dockerfile in `.cursor/environment.json`

   Builds prepare the environment in the background, so the next run starts ready.
4. Add the secrets in the Cloud Agents dashboard before you start the run. Cursor injects secrets when a run starts. A run that is already going does not see a secret that you add later.
5. If the run needs hooks, put them in `.cursor/hooks.json` in the repo. Hooks in `~/.cursor/hooks.json` do not run, because the VM has no home directory.
6. If the run needs an MCP server, attach the server from cursor.com/agents.

## Start the run

1. Write the task so that a stranger could finish it with the laptop closed. State the outcome, the constraints, and how you will know it worked. If you cannot write the task this way, stay in Cursor Agent mode.
2. If the change is visual, require a screenshot or a video on the pull request.
3. Commit or stash your local changes. Local uncommitted files do not go with the run.
4. Start the run from one of these places:
   - the editor
   - cursor.com/agents
   - the iOS app
   - Slack
   - a comment on GitHub or Bitbucket
   - Linear
   - the API

A Grok Bot may also start the run as a coordinator. The Grok Bot does not merge, and it does not write `wiki/`.

## Review and merge

1. When the pull request arrives, review it from the artifacts. The artifacts are the screenshots, the video, or the logs.
2. If you want to click the changed software yourself, take over the remote desktop. Hand control back when you finish.
3. If the change is visual and the pull request has no picture, do not treat the change as done. Passing tests are not enough.
4. Merge the pull request yourself.

## Check that the environment is done

One fully specified overnight change should arrive as a pull request that you can review without checking out the branch. If you had to clone locally to learn whether the change worked, the environment is not done. Go back to "Prepare the account and the repo", step 3.

If the first Cloud Agent on tsumugu-core cannot launch the reader, fix the environment first. A VM without a working launch command gives you a video of a crash.

## Stop in these cases

Stop using a Cloud Agent for the task in any of these cases:

- You are still working in the files for the same task.
- The pull request has no picture of a visual change.
- The run and a local agent are both editing the same branch.
- The next run would bill outside the subscription.
- The job was wiki prose.

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
