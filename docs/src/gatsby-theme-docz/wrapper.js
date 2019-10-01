import * as React from 'react';
import { Helmet } from 'react-helmet';
import favicon from './assets/favicon.png';

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>

    {children}
  </React.Fragment>
);
