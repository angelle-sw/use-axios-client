import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import React from 'react';
import Header from './Header';
import Router from './Router';

export default () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Router />
    </ThemeProvider>
  );
};
