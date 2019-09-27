import React from 'react';
import { Link } from '@reach/router';
import { Box, Text } from '@chakra-ui/core';
import Button from './Button';

export default () => (
  <Box margin="20px">
    <Text fontSize="4xl" fontWeight={700} marginBottom="20px">
      <a href="https://github.com/angelle-sw/use-axios-client">use-axios-client</a>
    </Text>

    <Link to="/">
      <Button outline>useAxios</Button>
    </Link>

    <Link to="/use-lazy-axios">
      <Button outline>useLazyAxios</Button>
    </Link>

    <Link to="/compiled-usage">
      <Button outline>Compiled Usage</Button>
    </Link>
  </Box>
);
