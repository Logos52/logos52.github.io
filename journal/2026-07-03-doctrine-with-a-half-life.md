---
date: 2026-07-03
draft: false
tags: [blog, ai, agents, knowledge, writing]
description: "AI advice rots fast, but not evenly; splitting what you learn into invariants and dated tactics keeps the notes trustworthy as models improve."
---

# Doctrine With a Half-Life

Anyone who keeps notes about working with AI has met the problem: advice about models ages like produce. A prompting guide from a year ago reads like a historical document, workflow tips die with each release, and hard-won techniques for managing a model's weaknesses evaporate when the next version doesn't have them. The natural responses are equally bad. Writing nothing down wastes the learning, and writing everything down builds a notebook that is mostly wrong within a year while looking authoritative the whole time.

The rot is real but it is not even, and that unevenness is the useful fact. Some knowledge about working with AI is knowledge about the models, and it inherits their shelf life. Some of it is knowledge about responsibility and judgment, and that expires on a completely different clock, if at all. "This model handles long documents badly, so chunk the input" is a claim about a tool, dead the day the tool improves. "The human owns knowing whether the output is true enough to use" is a claim about who holds the risk, and no model release touches it, because more capable models make the verification question more pressing, not less.

The move that follows is to split the notes by half-life, explicitly, on the page. One section holds the invariants: rules expected to survive the models becoming far more capable, which in practice means claims about what stays human, judgment, taste, specification, verification, understanding, and about how delegation works between a person and any capable assistant. The other section holds the dated tactics: today's techniques, stamped with their write date, expected to rot, and honest about it. The date is not decoration. A tactic stamped six months ago announces its own suspect status, where the same tactic in an undated note quietly poisons trust in everything around it.

The test for sorting a new lesson is one question: does this depend on the current shape of the tools, or on the shape of the work? Chunking strategies, context-window budgets, and phrasing tricks depend on tools, so they get dated. Reviewing before shipping, writing down what correct means before delegating, keeping enough understanding to evaluate what comes back: those depend on the work, and they go with the invariants. Sorting takes a few honest seconds per lesson, and mis-sorting shows up later as either an invariant that died, which means it was a tactic wearing confidence, or a tactic that refuses to die, which is a candidate for promotion.

The price of the split is mostly psychological. Filing a hard-won technique under "expected to rot" stings, because the effort that produced it wants permanence, and a page that admits most of its own content is temporary feels weaker than one that asserts everything with equal confidence. It is the more trustworthy page anyway. A notebook that mixes the two rots wholesale the first time the ground shifts, and the reader, including the future author, has no way to tell which claims went down with it.

The ground is going to keep shifting; that much is the safest prediction in the field. What the split changes is what a shift costs. A mixed notebook loses everything to doubt the day its dated advice fails in public. A split one loses a section it had already marked as perishable, and the invariants stand where they stood, which is what doctrine is supposed to do.
