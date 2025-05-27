//eslint.config.mjs
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      next,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
    },
  },
];
