import { defineNuxtConfig } from "nuxt3";
export default defineNuxtConfig({
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },
  ssr: true,
  store: true,
  modules: [],
  buildModules: [],
  components: [{ path: "@/components", pathPrefix: false }],
  plugins: [],
  css: [],
});
