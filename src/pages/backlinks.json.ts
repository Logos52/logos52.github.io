import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildBacklinks, type NoteInput } from '../lib/backlinks';
import { deriveTitle } from '../lib/note';

// Emits /backlinks.json (BacklinkIndex: target slug → notes linking to it) at build time.
export const GET: APIRoute = async () => {
  const notes = await getCollection('notes');
  const input: NoteInput[] = notes.map((n) => ({
    slug: n.id,
    title: deriveTitle(n.data, n.id, n.body),
    body: n.body ?? '',
  }));
  return new Response(JSON.stringify(buildBacklinks(input)), {
    headers: { 'Content-Type': 'application/json' },
  });
};
