'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import { db } from "@/lib/db"
import { games } from "@/lib/db/schema"

const MAX_PROMPT_LENGTH = 2000
const MAX_TITLE_LENGTH = 80

export type CreatedGame = {
  id: string
  title: string
}

export async function createGame(input: {
  prompt: string
}): Promise<CreatedGame> {
  const { userId, orgId } = await auth()
  if (!userId) {
    throw new Error("Unauthorized")
  }
  if (!orgId) {
    throw new Error("Select an organization to create a game")
  }

  const prompt = input.prompt.trim()
  if (!prompt) {
    throw new Error("Describe your game first")
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    throw new Error("Prompt is too long")
  }

  // Raw prompt truncated for now — AI title generation lands later.
  const title = prompt.replace(/\s+/g, " ").slice(0, MAX_TITLE_LENGTH)

  const [row] = await db
    .insert(games)
    .values({ orgId, title })
    .returning({ id: games.id, title: games.title })
  if (!row) {
    throw new Error("Failed to create game")
  }

  revalidatePath("/")

  return row
}
