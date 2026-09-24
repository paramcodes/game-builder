"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
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
import { createGame } from "@/lib/games/actions"

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
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const canSubmit = prompt.trim().length > 0 && !isPending

  function submit() {
    if (!canSubmit) return
    setError(null)
    const value = prompt
    startTransition(async () => {
      try {
        const game = await createGame({ prompt: value })
        setPrompt("")
        router.push(`/game/${game.id}`)
        router.refresh()
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create game")
      }
    })
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <InputGroup className="rounded-2xl">
          <InputGroupTextarea
            placeholder="Describe the game you want to build..."
            rows={2}
            className="min-h-10"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                submit()
              }
            }}
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
              type="submit"
              size="icon-lg"
              aria-label="Send"
              disabled={!canSubmit}
              className="rounded-full bg-[#ec7f5c] text-black hover:bg-[#ec7f5c]/90"
            >
              <ArrowUp />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        {error ? (
          <p role="alert" className="mt-2 text-sm text-destructive">
            {error}
          </p>
        ) : null}
      </form>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.label}
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => setPrompt(suggestion.label)}
          >
            <suggestion.icon />
            {suggestion.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
