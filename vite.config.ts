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
      // Peer and runtime dependencies stay imports, so an app ships one copy of each
      external: [
        "vue",
        /^@vue\//,
        /^@fortawesome\//,
        /^@headlessui\//,
        /^@floating-ui\//,
        /^@vueuse\//,
        "uuid",
      ],
      output: {
        globals: {
          vue: "Vue",
          "@headlessui/vue": "HeadlessUIVue",
          "@floating-ui/vue": "FloatingUIVue",
          "@vueuse/core": "VueUse",
          uuid: "uuid",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});
