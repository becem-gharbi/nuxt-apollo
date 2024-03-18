# Changelog


## v0.2.0

[compare changes](https://github.com/becem-gharbi/nuxt-apollo/compare/v0.1.3...v0.2.0)

### 🚀 Enhancements

- Add `credentials` option for cookie-base auth ([27e6553](https://github.com/becem-gharbi/nuxt-apollo/commit/27e6553))
- Add `proxyCookies` options for cookie-based auth in SSR ([b397d62](https://github.com/becem-gharbi/nuxt-apollo/commit/b397d62))

### 💅 Refactors

- ⚠️  Replace `token` with `authorization` on `apollo:http-auth` hook ([9261191](https://github.com/becem-gharbi/nuxt-apollo/commit/9261191))

### 📖 Documentation

- Update Readme ([5da061d](https://github.com/becem-gharbi/nuxt-apollo/commit/5da061d))

### 🏡 Chore

- **playground:** Add `useAsyncQuery` composable ([b57b607](https://github.com/becem-gharbi/nuxt-apollo/commit/b57b607))
- **lint:** Fix ([354538e](https://github.com/becem-gharbi/nuxt-apollo/commit/354538e))
- Add typecheck on release ([94e4b5f](https://github.com/becem-gharbi/nuxt-apollo/commit/94e4b5f))

#### ⚠️ Breaking Changes

- ⚠️  Replace `token` with `authorization` on `apollo:http-auth` hook ([9261191](https://github.com/becem-gharbi/nuxt-apollo/commit/9261191))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.1.3

[compare changes](https://github.com/becem-gharbi/nuxt-apollo/compare/v0.1.1...v0.1.3)

### 🩹 Fixes

- Auto import all vue-apollo composables ([d5a634b](https://github.com/becem-gharbi/nuxt-apollo/commit/d5a634b))

### 📖 Documentation

- Fix badge ([5b0f3fe](https://github.com/becem-gharbi/nuxt-apollo/commit/5b0f3fe))
- Add known issue section ([f8a1dd7](https://github.com/becem-gharbi/nuxt-apollo/commit/f8a1dd7))
- **README:** Remove fixed npm installation issue ([8a4d5c2](https://github.com/becem-gharbi/nuxt-apollo/commit/8a4d5c2))

### 🏡 Chore

- **release:** V0.1.2 ([b895e66](https://github.com/becem-gharbi/nuxt-apollo/commit/b895e66))
- No significant change ([ebff6d7](https://github.com/becem-gharbi/nuxt-apollo/commit/ebff6d7))
- **package.json:** Replace `repository` with `repository.url` ([3d879b1](https://github.com/becem-gharbi/nuxt-apollo/commit/3d879b1))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem Gharbi <becem.gharbi@live.com>

## v0.1.2

[compare changes](https://undefined/undefined/compare/v0.1.1...v0.1.2)

### 🩹 Fixes

- Auto import all vue-apollo composables (d5a634b)

### 📖 Documentation

- Fix badge (5b0f3fe)
- Add known issue section (f8a1dd7)

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v0.1.1


### 🚀 Enhancements

- Add apollo client with websockets (0547a30)
- Add useApolloQuery composable (35e9c15)
- Provide Apollo client without websockets (3255d73)
- Add apollo:auth hook for passing authorization header (774d18f)
- Auto import Apollo composables (e2bb00b)
- Auto import gql (b8c8288)
- Add ws-auth hook for passing websocket auth params (410db6f)

### 🩹 Fixes

- Fix unresolved ws dep client side (74f5ed1)
- Pass values via args in hooks (1ba5358)

### 📖 Documentation

- Update README (5716eaa)

### 🏡 Chore

- Set module file structure and imports (fb56b65)
- Install apollo dependencies (0503853)
- Add warning on unset httpEndpoint (298373e)

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>

