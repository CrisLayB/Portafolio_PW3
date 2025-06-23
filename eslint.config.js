import globals from "globals";
import pluginJs from "@eslint/js";
// Importa directamente la configuración recomendada con la extensión .js
import reactRecommended from "eslint-plugin-react/configs/recommended.js"; // <-- ¡CORRECCIÓN APLICADA!
import pluginReact from "eslint-plugin-react"; // Se mantiene para la propiedad 'plugins'
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    // Define archivos a ignorar
    ignores: ["dist/", "node_modules/", ".vite/", "package-lock.json"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // Usamos 'react' directamente del plugin
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      // Usamos la configuración recomendada de React importada directamente:
      ...reactRecommended.rules,
      ...pluginJsxA11y.configs.recommended.rules, // Reglas de accesibilidad de JSX
      ...configPrettier.rules, // Deshabilita reglas de ESLint que puedan entrar en conflicto con Prettier

      // Reglas específicas de React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Reglas que sobrescribimos o añadimos
      "react/react-in-jsx-scope": "off", // No es necesario con React 17+ y el nuevo JSX transform
      "react/prop-types": "off", // Deshabilita si usas TypeScript o validación de props diferente
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Advierte sobre variables no usadas
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: false,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],
      "react/display-name": "off", // Aseguramos que esta regla esté desactivada si aún se esperara
    },
  },
];