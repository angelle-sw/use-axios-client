import React, { useState } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import TextBlock from '../TextBlock';
import Input from '../Input';
import Button from '../Button';
import { useLazyAxios } from '../../../src';

export default () => {
  const [name, setName] = useState('');

  const [getData, { data, error, loading }] = useLazyAxios({
    url: 'https://reqres.in/api/users',
    method: 'POST',
  });

  return (
    <Container>
      <Heading>useLazyAxios with POST</Heading>

      <TextBlock>
        {loading && 'Loading...'}
        {error && error.message}
        {data && !loading && <div>POST Successful</div>}
        {!data && !error && !loading && (
          <Input
            id="name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        )}
      </TextBlock>

      <Button disabled={loading} onClick={() => getData({ name })}>
        get data
      </Button>
    </Container>
  );
};
