import React from 'react';
import { useLazyFetch } from '../../../src';

export default () => {
  const [getData, { data, loading, error }] = useLazyFetch(
    'https://reqres.in/api/things/1'
  );

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

      <button type="button" onClick={getData}>
        get data
      </button>
    </>
  );
};
