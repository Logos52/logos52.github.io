/**
 * constellation.ts — the knowledge graph, ported from the original Quartz graph.inline.ts.
 *
 * Modes (set via data-mode on the root):
 *   'spine' (home)  — selectSpineConstellation: 6 hubs + ≤3 sats + 1 outer each (≤30 nodes), pinned to a
 *                     flat horizontal band (SPINE_Y_BAND × domainTargetX), persistent hub labels.
 *   'full'  (/notes) — the full overview graph: every node, domain-clustered into lobes and flattened
 *                     (flatY + a post-settle vertical squash) so it fills the rectangle; labels on hover.
 *   'local' (note rail / journal / projects) — single-seed importance-filtered spine, or multi-seed
 *                     vertical stack (selectMultiSeedVertical) when orient=vertical and seeds.length > 1.
 *
 * Both: synchronous settle (locked layout, no wobble), auto-zoom-to-fit ALL nodes, pan/zoom/hover/click.
 * Canvas rendering (no pixi). Colors read live from the DS CSS vars so dark mode just works.
 */
import { forceSimulation, forceManyBody, forceCenter, forceLink, forceCollide, forceX, forceY } from 'd3-force';
import { select } from 'd3-selection';
import { zoom, zoomIdentity, type D3ZoomEvent, type ZoomTransform } from 'd3-zoom';
import { DOMAINS, DOMAIN_LABELS } from '../lib/types';
import { slugToUrl, slugifyFilePath } from '../lib/slug';
import { SPINE_HUBS } from '../lib/spine';
import { SPINE_Y_BAND, domainTargetX, SPINE_AUTO_FIT_MARGIN, SPINE_MAX_FIT_SCALE } from '../lib/spineZoom';
import type { GraphData } from '../lib/types';

// constants (graph.inline.ts)
const SPINE_HUB_RADIUS = 6.5;
const SPINE_IMPORTANT_RADIUS = 4.5;
const SPINE_SATELLITE_RADIUS = 2.8;
const SPINE_OUTER_SATELLITE_RADIUS = 2.2;
const SPINE_LINK_ALPHA = 0.18;
/** Home focus mode: anchor labels fade when a satellite is hovered so one label reads at a time. */
const SPINE_ANCHOR_LABEL_DIM = 0.28;
const IMPORTANT_DEGREE_THRESHOLD = 3;
const SPINE_MAX_HUB_LINKS_PER_HUB = 3;
const SPINE_EXTRA_PERIPHERAL_LINKS = 15;
const SPINE_OUTLINE_PERIMETER_LINKS = 4;
const SELF_REG_HUB = 'wiki/Dimensions/Self-Regulation';
const HUB_COUNT = 6;
const MONO_STACK = "'SF Mono', ui-monospace, Menlo, monospace";

// local-mode params (selectLocalSpine): a tight, importance-filtered 2-hop "spine" around the current
// note — a few landmark hubs fanned around the center, each carrying a short branch of its own satellites.
// This replaces the old uncapped 2-hop union, which blew a hub note up to 100+ flat, structureless nodes.
const LOCAL_LANDMARKS = 4; // max hub branches fanned around the center note
const LOCAL_SATS_PER = 2; // max satellites each landmark carries
const LOCAL_GLOBAL_CAP = 15; // absolute node ceiling
const LOCAL_FIT_BOOST = 1.14; // local rail: zoom in slightly past bbox fit
const LOCAL_RAIL_AR_BOOST = 1.2; // target aspect wider than the canvas box (panorama strip)
const LOCAL_X_STRETCH = 1.08; // nudge X after proportional squash
const LOCAL_RING_R = 100; // landmark ring radius (relative units; fitToView rescales into the box)
const LOCAL_SAT_REACH = 1.7; // satellites anchor this × further out than their landmark → branches point outward
const LOCAL_LANDMARK_RADIUS = 5; // px; sits between the seed (flag) node and the small satellites
// Multi-seed vertical (journal / projects side graphs): one importance-filtered mini-cluster per seed,
// stacked on a shared spine. Budgets scale with seed count — no per-page tuning when seeds change.
const MULTI_SEED_GLOBAL_CAP = 44;
const MULTI_SEED_SLOT_STEP = LOCAL_RING_R * 1.12; // vertical gap between seed clusters (horizontal fans need headroom)
const MULTI_SEED_FIT_BOOST = 0.82; // zoom out vs single-seed LOCAL_FIT_BOOST — nodes shrink naturally via fit scale
const MULTI_SEED_CANVAS_AR = 0.9; // post-settle stretch so the layout fills the aside box, not a tall strip
// Importance prior by frontmatter `type`: structural anchors (hubs, syntheses, dimensions) outrank
// concepts/techniques, which outrank references/books; journals are noise in a concept neighbourhood.
const TYPE_RANK: Record<string, number> = {
  hub: 5, synthesis: 5, moc: 5,
  index: 4, condensed: 4, dimension: 4,
  system: 3, model: 3, workflow: 3,
  concept: 2, technique: 2, practice: 2, project: 2,
  book: 1, reference: 1, resource: 1,
};
function typeRank(t: string | undefined): number {
  const k = (t ?? '').split(/[-\s]/)[0].toLowerCase();
  if (k.startsWith('journal')) return 0;
  return TYPE_RANK[k] ?? 1;
}

// full-mode params (notesOverviewGraph)
const FULL = {
  repelForce: 0.95, // more spread → less blob
  centerForce: 0.05,
  linkDistance: 42,
  clusterForce: 0.6, // strong, separated domain lobes
  flatY: 0.05, // (single-domain only) barely any squash
  yCompress: 1, // no post-settle squash → keep the 2D zig-zag
  maxLinksPerNode: 4,
  nodeBaseRadius: 2, // leaves (then normalized by cluster size below)
  nodeLinkRadius: 1.3, // × sqrt(degree)
  nodeMaxRadius: 8,
  flagRadius: 6.5,
};

type SLink = { source: string; target: string };
type Tier = 'hub' | 'important' | 'satellite';
type CNode = {
  id: string;
  title: string;
  domain: string;
  url: string;
  degree: number;
  tier: Tier;
  isPrimarySat: boolean;
  isLandmark: boolean;
  isFlag: boolean;
  r: number;
  label?: string;
  parent?: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
};
type CLink = { source: CNode; target: CNode };

function buildAdjacency(links: SLink[]) {
  const degree = new Map<string, number>();
  const neighbors = new Map<string, Set<string>>();
  for (const l of links) {
    degree.set(l.source, (degree.get(l.source) ?? 0) + 1);
    degree.set(l.target, (degree.get(l.target) ?? 0) + 1);
    for (const [a, b] of [[l.source, l.target], [l.target, l.source]] as const) {
      if (!neighbors.has(a)) neighbors.set(a, new Set());
      neighbors.get(a)!.add(b);
    }
  }
  return { degree, neighbors };
}

/** Union of the seeds' 1–hops neighborhoods (for the local graph). */
function neighborhood(seeds: Set<string>, links: SLink[], hops: number, valid: Set<string>): string[] {
  const adj = new Map<string, Set<string>>();
  for (const l of links) {
    (adj.get(l.source) ?? adj.set(l.source, new Set()).get(l.source)!).add(l.target);
    (adj.get(l.target) ?? adj.set(l.target, new Set()).get(l.target)!).add(l.source);
  }
  const keep = new Set<string>([...seeds].filter((s) => valid.has(s)));
  let frontier = new Set(keep);
  for (let i = 0; i < hops; i++) {
    const next = new Set<string>();
    for (const s of frontier)
      for (const nb of adj.get(s) ?? [])
        if (!keep.has(nb)) {
          keep.add(nb);
          next.add(nb);
        }
    frontier = next;
  }
  return [...keep];
}

