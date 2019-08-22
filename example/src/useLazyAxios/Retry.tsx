import React, { useState } from 'react';
import { useLazyAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [called, setCalled] = useState(false);
  const [getData, { data, error, loading, refetch }] = useLazyAxios<Data>({
    url: 'https://reqres.in/api/things/1',
  });

  if (!called) {
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
        <button
          type="button"
          disabled={loading}
          onClick={() => {
            getData();
            setCalled(true);
          }}
        >
          get data
        </button>
      </>
    );
  }

  return (
    <>
      {loading && 'Loading...'}
      {(error || data) && (
        <div>
          <span>Error!</span>
          <button
            type="button"
            onClick={() => {
              refetch();
              setCalled(false);
            }}
          >
            Retry
          </button>
        </div>
      )}
    </>
  );
};
