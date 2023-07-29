import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createClient } from "graphql-ws";
import { HttpLink, split } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { DefaultApolloClient } from "@vue/apollo-composable";
import ws from "ws";
import { setContext } from "@apollo/client/link/context";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.apollo;

  const httpLink = new HttpLink({
    uri: config.httpEndpoint,
  });

  const authLink = setContext(async (_, { headers }) => {
    const args = { token: "" };
    await nuxtApp.callHook("apollo:http-auth", args);
    return {
      headers: {
        ...headers,
        authorization: args.token ? `Bearer ${args.token}` : "",
      },
    };
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: config.wsEndpoint,
      webSocketImpl: ws,
      connectionParams: async () => {
        const args = { params: {} };
        await nuxtApp.callHook("apollo:ws-auth", args);
        return args.params;
      },
    })
  );

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
