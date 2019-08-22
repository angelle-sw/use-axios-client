import React, { useState } from 'react';
import { useAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [first, setFirst] = useState(true);
  const { data, error, loading, refetch } = useAxios<Data>(
    'https://reqres.in/api/things/1'
  );

  if (first) {
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
                setFirst(false);
              }}
            >
              Retry
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {loading && 'Loading...'}
      {error && error}
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
