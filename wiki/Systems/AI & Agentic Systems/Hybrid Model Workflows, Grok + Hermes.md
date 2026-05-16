---
type: synthesis
status: developing
created: 2026-05-17
updated: 2026-05-17
tags:
  - agentic
  - workflows
  - models
  - grok
  - hermes
  - llm-knowledge-base
---

# Hybrid Model Workflows, Grok + Hermes

As my work on the `llm-knowledge-base` has grown in scope and complexity, I’ve started using **Grok and Hermes together** in a deliberate way rather than choosing one or the other.

### Why Use Multiple Models?

Grok and Hermes have different strengths. Instead of trying to find a single model that does everything well, I’ve found it more effective to assign different kinds of work to the model best suited for it.

### Current Division of Labor

| Task Type                                      | Preferred Model          | Reason |
|-----------------------------------------------|--------------------------|--------|
| High-level framing & philosophy               | Grok                     | Stronger at big-picture thinking and maintaining a consistent operating tone across the system |
| Writing new synthesis pages                   | Either                   | Depends on how much context is needed |
| Auditing and improving existing hubs          | Hermes (via Aider)       | Can read the actual files directly and make precise edits |
| Link hygiene, taxonomy, and consistency work  | Hermes                   | Fast, local, and low-friction for repetitive structural tasks |
| Integrating new concepts (e.g. Lock in Learning Assets) | Grok (first) then Hermes | Grok for conceptual synthesis, Hermes for implementation into the wiki |
| Running experiments across the whole system   | Hermes                   | Full local repo access with no context limits |
| Deep diagnostic work on the Five Dimensions   | Grok                     | Better at maintaining the "learning engineer" framing across multiple pages |

### Why This Hybrid Approach Works

- **Grok** excels at the *design* layer — helping define what the system *should* look like and maintaining conceptual coherence.
- **Hermes** (running locally via Aider) excels at the *execution* layer — directly reading and modifying files in the knowledge base with good tool use and low latency.
- Using Hermes locally also gives me the ability to work with private material (ICS clippings, raw notes, etc.) without sending it to a remote model.

### Current Setup

- **Hermes 3** (via Ollama) + **Aider** as the primary interface for working inside the repo.
- **Grok** used for higher-level planning, tone calibration, and complex synthesis work.
- The two are used in a back-and-forth workflow rather than in parallel.

### Open Questions

- How much context about the Five Dimensions and overall philosophy does Hermes need to be effective?
- Are there specific workflows (e.g. reviewing a hub against the Lock in Learning Assets concept) that work particularly well with one model over the other?
- Will this hybrid approach scale as the knowledge base grows, or will I eventually need a more sophisticated agent orchestration layer?

## Related Pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Syntheses/How Top Performers Learn|How Top Performers Learn]]
- [[wiki/Dimensions/Dimensions of Learning|Dimensions of Learning]]
