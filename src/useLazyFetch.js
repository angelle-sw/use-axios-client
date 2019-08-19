import useBaseFetch from './useBaseFetch';

export default (url, options = {}) => {
  const [getData, { data, error, loading }] = useBaseFetch(url, options);

  return [getData, { data, error, loading }];
};
