import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/login" />
      </Route>
      <Route path="/admin/orders" />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  </Router>
);

export default Routes;