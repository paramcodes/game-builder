# 01 — Collapsed rail popovers

- Collapsed-only (`hidden` + `group-data-[collapsible=icon]:flex/block`) elements in `components/app-sidebar.tsx`: `MessageSquare` Games item in `SidebarContent`, `Coins` Credits item in `SidebarFooter`. Expanded Recents group and Credits row hide wholesale via `group-data-[collapsible=icon]:hidden`.
- Popover triggers compose Base UI via `render`: `PopoverTrigger render={<SidebarMenuButton size="lg" />}` with button children flowing through; `data-slot="sidebar-menu-button"` re-asserted on the trigger because the outer primitive's slot wins the merge (verified in DOM).
- Button labels use `group-data-[collapsible=icon]:sr-only` (not `hidden`): keeps accessible names for role queries and avoids truncated-letter peeking in `size="lg"` icon mode (`group-data-[collapsible=icon]:p-0` leaves room for one glyph).
- `GamesEmpty` shared between inline Recents and Games popover content; Credits popover shows dummy `$1.00`.
- Verified with headless Chrome (system channel) + Playwright: collapse, Games popover opens right with placeholder, Credits popover opens with $1.00, zero console errors; `bun run typecheck` and `bun run build` clean.
