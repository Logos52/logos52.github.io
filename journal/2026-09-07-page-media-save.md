# Page Media Save instead of FastSave / VDH wait

Built a local unpacked Brave extension at `/Users/n1/Projects/private/page-media-save`. It saves media the current tab already loaded. No 2-hour wait. Unpublished local tools live under `/Users/n1/Projects/private/`, not at the `~/Projects` root.

FastSave (`pnlphjjfielecalmmjjdhjjninkbjdod` 3.8.8) is the wrong tool to repair. Story save walks old `__reactFiber` / `hdSrc` paths, GraphQL `query_hash` values from the GET era, and the popup often opens `tryfastsave.com` (Spector) which does not have the Instagram session. Last store update was 2026-04-15.

Video Download Helper 10.5.24.2 does work. The 2-hour lock is a free-tier rule on HLS/DASH remux, documented at downloadhelper.net: 3 advanced saves on install, then 1 every 2 hours. Direct file saves stay unlimited. Instagram stories often land in the advanced bucket, which is why the wait shows up there.

This extension sniffs CDN URLs and JSON the page already fetched, and can record the playing `<video>`. Files go to `Downloads/page-media-save/`. Not a store listing. Not a remote scraper.
