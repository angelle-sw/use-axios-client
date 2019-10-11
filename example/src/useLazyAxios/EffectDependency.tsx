import React, { useState, useEffect } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useLazyAxios } from '../../../src';

interface Data {
  description: string;
}

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios<Data>({
    url: 'https://httpstat.us/200?sleep=3000',
  });

  const [shouldGetData, setShouldGetData] = useState(false);

  useEffect(() => {
    if (shouldGetData) {
      getData();
    }
  }, [getData, shouldGetData]);

  return (
    <Container>
      <Heading>useLazyAxios with getData Effect Dependency</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error.message}
        {data && !loading && <div>{data.description}</div>}
      </TextBlock>

      <Button loading={loading} onClick={() => setShouldGetData(true)}>
        get data
      </Button>
    </Container>
  );
};
