#!/usr/bin/env node
// Kolbs cycle: mark the current Kolbs "Done" and create the next one (linked).
// Usage:  node scripts/new-kolbs.mjs "Kolbs/SIR 1.md"
// Then open the printed path in Obsidian.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arg = process.argv[2];
if (!arg) { console.error('Usage: node scripts/new-kolbs.mjs "Kolbs/<current>.md"'); process.exit(1); }
const curPath = resolve(ROOT, arg);
if (!existsSync(curPath)) { console.error("Not found: " + curPath); process.exit(1); }

const curName = basename(curPath, ".md");
const m = curName.match(/^(.*?)(\d+)\s*$/);              // increment a trailing number
const nextName = m ? `${m[1]}${Number(m[2]) + 1}` : `${curName} 2`;
const nextPath = join(dirname(curPath), nextName + ".md");
if (existsSync(nextPath)) { console.error("Already exists: " + nextPath); process.exit(1); }

let cur = readFileSync(curPath, "utf8");
cur = setFm(cur, "status", "Done");
cur = setFm(cur, "next-kolbs", `"[[${nextName}]]"`);
writeFileSync(curPath, cur);

const tplPath = join(ROOT, "Kolbs", "Kolbs Template.md");
let tpl = existsSync(tplPath)
  ? readFileSync(tplPath, "utf8")
  : "---\ntype: kolbs\nstatus: Not started\n---\n# {{title}}\n";
tpl = tpl.replaceAll("{{title}}", nextName);
tpl = setFm(tpl, "status", "Not started");
tpl = setFm(tpl, "previous-kolbs", `"[[${curName}]]"`);
writeFileSync(nextPath, tpl);

console.log(`✓ Completed: ${curName}`);
console.log(`✓ Created:   ${nextName}`);
console.log(`Open in Obsidian → ${nextPath}`);

function setFm(text, key, value) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return text;
  let fm = text.slice(3, end);
  const re = new RegExp("^" + key + ":.*$", "m");
  fm = re.test(fm) ? fm.replace(re, `${key}: ${value}`) : `${fm}\n${key}: ${value}`;
  return "---" + fm + text.slice(end);
}
