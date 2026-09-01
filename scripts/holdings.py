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
# Slop, 2026-09-01. Owner on two pipeline rewrites (Fable and Grok): both bad;
# the riddle sentences are "what most people consider to be slop."
# Tight on purpose. Do not widen without a new specimen.
# 1. not X but Y as the next-step definition.
# 2. not X; it is Y
# 3. Recurrence-absence (2026-09-01, third specimen). This instance is named
#    as the last instance of the same noun, minus something.
#    Hits: "lacks something the head before it had";
#          "missing something the last head still had";
#          "That run cannot see the notes the last run used."
#    Misses on purpose: "Each job is a new run of the model.";
#          "The previous chapter ends on a question.";
#          "The rewrite chat gets the finished draft and one prompt."
NOT_BUT = re.compile(
    r"\bnot\s+(?:just\s+|only\s+|another\s+|merely\s+|simply\s+)?[^,.;:]{1,40}?\s+but\s+(?:a|an|the|to)\b",
    re.I,
)
NOT_SEMI_IT_IS = re.compile(
    r"\bis not\s+[^.]{1,60}?;\s+it is\b",
    re.I,
)
ABSENCE_RE = re.compile(
    r"\b("
    r"lacks?|lacking|missing|"
    r"cannot see|can'?t see|"
    r"does not (?:have|see|get|know|use)|"
    r"doesn'?t (?:have|see|get|know|use)|"
    r"never sees?|"
    r"without what|"
    r"only what"
    r")\b",
    re.I,
)
NOUN_BEFORE_IT = re.compile(
    r"\bthe ([a-z][a-z'’-]{2,}) before (?:it|that)\b",
    re.I,
)
LAST_NOUN = re.compile(
    r"\bthe (?:last|previous|prior) ([a-z][a-z'’-]{2,})\b",
    re.I,
)
WEAK_NOUN = STOP | {
    "time", "day", "year", "week", "moment", "point", "case", "fact",
    "word", "name", "term",
}
SLOP_FIX = (
    "This thing is written as the last thing of the same name, minus something. "
    "Say what this thing is handed, as objects. Do not write the minus."
)


def recurrence_absence(sentence):
    """Return the span if this sentence names an instance as the last
    instance of the same noun, minus something. Else None.

    QA gate for the fragment the owner named 2026-09-01. Not a write-act.
    """
    if not ABSENCE_RE.search(sentence):
        return None
    m = NOUN_BEFORE_IT.search(sentence)
    if m and stem(m.group(1)) not in WEAK_NOUN:
        return m.group(0)
    stems = [stem(w) for w in re.findall(r"[a-zA-Z][a-zA-Z'’-]*", sentence)]
    for m in LAST_NOUN.finditer(sentence):
        noun = stem(m.group(1))
        if noun in WEAK_NOUN:
            continue
        if stems.count(noun) >= 2:
            return m.group(0)
    return None


LOAD_FIX = (
    "A reader holds about four things at once. This sentence asks for more. "
    "Split it. One next step per sentence. A diagram carries a list of jobs."
)
# "that the / that same / that sentence" is a determiner, not a relative.
LOAD_DET = STOP | {
    "same", "such", "very", "more", "most", "own", "new", "old", "few",
    "many", "all", "any", "each", "every", "both", "some", "another",
    "either", "neither", "its", "his", "her", "their", "our", "my", "your",
}
LOAD_VERB = re.compile(
    r"^(?:is|are|was|were|has|have|had|does|do|did|can|could|will|would|"
    r"cannot|can't|should|must|may|might|lacks?|missing|"
    r"wrote|made|held|said|saw|got|came|went|took|gave|kept|left|felt|"
    r"found|knew|thought|told|put|set|let|led|"
    r"[a-z]{3,}ed|[a-z]{3,}ing|[a-z]{3,}s)$",
    re.I,
)


def relative_count(sentence):
    """Relative clauses the reader has to keep open. Not 'that' as a determiner."""
    n = len(re.findall(r"\b(?:who|which)\s+[a-z]", sentence, re.I))
    for m in re.finditer(r"\bthat\s+([a-z']+)", sentence, re.I):
        w = m.group(1)
        if w.lower() in LOAD_DET:
            continue
        if LOAD_VERB.match(w):
            n += 1
    return n


def load_hit(sentence):
    """Overload: the sentence asks a reader to hold more than about four things.

    Owner 2026-09-01: a human mind holds about four items; this writing was
    for someone with twelve. Cowan working memory, not Miller 7±2.

    Tight: two extra bindings (a relative plus because/if, or two relatives,
    or because plus a second clause), or a contrast plus a relative.
    Word-count-plus-and was too noisy on ordinary pages.
    """
    t = sentence.lstrip()
    if t.startswith("|") or t.startswith("```") or "│" in sentence:
        return None
    if t.startswith("- ") or t.startswith("* "):
        return None
    wc = len(sentence.split())
    if wc < 22:
        return None
    rels = relative_count(sentence)
    stack = len(re.findall(r"\b(?:because|if|although|while)\b", sentence, re.I))
    contrasts = len(re.findall(r"\bbut\b", sentence, re.I))
    extra_and = len(re.findall(r",\s+and\b|; ", sentence))
    nests = rels + stack + extra_and
    if nests >= 2 or (contrasts >= 1 and rels >= 1):
        return (wc, nests, rels)
    return None


