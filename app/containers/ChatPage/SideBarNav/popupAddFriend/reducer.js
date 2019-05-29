import { fromJS, Map } from 'immutable';

import {
  ADD_FRIEND_REQUEST, ADD_FRIEND_SUCCESS, ADD_FRIEND_ERROR,
  CONFIRM_REQUEST, CONFIRM_SUCCESS, CONFIRM_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  requested: Map(),
  confirmed: Map(),
});

function popupAddFriendReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
    case ADD_FRIEND_SUCCESS:
      return state
        .set('loading', false)
        .set('requested', action.data)
    case ADD_FRIEND_ERROR:
      return state
        .set('error', action.error)
    case CONFIRM_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
    case CONFIRM_SUCCESS:
      return state
        .set('loading', false)
        .set('confirmed', action.data)
    case CONFIRM_ERROR:
      return state
        .set('error', action.error)
    default:
      return state;
  }
}

export default popupAddFriendReducer;
