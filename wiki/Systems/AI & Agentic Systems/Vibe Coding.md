---
title: "Vibe Coding"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: opus
written-by: grok
model: grok
source-count: 6
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

Vibe coding is asking an agent for an app in ordinary language, letting it edit files and run commands, and inspecting the result without reading the code. Ordinary programming stays the fallback when the run fails. In the original sense of the term, you forget that the code exists.

Implementation can move quickly when an agent handles the low-level construction and a person steers with intent. That is true of ordinary agentic coding too. The one thing that separates vibe coding is the unread code.

## Core takeaways

- Vibe coding means asking an agent for an app in ordinary language and not reading the code it produces. Ordinary programming is the fallback when the run fails.
- The tools that made it possible have four capabilities: local file context, edits across more than one file, commands they can run, and a loop that stays inside the project.
- It raises the floor of software creation. One person rebuilt alone an app that had shipped with eight or nine engineers over nine to twelve months.
- The price is code that may be mediocre, insecure, and hard to scale, while the prototype is still true to the creator's vision.
- Disposable work can die with the session. Durable work must survive other people, other months, and attack, and it needs the stricter practice.
- Four reasons say stop: more than one user, a secret, a ruling that must survive a rewrite, an interface someone else will call.

## How the tools changed

Earlier LLM coding was mostly snippet work: ask for a chunk, copy it, paste it, repair it. The class of tools that replaced that paste loop has four capabilities: local file context, edits across more than one file, commands it can run, and a loop that stays inside the project. Those four capabilities describe a class, not one named editor. People who made the switch said they stopped correcting chunks and trusted the system more. That was the point at which they were vibe coding.

People using these tools report that they no longer get stuck. The random narrow problem that used to eat an indefinite stretch of debugging now resolves quickly. The old teaching was that programming is intrinsically frustrating, and that the frustration is how you learn. As a feeling, that stopped being reliably true. Frustration can still teach. It is no longer part of every session. That change is most of what lowered the floor. The "don't get stuck" line and the factory numbers are on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## What the raised floor makes possible

Vibe coding raises the floor of software creation. It restores a playful loop: a person can make a small personal tool without the full overhead of traditional production. The output may be a production app. It may also be a disposable one-shot that solves one local problem. Both outputs matter. The disposable case is what the rule for when to stop depends on.

The loop is tighter than a game's loop, and it leaves a real artifact. Fundamentals get picked up by operating the agent rather than by taking a course: a command line, a cache, latency versus bandwidth. In one case, a person rebuilt alone an app that had shipped with eight or nine engineers over nine to twelve months, the way they wanted it, with no compromises. The names for that case are on [[wiki/Concepts/A Return to Code|A Return to Code]]. The larger category is the niche app the market would never fund an engineer for a year to build. A lunar-phase tracker is one example. Those niche apps are on [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]].

## What it costs

The price comes with the same raised floor. The code may be mediocre, insecure, and hard to scale. The prototype will be true to the creator's vision. Those are the terms of the trade, and they are why durable work has to move to a stricter practice.

## Disposable work and durable work

What decides the next move is whether the artifact is allowed to die with the session, or has to last. Disposable means it can die with the session. Durable means it must survive other people, other months, and attack. A thing that can die with the session can take more unread code. A thing that has to last needs the stricter practice.

Vibe coding is permissive and exploratory. Agentic engineering is the stricter practice. It keeps the professional bar around security, maintainability, verification, and design, while still using agents for speed. Vibe coding raises the floor. Agentic engineering is about the ceiling: the quality bar that already existed, no new vulnerabilities from unread code, the person still responsible. The ceiling is covered in detail on [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]. The medium this practice runs on is written context as the program, which is covered on [[wiki/Systems/AI & Agentic Systems/Context Engineering|Software 3.0]].

## The same change outside a laptop

The floor is also rising outside a laptop. At one factory, software engineers build the architectures and domain experts write their own pieces with agents. That is agent-assisted analysis by people who know the domain. It is not forgetting jet-engine code. The word stays bounded to its original sense.

The numbers from that one factory's account: about a thousand blades; one engineer, one day, one blade, one cold-shape/hot-shape analysis. Two engineers now iterate a whole engine, structures and aerodynamics in the same pass. Those numbers are not a replication.

The routing discipline still holds. Reuse beats a first-principles rebuild. Building blocks are existing infrastructure the agent should fork rather than invent: a token cache of queues, stores, and auth, not a blank file. Do not let the agent reinvent a queue when a named block exists. Reuse is what keeps vibe-coded work connected to what already exists.

## When to stop

Stop when the artifact is no longer allowed to die with the session. There are four complete reasons: more than one user; a secret; a ruling that must survive a rewrite; an interface someone else will call. Even when you stop reading the code, you still have to shape the context, which is covered on [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]. The menu-photo case that made a whole vibe-coded app spurious is covered on [[wiki/Systems/AI & Agentic Systems/Context Engineering|Software 3.0]].

There is a case against using the word as a default. Forgetting the code on a durable system is how vulnerabilities land. The factory example stretches the original sense. One factory's numbers are not a replication. The price, again, is code that is mediocre, insecure, and hard to scale, and true to the vision. Quit for any of the four reasons. Quit if a second session of unread code is pointed at something more than one person will run. One check: name the artifact disposable or durable before the first prompt. If it is durable, the next session is agentic engineering.

Forgetting the code is a choice about the artifact. It is not a default about all software. Ordinary programming remains the fallback. Whether unread code is acceptable depends on what the artifact is allowed to be.

## How to practice this

1. Name the artifact disposable or durable before your first prompt. Notice whether it has to survive other people, other months, and attack.
2. Check the work against the four reasons to stop. Notice a second user, a secret, a ruling that must survive a rewrite, or an interface someone else will call. If one is there, make the next session agentic engineering.
3. Build one small personal tool with an agent and do not read the code. Notice whether you get stuck the way you used to.
4. Before the agent builds a queue, a store, or auth, look for an existing block to fork. Notice whether it is reinventing infrastructure that already exists.
5. After a session of unread code, ask how many people will run the result. Notice whether the artifact is still allowed to die with the session.
6. While operating the agent, watch which fundamentals you pick up. Notice a command line, a cache, latency versus bandwidth.

## Related pages

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the "don't get stuck" feeling, one factory's two-engineer engine, and building blocks as a token cache.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the ceiling this page is not; the routing partner for durable work.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the medium vibe coding runs on, and the owner of the menu-photo / spurious-app example.
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the playful loop and the one-shot app rebuilt the way the maker wanted it.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: niche apps the market would not fund an engineer for a year to build.

## Open questions

- Where is vibe coding useful for fast prototypes and dangerous for durable systems, in this reader's actual inventory?
- What other signals, besides the four named here, say a project should shift to agentic engineering?

## Sources

- Andrej Karpathy, [vibe coding](https://x.com/karpathy/status/1886192184808149383), 2 February 2025. The original sentence.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw), ~1:17:00–1:22:16. The agent that edits and runs; fallback to ordinary programming.
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent 2026, ~0:47–2:16 and ~15:46–17:18. Floor versus ceiling.
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the playful loop, the rebuilt app, and the price.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: the unbuilt niche apps.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: Hodak's "don't get stuck," one factory's engine numbers, and building blocks (Rauch citing Hashimoto).
