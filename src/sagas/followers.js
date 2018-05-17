import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from "../ducks/followers";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from '../api';
import requestFlow from './request';

function* fetchFollowersFlow(action) {
  try {
    const response = yield call(requestFlow, api.getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(response.data));

  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersFlow);
}

export { fetchFollowersWatch };
