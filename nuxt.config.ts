import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
});
