import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import {
  HomepageContainer,
  IssuesContainer,
  NotFoundContainer,
} from './containers';

import {
  Header,
} from './components';

const App = () => (
  <div>
    <Helmet titleTemplate="%s | github-issues.com">
      <meta charSet="utf-8" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/:category" component={IssuesContainer} />
      <Route component={NotFoundContainer} />
    </Switch>
  </div>
);

export { App };
