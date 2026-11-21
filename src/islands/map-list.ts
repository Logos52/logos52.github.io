/**
 * map-list.ts — filterable, searchable vault list below the Map graph.
 */
export type MapRow = {
  slug: string;
  title: string;
  url: string;
  source: string;
  domain: string;
  thumb?: string;
};

function norm(s: string): string {
  return s.trim().toLowerCase();
}

export function initMapList(root: HTMLElement, rows: MapRow[]): void {
  const search = root.querySelector<HTMLInputElement>('[data-map-search]');
  const chips = root.querySelectorAll<HTMLButtonElement>('[data-map-domain]');
  const list = root.querySelector<HTMLElement>('[data-map-list]');
  const empty = root.querySelector<HTMLElement>('[data-map-empty]');
  if (!list) return;

  let domain = '';
  let query = '';

  const visible = () =>
    rows.filter((r) => {
      if (domain && r.domain !== domain) return false;
      if (!query) return true;
      const hay = norm(`${r.title} ${r.source} ${r.slug}`);
      return hay.includes(query);
    });

  const render = () => {
    const items = visible();
    if (empty) empty.hidden = items.length > 0;
    list.innerHTML = items
      .map((r) => {
        const thumb = r.thumb
          ? `<img class="map-row__thumb" src="${escapeAttr(r.thumb)}" alt="" loading="lazy" width="56" height="56" />`
          : '';
        return `<li class="map-row">
          <a class="map-row__link" href="${escapeAttr(r.url)}">
            ${thumb}
            <span class="map-row__text">
              <span class="map-row__title">${escapeHtml(r.title)}</span>
              <span class="map-row__source">${escapeHtml(r.source)}</span>
            </span>
          </a>
        </li>`;
      })
      .join('');
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const d = chip.getAttribute('data-map-domain') ?? '';
      if (domain === d) {
        domain = '';
        chips.forEach((c) => c.classList.remove('on'));
      } else {
        domain = d;
        chips.forEach((c) => c.classList.toggle('on', c.getAttribute('data-map-domain') === d));
      }
      render();
    });
  });

  search?.addEventListener('input', () => {
    query = norm(search.value);
    render();
  });

  render();
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/'/g, '&#39;');
}