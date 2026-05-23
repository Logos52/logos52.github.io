---
title: "AI-Assisted Learning Workflow"
type: brief
status: draft
created: 2026-05-23
updated: 2026-05-23
model: Opus
source: "How I Learn Things Really Fast (with AI)"
source_url: "https://www.youtube.com/watch?v=TUalmf9bByA"
tags:
  - ai-tools
  - learning-workflow
  - productivity
  - format-conversion
---

## Core Thesis

AI saves meaningful time at the non-cognitive stages of learning — finding resources, converting formats, organizing notes — without touching the processing that actually creates memory and understanding. A five-step framework (Goal → Research → Priming → Comprehension → Implementation) maps cleanly to which stages AI can accelerate and which the learner's brain must do itself. Applied to a 30-hour learning project, the workflow reduces total time by roughly two-thirds.

---

## Compressed Takeaways

- A learning framework without AI still cuts time significantly. AI multiplies the gains from an already efficient process; it does not replace the process.
- The two most impactful AI savings are format conversion during comprehension (~4 hrs) and resource discovery during research (~3 hrs).
- Priming — skimming structure before engaging with content — improves retention and speed by 10–20% and rarely takes more than 30 minutes. AI-generated study guides and pre-quizzes make this easier.
- Format conversion is not cognitive offloading. Converting text to audio so you can listen at 2x speed is removing a format friction point, not having AI build your schema.
- Energy management matters more than time management. Studying at peak energy in a short window produces more than studying at low energy in a long one.
- Interleaving multiple subjects across the same day outperforms blocking each subject to a separate day — for both learning quality and motivation.

---

## The Five-Step Framework

The framework treats learning like assembling a jigsaw puzzle: you need the right pieces, a rough sense of how they fit before you start, and a specific picture you are trying to recreate.

| Step | What It Is | Approx. Time |
|---|---|---|
| Goal | Define the specific end result, not just the topic | 0–5% |
| Research | Find the right resources for that specific goal | 0–10% |
| Priming | Skim for structure; engage with quizzes before reading | 2–5% |
| Comprehension | Layer-by-layer engagement, deepening each pass | 40–60% |
| Implementation | Apply to the defined goal throughout and at the end | 20–40% |

The goal step anchors everything. "I want to learn about AI" has no closure condition and no filter for what matters. "I want to build a simple AI agent" tells you which resources to find, which parts of comprehension to prioritize, and what implementation looks like when you are done.

Without a defined goal, comprehension becomes unfocused and implementation becomes a separate, disconnected phase. With it, implementation feeds back into comprehension — as you work toward the goal, what you need to understand next becomes clear.

---

## Where AI Fits

### Research — ~3 hours saved

Perplexity is the recommended tool for resource discovery. Use it to search specific communities (Reddit threads on how practitioners actually learned a subject), surface the most-used courses filtered to your specific use case, and run deep research on a topic. The advantage over a direct search is that Perplexity surfaces community knowledge — how real learners assembled their curriculum — rather than just top-ranked content.

For niche or technical topics, a custom AI agent can be built to aggregate resources from specific sources, but Perplexity is sufficient for most purposes.

### Priming — ~1 hour saved

NotebookLM can generate a study guide from any resource — a course, video, article — before you have engaged with it. It surfaces the main topics and their rough relationships, which is what priming needs: a structural overview that makes the material less unfamiliar when you engage for real.

NotebookLM can also generate quizzes from the same resource. Taking these before learning — knowing you will perform poorly — is the point. Encountering a question you cannot answer primes the brain to notice and store the answer when it appears.

### Comprehension — ~4 hours saved from format conversion, ~3 hours from clarification

**Format conversion:** If your natural processing mode is audio but the resource is text, convert it. The recommended prompt for Google AI Studio: ask it to transform the resource into a single-person podcast format, concise, containing only definitions, concepts, and full examples, with no added commentary. Download and listen at 2–3x speed. This is not outsourcing the thinking — it is removing the friction of a mismatched format so the cognitive work can happen at full efficiency.

The reverse works too: video or audio resources can be converted to text format if that is the preferred mode.

NotebookLM also has audio and podcast output formats, though these tend toward conversational and slower delivery. For dense technical material, a single-speaker audio conversion may digest faster.

**Section extraction:** Resources rarely cover only what you need. Use NotebookLM to extract specific sections relevant to your goal rather than reading through the entire resource to find the relevant parts.

