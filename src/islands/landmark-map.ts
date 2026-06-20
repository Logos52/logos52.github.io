/**
 * landmark-map.ts — curated home landmark map (static SVG constellation + click-nav).
 */
import { slugToUrl } from '../lib/slug';

type MapNode = { slug: string; title: string; domain: string; x: number; y: number; r: number; label: string };

export function initLandmarkMap(host: HTMLElement): void {
  const svg = host.querySelector<SVGSVGElement>('svg');
  const raw = host.dataset.nodes;
  if (!svg || !raw) return;

  let nodes: { slug: string; title: string; domain: string }[];
  try {
    nodes = JSON.parse(raw) as { slug: string; title: string; domain: string }[];
  } catch {
    return;
  }

  const W = 1000;
  const H = 300;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  const placed: MapNode[] = nodes.map((n, i) => {
    const angle = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
    const rx = 320;
    const ry = 95;
    const cx = W / 2;
    const cy = H / 2 + 8;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);
    const label = shortLabel(n.title);
    return { ...n, x, y, r: 14, label };
  });

  const edgePath = placed
    .map((n, i) => {
      const next = placed[(i + 1) % placed.length];
      return `M${n.x} ${n.y} L${next.x} ${next.y}`;
    })
    .join(' ');

  svg.innerHTML = '';
  const links = el('g');
  links.setAttribute('stroke', 'var(--rule2)');
  links.setAttribute('stroke-width', '1');
  links.setAttribute('fill', 'none');
  links.setAttribute('opacity', '0.8');
  const path = el('path');
  path.setAttribute('d', edgePath);
  links.append(path);
  svg.append(links);

  const labels = el('g');
  labels.setAttribute('font-family', 'var(--mono)');
  labels.setAttribute('font-size', '11');
  labels.setAttribute('fill', 'var(--mut)');
  labels.setAttribute('text-anchor', 'middle');

  for (const n of placed) {
    const g = el('g');
    g.setAttribute('data-map-node', n.domain);
    g.style.cursor = 'pointer';
    g.addEventListener('click', () => {
      window.location.href = slugToUrl(n.slug);
    });

    const circle = el('circle');
    circle.setAttribute('cx', String(n.x));
    circle.setAttribute('cy', String(n.y));
    circle.setAttribute('r', String(n.r));
    circle.setAttribute('fill', `var(--d-${n.domain})`);
    circle.style.filter = 'drop-shadow(0 2px 3px rgba(33,29,24,.28))';
    g.append(circle);

    const text = el('text');
    text.setAttribute('x', String(n.x));
    text.setAttribute('y', String(n.y + n.r + 14));
    text.textContent = n.label;
    g.append(text);

    labels.append(g);
  }
  svg.append(labels);
}

function shortLabel(title: string): string {
  const words = title.split(/\s+/);
  if (words.length <= 3) return title;
  return words.slice(0, 2).join(' ') + '…';
}

function el<K extends keyof SVGElementTagNameMap>(tag: K): SVGElementTagNameMap[K] {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}