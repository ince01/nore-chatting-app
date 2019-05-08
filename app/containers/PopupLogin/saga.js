import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginError, popupLoginClose } from '../App/actions';
import _ from 'lodash';
import request from 'utils/request';

export function* handleLogin(action) {
  const requestURL = 'login';
  const params = _.pick(action.data, ['email', 'password']);

  try {
    const userData = yield call(request, requestURL, params);
    yield put(loginSuccess(userData));
    yield put(popupLoginClose())
    yield put(push('/features'))
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}
