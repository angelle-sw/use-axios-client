# use-axios-client

Make HTTP requests in React using hooks.

## Installation

```sh
$ npm install use-axios-client
```

## Usage

### `useAxios`

```js
import { useAxios } from 'use-axios-client';

export default () => {
  const { data, error, loading } = useAxios({
    url: 'https://example/api'
  });

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

### `useLazyAxios`

```js
import { useLazyAxios } from 'use-axios-client';

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios({
    url: 'https://example/api'
  });

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
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
