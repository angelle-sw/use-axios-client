import React from 'react';
import { useAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const { data, error, loading } = useAxios<Data>('https://reqres.in/api/things/1');

  return (
    <>
      {loading && 'Loading...'}
      {error && error}
      {data && !loading && (
        <div>
          {data.data.name}
          {': '}
          {data.data.color}
        </div>
      )}
    </>
  );
};
