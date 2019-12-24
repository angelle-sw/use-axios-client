import React, { useState } from 'react';
import Container from '../Container';
import Button from '../Button';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import { useLazyAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [called, setCalled] = useState(false);
  const [getData, { data, error, loading, refetch }] = useLazyAxios<Data>({
    url: 'https://reqres.in/api/things/1',
  });

  if (!called) {
    return (
      <Container>
        <Heading>useLazyAxios with Retry</Heading>

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

        <Button
          disabled={loading}
          onClick={() => {
            getData();
            setCalled(true);
          }}
        >
          get data
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>useLazyAxios with Retry</Heading>

      {loading && <TextBlock>Loading</TextBlock>}

      {!loading && (error || data) && (
        <div>
          <TextBlock>Error!</TextBlock>

          <Button
            onClick={() => {
              refetch();
              setCalled(false);
            }}
          >
            Retry
          </Button>
        </div>
      )}
    </Container>
  );
};
