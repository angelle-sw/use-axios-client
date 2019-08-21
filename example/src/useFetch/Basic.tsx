import React from 'react';
import { useFetch } from 'use-fetch-hooks';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const { data, error, loading } = useFetch<Data>(
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
    </>
  );
};
