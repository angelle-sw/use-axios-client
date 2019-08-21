import React, { useState } from 'react';
import UseAxiosBasic from './useAxios/Basic';
import UseLazyAxiosBasic from './useLazyAxios/Basic';
import UseLazyAxiosCancel from './useLazyAxios/Cancel';
import UseLazyAxiosUnmount from './useLazyAxios/Unmount';

export default () => {
  const [mount, setMount] = useState(true);
  return (
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

      <div style={{ marginBottom: 50 }}>
        {mount && (
          <>
            <h2>useLazyAxios unmount</h2>
            <UseLazyAxiosUnmount />
          </>
        )}
        <button type="button" onClick={() => setMount(!mount)}>
          toggle mount
        </button>
      </div>

      <div style={{ marginBottom: 50 }}>
        <h2>useLazyAxios with Cancel</h2>
        <UseLazyAxiosCancel />
      </div>
    </>
  );
};
