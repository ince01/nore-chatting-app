import { fromJS, Map } from 'immutable';

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
  GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: Map(),
});

function authReducer(state = initialState, action) {
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
    case GET_CURRENT_USER_REQUEST:
      return state
        .set('loading', true)
        .set('currentUser', Map())
    case GET_CURRENT_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', fromJS(action.data));
    case GET_CURRENT_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default authReducer;
