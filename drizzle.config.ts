import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Next.js loads .env.local at runtime, but drizzle-kit only reads .env by
// default — load both so CLI commands pick up local DATABASE_URL.
config({ path: ".env" });
config({ path: ".env.local", override: false });

export default defineConfig({
  out: "./drizzle",
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // Migrations run over a direct connection; fall back to pooled URL locally.
    url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL!,
  },
});
