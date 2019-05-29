import { createSelector } from 'reselect';

const selectData = (state) => state.get('dataProvider');

const makeSelectlistFindPeople = () => createSelector(
  selectData,
  (dataState) => dataState.get('listFindPeople').toJS()
);

const makeSelectLoading = () => createSelector(
  selectData,
  (dataState) => dataState.get('loading')
);

const makeSelectError = () => createSelector(
  selectData,
  (dataState) => dataState.get('error')
);


export {
  selectControl,
  makeSelectLoading,
  makeSelectError,
  makeSelectlistFindPeople,
};
