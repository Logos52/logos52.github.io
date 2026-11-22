# Old design

Archived 2026-11-22. This is the site design that the Nippon Design Center system replaced: stylesheets, tokens, layout templates, chrome components, the old graph shell, the node-mark favicon, and the Obsidian snippet that set the vault to the old reading face.

The live site does not load this folder. Nothing under `src/` imports it. The publish denylist keeps it off the built site. The design guard fails the build if a later change imports it, or if an old design marker shows up outside this folder and the map graph.

The map graph (`src/islands/constellation.ts` and `src/components/Constellation.astro`) is the one piece that stayed. Its surroundings are the new design.
