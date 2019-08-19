import { useEffect } from 'react';
import useBaseFetch from './useBaseFetch';
import useBaseSuspenseFetch from './useBaseSuspenseFetch';

export default (url, options = {}) => {
  if (options.suspense) {
    return useBaseSuspenseFetch(url);
  }

  const [getData, { data, error, loading }] = useBaseFetch(url, options);

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, loading };
};
