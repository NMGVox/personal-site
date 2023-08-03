module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    quotes: 'off',
    "import/no-extraneous-dependencies": [
      "warn", {
          bundledDependencies: false,
      },
    ],
    'no-console': 'off',
  },
};
