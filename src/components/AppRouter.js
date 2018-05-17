import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
import UserPage from './pages/UserPage'
import { getIsAuthorized, logout } from '../ducks/auth'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { connect } from 'react-redux'
import Header from './Header'
import { getError } from '../ducks/network'

export class AppRouter extends Component {
  render() {
    const {isAuthorized, logout, networkError} = this.props;

    if (networkError) return <p>Ошибка сети: {networkError}</p>;

    return (
      <Fragment>
        <Header isAuthorized={isAuthorized} logout={logout}/>
        <Switch>
          <Route path="/" exact render={props => <HomePage isAuthorized={isAuthorized} {...props} />}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/users/me" component={UserPage}/>
          <PrivateRoute path="/users/:login" component={UserPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  networkError: getError(state),
});
const mapDispatchToProps = {logout};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
