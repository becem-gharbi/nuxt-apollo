export default defineNuxtConfig({
  modules: ["../src/module"],
  apollo: {
    wsEndpoint: "/",
  },
  devtools: { enabled: true },
});
