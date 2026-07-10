#!/usr/bin/env node
// Complete a task and compute its break length from time taken (the "OFFrest" rule).
// Usage:  node scripts/complete-task.mjs "Tasks/Task 1.md" [minutesTaken]
const BREAK_RATIO = 0.2;   // break = 20% of time taken (adjust to taste); min 5 min.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arg = process.argv[2];
const mins = Number(process.argv[3] || 0);
if (!arg) { console.error('Usage: node scripts/complete-task.mjs "Tasks/<task>.md" [minutes]'); process.exit(1); }
const p = resolve(ROOT, arg);
if (!existsSync(p)) { console.error("Not found: " + p); process.exit(1); }

const breakMin = mins > 0 ? Math.max(5, Math.round(mins * BREAK_RATIO)) : 0;
let t = readFileSync(p, "utf8");
t = setFm(t, "status", "Complete");
if (mins > 0) { t = setFm(t, "time-taken", `${mins}m`); t = setFm(t, "break-length", `${breakMin}m`); }
writeFileSync(p, t);
console.log(`✓ Completed${mins > 0 ? ` — ${mins}m worked, ${breakMin}m break` : ""}`);

function setFm(text, key, value) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return text;
  let fm = text.slice(3, end);
  const re = new RegExp("^" + key + ":.*$", "m");
  fm = re.test(fm) ? fm.replace(re, `${key}: ${value}`) : `${fm}\n${key}: ${value}`;
  return "---" + fm + text.slice(end);
}
