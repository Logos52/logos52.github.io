# Agent Memory Requires Two Layers: Cross-Conversation Lookup and Within-Conversation Recording

Every agent eventually hits the same wall. Adding more context only widens the desk. The agent still cannot reliably find what it needs from earlier work.

Two distinct layers solve this:

## GBrain — Cross-Conversation Lookup

GBrain is the query layer on top of a markdown wiki or knowledge repo. It indexes facts that stay stable across sessions: people, projects, customers, policies, and decisions.

- The wiki holds the structured knowledge.
- GBrain makes that wiki queryable by the agent before it acts.
- The agent reaches it through CLI, MCP, skills, or plugins.

Use GBrain when the agent must carry context between conversations, hand off work to another agent, or return to a project after days or weeks.

## Lossless — Within-Conversation Recording

Lossless keeps the raw conversation history intact even after the runtime compresses it for the context window. The model works from a summary, but can still retrieve the original messages when needed.

- It plugs into the context engine of the agent runtime.
- In Hermes this is enabled via `lossless-hermes-py` and `context.engine: lossless-hermes`.
- In OpenClaw it is enabled via the `lossless-claw` plugin.

Use Lossless on long sessions, after automatic summarization, or when the user later references something specific from earlier in the same run.

## Diagnostic Order When the Agent “Forgets”

When an agent fails to use prior information, check in this sequence:

1. **Capture** — Did the fact ever enter any system?
2. **Lossless** — Did the conversation survive compression?
3. **GBrain** — Can the fact be fetched across conversations by person, project, or decision?
4. **Ranking** — Did the right fact surface before the agent acted?
5. **Task** — Did the current task make clear why the fact mattered?

Most failures occur at layers 3 or 4, not at capture or context size.

## Practical Distinction

- **GBrain** solves “the agent treats every old customer like a stranger.”
- **Lossless** solves “the agent cannot find what was decided 35 minutes ago in this same session.”

Bigger context windows improve neither layer. They only increase what the model can see at once. The two external mechanisms — a queryable wiki layer and a recoverable conversation recording — are what turn an agent from an intern with a large desk into a coworker who knows how the work actually runs.