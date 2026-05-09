---
title: "Knowledge Base Index"
description: "Full index for the public LLM-maintained knowledge base."
type: index
hideFolderListing: true
created: 2026-05-02
updated: 2026-05-08
tags:
  - system
---

# Knowledge Base Index

The complete catalog of pages, organized by topic. This is the long version — if you'd rather wander, just click around the graph.

### LLM wiki architecture

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Concepts/LLM Knowledge Systems\|LLM Knowledge Systems]] | concept | seed | Pattern for using LLMs to maintain a persistent markdown wiki instead of only querying raw sources. |
| [[wiki/Workflows/Raw to Wiki Compilation\|Raw to Wiki Compilation]] | workflow | seed | Process for converting source material into durable, linked wiki pages. |
| [[wiki/Workflows/Question Answering Against a Wiki\|Question Answering Against a Wiki]] | workflow | seed | Workflow for answering questions by reading the compiled wiki first, then sources as needed. |
| [[wiki/Workflows/Wiki Health Checks\|Wiki Health Checks]] | workflow | seed | Periodic audits for contradictions, stale claims, orphan pages, and missing concepts. |
| [[wiki/Workflows/Wiki Status Checks\|Wiki Status Checks]] | workflow | seed | Lightweight read-mostly audits that summarize wiki health, risks, and next actions. |
| [[wiki/Workflows/Wiki Breakdown Pass\|Wiki Breakdown Pass]] | workflow | seed | Process for finding missing pages, split candidates, and deliberate wiki expansion opportunities. |
| [[wiki/Techniques/Context Engineering\|Context Engineering]] | technique | seed | Shaping available context so LLMs can navigate and use the wiki effectively. |
| [[wiki/Concepts/LLM Tool Use\|LLM Tool Use]] | concept | seed | Search, file upload, code execution, IDE agents, and other tools as context channels. |
| [[wiki/Concepts/Thinking Models\|Thinking Models]] | concept | seed | Reasoning models are useful for hard tasks where extra latency can buy accuracy. |

### Agentic engineering

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Concepts/Agentic Engineering\|Agentic Engineering]] | hub | developing | Best-practices hub for building with agents while preserving quality, taste, architecture, verification, and human responsibility. |
| [[wiki/Concepts/Vibe Coding\|Vibe Coding]] | concept | seed | Letting an AI coding agent take substantial implementation control under human steering. |
| [[wiki/Concepts/Software 3.0\|Software 3.0]] | concept | seed | Natural-language context and prompts as a programming medium for LLM interpreters. |
| [[wiki/Concepts/Agent-Native Infrastructure\|Agent-Native Infrastructure]] | concept | seed | Infrastructure designed for agents to use directly through legible instructions and APIs. |
| [[wiki/Concepts/Understanding Bottleneck\|Understanding Bottleneck]] | concept | seed | Even when thinking is outsourced, the human must understand enough to direct the work. |
| [[wiki/Concepts/A Motorcycle for the Mind\|A Motorcycle for the Mind]] | concept | developing | AI as an accelerator for thought, learning, coding, and agency that still requires human direction. |
| [[wiki/Concepts/A Return to Code\|A Return to Code]] | concept | developing | Vibe coding as a return to playful, personal, direct software creation through agents. |
| [[wiki/Concepts/Nothing Ever Happens Is Over\|Nothing Ever Happens Is Over]] | concept | developing | Fast-changing AI-era sense-making frame for startups, technology, risks, and personal operating systems. |

