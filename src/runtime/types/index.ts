declare module '#app' {
  interface RuntimeNuxtHooks {
    'apollo:http-auth': (args: { authorization: string | null | undefined }) => void;
    'apollo:ws-auth': (args: { params: Record<string, string> }) => void;
  }
}

export interface PublicConfig {
    httpEndpoint: string;
    wsEndpoint?: string;
    credentials?: 'same-origin' | 'include' | 'omit',
    proxyCookies?: boolean;
}
