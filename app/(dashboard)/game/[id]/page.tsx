import { notFound } from "next/navigation"

import { getGameById } from "@/lib/games/queries"

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const game = await getGameById(id)
  if (!game) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col gap-4 px-6 py-10">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground">Game</p>
        <h1 className="mt-1 truncate text-2xl font-semibold">{game.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Created {game.createdAt.toLocaleString()}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed p-10">
        <p className="max-w-md text-center text-sm text-muted-foreground">
          Builder canvas lands here next. Titles are the raw prompt truncated
          to 80 characters until AI title generation is added.
        </p>
      </div>
    </div>
  )
}
