import Image from "next/image"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ChatComposer } from "@/components/chat-composer"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <Empty className="max-w-3xl border-0">
        <EmptyHeader className="max-w-2xl gap-6">
          <EmptyMedia>
            <Image
              src="/logo.svg"
              alt="Sandbox logo"
              width={48}
              height={48}
              className="size-12"
              priority
            />
          </EmptyMedia>
          <EmptyTitle className="text-2xl font-semibold">
            What should we build today?
          </EmptyTitle>
          <EmptyDescription>
            Build your own racers, shooters, puzzles and whole worlds using
            your own words. If you can describe it, you can play it.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="w-full max-w-2xl">
          <ChatComposer />
        </EmptyContent>
      </Empty>
    </div>
  )
}
