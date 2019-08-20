import { useEffect, useRef, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestState<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

export type BaseFetch<Data> = [() => Promise<void>, RequestState<Data>];

function useBaseFetch<Data>(url: string): BaseFetch<Data>;
function useBaseFetch<Data>(config: AxiosRequestConfig): BaseFetch<Data>;
function useBaseFetch<Data>(
  url: string,
  config: AxiosRequestConfig
): BaseFetch<Data>;
function useBaseFetch<Data>(
  param1: string | AxiosRequestConfig,
  param2?: AxiosRequestConfig
): BaseFetch<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);

  const { CancelToken } = axios;
  const source = CancelToken.source();

  const axiosCall =
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
    try {
      setLoading(true);

      const res = (await axiosCall()) as AxiosResponse<Data>;

      if (isMounted.current) {
        setData(res.data);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      if (isMounted.current) {
        setError(e);
        setLoading(false);
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

export default useBaseFetch;
