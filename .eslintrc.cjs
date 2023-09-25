module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './commitlint.config.cjs',
      './lint-staged.config.cjs',
    ],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    //disable rule of space before function parentheses
    'space-before-function-paren': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        ignoreRestSiblings: true,
      },
    ],
  },
}
