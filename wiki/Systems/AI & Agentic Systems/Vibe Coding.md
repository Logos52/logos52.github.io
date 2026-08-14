---
title: "Vibe Coding"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 6
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

Vibe coding is asking an agent for an app in ordinary language, letting it edit files and run commands, and inspecting the result without reading the code. Ordinary programming stays the fallback when the run fails. The original move is to forget that the code even exists.

## What changed

Implementation can move quickly when an agent handles the low-level construction and a person steers with intent. That is true of ordinary agentic coding too. What isolates vibe is the unread code.

Earlier LLM coding was mostly snippet work: ask for a chunk, copy it, paste it, repair it. The class that replaced that paste loop has four capabilities: local file context, edits across more than one file, commands it can run, and a loop that stays inside the project. Describe the class, not a named editor. One first-person tell: people stopped correcting chunks, trusted the system more, and that was the moment they were vibe coding.

The feeling that came with it is the best sentence on the subject. You don't get stuck anymore. The random narrow thing that used to eat an indefinite stretch of debugging now resolves quickly. The old teaching that programming is intrinsically frustrating — that is how you learn — stopped being reliably true as a *feeling*. Frustration can still teach. It is no longer the floor of every session. That change is most of what lowered the floor. The "don't get stuck" line, and the factory numbers later, live on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## The floor, and its price

Vibe coding raises the floor of software creation. It restores a playful loop: a person can make a small personal tool without the full overhead of traditional production. The output may be a production app. It may also be a disposable one-shot that solves one local problem. Both halves matter. The disposable half is what the later routing rule needs.

The loop is tighter than a game and it leaves a real artifact. Fundamentals — a command line, a cache, latency versus bandwidth — get picked up by operating the agent, not by a course. One worked case of the floor: a person rebuilt, alone, an app that had shipped with eight or nine engineers over nine to twelve months, the way they wanted it, with no compromises. Names for that case sit on [[wiki/Concepts/A Return to Code|A Return to Code]]. The iceberg under it is the niche app the market would never fund an engineer for a year to build — a lunar-phase tracker is enough of a picture. That iceberg is [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]].

The price is the other half of the same floor. The code may be mediocre, insecure, and hard to scale. The prototype will be true to the creator's vision. That is a price, not a slur, and it is why durable work has to graduate.

## Disposable or durable

What decides the next move is whether the artifact is allowed to die with the session, or has to last. Disposable means it can die with the session. Durable means it must survive other people, other months, and attack. A thing that can die with the session can take more unread code. A thing that has to last needs the stricter practice.

Vibe coding is permissive and exploratory. Agentic engineering is the stricter practice: it keeps the professional bar around security, maintainability, verification, and design, while still using agents for speed. Vibe coding raises the floor. Agentic engineering is about the ceiling — the quality bar that already existed, no new vulnerabilities from unread code, the person still responsible. The ceiling in detail is [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]. The medium this practice runs on — written context as the program — is [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]].

## The floor outside a laptop

The floor is also rising outside a laptop. At one factory, software engineers build the architectures and domain experts write their own pieces with agents. That is agent-assisted analysis by people who know the domain. It is not forgetting jet-engine code. Keep the word bounded.

The numbers from that one factory's account: about a thousand blades; one engineer, one day, one blade, one cold-shape/hot-shape analysis. Two engineers now iterate a whole engine, structures and aerodynamics in the same pass. That is not a replication. It is the only measurement on this page.

The routing discipline still holds. Reuse beats a first-principles rebuild. Building blocks are existing infrastructure the agent should fork rather than invent — a token cache of queues, stores, and auth, not a blank file. Do not let the agent reinvent a queue when a named block exists. That is what stops vibe-coded work becoming an island.

## When to stop

Stop when the artifact is no longer allowed to die with the session. Four complete reasons: more than one user; a secret; a ruling that must survive a rewrite; an interface someone else will call. What you still have to shape, even when you stop reading the code, is [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]. The menu-photo case that made a whole vibe-coded app spurious belongs on [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]], not here.

The case against using the word as a default: forgetting the code on a durable system is how vulnerabilities land; the factory example stretches the original sense; one factory's numbers are not a replication. The price, again, is mediocre, insecure, hard to scale, and true to the vision. Quit on the shift list above. Quit if a second session of unread code is pointed at something more than one person will run. Checkable: name the artifact disposable or durable before the first prompt. If durable, the next session is agentic engineering.

Forgetting the code is a choice about the artifact, not a default about all software. Ordinary programming remains the fallback. The unread code is licensed by what the thing is allowed to be.

## Related

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — the "don't get stuck" feeling, one factory's two-engineer engine, and building blocks as a token cache.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the ceiling this page is not; the routing partner for durable work.
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]] — the medium vibe coding runs on, and the owner of the menu-photo / spurious-app example.
- [[wiki/Concepts/A Return to Code|A Return to Code]] — the playful loop and the one-shot app rebuilt the way the maker wanted it.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] — niche apps the market would not fund an engineer for a year to build.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — what you still have to shape even when you stop reading the code.

## Open Questions

- Where is vibe coding useful for fast prototypes and dangerous for durable systems, in this reader's actual inventory?
- What other signals, besides the four named here, say a project should shift to agentic engineering?

## Sources

- Andrej Karpathy, [vibe coding](https://x.com/karpathy/status/1886192184808149383), 2 February 2025. The original sentence.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw), ~1:17:00–1:22:16. The agent that edits and runs; fallback to ordinary programming.
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent 2026, ~0:47–2:16 and ~15:46–17:18. Floor versus ceiling.
- [[wiki/Concepts/A Return to Code|A Return to Code]] — the playful loop, the rebuilt app, and the price.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] — the unbuilt niche apps.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — Hodak's "don't get stuck," one factory's engine numbers, and building blocks (Rauch citing Hashimoto).
