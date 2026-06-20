/**
 * domain-filter.ts — wire DomainChip clicks to dim/filter cards + map nodes.
 */
export function initDomainFilter(scope: HTMLElement): void {
  const chips = scope.querySelectorAll<HTMLButtonElement>('.kb-domainchip[data-domain]');
  const cards = scope.querySelectorAll<HTMLElement>('[data-filter-domain]');
  const mapNodes = scope.querySelectorAll<HTMLElement>('[data-map-node]');
  let active: string | null = null;

  const apply = () => {
    for (const chip of chips) {
      const d = chip.dataset.domain ?? '';
      const on = active === d;
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
      chip.classList.toggle('on', on);
      const hue = `var(--d-${d})`;
      chip.style.color = on ? 'var(--paper)' : hue;
      chip.style.background = on ? hue : 'var(--card)';
    }
    const dim = (el: HTMLElement, domain: string) => {
      const match = !active || domain === active;
      el.style.opacity = match ? '1' : '0.28';
      el.style.pointerEvents = match ? '' : 'none';
    };
    for (const c of cards) dim(c, c.dataset.filterDomain ?? '');
    for (const n of mapNodes) dim(n, n.dataset.mapNode ?? '');
  };

  for (const chip of chips) {
    chip.addEventListener('click', () => {
      const d = chip.dataset.domain ?? '';
      active = active === d ? null : d;
      apply();
    });
  }
  apply();
}