/// <reference types="vitest/config" />
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [reactRouter()],
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
	},
});
