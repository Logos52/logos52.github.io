---
title: "Applied Critical Thinking - Testing Frames"
type: technique
status: developing
created: 2026-05-10
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 3
tags:
  - red-team
  - judgment
  - red-teaming
  - decision-making
  - critical-thinking
  - army
  - media-literacy
  - ai
---

# Applied Critical Thinking - Testing Frames

Applied Critical Thinking is a short pause between seeing a claim and accepting it. The pause lasts long enough to name the first coherent frame, and short enough that a decision still gets made. Doubt is useful when it produces a better judgment. Doubt that produces only hesitation, cynicism, or vibes is not useful.

The pause is for a media narrative, an institutional statement, an expert claim, a team plan, or a fluent model output that looks coherent enough to trust. Most of the time the pause is a fast filter. When the decision deserves more time, the pause gets more time.

## Core takeaways

- Applied Critical Thinking is a short pause between seeing a claim and accepting it. The pause ends with a decision.
- The point of the pause is to find the load-bearing assumption: the one thing that, if false, drops the recommendation.
- Three clocks set the depth: 30 seconds, 3 minutes, or 30 minutes. If the seven questions change nothing, a heavier tool probably will not help.
- Two fluent surfaces need the same test: a media frame and a model's output. Adopting the opposite of the media frame by reflex is reverse gullibility, and fluent model output is not checked output.
- The common failure is premature coherence: a story that fits together gets treated as a story that is true.
- Rational empathy keeps the pause from becoming contrarianism. It means reconstructing the other position well enough to keep what is valid in it.

## How much time to spend

There are two risks. If the pause is too short, a bad frame gets accepted. If the pause is too long, analysis becomes delay, and [[wiki/Decision Making/Decisional Delays|Decisional Delays]] names the cost of that delay. The standard is not "think as much as possible." The standard is: think enough to find the **load-bearing assumption**, the one thing that, if false, drops the recommendation. Most situations do not need a full [[wiki/Red Team/Red Teaming|Red Teaming]] process. They need a short interruption. If the method is too slow, people will not use it. If the method is too shallow, it becomes vibes. The skill is choosing the depth.

| Speed | What happens |
|---|---|
| 30 seconds | Name the frame and the main assumption |
| 3 minutes | Evidence shown, what was omitted, one alternative, what would change the interpretation |
| 30 minutes | Write the frame, the assumptions, the most likely failure path, a few serious alternatives, the decision rule |

The three times are house times. They were not taken from a trial. They are the invented, usable part of the method.

## The seven questions

There is one table of questions, not three. Use as many of the questions as the chosen time allows.

| Ask | To find |
|---|---|
| What is the actual claim | What belief is being sold |
| What frame is being used | The interpretation sold as if it were the event |
| What must be true | The load-bearing assumption |
| What evidence would matter | What is shown, and what is missing |
| What is being refused | The omission that would change the reading |
| What would make this fail | The most likely failure path |
| What would change the recommendation | The stop rule |

The 30-minute row is those seven questions answered in writing: name the claim, name the frame, surface the assumptions, check what evidence matters, generate a few serious alternatives, name the most likely failure path, and name what would change the recommendation. If those seven questions do not change anything, a heavier tool probably will not help either.

## Testing a media frame

Mainstream media can be wrong for ordinary reasons: speed, incentives, ideological capture, activist framing, poor sourcing, selective omission, and institutional self-protection. That is a list of reasons. It is not a verdict on "the media." Test the media frame without automatically adopting its opposite. Adopting the opposite automatically is reverse gullibility.

Separate six things: the event, the evidence, the interpretation, the emotional language, the omitted context, and the conclusion being pushed. Six questions go with those. They are a pool to choose from, not a required six. What happened. What is being asked. What language is doing emotional work; [[wiki/Red Team/The Twitter Test|The Twitter Test]] covers that at the level of single words. What comparison is missing. Who benefits. What would be expected if the opposite frame were closer to the truth.

## Testing a model's output

