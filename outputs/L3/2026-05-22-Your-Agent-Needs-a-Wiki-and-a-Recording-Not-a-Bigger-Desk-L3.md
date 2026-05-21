# Your Agent Needs a Wiki and a Recording, Not a Bigger Desk — L3 Synthesis

**Source:** X post by @Voxyz_ai (2026-05-17)
**Topic:** Agent memory architecture — specifically why larger context windows are insufficient and what two additional layers (GBrain + Lossless) actually solve.

## The Core Problem

Even when you stuff more and more history into an agent's context window, the agent still "forgets" in characteristic ways:
- It cannot reliably retrieve facts that were decided in previous conversations.
- It loses access to details once the current conversation is compressed or truncated.
- "It read every word. It just didn't have anywhere to look it up."

The post argues that simply giving the model a bigger desk (larger context) does not solve the actual memory gaps. You also need a **wiki** (persistent, queryable facts across time) and a **recording** (recoverable raw history within the current session).

## Two Distinct Layers

### GBrain — The Cross-Conversation Wiki Layer
GBrain is a search/index layer that sits on top of a markdown-based company wiki / knowledge repo.

- It indexes stable facts: people, projects, customers, policies, decisions, timelines, and the relationships between them.
- Agents can query it before acting ("what did we decide about Acme last quarter?").
- The wiki itself lives in the user's repo as normal markdown. GBrain provides the query surface (CLI, MCP, skills, plugins).
- It is **outside** the agent runtime.

**When it matters:**
- New agent instance or new agent taking over a role
- Returning to a customer/project after days or weeks
- Multiple agents collaborating and handing off work
- Any scenario where "how we do things here" knowledge must survive across separate runs

### Lossless — The Within-Conversation Recording Layer
Lossless keeps the raw messages of the current conversation intact even after the runtime has compressed or summarized older turns.

- The model usually sees a compressed summary (necessary because of window limits).
- But the original text remains recoverable on demand.
- Analogy: secretary's 5-minute meeting notes vs. the full recording you can rewind.

**When it matters:**
- Long multi-turn conversations (50+ exchanges)
- After automatic compression has occurred
- User refers back to something said 20-40 minutes earlier
- Debugging or auditing why the agent made a particular decision

## Common Misconceptions

1. "I already put 30 days of conversations into the model" — This partially solves Lossless (raw history exists) but solves **none** of GBrain. The history is not organized or queryable by person/project/decision.
2. "I'm using a vector database for memory" — Vector DBs are a storage/search primitive. They can be part of an implementation, but GBrain and Lossless are higher-level **patterns** on top of whatever storage you choose.

## What It Actually Feels Like

**Without GBrain:** Every time an old customer reappears, the agent treats them as a stranger and asks for context that already exists in the company's docs.

**With GBrain:** "I see this is Acme. Last time you decided not to discount below X. This request is X + 10%, that's fine. Want me to update the note?"

**Without Lossless:** In a long session, after compression, the agent no longer knows what "that schema we just discussed" referred to 12 turns ago.

**With Lossless:** "You mean the bit from 35 minutes back where we switched from UUID to ULID? Want me to apply ULID?"

## Integration Paths

- **Lossless** plugs into the runtime's context engine slot.
  - OpenClaw: `lossless-claw` plugin (single config line pointing `contextEngine` at it).
  - Hermes: `lossless-hermes-py` plugin + `context.engine: lossless-hermes`.

- **GBrain** lives outside the runtime.
  - Points at a brain repo (markdown files).
  - Agent reaches it via CLI / MCP / skills / plugins before taking actions that need institutional memory.

They solve different temporal scopes but serve the same purpose: "What should I know before I act?"

## Diagnostic for "Why Did My Agent Forget?"

The post offers a 5-layer checklist (in priority order):

1. **Capture** — Did the fact ever enter any system at all?
2. **Lossless** — Did the conversation survive compression inside this run?
3. **GBrain** — Can the fact be retrieved across different conversations / agent instances?
4. **Ranking** — Did the right fact surface at the right moment?
5. **Task** — Did the current task make clear why the fact was relevant?

Many "memory" failures turn out to be in layer 3 or 4 rather than "we didn't give it enough tokens."

## Summary Thesis

Bigger context windows only make the agent's immediate workbench larger. They do not give it:
- A shared, queryable company brain that persists between sessions (GBrain)
- A recoverable transcript of what actually happened in this session (Lossless)

Agents that have both layers start to feel like coworkers who know how the organization actually works and remember where a conversation left off, instead of very diligent but amnesiac interns.

## References (from source)
- GBrain: https://github.com/garrytan/gbrain
- lossless-claw: https://github.com/Martian-Engineering/lossless-claw
- OpenClaw and Hermes runtimes
- Author's site: voxyz.ai

## Open Angles for Further Work

- How to keep GBrain and the wiki in sync without heavy manual maintenance
- Evaluation metrics for "did the agent actually use institutional memory correctly"
- Whether Lossless-style recovery should also apply to tool outputs and intermediate reasoning traces, not just raw user/assistant messages
- Interaction effects when both GBrain and Lossless are active in the same long-running agent team