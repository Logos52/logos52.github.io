---
title: "The Price of a Training Corpus"
type: concept
status: developing
created: 2026-07-26
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
source-count: 5
written-by: opus
model: grok
description: "What US court rulings and Anthropic's 1.5 billion dollar settlement say a lab must pay for the text it trains a model on."
tags:
  - ai-policy
  - copyright
  - concepts
  - training-data
  - economics
  - incentives
  - red-teaming
---

# The Price of a Training Corpus

A training corpus is the body of text a company feeds an AI model so that the model learns language and facts. In 2025 and 2026 American courts and settlements began to put a price on that text: a judge ruled that training on bought books is allowed and that copying pirated ones is not. For anyone building a model, the two questions that now set the cost are how the text was obtained and whether the finished model competes with the people who wrote it.

## Takeaways

- Anthropic paid $1.5 billion to settle claims over pirated books.
- The payout was about $3,000 for each of 500,000 books.
- Training on lawfully bought books was ruled fair use.
- Downloading and keeping pirated copies was ruled infringement.
- A model that competes with its source is on weaker ground.
- Only the largest labs can pay settlements of this size.

## How the price is set

Copyright law in the United States allows some copying without permission, under a rule called fair use. A court weighs four factors, and the fourth, harm to the market for the original work, often decides the case. In June 2025 Judge Alsup ruled in Bartz v. Anthropic that training on books the company had bought was fair use, and that downloading millions of books from pirate libraries and keeping them was not. The authors were allowed to sue as a group over the piracy alone. In 2025, in Thomson Reuters v. Ross, a court refused fair use to a legal search tool trained on the summaries in Westlaw, Thomson Reuters' own legal database, because the tool competed with Westlaw.

- One copy bought and trained on: fair use, under the Anthropic ruling.
- Downloaded a pirated copy and kept it: infringement.
- Built a product that replaces the source: likely infringement.
- Neither ruling came from an appeals court.

| How the text was obtained | What the model does | Result |
| --- | --- | --- |
| Bought | General writing | Fair use |
| Pirated and kept | General writing | Liable |
| Either way | Replaces the source | At risk |

## The settlement

Anthropic chose to settle the piracy claim instead of going to trial. A judge gave the settlement final approval on 20 July 2026. It is the largest copyright settlement in American history and the first large one over AI training. Many other cases were still open in July 2026, among them the New York Times against OpenAI and suits brought by music publishers.

- About 7 million books were downloaded from pirate sites.
- About 500,000 books qualified for payment.
- Lawyers' fees came to $101 million.
- 91% of eligible authors had filed a claim by July 2026.
- First payments were expected by 15 November 2026.

## The position labs are in

In court the labs argue that learning from the world's published text is fair use. In 2026 the same labs complained to the US government that Chinese labs were training on their models' answers, a practice called distillation. Anthropic's public report on it counted about 24,000 fake accounts and over 16 million exchanges, and described the harm as a risk to national security. The report did not call the practice theft of intellectual property, and the labs' own training on published text would fit the same description.

- Calling distillation theft would help the authors suing the labs.
- Fake accounts break a lab's terms of service, no copyright claim needed.
- Startups built on Chinese open models would face the same charge.

## What it means for builders

A settlement of this size is a cost that only the richest labs can pay. For those labs, the going settlement rate works like a licence fee. For a small builder the court rulings are what count, since a single suit could end the company. Content owners have started to ask for payment in advance, and some ask Google to use one program to read their websites for search and a different one to read them for AI training, so that they can block the second.

- Buy the books, or license the text, before training.
- Avoid products that replace a specific source's service.
- One public proposal: labs set aside 10% of revenue to pay creators.

## Related pages

- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]]: a ten-figure liability behaves like the fixed cost in that page's step 3, absorbable only by the largest incumbents; that page covers who holds the gate, this page covers how the corpus gets priced.
- [[wiki/Red Team/Epistemic Exceptionalism|Epistemic Exceptionalism]]: its loop test, what a framework can output other than "trust me / my group," is the check to run on the hypocrisy case, subject to that page's gate.
- [[wiki/Concepts/Riding the AGI|Riding the AGI]]: carries proprietary data sets as a one-clause barrier to entry; the settlement figure is what that clause costs.
- [[wiki/Concepts/Prohibition After Diffusion|Prohibition After Diffusion]]: the ban question from the same episode; this page supplies the liability channel by which an IP-theft framing taints derivative work.
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]]: where value settles once models commoditize; a licensed forward pipeline is a cost on whoever holds the model layer.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]]: owns the detection drill: what language is doing emotional work, who benefits if the frame becomes the default; "industrial scale distillation attack" is a live specimen.

## Sources

- All-In, episode 282, 25 July 2026. Settlement segment. Panel unlabeled in the body; seats as used above. Source of the conversation, the seats, the same-speaker contradiction, and the ten-percent pool.
- Reuters, 20 July 2026. "US judge approves Anthropic's $1.5 billion settlement in copyright lawsuit." <https://www.reuters.com/world/us-judge-approves-anthropics-15-billion-settlement-copyright-lawsuit-2026-07-20/>. Final approval. The approving judge on this item is not the judge who wrote the June 2025 training ruling.
- Anthropic Copyright Settlement site. <https://www.anthropiccopyrightsettlement.com/>. Class size, per-title allocation, claim mechanics. Case: *Bartz v. Anthropic*, No. 3:24-cv-05417 (N.D. Cal.).
- Alsup, J., 23 June 2025, *Bartz v. Anthropic*, N.D. Cal. Training on legally acquired books held fair use; downloading and keeping pirated library copies held not. Class later certified for piracy only.
- *Thomson Reuters Enterprise Centre GmbH v. Ross Intelligence Inc.* (D. Del. Feb. 2025), Bibas, J. District-court summary judgment: not fair use, because a competing legal-research product trained on Westlaw headnotes; factor four did the work. Not generative book-training. Not appellate.
- Anthropic, "Detecting and preventing distillation attacks." <https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks>. Cited on the show. Phrase test not re-run here; open the document.
