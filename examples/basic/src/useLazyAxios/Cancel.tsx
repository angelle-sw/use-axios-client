import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useLazyAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const [getData, { cancel, data, error, loading }] = useLazyAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  return (
    <Container>
      <Heading>useLazyAxios with Cancel</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error.message}
        {data && !loading && <div>{data.description}</div>}
      </TextBlock>

      <Button loading={loading} onClick={() => getData()}>
        get data
      </Button>

      <Button disabled={!loading} onClick={cancel}>
        cancel request
      </Button>
    </Container>
  );
};
