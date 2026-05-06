---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-06
source-count: 4
last-audited:
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

Vibe coding is letting an AI coding agent take substantial control of implementation while the human steers with high-level intent.

## Summary

In Karpathy's framing, vibe coding raises the floor of software creation. A person can ask for an app or feature in natural language, let the agent edit files and run commands, and inspect the result. If things fail, the human can still fall back to ordinary programming.

Naval's "return to code" framing adds a useful second angle: vibe coding restores a playful loop where a person can make small, personal tools without the full overhead of traditional software production. The output may be a production app, but it may also be a disposable one-shot app that solves one local problem.

## What Changed

Earlier LLM coding use was mostly snippet-based: ask for code, copy it, paste it, repair it. Agentic coding tools changed the workflow because they have local file context, can edit multiple files, can execute commands, and can iterate inside the project.

## Relationship To Agentic Engineering

Vibe coding is permissive and exploratory. Agentic engineering is stricter: it keeps professional standards around security, maintainability, verification, and design.

The important routing question is whether the artifact is disposable or durable. Disposable artifacts can tolerate more vibe. Durable systems need agentic engineering.

## Related Concepts

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/A Return to Code|A Return to Code]]
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]

## Sources

- [[How I use LLMs|How I use LLMs]]
- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
- [[raw/sources/A Return to Code|A Return to Code]]
- [[raw/sources/A Motorcycle for the Mind|A Motorcycle for the Mind]]

## Open Questions

- Where is vibe coding useful for fast prototypes but dangerous for durable systems?
- What signals indicate a project should shift from vibe coding to agentic engineering?
