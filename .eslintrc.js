module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // No formatting checks: templates wrap long class lists by hand, which Prettier would join into one line
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Components are named after their file (Button.vue) and exported with the D9 prefix
    "vue/multi-word-component-names": "off"
  },
  overrides: [
    {
      // Story exports get Storybook fields (args) their inferred type lacks
      files: ["*.stories.ts"],
      rules: { "@typescript-eslint/no-explicit-any": "off" }
    },
    {
      // Stubs for browser APIs that jsdom lacks may do nothing
      files: ["tests/**"],
      rules: { "@typescript-eslint/no-empty-function": "off" }
    }
  ],
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly"
  }
};