**Clarification dialogue:** ChatGPT's audio mode allows a spoken back-and-forth when a concept is not landing. This is not asking AI to do the thinking — it is using it as an interactive reference that can adapt to follow-up questions, generate examples, or re-explain from a different angle. The learner still has to form the understanding; the AI provides the raw material faster than a textbook would.

**Note organization:** Take notes in whatever form is natural during learning (messy, abbreviated, full of errors). After a session, feed the notes to Notebook LM or ChatGPT to clean, condense, and structure them. If needed, Claude can convert structured notes into an interactive dashboard.

> **Note on existing wiki content:** The existing page [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI]] focuses on the cognitive risk of using AI — specifically, the risk that AI does the chunking, comparison, and importance-ranking that produces schema, leaving the learner with a finished artifact and no encoding. The workflow above is compatible with that constraint: format conversion, resource discovery, and note cleanup are not cognitive offloading. The tension point is clarification dialogue. Asking AI to re-explain something is legitimate if the learner has first attempted to construct understanding independently. Asking AI to explain something before any attempt moves toward the shortcut pattern the existing page warns against.

### Implementation — variable savings (~6 hours on a 30-hour project)

The implementation savings depend on what the final output is:

- Essay or report: NotebookLM for outline, ChatGPT for drafting
- Interactive dashboard: NotebookLM plus Claude for data analysis and visualization
- Application or code: AI-assisted coding tools or vibe coding
- Slide deck: Manis or Gamma for generation from structured notes

---

## The Operating Model

```
Before starting:
  1. Define the specific output goal (not just the topic)
  2. Use Perplexity to find resources aligned with that goal
     → Search communities; filter for your specific use case
     → Run deep research on the topic

Before engaging with each resource:
  3. Upload to NotebookLM → generate study guide + quiz
  4. Take the quiz (expect poor performance — that is the point)
  5. Skim the study guide for structural overview (30 min max)

During comprehension:
  6. If format mismatches your processing mode → convert it
     → Text to audio: Google AI Studio single-speaker script
     → Audio/video to text: NotebookLM or similar
  7. Extract only sections relevant to your goal
  8. Listen/read in layers: overview pass first, then deepen
  9. Use audio clarification dialogue (ChatGPT) when stuck
  10. Take notes freely; clean them after with AI

Scheduling:
  11. Schedule learning at peak energy, not peak availability
  12. Mix subjects within a day (interleaving) rather than one subject per day

Implementation:
  13. Apply to goal throughout learning, not only at the end
  14. Use AI for drafts, outlines, code scaffolds, slide generation
```

---

## Scheduling: Energy and Interleaving

**Energy over time:** The reason study schedules fail is usually not lack of time — it is low energy when the time arrives. An evening session after a draining workday will produce less in two hours than a morning session with a fresh brain. When planning learning sessions, identify where in the schedule energy is highest and protect it. Two hours of peak-energy study consistently outperforms four hours of low-energy study.

**Interleaving:** Studying multiple subjects within the same day (one hour each of Spanish, personal finance, and AI agents) outperforms studying each subject on its own dedicated day. Research supports this for both learning quality and sustained motivation. The variety reduces the monotony that drains engagement over a long single-subject block.

---

## Links Into the Knowledge Base

- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI]] — complementary page; covers cognitive engagement risk; this page covers workflow efficiency. Read together.
- [[wiki/Dimensions/Deep Processing/Prestudy]] — overlaps with the priming step; this page adds NotebookLM as a specific tool
- [[wiki/Dimensions/Retrieval/Interleaving Table]] — overlaps with the interleaving scheduling principle
- [[wiki/Dimensions/Self-Regulation/How to Maintain Sustainable Energy Under Pressure]] — overlaps with energy management over time management
- [[wiki/Concepts/The Shortcut Problem]] — the boundary condition for when AI use tips into shortcutting

---

## Open Questions

- Where exactly is the line between legitimate clarification dialogue with AI and outsourcing schema construction? Is a first-attempt rule sufficient, or does the type of question matter?
- Does format conversion preserve cognitive engagement or does it reduce friction to the point of reducing encoding? The workflow treats it as neutral to positive; the cognitive engagement literature would want this tested.
- How does the framework hold for genuinely exploratory learning where no specific goal can be defined in advance?
- At what point does interleaving create overhead (context-switching cost, distributed notes) that exceeds its benefit? Is there a complexity threshold?
- For the custom AI agent that aggregates resources — what does a minimal viable version of this look like for someone without an engineering background?

---

## Sources

- [How I Learn Things Really Fast (with AI)](https://www.youtube.com/watch?v=TUalmf9bByA)
