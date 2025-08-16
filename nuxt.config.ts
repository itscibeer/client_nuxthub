import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "pathe";

export default defineNuxtConfig({
  hub: {
    database: true,
  },

  $development: {
    hub: {
      remote: true,
    },
  },

  $production: {
    hub: {
      remote: true,
    },
  },

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },
  ssr: true,

  alias: {
    "~": resolve(__dirname, "./"),
    "@": resolve(__dirname, "./"),
  },

  experimental: {
    payloadExtraction: false,
  },

  modules: ["@nuxthub/core"],

  runtimeConfig: {
    public: {
      apiBase: "https://client-dev.iplaycafe.workers.dev",
    },
  },
});
