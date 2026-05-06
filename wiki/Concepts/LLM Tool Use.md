---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - tools
  - context
---

# LLM Tool Use

LLM tool use extends a model beyond its parameter memory by letting it call search, code execution, file systems, interpreters, or other tools.

## Summary

Karpathy frames the base model as a self-contained statistical artifact that emits tokens. Tool use changes the system: search tools, file uploads, Python interpreters, coding IDEs, artifacts, voice, image, and video interfaces all add new ways for information to enter or leave the context window.

## Main Tool Patterns

- Internet search: retrieve current or external information and insert it into context.
- Deep research: combine search with longer reasoning over many sources.
- File upload: put specific documents into model context.
- Python or data analysis: delegate computation that should not be done "in the head."
- Coding IDE agents: give the model file-system context and edit/command permissions.
- Artifacts and diagrams: generate local apps or visualizations as outputs.
- Voice/image/video: change input and output modalities.

## Relationship To Context Engineering

Tools are context channels. They determine what the model can see, what it can modify, and what evidence can be checked. Good tool use is not just adding capabilities; it is choosing the right capability for the epistemic problem.

## Related Concepts

- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]

## Sources

- [[How I use LLMs|How I use LLMs]]

## Open Questions

- Which tools should this wiki expose to future LLM agents first?
- When is web search needed versus reading the compiled wiki?
- What should be verified by scripts rather than model judgment?
