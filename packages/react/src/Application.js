import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import {
  HomepageContainer,
} from './containers';

import {
  NotFoundView,
} from './views';

import {
  Header,
} from './components';


// <Route path="/:category" component={IssuesContainer} />

const App = () => (
  <div>
    <Helmet titleTemplate="%s | github-issues.com">
      <meta charSet="utf-8" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route component={NotFoundView} />
    </Switch>
  </div>
);

export { App };
