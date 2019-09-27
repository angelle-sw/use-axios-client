import React from 'react';
import axios from 'axios';
import { useAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default () => {
  const { data, error, loading } = useAxios<Data>('custom/1', {
    axiosInstance,
  });

  return (
    <>
      {loading && 'Loading...'}
      {error && error.message}
      {data && !loading && (
        <div>
          {data.data.name}
          {': '}
          {data.data.color}
        </div>
      )}
    </>
  );
};
