import { useEffect } from 'react';
import useBaseAxios, { Props, Config } from './useBaseAxios';

function useAxios<Data>(url: string): Props<Data>;
function useAxios<Data>(config: Config<Data>): Props<Data>;
function useAxios<Data>(url: string, config: Config<Data>): Props<Data>;
function useAxios<Data>(param1: string | Config<Data>, param2: Config<Data> = {}) {
  const invokeUseBaseAxios =
    typeof param1 === 'string'
      ? () => useBaseAxios<Data>(param1, param2)
      : () => useBaseAxios<Data>(param1);

  const config =
    typeof param1 === 'string'
      ? {
          ...param2,
          url: param1,
        }
      : param1;

  const [getData, dataStates] = invokeUseBaseAxios();

  useEffect(() => {
    getData();
  }, [JSON.stringify(config)]);

  return dataStates;
}

export default useAxios;
