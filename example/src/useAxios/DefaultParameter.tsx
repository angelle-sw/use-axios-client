import React from 'react';
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

export default () => {
  const { data = { data: { name: 'salmon', color: '#FA8072' } }, error, loading } = useAxios<Data>(
    'https://reqres.in/api/bad/request'
  );

  return (
    <Container>
      <Heading>useAxios with Default Parameters</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && !data && error.message}
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
