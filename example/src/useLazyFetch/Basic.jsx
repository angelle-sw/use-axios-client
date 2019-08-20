import React from 'react';
import { useLazyFetch } from '../../../src';

export default () => {
  const [getData, { data, error, loading }] = useLazyFetch(
    'https://reqres.in/api/things/1'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
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
