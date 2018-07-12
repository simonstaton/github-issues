import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet, App } from '@github-issues/react'; // eslint-disable-line
import view from './view';

export default (req, res) => {
  const message = req.flash();
  const context = {};
  const store = {
    message,
  };
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App store={store} />
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();
  if (context.url) { // eslint-disable-line
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.send(view({
      html, helmet, store,
    }));
  }
};
