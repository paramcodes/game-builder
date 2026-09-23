"use client"

import Image from "next/image"
import { Coins, SquarePen } from "lucide-react"

import {
  Empty,
  EmptyDescription,
} from "@/components/ui/empty"
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

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Sandbox logo"
            width={24}
            height={24}
            className="size-6 shrink-0"
          />
          <span className="truncate text-lg font-semibold group-data-[collapsible=icon]:hidden">
            Sandbox
          </span>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="New game" size="lg">
                  <SquarePen />
                  <span>New game</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <Empty className="border p-4">
              <EmptyDescription>Your games will live here.</EmptyDescription>
            </Empty>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-1.5 text-sm">
          <Coins className="size-4 shrink-0" />
          <span className="text-muted-foreground group-data-[collapsible=icon]:hidden">
            Credits
          </span>
          <span className="ml-auto tabular-nums group-data-[collapsible=icon]:hidden">
            $1.00
          </span>
        </div>
        {/* TODO: org switcher + UserButton */}
        <div className="flex items-center gap-2 px-2 py-1.5" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
