module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  plugins: [
    'react',
  ],

  globals: {},

  rules: {
    'indent': [2, 2],
    'jsx-quotes': [2, 'prefer-double'],
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'semi': [2, 'never'],

    'comma-dangle': [1, 'always-multiline'],
    'no-console': [1, {allow: ['error', 'info', 'warn', 'group', 'groupCollapsed', 'groupEnd']}],
    'no-unused-vars': 1,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-const': 1,

    'react/jsx-max-props-per-line': [2, {maximum: 3}],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 2,
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/react-in-jsx-scope': 2,

    'react/no-danger': 1,
    'react/no-did-mount-set-state': [1, 'allow-in-func'],
    'react/prop-types': 1,
  },
}
