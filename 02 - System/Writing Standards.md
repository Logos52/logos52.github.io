---
title: "Writing Standards"
type: system
status: developing
created: 2026-05-08
updated: 2026-08-25
rebuilt: 2026-08-20
supersedes: "_archive/Writing Standards - 156 laws - retired 2026-08-20.md"
tags:
  - system
  - writing
  - llm-wiki
---

# Writing Standards

How a page gets written is the write-act — what the writer is doing while the page comes out, as against the checks a page is measured by afterward. The act lives in the two generator files and is read there (§1). Everything in this file is the rest: the shape every page takes, what never ships, what a page owes, and the one floor every sentence has to clear (§6).

Scope: every project. Internal documents — PRDs, decision notes, agent instructions, workbench drafts, repo docs, this file — are instruments: the act and the gate do not apply to them. A decision document still owes the list in §4.

---

## 1. The write-act

Read [[02 - System/The Generator|The Generator]] (locked 2026-08-13) and then [[02 - System/The Generator - Selfhood v2|The Generator — Selfhood v2]] (unproven; v1 stays on disk as history), in full, before writing anything. They are the act. Nothing in this file says how prose should sound, and nothing of that kind joins it. Whether a sentence can be followed by someone who has only read the sentences above it is not a matter of sound; that floor is in §6 and binds every page.

---

## 2. The shape of a page — whole, part, whole

You open in the whole — the bird's-eye the act already gives — go into the parts, and come back to the whole before you stop. That is the shape of every page here, and of anything long enough to have parts: a section, a post, a note, a reply. It is the same shape a learner uses to find out whether they understand a thing — Whole-Part-Whole is a test of understanding, taken by teaching a subject out loud from memory with every source closed — and a reader is a learner who was handed the subject by you. A page that ends inside a part hasn't ended. It has stopped.

The parts can run in any number so long as a whole frames them at both ends: whole–part–whole, whole–part–part–whole, whole–part–whole–part–whole. When the parts start to run long, put a whole between them — the reader needs to see the thing again before the next part, and the tell that you've waited too long is monotony: too many parts needs a W. What never happens is parts with no whole in front, where the page opens in the machinery, or parts with no whole behind, where the page just stops.

The closing whole is the opening whole, advanced. Same ground, the reader standing further along on it, the question the opening raised now answerable. Not a replay, not a summary, not the intro re-said — a close that re-said its opening was struck 2026-07-02. And the register the opening set is the register all the way through: a ramp in speech followed by a body of stacked facts breaks the register, and the break is felt hardest in the middle and at the close. Ruled 2026-08-13: the ending and the intro are mirrors; WPW for everything.

---

## 3. What never ships

The gate. Mechanical where it can be, run after the draft and never held while writing; `scripts/regen-check.py` runs what it can.

- No paid course, program, or product cited, linked, named, or implied on student-facing material; free resources may be linked. (was L78)
- No private-corpus path — `raw/`, `raw/private/`, `raw/sources/`, `raw/processed/` — and no reference to course machinery a reader cannot reach. Banks cite the corpus freely; pages state the substance — what was done, to what, with what result — in full, never as a label standing in for an explanation the reader can't reach. (L78a)
- No source names or work titles in body prose on a sourced page. Findings arrive as facts about the world; operative numbers stay, in plain clothes; names, years, and titles live in the Sources footer. The sentence still says what was measured and in what setting; only the name, the year and the title move. A deletion that leaves the sentence unreadable means the sentence gets rewritten, not shipped with the hole. Terms of art keep their names, and a name arrives with what it names — one plain clause the first time, then the term does the work; people lose theirs. (L81–L83)
- No unpublished-story internals: production coordinates, beat ledgers, spine or registry names, private-repo pointers. A project's material appears at value level only. (L84)
- No invented claim about the owner, in any person. No personal fact ships without his sign-off, and he has final cut on every line. (L120, L124)
- Em dashes cut entirely from blog prose and from front-facing chrome. Legal elsewhere. (L111, L142)
- The delete list: "honestly," "genuinely," "quite," "very," "really," "it's worth noting," "importantly," "arguably," "probably" where probability is not the content, "I think" in a document, and announcing that something is important instead of showing it. Saying what a fact does, what it changes, and why the reader is being told it is content, not announcement, and stays. "Drill" as a word for practice. (L68, L69)
- No epigrams, in any writing. A sentence that would still work as a quote on a card dies. A short sentence that only lands because of the one before it is the same fault. This binds pages, replies, reports, workbench files, and the instrument files that this section otherwise leaves out. The owner's words, 2026-08-25: "epigrams are a pet peeve of mine and should never show up in any of the writing." The repair is a plain sentence that keeps the fact and the reason in the same breath. (Ruled 2026-08-25.)

