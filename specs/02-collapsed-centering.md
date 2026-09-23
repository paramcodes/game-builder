# 02 — Collapsed header toggle + centered rail

- Header (`components/app-sidebar.tsx`): logo hides in icon mode (`group-data-[collapsible=icon]:hidden`); the same `SidebarTrigger` stays visible and centers (`group-data-[collapsible=icon]:ml-0` + existing `justify-center` row). Expanded header unchanged.
- Rail button misalignment root cause: `size="lg"` switches to `p-0` in icon mode, leaving the 16px icon left-aligned in the 32px button (default size keeps `p-2` and fills exactly). Fix preserves expanded heights: `group-data-[collapsible=icon]:justify-center` on New game, Games, and Credits buttons.
- Verified with headless Chrome: sidebar 48px wide, header toggle + all rail buttons share center x=24, logo `display:none` when collapsed, zero console errors; `bun run typecheck` clean.
