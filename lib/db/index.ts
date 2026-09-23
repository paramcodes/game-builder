import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

// Pooled DATABASE_URL for app runtime (serverless-safe HTTP transport).
// Migrations via drizzle-kit use DATABASE_URL_UNPOOLED (direct) — see drizzle.config.ts.
export const db = drizzle(process.env.DATABASE_URL!, { schema });
