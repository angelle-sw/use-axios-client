import React from 'react';
import { Flex } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import CompiledUsage from '../compiledUsage';

const CompiledUsagePage: React.FC<RouteComponentProps> = () => (
  <Flex wrap="wrap">
    <CompiledUsage />
  </Flex>
);

export default CompiledUsagePage;
