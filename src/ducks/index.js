import { combineReducers } from 'redux';
import auth from './auth';
import network from './network';
import followers from './followers';
import users from './users';

export default combineReducers({
  network,
  auth,
  followers,
  users,
});
