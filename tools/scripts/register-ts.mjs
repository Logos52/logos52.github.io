/**
 * Load the repo's extensionless TypeScript imports under node --test.
 * Astro resolves `./types` at build time. Node does not. This hook only
 * appends `.ts` so a test can import the real modules.
 */
import { register } from 'node:module';

register(new URL('./resolve-ts-hooks.mjs', import.meta.url));
