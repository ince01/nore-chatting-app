import { createSelector } from 'reselect';

const selectControl = (state) => state.get('controlProvider');

const makeSelectNavTabStatus = () => createSelector(
  selectControl,
  (controlState) => controlState.get('navTabStatus')
);

const makeSelectPopupAddFrStatus = () => createSelector(
  selectControl,
  (controlState) => controlState.get('isOpenPopupAddFr')
);

export {
  selectControl,
  makeSelectNavTabStatus,
  makeSelectPopupAddFrStatus,
};
