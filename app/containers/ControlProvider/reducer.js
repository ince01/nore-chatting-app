import { fromJS } from 'immutable';
import { TAB_CONTACT } from 'utils/constants';

import {
  ON_CHANGE_TAB,
  OPEN_POPUP_ADDFR, CLOSE_POPUP_ADDFR,
} from './constants';

const initialState = fromJS({
  navTabStatus: TAB_CONTACT,
  isOpenPopupAddFr: false,
});

function controlReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_TAB:
      return state
        .set('navTabStatus', action.status);
    case OPEN_POPUP_ADDFR:
      return state
        .set('isOpenPopupAddFr', true);
    case CLOSE_POPUP_ADDFR:
      return state
        .set('isOpenPopupAddFr', false);
    default:
      return state;
  }
}

export default controlReducer;
