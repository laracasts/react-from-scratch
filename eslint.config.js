import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["dist", "build", "node_modules", ".git", "*.min.js"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // React core rules
      "react/jsx-uses-react": "off", // Not needed with React 18+ and automatic JSX transform
      "react/react-in-jsx-scope": "off", // Not needed with React 18+ and automatic JSX transform
      "react/no-unknown-property": ["error", { ignore: [] }], // Catches class vs className
      "react/prop-types": "off", // Use TypeScript for prop validation instead
      "react/jsx-key": "error", // Required key prop in iterators
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error", // Enforce PascalCase for components
      "react/no-array-index-key": "warn", // Warn when using array index as key
      "react/no-direct-mutation-state": "error",
      "react/no-unsafe": "error", // Prevent unsafe lifecycle methods
      "react/self-closing-comp": "error", // Enforce self-closing tags
      "react/display-name": "warn",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import rules
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/no-duplicates": "error",
      "import/no-cycle": "warn",

      // General JavaScript rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "prefer-const": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-var": "error",
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
  { extends: ["plugin:react/recommended"] },
  // Add TypeScript specific config if using TypeScript
  // ...typescriptEslint.configs.recommended
];