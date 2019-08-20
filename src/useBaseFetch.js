import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default config => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isMounted = useRef(true);
  const { current } = isMounted;

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios(config);
      if (current) {
        setData(res.data);
        setLoading(false);
        setError('');
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
