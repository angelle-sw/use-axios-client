import React, { useState } from 'react';
import { useLazyAxios } from '../../../src';

export default () => {
  const [name, setName] = useState('');

  const [getData, { data, error, loading }] = useLazyAxios({
    url: 'https://reqres.in/api/users',
    method: 'POST',
  });

  return (
    <>
      {loading && 'Loading...'}
      {error && error.message}
      {data && !loading && <div>POST Successful</div>}
      {!data && !error && !loading && (
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </label>
      )}
      <button type="button" disabled={loading} onClick={() => getData({ name })}>
        get data
      </button>
    </>
  );
};
