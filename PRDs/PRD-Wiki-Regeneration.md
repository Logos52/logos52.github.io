---
title: "PRD — Wiki Regeneration"
type: prd
status: unsigned
created: 2026-08-13
updated: 2026-08-13
tags:
  - prd
  - llm-wiki
  - writing
---

# PRD — Wiki Regeneration

**Recommendation: run it, but scope it to 245 pages rather than 331, and write the standard first.** The target is the prose. The wiki's writing does not read well, and the program exists to fix that — not to repair metadata, not to launder a voice while keeping the sentences. Nothing carries over at sentence level: the original page is the source of *claims*, never of prose.

Underneath the prose problem sit causes worth naming, because a generator that cannot name them repeats them. The largest is that most pages were authored as configuration about a third party called "the user," for an assistant, and never converted into documents for a reader. Others: reasoning delegated to bullet skeletons, vocabulary issued on credit, findings with no evidence behind them. The 86 pages built on private course vocabulary are a separate problem that regeneration cannot solve, and they need a ruling before they enter any queue.

**What it costs:** the research lanes, not the writing, are the expense — 119 pages need real evidence banks, 172 need light verification. Whole-article regeneration on failure means a 30% fail rate buys roughly 74 extra full generations. Accepting this reverses the forward-only rule set 2026-07-22, whose reasoning was that a sweep would touch pages you genuinely like; the A/B controls exist to test exactly that.

**What would flip me against it:** if the pilot's regenerated pages beat the originals only by getting longer, or if the two control pages that are already strong come back "improved," the judge is rewarding change rather than reader quality and the program should stop at the pilot.

## Measured state

| Signal | Count |
|---|---|
| Wiki pages | 331 |
| Total words | 415,044 (avg 1,253) |
| Pages with a Sources section | 107 of 331 |
| Pages already in the current register | 28 |
| Pages carrying a bullet skeleton where prose should reason | 191 |
| Pages asserting findings with no source | 148 |
| Pages leaning on private internals a stranger cannot resolve | 115 |
| Pages naming private course vocabulary (ICS, BHS, SIR, Camp I) | 86 |
| Pages ending in an unannotated link dump | 85 |
| Pages that talk about themselves | 85 |
| Pages too thin to be usable | 70 |
| Unprocessed source files in `raw/` | 768 |

The June 2026 audit measured 76 of 255 pages carrying sources. Today it is 107 of 331. The ratio has not moved in seven weeks.

## The diagnosis

A stranger read ten pages cold. Six failed. One scoping caveat on that read, since it shapes what follows: the rubric it worked from listed honesty and orientation faults, and carried no axis for whether the writing is any good. So its report that "the sentences are clean" means grammatical and rule-compliant, not well written. Prose quality was never measured because nobody asked it to be. The evidence that it is the real problem is the owner's, twice: the wiki does not read well to him, and even the opening renders that passed every checkable test were rejected for having no coherence.

The mechanisms below are causes of the bad read, not a replacement for it:

1. **Configuration voice.** The page narrates the study habits of an unintroduced third person. "Spaced Interleaved Retrieval is the user's main system for that work." The reader spends the page discovering they are eavesdropping.
2. **Vocabulary issued on credit.** BHS, SIR, ICS, WPW, 3Cs, and the verbs Aim / Shoot / Skin used as bare operators. The Glossary closes the loop rather than opening it — it defines the Bear Hunter System as "the user's main encoding system."
3. **Category without instance.** A page about building maps contains no map.
4. **Meaning deferred down the link.** Up to 57 unannotated wikilinks, each landing on a page built the same way.
5. **Completeness over entry.** The full option space, unranked, with no default. One page ships two live spacing schedules twelve lines apart with different intervals and nothing saying which is current.
6. **The workshop left visible at the exit.** Open Questions addressed to the vault owner, which retroactively downgrade the page above them from doctrine to draft.

## The pipeline, per page

**1. Extraction.** Every claim, number, threshold, example, and link is pulled from the original into a **claim ledger**. This happens before any research. The ledger is the contract that stops the program becoming a game of telephone.

**2. Research lane.** Each ledger claim is checked against outside evidence. Four verdicts: supported with a citation, contradicted with the evidence, unsupported but plausible, unsupported and doubtful. A bounded gap pass asks what the field knows that the page is missing, ranked by whether the addition changes what a reader does. Depth is tiered from the census: 119 heavy, 172 light, 40 none. The lane reads `raw/` first — 768 files of the vault's own source material, private, already paid for, and the material these pages were supposed to be compiled from.

**3. Opening move, routed.** The router assigns the move from the approved palette using checkable predicates on the drafted thesis. The move is selected at design time; the opening sentences are never written separately. An opener drafted apart from its page is patchwork at step one.

