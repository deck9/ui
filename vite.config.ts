import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        typescript({
          tsconfig: "./tsconfig.json",
        }),
      ],
    },
  },
});
