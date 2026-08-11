---
type: system
status: developing
created: 2026-05-08
updated: 2026-07-02
tags:
  - system
  - writing
  - llm-wiki
---

# Writing Standards

**Authority (set 2026-06-11; May standard deleted 2026-06-12).** For wiki pages, **High-Signal Wiki Pages**. For decision documents, **High-Signal Decision Writing**. For domain-compression pages, **Condensed Pages**. For front-facing surfaces and public posts (blog, explainers, essays) on any project, **High-Signal Front-Facing Pages**. For personal pages, **The Personal Register**. These five sections, plus the site-wide **Whole–Part–Whole** law directly below, are the complete standard. The earlier May rules are deleted — do not cite them; they live only in git history (bd5adc9). **Default register, ruled 2026-08-10:** going forward, wiki and personal pages are written in the blog register's voice — see §The Default Register below for scope and exemptions.

## Whole–Part–Whole (site-wide)

Promoted 2026-07-22 from the blog and personal registers to a site-wide law at Wedge's direction: it binds every wiki page, every blog post on every project, and every personal page. **Forward only** — the law governs new pages and substantial rewrites; existing pages are grandfathered as they stand, and no retrofit pass runs (ruled 2026-07-22: a sweep would touch pages Wedge genuinely likes).

Every piece opens in the whole and closes in the whole. The reader is oriented before any part arrives, and the final movement returns to the whole carrying what the parts added — a piece that ends inside a part just stops. Each part connects back to the whole as it enters, and the whole may resurface between parts wherever re-orientation earns its place: the shape is a rhythm, not a template, and WPWPW is as legal as WPW. What the opening whole looks like is each genre's own law — a wiki page's is its thesis (Thesis First stands), a post's and a personal page's is the normalizing run-up with the thesis landing inside it, and a decision document's is the verdict (Verdict First was always whole-first). The close binds wiki pages too: a page returns to its thesis, advanced by what the body established, never ending cold on its last section.

## The Default Register (2026-08-10)

Ruled 2026-08-10 at Wedge's direction, the day the first Personal-section draft opened on a cold thesis sentence: pages read as posts now. Going forward, wiki pages and personal pages are written in the blog register's voice — working notes made legible (§Blog Posts Are Working Notes Made Legible): the opening is the post's whole, a normalizing run-up with the thesis landing inside the opening paragraph, never a cold first-sentence claim; flow outranks compression; plain words carry real depth; density stays positional. The reader served is the one not versed in the dense style.

The shift is voice, not honesty. The High-Signal content disciplines continue to bind wiki pages — Specifics Over Adjectives, The Case Against, Boundaries After Definition, Quit Signals, Checkable Expectations, No Scaffolding, and the Delete List — and every page still opens in its whole and returns to it advanced (WPW stands everywhere). The continuous-generation law travels with the register in both its forms: pages are drafted as one telling and filtered after, and a page that reads assembled is regenerated whole, never patched (§Blog Posts Are Working Notes Made Legible, extended 2026-08-10).

Forward only, on the WPW clause: the ruling governs new pages and substantial rewrites; existing pages are grandfathered, and no retrofit pass runs.

