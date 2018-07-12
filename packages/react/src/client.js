import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './Application';

hydrate(
  <BrowserRouter>
    <App store={window.__bootstrapData__} />
  </BrowserRouter>,
  document.getElementById('root'),
);
