# Gbrain and Lossless - Give Your Agent Persistent Knowledge Across Conversations and Recoverable History

Agents need two memory layers beyond the context window. Gbrain gives the agent access to the organization's accumulated knowledge across different conversations and handoffs. Lossless makes the details of the current session recoverable, so the agent can reference something that was said earlier without losing it to compression.

## Gbrain — Cross-Conversation Knowledge Layer

Gbrain turns a collection of markdown files into a searchable knowledge base.

It indexes people, projects, customers, policies, decisions, and how they connect. The actual files stay in the normal repo. Gbrain provides the search interface through CLI, MCP, skills, or plugins. It runs outside the agent runtime.

Use it when an agent needs to know how the organization has handled something before. Common cases include:

- An agent meets a customer or project it has never seen in this conversation
- Work continues across multiple days or agent handoffs
- A new agent takes over a role and needs the existing context

## Lossless — Within-Conversation Recording Layer

Lossless keeps the full original messages from the current conversation available.

The runtime will eventually summarize older turns to stay inside the context window. Lossless makes sure the exact earlier text can still be found and restored when needed.

Use it when conversations run long or when the user refers back to something specific that was said earlier in the same session.

## Integration

Lossless connects directly into the agent runtime as the context engine.

- In OpenClaw, point the context engine at the `lossless-claw` plugin.
- In Hermes, install `lossless-hermes-py` and set `context.engine: lossless-hermes`.

Gbrain lives outside the runtime. Point it at the markdown files and give the agent a way to query it (CLI, MCP, or skill) before it acts on anything that depends on past decisions or institutional knowledge.

## When an Agent Forgets

Walk through these layers in order:

1. Did the information ever get captured anywhere?
2. Did the current conversation keep the original messages, or did summarization remove them?
3. Can the agent reach the fact across different conversations or different agent instances?
4. Did the right piece of information surface at the moment it was needed?
5. Did the current task make clear why that fact mattered?

Most memory problems appear in layers 3 or 4.

## Summary

Gbrain gives agents access to knowledge that lives outside any single conversation. Lossless makes the details of the current conversation recoverable after summarization. With both layers in place, the agent can work with the continuity a teammate would have.