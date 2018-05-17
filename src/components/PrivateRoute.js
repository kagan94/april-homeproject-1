import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import { getIsAuthorized } from '../ducks/auth'
import { Redirect, Route } from 'react-router-dom'

class PrivateRoute extends PureComponent {
  render() {
    const {isAuthorized, component: TargetComponent, ...otherProps} = this.props;

    // console.log(isAuthorized, 'isAuthorized');
    if (!isAuthorized) {
      return <Redirect to="/login"/>;
    }
    return <Route {...otherProps} render={props => <TargetComponent {...props}/>} />
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});
export default connect(mapStateToProps)(PrivateRoute);
