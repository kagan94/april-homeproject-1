import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, fetchTokenRequest } from "../ducks/users";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from '../api';

function* fetchUserFlow(action) {
  try {
    let response;
    console.log('saga users: fetchUserFlow');

    if (action.type === fetchTokenRequest.toString()) {
      response = yield call(api.getTokenOwner, action.payload);

    } else if (action.type === fetchTokenRequest.toString()) {
      response = yield call(api.getUserInformation, action.payload);

    } else {
      throw new Error('Received unexpected action type: ' + action.type.toString());
    }

    yield put(fetchUserSuccess, response);

  } catch (error) {
    yield put(fetchUserFailure, error);
  }
}

function* fetchUserWatch() {
  console.log('saga users: fetchUserWatch');
  yield takeLatest([fetchUserRequest, fetchTokenRequest], fetchUserFlow);
}

export { fetchUserWatch };