AI output is persuasive because it is fluent. A model can be organized, calm, and confident while its output is generic, incomplete, or wrong for the context. Six questions go with this too, again a pool and not a required six: what the model assumed; whether the output is specific or boilerplate; what source or constraint is missing; what would break; what to verify; what opposing view is absent. A person's judgment decides, not the model's fluency. For that reason this filter belongs inside [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] as a fast review loop, not as a second catalog of questions.

## Why a plan that fits together can still be wrong

The reason to think at all is to find the load-bearing assumption. A plan can be logical and still be wrong. The failure is often not stupidity. It is **premature coherence**: treating a story that fits together as a story that is true. People settle on a story for these reasons: the story feels clean; it matches prior experience; it protects status, tempo, or ideology; the headline feels obvious; the model is fluent; the briefing sounds professional; the team has spent too much to reopen the question.

Seven pairs get confused. In each pair, the first thing is not the second thing.

- confidence and evidence
- consensus and truth
- a complete plan and a tested plan
- prestige and reliability
- fluency and understanding
- more analysis and better judgment
- an early preferred answer and a protected one

## Where the pause is used

In Red Teaming, the pause tests plans, assumptions, group narratives, and preferred courses of action before they become fixed. The pause stays fast. It does not become a catalog of old tools. The parent cluster is [[wiki/Decision Making/Decision Making|Decision Making]]. Judging a decision by its process instead of its outcome is covered on [[wiki/Decision Making/Judging a Decision by Its Process|Good Decisions]].

Before a decision, ask: is the decision clearly stated; are the options real; is the choice being made because the process is good or because the people in the room are tired; what is the cost of waiting; what is the cost of moving now. Too many options used as a form of delay is covered on [[wiki/Decision Making/Choice Throttling|Choice Throttling]].

During planning, look for: the heaviest assumption; the brittle condition; the other actor; the underestimated incentive; the part of the plan that needs people to behave ideally.

During learning, ask: whether thinking happened or only a correct-looking artifact was produced; whether the map shows relationships; whether the structure can be explained; what retrieval would expose; what shortcut was taken. Those questions connect to three learning pages: [[wiki/Dimensions/Self-Regulation/The Technique Is Only as Good as the Thinking It Produces|The Technique Is Only as Good as the Thinking It Produces]], [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]], and [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]. Bear Hunter System covers encoding that is thinking rather than an artifact. Spaced Interleaved Retrieval covers what retrieval would expose. [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] explains why the first coherent path wins.

## Ways the pause fails

The pause replaces three habits: passive acceptance, tool theater (running a named method for show), and analysis avoidance (asking more questions in order to avoid acting). Of the three, analysis avoidance is the distinctive one. The test is one question: did the thinking improve the decision, or only postpone it?

| Failure | What it looks like | Correction |
|---|---|---|
| Endless questioning | More confused, not wiser | Stop at the load-bearing assumption |
| Contrarian identity | Taking the opposite of the room's view by default | Reconstruct the valid part first |
| Tool dependence | Waiting for a named method | The 30-second row is enough |
| AI outsourcing | Fluent output treated as checked | Fluency is not accuracy |
| Media inversion | The opposite frame adopted automatically | Reverse gullibility |
| Activist capture | One preferred answer protected early | Name what would change the recommendation |
| Black-swan fixation | An exotic failure crowding out the likely one | Most likely failure path first |

## Keeping what is valid in the other side

**Rational empathy** means reconstructing the other position well enough to keep what is valid in it, without agreeing and without giving in. When a disagreement is about to become a reflex, ask: what is the strongest version of their case; what would have to be true; what part of it survives if the rest is dropped; what would change *this* side's mind; what is being protected. The communication layer for this is [[wiki/Concepts/How to Communicate Truth Into Someone Else's Frame|How to Communicate Truth Into Someone Else's Frame]]. Applied Critical Thinking without rational empathy turns into brittle contrarianism. Rational empathy without Applied Critical Thinking turns into [[wiki/Concepts/Suicidal Empathy|Suicidal Empathy]].

## The other three Red Team principles

