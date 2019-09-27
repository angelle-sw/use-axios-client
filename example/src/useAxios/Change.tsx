import React, { useState } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [num, setNum] = useState('1');

  const { data, error, loading } = useAxios<Data>({
    url: `https://reqres.in/api/things/${num}`,
  });

  return (
    <Container>
      <Heading>useAxios with Changing Axios Payload</Heading>

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

      <Button onClick={() => setNum('1')}>1</Button>
      <Button onClick={() => setNum('2')}>2</Button>
      <Button onClick={() => setNum('3')}>3</Button>
    </Container>
  );
};
