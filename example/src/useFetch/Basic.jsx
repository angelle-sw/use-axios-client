import React from 'react';
import { useFetch } from '../../../src';

export default () => {
  const { data, error, loading } = useFetch('https://reqres.in/api/things/1');

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
