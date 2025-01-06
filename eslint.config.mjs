import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      '**/.husky/**',
      '**/coverage/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/public/**',
      '*.d.ts',
      '*.env*',
      '.prettierignore',
      '.prettierrc',
      'commitlint.config.ts',
      'eslint.config.*',
    ],
  },
  {
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      // Import/export rules
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/no-absolute-path': 'off',
      'import/export': 'off',
      'global-require': 'off',
      // Custom JavaScript rules
      'no-use-before-define': 'warn',
      'no-shadow': 'off',
    },
  },
];
