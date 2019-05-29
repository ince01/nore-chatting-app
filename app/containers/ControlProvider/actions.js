import {
  ON_CHANGE_TAB,
  OPEN_POPUP_ADDFR, CLOSE_POPUP_ADDFR,
} from './constants';

export function onChangeTab(status) {
  return {
    type: ON_CHANGE_TAB,
    status,
  };
}

export function openPopupAddFr() {
  return {
    type: OPEN_POPUP_ADDFR,
  };
}

export function closePopupAddFr() {
  return {
    type: CLOSE_POPUP_ADDFR,
  };
}