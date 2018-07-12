import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundContainer = () => (
  <main>
    <Helmet>
      <title>
        404 Not Found
      </title>
      <meta name="description" content="Github issue finder" />
    </Helmet>
    <h1>
      404 Not Found
    </h1>
  </main>
);

export { NotFoundContainer };
