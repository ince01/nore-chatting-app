import {
  ON_CHANGE_TAB,
} from './constants';

export function onChangeTab(status) {
  return {
    type: ON_CHANGE_TAB,
    status,
  };
}