import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { deriveTitle, deriveSummary } from '../lib/note';
import { slugToUrl } from '../lib/slug';
import { simplifySlug } from '../lib/slug';

export async function GET(context) {
  const notes = await getCollection('notes');
  const items = notes
    .filter((n) => simplifySlug(n.id) !== '/')
    .map((n) => {
      const updated =
        n.data.updated instanceof Date
          ? n.data.updated
          : typeof n.data.updated === 'string'
            ? new Date(n.data.updated)
            : undefined;
      return {
        title: deriveTitle(n.data, n.id, n.body),
        pubDate: updated,
        description: deriveSummary(n.data, n.body),
        link: new URL(slugToUrl(n.id), context.site).href,
      };
    })
    .sort((a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0))
    .slice(0, 40);

  return rss({
    title: 'LLM Knowledge Base',
    description: 'Linked notes on learning systems, language study, and agentic engineering.',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}