import React, { useState } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useLazyAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const [mount, setMount] = useState(true);

  return (
    <Container>
      <Heading>useLazyAxios Unmount</Heading>

      {mount ? <Child /> : <TextBlock>&nbsp;</TextBlock>}

      <Button onClick={() => setMount(!mount)}>toggle mount</Button>
    </Container>
  );
};

const Child = () => {
  const [getData, { data, error, loading }] = useLazyAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  return (
    <>
      <TextBlock>
        {loading && 'Loading...'}
        {error && error.message}
        {data && !loading && <div>{data.description}</div>}
      </TextBlock>

      <Button disabled={loading} onClick={() => getData()}>
        get data
      </Button>
    </>
  );
};
