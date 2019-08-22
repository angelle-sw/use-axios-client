import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import useBaseAxios, { Props } from './useBaseAxios';

function useAxios<Data>(url: string): Props<Data>;
function useAxios<Data>(config: AxiosRequestConfig): Props<Data>;
function useAxios<Data>(url: string, config: AxiosRequestConfig): Props<Data>;
function useAxios<Data>(
  param1: string | AxiosRequestConfig,
  param2: AxiosRequestConfig = {}
) {
  const invokeUseBaseAxios =
    typeof param1 === 'string'
      ? () => useBaseAxios<Data>(param1, param2)
      : () => useBaseAxios<Data>(param1);

  const url = typeof param1 === 'string' ? param1 : param1.url;

  const [getData, dataStates] = invokeUseBaseAxios();

  useEffect(() => {
    getData();
  }, [url]);

  return dataStates;
}

export default useAxios;
