import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <Image
          src="/logo.svg"
          alt="Sandbox logo"
          width={72}
          height={72}
          className="size-16 md:size-[72px]"
          priority
        />
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          What should we build today?
        </h1>
        <p className="max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
          Build your own racers, shooters, puzzles and whole worlds using your
          own words. If you can describe it, you can play it.
        </p>
      </div>
    </div>
  )
}
