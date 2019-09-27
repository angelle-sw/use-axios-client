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
  const [first, setFirst] = useState(true);
  const { data, error, loading, refetch } = useAxios<Data>('https://reqres.in/api/things/1');

  if (first) {
    return (
      <Container>
        <Heading>useAxios with Retry</Heading>

        {loading && <TextBlock>Loading</TextBlock>}

        {!loading && (error || data) && (
          <div>
            <TextBlock>Error!</TextBlock>

            <Button
              onClick={() => {
                refetch();
                setFirst(false);
              }}
            >
              Retry
            </Button>
          </div>
        )}
      </Container>
    );
  }

  return (
    <Container>
      <Heading>useAxios with Retry</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error}
        {data && (
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