### Metacognition and learning

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Syntheses/Current Study System\|Current Study System]] | synthesis | developing | User's current encoding and retrieval loop built around BHS plus SIR. |
| [[wiki/Syntheses/ICS System\|ICS System]] | synthesis | developing | High-level synthesis of Justin Sung's learning system: process control, five dimensions, encoding, retrieval, practice, and reflection. |
| [[wiki/Dimensions/Dimensions of Learning\|Dimensions of Learning]] | model | developing | Central hub model for Deep Processing, Self-Management, Self-Regulation, Mindset, and Retrieval. |
| [[wiki/Dimensions/Deep Processing\|Deep Processing]] | dimension | developing | Dimension for encoding through comparison, chunking, prioritization, and meaning-making. |
| [[wiki/Dimensions/Self-Management\|Self-Management]] | dimension | developing | Dimension for time, task, focus, energy, habits, and environment. |
| [[wiki/Dimensions/Self-Regulation\|Self-Regulation]] | dimension | developing | Dimension for monitoring, diagnosing, and adjusting the learning process. |
| [[wiki/Dimensions/Mindset\|Mindset]] | dimension | developing | Dimension for interpreting difficulty, mistakes, feedback, identity, and growth. |
| [[wiki/Dimensions/Retrieval\|Retrieval]] | dimension | developing | Dimension for recall, reconstruction, interleaving, spacing, and transfer. |
| [[wiki/Concepts/Metacognition\|Metacognition]] | concept | seed | Awareness and control of thinking during learning; the control layer for learning-to-learn. |
| [[wiki/Techniques/Building the Radar\|Building the Radar]] | technique | seed | Practice for detecting shifts from active processing into passive consumption. |
| [[wiki/Concepts/Active vs Passive Learning\|Active vs Passive Learning]] | concept | seed | Distinguishes visible learning behaviors from the thought quality they produce. |
| [[wiki/Concepts/Technique-Triggered Thinking\|Technique-Triggered Thinking]] | concept | developing | Diagnostic principle for checking whether a technique is producing the intended cognition, not just a correct-looking artifact. |
| [[wiki/Concepts/The Shortcut Problem\|The Shortcut Problem]] | concept | developing | Pattern where the brain avoids difficult learning by producing visible activity that bypasses the required thinking. |
| [[wiki/Concepts/Cognitive Load as Signal\|Cognitive Load as Signal]] | concept | seed | Interprets mental effort, overload, and drowsiness as metacognitive signals. |
| [[wiki/Concepts/Unlearning Learning Habits\|Unlearning Learning Habits]] | concept | seed | How old learning habits persist and how to replace them. |
| [[wiki/Concepts/Deep Processing\|Deep Processing Concept Note]] | concept | seed | Supporting concept note for meaning-making through comparison, evaluation, connection, and schema formation. |
| [[wiki/Concepts/Memory Handling\|Memory Handling]] | concept | seed | Deliberately shaping new information so it can be encoded and retrieved. |
| [[wiki/Concepts/Fixed vs Growth Mindset\|Fixed vs Growth Mindset]] | concept | developing | Mindset model for interpreting ability, mistakes, effort, feedback, and identity during learning. |
| [[wiki/Concepts/Neuroticism\|Neuroticism]] | concept | developing | Trait-level threat sensitivity and emotional reactivity as it affects learning, self-regulation, avoidance, and growth. |
| [[wiki/Techniques/Thinking on Paper\|Thinking on Paper]] | technique | seed | Using notes as an external workbench for reasoning and cognitive offload. |
| [[wiki/Techniques/Bear Hunter System\|Bear Hunter System]] | technique | developing | Practical encoding workflow: Aim questions, Shoot through sources, Skin maps, then hand off to retrieval. |
| [[wiki/Techniques/Aim\|Aim]] | technique | developing | BHS prestudy step for turning concepts into why/how questions and rough chunks. |
| [[wiki/Techniques/Shoot\|Shoot]] | technique | developing | BHS active-learning step for answering Aim questions while building a working map. |
| [[wiki/Techniques/Skin\|Skin]] | technique | developing | BHS consolidation step for cleaning the map into a retrievable final structure. |
| [[wiki/Techniques/Spaced Interleaved Retrieval\|Spaced Interleaved Retrieval]] | technique | developing | Retrieval system combining recall, widening spacing, interleaving, and gap repair. |
| [[wiki/Techniques/WPW\|WPW]] | technique | developing | High-volume retrieval technique moving between whole-topic structure and detailed parts. |
| [[wiki/Techniques/Kolbs Experiential Cycle\|Kolbs Experiential Cycle]] | technique | developing | Reflection loop for converting experience into better experiments. |
| [[wiki/Techniques/Marginal Gains\|Marginal Gains]] | technique | developing | Improvement model for choosing small, compounding gains. |
| [[wiki/Techniques/Reverse Goal Setting\|Reverse Goal Setting]] | technique | developing | Backward planning method for turning complex goals into capability gaps, force fields, and short action plans. |
| [[wiki/Techniques/Dimension Practice Tracks\|Dimension Practice Tracks]] | technique | developing | Four-step practice tracks for Deep Processing, Self-Regulation, Self-Management, and Mindset. |
| [[wiki/Techniques/Upgrading Your Dimensions\|Upgrading Your Dimensions]] | technique | developing | Strategy for improving dimensions through foundation and growth horizons. |
| [[wiki/Concepts/Importance-Based Chunking\|Importance-Based Chunking]] | concept | developing | Grouping information by why it matters and how it should be used. |
| [[wiki/Concepts/Knowledge Mastery\|Knowledge Mastery]] | concept | developing | Practical levels for diagnosing whether knowledge is isolated, relational, evaluative, or transferable. |

### Decision making

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Decision Making/Decision Making\|Decision Making]] | hub | developing | ICS-sourced operating layer for choosing under uncertainty without losing time, focus, or adaptability. |
| [[wiki/Decision Making/Decisional Delays\|Decisional Delays]] | concept | developing | Hidden time and focus cost created by repeated decisions about what to do next. |
| [[wiki/Decision Making/Choice Throttling\|Choice Throttling]] | technique | developing | Reduces vague choices into a small set of closed questions that narrow the decision. |
| [[wiki/Decision Making/Good Decisions\|Good Decisions]] | concept | developing | Decision quality judged by process first, with outcomes treated as feedback rather than the sole verdict. |
| [[wiki/Decision Making/Positional Decisions and Expected Value\|Positional Decisions and Expected Value]] | concept | developing | Makes uncertain decisions by improving future position, leverage, information, or expected value. |
| [[wiki/Decision Making/Changing Decisions\|Changing Decisions]] | concept | developing | Revises decisions when new information changes the process, position, or expected value. |

