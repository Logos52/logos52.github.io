---
date: 2026-06-29
tags: [tsumugu, tsumugu-ed, dictionary, story-cards, memory, method-of-loci, rote-memorization, ics, outlier, decision]
---

# Tsumugu Story cards — the Modified-Method-of-Loci pivot

**Verdict:** Story cards pivot from a literary, realistic register to a single-character Modified-Method-of-Loci scene layered on the Form card's concepts. The Story rubric now derives primarily from the ICS Modified Method of Loci, with Outlier's "Rules of Effective Memorization" kept as the secondary source that already powers the Form. The Story card's one slot encodes only the arbitrary residue the Form leaves: binding the components into one drawable gestalt and pinning the after-pattern remainder of the sound.

## The problem

Each character entry carries two cards side by side. The **Form card** gives the etymology and mechanism — which functional components build the glyph (form 形 / meaning 義 / sound 聲 / empty 空), how they assemble, how the sound drifted — built from Outlier's seven [[wiki/Learning Craft/Rules of Effective Memorization|Rules of Effective Memorization]]. It runs consistently good. The **Story card** gives a mnemonic scene built from the components, and it runs uneven; many land, many don't. Wedge weighed scrapping Story cards outright.

We reviewed the first ~500 characters (the TOCFL A1 foundation, authored by the Fable model), calibrated against Wedge reading a random sample. Three patterns surfaced:

- **Redundancy with the Form.** The Story restates the Form's last sentence. 領: the Form ends "take the coat by the collar and the whole garment follows"; the Story says "one lift, and the whole coat follows." The slot is spent.
- **Bare sound-glyph as a prop.** A sound component sits in the scene as its literal glyph with no picture (衙: "inside sits 吾"). The piece contributes nothing to recall.
- **The ones that pop carry a kinetic beat.** An action chains the components and a final settle that *is* the meaning (提 "the handles swing once, then steady"; 科 "the strike-board levels it — this grade goes to this bin").

## The three decisions

1. **Drop the literary, realistic register.** It was an AI default that nobody chose. ICS names mundane and realistic elements as actively forgettable, so restraint is a defect here.
2. **Derive the Story rubric primarily from the ICS Modified Method of Loci** — the rote-memorization method from the iCanStudy course.
3. **Keep Outlier's "Rules of Effective Memorization" as the secondary source.** Its visualization and association rules reinforce the loci spine and continue to drive the Form card.

## The architecture insight

ICS doctrine, stated in the course: rote memorization is a last resort layered on top of concepts, and the method of loci does not serve information that has causal, functional, or conceptual relationships, so it should not replace a viable higher-order relational network.

The Form card **is** that higher-order conceptual network — functional decomposition plus the sound-series and the meaning-series. The Story card sits on top of it as the loci layer. Its single slot is spent on the arbitrary residue the Form cannot make logically inevitable: (a) the gestalt, how these specific pieces fuse into one drawable picture, and (b) the after-pattern sound remainder, the part the Form's sound-series doesn't already predict. Redundancy is fatal for one reason: a Story that re-explains the Form burns the one mnemonic slot on content the Form already owns, and later SRS repetition polishes an empty slot.

One caveat stated honestly: ICS demonstrates loci on ordered lists of roughly 20–150 arbitrary items. Rendering a single three-component character as a tiny loci micro-scene is a deliberate adaptation of the method, flagged as our design extrapolation rather than a quoted ICS use-case.

## Old → new format

| | OLD Story card | NEW Story card |
|---|---|---|
| Register | literary, realistic, restrained | loci micro-scene; exaggeration is a tool |
| Job | re-narrate the character (often the Form) | encode only the residue the Form leaves |
| Components | sometimes bare glyphs / labels | every component is one picturable element |
| Sound piece | often dropped in unhooked | pinned to a picturable, salient element |
| Structure | a sentence | 2–4 elements, spatially distinct, chained by action verbs |
| Meaning | sometimes stated / labeled | welded into the final settle (dual-coded), no English label |
| Memory basis | author taste | Modified Method of Loci (absurd / spatially distinct / interdependent) + draw-as-anchor |
| Retrieval | read-only | reconstructable: a prompt face and an answer face |

