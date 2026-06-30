---
type: concept
status: developing
created: 2026-05-16
updated: 2026-06-30
source-count: 1
tags:
  - design
  - affordances
  - signifiers
  - user-experience
  - human-centered-design
  - don-norman
---

# Design of Everyday Things

When a capable person fails at an everyday thing — pushes a door that pulls, leaves the stove burner that maps to no knob, gives up on a thermostat — the fault is in the design, and a small set of principles is what separates an object that explains itself from one that defeats its user. Don Norman's revised edition (Basic Books, 2013) names those principles, grounds them in how people actually perceive and act, and argues they outlast the technology they are applied to. The whole book turns one reflex — *the user is the problem* — into its opposite: difficulty is data about the design.

## The two questions every design must answer

Norman reduces good design to two properties a person must be able to satisfy on first contact:

- **Discoverability** — can I figure out what actions are possible, and where and how to perform them?
- **Understanding** — what does it all mean? What is this for, what do the controls do, what state is it in?

Discoverability is built from five of these principles — affordances, signifiers, constraints, mappings, feedback; understanding rests on the conceptual model. A simple object that needs an added instruction has already failed one of these. "When external signifiers — signs — have to be added to something as simple as a door, it indicates bad design."

## The core principles

**Affordance.** A relationship between an object's properties and the capabilities of the agent using it, which determines what action is possible. A chair affords sitting *for a person of roughly the right size*. Affordance is a relationship, not a property of the object alone, and it exists whether or not anyone notices it. The term is J.J. Gibson's; Norman's contribution is to separate it from its perception.

**Signifier.** A perceptible signal of where and how an action should be done. Norman introduces the word in this edition to repair his own overloaded first-edition use of "affordance": the flat plate that says *push*, the slot that says *insert card here*, the underline that says *link*. "Affordances determine what actions are possible. Signifiers communicate where the action should take place. We need both." For a designer, signifiers do the heavier work — the affordance can exist and still go undiscovered if nothing signifies it.

**Mapping.** The correspondence between controls and their effects. A *natural mapping* puts that relationship into physical space so no learning is required: stove knobs laid out in the pattern of the burners, the Mercedes seat-adjustment control shaped like a seat, a bank of light switches arranged like the lights they drive. A good natural mapping needs no labels; an arbitrary one guarantees error every time.

**Feedback.** Immediate, informative confirmation of the result of an action and the new state of the system. It must be fast — "even a delay of a tenth of a second can be disconcerting" — and it must be managed, because "poor feedback can be worse than no feedback at all." Back-channel overload is its own failure: when every alarm in a control room screams at once, operators silence all of them and miss the one that mattered.

**Conceptual model and the system image.** A conceptual model is a simplified explanation of how something works; it "doesn't have to be complete or even accurate as long as it is useful." Files and folders are a useful fiction; a refrigerator with two dials presented as if each controlled one compartment makes a trivial task impossible because the model is false. The designer never speaks to the user directly, so everything perceivable — the controls, the layout, the microcopy, the manual — has to carry the model: "the entire burden of communication is on the system image."

## How action works: seven stages and two gulfs

Norman models every use of a thing as a loop of seven stages — form a **goal**, then **plan**, **specify**, and **perform** an action; then **perceive** the result, **interpret** it, and **compare** it against the goal. Execution runs down the left side; evaluation runs back up the right. The design's job is to answer the seven questions a user implicitly asks ("What do I want? What can I do? How do I do it? Did it work?").

Two gaps are where designs fail:

- **The Gulf of Execution** — the distance between intention and the actions the system allows. Bridged by signifiers, constraints, mappings, and a clear conceptual model (the feed-*forward* that serves the doing).
- **The Gulf of Evaluation** — the distance between the system's state and the user's ability to tell what happened. Bridged by feedback and a conceptual model (which serves the interpreting).

The practical value: run any flow against the seven stages and the failing one is locatable. A user who "can't find how to do it" is stuck in execution; a user who "did something but can't tell what" is stuck in evaluation, and the two call for different fixes.

