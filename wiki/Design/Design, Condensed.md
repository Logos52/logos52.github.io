---
type: condensed
status: developing
description: "The design material stated as doctrine: a person's difficulty is information about the design, needed knowledge should be put in the world, error is a sign of bad design, defaults determine behavior, color is used for function before decoration, owning fewer things is a design act, and good design is found by asking what can be removed."
created: 2026-06-30
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - design
  - human-centered-design
  - affordances
  - signifiers
  - condensed
---

# Design, Condensed

When a capable person fails at an everyday thing, the design is at fault. The whole discipline follows from this reversal of blame: a user who struggles is showing a defect in the design. Good design goes unnoticed because it fits how people perceive and act. Bad design makes its faults obvious, and the person using it gets the blame. Quality depends on two questions: can I discover what to do, and can I understand what it means. The answers come from affordances made perceptible through signifiers, from mappings that show in the world which control produces which effect, from feedback that tells the person what each action did, and from a conceptual model that the system image communicates in full. Put what people need to know into the world so they do not have to remember it. Narrow the possible actions with constraints and forcing functions. Assume people will make errors and make every action reversible, because an error that recurs shows a fault in the design. On screens the object has no physical affordances, so the front-end has to supply every cue, and what is rendered on the screen is the entire system image. The same discipline applies outside the interface. Choice architecture shapes behavior through defaults and friction before any persuasion begins. Color is used for function first and for decoration second. The objects a person keeps are part of the designed environment, so owning fewer, better things is a design act. Good design is recognized by removal: ask what can be taken away rather than what can be added. Specific examples go out of date. The psychology of people does not change, so the principles stay valid after the technology changes.

---

## 1. The thesis

- **When a capable person fails, blame the design.** A capable user who fails at an everyday thing is evidence that the design is faulty: when someone cannot work a door, the door is what failed ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Good design is hard to notice.** Good quality shows up as a lack of friction, so it is harder to notice than failures, which are obvious ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Treat difficulty as information about the design.** Treat every struggle as a sign of where the design can improve, never as a defect in the user ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Two questions decide quality:** can the user discover what actions are possible, and can the user understand what they mean ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **A design can be both beautiful and usable.** Cues that help people use a thing can be added without ruining how it looks. Making a thing look better by removing its signifiers is the invisible-hinge failure ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 2. The principles of discovery

- **An affordance is a relationship between an object and an agent, not a property of the object.** What an object allows an agent to do exists whether or not anyone perceives it ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **The signifier is the perceptible cue, and for designers it matters more than the affordance.** If nothing signals a possible action, people do not discover it ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **On screens, the design depends entirely on signifiers.** A digital object has no physical affordance, so its appearance and state must provide every cue. If a control needs a tooltip to be understood, its signifier has failed ([[wiki/Design/Front-End Web Design|Front-End Web Design]]).
- **Natural mapping arranges controls in space so their layout shows which effect each control has,** which greatly reduces what people would otherwise have to remember ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Feedback is immediate, informative, prioritized, and unobtrusive.** It arrives within ~0.1s. Poor feedback, or too much feedback, is worse than none ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **The system image has to communicate the conceptual model.** The designer never talks to the user directly, so everything the user can perceive has to do all of the communicating ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 3. Action: seven stages, two gulfs

- **Check a flow where users get stuck against the seven stages to find the stage that fails.** Goal, plan, specify, perform, perceive, interpret, compare ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Reduce the Gulf of Execution with feedforward:** signifiers, constraints, mappings, defaults, a clear model ([[wiki/Design/Front-End Web Design|Front-End Web Design]]).
- **Reduce the Gulf of Evaluation with feedback:** visible status, confirmation, results compared with the goal ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 4. Knowledge in the world

