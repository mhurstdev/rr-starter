import { createEnv } from '@t3-oss/env-core';
import * as z from 'zod';

export const env = createEnv({
	clientPrefix: 'VITE_',
	client: {
		VITE_CLIENT_EXAMPLE: z.string().min(1),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
