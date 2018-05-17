import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { authorize, getIsAuthorized } from '../../ducks/auth'
import { Redirect, withRouter } from 'react-router-dom'
import styled from 'styled-components';

const StyledLogin = styled.div`
  input {
    padding: 20px
    width: 400px
    text-align: center
  }
`;

export class Login extends PureComponent {
  state = {
    access_token: '8e05091c87683a7edbd4f65d5c06793554a5e679', // todo: change to empty val ''
  }

  handleChange = (e) => {
    this.setState({access_token: e.target.value});
  }

  handleLogin = (e) => {
    const isEnterPressed = (e.keyCode === 13)

    if (isEnterPressed) {
      const accessToken = this.state.access_token;
      this.props.authorize(accessToken);
    }
  }

  render() {
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      return <Redirect to="/"/>;
    }

    return (
      <StyledLogin>
        Получить токен нужно на своей странице github, перейдите по &nbsp;
        <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">адресу</a> и создайте
        себе токен.
        <p>Запишите куда-нибудь токен, так как после создания доступ к нему будет только один раз.</p>

        <input type="text" placeholder="Access Token" value={ this.state.access_token }
               onChange={ this.handleChange} onKeyDown={ this.handleLogin }/>
        <p>После ввода нажмите <b>Enter</b></p>
      </StyledLogin>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});
const mapDispatchToProps = {authorize};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
