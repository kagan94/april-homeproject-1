import React, { PureComponent } from 'react'
import { getIsFetching, getData, getError, fetchUserRequest } from '../ducks/users';
import { connect } from 'react-redux';
import { Preloader } from './Preloader'

class UserPage extends PureComponent {

  componentDidMount() {
    this.props.fetchUserRequest();
  }

  render() {
    const {isFetching, user, error} = this.props;

    if (isFetching) return <Preloader/>;
    if (error) return <p>Ошибка при загрузке: {error}</p>;

    // TODO: Написать компонент UserPage, который содержит верстку аватара пользователя, информацию о пользователе. В основной верстке должен быть:
    // аватар пользователя,
    //   login пользователя,
    //   количество фаловеров пользователя
    return (
      <div>
        UserPage
      </div>
    );
  }

  componentDidUpdate() {}
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  user: getData(state),
  error: getError(state),
});
const mapDispatchToProps = state => ({
  fetchUserRequest,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
