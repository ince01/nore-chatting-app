import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

export function login(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
