import React from 'react';
import Helmet from 'react-helmet';

export const NotFoundView = () => (
  <main>
    <Helmet>
      <title>
        404 Not Found
      </title>
    </Helmet>
    <h1>Page not found</h1>
  </main>
);
