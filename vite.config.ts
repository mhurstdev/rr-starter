/// <reference types="vitest/config" />
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

function getPlugins() {
	if (process.env.VITEST) {
		return [viteReact()];
	}

	return [
		devtools(),
		nitro({
			output: {
				dir: 'build',
			},
		}),
		tanstackStart(),
		viteReact(),
	];
}

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: getPlugins(),
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./testing/setup.ts'],
		include: ['**/*.test.{ts,tsx}'],
	},
});
