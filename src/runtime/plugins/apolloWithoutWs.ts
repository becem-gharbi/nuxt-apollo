import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { setContext } from "@apollo/client/link/context";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.apollo;

  const httpLink = new HttpLink({
    uri: config.httpEndpoint,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await nuxtApp.callHook("apollo:auth");

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
