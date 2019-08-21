import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import useBaseAxios from './useBaseAxios';
import { RequestState } from './reducer';

function useAxios<Data>(url: string): RequestState<Data>;
function useAxios<Data>(config: AxiosRequestConfig): RequestState<Data>;
function useAxios<Data>(
  url: string,
  config: AxiosRequestConfig
): RequestState<Data>;
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
