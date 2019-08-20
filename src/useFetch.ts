import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import useBaseFetch, { RequestState } from './useBaseFetch';

export default <Data>(config: AxiosRequestConfig): RequestState<Data> => {
  const [getData, { data, error, loading }] = useBaseFetch<Data>(config);

  useEffect(() => {
    getData();
  }, [config.url]);

  return { data, error, loading };
};
