import { AxiosRequestConfig } from 'axios';
import useBaseAxios, { BaseAxios } from './useBaseAxios';

function useLazyAxios<Data>(url: string): BaseAxios<Data>;
function useLazyAxios<Data>(config: AxiosRequestConfig): BaseAxios<Data>;
function useLazyAxios<Data>(url: string, config: AxiosRequestConfig): BaseAxios<Data>;
function useLazyAxios<Data>(param1: string | AxiosRequestConfig, param2: AxiosRequestConfig = {}) {
  if (typeof param1 === 'string') {
    return useBaseAxios<Data>(param1, param2);
  }

  return useBaseAxios<Data>(param1);
}

export default useLazyAxios;