**The draft is a chat message (2026-08-11, Wedge's direction after four voice strikes on one page).** The operating form of the style-transplants ruling: a page is drafted literally as an explanation-message to a real person, in the author's live conversational voice — the voice that was never struck all session while its page-mode twin was struck four times. The filter pass afterward only deletes and swaps: address out, staged transactions out, names to the footnotes, Delete List words dead. It never recomposes a sentence that was natural speech, because recomposition is where performed prose returns — the balanced contrast, the taxonomy list, the appositive restatement, the aphoristic landing are all page-mode exhibits, and none of them survive being said aloud to a real listener. Confidence is sincerity, not a dial (reworded 2026-08-11 at Wedge's direction — "everytime you add something mechanical, it degrades the quality"): the draft asserts only what its author would actually say to the listener, and where conversation would naturally qualify — mostly, often, as far as the evidence goes — the qualification arrives with the sentence, never in an adjustment pass afterward. A confidence pass run after generation mechanizes; honesty run during it does not. And a regeneration is total: it re-derives from the diagnosis and the source material with the prior draft dead as material, favorite sentences first — a fragment that survives regenerations untouched is the tell that no regeneration happened.

**Openings come from the catalog (2026-08-11).** Page openers are designed by picking a move from the [[wiki/Writing Craft/Opening Moves Catalog|Opening Moves Catalog]] — derived from verbatim-verified openings by the writers Wedge admires, Gwern first — and are presented as several fully-written options for his pick, never one candidate at a time. The catalog's master frame, the abstract, is the whole-first law done as structure.

**Names in footnotes (2026-08-11, Wedge's direction on the first self-talk page).** Body prose on a sourced page carries zero source names and zero work titles — "the reader's working memory belongs to the content," and every name spends a slot teaching nothing. Findings arrive as facts about the world in anonymous-reference grammar ("recordings from motor cortex show," "six decades of comparison research finds," "a month of daily third-person diary writing shifted"); operative numbers stay, in plain clothes, where they change what the reader does; journal titles, years, and researcher names dissolve into the Sources section at the foot, which is the page's footnote layer and the one home for provenance. This extends the brief rule ("No named people in the body") to every sourced page. Terms of art keep their names; people lose theirs.

Keeping their own registers — the "special" pages, in Wedge's phrase (ratified 2026-08-10: "the standard on how you generated this post is now standard across all posts, with the exception of 'special' posts like the condensed versions"): Condensed Pages (his named example), MOCs and hub/index pages, decision documents (Verdict First), and chrome/taglines (catalog lines). Em-dash scope is unchanged by this ruling: the total cut still binds front-facing surfaces and blog posts; wiki, personal, decision, and condensed prose may carry the dash.

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

This list is canonical for every genre in this file (consolidated 2026-07-02); the other sections cite it rather than copying it, so additions cannot drift.

## High-Signal Wiki Pages

Added 2026-06-11 as the primary bar for wiki pages; the decision-writing disciplines above translate into the concept-page genre. Wedge's directive: ironclad, not advisory.

Not every page needs all eight. Small concept notes need Thesis First, Specifics, and Boundaries. Technique, system, and workflow pages need all eight — they recommend actions, so they owe the reader the full honesty kit. Hub and model pages need Thesis, Case Against, and Checkable Expectations. Every page, whatever its subset, carries the site-wide Whole–Part–Whole shape: it opens in its thesis and returns to it, advanced, to close.

Amended 2026-08-10 (§The Default Register): new wiki pages take the post's opening form — Thesis First now binds as the thesis landing inside the opening paragraph, with a run-up, rather than as the cold first sentence — and the post's flow-over-compression voice governs the body. The content disciplines below are unchanged.

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

The reveal ban binds here as in front-facing prose (promoted 2026-07-02; see No Reveal, No Misdiagnosis Framing): a wiki page corrects a misconception by stating the correct claim and its evidence, never by planting the error first or casting the reader as its holder.

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

### No Unpublished-Story Internals

(Wedge, 2026-07-20, struck on Companion Arcs and Party Banter: "阿迪's family fracture at B3L08 recovering at B4L07, 星野's mask cracking at B3L08, 林薇's injury and deferred trip in B3.") The wiki is read by strangers, and an unpublished story makes every reader a stranger to it. Wiki pages never cite production coordinates — book/lesson codes (B3L08), beat ledgers, spine/registry/dashboard names, or pointers into the production repo — and never lean on unpublished-story plot mechanics as worked examples. A craft page's exemplars come from published fiction; the page must read whole for someone who has never heard of the private story and never will until it ships. The project's own material lives on its dedicated surfaces (the project map, the cast pages, the cast table on The Moral Core) at value level only: who a character is and what they hold, never where a beat lands. The test: if a sentence would only earn its place after the story is published, it doesn't ship before.

### Delete List

The decision-writing Delete List applies verbatim, plus importance-announcing in all forms. That list is canonical; this section cites it rather than copying it.

## The Personal Register (type: personal)

Scope: the personal wings — fitness, travel, fashion, and future personal notes. Added 2026-07-21; rebuilt 2026-07-22 after a multi-round calibration. Wedge has final cut on every line, always.

A personal page is one of Wedge's own working notes, made readable: his thinking about his own life, in plain words, with room to develop. The genre inherits from the blog register its speaker discipline, its no-performance bans (No Posing, self-referential apparatus, the punchline landing, the reveal), whole–part–whole, and the Delete List — and nothing else: em dashes stay legal here, and the front-facing rules do not apply. Three relaxations distinguish it from every other genre in this file: the material is personal rather than technical; compression is not a goal, and High-Signal density is a defect; and the thought process itself may stay on the page, because the working-through is the content.

### The speaker is the vault's owner

A personal page is a note, not a message: nobody is addressed, no transaction is staged, and the conversation that produced the page is never reenacted on it — a line that was a true speech act in live chat becomes a performance on a standing page. Events, ideas, and artifacts take the subject position. Generic-you for shared experience is legal in doses; a "you" pointed at Wedge never is.

Weak:

```text
You handed me the interesting problem, so here's my read of your own mechanism.
```

Strong:

```text
Streaks and rings both measure maintenance: you defend a number that can die.
```

### First person, rationed and owned

"I" appears occasionally and only for Wedge's actual experience and positions. An AI inference wearing his "I" is a forged signature; the fix for a wrong "I" is the declarative sentence, not a different pronoun. The ration has a counterweight: when a claim is personal experience, the owning first person is its context and is load-bearing — an evasive agentless sentence is the worse fault.

Weak:

```text
Working with AI turned out to be one of them — it pulls daily without any tracker.
```

Strong:

```text
For me personally, working with AI turned out to be one of them — it pulls daily without any tracker.
```

### The two egos (2026-08-10)

The register's voice law in one distinction, held in full at [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]: self-regard is the author asking to be admired; selfhood is the author's judgment left visible in the work. Personal pages run selfhood as high as honesty allows and hold self-regard at zero. Three line-checks, calibrated 2026-08-10 (accepted exemplar: the Tsumugu About maker paragraph — an I owning frustration, wants, and builds; counter-sample: the struck Personal-door clauses that performed the author's inner state):

- **The I owns events, wants, and judgments — never qualities.** "I built," "I wanted," "I decided" pass. "I'm the kind of person who…" and any adjective attached to the self die on sight; qualities exist only as residue the reader computes from reported events.
- **Internal scoreboard only.** A sentence's standard is the author's own want or need. Comparatives and rank markers — better than, ahead of, what most people miss — are the tell that the scoreboard moved outside.
- **The residue test.** Delete the I-clause and ask what the reader lost. Facts about the subject: the I was load-bearing. Only an impression of the author: display, and it goes. Performed humility fails the same checks in reverse — a confession arranged for witnesses is self-regard dressed down.

### Nothing appears without context

Every element is grounded as it arrives: personal experience is owned in first person, references to elsewhere in the vault arrive as links, and terms are introduced before they do work. Deep reads of Wedge stay invitation-only and build only on what he actually said — no invented claims about him, in any person.

### Plain words, real depth

Light means unpretentious, never thin. Plain vocabulary, no systems-jargon, no academic "published-paper" register — and the idea fully worked through: a page takes the length its thinking needs and lands on something usable. A three-line aphorism fails the same way a paper does.

### Nothing performs

The writing never performs — not scholarship, not essayhood, not conversation; it only does the work. No staged transactions, no announced moves ("there's a clean falsifier, too:"), no minted principles ("the X principle in one line:"), no punchline landings.

### Whole–part–whole

The site-wide law binds here (see §Whole–Part–Whole); its personal-page form: a normalizing on-ramp with the thesis landing inside it, a decelerating off-ramp that returns to the whole advanced by the parts, each part tied to the whole as it enters, and the whole free to resurface between parts — WPWPW as legal as WPW.

### Exemplar

`wiki/Fitness/Movement as Accretion` (the 2026-07-22 revision) is the calibrated exemplar. Further rules mint only from repeated reactions to real pages, each citing its sample.

## Condensed Pages

A third genre (added 2026-06-11, modeled on the private ICS-CONDENSED and OUTLIER-CONDENSED references): one page that compresses an entire domain of the wiki into doctrine. The format, exactly:

- **A bold one-paragraph total compression** at the top — the whole domain in 5–8 sentences. If the paragraph fails, the page fails.
- **Numbered doctrine sections.** Each line is one rule: bolded operative lead, the mechanism in a clause, and a wikilink citation to the page that owns the full treatment. One to three lines per rule, never more.
- **Tensions resolved explicitly.** Where two pages pull different directions, the condensed page states the reconciliation in one line rather than hiding the conflict.
- **An omissions note** at the end: what was deliberately left out and where it lives.

Source discipline: public condensed pages compress **wiki pages only** — every line must trace to a published page via its citation link. Private course corpora are never condensed publicly; that is what the raw/private references are for. The condensed page adds no new claims: a doctrine that lacks an owner page is a gap to flag, not a line to write.

The exemplars supply the **form, never the content**. The thesis paragraph is derived from the wiki's own pages, in the wiki's own framing — and any line that echoes a private exemplar's phrasing must re-trace to a public owner before it ships. (Established the hard way, 2026-06-11: "learning quality is decided at encoding, never at review" was imported from a course condensation and contradicts the wiki's own Retrieval page, which holds that recall itself builds learning. The wiki's framing wins over any source's polemic.)

Form transfers need the same scrutiny as content: each structural slot in an exemplar must justify its **function** in the new context before it is copied. (Same day's second lesson: ICS-CONDENSED's citation-decoder line earns its place because "Camp I 209" is opaque; the public version's wikilinks are self-explanatory, so the copied explainer line was scaffolding and got deleted.)

For fast-moving domains (agentic engineering is today's case): split the doctrine into **invariants** — rules expected to survive the underlying technology becoming far more capable — and **dated tactics**, stamped with their write date and expected to rot. The invariants are the page; the tactics section is honest about its half-life. A condensed page that mixes the two rots wholesale the first time the ground shifts. Scope ruled 2026-07-02: the split is mandatory only where doctrine rots on technology shifts (agentic engineering today); slow-moving domains (learning, design, money, minimalism, characters) skip it rather than carrying an empty tactics section.

The genre's test: a reader who knows the domain should nod once per line; a reader who doesn't should be able to click any line and land on the page that teaches it.

## High-Signal Front-Facing Pages

Added 2026-06-12, after the KB hero-line strikes; replaces the deleted May Front-Facing Voice section. Broadened 2026-06-30 to general-reader prose. Governs every front-facing surface on every project — heroes, sub-lines, about pages, badges, buttons, nav labels, meta descriptions, og tags — and every public-facing post written for a general reader: blog posts, explainers, public essays. A blog post is the same surface as the chrome: it transfers facts to a stranger and wants nothing from them, and it answers to the same rules, with one register calibration set out below. A hero line and a thousand-word post share the register. They do not share structure. The blog subsections below state where a post inherits the Wiki page's body discipline. The register authority is the Tsumugu register rounds (`tsumugu/PRD-Entry-Authoring.md` §0.5–0.6); the accepted exemplars are the Tsumugu B2 front page ("A Chinese dictionary built on form and story") and the KB hero sub-line ("Each page explains one idea in enough detail to use it, and links to the ideas it depends on"), both 2026-06-12.

The single test is the root of the whole standard. Read the line and ask what it wants from the reader. The only passing answer is nothing. Every other rule, in every genre this file governs, is this test applied to a different surface. This standard transfers facts a reader can check. The default model voice works to impress a reader. Each banned move acts on the reader (an adjective standing in for an unmeasured claim, the reveal, "not X but Y," the cadence beat, the handed-over conclusion). None of them transfers a fact the reader can check. The standard optimizes for the reader using and trusting the page later.

### The Page Wants Nothing

Front-facing copy transfers facts; it never works to cause a feeling — excitement, trust, admiration, reassurance, urgency. Selling is banned in chrome as in prose: badges, buttons, and labels sell the same way sentences do (the 免費·FREE badges died under this rule). Cost, coverage, and status may be stated where they are facts the reader needs, in the same voice as every other fact.

**Education is never pay-to-win (hard rule, Wedge, 2026-07-03).** Student-facing material never cites, links, or names a paid course, paid program, or paid product, and never implies that an advantage requires purchase. A source may be named where honesty requires ("Outlier Linguistics"); its paid offering may not ("character course," "masterclass"), and storefront links may not appear. Free resources may be linked. Advertisements are a separate, accepted category; the ban is on editorial content steering a student's trust toward a purchase. Struck the day the rule was set: a course citation in the pipelining post and an iCanStudy credit under a chart. Relatedly, "drill" is banned as a word for learning practice — its schoolroom association triggers reflexive aversion — in favor of practice, reps, production practice, working it live.

### No Posing

The writing never performs — not confidence, not humility, not transparency, not calm. Authorship talk, process talk, and ownership claims are posing regardless of subject ("Maintained in the open, partly by LLM agents — the thinking stays mine" is the canonical strike: a boast wearing a defense). The attitude is the disease; the topic is irrelevant.

### Complete Sentences, One Fact Each

Every sentence is complete and carries one load-bearing fact, stated once, in concrete words — never telegraphic. Taglines, fragments, triads, anaphora, em-dash punchlines, and balanced pairs are cadence devices: selling by rhythm. A line shaped to sound finished has substituted shape for substance.

Em dashes are cut from front-facing prose entirely (Wedge, 2026-06-12). The dash is the punchline's engine; commas, colons, and full stops carry the same facts without the beat.

The ban's scope is intentional and stops here (made explicit 2026-07-02): wiki, decision, and condensed prose may carry em dashes — their examples in this file do — because the peer-reference register absorbs the beat that chrome and posts cannot afford. The cut binds every front-facing surface and every blog post, body prose included. The recorded rationale (Wedge, 2026-07-02): the ban is pragmatic, not aesthetic — model prose overuses the dash past the point where any per-line judgment holds, so a total cut is the only enforceable fix.

### Specific Beats Generic

A true line that could sit on any site is dead copy — especially the first sentence a reader sees. "A Chinese dictionary built on form and story" describes exactly one dictionary; "each page explains one idea in enough detail to use it" describes every wiki ever pitched, and was struck for it (2026-06-12). Specific and true beats correct and generic. The test: move the line onto a stranger's site; if it still fits, it isn't finished.

### Details, Not Conclusions

Give concrete details and stop; the reader concludes. No mood labels, no instruction verbs, no interpretive paraphrase after the details (PRD-Entry-Authoring §0.6, moves 1–3 and 8, applied beyond the dictionary). A line that hands the reader its own conclusion has assumed the reader couldn't reach it.

### No Reveal, No Misdiagnosis Framing

The writing never plants a wrong idea in order to correct it, and never casts the reader as mistaken. The reveal structure ("registers as an output problem to drill away; the actual gap is…") performs insight by setting up an error and overturning it. It puts the error in the reader's head and makes the reader the one who held it. Drop the setup. Describe what the surface experience feels like and what is happening underneath. Never "mistake," "misdiagnosis," "wrong approach," or "the reflex is wrong." The reader is a peer. (Imported 2026-06-30 from the project CLAUDE.md constructive-framing rule, which this file did not carry.)

### Say Nothing the Screen Shows

No navigation chatter, no device commentary, no narrating visible features (§0.6 moves 5–6; the No Scaffolding rule applied to chrome). The map, the search box, and the layout introduce themselves.

### The Thing, Not Talk About the Thing

Standing rule (named 2026-07-21 on the cast hub strike; already implied by Say Nothing the Screen Shows and The Page Never Grades Itself). Front-facing pages present the artifact. They never explain how to use themselves, what they contain, what they omit, how finished they are, or what the reader is looking at, when the content already shows it.

If the page has portraits, catchphrases, and voice players, the page does not say "one catchphrase + three voice moods" or "click a portrait." If the blurbs are surface-only, the page does not announce "spoiler-free" or "no arcs, no backstory." Folder paths, mood inventories, and authoring status belong in repo docs, never on the public surface.

Struck exemplar — `cast-profiles.html` (2026-07-21): hub sub-line, green banner restating the same meta twice, footer listing `portraits/locked/` and mood counts; per-profile footers that restated "day-one surface only." The page kept the title and the cast.

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

### Blog Posts Are Working Notes Made Legible

(Rule-minting threshold, Wedge 2026-07-03: not every strike becomes a rule — one-off editorial fixes stay one-off, and a rule is minted only when a fault repeats, because rule accretion was starting to degrade generation. Shipped and locked 2026-07-02, validated against the post "Rebuilding 頓" — canonical now at `tsumugu-core/content/blog/posts/rebuilding-dun.md`, this register's worked exemplar. Supersedes the 2026-06-30 second-person allowance, "the post talks to a reader trying to do the thing" — struck at Wedge's direction: no talking to the reader, no lecturing; show, don't tell. Calibrated through eight rounds on that post in one day; every principle below was confirmed by Wedge, most of them against a struck line.)

A blog post obeys every rule above. Past a few paragraphs it also inherits the Wiki page's body discipline: a thesis, one worked example, boundaries, and the case against where the post recommends an action.

The register is the author's notebook, cleaned up until a stranger can follow it — and the default grammar is agentless (Wedge, 2026-07-02: no "I" in normal prose; persons bypassed). The post never lectures the reader: no imperatives, no advice voice ("you should"), no rhetorical questions, no anticipated objections ("you might wonder"). Second person keeps one narrow job, taken in doses: a "you" may state a problem the reader will recognize as their own experience ("your pen might get a few strokes in and stall"), and once the pronoun has done that job the following sentences shed it — repetition turns recognition back into address, and five "yous" in a paragraph is being talked at. The dose may recur later wherever shared experience is again the content ("a character you might not handwrite for a year"), never for instruction. The possessive is the low-dose form: "your pen" keeps the scene the reader's without spending another "you." Natural collocation outranks the person ban: a phrase that exists only to dodge a person ("the character came up for handwriting") loses to the second-person-plus-modal sentence that says it naturally. Outside these, events and artifacts take the subject position: the form stops, the list collects, the recovery takes a minute. Appearance verbs carry experience without an experiencer (looks wrong, feels familiar, reads as invented); recognition itself can act (recognition fired on one pairing); light passives hold background facts (last written over a year ago); actions nominalize (the reconstruction, the lookup). The fix for a struck "you" or "I" is an event or artifact subject — never "one." The entry register already holds this line inside the dictionary — no instruction verbs, no patronizing asides (PRD-Entry-Authoring §0.6, STYLE-CARD) — this extends it to posts and front-facing prose. Chrome is unaffected: taglines stay catalog lines, and a noun phrase addresses no one.

Moves that come out on revision — each is the author performing rather than transferring, and all were struck on the 頓 post (2026-07-02):

- **The appended verdict.** A judgment clause tacked onto a finished sentence ("…and fairly") is the author stepping outside the sentence to grade it. Fold the judgment into the verb or cut it.
- **The punchline landing.** A sentence built to hand over a payoff ("and that's the answer"), including the paradox-flip ("the thing that caused the problem is also the way back"). The fact rides inside the sentence, never at a payoff position.
- **Self-referential apparatus.** The post pointing at its author's system ("in the notes this is called…"). Names arrive plainly: "This is the IME method, named after…"
- **Empty parallelism.** A second clause that mirrors the first with the labels swapped and adds nothing ("the sound narrows down the sound components, and the meaning narrows down the meaning components"). Say it once, or give the second half a new fact.
- **Passive mush.** "It could be argued," "it was found": an agent the sentence still needs, hidden. The fix is a concrete event or artifact subject, not a restored person.
- **The generic how-to voice.** Person-free prose drifts generic when the specific episode evaporates; the worked example stays a particular recovery with particular candidates, told as events.
- **Abstract nouns doing the acting.** "The same asymmetry contains the repair": concept-shuffling, not speech. The read-aloud test catches it — a sentence nobody would say out loud gets rewritten with the concrete thing as its subject.
- **Performed rumination.** "The more this sits with me" and kin: No Posing in notebook clothing. The notebook records what happened, what held, and what is still open.
- **Dead verbs.** "Stay," "go," "become," "get" where a concrete verb can act ("the sound and the meaning stick, while the written form slips away"). Specifics Over Adjectives, applied to the verb slot.
- **Decorative personification.** Animation earns its place only when the image is the mechanism: "the written form slips away" describes forgetting, and "the form is waiting" traces to stored-but-uncued memory, while "the lookup hands over the form" and "頓 had never left" dress up mundane facts for warmth. Map the mechanism or stay literal.
- **The replay.** Restating what the reader just watched — "屯頁 looked right, and 屯頁 is 頓" says it twice; the bare "頓" lands because the object itself is the payoff, shown. At paragraph scale the replay is the coda: a close that adds no new fact and re-tells the episode is an ending performing ending-ness, and it comes out whole.

Legible is the load-bearing half. A notebook a stranger can follow still defines terms inline, still carries one worked example through the whole post, one takeaway per post, and still stops when the example is fully worked — cut anything a reference or wiki page would carry. Approachability comes from concreteness and plain words; warmth comes from the same two.

Variance is deliberate (added 2026-07-02, Wedge's direction, both halves). Structure: identical skeletons read as a template, so a post may carry one structural element where it earns its place — a small table when the content is genuinely tabular (correspondence rules, failure-to-repair maps, family groups), a text-flow block when the mechanism is a schedule or a loop, or a short operating-principles block when a mindset is the takeaway (three to five one-line declaratives, each obeying every register rule, no imperatives). Bullets speak the run-on language, only a little more concise (Wedge, 2026-07-02): one plain clause or sentence each, the kind that could sit in the prose unchanged — never compressed aphorisms, and the semicolon-pair beat is as banned in a bullet as anywhere ("Motor training, not study; the boring reps are the consolidating ones" was struck for "This is motor training, so the boring reps are the ones that count"). Elaboration lives in the surrounding prose, not packed into the bullet. Length: posts do not converge on one size — a human doesn't write the same length every time. An idea that genuinely needs thorough expansion gets it, a small idea ships small, and "length serves the takeaway" is the only ruler; uniform post length across a series is itself a template smell.

The scan layer (Wedge, 2026-07-03; supersedes the one-element cap). A post carries enough structural variety that a scanner can judge it and pull small insights without committing to read. This is not a TL;DR block — a summary hands over the conclusion and lets the work go unread on the author's own verdict. A scan layer instead makes the skeleton visible while the prose stays self-sufficient. The catalog, every device compressing what the prose already says, most of them lifted from the wiki's own patterns:

- **The doctrine line.** A lone bolded sentence stating a section's rule (the condensed pages' bold lead, borrowed as a scan anchor); two or three per post form the visible spine.
- **The flow block.** A strictly linear chain may stay as arrow lines in a text fence (the Prestudy operating-model pattern). Anything with two-dimensional structure — a fork, a grid, a cycle, a chain of labeled stations — is a diagram and gets drawn as SVG on the theme tokens, same discipline as the chart (ruled 2026-07-03; the session grid, the watched/unwatched fork, the 北→背 chain, and the aim-shoot loop are the exemplars).
- **The chart.** A quantitative relationship gets a real chart: inline SVG drawn on the theme tokens — clean solid curves, hairline axes, each line labeled directly at its end so no meaning rides on color alone (no dotted lines; Wedge, 2026-07-03), a one-line caption stating the relationship, and a source credit when the model is borrowed — adapting to light and dark through the CSS variables. ASCII letter-scatter is never a chart (struck on sight, 2026-07-03: the R-and-E pseudo-chart); text fences are for genuinely textual material only — chains, schedules, worked boxes. The exemplar: the Encoding vs. Retrieval mirror-S chart (skill over time, after iCanStudy's model), in Learning, Condensed and the 頓 post.
- **The table.** Failure-to-repair, correspondence rules, sort examples — content that is genuinely tabular.
- **The weak/strong pair.** Two short fenced specimens (this file's own device).
- **The worked-example box.** The post's concrete case compressed into one text fence.
- **The form diagram.** A referenced character blown up as SVG: the glyph large, its components as labeled tiles with role (sound, meaning, picture) and gloss, teaching the vocabulary alongside the technique (頓, 棠, 偷, 取 are the exemplars, 2026-07-03). Prose may still decompose in passing; the character a post leans on gets shown, not just described.
- **The felt-signals table.** How it feels | what it means (the WPW meta-checklist pattern) — for mindset and regulation posts.
- **The operating-principles card.** Three to five plain-clause bullets, as already ruled.
- **Sparse section headers.** Three-to-five-word noun phrases, long posts only.

Every diagram states its job before its form (Wedge, 2026-07-03: understand the why before the design). The job is what a scanner extracts in three seconds; the form matches the mechanism's shape — discrete states take boxes and arrows, continuous processes take curves (the steering drift was struck as boxes and redrawn as a road), structural claims take lattices (the pipelining stagger), mappings take tables, quantitative relationships take charts. Size follows rank in the argument: thesis-scale for a diagram that carries the post's claim, exhibit-scale (smaller, centered) for worked material like the form diagrams — salience is claimed importance, and an exhibit drawn at thesis scale inverts the post's hierarchy. And a caption never narrates the diagram's own anatomy — "the climb is vertical, and each numbered arrow is bought by a different kind of work" was struck (2026-07-03) as Say Nothing the Screen Shows applied to diagrams, a rule violated often enough that captions get checked against it every time. A caption may state a fact beyond the picture (a source, a quantity, the relationship a chart plots); the moment it describes arrows, lanes, colors, or layout, it comes out.

Two to four devices per post, chosen for fit and varied across the series so no two neighbors read as the same template; every register rule binds inside every device; density stays positional, so no device opens the post. The paired test: the post reads whole with every device skipped, and the devices alone give a scanner the gist and a fair basis for the read-or-not call.

The post's shape is whole–part–whole (added 2026-07-02; promoted to the site-wide law 2026-07-22 — this paragraph is the post-genre form; [[wiki/Dimensions/Retrieval/WPW|WPW]] applied to prose, since a post is teaching). The lead is the whole, not the sharpest part: an opening paragraph that orients, stating the plain big picture the worked example lives in, in words a stranger already owns, with the thesis landing inside it. The first sentence is the post's harshest position, and even a dose-legal second-person claim reads as confrontation there ("You can know a character and still be unable to write it" was struck as an opener, 2026-07-02). Open by normalizing the problem, and give the sentence a run-up: a scoping clause before the claim, so the entry glides instead of dropping ("Among people who read Chinese, even fluent native speakers, it's common to know a character well and still be unable to write it"). A one-clause opener stays abrupt even when it normalizes ("It's common to know a character but still be unable to write it" — struck as too short the same day). Short sentences spend their force mid-paragraph; the first sentence wants length. The "you" dose enters once the door is open. Normalizing widens the picture beyond the single reader and softens the drop. This is still not a hook — orientation transfers facts; a hook wants a feeling. Domain detail ramps after the whole; the densest specifics never open the post (the 頓 post's first draft opened on the episode with its pinyin glosses and read as a sharp drop; rewritten same day). Each part connects back to the whole as it enters, and the post returns to the whole to close — the same whole that opened it, advanced by the part (clarified twice, 2026-07-02: a close that landed in a nearby scene was struck, then a close that merely restated the opening was struck as weak): the final paragraph stands back in the opening's big picture carrying what the part contributed — the problem now solvable, the learning goal moved. The 頓 exemplar: the stalls stay common, but a stall is now worth a minute of retrieval practice instead of a dictionary trip, and the rebuilt character is harder to lose. Never a replay of the episode, never a restatement of the intro. Mode switches are marked on the way: when a hypothetical becomes an actual episode, one plain sentence says so ("That is exactly what happened with this one"); an unmarked pivot reads as a non-sequitur. Labels come after mechanisms, per [[wiki/Dimensions/Retrieval/Reverse Explanation|Reverse Explanation]]: the thing is explained first and named last, so the name lands already connected.

Generation precedes filtration (Wedge, 2026-07-03: "it's a generation problem"). A post is drafted as a continuous explanation to a real person, the way the ideas would be talked through aloud, and the register is applied afterward as a filter. Writing assembled directly from the rules — fragments that each pass every test and connect to nothing — comes out choppy and glueless, and no cohesion pass fully repairs it. The tell that assembly happened: a setup with no payoff ("that stretch has a name," and then no name), ideas fired without connecting tissue, paragraphs that follow the skeleton but do not flow.

Extended 2026-08-10 at Wedge's direction ("write down your fix… i kind of want all posts to follow this format"), calibrated on The Two Meanings of Ego — the assembled literature build rejected as mechanical, the continuous re-telling accepted. The law covers repair as well as drafting: a page that reads assembled is regenerated as one continuous telling and then filtered again, never patched paragraph by paragraph, because stitched prose keeps its seams no matter how each patch reads. Three more tells, all from that sample. Definitions landing before the reader has felt the problem they name — the cold thesis in post clothing; terms arrive after the experience they name, per Reverse Explanation. The catalog rhythm, where sources file past at one sentence per authority ("X calls it… Y compresses it to… Z locates it in…") and the research bank shows through the prose — a source enters a telling and is held as long as it earns, and provenance the telling does not need retires to the Sources section. And joints that announce a paragraph's function ("the classical psychology explains why…") instead of picking up the thread of the paragraph before. This binds every post, and through §The Default Register, wiki and personal pages with them.

Flow is the objective; high signal is the filter (the governing hierarchy, confirmed 2026-07-02 after two drafts optimized density and read as doctrine). The high-signal rules say what may not appear: selling, posing, filler, hedge words, cadence tricks. They do not set the target. The target is a human reading comfortably, and when maximal compression fights natural flow, flow wins. Density is not signal: a compressed claim unpacks across two or three sentences instead of shipping as one dense line; a term is explained before it does any work (what a component is, before component lists); transitions carry the reader between whole and part ("a proper retrieval can make it concrete"); a run of glosses gets a plain sentence before and after it to breathe. Plain words are for delivery, not for erasing precision (Wedge, 2026-07-02): a domain term that carries the mechanism beats the general word — "retrieval," not "recovery" — in doses, each clear from context or given its clause; strip too much jargon and the post goes so general it loses the details that matter. Terms of art wearing plain clothes ("the method does have a floor") may stand bare when the sentences that follow supply the meaning in concrete facts; an inline definition that breaks the paragraph's flow costs more than it adds (ruled 2026-07-02 — the floor's height arrives one sentence later, as the 50 characters). The audience is a learner whose position on the journey is unknown, so pacing targets the newest plausible reader. The Delete List cuts words doing no work. Connective tissue is doing work: it is the pacing. Information arrives in context, one focus at a time (Wedge, 2026-07-03): a paragraph that scatters many glossed items bombards — the nine-word worked week was struck as "whole, parts parts parts parts" — so one focal set carries the glosses and structure (a grid, a diagram) carries the rest. Whatever is presented is the focus while it is on stage. Density is also positional (added 2026-07-02, second post): a compressed claim is welcome mid-paragraph and unwelcome at any opening — each paragraph's first sentence takes a short run-up, the same way the post's does ("The precondition can be manufactured" was struck as a paragraph opener; "A foreign learner can set up the same precondition on purpose" replaced it). The run-up is a pacing device, not an intro device (Wedge, 2026-07-02): the same long, unhurried sentence shape recurs occasionally through the body as glue between sections and lead-ins to the next thought, and the close takes a run-off — the final sentences decelerate the way the opener accelerates, ending on a landing with room in it ("the hour of study that follows has somewhere particular to go"). A compressed appositive or clipped landing in the last sentence is density at the exit, the same fault as density at the door ("Instead of one verdict, more practice, a stalled sentence can point…" was struck for both at once). The paired test: every fact still survives the high-signal sweep, and every paragraph survives being read aloud to someone new to the topic.

The paragraph is a working-memory unit (minted 2026-07-03 on the second occurrence, per the minting threshold). A paragraph asks the reader to hold its contents at once, and working memory holds three to five items, so a paragraph that introduces more than that gets split at its natural seams — one store per paragraph, one layer per paragraph — even when the reasoning runs continuously across the splits. The continuity lives in the stitching between paragraphs, not in their length ("two stores, six definitional items, one paragraph" was struck twice in one review batch).

Cohesion runs sentence to sentence (added 2026-07-03). Each sentence picks up a thread from the one before it — an echo, a pronoun, a connective — so the paragraph hands itself forward instead of restarting. A run of cold-open subjects reads as staccato even when every sentence passes every other test ("None of this… The reconstruction… The difference… Digging…" was struck for exactly this). The repair is not new content; it is stitching: "and it is not trying to be," "what the minute buys," "which is how" — small joints that let one sentence receive the previous one.

Gentleness is executed, not felt (added 2026-07-02). Modality is gentleness done honestly: a bare declarative states a law, so contingent things get contingent grammar — "a real recovery can make it concrete," "the pen might stall a few strokes in." This is not the hedging the Delete List bans: hedge words grade the author's confidence, while modals describe how the world behaves, and facts that hold always keep the bare form. The same honesty governs frequency: "never" and "always" on contingent claims become "usually" and "often" ("recognition, which is usually not the link that needs the help"). Harshness is the paired fault: a run of clipped verdict-sentences reads as doctrine even when every line passes every other test; sentence length varies the way speech does, and a short sentence spends its force only where the content earns it ("One did not." was softened to "but one of them didn't"). The close shows the episode resolving in the scene's own terms rather than stating its moral: "the sound and the meaning were holding it the whole time" told the lesson, and was rewritten as the pen finishing the character. Show the resolution; the reader takes the lesson from it.

The try-it want is gone. A notebook wants nothing from anyone, including that the method be tried. The method appears completely enough to repeat; whether to repeat it is the reader's business. This tightens The Page Wants Nothing to its limit on this surface.

### What Approachable Does Not License

Approachable is not a license to sell. It does not permit a hooky, rhetorical-question, or "imagine if" opener; a superlative; a reveal that casts the reader as wrong; cadence; flattery; or the manufactured-suspense tics: "here's the thing," "the truth is," "let that sink in." Concreteness carries the approachability those moves reach for.

Weak (hooky lead):

```text
Ever wonder why you blank on a character you'd swear you knew yesterday?
```

Strong (concrete-detail lead):

```text
Writing 頓 from memory, the bottom half went missing and the stroke stopped. Listing the sound parts that could carry the syllable (屯, 盾, 享) against the meaning parts that fit (首, 頁, 百): 屯+頁 resolves it.
```

Weak (feeling-causing):

```text
This one method completely transformed how I retain characters — it's almost unfair how well it works.
```

Strong (fact-transferring):

```text
Attaching a written form to a word you already say and understand takes a fraction of the effort of learning sound, meaning, and form together. Native literacy runs in that order.
```

### Open Questions Stay Open

Added 2026-06-20, after the home "top of mind" card. These cards carry the questions the author is mulling about where AI is heading and how to shape it — for personal use and for society; the why's, the judgment a model cannot settle. Projects, status, roadmap, and what the author is building, learning, or reading do not belong here; a model could decide or do those.

The question is the whole line. Pose it and stop. Answering it, weighting it, or naming what is at stake breaks Details, Not Conclusions — the reader concludes, the author included, re-reading their own home. "What stays human as the models match generativity" is finished; "and how to keep that edge from atrophying" answers it, and was struck (2026-06-20).

The conclusion a model reaches by reflex is AI-caution: atrophy, hollow out, refuse, protect, "it will not hold." That worldview is No Posing broken — a stance worn as analysis, not the author's. Cut to the neutral question — "where it builds understanding," "what the second-order effects are" — pre-judging nothing. The author's own notes treat AI as leverage with the human role still open; they do not carry the doom. A framing the wiki does not hold is imported bias and does not ship.

## The May standard

Deleted 2026-06-12 at Wedge's direction: agents kept citing the subordinate May rules instead of the High-Signal sections. The full text lives in git history (commit bd5adc9). The High-Signal sections above are the complete standard.

## Related

- [[AGENTS]]
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]]
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]]
