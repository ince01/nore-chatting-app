import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REGISTER_REQUEST } from '../RegisterPage/constants';
import { registerSuccess, registerError } from './actions';
import _ from 'lodash';
import request from 'utils/request';

export function* handleRegister(action) {

  const requestURL = 'register';
  const params = _.pick(action.data, ['email', 'password', 'fullName']);

  try {
    const resData = yield call(request, requestURL, params);
    yield put(registerSuccess(resData));
    yield put(push('/'))
  } catch (err) {
    yield put(registerError(err));
  }
}

export default function* login() {
  yield takeLatest(REGISTER_REQUEST, handleRegister)
}
