import React, { Component } from 'react';
import { Redirect, Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../components/App';
import Comp1 from '../components/comp1';
import Comp2 from '../components/comp2';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Comp1} />
      <Route path="comp1" component={Comp1} />
      <Route path="comp2" component={Comp2} />
    </Route>
  </Router>
);

export default Routes;