---
type: system
status: developing
created: 2026-05-08
updated: 2026-06-12
tags:
  - system
  - writing
  - llm-wiki
---

# Writing Standards

**Authority (set 2026-06-11; May standard deleted 2026-06-12).** For wiki pages, **High-Signal Wiki Pages**. For decision documents, **High-Signal Decision Writing**. For domain-compression pages, **Condensed Pages**. For front-facing surfaces on any project, **High-Signal Front-Facing Pages**. These four sections are the complete standard. The earlier May rules are deleted — do not cite them; they live only in git history (bd5adc9).

## High-Signal Decision Writing

This section governs documents that argue for a decision — PRDs, proposals, decision notes, journal entries that weigh options, project post-mortems, and memos. It applies across all projects (llm-knowledge-base, cos, tsumugu, wnac, and future repos), not just this vault. Added 2026-06-11 after the Living Atlas A/B engine decision; the examples below come from that discussion.

### Verdict First

State the recommendation in the first two sentences, then spend the document earning it. The reader should never reach the verdict by scrolling.

Weak:

```text
There are several factors to consider when choosing between the two engines...
```

Strong:

```text
Recommendation: A. The hard part of this project is faithfully rendering the vault, and A is the only option where that layer isn't our problem.
```

### Measure Before Asserting

Any claim that can carry a measurement gets one — from the actual system, not from intuition. If the measurement is cheap, take it before writing the sentence. Adjectives are what you use when you haven't measured.

Weak:

```text
The current bundle is heavy and the content index is large.
```

Strong:

```text
Every page parses a 700KB bundle; the content index is 1.3MB and growing linearly. The vault carries 2,478 wikilinks across 275 files — that's the porting surface.
```

### Steelman What You Reject

Before the verdict closes, give the rejected option its strongest honest case — strong enough that someone who prefers it would recognize their own argument. Then state explicitly what evidence or change of goal would flip the decision. A document that can't name its flip condition hasn't finished deciding.

```text
What would flip me to B: typed content collections enforce the schema at build time, and if the five-year vision is one integrated platform rather than a published vault, B is the right call today.
```

### Price Your Own Recommendation

Every recommendation carries its cost in the same breath. A recommendation with no stated cost reads as either unexamined or sold.

```text
Recommendation: A — accepting that upstream updates may conflict with our modified graph script, and that schema enforcement stays a lint script instead of a compile-time guarantee.
```

### Define the Comparison Before Arguing It

Most stalled decisions are mislabeled. Before weighing options, state what is actually being compared — often it differs from the surface framing. One reframe sentence early saves paragraphs of confused argument.

```text
A vs B isn't Quartz vs Astro as frameworks. It's an existing vault-publishing engine with a custom skin vs a general framework plus a vault-publishing layer we build and own forever.
```

### Weigh the Cost of Being Wrong

When options converge on outcome, decide on reversibility: what does retreat cost from each branch? State the asymmetry explicitly. (This is [[wiki/Decision Making/Positional Decisions and Expected Value|Positional Decisions]] applied to prose.)

```text
Choose A and outgrow it: the content is portable, the design transfers, we migrate having lost little. Choose B and hit the plumbing tax: months in before any visible work ships. When the edge isn't decisive, the reversible branch wins.
```

### Checkable Claims

Success criteria, acceptance tests, and promised outcomes must be falsifiable — phrased so a reader could verify them without asking what was meant.

Weak:

```text
The site should feel faster and links should work well.
```

Strong:

```text
Zero new broken internal links versus the baseline build; first visit in a clean profile renders dark; the home graph shows ≤30 nodes with 6 labeled hubs.
```

### Delete List

Cut these on revision; each is a hedge or an intensifier doing no work: "honestly," "genuinely," "quite," "very," "really," "it's worth noting," "importantly," "arguably," "probably" (unless probability is the actual content — then give the number or the condition instead), "I think" in documents (the document is what you think).

## High-Signal Wiki Pages

Added 2026-06-11 as the primary bar for wiki pages; the decision-writing disciplines above translate into the concept-page genre. Wedge's directive: ironclad, not advisory.

Not every page needs all eight. Small concept notes need Thesis First, Specifics, and Boundaries. Technique, system, and workflow pages need all eight — they recommend actions, so they owe the reader the full honesty kit. Hub and model pages need Thesis, Case Against, and Checkable Use.

### Thesis First

The first sentence is the page's operating claim — stricter than mechanism-first: not just "open with a mechanism," but "open with *the* claim the page exists to make."

### Specifics Over Adjectives

Any claim that can carry a number, a named instance, or a worked example gets one. Adjectives are what a page uses when it hasn't done the work.

The specifics must be **operative** — they change what the reader does. Cost ratios, time horizons, thresholds, and worked examples qualify. Program statistics, cohort sizes, and testimonial numbers are decoration: they argue that a source is credible instead of teaching the technique, and they belong nowhere on a technique page. ("One error costs ~4x" is signal; "across 5,000 learners" is provenance.)

