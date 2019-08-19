import useBaseFetch from './useBaseFetch';

export default config => {
  const [getData, { data, error, loading }] = useBaseFetch(config);

  return [getData, { data, error, loading }];
};
