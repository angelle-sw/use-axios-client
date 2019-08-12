import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = config => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios(config);
        setData(res.data);
        setLoading(false);
        setError('');
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [config.url]);

  return { data, error, loading };
};

const useLazyFetch = config => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios(config);
      setData(res.data);
      setLoading(false);
      setError('');
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return [getData, { data, error, loading }];
};

export { useFetch, useLazyFetch };
