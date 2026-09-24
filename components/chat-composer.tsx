import {
  ArrowUp,
  Car,
  ChevronDown,
  Crosshair,
  Gamepad2,
  Grip,
  Pickaxe,
  Plane,
  Swords,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const suggestions: { icon: LucideIcon; label: string }[] = [
  { icon: Pickaxe, label: "Voxel survival" },
  { icon: Swords, label: "Ink samurai duel" },
  { icon: Zap, label: "Comic-book firefight" },
  { icon: Plane, label: "Realistic battlefield" },
  { icon: Crosshair, label: "Fight-first shooter" },
  { icon: Car, label: "Jungle expedition drive" },
  { icon: Gamepad2, label: "Sunny kingdom platformer" },
]

export function ChatComposer() {
  return (
    <div className="flex w-full flex-col gap-4">
      <InputGroup className="rounded-2xl">
        <InputGroupTextarea
          placeholder="Describe the game you want to build..."
          rows={4}
        />
        <InputGroupAddon align="block-end" className="justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="sm" />}
            >
              <Grip />
              Kimi K3
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Kimi K3</DropdownMenuItem>
              <DropdownMenuItem>Kimi K2</DropdownMenuItem>
              <DropdownMenuItem>Auto</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="icon-lg"
            aria-label="Send"
            className="rounded-full bg-[#ec7f5c] text-black hover:bg-[#ec7f5c]/90"
          >
            <ArrowUp />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.label}
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            <suggestion.icon />
            {suggestion.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
