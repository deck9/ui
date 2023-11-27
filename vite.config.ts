import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ui",
      fileName: "src/ui",
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/vue-fontawesome",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});