---

---

## 4. What a page owes

Content, by genre. These are things a page contains, not ways it sounds; a page missing one is incomplete, not badly written.

**Every wiki page.** A thesis that moves as a causal arc — what mechanism exists, why it works at first, what condition exposes the limit, what the surface experience feels like against what happens underneath, what repair changes the system (L28). Specifics over adjectives, and the specifics operative — numbers, thresholds, worked examples that change what the reader does, each stated with what it was measured over and who it applies to, since a number without those is unreadable; journal names, years and program statistics are decoration (L35, L36). Links into the knowledge base each carrying a clause on what that page contributes (L31). Open questions that stay open and belong to the reader, never the vault's to-do list (L32, L33). Sources, the one home for provenance (L34).

**Pages that recommend an action** — technique, system, workflow, operational — owe the honesty kit on top: the strongest honest case against (L38); benefit and cost in the same breath — time, setup, cognitive load, maintenance (L39); quit signals — what evidence means this is not working for this reader, and the next move (L40); checkable expectations the reader can falsify (L41); every claim about how something behaves checked against the actual thing before it ships, live numbers from the build (L43).

**Decision documents** — PRDs, proposals, decision notes, post-mortems, memos. Verdict inside the first two sentences, in a sentence that also says what was being decided and what it was decided against (L99, L100) — a verdict with the comparison missing is a conclusion about something the reader hasn't been shown. Steelman what you reject until its holder recognizes the argument, then name what would flip the decision (L101). Price your own recommendation in the same breath (L102). When options converge, decide on reversibility and state the retreat cost from each branch (L103). Success criteria falsifiable without asking what was meant (L104).

**Condensed pages.** A bold one-paragraph total compression at the top — the whole domain, stated so that someone who has never seen the subject follows it, and as long as that takes; if the paragraph can't be followed the page fails (L125). Numbered doctrine lines, each one rule stated so it stands without following the link — the link is for depth, never for meaning — and linked to the page that owns it (L126). Tensions between pages resolved where they occur: what each page holds and how it resolves, never a one-line verdict with both sides missing (L127). An omissions note at the end (L128). Public condensed pages compress published pages only and add no new claims (L129, L130). Where doctrine rots on technology shifts, invariants split from dated tactics (L132).

**Hubs** route, and are short because routing is what they do; every link carries its clause (L143).

**Chrome** — heroes, sub-lines, badges, buttons, nav, meta. A tagline is a catalog line: a container noun plus topics, the way a book subtitle reads; a noun phrase predicates nothing, so it cannot sell, brag, hedge, or grade (L134). The attitude rides in the genre noun — "notes," "a collection" — never in attitude words (L136). Status and coverage lines carry nouns, counts, and states only; any word admitting a degree is a grade, and a grade is a sale (L138, L140).

---

---

## 5. Pages where you are the subject

Carried from the 2026-08-10 ruling; the derivation is [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]].

- A personal page is a note, not a message: nobody is addressed, no transaction is staged, and the conversation that produced it is never reenacted on it. Not addressed is not the same as not set up: the page still says what happened, when, and who is involved, for someone who wasn't there. (L112)
- The I owns events, wants, and judgments, never qualities. "I built," "I wanted," "I decided" pass; the writer doesn't describe what he is like — the reader concludes that from what he did. This governs self-description only; everything else the reader needs in order to follow the page is said outright. (L116)
- An inference wearing the owner's I is a forged signature; the fix is the declarative sentence, not a different pronoun — and the declarative keeps what the judgment rests on. (L115)
- The scoreboard is internal: a sentence's standard is the author's own want or need. Ranking the author against other people is the tell that it moved outside; comparison that gives the reader scale — faster than what, smaller than what — stays. (L117)

