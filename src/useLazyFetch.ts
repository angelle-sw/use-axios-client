import { AxiosRequestConfig } from 'axios';
import useBaseFetch, { BaseFetch } from './useBaseFetch';

export default <Data>(config: AxiosRequestConfig): BaseFetch<Data> => {
  const [getData, { data, error, loading }] = useBaseFetch<Data>(config);

  return [getData, { data, error, loading }];
};
