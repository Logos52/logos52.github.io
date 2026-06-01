#!/usr/bin/env node
/**
 * publish-guard.mjs — content-level safety net for the public site.
 *
 * Runs against the built `public/` directory (after `quartz build`). Wired into
 * .github/workflows/deploy.yml between build and deploy, and runnable locally via
 * `npm run guard` (after `npm run build`).
 *
 * Model: the site publishes by default (Quartz `ignorePatterns` deny-list). This guard is
 * the second line of defense — it scans the ACTUAL published output for high-confidence
 * private/financial signals and FAILS the build (blocking deploy) if any are found, so a
 * private note can't reach the live site through a missing ignore glob. It is exactly the
 * check that would have caught the 2026-06-01 leak.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_DIR = "public";

// High-confidence leak signals → HARD FAIL (block the deploy).
const HARD = [
  { name: "secrets/finances directory path", re: /Documents\/Finances/i },
  { name: "private Notion workspace host", re: /zenith-raincoat/i },
  { name: "owner personal email", re: /nxlogos@gmail\.com/i },
  { name: "credentials embedded in URL", re: /https?:\/\/[^\s/"']+:[^\s/"'@]+@/ },
  { name: "private key block", re: /BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY/ },
  {
    name: "secret/token assignment",
    re: /(?:access[_-]?token|api[_-]?key|secret[_-]?key|client[_-]?secret)["']?\s*[:=]\s*["']?[A-Za-z0-9_\-]{16,}/i,
  },
];

// If a note carrying one of these tags published, Quartz generates /tags/<tag>/ — strong leak signal.
const SENSITIVE_TAGS = ["finances", "budget", "money", "private", "secret", "secrets", "salary", "networth"];

// Lower-confidence signals → warn only (visibility, not a gate; too noisy to block).
const SOFT = [
  { name: "named financial institution", re: /\b(Apple Card|Charles Schwab|USAA|Wells Fargo|Capital One)\b/ },
  { name: "dollar amount", re: /\$[0-9][0-9,]*\.[0-9]{2}\b/ },
];

if (!existsSync(PUBLIC_DIR)) {
  console.error(`publish-guard: '${PUBLIC_DIR}/' not found — build first (npm run build).`);
  process.exit(2);
}

function walkHtml(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walkHtml(p));
    else if (e.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = walkHtml(PUBLIC_DIR);
const hard = [];
const soft = [];

for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const { name, re } of HARD) {
    const m = text.match(re);
    if (m) hard.push({ f, name, m: m[0].slice(0, 60) });
  }
  for (const { name, re } of SOFT) {
    const m = text.match(re);
    if (m) soft.push({ f, name, m: m[0].slice(0, 40) });
  }
}

for (const tag of SENSITIVE_TAGS) {
  if (existsSync(join(PUBLIC_DIR, "tags", tag))) {
    hard.push({ f: `public/tags/${tag}/`, name: `sensitive tag page published (#${tag})`, m: tag });
  }
}

if (soft.length) {
  console.warn(`\npublish-guard: ${soft.length} soft warning(s) (not blocking):`);
  for (const h of soft.slice(0, 50)) console.warn(`  ⚠ ${h.name} — ${h.f} :: "${h.m}"`);
}

if (hard.length) {
  console.error(`\npublish-guard: ✗ BLOCKED — ${hard.length} private/financial signal(s) in published output:`);
  for (const h of hard) console.error(`  ✗ ${h.name} — ${h.f} :: "${h.m}"`);
  console.error(`\nKeep this content out of the publish set (ignorePatterns / move to a private folder / redact), then rebuild.\n`);
  process.exit(1);
}

console.log(`publish-guard: ✓ OK — scanned ${files.length} pages; no private/financial content detected.`);
