import { fromJS, Map } from 'immutable';

import {
  POPUP_LOGIN_CLOSE, POPUP_LOGIN_OPEN,
} from './constants';

const initialState = fromJS({
  isOpenPopup: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case POPUP_LOGIN_OPEN:
      return state
        .set('isOpenPopup', true)
    case POPUP_LOGIN_CLOSE:
      return state
        .set('isOpenPopup', false)
    default:
      return state;
  }
}

export default appReducer;
