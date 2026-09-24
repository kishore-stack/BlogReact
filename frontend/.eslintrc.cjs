module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "eslint:recommended",
  ],

  plugins: [
    "react-hooks",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "no-unused-vars": "warn",

    "react-hooks/rules-of-hooks": "error",

    "react-hooks/exhaustive-deps": "warn",
  },
};