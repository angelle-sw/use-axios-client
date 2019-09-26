import React, { useState } from 'react';
import { useAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [num, setNum] = useState('1');

  const { data, error, loading } = useAxios<Data>({
    url: `https://reqres.in/api/things/${num}`,
  });

  return (
    <>
      {loading && 'Loading...'}
      {error && error}
      {data && !loading && (
        <>
          <div>
            {data.data.name}
            {': '}
            {data.data.color}
          </div>
          <button
            type="button"
            onClick={() => {
              setNum('1');
            }}
          >
            1
          </button>
          <button
            type="button"
            onClick={() => {
              setNum('2');
            }}
          >
            2
          </button>
          <button
            type="button"
            onClick={() => {
              setNum('3');
            }}
          >
            3
          </button>
        </>
      )}
    </>
  );
};
