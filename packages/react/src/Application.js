import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import {
  HomepageContainer,
  OrganisationContainer,
  RepoContainer,
} from './containers';

import {
  NotFoundView,
} from './views';

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
      <Route exact path="/:org" component={OrganisationContainer} />
      <Route exact path="/:org/:name" component={RepoContainer} />
      <Route component={NotFoundView} />
    </Switch>
  </div>
);

export { App };
