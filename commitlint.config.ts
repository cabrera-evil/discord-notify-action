const config = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-atom',
	formatter: '@commitlint/format',
	rules: {
		'subject-case': [2, 'never'],
	},
};

export default config;
