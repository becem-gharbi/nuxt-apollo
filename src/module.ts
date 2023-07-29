import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addImports,
} from "@nuxt/kit";
import { name, version } from "../package.json";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  httpEndpoint: string;
  wsEndpoint?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: name,
    version: version,
    configKey: "apollo",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },

  // Default configuration options of the Nuxt module
  defaults: {
    httpEndpoint: "",
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    if (options.wsEndpoint) {
      const client = resolve("./runtime/plugins/apolloWithWs.client");
      const server = resolve("./runtime/plugins/apolloWithWs.server");
      addPlugin(client);
      addPlugin(server);
    } else {
      const universal = resolve("./runtime/plugins/apolloWithoutWs");
      addPlugin(universal);
    }

    const composables = resolve("./runtime/composables");
    addImportsDir(composables);

    nuxt.options.runtimeConfig.public.apollo = defu(
      nuxt.options.runtimeConfig.public.apollo,
      {
        httpEndpoint: options.httpEndpoint,
        wsEndpoint: options.wsEndpoint,
      }
    );

    // const apolloComposables = ["useQuery", "useMutation", "useSubscription"];

    // apolloComposables.forEach((name) => {
    //   addImports({
    //     name: name,
    //     as: name,
    //     from: "@vue/apollo-composable",
    //   });
    // });
  },
});
