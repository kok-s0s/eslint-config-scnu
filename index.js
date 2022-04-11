module.exports = {
	globals: {
		MyGlobal: true,
	},
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/react',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: '12',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
	rules: {
		'linebreak-style': 0,
		'no-use-before-define': 'warn',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		// 忽略导入规则，以实际项目优先
		'import/extensions': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
			},
		],
		'max-len': [
			'warn',
			{
				code: 80,
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
	},
	settings: {},
}