**4. One-shot generation.** The page is drafted as a single continuous explanation to a real listener, from the original, the ledger, the research, the standard, and the assigned move. The filter pass afterward only deletes and swaps.

**5. The gate.** Binary at article level. No line edits, no section-level fixes, no severity score. A fail must quote the offending words; a judge that cannot point at the language has found a preference, not a fault. **Borderline is a fail.**

**6. On failure.** The output is a one-sentence diagnosis naming the *generator* fault, generalized, never a fix list. The page regenerates whole with the prior draft dead as material. An n-gram overlap check between the failed draft and its replacement proves the regeneration happened; high overlap rejects the replacement.

**The overlap check runs twice, and the second run is the one that enforces the program's purpose.** Original page against regenerated page: if long n-grams survive, the page was edited rather than rewritten, and it fails. Proper nouns, quoted sources, wikilink targets, and unavoidable terms of art are excluded from the count. Paired with the claim ledger, the two checks state the whole contract mechanically — the ledger says keep every claim, the overlap check says keep none of the sentences.

**7. Three strikes halts the run.** Not the page — everything. Pages in flight finish, nothing new launches. Same fault named three times means the standard is missing a law; three different faults mean the failure is upstream in the routing or the bank.

**8. Promotion.** Drafts land in `01 - Workbench/regen-2026-08/`, mirroring wiki paths, never overwriting. On accept, the original moves to `_archive/wiki-pre-regen-2026-08/` and the draft moves into `wiki/`. Both folders are already on the publish denylist. Five consecutive accepts with no edits flips the program to unattended; a later rejection re-arms per-page review.

## The opening palette, ruled

**Working core (233 pages):** copular definition · plain causal thesis · definitional stack · dated checkable fact.

**Narrow:** attributed folklore · opposing position then flat dissent · retell the object intact · unhedged absolute with scope repaired.

**Fenced to personal pages:** the debt · own practice in first person.

**Cut:** epistemic preamble (talks about the document by construction) · real question (the reveal with a one-sentence fuse) · scope fence (fronts the discarded reading) · occasion plus deliverable (42 pages routed there means 42 invented occasions). The orphaned 42 route to the copular definition.

The run-up survives on roughly 14% of the corpus: definitional-stack openings where a stranger cannot parse the thesis without vocabulary first, plus the seven personal pages. The struck form — background before the claim — is illegal in every genre.

**Escalation is per cohort, not per page.** The census found the molds: 18 pages from one course import, 12 from another system, 6 workbench imports. One board of three openers on a representative page binds the cohort. Expected escalation 11–14%, delivered as ten parallel boards, never serially.

## The standard, rewritten first

The current file is 9,940 words across 485 lines and carries four live contradictions, including §The Default Register (run-up openings, 2026-08-10) against §The Cold Open (payload in sentence one, 2026-08-12), and §Thesis First contradicting its own amendment four lines above it. Roughly a third of the file is duplication — twenty repeated rules, six statements of Whole–Part–Whole, four of the generation law — and another third is date stamps, attributions, and strike narratives.

It is regenerated whole, in one shot, written whole–part–whole, at 3,200–3,800 words. Ninety-one items carry forward, including the single test, the generation law, the honesty kit, the required anchors (Core Thesis, Compressed Takeaways, the Operating Model, specific links, Open Questions, Sources), and the weak/strong specimen pairs. Twenty-eight items are cut, all of them provenance rather than law: date stamps go to the journal, strike narratives go with them, and the exemplars move to an index instead of living inside rule text.

## Success criteria

- The stranger's six failure modes, re-run on regenerated pages, score 0 of 6 where the originals scored 5 or 6.
- Every regenerated page carries a Sources section with citations a stranger can reach, or an explicit note of what could not be verified.
- The claim-coverage diff shows every ledger claim either present or dropped on the record with a reason.
- The original-to-new overlap check shows no surviving sentence-length n-grams outside the excluded classes. A page that shares prose with its predecessor was edited, not regenerated.
- Every page passes the coherence gate on its own evidence: each sentence picks up a thread from the one before, no paragraph carries more than a working-memory load, no run of cold-open subjects, and the page survives being read aloud.
- Each page's outbound wikilink set survives the regeneration exactly.
- No opener exceeds 45 words or one subordinate clause.
- The two already-strong control pages are **not** rated improved. If they are, the test is void.

## Rulings

All six ruled 2026-08-13. The rationale for each is kept below the ruling.

