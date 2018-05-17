import { call, put, take, select} from 'redux-saga/effects';
import { getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokenToLocalStorage } from '../localStorage';
import { authorize, logout, getIsAuthorized } from '../ducks/auth';
import * as api from '../api';

function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized && localStorageToken && localStorageToken !== 'undefined') {
      token = localStorageToken;
      yield put(authorize());
    } else {
      const action = yield take(authorize);
      token = action.payload;
    }

    yield call(api.setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(api.clearTokenApi);
  }
}

export { authFlow };
