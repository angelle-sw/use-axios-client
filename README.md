# use-fetch-hooks

Make HTTP requests in React using hooks.

## Installation

```sh
$ npm install use-fetch-hooks
```

## Usage

### `useFetch`

```js
import { useFetch } from 'use-fetch-hooks';

export default () => {
  const { data, loading, error } = useFetch('https://example/api');

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>{data}</div>}
    </>
  );
};
```

### `useFetch` (with Suspense)

```js
import { useFetch } from 'use-fetch-hooks';

const Child = () => {
  const { data } = useFetch('https://example/api', { suspense: true });

  return <div>{data}</div>;
};

const Parent = () => (
  <React.Suspense fallback="Loading...">
    <Child />
  </React.Suspense>
);
```

### `useLazyFetch`

```js
import { useLazyFetch } from 'use-fetch-hooks';

export default () => {
  const [getData, { data, loading, error }] = useLazyFetch(
    'https://example/api'
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>{data}</div>}

      <button onClick={getData}>get data</button>
    </>
  );
};
```

## Contributing

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:8080](http://localhost:8080):

```
$ cd example
$ npm install
$ npm start
```

Run tests using [jest](https://github.com/facebook/jest):

```
$ npm test
```

## License

MIT
