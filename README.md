# Nuxt Apollo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Apollo Client for Nuxt 3

## Features

- ✔️ Based on the latest [Vue Apollo](https://v4.apollo.vuejs.org/) plugin
- ✔️ SSR support
- ✔️ Graphql subscription via Websockets
- ✔️ Authorization via built-in hooks
- ✔️ Conditional import of Websockets dependencies
- ✔️ Simple implementation

## Quick Setup

1. Add `nuxt-apollo` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-apollo

# Using yarn
yarn add --dev nuxt-apollo

# Using npm
npm install --save-dev nuxt-apollo
```

2. Add `nuxt-apollo` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-apollo"],
  apollo: {
    httpEndpoint: "", // Required
    wsEndpoint: "", // Optional
  },
});
```

That's it! You can now use Nuxt Apollo in your Nuxt app ✨

## Usage

### APIs

The following APIs are auto-imported `useQuery` | `useMutation` | `useSubscription` | `gql`. Please refer to [Vue Apollo](https://v4.apollo.vuejs.org/) for API usage.

### Authorization

_HTTP_

The authorization for `useQuery` and `useMutation` can be handled via `apollo:http-auth` hook. The current supported method is JWT [(docs)](https://www.apollographql.com/docs/react/networking/authentication/#header).

```js
export default defineNuxtPlugin({
  enforce: "pre",
  hooks: {
    "apollo:http-auth": (args) => {
      args.token = "access_token";
    },
  },
});
```

_Websockets_

The authorization for `useSubscription` can be handled via `apollo:ws-auth` hook. The current supported method is connectionParams [(docs)](https://www.apollographql.com/docs/react/data/subscriptions/#5-authenticate-over-websocket-optional).

```js
export default defineNuxtPlugin({
  enforce: "pre",
  hooks: {
    "apollo:ws-auth": (args) => {
      args.params = {};
    },
  },
});
```

### GQL auto-completion

In order to benefit autocomplete suggestion when writing graphql queries, you can install [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) vscode extension.
Then create `graphql.config.js` at root and paste the config object below.

```js
module.exports = {
  projects: {
    app: {
      schema: [HTTP_ENDPOINT],
      documents: [
        "./pages/**/*.vue",
        "./components/**/*.vue",
        "./composables/**/*.ts",
        "./app.vue",
      ],
    },
  },
};
```

### Codegen

In order to benefit automatically typed Queries, Mutations and, Subscriptions, you can install [Graphql Code Generator](https://the-guild.dev/graphql/codegen/docs/guides/react-vue).

```bash
npm i -D @graphql-codegen/cli @graphql-codegen/client-preset @parcel/watcher
```

Then create `codegen.ts` at root and paste the config object below.

```js
const config = {
  schema: HTTP_ENDPOINT,
  documents: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./composables/**/*.ts",
    "./app.vue",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
```

Finally start GraphQL Code Generator in watch mode, this will type your GraphQL queries as you write them.

```bash
npx graphql-codegen --watch
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-apollo/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-apollo
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-apollo.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-apollo
[license-src]: https://img.shields.io/npm/l/nuxt-apollo.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-apollo
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
