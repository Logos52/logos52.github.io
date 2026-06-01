#!/usr/bin/env node
/**
 * publish-guard.mjs — privacy safety net for the public Quartz site and repo.
 *
 * The source repo is PUBLIC, so private content leaks the moment it is committed/pushed —
 * rendered or not. This guard runs at three points (earliest to latest):
 *
 *   --staged   scan STAGED .md (publish-eligible paths). Used by .githooks/pre-commit to
 *              BLOCK a private/financial leak before it ever enters the public repo.
 *   --source   audit ALL tracked .md. Blocks sensitive content in publish-eligible paths;
 *              WARNS about sensitive content in tracked-but-ignored folders (raw-exposed on
 *              GitHub even though un-rendered). Run locally: `npm run guard:source`.
 *   (default)  scan the built `public/` HTML. Run in CI after `quartz build`, before deploy,
 *              to BLOCK a rendered leak from going live. Run locally: `npm run guard`.
 *
 * This is the check that would have caught the 2026-06-01 leak. Keep the HARD list and
 * SENSITIVE_TAGS in sync with the privacy doctrine in AGENTS.md.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const MODE = process.argv.includes("--staged")
  ? "staged"
  : process.argv.includes("--source")
    ? "source"
    : "public";

// High-confidence leak signals → block.
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
const SENSITIVE_TAGS = ["finances", "budget", "money", "private", "secret", "secrets", "salary", "networth"];
const SOFT = [
  { name: "named financial institution", re: /\b(Apple Card|Charles Schwab|USAA|Wells Fargo|Capital One)\b/ },
  { name: "dollar amount", re: /\$[0-9][0-9,]*\.[0-9]{2}\b/ },
];

const gitLines = (args) =>
  execFileSync("git", args, { encoding: "utf8" }).split("\n").map((s) => s.trim()).filter(Boolean);

// Private/ignored path prefixes, parsed from quartz.config.ts (single source of truth).
function privatePrefixes() {
  let cfg = "";
  try {
    cfg = readFileSync("quartz.config.ts", "utf8");
  } catch {
    return [];
  }
  const block = cfg.match(/ignorePatterns:\s*\[([\s\S]*?)\n\s*\]/);
  if (!block) return [];
  const noise = new Set([
    "quartz/**", "public/**", "node_modules/**", ".quartz-cache/**",
    ".git/**", ".github/**", ".githooks/**", ".obsidian/**", ".trash/**", "**/.DS_Store",
  ]);
  return [...block[1].matchAll(/"([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => !noise.has(p))
    .map((p) => p.replace(/\*\*$/, "").replace(/\*$/, "")); // "PRDs/**" -> "PRDs/", "log.md" stays
}
const PRIVATE = privatePrefixes();
const isPrivate = (rel) => PRIVATE.some((p) => (p.endsWith("/") ? rel.startsWith(p) : rel === p));

function sensitiveTags(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const blk = fm[1].match(/(?:^|\n)tags:\s*\n((?:[ \t]*-[ \t]*.+\r?\n?)+)/);
  let tags = [];
  if (blk) tags = [...blk[1].matchAll(/-[ \t]*(.+)/g)].map((m) => m[1].trim());
  else {
    const inline = fm[1].match(/(?:^|\n)tags:[ \t]*\[([^\]]*)\]/);
    if (inline) tags = inline[1].split(",");
  }
  return tags.map((t) => t.replace(/['"]/g, "").trim().toLowerCase()).filter((t) => SENSITIVE_TAGS.includes(t));
}

function hitsIn(text) {
  const hits = [];
  for (const { name, re } of HARD) {
    const m = text.match(re);
    if (m) hits.push(`${name}: "${m[0].slice(0, 50)}"`);
  }
  const t = sensitiveTags(text);
  if (t.length) hits.push(`sensitive frontmatter tag(s): ${t.join(", ")}`);
  return hits;
}

const die = (msg) => {
  console.error(msg);
  process.exit(1);
};
const pass = (msg) => {
  console.log(msg);
  process.exit(0);
};

// ---------------- public: scan built HTML ----------------
if (MODE === "public") {
  if (!existsSync("public")) die("publish-guard: 'public/' not found — build first (npm run build).");
  const walk = (dir) => {
    const out = [];
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      out.push(...(statSync(p).isDirectory() ? walk(p) : e.endsWith(".html") ? [p] : []));
    }
    return out;
  };
  const files = walk("public");
  const hard = [];
  const soft = [];
  for (const f of files) {
    const text = readFileSync(f, "utf8");
    for (const { name, re } of HARD) {
      const m = text.match(re);
      if (m) hard.push(`  ✗ ${name} — ${f} :: "${m[0].slice(0, 50)}"`);
    }
    for (const { name, re } of SOFT) {
      const m = text.match(re);
      if (m) soft.push(`  ⚠ ${name} — ${f} :: "${m[0].slice(0, 40)}"`);
    }
  }
  for (const tag of SENSITIVE_TAGS)
    if (existsSync(join("public", "tags", tag))) hard.push(`  ✗ sensitive tag page published (#${tag}) — public/tags/${tag}/`);
  if (soft.length) console.warn(`\npublish-guard: ${soft.length} soft warning(s) (not blocking):\n${soft.slice(0, 50).join("\n")}`);
  if (hard.length) die(`\npublish-guard: ✗ BLOCKED — ${hard.length} leak(s) in published output:\n${hard.join("\n")}\n`);
  pass(`publish-guard: ✓ OK — scanned ${files.length} pages; no private/financial content in published output.`);
}

// ---------------- staged / source: scan .md ----------------
const mdFiles =
  MODE === "staged"
    ? gitLines(["diff", "--cached", "--name-only", "--diff-filter=ACM", "--", "*.md"])
    : gitLines(["ls-files", "*.md"]);

const blocked = [];
const rawExposed = [];
for (const rel of mdFiles) {
  let text = "";
  try {
    text = MODE === "staged" ? execFileSync("git", ["show", `:${rel}`], { encoding: "utf8" }) : readFileSync(rel, "utf8");
  } catch {
    continue;
  }
  const hits = hitsIn(text);
  if (!hits.length) continue;
  (isPrivate(rel) ? rawExposed : blocked).push({ rel, hits });
}

if (rawExposed.length) {
  console.warn(
    `\npublish-guard: ⚠ ${rawExposed.length} tracked-but-unrendered file(s) hold private content and are RAW-browsable on the public repo (not a deploy blocker; to truly hide, gitignore/untrack them):`,
  );
  for (const { rel, hits } of rawExposed.slice(0, 40)) console.warn(`  ⚠ ${rel} — ${hits.join("; ")}`);
}
if (blocked.length) {
  die(
    `\npublish-guard: ✗ BLOCKED — private/financial content in publish-eligible path(s):\n` +
      blocked.map(({ rel, hits }) => `  ✗ ${rel} — ${hits.join("; ")}`).join("\n") +
      `\n\nKeep it out of published paths: add 'draft: true', move under an ignored private folder, or redact.\n` +
      `(See AGENTS.md → Privacy and Publication. Genuine false positive? git commit --no-verify.)\n`,
  );
}
pass(
  `publish-guard: ✓ OK (${MODE}) — scanned ${mdFiles.length} .md; no leaks in publish-eligible paths.` +
    (rawExposed.length ? ` (${rawExposed.length} raw-exposure warning(s) above.)` : ""),
);
