import React from 'react';
import { useFetch } from 'use-fetch-hooks';

export default () => {
  const { data, loading, error } = useFetch('https://reqres.in/api/things/1');

  return (
    <div style={{ marginBottom: 50 }}>
      <h2>useFetch</h2>

      {loading && (
        <div>Loading...</div>
      )}

      {error && (
        <div>{error.message}</div>
      )}

      {data && (
        <div>{data.data.name}: {data.data.color}</div>
      )}
    </div>
  );
};