import {
  FIND_PEOPLE_REQUEST, FIND_PEOPLE_SUCCESS, FIND_PEOPLE_ERROR,
} from './constants';

export function findPeople(data) {
  return {
    type: FIND_PEOPLE_REQUEST,
    data,
  };
}

export function findPeopleSuccess(data) {
  return {
    type: FIND_PEOPLE_SUCCESS,
    data,
  };
}

export function findPeopleError(error) {
  return {
    type: FIND_PEOPLE_ERROR,
    error
  };
}