export default defineNuxtConfig({
  ssr: true,
  modules: ['../src/module'],
  apollo: {
    httpEndpoint: 'https://spacex-production.up.railway.app',
    wsEndpoint: 'wss://spacex-production.up.railway.app',
  },
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },
})
