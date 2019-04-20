import { fromJS, Map } from 'immutable';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  registedInfo: Map(),
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return state
        .set('loading', true)
        .set('registedInfo', Map())
    case REGISTER_SUCCESS:
      return state
        .set('loading', false)
        .set('registedInfo', fromJS(action.data));
    case REGISTER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default registerReducer;
