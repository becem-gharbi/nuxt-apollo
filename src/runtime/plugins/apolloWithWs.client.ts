import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createClient } from "graphql-ws";
import { HttpLink, split } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.apollo;

  const httpLink = new HttpLink({
    uri: config.httpEndpoint,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: config.wsEndpoint,
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
    httpLink
  );

  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});