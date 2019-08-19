import { useEffect } from 'react';
import useBaseFetch from './useBaseFetch';

export default config => {
  const [getData, { data, error, loading }] = useBaseFetch(config);

  useEffect(() => {
    getData();
  }, [config.url]);

  return { data, error, loading };
};
