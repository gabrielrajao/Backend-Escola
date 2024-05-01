module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
