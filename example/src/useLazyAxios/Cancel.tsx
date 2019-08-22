import React from 'react';
import { useLazyAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const [getData, { cancel, data, error, loading }] = useLazyAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  return (
    <>
      {loading && 'Loading...'}
      {error && error.message}
      {data && !loading && <div>{data.description}</div>}
      <button type="button" disabled={loading} onClick={getData}>
        get data
      </button>
      <button type="button" disabled={!loading} onClick={cancel}>
        cancel request
      </button>
    </>
  );
};
