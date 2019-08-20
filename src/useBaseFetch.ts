import { useEffect, useRef, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestState<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

export type BaseFetch<Data> = [() => Promise<void>, RequestState<Data>];

export default <Data>(config: AxiosRequestConfig): BaseFetch<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);
  const { current } = isMounted;

  const getData = async () => {
    try {
      setLoading(true);
      const res = (await axios(config)) as AxiosResponse<Data>;
      if (current) {
        setData(res.data);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      if (current) {
        setError(e);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return [getData, { data, error, loading }];
};