function selectSpineConstellation(hubs: Set<string>, links: SLink[], valid: Set<string>, isMobile: boolean) {
  const { degree, neighbors } = buildAdjacency(links);
  const satellitesPerHub = isMobile ? 1 : 3;
  const globalCap = 30;
  const outerPerPrimarySat = isMobile ? 0 : 1;
  const neighbourhood = new Set<string>();
  const satelliteParent = new Map<string, string>();
  const primarySatellites = new Set<string>();
  const byDeg = (a: string, b: string) => (degree.get(b) ?? 0) - (degree.get(a) ?? 0) || a.localeCompare(b);

  for (const hub of hubs) {
    if (!valid.has(hub)) continue;
    neighbourhood.add(hub);
    const thisSats = hub === SELF_REG_HUB ? 0 : satellitesPerHub;
    const direct = [...(neighbors.get(hub) ?? [])]
      .filter((n) => n.startsWith('wiki/') && valid.has(n) && !hubs.has(n))
      .sort(byDeg)
      .slice(0, thisSats);
    const added: string[] = [];
    for (const sat of direct) {
      if (neighbourhood.size >= globalCap) break;
      neighbourhood.add(sat);
      satelliteParent.set(sat, hub);
      primarySatellites.add(sat);
      added.push(sat);
    }
    const thisOuters = hub === SELF_REG_HUB ? 0 : outerPerPrimarySat;
    for (const d of added) {
      if (neighbourhood.size >= globalCap) break;
      const outers = [...(neighbors.get(d) ?? [])]
        .filter((n) => n.startsWith('wiki/') && valid.has(n) && !neighbourhood.has(n) && !hubs.has(n))
        .sort(byDeg)
        .slice(0, thisOuters);
      for (const o of outers) {
        if (neighbourhood.size >= globalCap) break;
        neighbourhood.add(o);
        satelliteParent.set(o, hub);
      }
    }
  }
  return { neighbourhood, satelliteParent, primarySatellites };
}

/**
 * Local "spine" around a single note: an importance-filtered, tiered 2-hop neighbourhood.
 *   center  = the note itself
 *   landmarks = its top ~4 direct neighbours by importance (type rank + degree), one per domain where
 *               possible so the branches are visually distinct
 *   satellites = each landmark's own top neighbours (the 2-hop ring), scored by cohesion (how many
 *               landmarks reach them — shared neighbours pull the cluster tight) plus importance, with a
 *               per-landmark budget so no single hub floods the graph.
 * Per-note budgets (deterministic):
 *   A — landmarks ≤ ⌊√directNeighbors⌋
 *   C — landmarks ≤ unique domains among direct neighbors
 *   sats/landmark = 2 when domains ≥ 3 OR direct ≥ 8, else 1
 *   cap = 1 + landmarks × (1 + sats), capped at LOCAL_GLOBAL_CAP
 */
function localSpineBudget(
  direct: string[],
  domainOf: Map<string, string>,
  isMobile: boolean,
  landmarkMax = LOCAL_LANDMARKS,
): { landmarkCount: number; satsPer: number; cap: number } {
  const n = direct.length;
  if (n === 0) return { landmarkCount: 0, satsPer: 0, cap: 1 };
  const domains = new Set(direct.map((id) => domainOf.get(id) ?? 'gen')).size;
  const fromA = Math.floor(Math.sqrt(n));
  const fromC = domains;
  let landmarkCount = Math.min(fromA, fromC, isMobile ? Math.min(3, landmarkMax) : landmarkMax);
  landmarkCount = Math.max(landmarkCount, 1);
  const satsPer = isMobile ? 1 : domains >= 3 || n >= 8 ? LOCAL_SATS_PER : 1;
  const cap = Math.min(1 + landmarkCount * (1 + satsPer), isMobile ? 9 : LOCAL_GLOBAL_CAP);
  return { landmarkCount, satsPer, cap };
}

function selectLocalSpine(
  seed: string,
  links: SLink[],
  valid: Set<string>,
  typeOf: Map<string, string>,
  domainOf: Map<string, string>,
  isMobile: boolean,
  capOverride?: number,
  landmarkMax?: number,
) {
  const { degree, neighbors } = buildAdjacency(links);
  const imp = (id: string) => typeRank(typeOf.get(id)) * 10 + Math.min(degree.get(id) ?? 0, 24);

  const direct = [...(neighbors.get(seed) ?? [])]
    .filter((id) => valid.has(id))
    .sort((a, b) => imp(b) - imp(a) || a.localeCompare(b));

  const { landmarkCount, satsPer, cap: budgetCap } = localSpineBudget(direct, domainOf, isMobile, landmarkMax);
  const cap = capOverride != null ? Math.min(capOverride, budgetCap) : budgetCap;

  // Landmarks: highest-importance direct neighbours, one per domain first so the branches stay distinct,
  // then fill from what's left if the note only touches a couple of domains.
  const landmarks: string[] = [];
  const usedDomains = new Set<string>();
  for (const n of direct) {
    if (landmarks.length >= landmarkCount) break;
    const d = domainOf.get(n) ?? 'gen';
    if (usedDomains.has(d)) continue;
    landmarks.push(n);
    usedDomains.add(d);
  }
  for (const n of direct) {
    if (landmarks.length >= landmarkCount) break;
    if (!landmarks.includes(n)) landmarks.push(n);
  }

  const landmarkSet = new Set(landmarks);
  const neighbourhood = new Set<string>([seed, ...landmarks]);
  const satelliteParent = new Map<string, string>();
  const cohesion = (n: string) => landmarks.reduce((c, l) => c + (neighbors.get(l)?.has(n) ? 1 : 0), 0);

  // Highest-importance landmark picks its satellites first (it owns shared nodes), so branches don't fight.
  for (const l of landmarks) {
    if (neighbourhood.size >= cap) break;
    const sats = [...(neighbors.get(l) ?? [])]
      .filter((n) => valid.has(n) && n !== seed && !landmarkSet.has(n) && !neighbourhood.has(n))
      .sort((a, b) => cohesion(b) * 8 + imp(b) - (cohesion(a) * 8 + imp(a)) || a.localeCompare(b))
      .slice(0, satsPer);
    for (const s of sats) {
      if (neighbourhood.size >= cap) break;
      neighbourhood.add(s);
      satelliteParent.set(s, l);
    }
  }
  return { neighbourhood, satelliteParent, landmarks: landmarkSet };
}

/** Scale node budgets with seed count so journal/projects graphs stay readable as seeds are added. */
function multiSeedBudgets(seedCount: number, isMobile: boolean) {
  const globalCap = isMobile
    ? Math.min(22, 4 + seedCount * 4)
    : Math.min(MULTI_SEED_GLOBAL_CAP, 8 + seedCount * 8);
  const perSeedCap = Math.min(LOCAL_GLOBAL_CAP, Math.max(5, Math.floor(globalCap / seedCount)));
  const landmarkMax = Math.max(2, Math.min(LOCAL_LANDMARKS, Math.ceil((LOCAL_LANDMARKS * 2) / seedCount)));
  return { globalCap, perSeedCap, landmarkMax };
}

/**
 * Journal / projects: one selectLocalSpine cluster per seed (in caller order), merged with
 * first-seed-wins dedup. Shared neighbours keep the earlier seed's slot; cross-links still render.
 */
function selectMultiSeedVertical(
  seedSlugs: string[],
  links: SLink[],
  valid: Set<string>,
  typeOf: Map<string, string>,
  domainOf: Map<string, string>,
  isMobile: boolean,
) {
  const orderedSeeds = seedSlugs.filter((s) => valid.has(s));
  const { globalCap, perSeedCap, landmarkMax } = multiSeedBudgets(orderedSeeds.length, isMobile);

  const neighbourhood = new Set<string>();
  const satelliteParent = new Map<string, string>();
  const landmarks = new Set<string>();
  const seedLandmarks = new Map<string, string[]>();
  const nodeOwner = new Map<string, string>();

  for (const seed of orderedSeeds) {
    if (neighbourhood.size >= globalCap) break;

    const sel = selectLocalSpine(seed, links, valid, typeOf, domainOf, isMobile, perSeedCap, landmarkMax);

    neighbourhood.add(seed);
    nodeOwner.set(seed, seed);

    const ownedLandmarks: string[] = [];
    for (const lm of sel.landmarks) {
      if (neighbourhood.size >= globalCap) break;
      if (!neighbourhood.has(lm)) {
        neighbourhood.add(lm);
        landmarks.add(lm);
        nodeOwner.set(lm, seed);
        ownedLandmarks.push(lm);
      } else if (nodeOwner.get(lm) === seed) {
        ownedLandmarks.push(lm);
      }
    }

    for (const [sat, parent] of sel.satelliteParent) {
      if (neighbourhood.has(sat) || neighbourhood.size >= globalCap) continue;
      if (!neighbourhood.has(parent)) continue;
      neighbourhood.add(sat);
      satelliteParent.set(sat, parent);
      nodeOwner.set(sat, seed);
    }

    seedLandmarks.set(seed, ownedLandmarks);
  }

  return { neighbourhood, satelliteParent, landmarks, seedLandmarks, orderedSeeds };
}

