import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin({
  enforce: "pre",
  hooks: {
    "apollo:http-auth": async () => {
      return "my_token";
    },
    "apollo:ws-auth": async () => {
      return {
        access_token: "my_token",
      };
    },
  },
});
