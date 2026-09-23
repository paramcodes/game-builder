# 05 — `bun run dev` triage: Turbopack root warning + curl-404 gotcha

- Symptom reported: "some error while `bun run dev`". Repro on this machine:
  `bun run dev`, `bun run typecheck`, `bun run build` all succeed; no crash.
- Real defect found: dev startup printed
  `Warning: Next.js ignored package-lock.json in /home/param/Documents because
  it is outside the current Git repository ... set turbopack.root`.
  Cause: stray `/home/param/Documents/package-lock.json` (outside the repo)
  confuses Turbopack root detection. Fix (per `turbopack.md` in
  `node_modules/next/dist/docs/`): pin `turbopack.root` to `process.cwd()` in
  `next.config.ts`. Warning gone, routes/typecheck verified after.
- Gotcha (NOT a bug): cold server + plain `curl /` (no `Accept: text/html`)
  returns `404` with `x-clerk-auth-reason: protect-rewrite, dev-browser-missing`.
  Chain: `auth.protect()` → not-a-page-request → `notFound()` →
  `[[node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js]]` rewrites
  to fake `/clerk_<timestamp>` → Next 404. Browsers always send `text/html`,
  so real visits get the Clerk handshake `307` → `/sign-in?redirect_url=...`
  (matches `[[specs/04-route-groups-orgs.md]]`). After warmup even plain curl
  gets the `307`. Do not "fix" the proxy for this.
- Separate pre-existing failure, out of scope: `bun run lint` crashes with
  `TypeError: contextOrFilename.getFilename is not a function` from
  `eslint-plugin-react` bundled in `eslint-config-next` (ESLint 10
  incompatibility), triggered even on unrelated `.agents/skills/**/*.js`.
