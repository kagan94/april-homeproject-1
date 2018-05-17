import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux'

const {
  network: {
    networkError,
    clearNetworkErrors,
  },
} = createActions({
  NETWORK: {
    NETWORK_ERROR: null,
    CLEAR_NETWORK_ERRORS: null,
  },
});

const error = handleActions({
    [networkError]: (state, action) => action.payload,
    [clearNetworkErrors]: () => '',
  },
  '',
);

const message = handleActions({
    [networkError]: (state, action) => action.payload.response.data.message,
    [clearNetworkErrors]: () => '',
  },
  '',
);

const getIsNetworkErrorPresent = state => state.network.error !== '';
const getError = state => state.network.error;
const getMessage = state => state.network.message;

export default combineReducers({
  error,
  message,
});

export {
  networkError,
  clearNetworkErrors,
  getIsNetworkErrorPresent,
  getError,
  getMessage,
};
