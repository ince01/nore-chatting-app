import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
  GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_ERROR,
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

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER_REQUEST,
  };
}

export function getCurrentUserSuccess(data) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    data,
  };
}

export function getCurrentUserError(error) {
  return {
    type: GET_CURRENT_USER_ERROR,
    error,
  };
}

