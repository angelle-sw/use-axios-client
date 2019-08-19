import React from 'react';
import Container from './Container';
import UseFetchBasic from './useFetch/Basic';
import UseFetchSuspense from './useFetch/Suspense';
import UseLazyFetchBasic from './useLazyFetch/Basic';

export default () => (
  <>
    <h1>
      <a href="https://github.com/angelle-sw/use-fetch-hooks">
        use-fetch-hooks
      </a>
    </h1>

    <Container title="useFetch (Basic)">
      <UseFetchBasic />
    </Container>

    <Container title="useFetch (Suspense)">
      <React.Suspense fallback="Loading...">
        <UseFetchSuspense />
      </React.Suspense>
    </Container>

    <Container title="useLazyFetch (Basic)">
      <UseLazyFetchBasic />
    </Container>
  </>
);
