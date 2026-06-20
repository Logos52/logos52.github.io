import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { slugifyFilePath } from './lib/slug';

// A date in vault frontmatter may arrive as a YAML Date or a raw string — accept both, never coerce-fail.
const looseDate = z.union([z.string(), z.date()]).optional();

// `tags` (and `aliases`) may be a list, a single string, or absent.
const looseStringList = z
  .preprocess((v) => (Array.isArray(v) ? v : v == null ? [] : [v]), z.array(z.string()))
  .optional();

// Lenient by design. The vault holds ~314 publishable notes with inconsistent frontmatter:
// `title` is present on ~half, there are 34 distinct `type` values, and dates vary. Schema
// validation must NEVER break the build, so every field is optional and unknown keys pass through.
// (See CONTRACTS.md — this is the single source of truth for the `notes` collection shape.)
const noteFrontmatter = z
  .object({
    title: z.string().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    created: looseDate,
    updated: looseDate,
    tags: looseStringList,
    order: z.number().optional(),
    image: z.string().optional(),
    blurb: z.string().optional(),
    draft: z.boolean().optional(),
    aliases: looseStringList,
    description: z.string().optional(),
  })
  .passthrough();

const notes = defineCollection({
  // src/content/notes is a build-time copy of the PUBLIC vault subset, produced by
  // `scripts/copy-public-notes.mjs` (the publish guard). Private notes are never copied here.
  // generateId → Quartz-identical slugs (folder-based, 1:1 with the old URLs).
  loader: glob({ pattern: '**/*.md', base: './src/content/notes', generateId: ({ entry }) => slugifyFilePath(entry) }),
  schema: noteFrontmatter,
});

export const collections = { notes };
