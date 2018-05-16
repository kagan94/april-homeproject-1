import { connect } from 'react-redux';
import React, { PureComponent } from 'react'
import { getIsAuthorized } from "../ducks/auth";
import { Redirect } from 'react-router-dom'

class PrivateRoute extends PureComponent {
  render() {
    const {isAuthorized, component: TargetComponent, children} = this.props;

    if (!isAuthorized) {
      return <Redirect to="/login"/>;
    }

    return <TargetComponent {...this.props}>{children}</TargetComponent>
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});
export default connect(mapStateToProps)(PrivateRoute);
