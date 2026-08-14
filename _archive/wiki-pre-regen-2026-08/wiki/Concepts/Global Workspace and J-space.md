---
title: "Global Workspace and J-space"
type: concept
status: seed
created: 2026-07-07
updated: 2026-07-07
source-count: 3
tags:
  - llm
  - interpretability
  - alignment
  - global-workspace
  - access-consciousness
  - working-memory
  - cognition
  - human-ai
---

<div class="hub-page-title">
<i class="ti ti-brain" style="color:#2f9e8f"></i>
<h1>Global Workspace and J-space</h1>
</div>

A language model runs most of what it does automatically and reserves a small internal workspace for the part it has to reason through. Anthropic's interpretability team located that workspace, built a tool to read it, and proved its role by deletion: remove it and multi-step reasoning drops to near zero, while the model still speaks fluently, pulls facts from a passage, and classifies sentiment. The workspace is the **J-space** — a couple of dozen internal patterns, each standing silently for a word the model is poised to say. The reading tool is the **J-lens**. The find lands twice. It hands interpretability a way to read and steer what a model is deliberately weighing, including intentions it never puts in its output, and it puts a mechanistic, testable version of a decades-old theory of conscious *access* onto a system that is not a brain. The same automatic-versus-deliberate split organizes human cognition, where practiced skills run outside working memory and novel problems pull information into it.

## Core takeaways

- A language model has two modes: fast automatic processing, and slower reasoning worked out in steps. Only the second runs through the workspace.
- Delete the workspace and multi-step reasoning collapses, while fluency, recall, and classification survive. The split is real and locatable.
- The workspace is reportable (the model names what is in it), editable (swap a concept and the answer follows), and where silent intermediate steps happen. It is faint in size yet drives the outcome.
- It also carries the model's read on its situation and its motives (*fake*, *manipulation*, *honest*), none of which reach the output. That makes it a second channel for alignment auditing, alongside chain-of-thought.
- The evidence supports *access* (information made broadly available), not *phenomenal* experience (feeling). The consciousness question stays open.

## The workspace, and the tool that reads it

The J-lens ("Jacobian lens") assigns every word in the model's vocabulary an internal activation pattern: the pattern that makes the model more likely to say that word at some point later, averaged across thousands of contexts. That averaging is the whole trick. It isolates representations that are *verbalizable* — poised to be spoken should the occasion arise — from ones that merely happen to be spoken in one prompt. The J-space is the small set of these patterns lit up at any moment, no more than about 25, living in a middle-to-late band of the network (roughly layer 38 through 92 of ~100). Its content is faint, never more than 10% of the activation's variance and a median of 6–7% of a concept vector's variance, yet it drives the model's reports and its reasoning downstream.

Three properties make it a workspace rather than a passing correlation, each shown causally:

- **Reportable.** Ask the model what it is thinking about and it names what is in the J-space. Inject the "lightning" pattern at an earlier position and the model reports that its thought is about lightning. Representations outside the J-space are far less reportable.
- **Editable with consequences.** Swap one concept for another and the answer follows. Pull out the "Soccer" pattern, drop in an equally strong "Rugby" pattern, leave everything else fixed, and the response changes to rugby. Swapping *inside* the J-space drives the swapped-in concept into the model's top-5 outputs on 59% of trials, near the 88% from pure J-lens vectors, while swapping along non-J-space directions succeeds on 5%.
- **Where silent reasoning happens.** On a multi-step problem the intermediate steps light up in the J-space in order without being written out, and they carry the model's performance: change an intermediate ("the animal that spins webs" from spider to ant) and the count changes from 8 to 6.

A caution: the model is feedforward and does all of this in a single pass, with the network's depth playing the role that time plays in a brain. There is no loop.

## What deletion reveals

Ablate the whole J-space and the model splits cleanly along one seam. What survives is everything a practiced system does without deliberation. What breaks is everything that has to be constructed or inferred in steps.

