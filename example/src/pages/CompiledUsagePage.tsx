import React from 'react';
import { Flex } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { CompiledLocal, CompiledNpm } from '../compiledUsage';

const CompiledUsagePage: React.FC<RouteComponentProps> = () => (
  <Flex wrap="wrap">
    <CompiledLocal />
    <CompiledNpm />
  </Flex>
);

export default CompiledUsagePage;