def slop_hits(sentence):
    hits = []
    m = NOT_BUT.search(sentence)
    if m:
        hits.append(("not-X-but-Y", m.group(0)))
    m = NOT_SEMI_IT_IS.search(sentence)
    if m:
        hits.append(("not-X; it is Y", m.group(0)))
    m = recurrence_absence(sentence)
    if m:
        hits.append(("recurrence-minus", m))
    return hits


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
            for kind, span in slop_hits(s):
                refs.append(f"SLOP “{span}” [{kind}. {SLOP_FIX}]")
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
            load = load_hit(s)
            if load:
                wc, nests, rels = load
                refs.append(f"LOAD [{nests} extra bindings, {wc} words. {LOAD_FIX}]")
            flag = "  <-- " + "; ".join(refs) if refs else ""
            pr = f"   pronouns: {', '.join(prons)}" if prons else ""
            slop = slop_hits(s)
            short = s if (slop or load or len(s) <= 110) else s[:107] + "…"
            print(f"  · {short}{flag}{pr}")
            if slop:
                print(f"  >>> SLOP  {s.strip()}")
                print(f"      {SLOP_FIX}")
            if load:
                wc, nests, rels = load
                print(f"  >>> LOAD  {s.strip()}")
                print(f"      {nests} extra bindings in one sentence (about four things is the limit). {LOAD_FIX}")
        new_terms = sorted(w for w in (para_seen - seen) if len(w) > 3 and w not in STOP)
        print(f"  holds after ¶{i}: +{len(new_terms)} new words; e.g. {', '.join(new_terms[:14])}")
        seen = para_seen
    print("\nCOUNT = a number of things is mentioned; the things and what each comes to are on the page or the count goes. ANNOUNCES = the sentence says what the page does; it must also say what the page finds. ARGUING = a word about reasoning where the world should be; name the election, the debt, the school day.")
    print("\nNOT GIVEN = a definite reference whose noun never appeared above it on the page. it/this/that followed by →?(…) means more than one noun nearby could be the referent; the writer names it.")
    print("\nSLOP = a sentence people would call AI slop: 'not X but Y' as the next step, or this thing named as the last thing of the same name minus something. Print is the full sentence. Repair: say what this thing is handed, as objects. Do not write the minus.")
    print("\nLOAD = the sentence asks the reader to hold more than about four things at once. Split it. One next step per sentence.")


SELFTEST = [
    # must catch
    (True, "each done by a head that lacks something the head before it had."),
    (True, "four jobs can beat that if each job is done by a head that is missing something the last head still had."),
    (True, "That run cannot see the notes the last run used."),
    (True, "each helper sees only what the last helper wrote."),
    # must miss
    (False, "The work is split into four jobs."),
    (False, "Each job is a new run of the model."),
    (False, "The rewrite chat gets the finished draft and one prompt."),
    (False, "What follows is the short form."),
    (False, "Repeating is not a weak version of processing; it is a different operation."),
    (False, "The previous chapter ends on a question."),
    (False, "Watch writes the results of its check to a file in a shared folder."),
]


LOADTEST = [
    (True, "So the fix was not another rule but a separation of the work into four jobs, each done by a head that lacks something the head before it had."),
    (True, "four jobs can beat that if each job is done by a head that is missing something the last head still had."),
    (True, "The head that wrote a sentence cannot see what is missing from that sentence, because the head's own memory fills the gap, and a rule read by that same head is satisfied by that same memory."),
    (False, "The work is split into four jobs."),
    (False, "A person can hold about four things at once."),
    (False, "As of 31 August 2026, five lab families sit close enough on coding benches that people who use them every day pick by failure mode, not by a leaderboard."),
]


def selftest():
    failed = 0
    for want, sent in SELFTEST:
        got = recurrence_absence(sent) is not None
        if got != want:
            failed += 1
            print(f"FAIL want={want} got={got}: {sent}")
    for want, sent in LOADTEST:
        got = load_hit(sent) is not None
        if got != want:
            failed += 1
            print(f"FAIL LOAD want={want} got={got}: {sent}")
    if failed:
        print(f"{failed} failed")
        sys.exit(1)
    print(f"ok {len(SELFTEST)} recurrence-minus cases, {len(LOADTEST)} load cases")


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        selftest()
    else:
        main()
