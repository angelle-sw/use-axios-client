import React from 'react';
import { useLazyFetch } from 'use-fetch-hooks';

export default () => {
  const [getData, { data, loading, error }] = useLazyFetch('https://reqres.in/api/things/1');

  return (
    <div style={{ marginBottom: 50 }}>
      <h2>useLazyFetch</h2>

      {loading && (
        <div>Loading...</div>
      )}

      {error && (
        <div>{error.message}</div>
      )}

      {data && (
        <div>{data.data.name}: {data.data.color}</div>
      )}

      <button onClick={getData}>get data</button>
    </div>
  );
};