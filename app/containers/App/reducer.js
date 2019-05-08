import { fromJS, Map } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  POPUP_LOGIN_CLOSE, POPUP_LOGIN_OPEN,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: Map(),
  isOpenPopup: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('loading', true)
        .set('currentUser', Map())
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', fromJS(action.data));
    case LOGIN_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

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
