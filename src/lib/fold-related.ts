/**
 * rehypeFoldRelated — after the fifth item in a Related pages list, put the
 * rest in a disclosure. The links stay in the HTML. Headings named "Related"
 * or "Related pages" both match.
 */

const SHOW = 5;

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function textOf(node: HastNode): string {
  if (node.type === 'text') return node.value ?? '';
  return (node.children ?? []).map(textOf).join('');
}

function fold(node: HastNode) {
  const kids = node.children;
  if (!kids) return;
  for (let i = 0; i < kids.length; i++) {
    const n = kids[i];
    if (n.type === 'element' && n.tagName === 'h2') {
      const label = textOf(n).replace(/\s+/g, ' ').trim().toLowerCase();
      if (label === 'related' || label === 'related pages') {
        let ulAt = -1;
        for (let j = i + 1; j < kids.length; j++) {
          const c = kids[j];
          if (c.type === 'element' && c.tagName === 'ul') {
            ulAt = j;
            break;
          }
          if (c.type === 'element' && c.tagName && /^h[1-6]$/.test(c.tagName)) break;
        }
        const ul = ulAt === -1 ? undefined : kids[ulAt];
        const items = ul?.children?.filter((c) => c.type === 'element' && c.tagName === 'li') ?? [];
        if (ul && items.length > SHOW) {
          const extra = new Set(items.slice(SHOW));
          ul.children = ul.children!.filter((c) => !extra.has(c));
          const more: HastNode = {
            type: 'element',
            tagName: 'details',
            properties: { className: ['kb-related-more'] },
            children: [
              {
                type: 'element',
                tagName: 'summary',
                properties: {},
                children: [{ type: 'text', value: `${items.length - SHOW} more related pages` }],
              },
              { type: 'element', tagName: 'ul', properties: {}, children: items.slice(SHOW) },
            ],
          };
          kids.splice(ulAt + 1, 0, more);
        }
      }
    }
    if (n !== kids[i] || n.type === 'element') fold(n);
  }
}

export function rehypeFoldRelated() {
  return (tree: HastNode) => {
    fold(tree);
  };
}