## The rubric in brief

Eighteen criteria across three tiers (full text in the working artifact).

**5 gates — a failure cuts or rebuilds the card.** G1 non-redundancy with the Form (add at least one element or beat absent from the Form, don't reuse its closing verb-phrase). G2 no bare unhooked glyph (every component realized as a picturable element). G3 meaning welded to the settle, no appended English label. G4 one connected components-only scene (props allowed only to visualize a component's function). G5 register and format (present tense, no instruction verbs, no meta or self-grading, folk parses marked).

**8 primary — the ICS quality levers; missing ~3 of 5 flags rather than cuts.** P1 interdependent web of specific action verbs. P2 one salient, exaggerated beat on the most arbitrary element, meaning still survives. P3 spatial distinctness. P4 sound pinned to a picturable element. P5 ~2–4 elements (an imported working-memory heuristic). P6 reconstructable into prompt and answer faces. P7 drawable as one scene with a minimal present-tense caption. P8 fixed persona for recurring radicals, fresh scene each time.

**5 secondary — Outlier reinforcement.** S1 anchor each element to known knowledge. S2 ancient-pictograph recovery for unpicturable modern glyphs. S3 worth a second look. S4 cognitive-load economy, one mechanism. S5 anchor to live vocabulary.

## The exemplar verdicts

- **領 → cut.** Restates the Form's closing line.
- **衙 → fix.** The sound piece 吾 sits parked as a bare glyph; give it a picture or drop it from the scene.
- **麋 → rebuild.** The folk-hook is right (米 reads as the rice the deer crops, and it carries the sound), and the scene must bake in the meaning-critical attribute — a *large* deer, an outsized one tripping over the paddy it keeps sprouting — not just a deer.
- **科 → cleanest pass.** "New grain (禾) rattles into the measure (斗); the strike-board levels it — this grade goes to this bin." Components-only, the category falls out of the leveling action, drawable in five strokes. Pushed harder on salience it would be the full model. (提 / 望 / 領 omit their phonetics 是 / 亡 / 令, so they are sound-incomplete exemplars.)

## Method note

We produced the rubric through a multi-agent workflow: six source-doc readers over the ICS loci/rote corpus plus the Outlier note → a synthesis → three adversarial critics (source fidelity, loci-completeness, and a six-card discrimination test) → a reconcile pass. The critics caught and removed several fabricated citations and rescoped two gates, which is why the grounding holds. The ICS course material stays private; the technique is synthesized, the transcripts are not reproduced. The companion essay [[journal/story-cards-as-memory-scenes|Story Cards as Memory Scenes]] carries the public write-up of the rote-memorization research.

## Open threads

Wedge's calls, still open:

1. **House salience ceiling** — playful-vivid as the corpus default, grotesque reserved for high-lapse characters.
2. **Triage for transparent compounds** — allow story-null when the Form leaves no honest residue, over forcing a scene (recommend allow story-null).
3. **Ship a drawn image per card** — an optional image slot with the English line as its caption.
4. **Hidden-answer / guess mode** — a prompt face and an answer face (recommend yes).
5. **Learner-as-actor in the scene** — a narrow G4 exception when it tightens the component binding (recommend the exception).
6. **Folk-parse mark syntax and caption word cap** — a lightweight visible mark plus a ~12–16-word ceiling.
7. **Fixed-persona registry** for recurring radicals (扌, 月, 鹿, 禾, 頁…), seeded from the highest-frequency components first.
8. **Rule-of-three maintenance loop** — a chronically failing Story escalates to the Form's sound-series and meaning-series for re-anchoring.

## Links

- [[wiki/Learning Craft/Rules of Effective Memorization|Rules of Effective Memorization]] — the Outlier synthesis behind the Form card and the secondary Story source.
- [[journal/story-cards-as-memory-scenes|Story Cards as Memory Scenes]] — the companion essay on the loci method.
- [[projects/tsumugu-ed|Tsumugu Encoding Dictionary]] — the reference layer these cards live in.

Provenance: a review-and-design session on the first ~500 A1 Story cards, calibrated against Wedge's own read, with the rubric verified through the multi-agent critic workflow above.
