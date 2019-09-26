import React from 'react';
import { useLazyAxios } from '../../../src';

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios({
    url: 'https://reqres.in/api/users',
    method: 'POST',
  });

  const lazyData = {
    name: 'morpheus',
    job: 'leader',
  };

  return (
    <>
      {loading && 'Loading...'}
      {error && error.message}
      {data && !loading && <div>POST Successful</div>}
      <button type="button" disabled={loading} onClick={() => getData(lazyData)}>
        get data
      </button>
    </>
  );
};
