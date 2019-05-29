import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_FRIEND_REQUEST, CONFIRM_REQUEST } from './constants';
import {
  addFriendSuccess, addFriendError,
  confirmSuccess, confirmError,
} from './actions';
import { toastr } from 'react-redux-toastr';
import request from 'utils/request';
import _ from 'lodash';

export function* handleRequestAddFriend(action) {
  const requestURL = '/user/addFriend';
  const params = { to: action.data };

  try {
    const data = yield call(request, requestURL, params);
    yield put(addFriendSuccess(data));
    toastr.success(data.message || 'Requested');
  } catch (err) {
    yield put(addFriendError(err));
    toastr.error(err.message);
  }
}

export function* handleConfirmAddFriend(action) {
  const requestURL = '/user/acceptFriend';
  const params = { friendRequestId: action.data };

  console.log(params)

  try {
    const data = yield call(request, requestURL, params);
    yield put(confirmSuccess(data));
    toastr.success(data.message || 'New contact added');
  } catch (err) {
    yield put(confirmError(err));
    toastr.error(err.message);
  }
}

export default function* login() {
  yield takeLatest(ADD_FRIEND_REQUEST, handleRequestAddFriend);
  yield takeLatest(CONFIRM_REQUEST, handleConfirmAddFriend);
}
