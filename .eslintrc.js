module.exports = {
  root: true,
  env: {
    node: true
  },
  // plugins: ["vue"],
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off']

  }
}
