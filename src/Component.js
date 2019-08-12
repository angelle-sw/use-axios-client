import React from 'react';
import { useFetch, useLazyFetch } from './index';

export default () => {
  const { data, error, loading } = useFetch({
    method: 'get',
    url: '/test',
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div>Hello World</div>;
};
