import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "pathe";

export default defineNuxtConfig({
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

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
      database: true,
    },
  },
});
