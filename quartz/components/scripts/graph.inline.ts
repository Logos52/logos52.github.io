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

const SPINE_LINK_COLOR = "#3a3640"
const SPINE_LINK_ALPHA = 0.35
const SPINE_SATELLITE_RADIUS = 3.5

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
  const satellitesPerHub = isMobile ? 1 : 3
  const globalCap = 24
  const neighbourhood = new Set<SimpleSlug>()
  const satelliteParent = new Map<SimpleSlug, SimpleSlug>()

  for (const hub of hubs) {
    if (!validLinks.has(hub)) continue
    neighbourhood.add(hub)

    const candidates = [...(neighbors.get(hub) ?? [])]
      .filter((n) => n.startsWith("wiki/") && validLinks.has(n) && !hubs.has(n))
      .sort((a, b) => {
        const d = (degree.get(b) ?? 0) - (degree.get(a) ?? 0)
        return d !== 0 ? d : a.localeCompare(b)
      })
      .slice(0, satellitesPerHub)

    for (const sat of candidates) {
      if (neighbourhood.size >= globalCap) break
      neighbourhood.add(sat)
      satelliteParent.set(sat, hub)
    }
  }

  return { neighbourhood, satelliteParent }
}

function selectSpineLinks(
  links: SimpleLinkData[],
  neighbourhood: Set<SimpleSlug>,
  hubs: Set<SimpleSlug>,
  degree: Map<SimpleSlug, number>,
) {
  const hasHubEndpoint = (l: SimpleLinkData) =>
    neighbourhood.has(l.source) &&
    neighbourhood.has(l.target) &&
    (hubs.has(l.source) || hubs.has(l.target))

  const chosen = new Map<string, SimpleLinkData>()
  for (const hub of hubs) {
    const incident = links
      .filter(hasHubEndpoint)
      .filter((l) => l.source === hub || l.target === hub)
      .sort((a, b) => {
        const otherA = a.source === hub ? a.target : a.source
        const otherB = b.source === hub ? b.target : b.source
        const d = (degree.get(otherB) ?? 0) - (degree.get(otherA) ?? 0)
        return d !== 0 ? d : otherA.localeCompare(otherB)
      })
      .slice(0, 6)

    for (const l of incident) {
      chosen.set(linkKey(l), l)
    }
  }

  const linkScore = (l: SimpleLinkData) =>
    Math.max(degree.get(l.source) ?? 0, degree.get(l.target) ?? 0)

  return [...chosen.values()]
    .sort((a, b) => linkScore(b) - linkScore(a) || linkKey(a).localeCompare(linkKey(b)))
    .slice(0, 30)
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
    pinnedSlugs,
    clusterForce,
    spineLayout,
    hubSlugs,
    recentDays,
    spineDomains,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config

  const simplifiedHubSlugs = new Set(
    (hubSlugs ?? []).map((s) => simplifySlug(s as FullSlug)),
  )
  const spineDomainList = spineDomains ?? []
  const recentWindowMs = (recentDays ?? 7) * 24 * 60 * 60 * 1000
  const recentCutoff = Date.now() - recentWindowMs
  const effectivePinned = [
    ...(pinnedSlugs ?? []),
    ...(spineLayout ? (hubSlugs ?? []) : []),
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
  const hubAnchorX = new Map<SimpleSlug, number>()

  if (spineLayout) {
    const { neighbourhood: constellation, satelliteParent: satParents } = selectSpineConstellation(
      simplifiedHubSlugs,
      links,
      validLinks,
      isMobileGraph,
    )
    satelliteParent = satParents
    constellation.forEach((id) => neighbourhood.add(id))

    const domainIndex = new Map<string, number>()
    spineDomainList.forEach((d, i) => domainIndex.set(d.id, i))
    for (const hub of simplifiedHubSlugs) {
      if (!neighbourhood.has(hub)) continue
      const domain = domainForNode(hub, spineDomainList)
      const idx = domain ? (domainIndex.get(domain.id) ?? 0) : 0
      hubAnchorX.set(hub, domainTargetX(idx, spineDomainList.length, width))
    }
  } else {
    const wl: (SimpleSlug | "__SENTINEL")[] = [slug, "__SENTINEL"]
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

    const nodeScore = (id: SimpleSlug) => {
      const degree = linkCounts.get(id) ?? 0
      const contentWords = wordCount(id)

      switch (nodeRank) {
        case "content":
          return contentWords
        case "content-heavy":
          return contentWords + degree * 120
        case "degree":
        default:
          return degree
      }
    }

    const keptNodes = new Set(
      [...neighbourhood]
        .sort((a, b) => {
          const scoreDelta = nodeScore(b) - nodeScore(a)
          if (scoreDelta !== 0) return scoreDelta
          return (data.get(a)?.title ?? a).localeCompare(data.get(b)?.title ?? b)
        })
        .slice(0, effectiveNodeLimit),
    )

    // Always keep explicitly pinned nodes (e.g. Start-here + recent notes).
    for (const p of effectivePinned) {
      const ps = simplifySlug(p as FullSlug)
      if (neighbourhood.has(ps)) keptNodes.add(ps)
    }

    if (neighbourhood.has(slug)) keptNodes.add(slug)
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

  let graphLinks: LinkData[]
  if (spineLayout) {
    const { degree } = buildAdjacency(links)
    graphLinks = selectSpineLinks(links, neighbourhood, simplifiedHubSlugs, degree)
      .filter((l) => nodeById.has(l.source) && nodeById.has(l.target))
      .map((l) => ({
        source: nodeById.get(l.source)!,
        target: nodeById.get(l.target)!,
      }))
  } else {
    graphLinks = links
      .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
      .map((l) => ({
        source: nodeById.get(l.source)!,
        target: nodeById.get(l.target)!,
      }))
  }

  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: graphLinks,
  }

  // we virtualize the simulation and use pixi to actually render it
  const simulation: Simulation<NodeData, LinkData> = forceSimulation<NodeData>(graphData.nodes)
    .alphaDecay(0.05)
    .velocityDecay(0.55)

  if (spineLayout && spineDomainList.length > 0) {
    const domainIndex = new Map<string, number>()
    spineDomainList.forEach((d, i) => domainIndex.set(d.id, i))

    simulation
      .force("charge", forceManyBody().strength(-200))
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
        }).strength((d) => (satelliteParent.has(d.id) ? 0.3 : 0.08)),
      )
      .force(
        "y",
        forceY<NodeData>((d) => (satelliteParent.has(d.id) ? 0 : 0)).strength((d) =>
          satelliteParent.has(d.id) ? 0.15 : 0.08,
        ),
      )
  } else {
    simulation
      .force("charge", forceManyBody().strength(-100 * repelForce))
      .force("center", forceCenter().strength(centerForce))
      .force("link", forceLink(graphData.links).distance(linkDistance))
      .force("collide", forceCollide<NodeData>((n) => nodeRadius(n)).iterations(3))
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
      .force("clusterY", forceY<NodeData>((d) => anchorFor(d.id).y).strength(clusterForce))
  }

  // Pre-settle the layout synchronously and halt the auto-ticker so the graph
  // appears locked in place on load — no entrance wobble. Dragging a node still
  // re-energises the simulation (alphaTarget(1).restart() in the drag handler).
  simulation.stop()
  const settleTicks = Math.ceil(
    Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()),
  )
  simulation.tick(settleTicks)

  if (spineLayout && spineDomainList.length > 0) {
    for (const n of graphData.nodes) {
      if (simplifiedHubSlugs.has(n.id)) {
        n.fx = hubAnchorX.get(n.id) ?? n.fx
        n.fy = null
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
    if (spineLayout && simplifiedHubSlugs.has(d.id)) {
      return (nodeBaseRadius ?? 2) * 1.8
    }
    if (spineLayout && satelliteParent.has(d.id)) {
      return SPINE_SATELLITE_RADIUS
    }
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length
    const base = nodeBaseRadius ?? 2
    const linkScale = nodeLinkRadius ?? 1
    const max = nodeMaxRadius ?? 8
    return Math.min(max, base + Math.sqrt(numLinks) * linkScale)
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
      let alpha = 1

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
        ? computedStyleMap["--gray"]
        : spineLayout
          ? SPINE_LINK_COLOR
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

  for (const n of graphData.nodes) {
    const nodeId = n.id
    const isHub = simplifiedHubSlugs.has(nodeId)
    const nodeDomain = spineLayout ? domainForNode(nodeId, spineDomainList) : undefined

    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: n.text,
      alpha: isHub && spineLayout ? 1 : 0,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: isHub && spineLayout ? 10 : fontSize * 15,
        fill:
          isHub && nodeDomain
            ? mixColor(nodeDomain.color, 0.7)
            : computedStyleMap["--dark"],
        fontFamily:
          isHub && spineLayout
            ? computedStyleMap["--codeFont"]
            : computedStyleMap["--bodyFont"],
      },
      resolution: window.devicePixelRatio * 4,
    })
    label.scale.set(1 / scale)

    let oldLabelOpacity = 0
    const isTagNode = nodeId.startsWith("tags/")
    const gfx = new Graphics({
      interactive: true,
      label: nodeId,
      eventMode: "static",
      hitArea: new Circle(0, 0, nodeRadius(n)),
      cursor: "pointer",
    })
      .circle(0, 0, nodeRadius(n))
      .fill({ color: isTagNode ? computedStyleMap["--light"] : color(n) })
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
      color: spineLayout ? SPINE_LINK_COLOR : computedStyleMap["--lightgray"],
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
            event.subject.fy = null
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
    .on("zoom", ({ transform }) => {
      currentTransform = transform
      currentZoom = transform.k
      stage.scale.set(transform.k, transform.k)
      stage.position.set(transform.x, transform.y)

      const zoomScale = transform.k * opacityScale
      let scaleOpacity = Math.max((zoomScale - 1) / 3.75, 0)
      if (spineLayout && currentZoom > 1.4) {
        scaleOpacity = 1
      }
      const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)

      for (const n of nodeRenderData) {
        const isHub = simplifiedHubSlugs.has(n.simulationData.id)
        if (activeNodes.includes(n.label)) continue
        if (isHub && spineLayout) {
          n.label.alpha = 1
        } else {
          n.label.alpha = scaleOpacity
        }
      }
    })

  function zoomToFitSpine() {
    if (!spineLayout || graphData.nodes.length === 0) return
    const padding = 40
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for (const n of graphData.nodes) {
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
    const fitScale = Math.min(
      (width - padding * 2) / graphWidth,
      (height - padding * 2) / graphHeight,
      2.5,
    )
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
