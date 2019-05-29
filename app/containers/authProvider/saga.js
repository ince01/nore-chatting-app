import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, GET_CURRENT_USER_REQUEST } from './constants';
import {
  loginSuccess, loginError,
  getCurrentUserSuccess, getCurrentUserError
} from './actions';
import { toastr } from 'react-redux-toastr';
import request from 'utils/request';
import _ from 'lodash';

export function* handleLogin(action) {
  const requestURL = '/login';
  const params = _.pick(action.data, ['email', 'password']);
  try {
    const userData = yield call(request, requestURL, params);
    yield put(loginSuccess(userData));
    yield put(push('/chat'))
  } catch (err) {
    yield put(loginError(err));
    toastr.error(err.message);
  }
}

export function* handleGetCurrentUser() {
  const requestURL = '/user/me';
  try {
    const userData = yield call(request, requestURL);
    yield put(getCurrentUserSuccess(userData));
  } catch (err) {
    yield put(getCurrentUserError(err));
    toastr.error(err.message);
  }
}

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(GET_CURRENT_USER_REQUEST, handleGetCurrentUser);
}
