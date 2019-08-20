import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import useBaseFetch, { RequestState } from './useBaseFetch';

function useFetch<Data>(url: string): RequestState<Data>;
function useFetch<Data>(config: AxiosRequestConfig): RequestState<Data>;
function useFetch<Data>(
  url: string,
  config: AxiosRequestConfig
): RequestState<Data>;
function useFetch<Data>(
  param1: string | AxiosRequestConfig,
  param2?: AxiosRequestConfig
): RequestState<Data> {
  const [getData, { data, error, loading }] =
    typeof param1 === 'string'
      ? useBaseFetch<Data>(param1, param2 || {})
      : useBaseFetch<Data>(param1);

  const url = typeof param1 === 'string' ? param1 : param1.url;

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