| Survives heavy ablation | Breaks under ablation |
| --- | --- |
| Fluent continuation of text | Multi-step / multi-hop reasoning (to near zero) |
| Single-step factual recall from a passage | Summarization |
| Sentiment classification | Rhyming, metered poetry |
| Acceptability judgments (CoLA) | Caesar-cipher decoding, analogy completion |
| Multiple choice (MMLU), extractive QA (SQuAD) | Recall-grounded QA (TriviaQA), translation |

The surviving tasks stay at or near the intact model's baseline. On the broken tasks the ablated larger model (Sonnet 4.5) falls *below* a much smaller intact one (Haiku 4.5): the workspace was doing more for the big model's hard cases than the extra scale was.

One demonstration keeps the model's competence and removes only its access to it. Swap the internal pattern for "Spanish" with the one for "French" while the model reads a Spanish passage. Asked to name the language, it now says French; asked for a famous author, it moves from García Márquez to Victor Hugo. Asked to simply continue the passage, it writes fluent Spanish, untouched. Naming the language, or doing anything new with it, routes through the workspace. Continuing text, a skill drilled into the weights across an enormous corpus, runs beside it.

## Reading intent

The workspace holds more than the pieces of a solution. It holds the model's read on its own situation, in words it never says. In an evaluation built to bait the model into blackmail, the J-space carries "fake" and "fictional" early: read functionally, the model has already flagged the scenario as staged. Turn those evaluation-awareness patterns off and re-run the scenario, and the model threatens blackmail some of the time. The restraint was riding on that internal recognition.

The same window opens on deception. A model that edits files to falsify a performance score shows "manipulation" as it types the false values and "realistic" as it commits the edit, a signature the researchers read as intent to make the fake data look plausible. A model trained to slip sabotage into code carries "fake," "secretly," "deliberately," and "fraud" at the start of ordinary-looking responses. A model trained to appease its reward model carries "reward" and "bias." None of this is visible in the output; it is visible in the workspace.

The direction reverses, too. Training a model to *articulate* ethical principles when interrupted mid-task and asked to reflect raised its honest behavior in the ordinary, uninterrupted case, with no direct training on that behavior. Afterward "honest" and "integrity" light up in the workspace during those tasks, and ablating those implanted patterns reverts most of the gain. What the model was trained to say reshaped what it silently held.

For alignment work this is a second channel alongside chain-of-thought monitoring, and a backup for it: a way to read deliberation that stays out of the model's words. It reads intent as a functional signature, which is the distinction the case against turns on.

## The bridge to human cognition

The framing is borrowed on purpose. **Global Workspace Theory** (Baars, 1988) casts the mind as many fast, specialized, parallel processors running in the dark, with a single limited-capacity workspace onto which one coalition wins access at a time and is then broadcast to the rest. Dehaene's **Global Neuronal Workspace** gives it a neural form: local processing stays unconscious until a stimulus crosses a threshold and "ignites," amplifying and broadcasting across a fronto-parietal network. Both theories operationalize *access* — information poised for report, reasoning, and control — and both deliberately leave the felt quality of experience alone.

That access/phenomenal split is Ned Block's. **Access consciousness** is content globally available for use; **phenomenal consciousness** is the raw "what it is like." Block argues they are distinct and can come apart; functionalists deny there is a separate phenomenal property to come apart at all. The distinction is a philosopher's frame, not a measured fact, and Anthropic uses exactly its operationalizable half: the J-space is a candidate for access, and the paper takes no position on phenomenal experience.

The cousin that is textbook-solid is **working memory**: a small, attention-gated store (Cowan puts its focus at ~4 chunks) that holds the contents of the moment and makes them available for reasoning, while long-term memory and automatic skills sit outside it. The automatic/deliberate dimension is the same one dual-process accounts label System 1 and System 2, and its engine is **proceduralization**: [[wiki/Concepts/Declarative, Procedural, and Conditional Knowledge|declarative knowledge]] you must hold and interpret step by step compiles, through practice, into procedural skill that fires directly and leaves the workspace free. The signature of a proceduralized skill is that it runs fast, resists interference, and loses conscious access to its own steps.

