import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    // Pin Turbopack root to this project so the stray
    // /home/param/Documents/package-lock.json (outside the git repo)
    // is not considered during root detection.
    root: process.cwd(),
  },
}

export default nextConfig