- **Put the cue in the world so people do not have to remember it.** Recognition is easier than recall, so show the options instead of requiring people to remember them ([[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]).
- **Working memory holds three to five items, and a single interruption can erase it,** so break long values into chunks and split long steps into shorter ones ([[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]).
- **Never let needed information disappear at the moment it is needed**: a code, a half-typed form, or a result must still be there after the user navigates away or something fails ([[wiki/Design/Front-End Web Design|Front-End Web Design]]).
- **Put the cue in the environment.** Putting the right thing where the user can see it on a device is the same method as arranging a room so that the right action is the default ([[wiki/Minimalism/Environment Design|Environment Design]]).

## 5. Constraints and forcing functions

- **Four kinds of constraint reduce the possible actions to the one right action:** physical, cultural, semantic, logical. When enough of them are combined, instructions are no longer needed ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Forcing functions make the dangerous action impossible through the structure of the design**: interlocks make the steps happen in the required order, lock-ins keep an operation from being stopped, and lockouts prevent the action ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **People work around a safeguard that annoys them enough,** so limit the friction to the one risky step ([[wiki/Design/Front-End Web Design|Front-End Web Design]]).
- **Standardize when no better solution exists,** so people learn the pattern once and use it everywhere ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 6. Error is bad design

- **An error that recurs shows a fault in the design; keep asking why after you reach the human who made the error.** "It should be called system error" ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Accidents happen when the holes in several layers of safeguards line up, rather than from one cause (Swiss cheese):** add layers, make the holes in each layer smaller, and alert people when several holes have lined up ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Slips and mistakes need different fixes.** A slip (right goal, wrong execution) needs distinct controls, visible modes, and steps that can be resumed. A mistake (wrong goal) needs clearer state and clearer models ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Assume people will make errors and make each error reversible. Undo is the strongest tool;** run sensibility checks on absurd input, and never make people start over ([[wiki/Design/Front-End Web Design|Front-End Web Design]]).
- **Get the first attempt right.** An error costs far more than the careful step that would have prevented it, so accuracy comes before speed, both in designing a thing and in doing a task ([[wiki/Concepts/Accuracy Before Speed|Accuracy Before Speed]]).

## 7. Beyond usability

- **Design the visceral, behavioral, and reflective levels together;** one bad ending can make people remember an otherwise good product as bad ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Attractive things work better,** because positive affect makes people more tolerant and more creative when minor problems come up ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 8. Process and the long term

- **Find the right problem before solving it well**: diverge and then converge, twice, which is the double diamond ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Get requirements by watching people in context,** not by asking them or by theorizing. Most cases are special cases, and a system that does not allow special cases fails ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Design for the activity, and the result works for everyone;** there is no average person, so prefer designs that are flexible and adjustable ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Products tend to keep adding features (featuritis); protect the product's coherence.** When a product copies a competitor's features one by one, every product ends up the same ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **Existing systems and habits win over a better design that requires people to relearn,** as QWERTY has stayed in use over the faster Dvorak ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).
- **The principles stay valid longer than the technology.** Devices change. The psychology of how people interact with them does not ([[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]).

## 9. Choice architecture: the nudge layer

- **The default is the most powerful decision a designer makes,** because most people keep the default; whoever sets it has made the choice for most people (Thaler & Sunstein, *Nudge*, owner page owed).
- **Friction changes behavior.** Making the good action one step easier and the harmful action one step harder changes what people do without removing any choice. The same method used against the user is the dark pattern (Thaler & Sunstein, *Nudge*, owner page owed).
- **Salience has to be allocated on purpose.** People choose what they can see. For most users, hiding an option has the same effect as removing it, so a designer should use that power deliberately (Thaler & Sunstein, *Nudge*, owner page owed).
- **Nudges must be transparent.** A nudge that the user would object to after finding out about it is manipulation presented as design. The test is whether the person affected by the choice architecture would still accept it after it is explained to them (Thaler & Sunstein, *Nudge*, owner page owed).
- **The environment version is already an established position in this knowledge base:** the arrangement of a room prompts the action and sets the default before willpower is involved ([[wiki/Minimalism/Environment Design|Environment Design]]).

## 10. Color

- **Use color for function first and decoration second.** Showing state, grouping, and hierarchy comes first. A palette used only for decoration wastes color as a way to carry information (model-sourced, owner page owed).
- **Contrast is essential.** Whether text and controls can be used depends on figure-ground separation, meaning how clearly they stand out from the background. Low-contrast interfaces fail the users who have the least margin to cope with it. Contrast standards exist, and a design can be checked against them (model-sourced, owner page owed).
- **Never use color as the only way to show a meaning.** Roughly one in twelve men has trouble telling red from green, so every meaning shown by color also needs a second signal: shape, position, or label (model-sourced, owner page owed).
- **Use few hues and more shades of each.** A palette of one or two hues in a range of tones looks deliberately designed. Many hues at equal weight look disordered. The 60-30-10 split (dominant, secondary, accent) is the standard starting ratio (model-sourced, owner page owed).
- **Keep each color's meaning consistent.** A color that means "danger" in one screen cannot mean "featured" in the next. Treat the palette as a small set of fixed meanings (model-sourced, owner page owed).

## 11. Owning things is design

- **Every object a person keeps costs ongoing attention, space, and maintenance**: a room is an interface, and clutter is the room's form of featuritis ([[wiki/Minimalism/Ownership Cost|Ownership Cost]], [[wiki/Minimalism/Minimalism as Systems Design|Minimalism as Systems Design]]).
- **Discarding is a skill that follows rules and does not depend on mood.** The signs that an object should go: it is kept for "someday," kept from guilt, kept in duplicate, or kept unused for a year. In each case the person keeps the object for a reason other than using it (Fumio Sasaki, *Goodbye, Things*, owner page owed).
- **Possessions tell other people something about the owner.** Possessions express the owner's self-image, so choosing which ones to keep is a way of designing what they express. A smaller number of objects that fit the person expresses more (Fumio Sasaki, *Goodbye, Things*, owner page owed; [[wiki/Minimalism/Wanting Less|Wanting Less]]).
- **Choose products by the standards a designer would use to defend them:** one clear job, honest materials, signifiers intact, repairable, and still wanted after the novelty is gone. Before buying, check the product against the discard rules above (Sasaki + Rams, synthesized, owner page owed).

## 12. Finding good design

- **Focus means saying no.** Say no a thousand times for every yes. The work is deciding what the product will not do, and featuritis is what happens when the people making a product keep saying yes (Jobs, via the Cook interview in raw/processed, owner page owed).
- **Simplicity comes from working through complexity, not from leaving things out.** Making something simple is hard work that the designer does so that the user does not have to. A thing made simple by leaving parts out is only missing a feature (Jobs, owner page owed).
- **Design is how it works.** Appearance is the last part of a design and does not define it. A beautiful thing that works badly is bad design with a good-looking surface (Jobs, owner page owed).
- **Rams' test can be stated in one line: good design is as little design as possible.** Good design is useful, understandable, honest, long-lasting, and unobtrusive. The fastest way to check any object is to ask what could be removed without losing anything (Dieter Rams, ten principles, owner page owed).
- **Taste can be trained like any skill:** study objects that are still in use after decades, name the things those objects do not do, and ask the removal question until you ask it automatically. This is the design version of comparing yourself to standards instead of to a small local group ([[wiki/Dimensions/Mindset/Loss Aversion|Loss Aversion]] on comparison; Rams/Jobs, owner page owed).

---

*Tension resolved: making actions discoverable and making actions deliberately difficult are opposing goals. In security, games, and learning, the friction is intended, so hiding an affordance is justified only when the difficulty helps the user, and even then the user needs a discoverable way in. [[wiki/Design/Front-End Web Design|Front-End Web Design]] covers how this conflict is handled in practice, along with the cross-surface costs and the accessibility costs. A signifier with no real function behind it is the design equivalent of [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: visible activity that skips the real cognition.*

*Second tension resolved: sections 9 and 11 overlap [[wiki/Minimalism/Minimalism, Condensed|Minimalism, Condensed]] on purpose (Wedge, 2026-07-03: the overlap is acceptable). The split: the Minimalism page covers the costs, meaning what owning things costs and why owning less is worth it. Design, Condensed covers the design side: the room as an interface, checking a purchase against the discard rules, and defaults and cues as the way behavior is shaped. Both pages cover the same doctrine from two points of view, and each page links to the other.*

*Source status (2026-07-03): sections 1–8 are based on published owner pages. Sections 9–12 were added at Wedge's direction from external sources and model knowledge: Thaler & Sunstein's* Nudge, *Fumio Sasaki's* Goodbye, Things, *Dieter Rams' ten principles, and the Jobs/Cook material (transcript in raw/processed). Their lines are marked "owner page owed." In the condensed genre these are flagged gaps and are not settled doctrine. Each new section needs its owner page before the no-new-claims rule for Design, Condensed applies again.*

*Omitted deliberately: the emotional side of the three levels of processing, which has its own book and is covered here only as a preview. Still needed before the doctrine is complete: dedicated pages for Affordances, Signifiers, Norman Doors, the Seven Stages of Action, Constraints, Forcing Functions, Designing for Error, Human-Centered Design, and Featuritis, each of which is currently covered inside [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]. New owner pages are also needed for Choice Architecture, Color in Interfaces, Discard Rules (Sasaki), and Focus & Simplicity (Rams/Jobs).*
