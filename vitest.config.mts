import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// Own config, so tests don't inherit the library build settings in vite.config.ts
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
});
