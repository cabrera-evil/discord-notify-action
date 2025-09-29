/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: 'es5',
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	arrowParens: 'always',
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'strict',
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	plugins: ['prettier-plugin-organize-imports'],
};

export default config;
