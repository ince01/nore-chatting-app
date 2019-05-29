import { fromJS, List } from 'immutable';

import {
  FIND_PEOPLE_REQUEST, FIND_PEOPLE_SUCCESS, FIND_PEOPLE_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  listFindPeople: List(),
});

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FIND_PEOPLE_REQUEST:
      return state
        .set('loading', true)
    case FIND_PEOPLE_SUCCESS:
      return state
        .set('loading', false)
        .set('listFindPeople', fromJS(action.data));
    case FIND_PEOPLE_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default dataReducer;
