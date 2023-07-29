import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin({
  enforce: "pre",
  hooks: {
    "apollo:auth": async () => {
      console.log("calling hook");
      return "my_token";
    },
  },
});
