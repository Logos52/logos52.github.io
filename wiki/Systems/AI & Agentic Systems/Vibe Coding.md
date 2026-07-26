---
type: concept
status: developing
created: 2026-05-02
updated: 2026-06-15
source-count: 5
last-audited:
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

Implementation can move quickly when an AI coding agent handles the low-level construction while the human steers with high-level intent.

## Summary

In Karpathy's framing, vibe coding raises the floor of software creation. A person can ask for an app or feature in natural language, let the agent edit files and run commands, and inspect the result. If things fail, the human can still fall back to ordinary programming.

Naval's "return to code" framing adds a useful second angle: vibe coding restores a playful loop where a person can make small, personal tools without the full overhead of traditional software production. The output may be a production app, but it may also be a disposable one-shot app that solves one local problem.

## What Changed

Earlier LLM coding use was mostly snippet-based: ask for code, copy it, paste it, repair it. Agentic coding tools changed the workflow because they have local file context, can edit multiple files, can execute commands, and can iterate inside the project.

The change Hodak names is that you don't get stuck anymore: the random narrow thing that used to eat an indefinite stretch of debugging now resolves quickly. The old teaching that programming is "intrinsically frustrating — that's how you learn" stopped being reliably true, which is most of what lowered the floor.

## Crossing Into Hardware

Vibe coding is no longer confined to software. At Boom, software engineers build the architectures and domain experts vibe-code their own pieces, so two engineers can iterate an entire jet engine where the cold-shape/hot-shape analysis of a single blade once cost one engineer a full day. The routing discipline still holds — reuse beats first-principles rebuilds. Rauch's "building blocks economy" treats existing infrastructure as a token cache the agent forks from rather than reinventing, which is what keeps vibe-coded work compatible with the rest of the system instead of a bespoke island. See [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## Relationship To Agentic Engineering

Vibe coding is permissive and exploratory. Agentic engineering is stricter: it keeps professional standards around security, maintainability, verification, and design.

The important routing question is whether the artifact is disposable or durable. Disposable artifacts can tolerate more vibe. Durable systems need agentic engineering.

## Related Concepts

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]]
- [[wiki/Concepts/A Return to Code|A Return to Code]]
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]

## Sources

- [[raw/sources/How I use LLMs|How I use LLMs]]
- [[raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
- [[raw/sources/A Return to Code|A Return to Code]]
- [[raw/sources/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[raw/processed/The AI Industrial Revolution|The AI Industrial Revolution]]

## Open Questions

- Where is vibe coding useful for fast prototypes but dangerous for durable systems?
- What signals indicate a project should shift from vibe coding to agentic engineering?
