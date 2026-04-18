/// <reference types="vitest/config" />
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [!process.env.VITEST && reactRouter()],
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./testing/setup.ts'],
		include: ['**/*.test.{ts,tsx}'],
	},
});
