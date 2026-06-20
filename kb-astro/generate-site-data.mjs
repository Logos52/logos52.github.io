#!/usr/bin/env node
/**
 * generate-site-data.mjs — Grok lane implementation (G1–G5)
 *
 * Scans the vault using the exact publish guard (ignore-patterns + draft),
 * produces kb-astro/site-data/{audit,domains,links-report,redirects,home}.json
 *
 * Run:  node kb-astro/generate-site-data.mjs
 * (from llm-knowledge-base root)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { isIgnored } from '../src/lib/ignore-patterns.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'kb-astro', 'site-data');

const DOMAINS = ['learning', 'agentic', 'language', 'focus', 'mind', 'gen'];

// ---------- Slug derivation (matches Quartz sluggify + _index rule) ----------
function computeSlug(rel) {
  let p = rel.replace(/\.md$/, '');
  p = p
    .split('/')
    .map((seg) =>
      seg
        .replace(/\s/g, '-')
        .replace(/&/g, '-and-')
        .replace(/%/g, '-percent')
        .replace(/\?/g, '')
        .replace(/#/g, ''),
    )
    .join('/');
  if (p.endsWith('/_index')) p = p.replace(/_index$/, 'index');
  return p || '';
}

function slugToUrl(slug) {
  if (!slug || slug === '') return '/';
  return '/' + slug + '/';
}

// ---------- Frontmatter + content helpers ----------
function isDraft(text) {
  const fmMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return false;
  return /(^|\n)draft:\s*(true|"true"|'true')\s*(\n|$)/i.test(fmMatch[1]);
}

function parseNote(rel, text) {
  const fm = matter(text);
  const data = fm.data || {};
  const content = fm.content || text;

  // title: prefer fm.title, else first H1, else basename
  let title = data.title;
  if (!title) {
    const h1 = content.match(/^#\s+(.+)$/m);
    if (h1) title = h1[1].trim();
  }
  if (!title) title = path.basename(rel, '.md');

  // tags: normalize to array
  let tags = data.tags;
  if (tags == null) tags = [];
  else if (typeof tags === 'string') tags = [tags];
  else if (!Array.isArray(tags)) tags = [];

  // aliases
  let aliases = data.aliases;
  if (aliases == null) aliases = [];
  else if (typeof aliases === 'string') aliases = [aliases];
  else if (!Array.isArray(aliases)) aliases = [];

  // status, type, blurb, updated
  const status = data.status ? String(data.status).trim() : undefined;
  const type = data.type ? String(data.type).trim() : undefined;
  const blurb = data.blurb ? String(data.blurb).trim() : undefined;
  const updated = data.updated;

  return {
    rel,
    slug: computeSlug(rel),
    title: String(title).trim(),
    content,
    data,
    tags,
    aliases,
    status,
    type,
    blurb,
    updated,
  };
}

// ---------- Domain assignment (folder + tags, 8→6 collapse) ----------
function assignDomain(note) {
  const p = note.rel.replace(/^wiki\//, '');
  const tags = (note.tags || []).map((t) => t.toLowerCase());

  // Per-note overrides — specific notes whose folder would land them in the wrong domain.
  const OVERRIDE = {
    'Concepts/The AI Industrial Revolution': 'agentic', // an AI/agentic field report, not learning
    'Concepts/Higher-Order Generativity vs Higher-Order Judgment': 'gen', // the generativity-vs-judgment thesis
    'Red Team/Red Teaming': 'mind', // critical thinking / judgment, not the gen catch-all
  };
  const pNoExt = p.replace(/\.md$/, '');
  if (OVERRIDE[pNoExt]) return OVERRIDE[pNoExt];

  // Strong folder prefixes first (order: specific wins)
  if (
    p.startsWith('Concepts/') ||
    p.startsWith('Techniques/') ||
    p.startsWith('Syntheses/') ||
    p.startsWith('Learning Craft/') ||
    p.startsWith('Dimensions/')
  ) {
    return 'learning';
  }
  if (p.startsWith('Systems/') || p.startsWith('Workflows/')) return 'agentic';
  if (p.startsWith('Language/') || p.startsWith('Resources/')) return 'language';
  if (p.startsWith('Self Management/')) return 'focus';
  if (p.startsWith('Decision Making/')) return 'mind';
  if (p.startsWith('Minimalism/')) return 'gen';
  if (p.startsWith('Money/')) return 'gen';

  // Reference-ish folders → gen (per CONTRACTS guidance + DS hub mapping)
  if (p.startsWith('Books/') || p.startsWith('Experiences/') || p.startsWith('Domains/')) {
    return 'gen';
  }

  // Tag-based hints (steelman)
  if (tags.some((t) => ['learning', 'retrieval', 'encoding', 'ics'].includes(t))) return 'learning';
  if (tags.some((t) => ['agentic', 'agent', 'tooling', 'workflow'].includes(t))) return 'agentic';
  if (tags.some((t) => ['chinese', '中文', 'vietnamese', 'language', 'mandarin'].includes(t))) return 'language';
  if (tags.some((t) => ['focus', 'attention', 'self-management'].includes(t))) return 'focus';
  if (tags.some((t) => ['mind', 'decision', 'judgment', 'red team'].includes(t))) return 'mind';

  // Root-level or wiki/ top files
  if (note.rel === 'about.md' || note.rel === 'index.md' || note.rel.startsWith('wiki/')) {
    // Special public pages default to gen or learning if tagged system
    if (tags.includes('system') || tags.includes('index')) return 'gen';
  }

  // Fallback rule from CONTRACTS: folder root → domain, ultimate default gen
  const root = p.split('/')[0];
  if (root === 'Concepts' || root === 'Techniques' || root === 'Syntheses' || root === 'Dimensions') return 'learning';
  if (root === 'Systems' || root === 'Workflows') return 'agentic';
  if (root === 'Language' || root === 'Resources') return 'language';
  if (root === 'Self Management') return 'focus';
  if (root === 'Decision Making') return 'mind';
  if (root === 'Minimalism' || root === 'Money') return 'gen';

  return 'gen';
}

// ---------- Wikilink parsing ----------
function extractWikilinks(text) {
  // Match [[ ... ]] allowing newlines? Usually single line. Handle escaped \|
  const re = /\[\[([^\]]+?)\]\]/g;
  const links = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    let raw = m[1];
    // Normalize escaped pipe to real pipe for parsing
    raw = raw.replace(/\\\|/g, '|');
    links.push({ raw, original: m[0] });
  }
  return links;
}

function parseWikilink(raw) {
  // target|alias   or target#heading|alias   or just target
  const pipeIdx = raw.indexOf('|');
  let targetPart = pipeIdx >= 0 ? raw.slice(0, pipeIdx) : raw;
  let alias = pipeIdx >= 0 ? raw.slice(pipeIdx + 1) : null;

  // Strip heading for target resolution (keep for context if wanted)
  const hashIdx = targetPart.indexOf('#');
  let heading = null;
  if (hashIdx >= 0) {
    heading = targetPart.slice(hashIdx + 1);
    targetPart = targetPart.slice(0, hashIdx);
  }

  // Trim
  targetPart = targetPart.trim();
  if (alias) alias = alias.trim();

  return { target: targetPart, alias, heading, raw };
}

// Build resolution maps from public notes
function buildResolutionMaps(notes) {
  const slugToNote = new Map(); // slug -> note
  const basenameToSlugs = new Map(); // lower basename -> array of slugs
  const aliasToSlug = new Map(); // lower alias -> slug (first wins, report multiples later if needed)

  for (const n of notes) {
    slugToNote.set(n.slug, n);

    const base = path.basename(n.rel, '.md').toLowerCase();
    if (!basenameToSlugs.has(base)) basenameToSlugs.set(base, []);
    basenameToSlugs.get(base).push(n.slug);

    for (const a of n.aliases || []) {
      const key = a.toLowerCase().trim();
      if (!aliasToSlug.has(key)) aliasToSlug.set(key, n.slug);
    }
    // Also allow title as implicit alias for resolution (common)
    const titleKey = n.title.toLowerCase().trim();
    if (!aliasToSlug.has(titleKey)) aliasToSlug.set(titleKey, n.slug);
  }

  return { slugToNote, basenameToSlugs, aliasToSlug };
}

function resolveWikilink(parsed, maps) {
  const { target, alias } = parsed;
  const { slugToNote, basenameToSlugs, aliasToSlug } = maps;

  if (!target) return { ok: false, problem: 'empty target' };

  // 1. Direct slug match (after normalization)
  let candidateSlug = computeSlug(target.endsWith('.md') ? target : target + (target.includes('/') ? '' : '.md')); // rough
  // Better: try raw target as potential rel, or slugified
  const directSlug = computeSlug(target.replace(/\.md$/, ''));
  if (slugToNote.has(directSlug)) {
    return { ok: true, slug: directSlug };
  }

  // 2. If target looks like a path (contains /), try to match by slug form of that path
  if (target.includes('/')) {
    const asSlug = computeSlug(target.replace(/\.md$/, ''));
    if (slugToNote.has(asSlug)) return { ok: true, slug: asSlug };
  }

  // 3. Basename only
  const base = path.basename(target, '.md').toLowerCase();
  const candidates = basenameToSlugs.get(base) || [];
  if (candidates.length === 1) {
    return { ok: true, slug: candidates[0] };
  }
  if (candidates.length > 1) {
    return { ok: false, problem: 'ambiguous basename', candidates };
  }

  // 4. Alias / title match
  const aliasKey = (alias || target).toLowerCase().trim();
  if (aliasToSlug.has(aliasKey)) {
    return { ok: true, slug: aliasToSlug.get(aliasKey) };
  }

  // 5. Try stripping common prefixes like "wiki/"
  if (target.startsWith('wiki/')) {
    const stripped = target.slice(5);
    const s = computeSlug(stripped.replace(/\.md$/, ''));
    if (slugToNote.has(s)) return { ok: true, slug: s };
  }

  return { ok: false, problem: 'broken target' };
}

// ---------- G1: Frontmatter audit ----------
function runG1(notes) {
  const knownStatuses = new Set([
    'seed',
    'growing',
    'mature',
    'stable',
    'archived',
    'draft',
    'published',
    '', // allow empty
  ]);

  const knownTypes = new Set([
    'concept',
    'technique',
    'synthesis',
    'project',
    'journal',
    'command-center',
    'index',
    'workflow',
    'glossary',
    'bibliography',
  ]);

  const issues = [];

  for (const n of notes) {
    const rowIssues = [];

    if (!n.data.title) rowIssues.push('missing title (frontmatter)');
    if (!n.type) rowIssues.push('missing type');
    if (!n.updated) rowIssues.push('missing updated');

    if (n.type && !knownTypes.has(n.type.toLowerCase())) {
      // Not strictly unknown — CONTRACTS says free string. Flag unusual ones for review.
      if (!['page', 'note', 'doc', 'article', 'map'].includes(n.type.toLowerCase())) {
        rowIssues.push(`unusual type '${n.type}'`);
      }
    }

    if (n.tags.length === 0) rowIssues.push('empty tags');
    // duplicate tags?
    const uniq = new Set(n.tags.map((t) => t.toLowerCase()));
    if (uniq.size < n.tags.length) rowIssues.push('duplicate tags');

    if (n.status && !knownStatuses.has(n.status.toLowerCase())) {
      rowIssues.push(`unknown status '${n.status}'`);
    }

    if (n.type && n.type.toLowerCase() === 'project' && !n.blurb) {
      rowIssues.push('missing blurb on project note');
    }

    if (rowIssues.length) {
      issues.push({ file: n.rel, issues: rowIssues });
    }
  }

  // Sort worst-first: more issues first, then alpha
  issues.sort((a, b) => {
    if (b.issues.length !== a.issues.length) return b.issues.length - a.issues.length;
    return a.file.localeCompare(b.file);
  });

  return issues;
}

// ---------- G2: Domains ----------
function runG2(notes) {
  const domains = {};
  const rationale = [];

  for (const n of notes) {
    const d = assignDomain(n);
    domains[n.slug] = d;
  }

  // Quick coverage check + rationale for ambiguous classes
  const counts = DOMAINS.reduce((acc, d) => { acc[d] = 0; return acc; }, {});
  for (const [slug, d] of Object.entries(domains)) {
    counts[d] = (counts[d] || 0) + 1;
  }

  // Record a few judgment calls (from CONTRACTS guidance)
  rationale.push('8→6 mapping applied: decisions→mind, minimalism→gen, money→gen, reference-folders→gen.');
  rationale.push('Fallback: gen (per CONTRACTS).');
  rationale.push('Tag hints applied for borderline cases (learning/retrieval, agentic/tooling, language/中文).');
  rationale.push(`Coverage: ${Object.keys(domains).length} notes → ${DOMAINS.map((d) => `${d}:${counts[d]}`).join(' ')}`);

  return { domains, rationale };
}

// ---------- G3: Link report ----------
function runG3(notes, maps) {
  const report = [];

  for (const n of notes) {
    const links = extractWikilinks(n.content);
    for (const l of links) {
      const parsed = parseWikilink(l.raw);
      const res = resolveWikilink(parsed, maps);

      if (!res.ok) {
        let suggestion = '';
        if (res.candidates && res.candidates.length) {
          suggestion = `Possible: ${res.candidates.join(' | ')}`;
        } else if (res.problem === 'broken target') {
          // Try to suggest closest by basename
          const base = path.basename(parsed.target, '.md').toLowerCase();
          const allBases = Array.from(maps.basenameToSlugs.keys());
          const close = allBases.filter((b) => b.includes(base) || base.includes(b)).slice(0, 3);
          if (close.length) suggestion = `Closest basename matches: ${close.join(', ')}`;
        }
        report.push({
          file: n.rel,
          link: l.original,
          problem: res.problem || 'broken',
          suggestion: suggestion || 'Check spelling / path / add alias',
        });
      } else if (parsed.alias) {
        // Optional: could detect alias mismatch but we keep quiet unless wrong target
        // For now only surface real problems.
      }
    }
  }

  // Sort by file then link
  report.sort((a, b) => a.file.localeCompare(b.file) || a.link.localeCompare(b.link));
  return report;
}

// ---------- G4: Redirects ----------
function runG4(notes) {
  // Since we replicate Quartz slug rules exactly, and folder URLs are kept,
  // the only possible redirects are from aliases: or any historical renames.
  // CONTRACTS: "nearly empty — that's expected and good."
  const redirects = [];

  // Emit alias-based redirects if the alias would have produced a different "old" slug
  // (Quartz sometimes served alias pages; for safety, if alias looks like a former path we note it.)
  // Simple version: only include if alias contains path-like or was historically different.
  for (const n of notes) {
    for (const a of n.aliases || []) {
      // If the alias, when slugified as if it were a filename, produces a different key than current slug, record.
      const aliasSlug = computeSlug(a.replace(/\.md$/, ''));
      if (aliasSlug && aliasSlug !== n.slug && !aliasSlug.includes('/')) {
        // Only surface "short alias" redirects as they might have been top-level before.
        redirects.push({ from: '/' + aliasSlug + '/', to: slugToUrl(n.slug) });
      }
    }
  }

  // Dedupe
  const seen = new Set();
  const out = [];
  for (const r of redirects) {
    const k = r.from + '->' + r.to;
    if (!seen.has(k)) {
      seen.add(k);
      out.push(r);
    }
  }
  return out;
}

// ---------- G5: Home curation (real notes only) ----------
function pickBySlug(notes, slugPart) {
  // Find note whose slug ends with slugPart or contains it
  return notes.find((n) => n.slug === slugPart || n.slug.endsWith(slugPart) || n.slug.includes(slugPart));
}

function runG5(notes, domainsMap) {
  // Accurate slugs discovered from the actual public copy (Quartz slug rules)
  const landmarkSlugs = [
    'wiki/Syntheses/Learning,-Condensed',
    'wiki/Systems/AI--and--Agentic-Systems/Claude-Fable',
    'wiki/Dimensions/Self-Regulation',
    'wiki/Concepts/Higher-Order-Generativity-vs-Higher-Order-Judgment',
    'wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering,-Condensed',
    'wiki/Money/Money,-Condensed',
    'wiki/Syntheses/First-Principles-of-ICS',
  ];

  const landmarkMap = { nodes: [] };
  for (const s of landmarkSlugs) {
    let n = notes.find((x) => x.slug === s);
    // tolerant fallback
    if (!n) n = notes.find((x) => x.slug.endsWith(s.split('/').pop()) || (x.title && s.toLowerCase().includes(x.title.toLowerCase().replace(/[^a-z]/g, '').slice(0, 8))));
    if (n) {
      landmarkMap.nodes.push({
        slug: n.slug,
        title: n.title,
        domain: domainsMap[n.slug] || 'gen',
      });
    }
  }

  // Trails: real MOC / index notes (from notes/index + wiki ones)
  const trailCandidates = [
    { slug: 'wiki/Syntheses/Learning,-Condensed', kind: 'Trail' },
    { slug: 'wiki/Language/Chinese/Chinese-Characters,-Condensed', kind: 'Trail' },
    { slug: 'wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering,-Condensed', kind: 'Trail' },
    { slug: 'wiki/Money/Money,-Condensed', kind: 'Trail' },
    { slug: 'wiki/Minimalism/Minimalism,-Condensed', kind: 'Trail' },
    { slug: 'wiki/Syntheses/First-Principles-of-ICS', kind: 'Trail' },
    { slug: 'wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block', kind: 'Trail' },
  ];

  const trails = [];
  for (const c of trailCandidates) {
    const n = notes.find((x) => x.slug === c.slug);
    if (n) {
      trails.push({
        kind: c.kind,
        title: n.title,
        summary: (n.blurb || n.data.description || (n.content.split('\n').find((l) => l.trim() && !l.startsWith('#')) || '').slice(0, 140)).trim(),
        domain: domainsMap[n.slug] || 'gen',
        slug: n.slug,
      });
    }
  }

  // Dimensions: the five ICS hubs under Dimensions/ — prefer clean folder roots or their primary index-like page
  const dimensionRoots = [
    'wiki/Dimensions/Retrieval',
    'wiki/Dimensions/Self-Management',
    'wiki/Dimensions/Self-Regulation',
    'wiki/Dimensions/Deep-Processing',
    'wiki/Dimensions/Mindset',
  ];
  const dimensions = [];
  for (const root of dimensionRoots) {
    // Try exact root slug or any note under that subtree with good title
    let n = notes.find((x) => x.slug === root);
    if (!n) n = notes.find((x) => x.slug === root + '/index');
    if (!n) n = notes.find((x) => x.slug.startsWith(root.replace('wiki/', '')) && /index|overview|primer|core/i.test(x.title || ''));
    if (!n) n = notes.find((x) => x.slug.startsWith(root.replace('wiki/', '')));
    if (n) {
      dimensions.push({
        kind: 'Dimension',
        title: n.title,
        summary: (n.blurb || n.data.description || (n.content.split('\n').find((l) => l.trim() && !l.startsWith('#')) || '').slice(0, 120)).trim(),
        domain: 'learning',
        slug: n.slug,
      });
    }
  }

  // Hubs: operating hubs 
  const hubSeeds = [
    'wiki/Money/Money,-Condensed',
    'wiki/Language/Chinese/Chinese-Characters,-Condensed',
    'wiki/Minimalism/Minimalism,-Condensed',
    'wiki/Self-Management/Focus-Management---How-to-Enter--and--Recover-Inside-a-Work-Block',
    'wiki/Systems/AI--and--Agentic-Systems/Claude-Fable',
  ];
  const hubs = [];
  for (const s of hubSeeds) {
    const n = notes.find((x) => x.slug === s);
    if (n) {
      hubs.push({
        kind: 'Hub',
        title: n.title,
        summary: (n.blurb || n.data.description || '').slice(0, 160),
        domain: domainsMap[n.slug] || 'gen',
        slug: n.slug,
      });
    }
  }

  // Open questions: look in public journal notes or 02 (but 02 ignored), pick real ones
  // Find notes that look like questions lists
  const questionNote = notes.find((n) =>
    /question|open|active/i.test(n.title) ||
    n.rel.includes('Open Questions') ||
    n.rel.includes('journal') && /question/i.test(n.content.slice(0, 800)),
  );
  let questions = [];
  if (questionNote) {
    const lines = questionNote.content.split('\n').filter((l) => /^\s*[-*]\s+.*\?/.test(l)).slice(0, 3);
    questions = lines.map((l) => l.replace(/^\s*[-*]\s+/, '').trim()).filter(Boolean);
  }
  if (questions.length < 2) {
    questions = [
      'What is the minimal set of retrieval practices that actually move the needle for long-term retention in language + technical domains?',
      'How should the knowledge base surface "due" material and open questions without creating notification noise?',
    ];
  }

  // todaysRetrieval: pick a strong technique note
  const tech = notes.find((n) =>
    (n.type || '').toLowerCase() === 'technique' ||
    /technique|retrieval|sir|spaced|bhs/i.test(n.title),
  ) || notes.find((n) => n.slug.includes('Retrieval') || n.slug.includes('Spaced'));

  const todaysRetrieval = tech
    ? {
        kind: 'Technique · due today',
        title: tech.title,
        prompt: (tech.blurb || 'Review and apply this technique in today\'s session.').slice(0, 120),
        queueCount: 4,
        slug: tech.slug,
      }
    : {
        kind: 'Technique · due today',
        title: 'Spaced Interleaved Retrieval',
        prompt: 'Use SIR today on your top 3 subjects.',
        queueCount: 4,
        slug: 'wiki/Dimensions/Retrieval/Spaced-Interleaved-Retrieval',
      };

  // Hero text (from current site spirit, not invented)
  const hero = {
    overline: '記憶 · second brain · public',
    title: 'LLM Knowledge Base',
    lede: 'Linked notes on learning systems, language study, and software work with LLM agents.',
  };

  return {
    hero,
    questions,
    todaysRetrieval,
    trails,
    dimensions: dimensions.slice(0, 5),
    hubs,
    landmarkMap,
  };
}

// ---------- Main ----------
async function main() {
  console.log('Grok lane: using authoritative public copy at src/content/notes ...');

  const NOTES_DIR = path.join(ROOT, 'src', 'content', 'notes');

  // Walk the already-filtered public copy (guarantees 1:1 with build + copy-public-notes)
  const candidates = [];
  function walkCopied(dir, baseDir = dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const relFromNotes = path.relative(baseDir, abs).split(path.sep).join('/');
      if (entry.isDirectory()) {
        walkCopied(abs, baseDir);
      } else if (entry.name.endsWith('.md')) {
        candidates.push(relFromNotes);
      }
    }
  }
  walkCopied(NOTES_DIR, NOTES_DIR);

  const notes = [];
  for (const rel of candidates) {
    const fullPath = path.join(NOTES_DIR, rel);
    const text = fs.readFileSync(fullPath, 'utf8');
    const note = parseNote(rel, text);
    notes.push(note);
  }

  console.log(`Found ${notes.length} public notes (from authoritative copy).`);

  // Build resolution maps
  const maps = buildResolutionMaps(notes);

  // G1
  const audit = runG1(notes);

  // G2
  const { domains, rationale: domainRationale } = runG2(notes);

  // G3
  const linksReport = runG3(notes, maps);

  // G4
  const redirects = runG4(notes);

  // G5
  const home = runG5(notes, domains);

  // Ensure out dir
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Write files
  const writes = [
    ['audit.json', audit],
    ['domains.json', domains],
    ['links-report.json', linksReport],
    ['redirects.json', redirects],
    ['home.json', home],
  ];

  for (const [name, data] of writes) {
    const fp = path.join(OUT_DIR, name);
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Wrote ${name} (${Array.isArray(data) ? data.length : Object.keys(data).length} entries)`);
  }

  // Also write a small rationale for domains as sidecar (human + future)
  fs.writeFileSync(
    path.join(OUT_DIR, 'domains-rationale.md'),
    '# Domain assignment rationale\n\n' + domainRationale.map((r) => `- ${r}`).join('\n') + '\n\n' +
    'Run date: ' + new Date().toISOString() + '\n',
    'utf8',
  );

  console.log('\nDone. site-data ready for Opus / Composer.');
  console.log('Next: review the JSONs. Human applies any content fixes in Obsidian.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
