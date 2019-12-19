import React from 'react';
import { Box } from '@chakra-ui/core';

export default ({ children }) => (
  <Box margin="20px" padding="20px" width="calc(33% - 40px)" height="300px" border="1px solid #ddd">
    {children}
  </Box>
);
