import React from 'react';
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

function BaseDefaultParameter() {
  const { data = { data: { name: 'salmon', color: '#FA8072' } }, error, loading } = useAxios<Data>(
    'https://reqres.in/api/bad/request'
  );

  if (data && !loading) {
    return (
      <div>
        {data.data.name}
        {': '}
        {data.data.color}
      </div>
    );
  }

  if (loading) {
    return <>Loading...</>;
  }

  return <>{error && error.message}</>;
}

export default () => {
  return (
    <Container>
      <Heading>useAxios with Default Parameters</Heading>

      <TextBlock>
        <BaseDefaultParameter />
      </TextBlock>
    </Container>
  );
};