/**
 * Local-rail geometry — deterministic function of each note's neighborhood, not a random seed.
 *
 * Per landmark i:
 *   θᵢ = domainAngle(domainᵢ) + sectorW × ((importanceᵢ mod 13) / 13 − ½) × 0.35
 *   rᵢ = R₀ × (0.88 + 0.11·satᵢ + 0.008·degreeᵢ)
 *
 * Frame orientation (replaces hash rotation):
 *   φ = atan2(Σ wᵢ·sin θᵢ, Σ wᵢ·cos θᵢ),  w_seed = √degree_seed,  wᵢ = √importanceᵢ
 *
 * Layout kind from topology:
 *   L landmarks, D unique domains, S = angular span of {θᵢ}
 *   → monopole | bilateral | arc | tripod | ring
 *
 * Final angle blends natural θᵢ with an arc/ring distribution centered at φ.
 */
type LocalLayoutKind = 'ring' | 'arc' | 'bilateral' | 'tripod' | 'monopole' | 'vertical-spine';
type LocalPlacement = { ang: number; r: number };
type LocalGeometry = { kind: LocalLayoutKind; ringR: number; placements: Map<string, LocalPlacement> };

function domainAngle(dom: string): number {
  const idx = Math.max(0, DOMAINS.indexOf(dom as never));
  const t = DOMAINS.length <= 1 ? 0.5 : idx / (DOMAINS.length - 1);
  return t * Math.PI * 2 - Math.PI / 2;
}

function landmarkImportance(id: string, typeOf: Map<string, string>, degree: Map<string, number>): number {
  return typeRank(typeOf.get(id)) * 10 + Math.min(degree.get(id) ?? 0, 24);
}

/** Smallest arc on the circle that covers all landmark domain angles. */
function angularSpan(angles: number[]): number {
  if (angles.length < 2) return 0;
  const sorted = [...angles].sort((a, b) => a - b);
  let maxGap = 0;
  for (let i = 0; i < sorted.length; i++) {
    const cur = sorted[i];
    const next = sorted[(i + 1) % sorted.length];
    const gap = i === sorted.length - 1 ? sorted[0] + Math.PI * 2 - cur : next - cur;
    maxGap = Math.max(maxGap, gap);
  }
  return Math.PI * 2 - maxGap;
}

function deriveLocalGeometry(
  seed: string,
  landmarks: string[],
  satelliteParent: Map<string, string>,
  domainOf: Map<string, string>,
  typeOf: Map<string, string>,
  degree: Map<string, number>,
  vertical: boolean,
): LocalGeometry {
  const L = landmarks.length;
  const satCount = (lm: string) => [...satelliteParent.values()].filter((p) => p === lm).length;
  const totalSats = landmarks.reduce((n, lm) => n + satCount(lm), 0);
  const domainCount = new Set(landmarks.map((id) => domainOf.get(id) ?? 'gen')).size;
  const ringR = LOCAL_RING_R * (0.78 + Math.min(totalSats, 8) * 0.028 + L * 0.02);
  const placements = new Map<string, LocalPlacement>();
  const sectorW = (Math.PI * 2) / Math.max(DOMAINS.length, 1);

  const naturalAngle = new Map<string, number>();
  for (const lm of landmarks) {
    const imp = landmarkImportance(lm, typeOf, degree);
    const offset = sectorW * (((imp % 13) / 13 - 0.5) * 0.35);
    naturalAngle.set(lm, domainAngle(domainOf.get(lm) ?? 'gen') + offset);
  }

  const spokeR = (lm: string) =>
    ringR * (0.88 + Math.min(satCount(lm), 3) * 0.11 + Math.min(degree.get(lm) ?? 0, 12) * 0.008);

  if (vertical) {
    const ordered = [...landmarks].sort(
      (a, b) => landmarkImportance(b, typeOf, degree) - landmarkImportance(a, typeOf, degree) || a.localeCompare(b),
    );
    const step = ringR * 0.52;
    ordered.forEach((lm, i) => {
      const θ = naturalAngle.get(lm)!;
      placements.set(lm, { ang: θ, r: (i - (ordered.length - 1) / 2) * step });
    });
    return { kind: 'vertical-spine', ringR, placements };
  }

  const span = angularSpan([...naturalAngle.values()]);
  let kind: LocalLayoutKind;
  if (L === 0) kind = 'ring';
  else if (L === 1) kind = 'monopole';
  else if (L === 2) kind = 'bilateral';
  else if (L === 3 && span < Math.PI * 0.85) kind = 'arc';
  else if (L === 3) kind = 'tripod';
  else if (span >= Math.PI * 1.35 && domainCount >= 3) kind = 'ring';
  else if (span < Math.PI) kind = 'arc';
  else kind = 'ring';

  let vx = Math.cos(domainAngle(domainOf.get(seed) ?? 'gen')) * Math.sqrt(degree.get(seed) ?? 1);
  let vy = Math.sin(domainAngle(domainOf.get(seed) ?? 'gen')) * Math.sqrt(degree.get(seed) ?? 1);
  for (const lm of landmarks) {
    const w = Math.sqrt(landmarkImportance(lm, typeOf, degree));
    const θ = naturalAngle.get(lm)!;
    vx += w * Math.cos(θ);
    vy += w * Math.sin(θ);
  }
  const frame = Math.atan2(vy, vx);

  const setPolar = (id: string, ang: number, r: number) => placements.set(id, { ang, r });

  if (kind === 'monopole') {
    const lm = landmarks[0];
    setPolar(lm, naturalAngle.get(lm)!, spokeR(lm));
  } else if (kind === 'bilateral') {
    const [a, b] = [...landmarks].sort((x, y) => naturalAngle.get(x)! - naturalAngle.get(y)!);
    const θa = naturalAngle.get(a)!;
    const θb = naturalAngle.get(b)!;
    const mid = Math.atan2(Math.sin(θa) + Math.sin(θb), Math.cos(θa) + Math.cos(θb));
    const sep = Math.max(Math.abs(θb - θa), Math.PI * 0.55);
    setPolar(a, mid - sep / 2, spokeR(a));
    setPolar(b, mid + sep / 2, spokeR(b) * (Math.abs(satCount(a) - satCount(b)) >= 2 ? 1.06 : 1));
  } else {
    const ordered = [...landmarks].sort((a, b) => naturalAngle.get(a)! - naturalAngle.get(b)!);
    let arcSpan: number;
    if (kind === 'ring') arcSpan = Math.PI * 2 * 0.94;
    else if (kind === 'tripod') arcSpan = Math.min(span + Math.PI * 0.35, Math.PI * 1.15);
    else arcSpan = Math.min(span + Math.PI * 0.25, Math.PI * 0.92);
    const blend = kind === 'ring' ? 0.55 : 0.72;
    const start = frame - arcSpan / 2;
    ordered.forEach((lm, i) => {
      const distributed = ordered.length === 1 ? frame : start + (arcSpan * i) / Math.max(ordered.length - 1, 1);
      const θ = naturalAngle.get(lm)! * blend + distributed * (1 - blend);
      setPolar(lm, θ, spokeR(lm));
    });
  }

  return { kind, ringR, placements };
}

function applyLocalGeometry(
  geometry: LocalGeometry,
  landmarkAnchorX: Map<string, number>,
  landmarkAnchorY: Map<string, number>,
) {
  for (const [id, { ang, r }] of geometry.placements) {
    if (geometry.kind === 'vertical-spine') {
      landmarkAnchorX.set(id, Math.cos(ang) * geometry.ringR * 0.18);
      landmarkAnchorY.set(id, r);
    } else {
      landmarkAnchorX.set(id, Math.cos(ang) * r);
      landmarkAnchorY.set(id, Math.sin(ang) * r);
    }
  }
}

function localSatReach(parentId: string, satelliteParent: Map<string, string>, degree: Map<string, number>): number {
  const sats = [...satelliteParent.values()].filter((p) => p === parentId).length;
  return LOCAL_SAT_REACH * (0.82 + Math.min(sats, 3) * 0.14 + Math.min(degree.get(parentId) ?? 0, 8) * 0.01);
}

/** Widen a tall multi-seed stack to match the canvas aspect (inverse of the note-rail panorama squash). */
function applyMultiSeedCanvasProportion(nodes: CNode[], viewW: number, viewH: number) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const n of nodes) {
    const x = n.x ?? 0;
    const y = n.y ?? 0;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const bw = Math.max(maxX - minX, 10);
  const bh = Math.max(maxY - minY, 10);
  const targetAR = (viewW / viewH) * MULTI_SEED_CANVAS_AR;
  const naturalAR = bw / bh;

  let scaleX = 1;
  let scaleY = 1;
  if (naturalAR < targetAR) scaleX = Math.min(targetAR / naturalAR, 2.4);
  else scaleY = Math.max(targetAR / naturalAR, 0.72);

  for (const n of nodes) {
    if (n.x != null) n.x *= scaleX;
    if (n.y != null) n.y *= scaleY;
    if (n.fx != null) n.fx *= scaleX;
    if (n.fy != null) n.fy *= scaleY;
  }
}

