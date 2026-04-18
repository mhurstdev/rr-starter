import { createEnv } from '@t3-oss/env-core';
import * as z from 'zod';

export const env = createEnv({
	server: {
		SERVER_EXAMPLE: z.string().min(1),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
