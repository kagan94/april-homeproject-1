import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux'

const {
  followers: {
    getDataRequest: fetchFollowersRequest,
    getDataSuccess: fetchFollowersSuccess,
    getDataFailure: fetchFollowersFailure,
  },
} = createActions({
  FOLLOWERS: {
    GET_DATA_REQUEST: null,
    GET_DATA_SUCCESS: null,
    GET_DATA_FAILURE: null,
  },
});

const isFetching = handleActions({
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false,
  },
  false,
);

const data = handleActions({
    [fetchFollowersRequest]: (state, action) => [],
    [fetchFollowersSuccess]: (state, action) => action.payload,
  },
  [],
);

const error = handleActions({
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: () => null,
    [fetchFollowersFailure]: (state, action) => action.payload,
  },
  null,
);

const getIsFetching = state => state.followers.isFetching;
const getFollowers = state => state.followers.data;
const getError = state => state.followers.error;

export default combineReducers({
  isFetching,
  data,
  error,
});

export {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
  getIsFetching,
  getFollowers,
  getError,
};
