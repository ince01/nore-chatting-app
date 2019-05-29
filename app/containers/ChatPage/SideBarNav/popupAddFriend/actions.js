import {
  ADD_FRIEND_REQUEST, ADD_FRIEND_SUCCESS, ADD_FRIEND_ERROR,
  CONFIRM_REQUEST, CONFIRM_SUCCESS, CONFIRM_ERROR,
} from './constants';

export function addFriend(data) {
  return {
    type: ADD_FRIEND_REQUEST,
    data
  };
}

export function addFriendSuccess(data) {
  return {
    type: ADD_FRIEND_SUCCESS,
    data
  };
}

export function addFriendError(error) {
  return {
    type: ADD_FRIEND_ERROR,
    error
  };
}

export function confirm(data) {
  return {
    type: CONFIRM_REQUEST,
    data
  };
}

export function confirmSuccess(data) {
  return {
    type: CONFIRM_SUCCESS,
    data
  };
}

export function confirmError(error) {
  return {
    type: CONFIRM_ERROR,
    error
  };
}