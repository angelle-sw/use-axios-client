import React from 'react';
import axios from 'axios';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
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
    <Container>
      <Heading>useAxios with Custom Instance</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error.message}
        {data && !loading && (
          <div>
            {data.data.name}
            {': '}
            {data.data.color}
          </div>
        )}
      </TextBlock>
    </Container>
  );
};
