import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "pathe";

export default defineNuxtConfig({
  hub: {
    database: true,
  },

  $development: {
    hub: {
      remote: true
    }
  },

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },
  ssr: false,

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
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
    },
  },
});
