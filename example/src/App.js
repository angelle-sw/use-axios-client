import React from 'react';
import UseFetchBasic from './useFetch/Basic';
import UseLazyFetchBasic from './useLazyFetch/Basic';

export default () => (
  <>
    <h1>
      <a href="https://github.com/angelle-sw/use-fetch-hooks">
        use-fetch-hooks
      </a>
    </h1>

    <UseFetchBasic />
    <UseLazyFetchBasic />
  </>
);
