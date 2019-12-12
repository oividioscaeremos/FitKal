import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';

// Pages
import Home from './Home/Home';
import Login from './Login/Login';

import { PrivateRoute } from '../components';
import { withLayout } from '../hoc';

const Router = () => {
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);

  return (
    <Switch>
      <Route path="/login" component={Login} exact />

      <PrivateRoute path="/" component={withLayout(Home)} exact isAuthenticated={isAuthenticated} />

      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default withRouter(Router);
