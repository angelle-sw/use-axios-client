import React, { useState } from 'react';
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
  const colors = {
    CERULEAN: 1,
    FUCHSIA: 2,
  };
  const [delay, setDelay] = useState(3000);
  const [thing, setThing] = useState(colors.CERULEAN);

  const { data, error, loading } = useAxios<Data>(
    `http://slowwly.robertomurray.co.uk/delay/${delay}/url/https://reqres.in/api/things/${thing}`
  );

  setTimeout(() => {
    setDelay(1000);
    setThing(colors.FUCHSIA);
  });

  return (
    <Container>
      <Heading>useAxios with Race Condition</Heading>

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
