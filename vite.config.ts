/// <reference types="vitest/config" />
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		devtools(),
		nitro({ output: { dir: 'build' } }),
		!process.env.VITEST && tanstackStart(),
		viteReact(),
	],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./testing/setup.ts'],
		include: ['**/*.test.{ts,tsx}'],
	},
});