1. **Course vocabulary — house terms stay, defined properly.** BHS, SIR, ICS, Camp I and the rest keep their names and get definitions a stranger can enter. No page points a reader at a course they must buy, and no page instructs a reader to use materials they cannot reach. Provenance stays private and withheld rather than moving to Sources. Consequence: the Glossary leaves the exempt list and is regenerated, since it currently defines the Bear Hunter System as "the user's main encoding system," which closes the loop instead of opening it.
2. **Condensed pages — exempt, but the workshop gets stripped.** No regeneration and no register change. A surgical pass removes the internal to-do markers, the dated private ruling, and the owner's name.
3. **Thin pages — ruled per group.** Navigation shells and vault-operational pages stay short with a prose pass only. The thirteen underwritten concepts, the twelve unearned technique pages, and the eight-page immersion cluster grow with real research. The miscellany is decided per page by what its research lane returns. The broken Interleaving Table is regenerated regardless. No page is padded toward the corpus average.
4. **Link annotation — in scope, all 85 pages.** Every link carries a clause saying what that page contributes.
5. **The coherence judge blocks** the whole article exactly as the performance judge does.
6. **Structure is reopened.** The six shadow duplicates are merged; deleting files and rewriting inbound links is authorized. This supersedes the earlier scope line that held page inventory and the link graph frozen.

## The rationale behind each ruling

**1. The 86 private-vocabulary pages.** This is the largest unresolved thing in the program and it is not a writing problem. These pages are built on a private paid course's architecture — Camp I, the Bear Hunter System, Multipass, Skills Audit instructing readers to review "checkpoint videos" they cannot access. Your own standard bans student-facing material from citing or implying a paid program. Three options: re-derive each concept from public evidence and drop the private naming; keep the vocabulary and make the Glossary define it properly for a stranger; or hold these pages out of the program entirely. **The first is honest and expensive. I recommend it, and it roughly doubles the research cost.**

**2. Coherence has no test, and it is the primary gate.** Since the target is prose quality, the coherence judge is not an addition to the gate — it is the gate, with the performance judge beside it. You named the fault precisely: renders that passed every checkable test still read as incoherent. Every mechanism for it is already written in the standards (each sentence picks up a thread, the paragraph as a working-memory unit, density positional, no run of cold-open subjects, the read-aloud test) and not one has ever been made checkable. I will build it under the same evidence discipline as the performance judge — no fail without a quoted exhibit. Confirm it blocks the whole article the same way.

**3. The condensed exemption may not hold.** You exempted the eight condensed pages. Read cold, one of them leaks the workshop as badly as any old page: twenty inline "owner page owed" markers, a dated private ruling, your name. Verdict from the read: exemption is not the same as clean. Do they stay out?

**4. Duplicate pages need merge rulings.** Three Bear Hunter stubs shadow the real Aim / Shoot / Skin pages and contradict them; Schema versus Schema Construction; Note-Taking versus Non-Linear Note-Making. Regeneration cannot fix duplication — it produces two well-written pages that disagree. Structure is out of scope by your ruling, so these ship as-is unless you rule otherwise.

**5. Seventy pages are too thin to be usable.** Some are 271-word routing tables. Regeneration will inflate them toward the corpus average unless something says not to. Grow them with real research, merge them upward into their parents, or leave them short and honest?

**6. Link annotation, 85 pages.** Your own CLAUDE.md requires links to say what the linked page contributes. Eighty-five pages end in unannotated dumps of up to 57 links. In scope or out? In scope, it is real work per page and it is the single biggest fix for the redirect-chain complaint.

**Smaller, decided unless you object:** regenerated pages that carry real sources graduate to `status: mature` (currently zero pages have) · batches run by cohort so mutually-linked pages regenerate together · the site carries two voices mid-run, which is acceptable because the alternative is holding 300 pages unpublished · the 30 Story Craft pages need exemplars from published fiction, since unpublished-story internals are banned on the public wiki.

## Phasing

1. **Standard.** Regenerated whole, one shot, from the workflow that produced the accepted August pages. Your read before anything else runs.
2. **Pilot / A/B.** Eight pages: the worst case, the honest median, a stub, a heavily-linked hub, a confound (excellent prose trapped in a closed world), and two controls that are already strong plus the policy control. Board with old and new side by side, drop logs attached.
3. **Full run**, batched by cohort, per-page review until five consecutive clean accepts.
4. **Ship** per batch.

## Novelty note

No prior attempt at a prose regeneration of this wiki exists. The nearest prior pass (journal, 2026-06-25) was metadata, links, and site fixes; its own verdict called the wiki "a high-quality draft corpus, not a compiled artifact." This attempt differs in kind: it regenerates prose from a research lane rather than repairing metadata. A domain attempt catalog gets created beside this document on the first failure.
