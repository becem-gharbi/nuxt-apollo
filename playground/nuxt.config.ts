export default defineNuxtConfig({
  modules: ["../src/module"],
  apollo: {
    httpEndpoint:
      "http://127.0.0.1:8055/graphql?access_token=pT9Jm6MG5ajHjH1VQFtXLJYI1-8hsTO5",
    wsEndpoint:
      "ws://127.0.0.1:8055/graphql?access_token=pT9Jm6MG5ajHjH1VQFtXLJYI1-8hsTO5",
  },
  devtools: { enabled: true },
});
