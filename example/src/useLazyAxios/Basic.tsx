import React from 'react';
import { useLazyAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios<Data>({
    url: 'https://reqres.in/api/things/1',
  });

  return (
    <>
      {loading && 'Loading...'}
      {error && error.message}
      {data && !loading && (
        <div>
          {data.data.name}
          {': '}
          {data.data.color}
        </div>
      )}
      <button type="button" disabled={loading} onClick={getData}>
        get data
      </button>
    </>
  );
};
