import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { useLazyAxios } from '../../../src';

interface Data {
  data: {
    name: string;
    color: string;
  };
}

export default () => {
  const [getData, { data, error, loading }] = useLazyAxios<Data>({
    url: 'https://reqres.in/api/things/1',
  });

  return (
    <Container>
      <Heading>useLazyAxios</Heading>

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

      <Button loading={loading} onClick={() => getData()}>
        get data
      </Button>
    </Container>
  );
};
