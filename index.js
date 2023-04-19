// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    // this needs to be set by the user
    // project: 'path/to/tsconfig.json',
  },

  env: {
    es6: true,
    node: true,
  },

  extends: ["eslint:recommended", "plugin:import/recommended"],

  rules: {
    "no-prototype-builtins": "off",
  },

  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
      browser: true,
    },
  },

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      plugins: ["@typescript-eslint", "simple-import-sort"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/sort-type-constituents": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      files: ["**/*.tsx"],
      extends: ["plugin:react/recommended"],
      rules: {
        // TypeScript will manage this with the `jsx` option in tsconfig
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
