import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceRadial,
  forceX,
  forceY,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3"
import { Text, Graphics, Application, Container, Circle } from "pixi.js"
import { Group as TweenGroup, Tween as Tweened } from "@tweenjs/tween.js"
import { registerEscapeHandler, removeAllChildren } from "./util"
import { FullSlug, SimpleSlug, getFullSlug, resolveRelative, simplifySlug } from "../../util/path"
import { D3Config } from "../Graph"

type GraphicsInfo = {
  color: string
  gfx: Graphics
  alpha: number
  active: boolean
}

type NodeData = {
  id: SimpleSlug
  text: string
  tags: string[]
} & SimulationNodeDatum

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

type LinkData = {
  source: NodeData
  target: NodeData
} & SimulationLinkDatum<NodeData>

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData
}

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData
  label: Text
  pulseRing?: Graphics
  baseAlpha: number
}

const localStorageKey = "graph-visited"
function getVisited(): Set<SimpleSlug> {
  return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited()
  visited.add(slug)
  localStorage.setItem(localStorageKey, JSON.stringify([...visited]))
}

type TweenNode = {
  update: (time: number) => void
  stop: () => void
}

const FALLBACK_NODE_COLOR = "#6f6875"

type SpineDomain = { id: string; color: string; prefixes: string[] }