### Self-management

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Self Management/Flow State\|Flow State]] | concept | developing | High-output attention state protected by task clarity, environment, and reduced decision friction. |
| [[wiki/Self Management/Focus Management\|Focus Management]] | system | developing | Practical system for creating, maintaining, and recovering attention during study and work. |
| [[wiki/Self Management/Attention Management\|Attention Management]] | system | developing | Advanced day-level system for preserving flow across tasks by reducing transition friction and decisional delays. |
| [[wiki/Self Management/Procrastination\|Procrastination]] | concept | developing | Treats avoidance as a system problem involving triggers, task friction, environment, and willpower dependence. |

### Language learning

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Resources/Vietnamese Language Learning Resources\|Vietnamese Language Learning Resources]] | resource-catalog | developing | Compiled Refold resource catalog for Vietnamese immersion, sound/script work, tooling, and review resources. |
| [[wiki/Resources/Mandarin Chinese Language Learning Resources\|Mandarin Chinese Language Learning Resources]] | resource-catalog | developing | Compiled Refold resource catalog for Mandarin comprehensible input, pinyin, character tools, immersion tooling, and review resources. |
| [[wiki/Language/Refold Language Learning System\|Refold Language Learning System]] | synthesis | developing | Source-built hub for Refold: acquisition, attention, three pillars, comprehension hacking, grammar, characters, and daily systems. |
| [[wiki/Language/Attention is Important\|Attention is Important]] | concept | developing | Why immersion must remain a high-attention activity. |
| [[wiki/Language/Noticing Game\|Noticing Game]] | technique | developing | Beginner attention technique for finding recognizable pieces in real input. |
| [[wiki/Language/YouTube Immersion Account\|YouTube Immersion Account]] | workflow | developing | Separate recommendation environment for target-language YouTube immersion. |
| [[wiki/Language/Three Pillars of Language Learning\|Three Pillars of Language Learning]] | model | developing | Balance model for Preparation, Interactive Immersion, and Freeflow. |
| [[wiki/Language/Preparation\|Preparation]] | pillar | developing | Priming layer for vocabulary, sounds, script, characters, grammar, and tools. |
| [[wiki/Language/Interactive Immersion\|Interactive Immersion]] | pillar | developing | Tool-assisted active immersion for unlocking meaning in real input. |
| [[wiki/Language/Freeflow Immersion\|Freeflow Immersion]] | pillar | developing | Attentive lower-friction exposure without constant lookup. |
| [[wiki/Language/Immersion Metalayers\|Immersion Metalayers]] | tool-note | developing | Tools such as Migaku and Language Reactor that layer lookup/subtitle support onto content. |
| [[wiki/Language/Hacking Comprehension Menu\|Hacking Comprehension Menu]] | technique | developing | Menu of tool, technique, and content levers for making input more comprehensible. |
| [[wiki/Language/Character Primer\|Character Primer]] | concept | developing | Orientation to Chinese/Japanese characters, components, context, and recognition. |
| [[wiki/Language/Refold Grammar Primers\|Refold Grammar Primers]] | technique | developing | Grammar priming as a comprehension aid rather than memorization. |
| [[wiki/Language/Vietnamese Grammar Primer\|Vietnamese Grammar Primer]] | primer | draft | Original draft grammar primer for Vietnamese, structured after the Refold primer workflow. |
| [[wiki/Language/Language Isn't Math\|Language Isn't Math]] | concept | developing | Language-learning mindset: natural speech is acquired from patterns and examples, not deduced from grammar formulas. |

### Red Teaming

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Red Team/Red Teaming\|Red Teaming]] | hub | developing | Dedicated Red Teaming hub connecting Army decision-support principles to the user's identity and learning system. |

### Reference

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Books/The Parasitic Mind\|The Parasitic Mind]] | book | developing | Longform review and takeaways on Gad Saad's argument for reason, free speech, and epistemic hygiene. |
| [[wiki/Concepts/Suicidal Empathy\|Suicidal Empathy]] | concept | developing | Gad Saad's evolutionary framework for maladaptive empathy that is excessive, misactivated, or aimed at the wrong targets. |
| [[wiki/Books/The Book of Elon\|The Book of Elon]] | book | developing | Longform review and takeaways on purpose, first-principles engineering, company-building, and civilizational optimism. |
| [[wiki/Glossary\|Glossary]] | glossary | seed | Short definitions of recurring terms. |
| [[wiki/Bibliography\|Bibliography]] | bibliography | seed | Source bibliography for the wiki. |
| [[wiki/Timeline\|Timeline]] | timeline | seed | Timeline of important developments and repo events. |
| [[00 Command Center/Writing Standards\|Writing Standards]] | system | developing | Operating standard for future wiki writing, page structure, anti-cramming, and article quality. |
