import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setContext } from '@apollo/client/link/context'
import type { PublicConfig } from '../types'
import { defineNuxtPlugin, useRequestHeaders } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public.apollo as PublicConfig

  const reqHeaders = useRequestHeaders(['cookie'])

  const httpLink = new HttpLink({
    uri: config.httpEndpoint,
    credentials: config.credentials,
    headers: config.proxyCookies ? reqHeaders : {}
  })

  const authLink = setContext(async (_, { headers }) => {
    const args = { authorization: undefined }
    await nuxtApp.callHook('apollo:http-auth', args)
    return {
      headers: {
        ...headers,
        authorization: args.authorization
      }
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
