import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  {
    ignores: ["dist", "node_modules"],
  }
];
