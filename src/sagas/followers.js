import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from "../ducks/followers";
import { call, put, take } from "redux-saga/effects";
import * as api from '../api';


function* fetchFollowersWatch() {
  yield take(fetchFollowersRequest, fetchFollowersFlow);
}

function* fetchFollowersFlow(action) {
  try {
    const response = yield call(api.getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess, response);

  } catch (error) {
    yield put(fetchFollowersFailure, error);
  }
}

export { fetchFollowersWatch };
