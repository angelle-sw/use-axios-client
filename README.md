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
  const { data, error, loading } = useFetch('https://example/api');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return {
    <>
      {data && <div>{data}</div>
    </>
  }
};
```

### `useLazyFetch`

```js
import { useLazyFetch } from 'use-fetch-hooks';

export default () => {
  const [getData, { data, error, loading }] = useLazyFetch(
    'https://example/api'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return {
    <>
      {data && <div>{data}</div>}
      <button onClick={getData}>get data</button>
    </>
  }
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
