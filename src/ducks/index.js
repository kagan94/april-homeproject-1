import { combineReducers } from 'redux';
import auth from './auth';
import followers from './followers';
import users from './users';

export default combineReducers({
  auth,
  followers,
  users,
});