---

---

## 6. How a draft is made

- One continuous explanation to a real person, in the voice you would use talking them through it. The gate in §3 is applied afterward; it only deletes and swaps, and never repolishes a sentence that was natural speech. Where a deletion leaves a sentence without its referent, the sentence is rewritten, not shipped with the hole. (L6, L7)
- Every sentence can be followed by someone who has only read the sentences above it: each word refers to something the page already handed them or something they brought from ordinary life. A term the vault coined is said plainly the first time it appears, and the name comes after. If that reader would stop and ask "what does that mean?", the sentence isn't finished. A sentence carried from a source — an earlier page, an interview, a note, a hub's own line — hasn't been written; it is composed here from what it means, or it is left out. (Ruled 2026-08-20, [[journal/2026-08-20-writing-normally|Writing normally]]; 2026-08-21: "the only context you need is what's on the page and what you already establish yourself in a previous paragraph.") A count of things the page never names ("seven defenses", "two of them hold") and a finding the page refers to without giving ("each for a different reason", "the page weighs the trade") fail the same floor, because they point at something the page never put down. On a list page each item is read alone, so a blurb gives its own context and nothing above it counts but its title. This is a content fault and the fix is content: the thing pointed at goes on the page, or the sentence goes. (Ruled 2026-08-24: "out of context writing must be banned every fucking where.")
- Outline first, then writing, is the default for every page. The outline goes to the owner before any paragraph is written: the sections, what each carries, in what register, what stays out. The outline is shaped whole, part, whole as §2 defines it, any run of parts and wholes that starts and ends on a whole, and each section says which it is, so the shape is judged before a paragraph exists. He can tell the writer to skip it for a page. (Ruled 2026-08-22: "this should be the standard workflow for all pages. outline first then writing"; and that it is a default, not a hard rule.)
- A page where the thing handed over is the owner's own is made by the steps in [[02 - System/The Generator - Selfhood v2|The Generator — Selfhood v2]]: the old page reduced to facts and closed, the friend's question written down, the outline passed by the owner, the answer written to the owner one paragraph at a time against the holdings ledger, the rewrite pass and cold read, the old page reopened only to check facts. (Ruled 2026-08-22: "i do not want rearrangements, i want generations.")
- Confidence is sincerity, not a dial: assert what you would say to the listener, and where conversation would qualify, the qualification arrives with the sentence. (L11)
- A failure regenerates by the layer that failed — the whole page when the structure is wrong, the passage alone when the prose inside a sound structure is. Never line patching. What comes back first is a diagnosis; then, after the owner's eye, the regeneration, re-stitched to its neighbours. A fragment surviving untouched is the tell that no regeneration happened. (L8, L8a, L9, L148)
- A diagnosis has four parts or it is not one: what the owner holds, in his words from the record, dated; what the sentence makes him hold instead; the one generator in the writer that turns the first into the second; and a prediction — other places the same generator produced, found by looking. A diagnosis that only re-describes the flagged line is a feature list, and a diagnosis that names anything to remove is a cut wearing a label. Neither is answered with a regeneration. (Ruled 2026-08-21: "a proper diagnosis doesn't mean cut.")
- The strikes, with his reasons verbatim, are in [[02 - System/Rejected Specimens|Rejected Specimens]]. Read before drafting.

---

## 7. Exemplars

