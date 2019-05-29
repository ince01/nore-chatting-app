import { call, put, takeLatest } from 'redux-saga/effects';
import { FIND_PEOPLE_REQUEST } from './constants';
import {
  findPeopleSuccess, findPeopleError,
} from './actions';
import { toastr } from 'react-redux-toastr';
import request from 'utils/request';
import _ from 'lodash';

export function* handleFindPeople(action) {
  const requestURL = '/user/findPeople';
  const params = _.pick(action.data, ['email']);

  try {
    const data = yield call(request, requestURL, params);
    yield put(findPeopleSuccess(data));
  } catch (err) {
    yield put(findPeopleError(err));
    toastr.error(err.message);
  }
}

export default function* login() {
  yield takeLatest(FIND_PEOPLE_REQUEST, handleFindPeople);
}
