import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getIsFetching, getFollowers, getError, fetchFollowersRequest } from '../ducks/followers';
import { Preloader } from './Preloader'
import Follower from './Follower'
import styled from 'styled-components';

const StyledFollowers = styled.div`
  width: 700px
  margin: 0 auto
`;

export class Followers extends PureComponent {

  componentDidMount() {
    const {login} = this.props;
    this.props.fetchFollowersRequest(login);
  }

  renderFollowers(followers) {
    return followers.map(el =>
      <Follower key={el.id} login={el.login} avatar={el.avatar_url}/>
    );
  }

  render() {
    const {isFetching, followers, error} = this.props;

    if (isFetching) return <Preloader/>;
    if (error) return <p>Ошибка при загрузке: {error}</p>;

    return (
      <StyledFollowers>
        {this.renderFollowers(followers)}
      </StyledFollowers>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  followers: getFollowers(state),
  error: getError(state),
});
const mapDispatchToProps = {fetchFollowersRequest};
export default connect(mapStateToProps, mapDispatchToProps)(Followers);