| Genre | Exemplar |
|---|---|
| Wiki concept telling | [[wiki/Concepts/The Two Meanings of Ego\|The Two Meanings of Ego]] |
| Concept telling from an evidence bank | [[wiki/Concepts/Catching the Inner Voice\|Catching the Inner Voice]] |
| Cold-open concept page | [[wiki/Concepts/The Trained Voice\|The Trained Voice]] |
| Operational page | [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules\|Bot Operating Rules]] |
| Craft page | [[wiki/Writing Craft/The Cold Open\|The Cold Open]] |
| Opening moves, verified specimens | [[wiki/Writing Craft/Opening Moves Catalog\|Opening Moves Catalog]] |
| Decision document | `/Users/n1/Projects/llm-knowledge-base/decisions/2026-06-11-engine-quartz-over-astro.md` |
| Blog post | `/Users/n1/Projects/tsumugu-core/content/blog/posts/rebuilding-dun.md` |
| Blog banned-list authority | `/Users/n1/Projects/tsumugu-core/content/blog/STYLE-CARD-BLOG.md` |
| Personal page | `/Users/n1/Projects/llm-knowledge-base/personal/2026-08-11-the-two-egos.md` |
| Personal page, body texture | [[wiki/Fitness/Movement as Accretion\|Movement as Accretion]] |
| Condensed page | [[wiki/Dimensions/Mindset/Mindset, Condensed\|Mindset, Condensed]] |
| Chrome | The KB hero sub-line and the Tsumugu front line, §15 |

Accepted lines, carried from the old specimen set:

```text
Linked notes on learning systems, language study, and software work with LLM agents.
        — KB hero sub-line, after roughly a dozen struck attempts
A Chinese dictionary built on form and story.
        — Tsumugu front line: describes exactly one dictionary
Coverage today: the TOCFL Level 1 characters, complete. Level 2 is in progress.
        — a status line in nouns, counts, and states
A language model's default voice is trained self-regard.
Bots watch; the desk changes things.
The research here splits into a standing half and a session half.
        — three cold opens: the claim in sentence one. Each works only because the page goes on
          to say what the named things are; the third assumes "the research here" is already on screen.
Among people who read Chinese, even fluent native speakers, it's common to know a character
well and still be unable to write it.
        — the blog run-up: scoping clause, then the claim
Flow state is a condition of full absorption in a single task, in which attention holds
without forcing and the sense of time recedes.
        — the whole named first, in owned words; the qualifier extends what it IS rather
          than starting how it works. Ruled the best of three drafts of the same page.
Attaching a written form to a word you already say and understand takes a fraction of the effort
of learning sound, meaning, and form together. Native literacy runs in that order.
        — fact-transferring where a sales line would go
```

---

---

## 8. Why this file was cut

Rebuilt 2026-08-20 from a 156-law version (in git, and at `_archive/Writing Standards - 156 laws - retired 2026-08-20.md`). The old file stated the right premise — L6: the laws are a filter applied afterward, never a template assembled from; L44: the laws say what may not appear, they do not set the target — and then ran 156 laws, about 120 of them on how prose should sound. Its consumers had to be told not to read most of it. Its law-and-counterweight pairs (L8–L10, L20–L20c, L52/L53, L56/L57, L62/L64, L73–L75, L113/L114) are the record of a ban producing a compliant failure and being answered with another ban. And it failed its own specimen test: L1, L3 (personal), L13, L17/L18, and L19 were contradicted by accepted openings and by the rulings of 2026-08-10 and 2026-08-13, and stayed on the books.

What survived is sorted by kind: a gate, what a page owes, who the speaker is, how a draft is made. A rule about how prose should sound does not join this file again; that job is the write-act's, and a strike is answered by a diagnosis and a regeneration, never by a new law here.

Cut again 2026-08-21 after a five-lens audit of every part (five readers, each reading the same list of parts for a different fault): the reproduction of the write-act in §1 came out — the act is read where it lives — and the whole-part-whole block moved here from the Selfhood generator as its single home. The residue test went back to the page that owns it, and the duplicated lines inside the file were folded.

Amended 2026-08-21 after the jargon-source audit (`01 - Workbench/jargon-source-audit-2026-08-21.md`): the file was a stack of subtraction rules with no floor under them, and it was written in its own undefined terms. The floor — every sentence readable from the sentences above it — went into §6 in the owner's words, and each rule that could be obeyed into unreadability got the line that says what still has to be on the page.
