"use strict";

const { toTSRules } = require("../../helpers");

const commonRulesJS = {
  "no-unused-vars": "error",
  "no-use-before-define": "error",
  semi: [ "error", "always" ],

  // Sometimes API requires async function as callback, and you don't use await
  // in the function. In such case, it is difficult to follow require-await.
  "require-await": "off",
};

module.exports = {
  jsRules: {
    extends: [
      "eslint:recommended",
    ],
    rules: {
      ...commonRulesJS,

      // This rule also disallows "use strict"; in module-based code including TypeScript.
      // You can still add "use strict"; in each source TypeScript code,
      // so I enable this rule only for JavaScript
      strict: [ "error", "safe" ],
    },
  },
  tsRules: {
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
    },
    plugins: [ "@typescript-eslint" ],
    rules: {
      ...toTSRules(commonRulesJS),

      //
      // Errors
      //
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/explicit-function-return-type": [ "error", { allowExpressions: true }],

      //
      // Warnings
      //
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",

      //
      // Off
      //
      "@typescript-eslint/indent": "off", // avoid conflict against editorconfig/indent
      "@typescript-eslint/no-this-alias": "off",

      // These rules may warn new ES syntax which is supported by TypeScript (e.g. import)
      "node/no-unsupported-features/es-builtins": "off",
      "node/no-unsupported-features/es-syntax": "off",
    },
    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },
  },
};
