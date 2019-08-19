import React from 'react';
import { useFetch } from '../../../src';

export default () => {
  const { data, loading, error } = useFetch('https://reqres.in/api/things/1');

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
