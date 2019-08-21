import React from 'react';
import UseAxiosBasic from './useAxios/Basic';
import UseLazyAxiosBasic from './useLazyAxios/Basic';

export default () => (
  <>
    <h1>
      <a href="https://github.com/angelle-sw/use-axios-client">
        use-axios-client
      </a>
    </h1>

    <div style={{ marginBottom: 50 }}>
      <h2>useAxios</h2>
      <UseAxiosBasic />
    </div>

    <div style={{ marginBottom: 50 }}>
      <h2>useLazyAxios</h2>
      <UseLazyAxiosBasic />
    </div>
  </>
);
