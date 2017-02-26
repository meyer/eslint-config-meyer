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
    'standard',
    'plugin:react/recommended',
  ],

  plugins: [
    'json',
    'react',
  ],

  globals: {},

  rules: {
    'keyword-spacing': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'comma-dangle': [1, 'always-multiline'],
    'no-console': [1, {
      allow: [
        'error',
        'info',
        'warn',
      ],
    }],

    'no-var': 1,
    'object-shorthand': 1,
    'prefer-const': 1,

    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-max-props-per-line': [2, {maximum: 3}],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/react-in-jsx-scope': 2,
    'react/no-danger': 1,
    'react/prop-types': 1,
  },
}
