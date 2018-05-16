import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { authorize } from '../ducks/auth'

class Login extends PureComponent {
  state = {
    accessToken: '123', // todo: change to empty val ''
  }

  handleChange = (e) => {
    this.setState({accessToken: e.target.value});
  }

  handleLogin = (e) => {
    const isEnterPressed = (e.keyCode === 13)

    if (isEnterPressed) {
      console.log('sending action to authorize...');
      const accessToken = this.state.accessToken;
      this.props.authorize(accessToken);
  console.log(123);
      this.props.history.push('/');
    }
  }

  render() {
    console.log('Login component rendered');

    return (
      <div className="login">
        {this.props.isAuthorized ? 'YES' : 'NO'}<br/>
        Получить токен нужно на своей странице github, перейдите по
        <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">адресу</a>
        и создайте себе токен.

        <p>Запишите куда-нибудь токен, так как после создания доступ к нему будет только один раз.</p>

        <input type="text" placeholder="accessToken" value={ this.state.accessToken }
               onChange={ this.handleChange} onKeyDown={ this.handleLogin }/>
        <p>После ввода нажмите <b>Enter</b></p>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  authorize,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
