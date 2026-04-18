import * as z from "zod";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    SERVER_EXAMPLE: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
