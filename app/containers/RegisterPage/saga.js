import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REGISTER_REQUEST } from '../RegisterPage/constants';
import { registerSuccess, registerError } from './actions';
import { toastr } from 'react-redux-toastr';
import _ from 'lodash';
import request from 'utils/request';
import axios from 'axios';


export function* handleRegister(action) {
  const requestURL = '/register';
  const params = _.pick(action.data, ['email', 'password', 'fullName', 'gender', 'birthday']);

  const avatar = _.get(action.data, 'avatar');
  if (avatar && typeof avatar !== 'string') {
    const payload = new FormData();
    payload.append('file', avatar);
    const fileUploaded = yield axios.post('http://localhost:5000/upload', payload);
    const avatarUrl = fileUploaded.data.result.publicUrl;
    if (avatarUrl) {
      _.set(params, 'avatarUrl', avatarUrl)
    }
  }

  try {
    const resData = yield call(request, requestURL, params);
    yield put(registerSuccess(resData));
    toastr.success('Register success');
    yield put(push('/'));
  } catch (err) {
    yield put(registerError(err));
    toastr.success(err.message);
  }
}

export default function* login() {
  yield takeLatest(REGISTER_REQUEST, handleRegister)
}
