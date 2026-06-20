/**
 * graph-view.ts — interactive force graph (SVG): hover, click-navigate, pan + zoom.
 * Full mode: physics simulation. Compact/local mode: static radial layout, no physics.
 */
import type { GraphData } from '../lib/types';
import { slugToUrl } from '../lib/slug';

type SimNode = {
  slug: string;
  title: string;
  domain: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function initGraphView(host: HTMLElement): void {
  const svg = host.querySelector<SVGSVGElement>('svg');
  if (!svg) return;

  const compact = host.dataset.compact === 'true';
  const current = host.dataset.current ?? '';
  const raw = host.dataset.graph;
  if (!raw) return;

  let data: GraphData;
  try {
    data = JSON.parse(raw) as GraphData;
  } catch {
    return;
  }

  if (compact) {
    renderLocal(svg, data, current);
    return;
  }

  void fetch('/graph.json')
    .then((r) => r.json())
    .then((full: GraphData) => renderForce(host, svg, full))
    .catch(() => renderForce(host, svg, data));
}

function renderLocal(svg: SVGSVGElement, data: GraphData, current: string): void {
  const W = 240;
  const H = 150;
  const CX = 120;
  const CY = 75;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = '';

  const neighbors = new Set<string>();
  for (const e of data.edges) {
    if (e.source === current) neighbors.add(e.target);
    else if (e.target === current) neighbors.add(e.source);
  }
  const placed = data.nodes
    .filter((n) => neighbors.has(n.slug))
    .slice(0, 8)
    .map((n, i, arr) => {
      const angle = arr.length === 1 ? Math.PI : (Math.PI * 2 * (i + 0.5)) / arr.length - Math.PI / 2;
      return { n, x: CX + 70 * Math.cos(angle), y: CY + 42 * Math.sin(angle) };
    });

  const g = mk('g');
  const edges = mk('g');
  edges.setAttribute('stroke', 'var(--rule2)');
  edges.setAttribute('stroke-width', '1');
  edges.setAttribute('fill', 'none');
  for (const p of placed) {
    const path = mk('path');
    path.setAttribute('d', `M${CX} ${CY} L${p.x} ${p.y}`);
    edges.append(path);
  }
  g.append(edges);

  for (const p of placed) {
    g.append(nodeCircle(p.x, p.y, 5, p.n.domain, p.n.title, p.n.slug, false));
  }
  const cur = data.nodes.find((n) => n.slug === current);
  g.append(nodeCircle(CX, CY, 9, cur?.domain ?? 'gen', cur?.title ?? 'This note', current, true));
  svg.append(g);
}

function renderForce(host: HTMLElement, svg: SVGSVGElement, data: GraphData): void {
  const rect = host.getBoundingClientRect();
  const W = Math.max(rect.width || 900, 320);
  const H = Math.max(rect.height || 520, 320);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = '';

  const nodes: SimNode[] = data.nodes.map((n) => ({
    slug: n.slug,
    title: n.title,
    domain: n.domain,
    x: W / 2 + (Math.random() - 0.5) * W * 0.4,
    y: H / 2 + (Math.random() - 0.5) * H * 0.4,
    vx: 0,
    vy: 0,
    r: 5,
  }));
  const bySlug = new Map(nodes.map((n) => [n.slug, n]));
  const edges = data.edges
    .map((e) => ({ s: bySlug.get(e.source), t: bySlug.get(e.target) }))
    .filter((e) => e.s && e.t) as { s: SimNode; t: SimNode }[];

  const root = mk('g');
  const edgeG = mk('g');
  edgeG.setAttribute('stroke', 'var(--rule2)');
  edgeG.setAttribute('stroke-width', '1');
  edgeG.setAttribute('fill', 'none');
  const nodeG = mk('g');
  root.append(edgeG, nodeG);
  svg.append(root);

  let scale = 1;
  let panX = 0;
  let panY = 0;
  let hover: SimNode | null = null;
  let dragging = false;
  let dragNode: SimNode | null = null;
  let panning = false;
  let lastX = 0;
  let lastY = 0;
  let ticks = 0;
  const maxTicks = 240;

  const applyTransform = () => {
    root.setAttribute('transform', `translate(${panX},${panY}) scale(${scale})`);
  };

  const neighborOf = (n: SimNode) => {
    const set = new Set<SimNode>();
    for (const e of edges) {
      if (e.s === n) set.add(e.t);
      if (e.t === n) set.add(e.s);
    }
    return set;
  };

  const draw = () => {
    edgeG.innerHTML = '';
    nodeG.innerHTML = '';
    const lit = hover ? new Set([hover, ...neighborOf(hover)]) : null;
    for (const e of edges) {
      const dim = lit && !(lit.has(e.s) && lit.has(e.t));
      const line = mk('line');
      line.setAttribute('x1', String(e.s.x));
      line.setAttribute('y1', String(e.s.y));
      line.setAttribute('x2', String(e.t.x));
      line.setAttribute('y2', String(e.t.y));
      line.setAttribute('opacity', dim ? '0.12' : '0.55');
      edgeG.append(line);
    }
    for (const n of nodes) {
      const dim = lit && !lit.has(n);
      nodeG.append(nodeCircle(n.x, n.y, n.r, n.domain, n.title, n.slug, false, dim ? 0.22 : 1));
    }
  };

  const tick = () => {
    if (ticks >= maxTicks) return;
    ticks++;
    const cx = W / 2;
    const cy = H / 2;
    for (const a of nodes) {
      if (a === dragNode) continue;
      a.vx += (cx - a.x) * 0.002;
      a.vy += (cy - a.y) * 0.002;
      for (const b of nodes) {
        if (a === b) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy + 0.01;
        const f = 420 / d2;
        a.vx += dx * f;
        a.vy += dy * f;
      }
    }
    for (const e of edges) {
      const dx = e.t.x - e.s.x;
      const dy = e.t.y - e.s.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const f = (d - 72) * 0.018;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      if (e.s !== dragNode) {
        e.s.vx += fx;
        e.s.vy += fy;
      }
      if (e.t !== dragNode) {
        e.t.vx -= fx;
        e.t.vy -= fy;
      }
    }
    for (const n of nodes) {
      if (n === dragNode) continue;
      n.vx *= 0.84;
      n.vy *= 0.84;
      n.x += n.vx;
      n.y += n.vy;
      n.x = Math.max(24, Math.min(W - 24, n.x));
      n.y = Math.max(24, Math.min(H - 24, n.y));
    }
    draw();
    if (ticks < maxTicks) requestAnimationFrame(tick);
  };

  svg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const f = e.deltaY > 0 ? 0.92 : 1.08;
    scale = Math.max(0.35, Math.min(3, scale * f));
    applyTransform();
  }, { passive: false });

  svg.addEventListener('pointerdown', (e) => {
    const t = e.target as Element;
    const slug = t.getAttribute('data-slug');
    if (slug) {
      const n = bySlug.get(slug);
      if (n) {
        dragging = true;
        dragNode = n;
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }
    }
    panning = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    if (dragging && dragNode) {
      dragNode.x += (e.clientX - lastX) / scale;
      dragNode.y += (e.clientY - lastY) / scale;
      lastX = e.clientX;
      lastY = e.clientY;
      draw();
    } else if (panning) {
      panX += e.clientX - lastX;
      panY += e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      applyTransform();
    }
  });

  window.addEventListener('pointerup', () => {
    dragging = false;
    dragNode = null;
    panning = false;
  });

  svg.addEventListener('mousemove', (e) => {
    const t = e.target as Element;
    const slug = t.getAttribute('data-slug');
    hover = slug ? bySlug.get(slug) ?? null : null;
    draw();
  });
  svg.addEventListener('mouseleave', () => {
    hover = null;
    draw();
  });
  svg.addEventListener('click', (e) => {
    const t = e.target as Element;
    const slug = t.getAttribute('data-slug');
    if (slug) window.location.href = slugToUrl(slug);
  });

  applyTransform();
  draw();
  requestAnimationFrame(tick);
}

function nodeCircle(
  x: number,
  y: number,
  r: number,
  domain: string,
  title: string,
  slug: string,
  current: boolean,
  opacity = 1,
): SVGCircleElement {
  const c = mk('circle') as SVGCircleElement;
  c.setAttribute('cx', String(x));
  c.setAttribute('cy', String(y));
  c.setAttribute('r', String(r));
  c.setAttribute('fill', `var(--d-${domain})`);
  c.setAttribute('data-slug', slug);
  c.setAttribute('opacity', String(opacity));
  c.style.cursor = 'pointer';
  if (current) c.style.filter = 'drop-shadow(0 1.5px 2px rgba(33,29,24,.26))';
  const t = mk('title');
  t.textContent = title;
  c.append(t);
  return c;
}

function mk<K extends keyof SVGElementTagNameMap>(tag: K): SVGElementTagNameMap[K] {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}