import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import globals from 'globals';

export default tseslint.config(
	{
		ignores: ['dist/**', 'node_modules/**']
	},
	{
		files: ['src/**/*.ts'],
		...eslint.configs.recommended,
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
			globals: {
				...globals.node
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'@stylistic/ts': stylisticTs
		},
		rules: {
			'require-atomic-updates': 'warn',
			'no-case-declarations': 'off',
			'no-empty': 'off',
			'no-console': 'off',
			'linebreak-style': 'off',
			'no-global-assign': 'off',
			'prefer-const': 'error',
			'no-var': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					'argsIgnorePattern': '^_'
				}
			],
			'no-extra-semi': 'off',
			'@stylistic/ts/no-extra-semi': 'error',
			'@typescript-eslint/no-empty-interface': 'warn',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'one-var': [
				'error',
				'never'
			],
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],
			quotes: [
				'error',
				'single'
			],
			semi: [
				'error',
				'always'
			]
		},
	}
);