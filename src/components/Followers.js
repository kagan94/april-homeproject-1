import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getIsFetching, getFollowersIds, getError, fetchFollowersRequest } from '../ducks/followers';
import { Preloader } from './Preloader'

class Followers extends PureComponent {

  componentDidMount() {
    this.props.fetchFollowersRequest();
  }

  render() {
    const {isFetching, followersIds, error} = this.props;

    if (isFetching) return <Preloader/>;
    if (error) return <p>Ошибка при загрузке: {error}</p>;

    /*TODO: TBD */
    return (
      <div>
        {followersIds}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  followersIds: getFollowersIds(state),
  error: getError(state),
});
const mapDispatchToProps = state => ({
  fetchFollowersRequest,
});
export default connect(mapStateToProps, mapDispatchToProps)(Followers);
