import { useEffect, useRef } from 'react';
import { AxiosRequestConfig } from 'axios';
import isEqual from 'lodash.isequal';
import useBaseAxios, { Props } from './useBaseAxios';

function useAxios<Data>(url: string): Props<Data>;
function useAxios<Data>(config: AxiosRequestConfig): Props<Data>;
function useAxios<Data>(url: string, config: AxiosRequestConfig): Props<Data>;
function useAxios<Data>(param1: string | AxiosRequestConfig, param2: AxiosRequestConfig = {}) {
  const invokeUseBaseAxios =
    typeof param1 === 'string'
      ? () => useBaseAxios<Data>(param1, param2)
      : () => useBaseAxios<Data>(param1);

  const config =
    typeof param1 === 'string'
      ? {
          url: param1,
          ...param2,
        }
      : param1;

  const prevConfig = useRef<AxiosRequestConfig | null>(null);

  const [getData, dataStates] = invokeUseBaseAxios();

  useEffect(() => {
    if (!isEqual(config, prevConfig.current)) {
      getData();
      prevConfig.current = config;
    }
  });

  return dataStates;
}

export default useAxios;
