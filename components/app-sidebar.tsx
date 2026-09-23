"use client"

import Image from "next/image"
import { Coins, MessageSquare, SquarePen } from "lucide-react"
import { OrganizationSwitcher, Show, UserButton } from "@clerk/nextjs"

import { Empty, EmptyDescription } from "@/components/ui/empty"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function GamesEmpty() {
  return (
    <Empty className="border p-4">
      <EmptyDescription>Your games will live here.</EmptyDescription>
    </Empty>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <Image
            src="/logo.svg"
            alt="Sandbox logo"
            width={24}
            height={24}
            className="size-6 shrink-0 group-data-[collapsible=icon]:hidden"
          />
          <span className="truncate text-lg font-semibold group-data-[collapsible=icon]:hidden">
            Sandbox
          </span>
          <SidebarTrigger className="ml-auto group-data-[collapsible=icon]:ml-0" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="New game"
                  size="lg"
                  className="bg-sidebar-accent text-sidebar-accent-foreground group-data-[collapsible=icon]:justify-center"
                >
                  <SquarePen />
                  <span className="group-data-[collapsible=icon]:sr-only">
                    New game
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="hidden group-data-[collapsible=icon]:block">
                <Popover>
                  <PopoverTrigger
                    render={
                      <SidebarMenuButton
                        size="lg"
                        className="group-data-[collapsible=icon]:justify-center"
                      />
                    }
                    data-slot="sidebar-menu-button"
                  >
                    <MessageSquare />
                    <span className="group-data-[collapsible=icon]:sr-only">
                      Games
                    </span>
                  </PopoverTrigger>
                  <PopoverContent side="right" align="center" sideOffset={8}>
                    <PopoverHeader>
                      <PopoverTitle>Games</PopoverTitle>
                    </PopoverHeader>
                    <GamesEmpty />
                  </PopoverContent>
                </Popover>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <GamesEmpty />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-1.5 text-sm group-data-[collapsible=icon]:hidden">
          <Coins className="size-4 shrink-0" />
          <span className="text-muted-foreground">Credits</span>
          <span className="ml-auto tabular-nums">$1.00</span>
        </div>
        <SidebarMenu className="hidden group-data-[collapsible=icon]:flex">
          <SidebarMenuItem>
            <Popover>
              <PopoverTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="group-data-[collapsible=icon]:justify-center"
                  />
                }
                data-slot="sidebar-menu-button"
              >
                <Coins />
                <span className="group-data-[collapsible=icon]:sr-only">
                  Credits
                </span>
              </PopoverTrigger>
              <PopoverContent side="right" align="end" sideOffset={8}>
                <PopoverHeader>
                  <PopoverTitle>Credits</PopoverTitle>
                </PopoverHeader>
                <p className="text-sm tabular-nums">$1.00</p>
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>
        <Show when="signed-in">
          <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <OrganizationSwitcher hidePersonal />
            </div>
            <UserButton />
          </div>
        </Show>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
