import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImports,
  logger
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'
import type { PublicConfig } from './runtime/types'

export interface ModuleOptions extends PublicConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'apollo',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    httpEndpoint: '',
    credentials: 'same-origin',
    proxyCookies: true
  },

  setup (options, nuxt) {
    if (!options.httpEndpoint) {
      logger.warn('[nuxt-apollo] Please make sure to set httpEndpoint')
    }

    const { resolve } = createResolver(import.meta.url)

    if (options.wsEndpoint) {
      const client = resolve('./runtime/plugins/apolloWithWs.client')
      const server = resolve('./runtime/plugins/apolloWithWs.server')
      addPlugin(client)
      addPlugin(server)
    } else {
      const universal = resolve('./runtime/plugins/apolloWithoutWs')
      addPlugin(universal)
    }

    nuxt.options.runtimeConfig = defu(
      nuxt.options.runtimeConfig,
      {
        app: {},
        public: {
          apollo: {
            httpEndpoint: options.httpEndpoint,
            wsEndpoint: options.wsEndpoint,
            credentials: options.credentials,
            proxyCookies: options.proxyCookies
          }
        }
      }
    )

    const apolloComposables = [
      'useQuery',
      'useMutation',
      'useSubscription',
      'useLazyQuery',
      'useApolloClient',
      'useQueryLoading',
      'useMutationLoading',
      'useSubscriptionLoading',
      'useGlobalQueryLoading',
      'useGlobalMutationLoading',
      'useGlobalSubscriptionLoading'
    ]

    apolloComposables.forEach((name) => {
      addImports({
        name,
        as: name,
        from: '@vue/apollo-composable'
      })
    })

    addImports({
      name: 'gql',
      as: 'gql',
      from: 'graphql-tag'
    })
  }
})
