#!/usr/bin/env node
// check-two-egos.mjs — mechanical layer of the Two Egos QA (02 - System/Two Egos QA.md).
// Extracts every first-person sentence from the given markdown files and pattern-flags
// known self-regard tells. Flags are CANDIDATES for the judgment pass, never verdicts;
// an empty worklist is not a pass. Usage: node scripts/check-two-egos.mjs <file.md> [...]

import { readFileSync } from 'node:fs';

const TELLS = [
  ['self-description', /\bI(?:'m| am)\b/],
  ['kind-of-person', /\b(?:kind|type|sort) of (?:person|writer|reader|man|woman)\b|\bthe type who\b/i],
  ['comparative-rank', /\bbetter than\b|\bworse than\b|\bahead of\b|\bmost people\b|\bfew people\b|\bone of the (?:few|only)\b|\bunlike most\b|\bthe only one\b/i],
  ['credential', /\bas an? (?:\w+ ){0,2}(?:engineer|researcher|expert|writer|linguist|professional|veteran)\b|\byears of experience\b|\bexpert in\b/i],
  ['prediction-claim', /\bas I predicted\b|\bI (?:predicted|called it|knew it would|saw it coming)\b/],
  ['audience-flinch', /\bnot to brag\b|\bI know how (?:this|that) sounds\b|\bhumble\b|\bhumblebrag\b|\bhonestly\b|\bto be honest\b|\bI'll admit\b|\bI confess\b|\bforgive me\b/i],
  ['self-superlative', /\bmy (?:best|proudest|greatest|finest)\b/i],
];

const FIRST_PERSON = /\bI\b|\bI'(?:m|ve|d|ll)\b|\b[Mm]y\b|\b[Mm]e\b|\b[Mm]ine\b|\b[Mm]yself\b/;

function stripNonProse(text) {
  let t = text;
  if (t.startsWith('---')) {
    const end = t.indexOf('\n---', 3);
    if (end !== -1) t = ' '.repeat(end + 4) + t.slice(end + 4); // preserve offsets
  }
  t = t.replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, ' '));
  return t;
}

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function sentences(text) {
  const out = [];
  const re = /[^.!?…\n]+[.!?…]*/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const s = m[0].trim();
    if (s.length > 1) out.push({ s, index: m.index });
  }
  return out;
}

let totalTells = 0;
let totalFirstPerson = 0;
const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('usage: node scripts/check-two-egos.mjs <file.md> [...]');
  process.exit(1);
}

for (const file of files) {
  let raw;
  try {
    raw = readFileSync(file, 'utf8');
  } catch {
    console.log(`== ${file}\n  UNREADABLE — skipped`);
    continue;
  }
  const text = stripNonProse(raw);
  // Position check: first person in the OPENING paragraph (first prose block after the H1)
  // is a tell, not a worklist item — the camera points at the subject before the person arrives.
  const h1 = text.match(/^#\s.+$/m);
  const afterH1 = h1 ? text.slice((h1.index ?? 0) + h1[0].length) : text;
  const firstPara = afterH1.split(/\n\s*\n/).find((p) => p.trim().length > 0) ?? '';
  const openingStart = h1 ? (h1.index ?? 0) + h1[0].length + afterH1.indexOf(firstPara) : text.indexOf(firstPara);
  const openingEnd = openingStart + firstPara.length;
  const tells = [];
  const worklist = [];
  for (const { s, index } of sentences(text)) {
    const fired = TELLS.filter(([, re]) => re.test(s)).map(([name]) => name);
    const inOpening = index >= openingStart && index < openingEnd;
    if (inOpening && FIRST_PERSON.test(s)) fired.push('opening-I');
    const line = lineAt(text, index);
    const clipped = s.length > 200 ? s.slice(0, 197) + '…' : s;
    if (fired.length > 0) tells.push(`  [${fired.join(', ')}] L${line}: ${clipped}`);
    else if (FIRST_PERSON.test(s)) worklist.push(`  L${line}: ${clipped}`);
  }
  totalTells += tells.length;
  totalFirstPerson += worklist.length;
  console.log(`== ${file}`);
  console.log(`TELLS (${tells.length}):`);
  for (const t of tells) console.log(t);
  console.log(`FIRST-PERSON worklist (${worklist.length}):`);
  for (const w of worklist) console.log(w);
  console.log('');
}
console.log(`-- ${files.length} file(s): ${totalTells} tell(s), ${totalFirstPerson} further first-person sentence(s). Flags are candidates; the judgment pass rules.`);
