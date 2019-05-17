import { fromJS } from 'immutable';
import { TAB_CHAT } from 'utils/constants';

import {
  ON_CHANGE_TAB,
} from './constants';

const initialState = fromJS({
  navTabStatus: TAB_CHAT,
});

function controlReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_TAB:
      return state
        .set('navTabStatus', action.status);
    default:
      return state;
  }
}

export default controlReducer;
