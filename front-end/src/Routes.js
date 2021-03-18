import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import Profile from './modules/Profile/Profile';
import Orders from './modules/Orders/Orders';
import Products from './modules/Products/Products';
import AdminOrders from './modules/Admin/Orders/AdminOrders';
import AdminProfile from './modules/Admin/Orders/AdminProfile';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ Products } />
        <Route path="/admin/orders" component={ AdminOrders } />
        <Route path="/admin/profile" component={ AdminProfile } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ Profile } />
        <Route path="/orders" component={ Orders } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
