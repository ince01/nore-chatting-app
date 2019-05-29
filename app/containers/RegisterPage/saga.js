import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REGISTER_REQUEST } from '../RegisterPage/constants';
import { registerSuccess, registerError } from './actions';
import { toastr } from 'react-redux-toastr';
import _ from 'lodash';
import request from 'utils/request';

export function* handleRegister(action) {

  const requestURL = '/register';
  const params = _.pick(action.data, ['email', 'password', 'fullName', 'gender']);

  const avatar = _.get(action.data, 'avatar');
  console.log(avatar)
  // if (avatar && typeof avatar !== 'string') {
  //   const payload = new FormData();
  //   payload.append('type', 'AVATAR');
  //   payload.append('file', avatar);

  //   const uploadAvatar = yield Helper.uploadImage(payload);

  //   const avatarId = _.get(uploadAvatar, 'data.objectId');
  //   const avatarUrl = _.get(uploadAvatar, 'data.original.url');

  //   if (avatarId && avatarUrl) {
  //     _.set(params, 'avatarId', avatarId);
  //     _.set(params, 'avatarUrl', avatarUrl)
  //   }
  // }

  return

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
