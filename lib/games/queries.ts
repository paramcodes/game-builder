import { auth } from "@clerk/nextjs/server"
import { and, desc, eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { games } from "@/lib/db/schema"

export type GameListItem = {
  id: string
  title: string
}

export async function listGames(): Promise<GameListItem[]> {
  const { orgId } = await auth()
  if (!orgId) {
    return []
  }

  return db
    .select({ id: games.id, title: games.title })
    .from(games)
    .where(eq(games.orgId, orgId))
    .orderBy(desc(games.createdAt))
}

export type GameDetail = {
  id: string
  title: string
  createdAt: Date
}

export async function getGameById(id: string): Promise<GameDetail | null> {
  if (!id) {
    return null
  }
  const { orgId } = await auth()
  if (!orgId) {
    return null
  }

  const [row] = await db
    .select({ id: games.id, title: games.title, createdAt: games.createdAt })
    .from(games)
    .where(and(eq(games.id, id), eq(games.orgId, orgId)))
    .limit(1)

  return row ?? null
}
