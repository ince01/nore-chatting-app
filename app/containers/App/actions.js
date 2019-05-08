import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  POPUP_LOGIN_OPEN, POPUP_LOGIN_CLOSE,
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

export function popupLoginOpen() {
  return {
    type: POPUP_LOGIN_OPEN,
  };
}

export function popupLoginClose() {
  return {
    type: POPUP_LOGIN_CLOSE,
  };
}