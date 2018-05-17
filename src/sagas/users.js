import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, fetchTokenRequest } from "../ducks/users";
import { call, put, takeLatest } from "redux-saga/effects";
import requestFlow from './request';
import * as api from '../api';

function* fetchUserFlow(action) {
  try {
    let response;

    if (action.type === fetchTokenRequest.toString()) {
      response = yield call(requestFlow, api.getTokenOwner, action.payload);

    } else if (action.type === fetchUserRequest.toString()) {
      response = yield call(requestFlow, api.getUserInformation, action.payload);

    } else {
      throw new Error('Received unexpected action type: ' + action.type.toString());
    }

    yield put(fetchUserSuccess(response.data));

  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* fetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchTokenRequest], fetchUserFlow);
}

export { fetchUserWatch };
