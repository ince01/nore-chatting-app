import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('authProvider');

const makeSelectCurrentUser = () => createSelector(
  selectAuth,
  (authState) => authState.get('currentUser').toJS()
);

const makeSelectLoading = () => createSelector(
  selectAuth,
  (authState) => authState.get('loading')
);

const makeSelectError = () => createSelector(
  selectAuth,
  (authState) => authState.get('error')
);

export {
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
};
