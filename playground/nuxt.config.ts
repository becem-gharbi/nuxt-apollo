export default defineNuxtConfig({
  modules: ["../src/module"],
  apollo: {
    httpEndpoint: "http://127.0.0.1:8055/graphql",
    wsEndpoint: "ws://127.0.0.1:8055/graphql",
  },
  devtools: { enabled: true },
});
