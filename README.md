<div align="center">
<h1>use-axios-client</h1>

<a href="https://www.emojione.com/emoji/1f3a3">
  <img
    height="80"
    width="80"
    alt="hook"
    src="hook_emoji.png"
  />
</a>

<p>Make axios requests in React using hooks.</p>

[Docs](https://use-axios-client.io/)

</div>
<hr />

[![CircleCI](https://circleci.com/gh/angelle-sw/use-axios-client.svg?style=shield)](https://circleci.com/gh/angelle-sw/use-axios-client) [![codecov](https://codecov.io/gh/angelle-sw/use-axios-client/branch/master/graph/badge.svg)](https://codecov.io/gh/angelle-sw/use-axios-client) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Installation

with npm:

```sh
$ npm install use-axios-client
```

with yarn:

```sh
$ yarn add use-axios-client
```

## Usage

### `useAxios`

```js
import { useAxios } from 'use-axios-client';

export default () => {
  const { data, error, loading } = useAxios({
    url: 'https://example/api',
  });

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>{data}</div>}
    </>
  );
};
```

### `useLazyAxios`

```js
import { useLazyAxios } from 'use-axios-client';

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios({
    url: 'https://example/api',
  });

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

### with TypeScript

```ts
import { useAxios } from 'use-axios-client';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const { data, error, loading } = useAxios<Data>({
    url: 'https://example/api',
  });

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <div>
          {data.data.name}
          {': '}
          {data.data.color}
        </div>
      )}
    </>
  );
};
```

## Contributing

Install dependencies:

```sh
$ yarn
```

Run the example app at [http://localhost:8080](http://localhost:8080):

```sh
$ cd example
$ yarn
$ yarn start
```

Run tests using [jest](https://github.com/facebook/jest):

```sh
$ yarn test
```

## License

MIT