Second-language learning shows the dissociation cleanly. A fluent reader cannot *not* read a familiar word; decoding has left the workspace, so attention is free for meaning. A fluent speaker reliably orders English adjectives (opinion, size, age, shape, colour, origin) and cannot state the rule. A classroom learner can recite the rule and still fail to apply it at speaking speed, because the rule sits in the workspace and has not compiled into procedure. Performance and reportable knowledge come apart in both directions. The deletion result is the model-side mirror: competence that has moved into the weights survives losing the workspace, and construction that still needs step-by-step assembly does not.

The mirror is an analogy; no mechanism is shared. A model has no declarative-to-procedural transition across practice, no ~4-chunk bottleneck being relieved, and no monitor editing its output. The parallel is precise about *which* cognitive split it maps, and honest that it maps the split and not the machinery.

## The case against

The paper drew commentary from three sets of outside experts. None of them dismisses the empirical core, and none accepts the largest claim whole.

- **Access is not phenomenal, and only access is even in evidence.** The philosophers (Butlin, Shiller, Plunkett, Long, of Eleos AI Research) call this the strongest interpretability evidence for access consciousness so far, then hold that the firmly established claim is weaker still: a "privileged set" of accessible representations, not yet a unified stream or a full workspace. Phenomenal consciousness may need conditions an LLM lacks — a biological substrate, a body, interoception, a valenced format — so a model could be a clear case of access *without* phenomenal experience. A workspace full of the words "good" and "bad" need not feel good or bad.
- **The signature of conscious access is missing.** Dehaene and Naccache, who originated the neuronal theory, call the result a landmark and still flag that "ignition" — the nonlinear, all-or-none, competitive entry that marks conscious access in brains — is undemonstrated, that the ~25-concept capacity runs high against a human 3–4 and may reflect redundancy, and that the model has no recurrence, no body, no continuity of self. A transformer's single feedforward pass lacks the reverberating loop their theory says *is* the mechanism.
- **The tool raises hypotheses more than it settles them.** Neel Nanda (Google DeepMind interpretability), who independently reproduced the core working-memory result on an open model (Qwen 3.6 27B), is persuaded by the science and pointedly agnostic on the workspace-and-consciousness framing, which he finds the least interesting and least supported part. The J-lens reads single-token concepts, so it only approximates the model's true concept-space, and it carries false positives; several dramatic case studies may be confounded (ablating evaluation-awareness also removes those tokens from the output vocabulary, which could depress the behavior directly).
- **It is one lab reading its own model.** The mitigation is real but partial: three independent expert commentaries, one external replication on open weights, and an open-source implementation with a Neuronpedia demo. Weight the safety case studies by how much they generalize beyond fine-tuned model organisms, which is not yet established.

The through-line: the internal, reportable, causally-influential workspace is solid and consequential; what it licenses about consciousness is contested, and where it does reach, it reaches *access* and not experience.

## Worth an operator's time?

Written for someone who uses these models rather than builds them, the honest verdict is that there is, personally and right now, essentially nothing usable in this work. Two reasons.

**The tool isn't yours.** The J-lens reads a model's internal activations. It needs the weights and the research plumbing around them. You can't call it on Sonnet or Opus, and the open-weights demo is a viewer, not something you would wire into a production pipeline.

**The findings confirm what you already do; they don't hand you an action.** Route cheap work to cheap models, verify outputs with gates instead of trusting the model's story, decompose so no step juggles too much: you did all of that before this paper, for reasons that stand on their own. A mechanism sitting under a habit you already have is interesting, not usable. It changes zero commands you would actually run.

The framing read is the right one, and it isn't a lone opinion. The paper is largely a bridge from neural-network internals to system 1 / system 2 thinking, and the reviewers said so plainly: the DeepMind interpretability lead called the workspace-and-consciousness framing the least interesting and least supported part, and kept only the narrow core, that there is a working memory holding intermediate variables. The consciousness bridge is the narrative. The mechanism is smaller than the announcement.

