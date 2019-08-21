import { useEffect, useReducer, useRef } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const source = axios.CancelToken.source();

export interface RequestState<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

type Action<Data> =
  | { type: 'REQUEST_INIT' }
  | { type: 'REQUEST_SUCCESS'; payload: Data }
  | { type: 'REQUEST_FAILED'; payload: Error };

export type BaseAxios<Data> = [() => Promise<void>, RequestState<Data>];

function useBaseAxios<Data>(url: string): BaseAxios<Data>;
function useBaseAxios<Data>(config: AxiosRequestConfig): BaseAxios<Data>;
function useBaseAxios<Data>(
  url: string,
  config: AxiosRequestConfig
): BaseAxios<Data>;

function useBaseAxios<Data>(
  param1: string | AxiosRequestConfig,
  param2: AxiosRequestConfig = {}
) {
  const reducer = (
    state: RequestState<Data>,
    action: Action<Data>
  ): RequestState<Data> => {
    switch (action.type) {
      case 'REQUEST_INIT':
        return {
          ...state,
          loading: true,
        };
      case 'REQUEST_SUCCESS':
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
      case 'REQUEST_FAILED':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        throw new Error('Unknown Error');
    }
  };

  const [{ data, error, loading }, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const isMounted = useRef(true);

  const invokeAxios =
    typeof param1 === 'string'
      ? () =>
          axios(param1, {
            ...param2,
            cancelToken: source.token,
          })
      : () =>
          axios({
            ...param1,
            cancelToken: source.token,
          });

  const getData = async () => {
    dispatch({ type: 'REQUEST_INIT' });
    try {
      const res = (await invokeAxios()) as AxiosResponse<Data>;
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
      source.cancel('Operation canceled by the user.');
      isMounted.current = false;
    };
  }, []);

  return [getData, { data, error, loading }];
}

export default useBaseAxios;
