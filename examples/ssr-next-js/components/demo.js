import React from 'react';
import { useAxios, useLazyAxios } from 'use-axios-client';

const WithUseAxios = ({ initial }) => {
  const [timer, setTimer] = React.useState(10 * 1000);

  const [config, setConfig] = React.useState({
    ssrData: initial,
    url: '',
    method: 'GET',
  });

  const { data, error, loading } = useAxios(config);

  React.useEffect(() => {
    let timeoutId;

    if (timer === 0) {
      setConfig(c => ({
        ...c,
        url: 'https://randomuser.me/api/',
      }));
    } else {
      timeoutId = window.setTimeout(() => {
        setTimer(timer - 1000);
      }, 1000);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [timer]);

  return (
    <div>
      <h1>useAxios</h1>
      <p>refreshing in {timer / 1000} seconds</p>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
};

const WithUseLazyAxios = ({ initial }) => {
  const [getData, { data, error, loading }] = useLazyAxios({
    ssrData: initial,
    url: 'https://randomuser.me/api/',
    method: 'GET',
  });

  return (
    <div>
      <h1>useLazyAxios</h1>
      <button onClick={() => getData()}>Get data</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
};

const Demo = ({ initial }) => (
  <>
    <WithUseAxios initial={initial} />
    <WithUseLazyAxios initial={initial} />
  </>
);

export default Demo;
