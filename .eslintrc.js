module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    'build',
    '.eslintrc.js',
    'docusaurus.config.ts',
    'tailwind.config.js',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {},
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules'],
      },
      typescript: {},
    },
  },
  overrides: [],
}