/** Squash/stretch node positions to match the rail's wide aspect ratio (proportional, not a fixed Y factor). */
function applyLocalRailProportion(nodes: CNode[], viewW: number, viewH: number) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const n of nodes) {
    const x = n.x ?? 0;
    const y = n.y ?? 0;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const bw = Math.max(maxX - minX, 10);
  const bh = Math.max(maxY - minY, 10);
  const targetAR = (viewW / viewH) * LOCAL_RAIL_AR_BOOST;
  const naturalAR = bw / bh;

  let scaleX = LOCAL_X_STRETCH;
  let scaleY = 1;
  if (naturalAR < targetAR) scaleY = naturalAR / targetAR;
  else scaleX *= Math.min(targetAR / naturalAR, 1.28);

  for (const n of nodes) {
    if (n.x != null) n.x *= scaleX;
    if (n.y != null) n.y *= scaleY;
    if (n.fx != null) n.fx *= scaleX;
    if (n.fy != null) n.fy *= scaleY;
  }
}

function selectSpineLinks(
  links: SLink[],
  hood: Set<string>,
  hubs: Set<string>,
  degree: Map<string, number>,
  domainIdx: (id: string) => number,
): SLink[] {
  const key = (l: SLink) => [l.source, l.target].sort().join('|');
  const hasHub = (l: SLink) => hood.has(l.source) && hood.has(l.target) && (hubs.has(l.source) || hubs.has(l.target));
  const chosen = new Map<string, SLink>();
  for (const hub of hubs) {
    const cap = hub === SELF_REG_HUB ? 1 : SPINE_MAX_HUB_LINKS_PER_HUB;
    links
      .filter(hasHub)
      .filter((l) => l.source === hub || l.target === hub)
      .sort((a, b) => {
        const oa = a.source === hub ? a.target : a.source;
        const ob = b.source === hub ? b.target : b.source;
        return (degree.get(ob) ?? 0) - (degree.get(oa) ?? 0) || oa.localeCompare(ob);
      })
      .slice(0, cap)
      .forEach((l) => chosen.set(key(l), l));
  }
  const score = (l: SLink) => Math.max(degree.get(l.source) ?? 0, degree.get(l.target) ?? 0);
  const intra = links.filter((l) => hood.has(l.source) && hood.has(l.target) && !chosen.has(key(l)));
  intra
    .sort((a, b) => score(b) - score(a) || key(a).localeCompare(key(b)))
    .slice(0, SPINE_EXTRA_PERIPHERAL_LINKS)
    .forEach((l) => chosen.set(key(l), l));
  intra
    .filter((l) => !chosen.has(key(l)))
    .filter((l) => {
      const d1 = domainIdx(l.source);
      const d2 = domainIdx(l.target);
      return d1 >= 0 && d2 >= 0 && Math.abs(d1 - d2) >= 3;
    })
    .sort((a, b) => score(b) - score(a) || key(a).localeCompare(key(b)))
    .slice(0, SPINE_OUTLINE_PERIMETER_LINKS)
    .forEach((l) => chosen.set(key(l), l));
  return [...chosen.values()].sort((a, b) => score(b) - score(a)).slice(0, 60);
}

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n: string, fb: string) => cs.getPropertyValue(n).trim() || fb;
  const domain: Record<string, string> = {};
  for (const d of DOMAINS) domain[d] = v(`--d-${d}`, '#7d5a86');
  return {
    domain,
    satellite: v('--gray', v('--faint', '#a59d8e')),
    edge: v('--gray', '#a59d8e'),
    ink: v('--ink', '#211d18'),
    mut: v('--mut', '#6e675c'),
    paper: v('--card', '#fbf8f1'),
    accent: v('--accent', '#7d5a86'),
  };
}

/** Lighten a hex toward white by `t` (0..1) — used for per-node shade variety. */
function mixWhite(hex: string, t: number): string {
  const h = hex.trim().replace('#', '');
  if (h.length < 6) return hex;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const a = Math.max(0, Math.min(1, t));
  const mix = (c: number) => Math.round(c + (255 - c) * a);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** Convex hull (Andrew's monotone chain) over screen points → ordered ring. General for any count. */
function convexHull(pts: Array<[number, number]>): Array<[number, number]> {
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length <= 2) return p;
  const cross = (o: [number, number], a: [number, number], b: [number, number]) =>
    (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower: Array<[number, number]> = [];
  for (const pt of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pt) <= 0) lower.pop();
    lower.push(pt);
  }
  const upper: Array<[number, number]> = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const pt = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pt) <= 0) upper.pop();
    upper.push(pt);
  }
  lower.pop();
  upper.pop();
  return lower.concat(upper);
}

