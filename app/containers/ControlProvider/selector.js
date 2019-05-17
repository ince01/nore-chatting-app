import { createSelector } from 'reselect';

const selectControl = (state) => state.get('controlProvider');

const makeSelectNavTabStatus = () => createSelector(
  selectControl,
  (controlState) => controlState.get('navTabStatus')
);

export {
  selectControl,
  makeSelectNavTabStatus,
};
