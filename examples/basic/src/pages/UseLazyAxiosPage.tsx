import React from 'react';
import { Flex } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import {
  UseLazyAxiosBasic,
  UseLazyAxiosCancel,
  UseLazyAxiosEffectDependency,
  UseLazyAxiosPostData,
  UseLazyAxiosRetry,
  UseLazyAxiosUnmount,
} from '../useLazyAxios';

const UseLazyAxiosPage: React.FC<RouteComponentProps> = () => (
  <Flex wrap="wrap">
    <UseLazyAxiosBasic />
    <UseLazyAxiosCancel />
    <UseLazyAxiosEffectDependency />
    <UseLazyAxiosPostData />
    <UseLazyAxiosRetry />
    <UseLazyAxiosUnmount />
  </Flex>
);

export default UseLazyAxiosPage;
