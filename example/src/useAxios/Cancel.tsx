import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const { cancel, data, error, loading, refetch } = useAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  return (
    <Container>
      <Heading>useAxios with Cancel</Heading>

      {loading && (
        <div>
          <TextBlock>Loading...</TextBlock>

          <Button disabled={!loading} onClick={cancel}>
            cancel request
          </Button>
        </div>
      )}
      {error && (
        <div>
          <TextBlock>{error.message}</TextBlock>
          <Button
            onClick={() => {
              refetch();
            }}
          >
            Retry
          </Button>
        </div>
      )}
      {data && !loading && <div>{data.description}</div>}
    </Container>
  );
};