function mixColor(hex: string, towardWhite: number): string {
  const h = hex.replace("#", "")
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const mix = (c: number) => Math.round(c + (255 - c) * towardWhite)
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`
}

function domainForNode(id: string, spineDomains: SpineDomain[]): SpineDomain | undefined {
  for (const domain of spineDomains) {
    for (const prefix of domain.prefixes) {
      if (id.startsWith(prefix)) return domain
    }
  }
  return undefined
}

function domainTargetX(domainIndex: number, count: number, width: number): number {
  const t = count <= 1 ? 0.5 : 0.08 + (domainIndex / (count - 1)) * 0.84
  return t * width - width / 2
}

const SPINE_HUB_RADIUS = 9
const SPINE_IMPORTANT_RADIUS = 6
const SPINE_OUTER_SATELLITE_RADIUS = 2.8
const SPINE_Y_BAND = [-0.15, 0.11, -0.06, 0.15, -0.12, 0.06]  // vertical offsets for the 6 hubs — keeps the overall flat band shape from the reference layout while allowing local 2D spread per hub
const SPINE_LINK_ALPHA = 0.26
const SPINE_SATELLITE_RADIUS = 3.5
const IMPORTANT_DEGREE_THRESHOLD = 3  // 3-tier threshold: non-primary nodes with deg >= this get important (domain color, boosted size); lower get gray/small to de-blob notes graph etc.

// Link selection tuning for spine (to control visual shape without changing node positions much).
// These directly address "flat parallelogram with clear outside outline, less middle clutter":
// - Fewer hub spokes (less central density)
// - Many more peripheral/sat/outer links (more on the outside edges)
// - Targeted long cross-domain perimeter links (to trace top/bottom rails of the band for flat shape)
// Tweak these consts and hard-refresh to iterate the outline vs interior balance.
const SPINE_MAX_HUB_LINKS_PER_HUB = 3  // or 1 for Self Regulation
const SPINE_EXTRA_PERIPHERAL_LINKS = 15
const SPINE_OUTLINE_PERIMETER_LINKS = 4

// Zoom fit tuning.
// More generous padding around the core band for a less tight default view (more of the
// flat constellation visible with breathing room). The structure, labels, and perimeter
// outline are good; this just dials the auto-fit back so it doesn't feel overly zoomed-in
// on first load. You can always manually zoom further with ctrl+scroll/pinch.
const SPINE_ZOOM_PADDING = 25
const SPINE_MAX_FIT_SCALE = 3.5
const SPINE_ZOOM_IN_FACTOR = 1.0
const SELF_REG_HUB = "wiki/Dimensions/Self-Regulation"
// Links in spine mode use --gray (a bit more color/contrast on cream paper than --lightgray)
// with modest alpha so they stay recessed but visible. "Just a smidge" more than the very faded 0.22.

function linkKey(l: SimpleLinkData) {
  return [l.source, l.target].sort().join("|")
}

function buildAdjacency(links: SimpleLinkData[]) {
  const degree = new Map<SimpleSlug, number>()
  const neighbors = new Map<SimpleSlug, Set<SimpleSlug>>()
  for (const link of links) {
    degree.set(link.source, (degree.get(link.source) ?? 0) + 1)
    degree.set(link.target, (degree.get(link.target) ?? 0) + 1)
    for (const [a, b] of [
      [link.source, link.target],
      [link.target, link.source],
    ] as const) {
      if (!neighbors.has(a)) neighbors.set(a, new Set())
      neighbors.get(a)!.add(b)
    }
  }
  return { degree, neighbors }
}

function selectSpineConstellation(
  hubs: Set<SimpleSlug>,
  links: SimpleLinkData[],
  validLinks: Set<SimpleSlug>,
  isMobile: boolean,
) {
  const { degree, neighbors } = buildAdjacency(links)
  // Dialed back globally (satellitesPerHub=3 desktop, globalCap=30, outers=1, extras=15, outline=4, hub links base=3)
  // + minimal for Self Reg (0 sats, 0 outers, 1 link) to drop nodes/links while keeping flat horizontal band structure.
  const satellitesPerHub = isMobile ? 1 : 3
  const globalCap = 30
  const outerPerPrimarySat = isMobile ? 0 : 1   // reduced to drop nodes/links globally while keeping flat band structure
  const neighbourhood = new Set<SimpleSlug>()
  const satelliteParent = new Map<SimpleSlug, SimpleSlug>()
  const primarySatellites = new Set<SimpleSlug>()

  for (const hub of hubs) {
    if (!validLinks.has(hub)) continue
    neighbourhood.add(hub)

    const thisSats = hub === SELF_REG_HUB ? 0 : satellitesPerHub  // 0 for Self Reg; 3 globally to drop nodes/links
    const directCands = [...(neighbors.get(hub) ?? [])]
      .filter((n) => n.startsWith("wiki/") && validLinks.has(n) && !hubs.has(n))
      .sort((a, b) => {
        const d = (degree.get(b) ?? 0) - (degree.get(a) ?? 0)
        return d !== 0 ? d : a.localeCompare(b)
      })
      .slice(0, thisSats)

    const addedDirectsThisHub: SimpleSlug[] = []
    for (const sat of directCands) {
      if (neighbourhood.size >= globalCap) break
      neighbourhood.add(sat)
      satelliteParent.set(sat, hub)
      primarySatellites.add(sat)
      addedDirectsThisHub.push(sat)
    }

    // Thin outer layer of 2nd-degree nodes attached to the primary satellites.
    // These become additional small gray (or important if high-degree) nodes
    // on the very outside of each hub's group. Primary structure unchanged.
    const thisOuters = hub === SELF_REG_HUB ? 0 : outerPerPrimarySat;  // 0 for Self Reg; 1 globally (down from 2) to drop nodes/links
    for (const direct of addedDirectsThisHub) {
      if (neighbourhood.size >= globalCap) break
      const outerCands = [...(neighbors.get(direct) ?? [])]
        .filter((n) => n.startsWith("wiki/") && validLinks.has(n) && !neighbourhood.has(n) && !hubs.has(n))
        .sort((a, b) => {
          const d = (degree.get(b) ?? 0) - (degree.get(a) ?? 0)
          return d !== 0 ? d : a.localeCompare(b)
        })
        .slice(0, thisOuters)

      for (const outer of outerCands) {
        if (neighbourhood.size >= globalCap) break
        neighbourhood.add(outer)
        satelliteParent.set(outer, hub)  // point at hub so existing force/positioning code works unchanged
      }
    }
  }

  return { neighbourhood, satelliteParent, primarySatellites }
}

function selectSpineLinks(
  links: SimpleLinkData[],
  neighbourhood: Set<SimpleSlug>,
  hubs: Set<SimpleSlug>,
  degree: Map<SimpleSlug, number>,
  spineDomains: SpineDomain[] = [],
) {
  const hasHubEndpoint = (l: SimpleLinkData) =>
    neighbourhood.has(l.source) &&
    neighbourhood.has(l.target) &&
    (hubs.has(l.source) || hubs.has(l.target))

  const chosen = new Map<string, SimpleLinkData>()
  for (const hub of hubs) {
    const thisIncident = hub === SELF_REG_HUB ? 1 : SPINE_MAX_HUB_LINKS_PER_HUB  // 1 for Self Reg; 3 globally to drop links
    const incident = links
      .filter(hasHubEndpoint)
      .filter((l) => l.source === hub || l.target === hub)
      .sort((a, b) => {
        const otherA = a.source === hub ? a.target : a.source
        const otherB = b.source === hub ? b.target : b.source
        const d = (degree.get(otherB) ?? 0) - (degree.get(otherA) ?? 0)
        return d !== 0 ? d : otherA.localeCompare(otherB)
      })
      .slice(0, thisIncident)

    for (const l of incident) {
      chosen.set(linkKey(l), l)
    }
  }

  const linkScore = (l: SimpleLinkData) =>
    Math.max(degree.get(l.source) ?? 0, degree.get(l.target) ?? 0)

  // Fewer additional high-score peripheral links (sat-to-sat, outer-to-outer, outer-to-primary etc.).
  // These add some density on the outside/perimeter of the constellation while keeping it clean.
  // Goal: outline the edges (top/bottom of the band) rather than spokes from center.
  // This + long perimeter outlines + reduced hub spokes (3 base/1 for Self Reg) + lower caps (15 extras, 4 outline) should give a clearer, less cluttered flat band.
  const intraLinks = links
    .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target) && !chosen.has(linkKey(l)))

  const extra = intraLinks
    .sort((a, b) => linkScore(b) - linkScore(a) || linkKey(a).localeCompare(linkKey(b)))
    .slice(0, SPINE_EXTRA_PERIPHERAL_LINKS)

  for (const l of extra) {
    chosen.set(linkKey(l), l)
  }

  // Perimeter outline links: fewer LONG cross-domain sat/outer links (delta>=3).
  // Purpose: trace the long top and bottom edges of the flat band (Y-band gives the organic slant).
  // This outlines the outside. Combined with lower caps overall, the middle should be less cluttered and the shape flatter.
  // Only long spans to avoid short vertical crosses.
  if (spineDomains.length > 0) {
    const domainOf = (id: SimpleSlug) => domainForNode(id, spineDomains)
    const domainIndexMap = new Map(spineDomains.map((d, i) => [d.id, i]))

    const longCrossSatLinks = intraLinks
      .filter((l) => !chosen.has(linkKey(l)))
      .filter((l) => {
        const d1 = domainOf(l.source)?.id
        const d2 = domainOf(l.target)?.id
        if (!d1 || !d2 || d1 === d2) return false
        const delta = Math.abs(domainIndexMap.get(d1)! - domainIndexMap.get(d2)!)
        return delta >= 3  // only long spans → flat long sides, not short verticals that create diamond
      })

    const outlineLinks = longCrossSatLinks
      .sort((a, b) => linkScore(b) - linkScore(a) || linkKey(a).localeCompare(linkKey(b)))
      .slice(0, SPINE_OUTLINE_PERIMETER_LINKS)

    for (const l of outlineLinks) {
      chosen.set(linkKey(l), l)
    }
  }

  return [...chosen.values()]
    .sort((a, b) => linkScore(b) - linkScore(a) || linkKey(a).localeCompare(linkKey(b)))
    .slice(0, 60)
}

function resolveGraphColor(color: string | undefined) {
  if (color === "black-white") {
    return document.documentElement.getAttribute("saved-theme") === "dark" ? "#ffffff" : "#000000"
  }

  return color
}

function navigateTo(url: URL) {
  if (typeof window.spaNavigate === "function") {
    window.spaNavigate(url)
  } else {
    window.location.href = url.toString()
  }
}

async function renderGraph(graph: HTMLElement, fullSlug: FullSlug) {
  const slug = simplifySlug(fullSlug)
  const visited = getVisited()
  removeAllChildren(graph)

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    removeTags,
    showTags,
    focusOnHover,
    enableRadial,
    filterPrefixes,
    excludeSlugs,
    includeSlugs,
    colorRules,
    nodeBaseRadius,
    nodeLinkRadius,
    nodeMaxRadius,
    flattenWideGraphs,
    nodeRank,
    nodeLimit,
    mobileNodeLimit,
    maxLinksPerNode,
    pinnedSlugs,
    clusterForce,
    spineLayout,
    hubSlugs,
    hubLabels,
    recentDays,
    spineDomains,
    flagSlugs,
    flagLabels,
    flagRadius,
    flagShowLabel,
    seedSlugs,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config

  const hubLabelOverrides = new Map<string, string>(
    Object.entries(hubLabels ?? {}).map(([k, v]) => [simplifySlug(k as FullSlug) as string, v]),
  )

  let simplifiedHubSlugs = new Set(
    (hubSlugs ?? []).map((s) => simplifySlug(s as FullSlug)),
  )

  let hubIdsInUserOrder = [];

  // Lightweight flagging (no spine reorg): labelled, slightly larger landmark nodes.
  const flagLabelOverrides = new Map<string, string>(
    Object.entries(flagLabels ?? {}).map(([k, v]) => [simplifySlug(k as FullSlug) as string, v]),
  )
  const simplifiedFlagSlugs = new Set(
    (flagSlugs ?? []).map((s) => simplifySlug(s as FullSlug)),
  )
  const spineDomainList = spineDomains ?? []
  const recentWindowMs = (recentDays ?? 7) * 24 * 60 * 60 * 1000
  const recentCutoff = Date.now() - recentWindowMs
  const effectivePinned = [
    ...(pinnedSlugs ?? []),
    ...(spineLayout ? (hubSlugs ?? []) : []),
    // Seed nodes (e.g. project anchors) must survive the node-limit trim.
    ...(seedSlugs ?? []),
  ]

  const hiddenSlugs = new Set<SimpleSlug>(
    (excludeSlugs ?? [
      "notes/index",
      "log",
      "README",
      "AGENTS",
      "raw/Source-Index",
      "00-Command-Center/Index",
      "00-Command-Center/Home",
      "00-Command-Center/Open-Questions",
      "00-Command-Center/Changelog",
      "00-Command-Center/Implementation-Plan",
    ]).map((slug) => simplifySlug(slug as FullSlug)),
  )

  const onlySlugs = new Set<SimpleSlug>(
    (includeSlugs ?? []).map((slug) => simplifySlug(slug as FullSlug)),
  )

  const allowedByPrefix = (slug: SimpleSlug) =>
    !hiddenSlugs.has(slug) &&
    (onlySlugs.size === 0 || onlySlugs.has(slug)) &&
    (!filterPrefixes?.length || filterPrefixes.some((prefix) => slug.startsWith(prefix)))

  const data: Map<SimpleSlug, ContentDetails> = new Map(
    Object.entries<ContentDetails>(await fetchData)
      .map(([k, v]) => [simplifySlug(k as FullSlug), v] as [SimpleSlug, ContentDetails])
      .filter(([slug]) => allowedByPrefix(slug)),
  )

  // Robust augmentation: include any pages whose (normalized) "short name" matches one of the
  // hub labels in the cfg (the exact names the user chose for the 6 primaries).
  // For pages with title: in frontmatter use that; for condensed etc without, fall back to last
  // path segment of the slug (the "title" part of the filename, as we listed them).
  // This guarantees they get seeded into the initial simplifiedHubSlugs (before constellation
  // selection), so they are added as hubs and get their satellites, regardless of slug string
  // mismatches in the cfg hubSlugs.
  // Guarantees all 6 are treated as primary (large, colored, labeled).
  if (hubLabels && Object.keys(hubLabels).length > 0) {
    const hubLabelValuesInOrder = Object.values(hubLabels || {});
    hubIdsInUserOrder = [];
    const desiredTitles = new Set(
      hubLabelValuesInOrder.map((l: string) => l.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim())
    );
    for (const desiredLabel of hubLabelValuesInOrder) {
      const normDesired = desiredLabel.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
      // find the first (or any) slug in data whose title or short name matches
      for (const [slug, details] of data) {
        const rawTitle = details.title || slug.split('/').pop().replace(/\.md$/, '');
        const t = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
        if (t === normDesired) {
          hubIdsInUserOrder.push(slug);
          simplifiedHubSlugs.add(slug);
          break;  // one per desired
        }
      }
    }
    console.log('[graph debug] After aug, hubIdsInUserOrder:', hubIdsInUserOrder);
    console.log('[graph debug] After aug, simplifiedHubSlugs size:', simplifiedHubSlugs.size, 'first few:', [...simplifiedHubSlugs].slice(0,5));
  }

  // Parallel robust augmentation for flagSlugs (notes/overview graph landmarks).
  // Goal: make sure the exact 6 from SPINE_HUBS (notesFlagHubs) are always treated as
  // primaries in the notes graph: big size, colored + ring, and permanent text labels.
  // We do the label title match + a strong path-based fallback using the original
  // last segments from the flagSlugs list. We associate clean labels by index.
  if ((flagSlugs ?? []).length > 0) {
    const flagSlugList = (flagSlugs ?? []).map((s) => simplifySlug(s as FullSlug))
    const flagLabelOverrides = new Map<string, string>(
      Object.entries(flagLabels ?? {}).map(([k, v]) => [simplifySlug(k as FullSlug) as string, v]),
    )
    const flagLabelValues = flagLabels ? Object.values(flagLabels) : []

    // 1. Title-based using the provided clean labels (for nice text + matching)
    if (flagLabels && Object.keys(flagLabels).length > 0) {
      flagLabelValues.forEach((desiredLabel, i) => {
        const normDesired = desiredLabel.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim()
        for (const [slug, details] of data) {
          if (simplifiedFlagSlugs.has(slug)) continue
          const rawTitle = details.title || slug.split('/').pop()!.replace(/\.md$/, '')
          const t = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim()
          if (t === normDesired) {
            simplifiedFlagSlugs.add(slug)
            flagLabelOverrides.set(slug, desiredLabel)
            break
          }
        }
      })
    }

    // 2. Strong path-short fallback: for every one of the 6 cfg slugs, take its last
    // segment, normalize, and find any data entry whose pop or title matches it.
    // This guarantees we get all 6 as long as the pages are in the content index.
    flagSlugList.forEach((cfgSlug, i) => {
      const pathShort = (cfgSlug.split('/').pop() || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim()
      if (!pathShort) return
      const cleanLabel = flagLabelValues[i] || ''
      for (const [slug, details] of data) {
        if (simplifiedFlagSlugs.has(slug)) continue
        const dataShort = (slug.split('/').pop() || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim()
        const titleShort = (details.title || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim()
        if (dataShort === pathShort || titleShort === pathShort ||
            dataShort.includes(pathShort) || titleShort.includes(pathShort)) {
          simplifiedFlagSlugs.add(slug)
          if (cleanLabel) flagLabelOverrides.set(slug, cleanLabel)
          break
        }
      }
    })

    // 3. Last resort: any of the original simplified cfg paths that literally exist in data
    flagSlugList.forEach((s, i) => {
      if (data.has(s)) {
        simplifiedFlagSlugs.add(s)
        if (flagLabelValues[i]) flagLabelOverrides.set(s, flagLabelValues[i])
      }
    })

    // 4. CRITICAL for notes graph: the hub aug (now triggered because we also pass hubLabels
    // in the notes cfg) uses the *exact same* label list and title-matching logic that reliably
    // discovers all 6 real data slugs for the home spine.
    // Merge those into the flag set so the notes graph also treats exactly those 6 as primaries
    // (large, colored+ring, permanent text labels).
    if (hubLabels && simplifiedHubSlugs && simplifiedHubSlugs.size > 0) {
      simplifiedHubSlugs.forEach((realSlug) => {
        simplifiedFlagSlugs.add(realSlug)
        // Prefer a clean label from flag overrides if we set one, else copy from hub overrides.
        if (!flagLabelOverrides.has(realSlug) && hubLabelOverrides.has(realSlug)) {
          flagLabelOverrides.set(realSlug, hubLabelOverrides.get(realSlug)!)
        }
      })
    }

    console.log('[graph debug] After flag aug, simplifiedFlagSlugs size:', simplifiedFlagSlugs.size, 'flags:', [...simplifiedFlagSlugs])
  }

  const links: SimpleLinkData[] = []
  const tags: SimpleSlug[] = []
  const validLinks = new Set(data.keys())

  const tweens = new Map<string, TweenNode>()
  for (const [source, details] of data.entries()) {
    const outgoing = details.links ?? []

    for (const dest of outgoing) {
      if (validLinks.has(dest)) {
        links.push({ source: source, target: dest })
      }
    }

    if (showTags) {
      const localTags = details.tags
        .filter((tag) => !removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug))

      tags.push(...localTags.filter((tag) => !tags.includes(tag)))

      for (const tag of localTags) {
        links.push({ source: source, target: tag })
      }
    }
  }

  const width = graph.offsetWidth
  const height = Math.max(graph.offsetHeight, 250)
  const isMobileGraph = window.matchMedia("(max-width: 700px)").matches

  const neighbourhood = new Set<SimpleSlug>()
  let satelliteParent = new Map<SimpleSlug, SimpleSlug>()
  let primarySatellites = new Set<SimpleSlug>()
  const hubAnchorX = new Map<SimpleSlug, number>()
  const hubAnchorY = new Map<SimpleSlug, number>()

  if (spineLayout) {
    const { neighbourhood: constellation, satelliteParent: satParents, primarySatellites: primaries } = selectSpineConstellation(
      simplifiedHubSlugs,
      links,
      validLinks,
      isMobileGraph,
    )
    satelliteParent = satParents
    constellation.forEach((id) => neighbourhood.add(id))
    primarySatellites = primaries || new Set<SimpleSlug>()
    // primarySatellites will be used by zoomToFitSpine to keep the view size based on core structure only
    // (hubs + direct primary sats). Extra outer nodes won't cause zoom-out.
    console.log('[graph debug] After constellation, neighbourhood size:', neighbourhood.size, 'hubs in it:', [...simplifiedHubSlugs].filter(h => neighbourhood.has(h)));

    const domainIndex = new Map<string, number>()
    spineDomainList.forEach((d, i) => domainIndex.set(d.id, i))
    let hubOrdinal = 0
    for (const hub of hubIdsInUserOrder) {
      if (!neighbourhood.has(hub)) continue
      // Force horizontal spread for the 6 hubs using their order in the list (0-5),
      // so they appear in a horizontal band across the width (matching the original constellation reference).
      // This prevents vertical stacking when multiple hubs land in the same domain column.
      // Satellites are pulled to their hub's specific X position via the force.
      // Y uses the SPINE_Y_BAND offsets in hub list order for the flat band with organic variance.
      hubAnchorX.set(hub, domainTargetX(hubOrdinal, 6, width))
      hubAnchorY.set(hub, SPINE_Y_BAND[hubOrdinal % SPINE_Y_BAND.length] * height)
      hubOrdinal++
    }
  } else {
    // Seed the BFS from explicit slugs when given (e.g. project anchors), otherwise
    // from the current page. With depth: 1 this selects the seeds + their neighbors.
    const seeds: SimpleSlug[] =
      seedSlugs && seedSlugs.length
        ? seedSlugs.map((s) => simplifySlug(s as FullSlug)).filter((s) => validLinks.has(s))
        : [slug]
    const wl: (SimpleSlug | "__SENTINEL")[] = [...seeds, "__SENTINEL"]
    if (depth >= 0) {
      while (depth >= 0 && wl.length > 0) {
        const cur = wl.shift()!
        if (cur === "__SENTINEL") {
          depth--
          wl.push("__SENTINEL")
        } else {
          neighbourhood.add(cur)
          const outgoing = links.filter((l) => l.source === cur)
          const incoming = links.filter((l) => l.target === cur)
          wl.push(...outgoing.map((l) => l.target), ...incoming.map((l) => l.source))
        }
      }
    } else {
      validLinks.forEach((id) => neighbourhood.add(id))
      if (showTags) tags.forEach((tag) => neighbourhood.add(tag))
    }
  }

  const effectiveNodeLimit = isMobileGraph ? (mobileNodeLimit ?? nodeLimit) : nodeLimit

  if (
    !spineLayout &&
    effectiveNodeLimit &&
    effectiveNodeLimit > 0 &&
    neighbourhood.size > effectiveNodeLimit
  ) {
    const linkCounts = new Map<SimpleSlug, number>()
    const wordCounts = new Map<SimpleSlug, number>()

    for (const link of links) {
      linkCounts.set(link.source, (linkCounts.get(link.source) ?? 0) + 1)
      linkCounts.set(link.target, (linkCounts.get(link.target) ?? 0) + 1)
    }

    const wordCount = (id: SimpleSlug) => {
      if (wordCounts.has(id)) return wordCounts.get(id)!
      const content = data.get(id)?.content ?? ""
      const count = content.trim() ? content.trim().split(/\s+/).length : 0
      wordCounts.set(id, count)
      return count
    }

    let degreeWeight = 120
    if (!spineLayout && nodeRank === "content-heavy") {
      degreeWeight = 25  // reduced for notes to create the desired mix: high-content notes still prioritized (many are gray low-deg), but low-degree long notes rank much higher instead of being crushed by the degree term
    }

    const nodeScore = (id: SimpleSlug) => {
      const degree = linkCounts.get(id) ?? 0
      const contentWords = wordCount(id)

      switch (nodeRank) {
        case "content":
          return contentWords
        case "content-heavy":
          return contentWords + degree * degreeWeight
        case "degree":
        default:
          return degree
      }
    }

    // For notes graph: smaller priority core (50%) by the (tuned) rank → leaves more room in the 200 for the explicit lowest-deg gray fill below.
    // Combined with lower degreeWeight above, this gives a nice mix of substantive nodes + lots of visible gray bottom tier.
    const priorityCount = Math.floor(effectiveNodeLimit * 0.5)
    const keptNodes = new Set(
      [...neighbourhood]
        .sort((a, b) => {
          const scoreDelta = nodeScore(b) - nodeScore(a)
          if (scoreDelta !== 0) return scoreDelta
          return (data.get(a)?.title ?? a).localeCompare(data.get(b)?.title ?? b)
        })
        .slice(0, priorityCount),
    )

    // Always keep explicitly pinned nodes (e.g. Start-here + recent notes).
    for (const p of effectivePinned) {
      const ps = simplifySlug(p as FullSlug)
      if (neighbourhood.has(ps)) keptNodes.add(ps)
    }

    if (neighbourhood.has(slug)) keptNodes.add(slug)

    // Force the configured flag/primary nodes (the 6 landmarks from notesFlagHubs) so the top tier
    // (large colored with ring) of the 3-tier system is always present, matching the home spine behavior.
    for (const f of simplifiedFlagSlugs) {
      if (neighbourhood.has(f)) keptNodes.add(f)
    }

    // Fill remaining slots (if any) with lowest-degree nodes from the remainder.
    // This ensures plenty of gray bottom-tier nodes are visible (user request: "don't see too many of the gray nodes").
    if (!spineLayout && keptNodes.size < effectiveNodeLimit) {
      const remaining = [...neighbourhood].filter((id) => !keptNodes.has(id))
      remaining.sort((a, b) => {
        const da = linkCounts.get(a) ?? 0
        const db = linkCounts.get(b) ?? 0
        if (da !== db) return da - db  // lowest degree first → gray bottom tier
        return (data.get(a)?.title ?? a).localeCompare(data.get(b)?.title ?? b)
      })
      const needed = effectiveNodeLimit - keptNodes.size
      for (let i = 0; i < needed && i < remaining.length; i++) {
        keptNodes.add(remaining[i])
      }
    }

    neighbourhood.clear()
    keptNodes.forEach((id) => neighbourhood.add(id))
  }

  const nodes = [...neighbourhood].map((url) => {
    const text = url.startsWith("tags/") ? "#" + url.substring(5) : (data.get(url)?.title ?? url)
    return {
      id: url,
      text,
      tags: data.get(url)?.tags ?? [],
    }
  })
  const nodeById = new Map(nodes.map((n) => [n.id, n]))
  console.log('[graph debug] nodes count after build:', nodes.length);

  let graphLinks: LinkData[]
  if (spineLayout) {
    const { degree } = buildAdjacency(links)
    graphLinks = selectSpineLinks(links, neighbourhood, simplifiedHubSlugs, degree, spineDomainList)
      .filter((l) => nodeById.has(l.source) && nodeById.has(l.target))
      .map((l) => ({
        source: nodeById.get(l.source)!,
        target: nodeById.get(l.target)!,
      }))
  } else {
    let rawGraphLinks = links
      .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
    if (maxLinksPerNode && maxLinksPerNode > 0) {
      // Cap links per node (degree) -- main lever for reducing sheer # of links.
      // (Keeps large #nodes, doesn't bloat radii.) Top-K by other deg. Prunes sim+render.
      const tempDeg = new Map<SimpleSlug, number>()
      for (const l of rawGraphLinks) {
        tempDeg.set(l.source, (tempDeg.get(l.source) || 0) + 1)
        tempDeg.set(l.target, (tempDeg.get(l.target) || 0) + 1)
      }
      const nodeInc = new Map<SimpleSlug, SimpleLinkData[]>()
      for (const l of rawGraphLinks) {
        if (!nodeInc.has(l.source)) nodeInc.set(l.source, [])
        nodeInc.get(l.source)!.push(l)
        if (!nodeInc.has(l.target)) nodeInc.set(l.target, [])
        nodeInc.get(l.target)!.push(l)
      }
      const selected = new Set<string>()
      for (const [id, incs] of nodeInc) {
        incs.sort((a, b) => {
          const oa = a.source === id ? a.target : a.source
          const ob = b.source === id ? b.target : b.source
          return (tempDeg.get(ob) || 0) - (tempDeg.get(oa) || 0)
        })
        for (let i = 0; i < maxLinksPerNode && i < incs.length; i++) {
          selected.add(linkKey(incs[i]))
        }
      }
      rawGraphLinks = rawGraphLinks.filter((l) => selected.has(linkKey(l)))
    }
    graphLinks = rawGraphLinks.map((l) => ({
      source: nodeById.get(l.source)!,
      target: nodeById.get(l.target)!,
    }))
  }

  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: graphLinks,
  }
  console.log('[graph debug] graphData.nodes count:', graphData.nodes.length, 'is spine:', spineLayout);

  // Degree helper defined early so nodeRadius (called during force simulation setup
  // and collide) can use it without TDZ errors. Used for 3-tier classification.
  const getDegree = (id: SimpleSlug) =>
    graphData.links.filter((l) => l.source.id === id || l.target.id === id).length

  // we virtualize the simulation and use pixi to actually render it
  const simulation: Simulation<NodeData, LinkData> = forceSimulation<NodeData>(graphData.nodes)
    .alphaDecay(0.05)
    .velocityDecay(0.55)

  if (spineLayout && spineDomainList.length > 0) {
    const domainIndex = new Map<string, number>()
    spineDomainList.forEach((d, i) => domainIndex.set(d.id, i))

    simulation
      .force("charge", forceManyBody().strength(-250))
      .force("center", forceCenter().strength(0.02))
      .force("link", forceLink(graphData.links).distance(60))
      .force(
        "collide",
        forceCollide<NodeData>((n) => nodeRadius(n) + 14).iterations(3),
      )
      .force(
        "x",
        forceX<NodeData>((d) => {
          const parent = satelliteParent.get(d.id)
          if (parent) return hubAnchorX.get(parent) ?? 0
          const domain = domainForNode(d.id, spineDomainList)
          const idx = domain ? (domainIndex.get(domain.id) ?? spineDomainList.length - 1) : 0
          return domainTargetX(idx, spineDomainList.length, width)
        }).strength((d) =>
          satelliteParent.has(d.id) ? 0.3 : simplifiedHubSlugs.has(d.id) ? 0.9 : 0.15,
        ),
      )
      .force(
        "y",
        forceY<NodeData>((d) => {
          // Constellation mode: hubs have almost no vertical pinning (target 0 with low strength).
          // Satellites (primary + outer) are pulled toward their hub's Y but loosely,
          // so each hub forms a nice local 2D cloud of satellites around it.
          if (simplifiedHubSlugs.has(d.id)) return hubAnchorY.get(d.id) ?? 0
          const parent = satelliteParent.get(d.id)
          if (parent) return hubAnchorY.get(parent) ?? 0
          return 0
        }).strength((d) =>
          // Strong Y lock on hubs (0.85) to their exact SPINE_Y_BAND positions.
          // This keeps the overall band flat like the reference picture (small total core height).
          // Primary satellites: stronger Y (0.22) so the main "visible" cluster per hub hugs the band tightly → flatter.
          // Outers: very loose Y (0.05) — these are the extra small nodes on the outside, can spread a bit in 2D
          // without affecting the core band height used for zoom/fit.
          simplifiedHubSlugs.has(d.id) ? 0.85 :
            primarySatellites.has(d.id) ? 0.22 :
            satelliteParent.has(d.id) ? 0.05 : 0.04,
        ),
      )
  } else {
    simulation
      .force("charge", forceManyBody().strength(-100 * repelForce))
      .force("center", forceCenter().strength(centerForce))
      .force("link", forceLink(graphData.links).distance(linkDistance))
      .force("collide", forceCollide<NodeData>((n) => nodeRadius(n)).iterations(3))
      // Stronger vertical centering for notes graph to make it much flatter overall
      // (top/bottom nodes no longer clip outside the window).
      .force("flatY", forceY(0).strength(0.22))
  }

  if (!spineLayout && enableRadial) {
    const aspectRatio = width / height
    if (flattenWideGraphs !== false && aspectRatio > 1.4) {
      // Wide canvas: swap circular radial for an elliptical pull so nodes
      // fill the rectangle instead of clustering inside an inscribed circle.
      // Weaker x-pull lets nodes spread horizontally; stronger y-pull keeps
      // them within the shorter vertical dimension.
      simulation
        .force("x", forceX(0).strength(0.038))
        .force("y", forceY(0).strength(0.043 * aspectRatio))
    } else {
      // Square-ish canvas (sidebar graphs): keep the original circular layout.
      const radius = (Math.min(width, height) / 2) * 0.8
      simulation.force("radial", forceRadial(radius).strength(0.2))
    }
  }

  // Cluster nodes by category (colorRules prefix) into lobes, so the graph reads
  // as a structure instead of a blob. Each category gets an anchor on a ring.
  if (!spineLayout && clusterForce && clusterForce > 0) {
    const ruleList = colorRules ?? []
    const numCats = ruleList.length + 1
    const clusterRadius = Math.min(width, height) * 0.42
    const anchorFor = (id: string) => {
      let idx = ruleList.findIndex((r) => id.startsWith(r.prefix))
      if (idx === -1) idx = ruleList.length
      const angle = (idx / numCats) * 2 * Math.PI
      return { x: Math.cos(angle) * clusterRadius, y: Math.sin(angle) * clusterRadius }
    }
    simulation
      .force("clusterX", forceX<NodeData>((d) => anchorFor(d.id).x).strength(clusterForce))
      // Much weaker clusterY than clusterX to make the notes graph significantly flatter
      // (domain lobes spread mostly horizontally, less vertical height so nodes fit in window).
      .force("clusterY", forceY<NodeData>((d) => anchorFor(d.id).y).strength(clusterForce * 0.52))
  }

  // Pre-settle the layout synchronously and halt the auto-ticker so the graph
  // appears locked in place on load — no entrance wobble. Dragging a node still
  // re-energises the simulation (alphaTarget(1).restart() in the drag handler).
  simulation.stop()
  const settleTicks = Math.ceil(
    Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()),
  )
  simulation.tick(settleTicks)

  // For the notes/overview graph (non-spine), do a very light final vertical squash
  // after the main settle. This reduces the total height of the point cloud a little
  // bit more so the top and bottom nodes are more likely to fit inside the initial view
  // without clipping, while mostly preserving the 2D layout and cluster relationships.
  if (!spineLayout) {
    const yCompress = 0.78  // stronger squash for much flatter notes graph
    for (const node of graphData.nodes) {
      if (node.y != null) node.y *= yCompress
    }
    // Extra ticks after stronger squash to re-settle.
    simulation.tick(10)
  }

  if (spineLayout && spineDomainList.length > 0) {
    for (const n of graphData.nodes) {
      if (simplifiedHubSlugs.has(n.id)) {
        n.fx = hubAnchorX.get(n.id) ?? n.fx
        // Explicitly pin fy to the exact SPINE_Y_BAND position after settle.
        // This is what keeps the overall structure flat (same total height as the reference image)
        // instead of letting hubs drift vertically and make it tall.
        n.fy = hubAnchorY.get(n.id) ?? n.fy
      }
    }
    simulation.tick(Math.ceil(settleTicks / 4))
  }

  // precompute style prop strings as pixi doesn't support css variables
  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
    "--codeFont",
  ] as const
  const computedStyleMap = cssVars.reduce(
    (acc, key) => {
      acc[key] = getComputedStyle(document.documentElement).getPropertyValue(key)
      return acc
    },
    {} as Record<(typeof cssVars)[number], string>,
  )

  // calculate color
  const color = (d: NodeData) => {
    // 3-tier system (spine and notes/overview):
    // - primary (hubs or flagged): domain color (or secondary if current)
    // - important (high deg non-primary): domain color (medium visual weight)
    // - sparse: --gray (receded, less blob)
    const isPrimary = spineLayout
      ? simplifiedHubSlugs.has(d.id)
      : simplifiedFlagSlugs.has(d.id)
    if (!isPrimary && d.id !== slug) {
      if (getDegree(d.id) < IMPORTANT_DEGREE_THRESHOLD) {
        return computedStyleMap["--gray"]
      }
      // else fall through to domain color for important tier
    }
    const configuredColor = colorRules?.find((rule) => d.id.startsWith(rule.prefix))?.color
    const resolvedColor = resolveGraphColor(configuredColor)
    const isCurrent = d.id === slug
    if (isCurrent) {
      return computedStyleMap["--secondary"]
    } else if (resolvedColor && !d.id.startsWith("tags/")) {
      return resolvedColor ?? FALLBACK_NODE_COLOR
    } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
      return computedStyleMap["--tertiary"]
    } else {
      return computedStyleMap["--gray"]
    }
  }

  function nodeRadius(d: NodeData) {
    const isPrimary = spineLayout
      ? simplifiedHubSlugs.has(d.id)
      : simplifiedFlagSlugs.has(d.id)
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length
    const base = nodeBaseRadius ?? 2
    const linkScale = nodeLinkRadius ?? 1
    const max = nodeMaxRadius ?? 8
    const computed = Math.min(max, base + Math.sqrt(numLinks) * linkScale)

    if (isPrimary) {
      // Same top tier size on both graphs (home hubs and notes flags)
      return SPINE_HUB_RADIUS
    }

    if (spineLayout) {
      const deg = getDegree(d.id)
      if (deg >= IMPORTANT_DEGREE_THRESHOLD) {
        return SPINE_IMPORTANT_RADIUS
      }
      if (satelliteParent.has(d.id)) {
        if (!primarySatellites.has(d.id)) {
          return SPINE_OUTER_SATELLITE_RADIUS
        }
        return SPINE_SATELLITE_RADIUS
      }
    }

    const deg = getDegree(d.id)
    if (deg >= IMPORTANT_DEGREE_THRESHOLD) {
      // Same important tier size on both graphs for high-deg non-primaries
      return SPINE_IMPORTANT_RADIUS
    }

    // Low-deg non-primary: small (notes cfg keeps these very small via base 1.5; home uses outer sat radii above)
    return computed
  }

  function isRecentlyUpdated(id: SimpleSlug): boolean {
    const raw = data.get(id)?.date
    if (!raw) return false
    const ts = new Date(raw).getTime()
    return !Number.isNaN(ts) && ts >= recentCutoff
  }

  // Fewer connections => more transparent, so well-linked hubs stand out and
  // sparse/orphan notes recede. Adds depth/variety to the graph.
  function nodeOpacity(d: NodeData) {
    if (simplifiedFlagSlugs.has(d.id)) return 1
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length
    return Math.max(0.35, Math.min(1, 0.4 + Math.sqrt(numLinks) * 0.2))
  }

  let hoveredNodeId: string | null = null
  let hoveredNeighbours: Set<string> = new Set()
  let activeDomainFilter: string | null = null
  let currentZoom = 1 / scale
  const linkRenderData: LinkRenderData[] = []
  const nodeRenderData: NodeRenderData[] = []
  function updateHoverInfo(newHoveredId: string | null) {
    hoveredNodeId = newHoveredId

    if (newHoveredId === null) {
      hoveredNeighbours = new Set()
      for (const n of nodeRenderData) {
        n.active = false
      }

      for (const l of linkRenderData) {
        l.active = false
      }
    } else {
      hoveredNeighbours = new Set()
      for (const l of linkRenderData) {
        const linkData = l.simulationData
        if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
          hoveredNeighbours.add(linkData.source.id)
          hoveredNeighbours.add(linkData.target.id)
        }

        l.active = linkData.source.id === newHoveredId || linkData.target.id === newHoveredId
      }

      for (const n of nodeRenderData) {
        n.active = hoveredNeighbours.has(n.simulationData.id)
      }
    }
  }

  let dragStartTime = 0
  let dragging = false

  function renderLinks() {
    tweens.get("link")?.stop()
    const tweenGroup = new TweenGroup()

    for (const l of linkRenderData) {
      // Default (resting) alpha for spine links is the recessed SPINE_LINK_ALPHA (0.26)
      // so normal state stays faded/recessed. Hover and domain-filter override it.
      let alpha = spineLayout ? SPINE_LINK_ALPHA : 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      // with full alpha and the rest with default alpha
      if (hoveredNodeId) {
        alpha = l.active ? 1 : 0.2
      } else if (spineLayout && activeDomainFilter) {
        const sourceDomain = domainForNode(l.simulationData.source.id, spineDomainList)
        const targetDomain = domainForNode(l.simulationData.target.id, spineDomainList)
        const inFilter =
          sourceDomain?.id === activeDomainFilter || targetDomain?.id === activeDomainFilter
        alpha = inFilter ? 1 : 0.12
      }

      l.color = l.active
        ? computedStyleMap["--darkgray"]
        : spineLayout
          ? computedStyleMap["--gray"]
          : computedStyleMap["--lightgray"]
      tweenGroup.add(new Tweened<LinkRenderData>(l).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("link", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderLabels() {
    tweens.get("label")?.stop()
    const tweenGroup = new TweenGroup()

    const defaultScale = 1 / scale
    const activeScale = defaultScale * 1.1
    for (const n of nodeRenderData) {
      const nodeId = n.simulationData.id

      if (hoveredNodeId === nodeId) {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: 1,
              scale: { x: activeScale, y: activeScale },
            },
            100,
          ),
        )
      } else {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: n.label.alpha,
              scale: { x: defaultScale, y: defaultScale },
            },
            100,
          ),
        )
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("label", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function filteredAlpha(n: NodeRenderData, base: number) {
    if (!spineLayout || !activeDomainFilter) return base
    const domain = domainForNode(n.simulationData.id, spineDomainList)
    if (domain?.id === activeDomainFilter) return base
    return 0.12 * base
  }

  function renderNodes() {
    tweens.get("hover")?.stop()

    const tweenGroup = new TweenGroup()
    for (const n of nodeRenderData) {
      // Resting opacity reflects connection count (set per node above).
      let alpha = filteredAlpha(n, n.baseAlpha)

      // if we are hovering over a node, we want to highlight the immediate neighbours
      if (hoveredNodeId !== null && focusOnHover) {
        alpha = n.active ? 1 : 0.2 * filteredAlpha(n, n.baseAlpha)
      }

      tweenGroup.add(new Tweened<Graphics>(n.gfx, tweenGroup).to({ alpha }, 200))
      if (n.pulseRing) {
        n.pulseRing.alpha = alpha
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("hover", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderPixiFromD3() {
    renderNodes()
    renderLinks()
    renderLabels()
  }

  tweens.forEach((tween) => tween.stop())
  tweens.clear()

  const app = new Application()
  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgpu",
    resolution: window.devicePixelRatio,
    eventMode: "static",
  })
  graph.appendChild(app.canvas)

  const stage = app.stage
  stage.interactive = false

  const labelsContainer = new Container<Text>({ zIndex: 3, isRenderGroup: true })
  const nodesContainer = new Container<Graphics>({ zIndex: 2, isRenderGroup: true })
  const linkContainer = new Container<Graphics>({ zIndex: 1, isRenderGroup: true })
  stage.addChild(nodesContainer, labelsContainer, linkContainer)

  // Order nodes so non-hubs (satellites + importants) are added first;
  // hubs added last => they paint on top (highest within nodes z-layer).
  const orderedNodes = [
    ...graphData.nodes.filter((n) => !simplifiedHubSlugs.has(n.id)),
    ...graphData.nodes.filter((n) => simplifiedHubSlugs.has(n.id)),
  ]

  const isDark = document.documentElement.getAttribute("saved-theme") === "dark"
  const nodeBorderColor = isDark ? "#ffffff" : "#000000"

  for (const n of orderedNodes) {
    const nodeId = n.id
    const isHub = simplifiedHubSlugs.has(nodeId)
    const isFlag = simplifiedFlagSlugs.has(nodeId)
    const nodeDomain = spineLayout ? domainForNode(nodeId, spineDomainList) : undefined

    const labelText =
      isHub && spineLayout && hubLabelOverrides.has(nodeId)
        ? hubLabelOverrides.get(nodeId)!
        : isFlag && flagLabelOverrides.has(nodeId)
          ? flagLabelOverrides.get(nodeId)!
          : n.text

    const isSpineHub = isHub && spineLayout
    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: labelText,
      alpha: isSpineHub || (isFlag && flagShowLabel) ? 1 : 0,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: isSpineHub ? 10 : isFlag ? fontSize * 16.5 : fontSize * 15,
        fill: computedStyleMap["--dark"],
        // Paper-colored halo/outline behind hub labels so they stay legible
        // over links/nodes on the warm cream background (and dark surface).
        ...(isSpineHub
          ? { stroke: { color: computedStyleMap["--light"], width: 3 } }
          : {}),
        fontFamily:
          isSpineHub
            ? computedStyleMap["--codeFont"]
            : computedStyleMap["--bodyFont"],
      },
      resolution: window.devicePixelRatio * 4,
    })
    label.scale.set(1 / scale)

    let oldLabelOpacity = 0
    const isTagNode = nodeId.startsWith("tags/")
    const fillCol = isTagNode ? computedStyleMap["--light"] : color(n)
    const gfx = new Graphics({
      interactive: true,
      label: nodeId,
      eventMode: "static",
      hitArea: new Circle(0, 0, nodeRadius(n)),
      cursor: "pointer",
    })
      .circle(0, 0, nodeRadius(n))
      .fill({ color: fillCol })
      .on("pointerover", (e) => {
        updateHoverInfo(e.target.label)
        oldLabelOpacity = label.alpha
        if (!dragging) {
          renderPixiFromD3()
        }
      })
      .on("pointerleave", () => {
        updateHoverInfo(null)
        label.alpha = oldLabelOpacity
        if (!dragging) {
          renderPixiFromD3()
        }
      })

    if (isTagNode) {
      gfx.stroke({ width: 2, color: computedStyleMap["--tertiary"] })
    }

    // Flagged landmark: a bright ring in the node's own (lightened) hue so it reads
    // as an anchor without a permanent label.
    if (isFlag) {
      gfx.stroke({ width: 2.5, color: mixColor(color(n), 0.55) })
    }

    // Tiny solid border on the colored (non-gray) nodes — the primary and important tiers.
    // Black in light mode, white in dark mode. Gray bottom-tier nodes stay plain for recession.
    const grayCol = computedStyleMap["--gray"]
    if (fillCol !== grayCol) {
      gfx.stroke({ width: 0.5, color: nodeBorderColor })
    }

    gfx.alpha = nodeOpacity(n)

    nodesContainer.addChild(gfx)
    labelsContainer.addChild(label)

    let pulseRing: Graphics | undefined
    if (spineLayout && isRecentlyUpdated(nodeId)) {
      pulseRing = new Graphics({ interactive: false, eventMode: "none" })
      pulseRing
        .circle(0, 0, nodeRadius(n) + 5)
        .stroke({
          width: 1,
          color: computedStyleMap["--secondary"],
          alpha: 0.5,
        })
      nodesContainer.addChild(pulseRing)
    }

    const nodeRenderDatum: NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      pulseRing,
      color: color(n),
      alpha: 1,
      baseAlpha: nodeOpacity(n),
      active: false,
    }

    nodeRenderData.push(nodeRenderDatum)
  }

  for (const l of graphData.links) {
    const gfx = new Graphics({ interactive: false, eventMode: "none" })
    linkContainer.addChild(gfx)

    const linkRenderDatum: LinkRenderData = {
      simulationData: l,
      gfx,
      color: spineLayout ? computedStyleMap["--gray"] : computedStyleMap["--lightgray"],
      alpha: spineLayout ? SPINE_LINK_ALPHA : 1,
      active: false,
    }

    linkRenderData.push(linkRenderDatum)
  }

  let currentTransform = zoomIdentity
  if (enableDrag) {
    select<HTMLCanvasElement, NodeData | undefined>(app.canvas).call(
      drag<HTMLCanvasElement, NodeData | undefined>()
        .container(() => app.canvas)
        .subject(() => graphData.nodes.find((n) => n.id === hoveredNodeId))
        .on("start", function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(1).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
          event.subject.__initialDragPos = {
            x: event.subject.x,
            y: event.subject.y,
            fx: event.subject.fx,
            fy: event.subject.fy,
          }
          dragStartTime = Date.now()
          dragging = true
        })
        .on("drag", function dragged(event) {
          const initPos = event.subject.__initialDragPos
          event.subject.fx = initPos.x + (event.x - initPos.x) / currentTransform.k
          event.subject.fy = initPos.y + (event.y - initPos.y) / currentTransform.k
        })
        .on("end", function dragended(event) {
          if (!event.active) simulation.alphaTarget(0)
          if (spineLayout && simplifiedHubSlugs.has(event.subject.id)) {
            event.subject.fx = hubAnchorX.get(event.subject.id) ?? event.subject.fx
            // Keep fy pinned to the band so dragging a hub doesn't break the flat shape.
            event.subject.fy = hubAnchorY.get(event.subject.id) ?? event.subject.fy
          } else {
            event.subject.fx = null
            event.subject.fy = null
          }
          dragging = false

          // if the time between mousedown and mouseup is short, we consider it a click
          if (Date.now() - dragStartTime < 500) {
            const node = graphData.nodes.find((n) => n.id === event.subject.id) as NodeData
            const targ = resolveRelative(fullSlug, node.id)
            navigateTo(new URL(targ, window.location.toString()))
          }
        }),
    )
  } else {
    for (const node of nodeRenderData) {
      node.gfx.on("click", () => {
        const targ = resolveRelative(fullSlug, node.simulationData.id)
        navigateTo(new URL(targ, window.location.toString()))
      })
    }
  }

  const zoomBehavior = zoom<HTMLCanvasElement, NodeData>()
    .extent([
      [0, 0],
      [width, height],
    ])
    .scaleExtent([0.25, 4])
    // Two-finger swipe scrolls the page; the graph zooms only on pinch
    // (trackpad pinch arrives as wheel + ctrlKey) or touch-pinch. Drag still pans.
    .filter((event) => {
      if (event.type === "wheel") return event.ctrlKey
      return !event.button
    })
    .on("zoom", ({ transform }) => {
      currentTransform = transform
      currentZoom = transform.k
      stage.scale.set(transform.k, transform.k)
      stage.position.set(transform.x, transform.y)

      const zoomScale = transform.k * opacityScale
      let scaleOpacity = Math.max((zoomScale - 1) / 3.75, 0)
      if (spineLayout) {
        // Satellites stay unlabeled at rest — zoom-to-fit must not fade them in.
        scaleOpacity = currentZoom > 1.4 ? 1 : 0
      }
      const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)

      for (const n of nodeRenderData) {
        const isHub = simplifiedHubSlugs.has(n.simulationData.id)
        const isFlag = simplifiedFlagSlugs.has(n.simulationData.id)
        if (activeNodes.includes(n.label)) continue
        if ((isHub && spineLayout) || (isFlag && flagShowLabel)) {
          n.label.alpha = 1
        } else if (spineLayout) {
          // Spine sats/outers: controlled fade (the scaleOpacity here is already overridden to 0/1 based on >1.4)
          n.label.alpha = scaleOpacity
        } else {
          // Notes / overview graph: non-flag (non-primary) labels stay hidden on zoom.
          // This prevents "wall of text" — only the select flagged landmarks (5-6 primaries) show persistent names.
          // Hover still boosts the hovered node + its immediate neighbors' labels via renderLabels + pointer handlers.
          // "select number ... 5-6 out of the whole graph. or more. depending on spacing" satisfied by the flag set + hover for local detail.
          n.label.alpha = 0
        }
      }
    })

  function zoomToFitSpine() {
    if (!spineLayout || graphData.nodes.length === 0) return
    const padding = SPINE_ZOOM_PADDING
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for (const n of graphData.nodes) {
      // Only fit to the "core" structure (hubs + primary direct satellites).
      // This keeps the original visual size/zoom level of the main spine even
      // when we add extra outer satellite nodes for more detail on the edges.
      const isCore = simplifiedHubSlugs.has(n.id) || primarySatellites.has(n.id)
      if (!isCore) continue

      const r = nodeRadius(n)
      const px = (n.x ?? 0) + width / 2
      const py = (n.y ?? 0) + height / 2
      minX = Math.min(minX, px - r)
      maxX = Math.max(maxX, px + r)
      minY = Math.min(minY, py - r)
      maxY = Math.max(maxY, py + r)
    }
    const graphWidth = maxX - minX
    const graphHeight = maxY - minY
    if (graphWidth <= 0 || graphHeight <= 0) return
    let fitScale = Math.min(
      (width - padding * 2) / graphWidth,
      (height - padding * 2) / graphHeight,
      SPINE_MAX_FIT_SCALE,
    )
    fitScale *= SPINE_ZOOM_IN_FACTOR  // extra zoom-in on the core band for more detail (tunable)
    const midX = (minX + maxX) / 2
    const midY = (minY + maxY) / 2
    const transform = zoomIdentity
      .translate(width / 2, height / 2)
      .scale(fitScale)
      .translate(-midX, -midY)
    currentTransform = transform
    currentZoom = transform.k
    stage.scale.set(transform.k, transform.k)
    stage.position.set(transform.x, transform.y)
    if (enableZoom) {
      select<HTMLCanvasElement, NodeData>(app.canvas).call(zoomBehavior.transform, transform)
    }
  }

  if (enableZoom) {
    select<HTMLCanvasElement, NodeData>(app.canvas).call(zoomBehavior)
  }

  if (spineLayout) {
    zoomToFitSpine()
    // Re-fit once the simulation settles — the first fit runs against pre-settle positions.
    simulation.on("end", () => zoomToFitSpine())
  }

  let stopAnimation = false
  function animate(time: number) {
    if (stopAnimation) return
    for (const n of nodeRenderData) {
      const { x, y } = n.simulationData
      if (!x || !y) continue
      const px = x + width / 2
      const py = y + height / 2
      n.gfx.position.set(px, py)
      if (n.label) {
        n.label.position.set(px, py)
      }
      if (n.pulseRing) {
        n.pulseRing.position.set(px, py)
      }
    }

    for (const l of linkRenderData) {
      const linkData = l.simulationData
      l.gfx.clear()
      l.gfx.moveTo(linkData.source.x! + width / 2, linkData.source.y! + height / 2)
      l.gfx
        .lineTo(linkData.target.x! + width / 2, linkData.target.y! + height / 2)
        .stroke({ alpha: l.alpha, width: 1, color: l.color })
    }

    tweens.forEach((t) => t.update(time))
    app.renderer.render(stage)
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)

  if (spineLayout) {
    const host = graph.closest(".home-graph-embed, .graph")?.parentElement ?? graph.parentElement
    const chips = host?.querySelectorAll<HTMLElement>("[data-domain-id]") ?? []
    const chipCleanups: (() => void)[] = []
    chips.forEach((chip) => {
      const onClick = () => {
        const id = chip.getAttribute("data-domain-id")
        activeDomainFilter = activeDomainFilter === id ? null : id
        chips.forEach((c) => c.classList.toggle("active", c.getAttribute("data-domain-id") === activeDomainFilter))
        renderPixiFromD3()
      }
      chip.addEventListener("click", onClick)
      chipCleanups.push(() => chip.removeEventListener("click", onClick))
    })

    return () => {
      stopAnimation = true
      chipCleanups.forEach((fn) => fn())
      app.destroy()
    }
  }

  return () => {
    stopAnimation = true
    app.destroy()
  }
}

let localGraphCleanups: (() => void)[] = []
let globalGraphCleanups: (() => void)[] = []

function cleanupLocalGraphs() {
  for (const cleanup of localGraphCleanups) {
    cleanup()
  }
  localGraphCleanups = []
}

function cleanupGlobalGraphs() {
  for (const cleanup of globalGraphCleanups) {
    cleanup()
  }
  globalGraphCleanups = []
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url
  addToVisited(simplifySlug(slug))

  async function renderLocalGraph() {
    cleanupLocalGraphs()
    const localGraphContainers = document.getElementsByClassName("graph-container")
    for (const container of localGraphContainers) {
      localGraphCleanups.push(await renderGraph(container as HTMLElement, slug))
    }
  }

  const deferGraphRender = window.requestIdleCallback ?? ((cb) => window.setTimeout(cb, 1))
  deferGraphRender(() => void renderLocalGraph())
  const handleThemeChange = () => {
    void renderLocalGraph()
  }

  document.addEventListener("themechange", handleThemeChange)
  window.addCleanup(() => {
    document.removeEventListener("themechange", handleThemeChange)
  })

  const containers = [...document.getElementsByClassName("global-graph-outer")] as HTMLElement[]
  async function renderGlobalGraph() {
    const slug = getFullSlug(window)
    for (const container of containers) {
      container.classList.add("active")
      const sidebar = container.closest(".sidebar") as HTMLElement
      if (sidebar) {
        sidebar.style.zIndex = "1"
      }

      const graphContainer = container.querySelector(".global-graph-container") as HTMLElement
      registerEscapeHandler(container, hideGlobalGraph)
      if (graphContainer) {
        globalGraphCleanups.push(await renderGraph(graphContainer, slug))
      }
    }
  }

  function hideGlobalGraph() {
    cleanupGlobalGraphs()
    for (const container of containers) {
      container.classList.remove("active")
      const sidebar = container.closest(".sidebar") as HTMLElement
      if (sidebar) {
        sidebar.style.zIndex = ""
      }
    }
  }

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault()
      const anyGlobalGraphOpen = containers.some((container) =>
        container.classList.contains("active"),
      )
      anyGlobalGraphOpen ? hideGlobalGraph() : renderGlobalGraph()
    }
  }

  const containerIcons = document.getElementsByClassName("global-graph-icon")
  Array.from(containerIcons).forEach((icon) => {
    icon.addEventListener("click", renderGlobalGraph)
    window.addCleanup(() => icon.removeEventListener("click", renderGlobalGraph))
  })

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => {
    document.removeEventListener("keydown", shortcutHandler)
    cleanupLocalGraphs()
    cleanupGlobalGraphs()
  })
})