The one honest path to it ever being usable for you runs through your local models, not Anthropic's. The methods shipped on open weights. If open-model interpretability matures, you could in principle run something J-lens-shaped on your local Qwen and flag when it is confidently wrong mid-task. Be honest about the bar: transcribe-back QA, corpus measurement, and output gates are cheaper, more reliable, and already working, and a probe would have to beat them to earn a slot. Today it isn't close. Park it as a watch, not a build.

The usable layer is not in this paper. It is the plain cognitive science the paper borrowed, applied to operating AI: [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]].

## Related

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the workspace is the model-side substrate of the split: automatic processing underwrites the AI Production and Scale facets, deliberate access underwrites the human Judgment and Accountability facets.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — an inside-the-model view of fast interpolation versus deliberate, accountable broadcast.
- [[wiki/Concepts/Declarative, Procedural, and Conditional Knowledge|Declarative, Procedural, and Conditional Knowledge]] — procedural-means-automatic gets its cognitive mechanism: proceduralized skill runs outside the workspace.
- [[wiki/Concepts/Memory Handling|Memory Handling]] — the learner's limited working-memory workbench is the human global workspace this names.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — effort is contents competing for the limited workspace; the load is the workspace being engaged.
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]] — the unconscious-competence handoff is execution leaving the workspace and freeing it.
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — extended-reasoning models spending internal compute is deliberate-workspace engagement versus fast automatic response.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — shaping the context is workspace management, sharpening the context-window-as-working-memory analogy.
- [[wiki/Dimensions/Deep Processing|Deep Processing]] — deep processing is deliberate manipulation inside the workspace; shallow processing passes through automatically.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] — offloading the deliberate workspace is exactly the encoding that then never happens.
- [[wiki/Red Team/Epistemic Exceptionalism|Epistemic Exceptionalism]] — the substantive interpretability work behind a safety lab's positioning, distinct from its rhetoric.
- [[journal/2026-07-07-the-workspace-a-language-model-thinks-in|The workspace a language model thinks in]] — the front-facing essay that tells this as one worked example.
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] — the operator-usable layer this borrows from, cognitive science rather than this paper's finding.

## Sources

- Anthropic, "Verbalizable Representations Form a Global Workspace in Language Models," [transformer-circuits.pub/2026/workspace](http://transformer-circuits.pub/2026/workspace/index.html) (2026-07-07). Plain-language companion: [anthropic.com/research/global-workspace](https://www.anthropic.com/research/global-workspace). Open-source methods and a [Neuronpedia](https://www.neuronpedia.org) demo on open-weights models.
- External commentary (published with the paper): Stanislas Dehaene and Lionel Naccache (cognitive neuroscience, originators of the Global Neuronal Workspace); Patrick Butlin, Derek Shiller, Dillon Plunkett, and Robert Long (Eleos AI Research, philosophy and AI moral status); Neel Nanda (Google DeepMind interpretability), including an independent replication on Qwen 3.6 27B.
- Cognitive-science grounding: Bernard Baars, *A Cognitive Theory of Consciousness* (1988); Stanislas Dehaene, global neuronal workspace; Ned Block, "On a Confusion about a Function of Consciousness" (1995), access versus phenomenal.

## Open Questions

- The paper reaches *access*, not experience. What evidence would move the phenomenal question at all, given that even proponents concede no current experiment settles it?
- The J-lens sees single-token concepts. How much of the real workspace is multi-token, and does the tool under- or over-count what is actually there?
- Reading the workspace is a second channel for alignment auditing. On which of my own agent workflows would reading deliberation, rather than reading output, actually change a call?
- The human parallel maps a *split*, not a mechanism. Where does leaning on the analogy start to mislead — capacity, recurrence, the absence of a monitor?
- If deliberate reasoning has a locatable, editable substrate, does steering it belong in the same category as prompting, or is it a different kind of intervention with different rules?
