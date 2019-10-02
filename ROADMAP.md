# Roadmap

This is a roadmap of future features in consideration for `use-axios-client`, along with some rough API designs.

- [Caching](#caching)
- [Server-side rendering](#server-side-rendering)
- [Suspense](#suspense)

## Caching

Provide an optional `cachePolicy` field on hooks to allow consumers to selectively optimize network requests. This entry can be keyed by something like `url` + stringified `data`.

We can persist the cache to a singleton that all hooks can read/write from.

### `no-cache` (default)

Always fire network call for `data` (default):

```js
const { data, error, loading } = useAxios({
  url: 'https://example/api',
  cachePolicy: 'no-cache',
});
```

### `in-memory`

Pull `data` from in-memory cache if it exists, otherwise fire network call:

```js
const { data, error, loading } = useAxios({
  url: 'https://example/api',
  cachePolicy: 'in-memory',
});
```

### `in-memory-first`

Pull `data` from in-memory cache if it exists, then fire network call:

```js
const { data, error, loading } = useAxios({
  url: 'https://example/api',
  cachePolicy: 'in-memory-first',
});
```

### `localStorage`

Persist and pull `data` from local storage:

```js
const { data, error, loading } = useAxios({
  url: 'https://example/api',
  cachePolicy: 'localStorage',
});
```

### `sessionStorage`

Persist and pull `data` from session storage:

```js
const { data, error, loading } = useAxios({
  url: 'https://example/api',
  cachePolicy: 'sessionStorage',
});
```

## Server-side rendering

## Suspense
