# 04 — Route groups, protected proxy, required orgs

- Instance (dev, app "game-builder", claimed): email `email_code` + `oauth_google`
  first factors confirmed via `config pull` and `--fapi /environment` — no config
  change needed for "email or Google". Password factor stays as-is.
- Orgs: `clerk enable orgs --force-selection` (+ `--dry-run` preview first).
  Verified: `enabled=true`, `force_organization_selection=true`,
  `domains_enabled=false` (no domain auto-join; existing orgs are invite-only).
  `Membership required` disables personal accounts; new users go through the
  `choose-organization` task inside `<SignIn />` — no custom task route needed.
  Sidebar footer has `<OrganizationSwitcher hidePersonal />` + `UserButton`
  (`components/app-sidebar.tsx`); switcher hidden in icon-collapsed rail.
- Routes (URLs unchanged): `app/(auth)/sign-in|sign-up/[[...x]]/page.tsx` with
  minimal centered `app/(auth)/layout.tsx`; `app/(dashboard)/layout.tsx` owns the
  sidebar shell (`SidebarProvider` + `AppSidebar` + `SidebarInset`); root
  `app/layout.tsx` stays slim. Moves done with `git mv` (history preserved).
  Moved with `mkdir -p` first — `git mv` will not create `app/(auth)/` parents.
- `proxy.ts` is protected-first: `createRouteMatcher(["/sign-in(.*)",
  "/sign-up(.*)"])` as `isPublicRoute`, `await auth.protect()` otherwise.
  Matcher config unchanged (still covers `/(api|trpc)(.*)`).
  Verified live: signed-out `/` → 307 to `/sign-in?redirect_url=...`,
  `/sign-in` + `/sign-up` → 200, `/api/*` → 307 to sign-in.
- Signed-out sidebar auth buttons removed — unreachable behind the proxy;
  entry points are the public auth pages.
- Gotcha: after moving routes, `tsc`/`build` failed on stale `.next` type
  validators pointing at old paths. Fix: `rm -rf .next` (gitignored) and rebuild.
- Manual test still open: real email/Google sign-up → choose-org task →
  dashboard; org invitation accept flow.