## Knowledge in the world vs. knowledge in the head

Precise behavior does not require precise knowledge, because information is split between memory and the environment. "The most effective way of helping people remember is to make it unnecessary" — put the cue in the world. People store only partial descriptions, enough to discriminate among the choices actually present; working memory holds roughly three to five items and is wiped by a single interruption. The tradeoff is explicit: knowledge in the world is easy to use but requires the cue to be present and perceived; knowledge in the head is fast and portable but costs learning and is fragile under load. Good design tilts the everyday case toward the world while leaving fast paths for experts.

## Constraints and forcing functions

Constraints narrow the action space toward the one correct move, and Norman names four classes — **physical** (the plug only fits one way), **cultural** (conventions learned socially), **semantic** (meaning of the situation: the rider faces forward, so the windshield goes in front), and **logical** (the one leftover part goes in the one empty hole). Stacked together — as on the Lego motorcycle he uses as the worked example — they make instructions unnecessary. A single feature can serve several roles at once: the holes in a pair of scissors are affordance, signifier, and constraint together.

**Forcing functions** are constraints applied to safety, in three flavors: **interlocks** force operations into sequence (the ATM returns your card before dispensing cash so you can't walk away without it; "save changes?" on exit); **lock-ins** keep an operation active so you can't end it prematurely; **lockouts** prevent entry into a dangerous state (the stairwell gate at the ground floor stops people fleeing a fire into the basement). The recurring caveat: a forcing function annoying enough to be defeated gets defeated, and then it is worse than useless.

## Human error is usually bad design

When Norman investigated the Three Mile Island accident, the operators were blamed for "human error"; the committee found a control room that made the errors all but inevitable. "In my experience, human error usually is a result of poor design: it should be called system error." Two corollaries:

- **Root-cause analysis continues past the person.** Keep asking *why* down the causal chain until it reaches the design or the system beneath the operator — the practice he draws from Toyota's repeated-why method.
- **The Swiss-cheese model.** Accidents come from many holes in many layers lining up, never one cause. So design against accidents on three levers: add layers, shrink each layer's holes, and alert people when several holes have already aligned.

A "conspiracy of silence" keeps these problems invisible: people who struggle assume they are at fault, hide it, and the widespread defect reads as personal incompetence. "If you have difficulties, remember, it's not your fault: it's bad design."

### Slips and mistakes need different cures

Error splits in two, and conflating them mis-aims the fix:

- **Slips** — the right goal, the wrong execution. They rise with skill, because experts run on autopilot. Norman names four design-relevant kinds: **capture** (a more-practiced sequence hijacks the intended one), **description-similarity** (the right action on the wrong, similar object), **mode errors** (the action was correct for a different mode the system is silently in — "mode error is really design error"), and **memory-lapse** slips (a step dropped after an interruption). Cures live in the design: differentiate similar controls, make modes loud and visible or eliminate them, and let interrupted steps be resumed.
- **Mistakes** — the wrong goal or plan, formed from a faulty model or the wrong rule. Cures are better feedback about state, clearer conceptual models, and guidance toward sensible plans.

### Designing for error

Assume error will happen and build for it. Norman's doctrine: add constraints to block the slip; make actions reversible, with **undo as the single most powerful tool**; make the unreversible hard to do by accident; let the system sensibility-check absurd input rather than meekly accepting it; and treat what the person enters as an approximation to be helped toward the intended result. "Never make people start over."

## Beyond usability: emotion and the whole experience

Usability is necessary and not sufficient. The full experience runs across three levels of processing — **visceral** (the immediate gut reaction, tied to perception and motor feel), **behavioral** (the feel of using it, tied to expectation and outcome), and **reflective** (the story you tell afterward, which often outweighs the reality). One bad moment at the end — a hostile checkout, a cryptic final error — can poison an otherwise good product's reflective verdict. "Attractive things work better": positive affect makes people more tolerant and more creative in working around minor trouble. Aesthetics and usability coexist: the prize-winning post-office doors with no visible hardware were beautiful *and* trapped his friend inside, and the corrective signifiers "need not destroy the aesthetics."

## Process: human-centered design

The design process is two diamonds. The first diverges to explore the problem and converges to define the *right* problem (discover, define); the second diverges to explore solutions and converges to deliver one (develop, deliver). Solving the right problem matters more than solving a problem well. Requirements come from observation: "requirements made in the abstract are invariably wrong… requirements are developed by watching people in their natural environment." The work iterates — observe, ideate, prototype, test — with as few as five users per round and a redesign between rounds. Two field truths anchor it: "most cases are 'special'… any system that does not allow for special cases will fail," and there is no average person, so flexible and adjustable beats optimized-for-the-mean.

**Activity-centered design** is the scaling move: build the conceptual model on the structure of the whole *activity*. "Design for activities and the result will be usable by everyone." The iPod won by supporting the entire activity of acquiring, organizing, and listening to music; the best isolated player would have lost.

## The business reality

Two forces bend designs away from these principles. **Featuritis** (creeping featurism) is the steady accretion of features — the Lego set that went from 15 pieces to 29 — because features get added and never removed, and because matching a competitor feature-for-feature converges every product toward sameness. **Legacy and habit** beat technically superior designs that demand relearning: QWERTY persists over the faster Dvorak layout because the switching cost exceeds the gain, and "standardization is indeed the fundamental principle of desperation" — a fallback used when no better solution is reachable, valuable because people learn the pattern once. Innovation is mostly incremental hill-climbing; radical leaps are rare, usually fail, and rarely come from asking users, who cannot request what does not yet exist. Norman closes on permanence: "our technologies may change, but the fundamental principles of interaction are permanent."

## The case against (and the boundaries)

- **The vocabulary needed repairing in its own lifetime.** The signifier concept exists because the first edition's "affordance" was misapplied to screens for two decades. The framework is sharpest on physical objects; on virtual surfaces it works only after the affordance/signifier split is held carefully.
- **"Make it discoverable and effortless" has exceptions Norman grants.** Security, games, and deliberate skill-building are cases where friction is the point; ease is the wrong goal there. A design that hides an action on purpose is defensible only when difficulty serves the user.
- **Standardization is a confessed last resort.** It locks in whatever was standardized, good or bad (QWERTY), and trades long-run optimality for learn-once familiarity.
- **Human-centered observation is slow, costly, and weak at radical novelty.** Watching people in context surfaces what to fix in things that exist; it rarely produces the leap to things that don't, since users describe their present world.
- **The model underdetermines aesthetics and business.** It tells you when a thing is usable and understandable, not whether it is beautiful, desirable, or viable to ship.

## How to use it

- Audit a thing against the two questions (discoverability, understanding) and the seven stages; name the stage that breaks.
- Read every difficulty as a signifier of where the design can improve, not as a user defect.
- For any control, check that something *signifies* the affordance, that the mapping is natural, and that acting on it returns feedback.
- For any risk, reach for constraints and forcing functions before instructions; for any irreversible action, reach for undo before a confirmation dialog.

## Related Pages

- [[wiki/Design/Design, Condensed|Design, Condensed]] — this book's doctrine compressed to one rule per line.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]] — these principles mapped onto web UI and the tsumugu reader and dictionary.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the working-memory limits behind knowledge-in-the-world.
- [[wiki/Minimalism/Environment Design|Environment Design]] — the same move (put the cue in the world) applied to rooms and defaults instead of devices.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — visible activity that bypasses the intended cognition, the learning analogue of a signifier with nothing behind it.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking]] — re-examining the assumptions baked into an interface.

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded edition (Basic Books, 2013). Chapters 1–7: psychopathology of everyday things, the psychology of everyday actions, knowledge in the head and the world, constraints and forcing functions, human error, design thinking, and design in the world of business.

## Open Questions

- Whether the core concepts — Affordances, Signifiers, the Seven Stages of Action, Constraints, Forcing Functions, Designing for Error — should each become their own owner page, split out from this overview.
