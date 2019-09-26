import { useEffect, useRef } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import useAxiosReducer, { RequestState } from './useAxiosReducer';
import useAxiosCancel from './useAxiosCancel';

interface RequestFunctions {
  cancel: () => void;
  refetch: () => Promise<void>;
}

export type Props<Data> = RequestState<Data> & RequestFunctions;
export type BaseAxios<Data> = [
  (lazyData?: AxiosRequestConfig['data']) => Promise<void>,
  Props<Data>
];

function useBaseAxios<Data>(url: string): BaseAxios<Data>;
function useBaseAxios<Data>(config: AxiosRequestConfig): BaseAxios<Data>;
function useBaseAxios<Data>(url: string, config: AxiosRequestConfig): BaseAxios<Data>;
function useBaseAxios<Data>(param1: string | AxiosRequestConfig, param2: AxiosRequestConfig = {}) {
  const isMounted = useRef(true);
  const [{ data, error, loading }, dispatch] = useAxiosReducer<Data>();
  const { cancel, cancelToken } = useAxiosCancel();

  const invokeAxios =
    typeof param1 === 'string'
      ? (lazyData: AxiosRequestConfig['data']) =>
          axios(param1, { ...param2, data: lazyData || param2.data, cancelToken })
      : (lazyData: AxiosRequestConfig['data']) => {
          return axios({ ...param1, data: lazyData || param1.data, cancelToken });
        };

  const getData = async (lazyData: AxiosRequestConfig['data']) => {
    dispatch({ type: 'REQUEST_INIT' });

    try {
      const res = (await invokeAxios(lazyData)) as AxiosResponse<Data>;

      if (isMounted.current) {
        dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
      }
    } catch (e) {
      if (isMounted.current) {
        dispatch({ type: 'REQUEST_FAILED', payload: e });
      }
    }
  };

  useEffect(() => {
    return () => {
      cancel();
      isMounted.current = false;
    };
  }, []);

  return [getData, { cancel, data, error, loading, refetch: getData }];
}

export default useBaseAxios;
