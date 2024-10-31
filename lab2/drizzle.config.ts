import { type Config } from "drizzle-kit";

import { env } from "@bahar/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["lab2_*"],
} satisfies Config;