Weak:

```text
Errors are costly, so accuracy should come first.
```

Strong:

```text
One error costs roughly 4x the time of doing the step right — you already work near your maximum quality speed, so speed gains come from changing the process, never from rushing.
```

### The Case Against

Every model and technique page names the strongest honest case against itself: where it fails, who shouldn't use it, what it costs to believe. A page that cannot argue against itself is advertising.

```text
The model's seams are real: metacognition straddles two dimensions, and the Self-Management/Self-Regulation boundary takes deliberate effort to hold. The taxonomy earns its keep as a diagnostic, not as a claim about how the brain is organized.
```

### Price the Method

Benefit and cost in the same breath. Time, setup, cognitive load, maintenance — whatever the method actually charges.

```text
WPW produces multi-level integration; it costs a full explanation cycle — twenty minutes or more per topic — which is why it belongs on high-value material, not vocabulary lists.
```

### Boundaries After Definition

Distinguish the concept from its neighbours only after the positive definition has landed. Contrast is a supporting move, never the lead: a definition never opens with what the thing is not ("not X, but Y" puts the discarded idea in the reader's head first), and the positive claim stands before any boundary is drawn.

### Quit Signals

State what evidence means the method isn't working for this reader, and the next move. A technique without a quit signal traps people in sunk-cost practice.

```text
If two weeks of dimension-diagnosis hasn't changed what you do in the next session, stop diagnosing and study; return to the model when you hit a plateau you can't name.
```

### Checkable Expectations

Promised effects must be falsifiable by the reader: "you should notice X within N sessions," never "this improves learning."

Weak:

```text
Spaced retrieval dramatically improves retention.
```

Strong:

```text
Spacing should show up as easier re-entry within two sessions: the second retrieval of an item feels harder to start but finishes faster.
```

### No Scaffolding

The page never talks about itself. Convention explainers ("every line below links to…"), navigation chatter ("see the sections below"), format announcements, and source commentary are scaffolding — the reader discovers visible conventions by looking at them. If a convention is genuinely opaque, that is a design problem in the convention, not a case for a decoder note.

### Delete List

The decision-writing delete list applies verbatim: "honestly," "genuinely," "quite," "very," "really," "it's worth noting," "importantly," "arguably," and importance-announcing in all forms.

## Condensed Pages

A third genre (added 2026-06-11, modeled on the private ICS-CONDENSED and OUTLIER-CONDENSED references): one page that compresses an entire domain of the wiki into doctrine. The format, exactly:

- **A bold one-paragraph total compression** at the top — the whole domain in 5–8 sentences. If the paragraph fails, the page fails.
- **Numbered doctrine sections.** Each line is one rule: bolded operative lead, the mechanism in a clause, and a wikilink citation to the page that owns the full treatment. One to three lines per rule, never more.
- **Tensions resolved explicitly.** Where two pages pull different directions, the condensed page states the reconciliation in one line rather than hiding the conflict.
- **An omissions note** at the end: what was deliberately left out and where it lives.

Source discipline: public condensed pages compress **wiki pages only** — every line must trace to a published page via its citation link. Private course corpora are never condensed publicly; that is what the raw/private references are for. The condensed page adds no new claims: a doctrine that lacks an owner page is a gap to flag, not a line to write.

The exemplars supply the **form, never the content**. The thesis paragraph is derived from the wiki's own pages, in the wiki's own framing — and any line that echoes a private exemplar's phrasing must re-trace to a public owner before it ships. (Established the hard way, 2026-06-11: "learning quality is decided at encoding, never at review" was imported from a course condensation and contradicts the wiki's own Retrieval page, which holds that recall itself builds learning. The wiki's framing wins over any source's polemic.)

