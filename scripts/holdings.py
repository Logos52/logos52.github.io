#!/usr/bin/env python3
"""Holdings ledger. Built from the text as written, never from the plan.

For each paragraph of a draft, list every definite reference ("the X", "this X", "that X",
"these/those X"), every pronoun, every quoted or capitalised term, and say whether the page
gave it above. The writer may use in the next paragraph only what the ledger holds.

usage: holdings.py DRAFT.md [--upto N]   (N = check only the first N body paragraphs)
"""
import re, sys

STOP = {"the","a","an","this","that","these","those","same","first","second","last","next","other","whole","one","way","thing","things","time","part","rest","end","start","kind","sort","lot","bit","page","pages","site","reader","readers","writer","line","question","answer"}
PRON = re.compile(r"\b(it|its|they|them|their|theirs|this|that|these|those|he|him|his|she|her|hers|one|ones)\b", re.I)
DEF = re.compile(r"\b(the|this|that|these|those|such)\s+((?:[a-z][a-z'-]*\s+){0,2}[a-z][a-z'-]*)", re.I)
CAP = re.compile(r"(?<![.!?]\s)(?<!^)\b([A-Z][a-zA-Z'-]+(?:\s+[A-Z][a-zA-Z'-]+)*)\b")
QUO = re.compile(r"[\"“]([^\"”]{2,60})[\"”]")
# A count points at things; the things must be on the page. "two of the seven hold" with no list of the seven is a pointer to nothing.
COUNT = re.compile(r"\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d+)\s+(of\s+(?:the|those|these|them)\b|(?:[a-z-]+\s+){0,2}(?:reasons?|defen[cs]es?|charges?|grounds?|ways?|paths?|accounts?|steps?|links?|claims?|defences?|arguments?|objections?|moves?|cases?|tests?|parts?|kinds?|sides?|options?|versions?|camps?|drivers?|responses?)\b)", re.I)
# "The page weighs X" with nothing said about what comes out is an announcement, never a blurb.
# Words about the argument instead of the world. A blurb names the election, the debt, the school day; it never says reasons, claims, premises, evidence, or what holds.
ARGUING = re.compile(r"\b(reasons? (given|for|offered)|claims?|premises?|conclusions?|evidence|defen[cs]es?|the case for|the argument|holds? up|what holds|which of them hold|establish(es|ed)?|two things|two groups|outcomes?|in each case)\b", re.I)
ANNOUNCE = re.compile(r"\b(the|this) page (weighs|examines|tests|asks|looks at|traces|follows|says|sets out|takes|argues|describes|answers|shows|covers|treats|considers|explores|goes through|is about|deals with)\b", re.I)


def body_paragraphs(text):
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1: text = text[end+4:]
    text = re.sub(r"^#.*$", "", text, flags=re.M)
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    return paras

def stem(w):
    w = w.lower().strip("'’")
    for suf in ("ies","es","s"):
        if w.endswith(suf) and len(w) > len(suf)+2:
            return w[:-len(suf)] + ("y" if suf=="ies" else "")
    return w

def words(text):
    return [stem(w) for w in re.findall(r"[a-zA-Z][a-zA-Z'’-]*", text)]

def main():
    path = sys.argv[1]; upto = None
    if "--upto" in sys.argv: upto = int(sys.argv[sys.argv.index("--upto")+1])
    paras = body_paragraphs(open(path).read())
    if upto: paras = paras[:upto]
    seen = set()
    for i, p in enumerate(paras, 1):
        sentences = re.split(r"(?<=[.!?])\s+", p)
        lens = [len(x.split()) for x in sentences]
        shorts = [x for x in sentences if len(x.split()) <= 6]
        print(f"\n¶{i}  ({len(p.split())} words; sentences {lens})" + (f"\n  short sentences (a punch is a join taken out; check each against the one before it): " + " | ".join(shorts) if shorts else ""))
        para_seen = set(seen)
        for s in sentences:
            refs = []
            for m in DEF.finditer(s):
                np_ = m.group(2).strip()
                heads = [stem(w) for w in np_.split() if stem(w) not in STOP and len(stem(w)) >= 3]
                if not heads: continue
                status = "given" if any(h in para_seen for h in heads) else "NOT GIVEN"
                refs.append(f"{m.group(1).lower()} {np_} [{status}]")
            for m in QUO.finditer(s):
                refs.append(f"quoted “{m.group(1)}”")
            for m in COUNT.finditer(s):
                refs.append(f"COUNT “{m.group(0)}” [the things counted must be named, with what each comes to]")
            for m in ARGUING.finditer(s):
                refs.append(f"ARGUING “{m.group(0)}” [talk about the world, not about the argument; name the thing]")
            if ANNOUNCE.search(s):
                refs.append("ANNOUNCES [a blurb or sentence that says what the page does must also say what it finds]")
            for m in CAP.finditer(s):
                t = m.group(1)
                if t.split("'")[0] in ("I",) or t.startswith("I'"): continue
                refs.append(f"name {t} [{'given' if stem(t.split()[-1]) in para_seen else 'NEW'}]")
            prons = []
            for m in PRON.finditer(s):
                pr = m.group(1)
                before = s[:m.start()]
                prev = sentences[sentences.index(s)-1] if sentences.index(s) > 0 else ""
                cands = [w for w in re.findall(r"\b[a-z][a-z'-]{3,}\b", (prev + " " + before).lower()) if w not in STOP and not w.endswith("ly") and w not in ("before","after","about","where","when","what","which","every","anything","something","nothing","whatever","whoever","their","there","then","than","from","into","with","would","could","have","been","says","said","tell","told","know","read","write","come","comes","open","puts","does","done","gets","make","made")]
                cands = list(dict.fromkeys(cands))[-6:]
                tag = f"{pr}→?({', '.join(cands[-3:])})" if len(cands) >= 2 and pr.lower() in ("it","this","that","its") else pr
                prons.append(tag)
            for w in words(s): para_seen.add(w)
            flag = "  <-- " + "; ".join(refs) if refs else ""
            pr = f"   pronouns: {', '.join(prons)}" if prons else ""
            short = s if len(s) <= 110 else s[:107] + "…"
            print(f"  · {short}{flag}{pr}")
        new_terms = sorted(w for w in (para_seen - seen) if len(w) > 3 and w not in STOP)
        print(f"  holds after ¶{i}: +{len(new_terms)} new words; e.g. {', '.join(new_terms[:14])}")
        seen = para_seen
    print("\nCOUNT = a number of things is mentioned; the things and what each comes to are on the page or the count goes. ANNOUNCES = the sentence says what the page does; it must also say what the page finds. ARGUING = a word about reasoning where the world should be; name the election, the debt, the school day.")
    print("\nNOT GIVEN = a definite reference whose noun never appeared above it on the page. it/this/that followed by →?(…) means more than one noun nearby could be the referent; the writer names it.")

if __name__ == "__main__": main()
