/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
  env: {
    node: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["*.test.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};
