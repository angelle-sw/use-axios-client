import React from 'react';
import { Router } from '@reach/router';
import UseAxiosPage from './pages/UseAxiosPage';
import UseLazyAxiosPage from './pages/UseLazyAxiosPage';
import CompiledUsagePage from './pages/CompiledUsagePage';

export default () => {
  return (
    <Router primary={false}>
      <UseAxiosPage path="/" />
      <UseLazyAxiosPage path="/use-lazy-axios" />
      <CompiledUsagePage path="/compiled-usage" />
    </Router>
  );
};
