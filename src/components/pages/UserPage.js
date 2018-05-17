import React, { PureComponent } from 'react'
import { fetchTokenRequest, fetchUserRequest, getData, getError, getIsFetching } from '../../ducks/users'
import { connect } from 'react-redux'
import { Preloader } from '../Preloader'
import { getTokenFromLocalStorage } from '../../localStorage'
import styled from 'styled-components'
import Followers from '../Followers'

const StyledProfileDiv = styled.div`
  text-align: center;
`;

export class UserPage extends PureComponent {

  fetchUserInfo(login) {
    if (login) {
      this.props.fetchUserRequest(login);
    } else {
      const token = getTokenFromLocalStorage();
      this.props.fetchTokenRequest(token);
    }
  }

  componentDidMount() {
    const {match: {params: {login}}} = this.props;
    this.fetchUserInfo(login);
  }

  componentWillReceiveProps(nextProps) {
    const {match: {params: {login: currentLogin}}} = this.props;
    const {match: {params: {login: nextLogin}}} = nextProps;

    if (currentLogin !== nextLogin) {
      this.fetchUserInfo(nextLogin);
    }
  }

  render() {
    const {isFetching, user, error} = this.props;

    if (isFetching) return <Preloader/>;
    if (!user || error) return <p>Пользователь не найден.</p>;

    return (
      <StyledProfileDiv>
        <h2>{user.login}</h2>
        <p>Followers: {user.followers}</p>
        <p>Public repos: {user.public_repos}</p>
        <img src={user.avatar_url} width={250} height={250}/><br/>
        <Followers key={user.id} login={user.login}/>
      </StyledProfileDiv>
    );
  }

  componentDidUpdate() {
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  user: getData(state),
  error: getError(state),
});
const mapDispatchToProps = {fetchUserRequest, fetchTokenRequest};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
