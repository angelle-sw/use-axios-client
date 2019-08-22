import React from 'react';
import { useAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const { cancel, data, error, loading, refetch } = useAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  return (
    <>
      {loading && (
        <div>
          <span>Loading...</span>
          <button type="button" disabled={!loading} onClick={cancel}>
            cancel request
          </button>
        </div>
      )}
      {error && (
        <div>
          <span>{error.message}</span>
          <button
            type="button"
            onClick={() => {
              refetch();
            }}
          >
            Retry
          </button>
        </div>
      )}
      {data && !loading && <div>{data.description}</div>}
    </>
  );
};
