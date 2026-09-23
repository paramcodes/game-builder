# CHANGES.md

Log of user-facing changes per iteration.

## Unreleased
- Added Clerk auth (accountless dev app, unclaimed): `proxy.ts` middleware, `ClerkProvider` with shadcn theme in `app/layout.tsx`, `/sign-in` and `/sign-up` routes, sidebar footer auth controls (`SignInButton`/`SignUpButton` modals when signed out, `UserButton` when signed in).
- Switched lockfile from `package-lock.json` to `bun.lock` (bun is the package manager); added `@clerk/nextjs` + `@clerk/ui`.
- Replaced `app/page.tsx` demo content with left-sidebar app shell (`SidebarProvider` + `AppSidebar` + `SidebarInset`).
- Added `components/app-sidebar.tsx` (`collapsible="icon"`): Sandbox logo/title header with `SidebarTrigger`, New game entry, Recents dashed `Empty` placeholder, Credits $1.00 footer with org/UserButton placeholder.
- Collapsed rail: logo-only header, New game icon, `MessageSquare` Games popover (mirrors Recents `GamesEmpty`), `Coins` Credits popover ($1.00 dummy); no avatar placeholder yet.
- Collapsed header shows the sidebar toggle instead of the logo; rail buttons centered via `justify-center` (`size="lg"` uses `p-0` in icon mode).
- Set project memory in `AGENTS.md`: bun as package manager, commit-after-every-iteration, skills-first workflow, `CHANGES.md` + `specs/NN-*.md` conventions.
- Renamed package `x` → `game-builder` in `package.json`.
