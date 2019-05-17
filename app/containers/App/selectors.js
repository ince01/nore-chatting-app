/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectPopupLoginStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isOpenPopup')
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectPopupLoginStatus
};
