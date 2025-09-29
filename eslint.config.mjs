import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig([
	js.configs.recommended,
	json.configs.recommended,
	tseslint.configs.recommended,
	compat.config({
		plugins: ['import', 'prettier'],
		extends: [
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:prettier/recommended',
			'prettier',
		],
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'import/no-unresolved': 'off',
			'no-console': 'warn',
			'no-shadow': 'off',
			'no-unused-vars': 'off',
			'no-use-before-define': 'warn',
		},
	}),
	{
		languageOptions: {
			globals: globals.node,
		},
	},
	includeIgnoreFile(gitignorePath),
]);