Form transfers need the same scrutiny as content: each structural slot in an exemplar must justify its **function** in the new context before it is copied. (Same day's second lesson: ICS-CONDENSED's citation-decoder line earns its place because "Camp I 209" is opaque; the public version's wikilinks are self-explanatory, so the copied explainer line was scaffolding and got deleted.)

For fast-moving domains (agentic engineering is today's case): split the doctrine into **invariants** — rules expected to survive the underlying technology becoming far more capable — and **dated tactics**, stamped with their write date and expected to rot. The invariants are the page; the tactics section is honest about its half-life. A condensed page that mixes the two rots wholesale the first time the ground shifts.

The genre's test: a reader who knows the domain should nod once per line; a reader who doesn't should be able to click any line and land on the page that teaches it.

## High-Signal Front-Facing Pages

Added 2026-06-12, after the KB hero-line strikes; replaces the deleted May Front-Facing Voice section. Governs every front-facing surface on every project — heroes, sub-lines, about pages, badges, buttons, nav labels, meta descriptions, og tags. The register authority is the Tsumugu register rounds (`tsumugu/PRD-Entry-Authoring.md` §0.5–0.6); the accepted exemplars are the Tsumugu B2 front page ("A Chinese dictionary built on form and story") and the KB hero sub-line ("Each page explains one idea in enough detail to use it, and links to the ideas it depends on"), both 2026-06-12.

The single test: read the line and ask what it wants from the reader. The only passing answer is nothing.

### The Page Wants Nothing

Front-facing copy transfers facts; it never works to cause a feeling — excitement, trust, admiration, reassurance, urgency. Selling is banned in chrome as in prose: badges, buttons, and labels sell the same way sentences do (the 免費·FREE badges died under this rule). Cost, coverage, and status may be stated where they are facts the reader needs, in the same voice as every other fact.

### No Posing

The writing never performs — not confidence, not humility, not transparency, not calm. Authorship talk, process talk, and ownership claims are posing regardless of subject ("Maintained in the open, partly by LLM agents — the thinking stays mine" is the canonical strike: a boast wearing a defense). The attitude is the disease; the topic is irrelevant.

### Complete Sentences, One Fact Each

Every sentence is complete and carries one load-bearing fact, stated once, in concrete words — never telegraphic. Taglines, fragments, triads, anaphora, em-dash punchlines, and balanced pairs are cadence devices: selling by rhythm. A line shaped to sound finished has substituted shape for substance.

Em dashes are cut from front-facing prose entirely (Wedge, 2026-06-12). The dash is the punchline's engine; commas, colons, and full stops carry the same facts without the beat.

### Specific Beats Generic

A true line that could sit on any site is dead copy — especially the first sentence a reader sees. "A Chinese dictionary built on form and story" describes exactly one dictionary; "each page explains one idea in enough detail to use it" describes every wiki ever pitched, and was struck for it (2026-06-12). Specific and true beats correct and generic. The test: move the line onto a stranger's site; if it still fits, it isn't finished.

### Details, Not Conclusions

Give concrete details and stop; the reader concludes. No mood labels, no instruction verbs, no interpretive paraphrase after the details (PRD-Entry-Authoring §0.6, moves 1–3 and 8, applied beyond the dictionary). A line that hands the reader its own conclusion has assumed the reader couldn't reach it.

### Say Nothing the Screen Shows

No navigation chatter, no device commentary, no narrating visible features (§0.6 moves 5–6; the No Scaffolding rule applied to chrome). The map, the search box, and the layout introduce themselves.

### True Against the System

Every front-facing claim must be checkable against the actual system, and checked before it ships. A calm, well-shaped sentence asserting behavior the system doesn't have is struck regardless of how it reads (the open-questions line, struck 2026-06-12). Live numbers come from the build, never from copy.

### Taglines Are Catalog Lines

A tagline or hero sub-line is a catalog line: a container noun plus topics, the way a library card or book subtitle reads. "Linked notes on learning systems, language study, and software work with LLM agents" (the KB hero, accepted 2026-06-12 after roughly a dozen struck attempts). A noun phrase predicates nothing, so it cannot sell, brag, hedge, or grade — every predicated alternative (mechanism claims, anatomy labels, state reports, provenance facts, date trivia) was struck on the way here.

The rules the strikes produced, all binding:

- **The attitude rides in the genre noun, never in attitude words.** "Notes," "a collection," "a vault," "a growing set" carry the work-in-progress posture by what they are. Never state the posture ("still open," "in progress as a whole," "some of it has settled") — that is hedging, which is self-regard pointed downward.
- **Topics in reader words, not workshop words.** Learning, language, focus, money, building with LLM agents. Internal vocabulary (rules, doctrine, open questions, mechanisms, settling) belongs inside the pages, not on the door.
- **Nouns, counts, and states only** in any status or coverage line: "complete," "in progress," a number, a date. Any word that admits a degree is a grade, and a grade is a sale ("deepest," "growing" as a status assertion, "filling in" all struck). The exemplar: "Coverage today: the TOCFL Level 1 characters, complete. Level 2 is in progress."
- **The semicolon pair is the em dash in disguise.** Two balanced clauses are the same beat regardless of punctuation. One natural sentence or a plain noun phrase.
- **The fact must pass "who cares."** The visitor's question is "what is this and is it for me." Dates, ordering trivia, and build counts fail it; topics answer it.
- **The page never grades itself.** Values render as features and marks (字源/記憶法, the open-questions block), never as sentences about the artifact. Uncertainty renders as fact ("two tellings"), never as hedge words.

This section governs Tsumugu's front-facing surfaces equally; its register authority there is PRD-Entry-Authoring §0.5–0.6 and the STYLE-CARD's banned list, which this section extends to chrome and taglines.

## The May standard

Deleted 2026-06-12 at Wedge's direction: agents kept citing the subordinate May rules instead of the High-Signal sections. The full text lives in git history (commit bd5adc9). The High-Signal sections above are the complete standard.

## Related

- [[AGENTS]]
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]]
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]]
