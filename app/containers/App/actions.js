import {
  POPUP_LOGIN_OPEN, POPUP_LOGIN_CLOSE,
} from './constants';

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