The pause depends on the other three Red Team principles. Without [[wiki/Red Team/Red Teaming#Self-Awareness and Reflection|self-awareness]], the pause turns into projection. Without [[wiki/Red Team/Red Teaming#Groupthink Mitigation and Decision Support|groupthink mitigation]], social pressure suppresses the pause. Without [[wiki/Red Team/Red Teaming#Fostering Cultural Empathy|cultural empathy]], the original frame is the only frame available. Those three principles are described on the Red Teaming hub.

## Signs it is working, and when to stop

A pause that works turns a vague concern into a specific assumption, risk, alternative, or rule. Good signs: a clearer decision, a visible key assumption, a named alternative, a concrete failure path, known evidence, and an endpoint. Bad signs: the person is more confused and not wiser; abstract concerns get repeated; the process protects delay; the critique is performed for show; no one can say what changed.

The method can become an identity, a delay, or a catalog. A 30-second pause costs almost nothing. A 30-minute pause is a real meeting. Quit when the questions do not change anything, or when the thinking only postponed the decision. That is checkable: the decision moved, or it did not.

The pause should make action cleaner. It should not make action impossible. A clean story is still reached. The decision is still made.

## How to practice this

1. When a claim arrives, pick one of the three clocks: 30 seconds, 3 minutes, or 30 minutes. Notice whether the decision deserves the longer time or whether a short interruption is enough.
2. In the 30-second version, name the frame and the main assumption. Notice the one assumption that, if false, drops the recommendation.
3. In the 3-minute version, list the evidence shown and what was left out. Name one alternative and what would change the interpretation. Notice whether the omission changes how you read the claim.
4. In the 30-minute version, write the frame, the assumptions, and the most likely failure path. Add a few serious alternatives and the decision rule. Notice whether the writing changed the decision or only delayed it.
5. When you are about to disagree by reflex, write the strongest version of the other case. Notice which part of it survives if the rest is dropped.
6. Stop when the next question would not change anything. Notice whether the decision moved or stayed where it was.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: fast review loops over fluent model output
- [[wiki/Decision Making/Decision Making|Decision Making]]: parent decision cluster
- [[wiki/Decision Making/Judging a Decision by Its Process|Good Decisions]]: process over outcomes
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: why the first coherent path wins
- [[wiki/Red Team/Red Teaming|Red Teaming]]: the hub; Applied Critical Thinking is its operational filter
- [[wiki/Decision Making/Decisional Delays|Decisional Delays]]: cost of waiting versus cost of more analysis
- [[wiki/Concepts/Five Thinking Habits - Conclusion First|Five Thinking Habits - Conclusion First]]: the spoken forms: play the question back, say what would change the decision
- [[wiki/Decision Making/Choice Throttling|Choice Throttling]]: too many options as delay
- [[wiki/Dimensions/Self-Regulation/The Technique Is Only as Good as the Thinking It Produces|The Technique Is Only as Good as the Thinking It Produces]]: learning-use case
- [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]]: encoding that is thinking, not artifact
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]: what retrieval would expose
- [[wiki/Concepts/How to Communicate Truth Into Someone Else's Frame|How to Communicate Truth Into Someone Else's Frame]]: rational-empathy layer
- [[wiki/Concepts/Suicidal Empathy|Suicidal Empathy]]: empathy without Applied Critical Thinking
- [[wiki/Red Team/The Twitter Test|The Twitter Test]]: what language is doing emotional work

## Open questions

- The smallest personal-decision exercise that still trains the pause.
- How to run a model premortem without the 30-minute row growing into a second meeting.
- Whether a weekly review on frame, assumption, shortcut, and decision quality is enough to keep the filter in use.

## Sources

- TRADOC G-2 / UFMCS. *The Red Team Handbook*, v9.0. Public release, distribution unlimited. Applied-critical-thinking principle: challenge the frame before adopting it.
- Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. *Review of General Psychology*. The first coherent frame stays in place once adopted.
- Alter, A. L., & Oppenheimer, D. M. (2009). Uniting the tribes of fluency to form a metacognitive nation. *Personality and Social Psychology Review*. Fluency is mistaken for accuracy.
