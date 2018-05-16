import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import UserPage from './UserPage'

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/users/me" component={UserPage} />
        <PrivateRoute path="/user/:login" component={UserPage} />
        <Redirect to="/users/me"/>
      </Switch>
    );
  }
}

export default AppRouter;
