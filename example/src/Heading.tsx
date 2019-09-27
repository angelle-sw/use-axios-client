import React from 'react';
import { Text } from '@chakra-ui/core';

export default ({ children }) => (
  <Text
    fontSize="xl"
    fontWeight={700}
    display="block"
    borderBottom="1px solid #ddd"
    marginBottom="20px"
    paddingBottom="20px"
  >
    {children}
  </Text>
);
