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
  param2: AxiosRequestConfig = {}
) {
  if (typeof param1 === 'string') {
    return useBaseFetch<Data>(param1, param2);
  }

  return useBaseFetch<Data>(param1);
}

export default useLazyFetch;