/** Deterministic 0..1 from a slug (per-node jitter). */
function hash01(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

/**
 * Node marker radius in fixed SCREEN pixels, by degree only — independent of zoom, fit scale,
 * canvas size, node count, and corpus size. This IS the node-sizing model: a leaf is always ~2.4px
 * and a hub caps at ~13px on every graph, so all pages look consistent and nothing needs re-tuning
 * as the vault grows. (Positions still come from the graph-space force layout; only the drawn marker
 * size is decoupled from the fit, which is what made big graphs tiny and small graphs huge.)
 */
const NODE_LEAF_PX = 1.8; // ≈ the home's smallest satellite at its fit
const NODE_GROW_PX = 0.4; // × sqrt(degree) — gentle, since median degree is high (~9); keeps the
//                            typical node small (~3px) and lets only rare high-degree hubs grow
const NODE_CAP_PX = 7; // ≈ the home's hub at its fit
const NODE_FLAG_MIN_PX = 5; // spine / full seeds
const LOCAL_NODE_LEAF_PX = 1.1;
const LOCAL_NODE_GROW_PX = 0.2;
const LOCAL_NODE_CAP_PX = 3.4;
const LOCAL_CURRENT_PX = 3.5; // local rail: slightly larger than neighbors, no title

export function initConstellation(root: HTMLElement, data: GraphData) {
  const canvas = root.querySelector('canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const modeAttr = root.dataset.mode;
  const mode: 'spine' | 'full' | 'local' =
    modeAttr === 'full' ? 'full' : modeAttr === 'local' ? 'local' : 'spine';
  const seedSlugs: string[] =
    mode === 'local' ? (JSON.parse(root.dataset.seeds || '[]') as string[]).map((s) => slugifyFilePath(s)) : [];
  const hops = Number(root.dataset.hops) || 1;
  const filterDomain = root.dataset.domain || ''; // full mode: restrict to one domain (MOC sub-graph)
  const showDomainLabels = root.dataset.domainLabels != null; // the Map: label each domain cluster
  const vertical = root.dataset.orient === 'vertical'; // local mode: lay out as a tall column
  const isMobile = window.matchMedia('(max-width: 700px)').matches;
  let colors = readColors();

  const nodeDomain = new Map(data.nodes.map((n) => [n.slug, n.domain]));
  const titleOf = new Map(data.nodes.map((n) => [n.slug, n.title]));
  const typeOf = new Map(data.nodes.map((n) => [n.slug, n.type]));
  const domainIdx = (id: string) => DOMAINS.indexOf((nodeDomain.get(id) ?? '') as never);
  const allLinks: SLink[] = data.edges.map((e) => ({ source: e.source, target: e.target }));
  const valid = new Set(data.nodes.map((n) => n.slug));
  const { degree } = buildAdjacency(allLinks);

  const hubIdsInOrder = [...SPINE_HUBS.keys()].filter((h) => valid.has(h));
  const hubSet = new Set(hubIdsInOrder);
  const seedSet = new Set(seedSlugs.filter((s) => valid.has(s)));
  /** Single-seed note sidebar — flattened rail + subtle current-node emphasis. */
  const noteRailLocal = mode === 'local' && seedSet.size === 1 && !vertical;
  /** Journal / projects: stacked mini-clusters on a vertical spine (budgets scale with seed count). */
  const multiSeedVertical = mode === 'local' && seedSet.size > 1 && vertical;
  /** Journal / projects: persistent seed titles + HTML hover tip for everything else. */
  const localSeedLabels = mode === 'local' && !noteRailLocal;
  /** HTML hover tip on the hovered node (hubs/seeds with persistent canvas labels skip). */
  const htmlHoverTips = mode === 'local' || mode === 'spine' || mode === 'full';
  const flagSet = mode === 'local' ? seedSet : hubSet;

  function screenR(n: CNode, graphMode: 'spine' | 'full' | 'local'): number {
    if (graphMode === 'local' && noteRailLocal) {
      const r = Math.min(LOCAL_NODE_LEAF_PX + LOCAL_NODE_GROW_PX * Math.sqrt(n.degree), LOCAL_NODE_CAP_PX);
      return n.isFlag ? Math.max(r, LOCAL_CURRENT_PX) : r;
    }
    if (graphMode === 'local' && localSeedLabels) {
      // Journal / projects side graphs — home-calibrated fixed px, not the compact note-rail strip.
      if (n.isFlag) return SPINE_HUB_RADIUS;
      if (n.isLandmark) return SPINE_IMPORTANT_RADIUS;
      const r = Math.min(NODE_LEAF_PX + NODE_GROW_PX * Math.sqrt(n.degree), NODE_CAP_PX);
      return Math.max(r, SPINE_SATELLITE_RADIUS);
    }
    const r = Math.min(NODE_LEAF_PX + NODE_GROW_PX * Math.sqrt(n.degree), NODE_CAP_PX);
    if (n.isFlag) return Math.max(r, NODE_FLAG_MIN_PX);
    return r;
  }

  let nodes: CNode[];
  let links: CLink[];
  let satelliteParent = new Map<string, string>();
  let primarySatellites = new Set<string>();
  let landmarkSet = new Set<string>(); // local mode: the fanned hub branches around the center note
  let seedLandmarks = new Map<string, string[]>(); // multi-seed vertical: landmarks placed per seed cluster
  let orderedSeeds: string[] = []; // multi-seed vertical: caller order, filtered to valid slugs
  const seedSlotY = new Map<string, number>(); // multi-seed vertical: pinned Y per seed on the spine

  const makeNode = (id: string): CNode => {
    const deg = degree.get(id) ?? 0;
    const isFlag = flagSet.has(id);
    const important = !isFlag && deg >= IMPORTANT_DEGREE_THRESHOLD;
    const isPrimarySat = primarySatellites.has(id);
    const isLandmark = landmarkSet.has(id);
    const tier: Tier = isFlag ? 'hub' : important ? 'important' : 'satellite';
    let r: number;
    if (mode === 'spine') {
      r = isFlag ? SPINE_HUB_RADIUS : important ? SPINE_IMPORTANT_RADIUS : isPrimarySat ? SPINE_SATELLITE_RADIUS : SPINE_OUTER_SATELLITE_RADIUS;
    } else {
      // size by sqrt(degree) → a few big hubs, many tiny leaves (variety + structure)
      r = Math.min(FULL.nodeBaseRadius + FULL.nodeLinkRadius * Math.sqrt(deg), FULL.nodeMaxRadius);
      // local: lock a clear three-tier hierarchy — seed (flag) > landmark > satellite — so the
      // branch structure reads even when a landmark happens to have a small degree.
      if (isLandmark) r = Math.min(Math.max(r, LOCAL_LANDMARK_RADIUS), LOCAL_LANDMARK_RADIUS + 1);
      if (isFlag) r = Math.max(r, FULL.flagRadius);
    }
    return {
      id,
      title: titleOf.get(id) ?? id,
      domain: nodeDomain.get(id) ?? 'gen',
      url: slugToUrl(id),
      degree: deg,
      tier,
      isPrimarySat,
      isLandmark,
      isFlag,
      r,
      label: noteRailLocal
        ? undefined
        : localSeedLabels && isFlag
          ? titleOf.get(id)
          : mode !== 'local' && isFlag
            ? (SPINE_HUBS.get(id) ?? titleOf.get(id))
            : mode !== 'local' && isLandmark
              ? titleOf.get(id)
              : undefined,
      parent: satelliteParent.get(id),
    };
  };

  if (mode === 'spine') {
    const sel = selectSpineConstellation(hubSet, allLinks, valid, isMobile);
    satelliteParent = sel.satelliteParent;
    primarySatellites = sel.primarySatellites;
    nodes = [...sel.neighbourhood].map(makeNode);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    links = selectSpineLinks(allLinks, sel.neighbourhood, hubSet, degree, domainIdx)
      .filter((l) => byId.has(l.source) && byId.has(l.target))
      .map((l) => ({ source: byId.get(l.source)!, target: byId.get(l.target)! }));
  } else if (mode === 'local' && seedSet.size === 1) {
    const seed = [...seedSet][0];
    const sel = selectLocalSpine(seed, allLinks, valid, typeOf, nodeDomain, isMobile);
    satelliteParent = sel.satelliteParent;
    landmarkSet = sel.landmarks;
    nodes = [...sel.neighbourhood].map(makeNode);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    // keep every edge inside the (small) neighbourhood → seed↔landmark, landmark↔satellite, plus any
    // cross-links that form triangles and make the cluster read as a real neighbourhood, not a star.
    links = allLinks
      .filter((e) => byId.has(e.source) && byId.has(e.target))
      .map((e) => ({ source: byId.get(e.source)!, target: byId.get(e.target)! }));
  } else if (multiSeedVertical) {
    const sel = selectMultiSeedVertical(seedSlugs, allLinks, valid, typeOf, nodeDomain, isMobile);
    satelliteParent = sel.satelliteParent;
    landmarkSet = sel.landmarks;
    seedLandmarks = sel.seedLandmarks;
    orderedSeeds = sel.orderedSeeds;
    const slotStep = MULTI_SEED_SLOT_STEP * (0.96 + Math.min(orderedSeeds.length, 6) * 0.03);
    orderedSeeds.forEach((seed, i) => {
      seedSlotY.set(seed, (i - (orderedSeeds.length - 1) / 2) * slotStep);
    });
    nodes = [...sel.neighbourhood].map(makeNode);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    links = allLinks
      .filter((e) => byId.has(e.source) && byId.has(e.target))
      .map((e) => ({ source: byId.get(e.source)!, target: byId.get(e.target)! }));
  } else {
    const ids =
      mode === 'local'
        ? neighborhood(seedSet, allLinks, hops, valid)
        : data.nodes.filter((n) => !filterDomain || n.domain === filterDomain).map((n) => n.slug);
    nodes = ids.map(makeNode);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const score = (l: SLink) => Math.max(degree.get(l.source) ?? 0, degree.get(l.target) ?? 0);
    const perNode = new Map<string, number>();
    links = [];
    for (const e of [...allLinks].sort((a, b) => score(b) - score(a))) {
      if (!byId.has(e.source) || !byId.has(e.target)) continue;
      if (mode === 'full') {
        // cap links per node (de-blob); the local slice is small so it keeps all its edges
        if ((perNode.get(e.source) ?? 0) >= FULL.maxLinksPerNode) continue;
        if ((perNode.get(e.target) ?? 0) >= FULL.maxLinksPerNode) continue;
        perNode.set(e.source, (perNode.get(e.source) ?? 0) + 1);
        perNode.set(e.target, (perNode.get(e.target) ?? 0) + 1);
      }
      links.push({ source: byId.get(e.source)!, target: byId.get(e.target)! });
    }
  }

  // Map: keep cross-domain edges — they carry the link topology (hubs/spokes + inter-domain ties)
  // that makes the graph interesting; the domain clustering below still groups the six sections.

  const byId = new Map(nodes.map((n) => [n.id, n]));

  const adj = new Map<string, Set<string>>();
  const addAdj = (a: string, b: string) => (adj.get(a) ?? adj.set(a, new Set()).get(a)!).add(b);
  for (const l of links) {
    addAdj(l.source.id, l.target.id);
    addAdj(l.target.id, l.source.id);
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let transform: ZoomTransform = zoomIdentity;
  const hubAnchorX = new Map<string, number>();
  const hubAnchorY = new Map<string, number>();
  const landmarkAnchorX = new Map<string, number>(); // local mode: each landmark's seat on the ring
  const landmarkAnchorY = new Map<string, number>();

  function layout() {
    const rect = root.getBoundingClientRect();
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1); // use the real box height — a 250 floor overflowed short graphs (home 180, local 210) and pushed the centered cluster low
    canvas!.width = width * dpr;
    canvas!.height = height * dpr;
    canvas!.style.width = `${width}px`;
    canvas!.style.height = `${height}px`;

    const sim = forceSimulation<CNode>(nodes).alphaDecay(0.05).velocityDecay(0.55);

    if (mode === 'spine') {
      hubIdsInOrder.forEach((hub, i) => {
        hubAnchorX.set(hub, domainTargetX(i, HUB_COUNT, width));
        hubAnchorY.set(hub, SPINE_Y_BAND[i % SPINE_Y_BAND.length] * height * 1.3);
      });
      sim
        .force('charge', forceManyBody<CNode>().strength(-250))
        .force('center', forceCenter<CNode>(0, 0).strength(0.02))
        .force('link', forceLink<CNode, CLink>(links).id((n) => n.id).distance(60))
        .force('collide', forceCollide<CNode>((n) => n.r + 14).iterations(3))
        .force(
          'x',
          forceX<CNode>((d) =>
            d.parent ? hubAnchorX.get(d.parent) ?? 0 : hubSet.has(d.id) ? hubAnchorX.get(d.id) ?? 0 : domainTargetX(Math.max(domainIdx(d.id), 0), DOMAINS.length, width),
          ).strength((d) => (d.parent ? 0.3 : hubSet.has(d.id) ? 0.9 : 0.15)),
        )
        .force(
          'y',
          forceY<CNode>((d) => (hubSet.has(d.id) ? hubAnchorY.get(d.id) ?? 0 : d.parent ? hubAnchorY.get(d.parent) ?? 0 : 0)).strength((d) =>
            hubSet.has(d.id) ? 0.85 : d.isPrimarySat ? 0.12 : d.parent ? 0.05 : 0.04,
          ),
        );
    } else if (mode === 'local') {
      if (multiSeedVertical && orderedSeeds.length > 0) {
        landmarkAnchorX.clear();
        landmarkAnchorY.clear();
        for (const seed of orderedSeeds) {
          const lmIds = seedLandmarks.get(seed) ?? [];
          const slotY = seedSlotY.get(seed) ?? 0;
          // Horizontal fan per seed; seeds stack vertically on the shared spine.
          const geometry = deriveLocalGeometry(seed, lmIds, satelliteParent, nodeDomain, typeOf, degree, false);
          for (const [id, { ang, r }] of geometry.placements) {
            landmarkAnchorX.set(id, Math.cos(ang) * r);
            landmarkAnchorY.set(id, Math.sin(ang) * r + slotY);
          }
        }
        const anchorStrength = (d: CNode) =>
          seedSet.has(d.id) ? 1 : landmarkSet.has(d.id) ? 0.9 : d.parent ? 0.3 : 0.08;
        const satX = (d: CNode) =>
          d.parent ? (landmarkAnchorX.get(d.parent) ?? 0) * localSatReach(d.parent, satelliteParent, degree) : 0;
        const satY = (d: CNode) =>
          d.parent ? (landmarkAnchorY.get(d.parent) ?? 0) * localSatReach(d.parent, satelliteParent, degree) : 0;
        sim
          .force('charge', forceManyBody<CNode>().strength(-250))
          .force('center', forceCenter<CNode>(0, 0).strength(0.025))
          .force('link', forceLink<CNode, CLink>(links).id((n) => n.id).distance(44).strength(0.48))
          .force('collide', forceCollide<CNode>((n) => n.r + 7).iterations(2))
          .force(
            'x',
            forceX<CNode>((d) => (landmarkSet.has(d.id) ? landmarkAnchorX.get(d.id) ?? 0 : satX(d))).strength(anchorStrength),
          )
          .force(
            'y',
            forceY<CNode>((d) => (seedSet.has(d.id) ? seedSlotY.get(d.id) ?? 0 : landmarkSet.has(d.id) ? landmarkAnchorY.get(d.id) ?? 0 : satY(d))).strength(
              anchorStrength,
            ),
          );
      } else if (landmarkSet.size > 0) {
        // local SPINE: seed pinned at origin; landmark seats from deriveLocalGeometry() — a pure
        // function of domain angles, link mass, and angular span (no hash / random seed).
        const landmarkIds = [...landmarkSet];
        const seed = seedSet.size === 1 ? [...seedSet][0] : '';
        const geometry = deriveLocalGeometry(seed, landmarkIds, satelliteParent, nodeDomain, typeOf, degree, vertical);
        applyLocalGeometry(geometry, landmarkAnchorX, landmarkAnchorY);
        const anchorStrength = (d: CNode) =>
          seedSet.has(d.id) ? 1 : landmarkSet.has(d.id) ? 0.9 : d.parent ? 0.3 : 0.08;
        const satX = (d: CNode) =>
          d.parent ? (landmarkAnchorX.get(d.parent) ?? 0) * localSatReach(d.parent, satelliteParent, degree) : 0;
        const satY = (d: CNode) =>
          d.parent ? (landmarkAnchorY.get(d.parent) ?? 0) * localSatReach(d.parent, satelliteParent, degree) : 0;
        sim
          .force('charge', forceManyBody<CNode>().strength(geometry.kind === 'arc' ? -240 : -260))
          .force('center', forceCenter<CNode>(0, 0).strength(0.03))
          .force('link', forceLink<CNode, CLink>(links).id((n) => n.id).distance(46).strength(0.5))
          .force('collide', forceCollide<CNode>((n) => n.r + 8).iterations(2))
          .force(
            'x',
            forceX<CNode>((d) => (landmarkSet.has(d.id) ? landmarkAnchorX.get(d.id) ?? 0 : satX(d))).strength(anchorStrength),
          )
          .force(
            'y',
            forceY<CNode>((d) => (landmarkSet.has(d.id) ? landmarkAnchorY.get(d.id) ?? 0 : satY(d))).strength(anchorStrength),
          );
      } else {
        // a leaf or orphan note with no landmarks: gentle force, seed centered.
        sim
          .force('charge', forceManyBody<CNode>().strength(-230))
          .force('center', forceCenter<CNode>(0, 0).strength(0.06))
          .force('link', forceLink<CNode, CLink>(links).id((n) => n.id).distance(50).strength(0.45))
          .force('collide', forceCollide<CNode>((n) => n.r + 6).iterations(2))
          .force(vertical ? 'flatX' : 'flatY', (vertical ? forceX<CNode>(0) : forceY<CNode>(0)).strength(vertical ? 0.05 : 0.07));
        if (multiSeedVertical) {
          sim.force(
            'y',
            forceY<CNode>((d) => (seedSet.has(d.id) ? seedSlotY.get(d.id) ?? 0 : 0)).strength((d) => (seedSet.has(d.id) ? 0.85 : 0.04)),
          );
        }
      }
      if (seedSet.size === 1 || multiSeedVertical) {
        for (const n of nodes)
          if (seedSet.has(n.id)) {
            n.fx = 0;
            n.fy = multiSeedVertical ? (seedSlotY.get(n.id) ?? 0) : 0;
          }
      }
    } else {
      const repel = showDomainLabels ? -90 : -100 * FULL.repelForce;
      const linkDist = showDomainLabels ? 42 : FULL.linkDistance;
      sim
        .force('charge', forceManyBody<CNode>().strength(repel))
        .force('center', forceCenter<CNode>(0, 0).strength(FULL.centerForce))
        .force('link', forceLink<CNode, CLink>(links).id((n) => n.id).distance(linkDist))
        .force('collide', forceCollide<CNode>((n) => n.r + 2).iterations(2));
      if (showDomainLabels) {
        // Map: arrange the present domains on a tidy 3-wide grid of territories; strong pull → tight,
        // clearly-separated lobes a domain label can sit above.
        const present = [...new Set(nodes.map((n) => n.domain))].sort(
          (a, b) => DOMAINS.indexOf(a as never) - DOMAINS.indexOf(b as never),
        );
        const cols = Math.min(3, present.length);
        const rows = Math.max(1, Math.ceil(present.length / cols));
        const gx = width / (cols + 0.4);
        const gy = height / (rows + 1.8); // rows packed close so there's no dead band between them
        const cx = (dom: string) => ((present.indexOf(dom) % cols) - (cols - 1) / 2) * gx;
        const cy = (dom: string) => (Math.floor(present.indexOf(dom) / cols) - (rows - 1) / 2) * gy;
        sim
          .force('clusterX', forceX<CNode>((d) => cx(d.domain)).strength(0.55))
          .force('clusterY', forceY<CNode>((d) => cy(d.domain)).strength(0.55));
      } else if (!filterDomain) {
        // multi-domain: each domain pulled into a separated lobe, arranged in a 2D ZIG-ZAG band
        // (domainTargetX spreads them L→R; the amplified SPINE_Y_BAND staggers them up/down).
        sim
          .force('clusterX', forceX<CNode>((d) => domainTargetX(Math.max(domainIdx(d.id), 0), DOMAINS.length, width)).strength(FULL.clusterForce))
          .force(
            'clusterY',
            forceY<CNode>((d) => SPINE_Y_BAND[Math.max(domainIdx(d.id), 0) % SPINE_Y_BAND.length] * height * 1.7).strength(FULL.clusterForce),
          );
      } else {
        // single domain (a domain MOC sub-graph): gentle pull → organic cluster. flatX makes it a
        // portrait column for the vertical side rail; flatY keeps it a band when shown full-width.
        sim.force(
          vertical ? 'flatX' : 'flatY',
          (vertical ? forceX<CNode>(0) : forceY<CNode>(0)).strength(vertical ? 0.1 : FULL.flatY),
        );
      }
    }

    // synchronous settle → locked layout
    sim.stop();
    const settleTicks = Math.ceil(Math.log(sim.alphaMin()) / Math.log(1 - sim.alphaDecay()));
    sim.tick(settleTicks);

    if (mode === 'full') {
      for (const n of nodes) if (n.y != null) n.y *= FULL.yCompress; // extra vertical squash → flatter
      sim.tick(10);
    } else {
      for (const n of nodes) {
        if (hubSet.has(n.id)) {
          n.fx = hubAnchorX.get(n.id) ?? n.fx;
          n.fy = hubAnchorY.get(n.id) ?? n.fy;
        } else if (landmarkSet.has(n.id)) {
          n.fx = landmarkAnchorX.get(n.id) ?? n.fx;
          n.fy = landmarkAnchorY.get(n.id) ?? n.fy;
        }
      }
      sim.tick(Math.ceil(settleTicks / 4));
      // Sidebar local graph: proportional flatten to the canvas aspect.
      if (noteRailLocal) {
        applyLocalRailProportion(nodes, width, height);
        sim.tick(6);
      } else if (multiSeedVertical) {
        applyMultiSeedCanvasProportion(nodes, width, height);
        sim.tick(6);
      }
    }

    fitToView();
    draw();
  }

  // auto-fit — over ALL nodes (+ spine hub labels) so nothing on the edges is clipped
  function fitToView() {
    ctx!.font = `600 11px ${MONO_STACK}`;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const inc = (x: number, y: number) => {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    };
    let sumX = 0;
    let sumY = 0;
    let count = 0;
    let hubCount = 0;
    const fitted: CNode[] = [];
    for (const n of nodes) {
      // spine: fit the CORE only (hubs + primary satellites + hub labels) — outer satellites spill
      // beyond, exactly like the original zoomToFitSpine, so the view stays tight (not zoomed way out).
      if (mode === 'spine' && n.tier !== 'hub' && !n.isPrimarySat) continue;
      const x = n.x ?? 0;
      const y = n.y ?? 0;
      inc(x - n.r, y - n.r);
      inc(x + n.r, y + n.r);
      sumX += x;
      sumY += y;
      count++;
      fitted.push(n);
      if (multiSeedVertical && n.isFlag) {
        const lw = ctx!.measureText(n.label ?? n.title).width;
        inc(x - lw / 2 - 4, y + n.r + 5);
        inc(x + lw / 2 + 4, y + n.r + 18);
      }
      if (mode === 'spine' && n.tier === 'hub') {
        hubCount++;
        const lw = ctx!.measureText(n.label ?? n.title).width;
        inc(x - lw / 2 - 4, y + n.r + 16);
        inc(x + lw / 2 + 4, y);
      }
    }
    if (!isFinite(minX) || count === 0) return;
    const m = SPINE_AUTO_FIT_MARGIN + (mode === 'spine' ? 8 : mode === 'local' ? 10 : 18);
    let centerX: number;
    let centerY: number;
    let fit: number;
    if (mode === 'spine' && hubCount > 0) {
      // Zoom into the labeled HUB cluster (the dense center). Primary + outer satellites fan out
      // around it and spill past the frame on purpose. Fit the hubs' own bounding box — each hub's
      // label included — and center on its midpoint, so the whole labeled cluster sits dead center
      // at a tight zoom instead of being shrunk to fit the satellites.
      let hMinX = Infinity;
      let hMaxX = -Infinity;
      let hMinY = Infinity;
      let hMaxY = -Infinity;
      for (const n of fitted) {
        if (n.tier !== 'hub') continue;
        const x = n.x ?? 0;
        const y = n.y ?? 0;
        const halfW = Math.max(n.r, ctx!.measureText(n.label ?? n.title).width / 2 + 4);
        if (x - halfW < hMinX) hMinX = x - halfW;
        if (x + halfW > hMaxX) hMaxX = x + halfW;
        if (y - n.r < hMinY) hMinY = y - n.r;
        if (y + n.r + 16 > hMaxY) hMaxY = y + n.r + 16; // hub label sits ~16px below the node
      }
      centerX = (hMinX + hMaxX) / 2;
      centerY = (hMinY + hMaxY) / 2;
      fit = Math.min((width - m * 2) / (hMaxX - hMinX), (height - m * 2) / (hMaxY - hMinY), 2.4) * 0.9; // *0.9 = a touch of zoom-out so the cluster breathes instead of sitting edge-to-edge
    } else if (mode === 'full') {
      // center on the GRAPH'S CENTER OF GRAVITY (mean node position), not the bounding-box midpoint —
      // a few high/low outliers drag the bbox center but barely move the mean, so the mass lands in
      // the actual middle. Scale to fit the farthest node (plus domain-label room) from the centroid.
      const labelPad = showDomainLabels ? 22 : 0;
      centerX = sumX / count;
      centerY = sumY / count;
      let dx = 1;
      let dy = 1;
      for (const n of fitted) {
        const x = n.x ?? 0;
        const y = n.y ?? 0;
        dx = Math.max(dx, Math.abs(x - centerX) + n.r);
        dy = Math.max(dy, Math.abs(y - centerY) + n.r + labelPad);
      }
      fit = Math.min((width / 2 - m) / dx, (height / 2 - m) / dy, SPINE_MAX_FIT_SCALE);
    } else {
      // local: the seed is pinned at the origin, so fit the bounding box around it.
      const bw = maxX - minX;
      const bh = maxY - minY;
      fit =
        Math.min((width - m * 2) / bw, (height - m * 2) / bh, SPINE_MAX_FIT_SCALE) *
        (multiSeedVertical ? MULTI_SEED_FIT_BOOST : mode === 'local' ? LOCAL_FIT_BOOST : 1);
      centerX = (minX + maxX) / 2;
      centerY = (minY + maxY) / 2;
    }
    transform = zoomIdentity.translate(width / 2, height / 2).scale(fit).translate(-centerX, -centerY);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    select(canvas as HTMLCanvasElement).call(zb.transform as any, transform);
  }

  const zb = zoom<HTMLCanvasElement, unknown>()
    .scaleExtent([0.1, 6])
    .filter((ev: Event) => {
      // Plain wheel / two-finger scroll must scroll the PAGE — only a pinch (ctrl+wheel) zooms the graph.
      if (ev.type === 'wheel') return (ev as WheelEvent).ctrlKey;
      return !(ev as MouseEvent).button; // left-drag pans
    })
    .on('zoom', (ev: D3ZoomEvent<HTMLCanvasElement, unknown>) => {
      transform = ev.transform;
      draw();
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select(canvas).call(zb as any);

  let hovered: CNode | null = null;
  let tipsRoot =
    root.querySelector<HTMLElement>('.constellation__tips') ??
    Object.assign(document.createElement('div'), { className: 'constellation__tips', ariaHidden: 'true' });
  if (!tipsRoot.parentElement) root.appendChild(tipsRoot);

  const TIP_GAP = 10;

  function tipAnchor(n: CNode, k: number) {
    const r = nodeR(n);
    const x = (n.x ?? 0) * k + transform.x;
    const y = (n.y ?? 0) * k + transform.y;
    return { n, x, y: y - r - TIP_GAP };
  }

  function shouldSkipHtmlTip(n: CNode) {
    if (mode === 'spine' && n.tier === 'hub') return true;
    if (localSeedLabels && n.isFlag) return true;
    return false;
  }

  /** Spine focus mode: one prominent label — hover tip for satellites, canvas label for hubs. */
  function spineHubLabelAlpha(n: CNode) {
    if (!hovered) return 1;
    if (n === hovered) return 1;
    return SPINE_ANCHOR_LABEL_DIM;
  }

  function renderHoverTips(center: CNode | null, k: number) {
    tipsRoot.innerHTML = '';
    if (!htmlHoverTips || !center || shouldSkipHtmlTip(center)) return;

    const s = tipAnchor(center, k);
    const el = document.createElement('div');
    el.className = 'constellation__tip';
    el.textContent = s.n.label ?? s.n.title;
    el.style.left = `${s.x}px`;
    el.style.top = `${s.y}px`;
    el.style.transform = 'translate(-50%, -100%)';
    tipsRoot.appendChild(el);
  }

  // The home spine keeps its ORIGINAL fit-scaled tier sizing (untouched). Every OTHER graph uses the
  // fixed-px screenR so its node size stays consistent regardless of canvas / zoom / node count —
  // calibrated above to match what the home looks like.
  const nodeR = (n: CNode) => (mode === 'spine' ? n.r * transform.k : screenR(n, mode));
  function nodeAt(px: number, py: number): CNode | null {
    let best: CNode | null = null;
    let bestD = Infinity;
    for (const n of nodes) {
      const nx = (n.x ?? 0) * transform.k + transform.x;
      const ny = (n.y ?? 0) * transform.k + transform.y;
      const dx = nx - px;
      const dy = ny - py;
      const d = dx * dx + dy * dy;
      const hitR = nodeR(n) + 6;
      const hit = hitR * hitR;
      if (d <= hit && d < bestD) {
        bestD = d;
        best = n;
      }
    }
    return best;
  }
  canvas.addEventListener('mousemove', (ev) => {
    const rect = canvas.getBoundingClientRect();
    const n = nodeAt(ev.clientX - rect.left, ev.clientY - rect.top);
    canvas.style.cursor = n ? 'pointer' : 'grab';
    if (n !== hovered) {
      hovered = n;
      draw();
    }
  });
  canvas.addEventListener('mouseleave', () => {
    if (hovered) {
      hovered = null;
      tipsRoot.innerHTML = '';
      draw();
    }
  });
  canvas.addEventListener('click', (ev) => {
    const rect = canvas.getBoundingClientRect();
    const n = nodeAt(ev.clientX - rect.left, ev.clientY - rect.top);
    if (n) window.location.href = n.url;
  });

  function draw() {
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    const k = transform.k;
    const sx = (n: CNode) => (n.x ?? 0) * k + transform.x;
    const sy = (n: CNode) => (n.y ?? 0) * k + transform.y;
    const neigh = hovered ? adj.get(hovered.id) : null;
    const dim = (n: CNode) => !!hovered && n !== hovered && !(neigh && neigh.has(n.id));

    // Map: domain labels on the OUTSIDE of the map — top-row domains label above their cluster, the
    // bottom row labels below — so a tall cluster never drops its label into a neighbour. No fills:
    // the force layout shows the real link topology; node color + label mark each section.
    const regionLabel = new Map<string, { x: number; y: number; color: string }>();
    if (showDomainLabels) {
      const groups = new Map<string, CNode[]>();
      for (const n of nodes) {
        const a = groups.get(n.domain);
        if (a) a.push(n);
        else groups.set(n.domain, [n]);
      }
      // Recover each domain's grid row (matches the 3-wide clustering grid in layout()).
      const present = [...groups.keys()].sort((a, b) => DOMAINS.indexOf(a as never) - DOMAINS.indexOf(b as never));
      const cols = Math.min(3, present.length);
      const rows = Math.max(1, Math.ceil(present.length / cols));
      for (const [dom, ns] of groups) {
        let cx = 0;
        let topY = Infinity;
        let botY = -Infinity;
        for (const n of ns) {
          const x = sx(n);
          const y = sy(n);
          const r = nodeR(n);
          cx += x;
          if (y - r < topY) topY = y - r;
          if (y + r > botY) botY = y + r;
        }
        cx /= ns.length;
        const isBottomRow = Math.floor(present.indexOf(dom) / cols) === rows - 1;
        const y = isBottomRow ? botY + 8 : topY - 16;
        regionLabel.set(dom, { x: cx, y, color: colors.domain[dom] ?? colors.accent });
      }
    }

    ctx.lineWidth = 0.8;
    for (const l of links) {
      const active = hovered && (l.source === hovered || l.target === hovered);
      ctx.globalAlpha = hovered ? (active ? 0.7 : 0.05) : SPINE_LINK_ALPHA;
      ctx.strokeStyle = active ? colors.accent : colors.edge;
      ctx.beginPath();
      ctx.moveTo(sx(l.source), sy(l.source));
      ctx.lineTo(sx(l.target), sy(l.target));
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    for (const n of nodes) {
      const baseHue = colors.domain[n.domain] ?? colors.accent;
      const r = nodeR(n);
      const isCurrent = noteRailLocal && n.isFlag;
      const degU = Math.min(Math.sqrt(n.degree) / 4, 1);
      const shade = Math.max(0, Math.min(0.6, 0.5 * (1 - degU) + 0.12 * (hash01(n.id) - 0.5)));
      const fill = isCurrent ? mixWhite(baseHue, shade * 0.35) : mixWhite(baseHue, shade);
      ctx.globalAlpha = dim(n) ? 0.16 : isCurrent ? 0.96 : mode === 'local' ? 0.84 : n.isFlag ? 1 : 0.92;
      ctx.beginPath();
      ctx.arc(sx(n), sy(n), r, 0, Math.PI * 2);
      ctx.fillStyle = fill;
      ctx.fill();
      if (isCurrent) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = baseHue;
        ctx.globalAlpha = dim(n) ? 0.2 : 0.38;
        ctx.beginPath();
        ctx.arc(sx(n), sy(n), r + 2, 0, Math.PI * 2);
        ctx.stroke();
      } else if (n === hovered || (mode !== 'local' && n.isFlag)) {
        const focusedHub = mode === 'spine' && n === hovered && n.tier === 'hub';
        ctx.lineWidth = focusedHub ? 2 : 1.5;
        ctx.strokeStyle = baseHue;
        ctx.globalAlpha = dim(n) ? 0.22 : focusedHub ? 0.78 : 0.5;
        ctx.beginPath();
        ctx.arc(sx(n), sy(n), r + (focusedHub ? 4.5 : 3.5), 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    // labels: spine hubs + journal/projects seeds persistent; satellites → HTML hover tips.
    // Spine focus mode: dim anchor labels while a satellite is hovered; emphasize the focused hub.
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (const n of nodes) {
      const persistent = (mode === 'spine' && n.tier === 'hub') || (localSeedLabels && n.isFlag);
      if (!persistent) continue;
      const isHub = n.tier === 'hub';
      const focusedHub = mode === 'spine' && isHub && n === hovered;
      const big = isHub || (localSeedLabels && n.isFlag);
      ctx.globalAlpha =
        mode === 'spine' && isHub ? spineHubLabelAlpha(n) : dim(n) ? 0.3 : 1;
      ctx.font = `${focusedHub ? 600 : big ? 500 : 400} ${big ? 10 : 9}px ${MONO_STACK}`;
      const text = n.label ?? n.title;
      const tx = sx(n);
      const ty = sy(n) + nodeR(n) + 5;
      ctx.lineWidth = focusedHub ? 3 : 2.5;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = colors.paper;
      ctx.strokeText(text, tx, ty);
      ctx.fillStyle = focusedHub ? colors.ink : colors.mut;
      ctx.fillText(text, tx, ty);
    }
    ctx.globalAlpha = 1;

    // Map: territory labels, seated on the top edge of each shaded region.
    if (showDomainLabels) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.font = `600 11.5px ${MONO_STACK}`;
      for (const [dom, pos] of regionLabel) {
        const text = ((DOMAIN_LABELS as Record<string, string>)[dom] ?? dom).toUpperCase();
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = colors.paper;
        ctx.strokeText(text, pos.x, pos.y);
        ctx.fillStyle = pos.color;
        ctx.fillText(text, pos.x, pos.y);
      }
      ctx.globalAlpha = 1;
    }

    renderHoverTips(hovered, k);
  }

  layout();
  let rt: number | undefined;
  let lastW = root.getBoundingClientRect().width;
  let lastH = root.getBoundingClientRect().height;
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(() => {
      // Only relayout on a real size change — guards against the sub-pixel feedback loop where
      // setting the canvas width nudges the container and re-fires the observer ("expanding" graph).
      const r = root.getBoundingClientRect();
      if (Math.abs(r.width - lastW) < 1.5 && Math.abs(r.height - lastH) < 1.5) return;
      lastW = r.width;
      lastH = r.height;
      window.clearTimeout(rt);
      rt = window.setTimeout(layout, 120);
    }).observe(root);
  }
  new MutationObserver(() => {
    colors = readColors();
    draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}
