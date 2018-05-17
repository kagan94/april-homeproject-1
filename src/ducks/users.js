import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux'

const {
  users: {
    getUserRequest: fetchUserRequest,
    getUserSuccess: fetchUserSuccess,
    getUserFailure: fetchUserFailure,
    getTokenInfo: fetchTokenRequest,
  },
} = createActions({
  USERS: {
    GET_USER_REQUEST: null,
    GET_USER_SUCCESS: null,
    GET_USER_FAILURE: null,
    GET_TOKEN_INFO: null,
  },
});

const isFetching = handleActions({
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false,
  },
  false,
);

const data = handleActions({
    [fetchUserSuccess]: (state, action) => action.payload,
  },
  {},
);

const error = handleActions({
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: () => null,
    [fetchUserFailure]: (state, action) => action.payload,
  },
  null,
);

const getIsFetching = state => state.users.isFetching;
const getData = state => state.users.data;
const getError = state => state.users.error;

export default combineReducers({
  isFetching,
  data,
  error,
});

export {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenRequest,
  getIsFetching,
  getData,
  getError,
};
