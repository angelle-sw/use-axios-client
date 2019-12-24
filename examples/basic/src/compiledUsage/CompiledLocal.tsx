import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import { useAxios } from '../../../pkg';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const { data, error, loading } = useAxios<Data>('https://reqres.in/api/things/1');

  return (
    <Container>
      <Heading>Compiled Local</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error}
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
