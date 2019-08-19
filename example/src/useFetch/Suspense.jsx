import React from 'react';
import { useFetch } from '../../../src';

export default () => {
  const { data } = useFetch('https://reqres.in/api/things/1', {
    suspense: true,
  });

  return (
    <div>
      {data.data.name}
      {': '}
      {data.data.color}
    </div>
  );
};
