import React from 'react';
import { useLazyFetch } from 'use-fetch-hooks';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [getData, { data, error, loading }] = useLazyFetch<Data>({
    url: 'https://reqres.in/api/things/1',
  });

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
