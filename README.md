<br />

<div align="center">
<a href="https://use-axios-client.io">
  <img
    width="353"
    alt="use-axios-client"
    src="https://www.dropbox.com/s/spy5oz3qz98pzza/use-axios-client.png?raw=1"
  />
</a>

<br />
<br />

<p>Make axios requests in React using hooks.</p>

[![CircleCI](https://circleci.com/gh/angelle-sw/use-axios-client.svg?style=shield)](https://circleci.com/gh/angelle-sw/use-axios-client) [![codecov](https://codecov.io/gh/angelle-sw/use-axios-client/branch/master/graph/badge.svg)](https://codecov.io/gh/angelle-sw/use-axios-client) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

</div>

## Installation

with npm:

```sh
$ npm install use-axios-client
```

with yarn:

```sh
$ yarn add use-axios-client
```

## Example

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

## Docs

- [Getting Started](https://use-axios-client.io/)
- [useAxios](https://use-axios-client.io/use-axios)
- [useLazyAxios](https://use-axios-client.io/use-lazy-axios)
- [TypeScript](https://use-axios-client.io/typescript)

## Contributing

Clone the repository:

```sh
$ git clone https://github.com/angelle-sw/use-axios-client
```

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
