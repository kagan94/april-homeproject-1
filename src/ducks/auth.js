import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux'

const {
  auth: {
    authorize,
    logout,
  },
} = createActions({
  AUTH: {
    AUTHORIZE: null,
    LOGOUT: null,
  },
});

const isAuthorized = handleActions({
    [authorize]: () => true,
    [logout]: () => false,
  },
  false,
);

const getIsAuthorized = state => state.auth.isAuthorized;

export default combineReducers({
  isAuthorized,
});

export {
  authorize,
  logout,
  getIsAuthorized,
};
