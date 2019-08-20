import { AxiosRequestConfig } from 'axios';
import useBaseFetch, { BaseFetch } from './useBaseFetch';

function useLazyFetch<Data>(url: string): BaseFetch<Data>;
function useLazyFetch<Data>(config: AxiosRequestConfig): BaseFetch<Data>;
function useLazyFetch<Data>(
  url: string,
  config: AxiosRequestConfig
): BaseFetch<Data>;
function useLazyFetch<Data>(
  param1: string | AxiosRequestConfig,
  param2?: AxiosRequestConfig
): BaseFetch<Data> {
  const [getData, { data, error, loading }] =
    typeof param1 === 'string'
      ? useBaseFetch<Data>(param1, param2 || {})
      : useBaseFetch<Data>(param1);

  return [getData, { data, error, loading }];
}

export default useLazyFetch;
