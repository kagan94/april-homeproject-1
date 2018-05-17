import React, { PureComponent, Fragment } from 'react';
import Link from 'react-router-dom/es/Link';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const StyledHeader = styled.div`
  margin: 20px 0;
`;

class Header extends PureComponent {

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const {isAuthorized} = this.props;

    return (
      <StyledHeader>
        <Link to='/' key='home'>Главная</Link><br/>
        {isAuthorized && (
          <Fragment>
            <Link to='/users/me' key='profile'>Мой профиль</Link><br/>
            <button onClick={this.handleLogout}>Logout</button>
          </Fragment>
        )}
        {!isAuthorized && (
          <Fragment>
            <Link to='/login' key='login'>Вход</Link>
          </Fragment>
        )}
      </StyledHeader>
    );
  }
}

export default Header;
