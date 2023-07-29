import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
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
      const plugin = resolve("./runtime/plugins/apolloWithWs.ts");
      addPlugin(plugin);
    } else {
      const plugin = resolve("./runtime/plugins/apolloWithoutWs.ts");
      addPlugin(plugin);
    }

    const composables = resolve("runtime/composables");
    addImportsDir(composables);

    nuxt.options.runtimeConfig.public.apollo = defu(
      nuxt.options.runtimeConfig.public.apollo,
      {
        httpEndpoint: options.httpEndpoint,
        wsEndpoint: options.wsEndpoint,
      }
    );
  },
});
