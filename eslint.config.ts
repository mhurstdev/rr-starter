import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import jsxa11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		ignores: ['build/**', 'node_modules/**', '.react-router/**'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
				...globals.vitest,
			},
		},
	},
	js.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			jsxa11y.flatConfigs.recommended,
		],
		plugins: {
			import: _import,
			react: react,
		},
		settings: {
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},
		rules: {
			'import/no-unresolved': 'error',
			'react/jsx-fragments': ['error', 'element'],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
				},
			],
			'import/consistent-type-specifier-style': [
				'error',
				'prefer-top-level',
			],
		},
	},
]);
