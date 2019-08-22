import React, { useState } from 'react';
import { UseAxiosBasic, UseAxiosCancel, UseAxiosRetry } from './useAxios';
import {
  UseLazyAxiosBasic,
  UseLazyAxiosCancel,
  UseLazyAxiosRetry,
  UseLazyAxiosUnmount,
} from './useLazyAxios';

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
        <h2>useAxios with Cancel</h2>
        <UseAxiosCancel />
      </div>

      <div style={{ marginBottom: 50 }}>
        <h2>useAxios with Retry</h2>
        <UseAxiosRetry />
      </div>

      <div style={{ marginBottom: 50 }}>
        <h2>useLazyAxios</h2>
        <UseLazyAxiosBasic />
      </div>

      <div style={{ marginBottom: 50 }}>
        {mount && (
          <>
            <h2>useLazyAxios Unmount</h2>
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

      <div style={{ marginBottom: 50 }}>
        <h2>useLazyAxios with Retry</h2>
        <UseLazyAxiosRetry />
      </div>
    </>
  );
};
