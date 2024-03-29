/* eslint no-undef: "off" */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'import',
    'jsx-a11y',
  ],
  rules: {
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'import/extensions': ['error', 'never', {
      ignorePackages: true,
    }],
    'consistent-return': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-promise-executor-return': 'off',
    'no-return-await': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/function-component-definition': ['error',
      { namedComponents: ['function-declaration', 'arrow-function'] }],
  },
};
