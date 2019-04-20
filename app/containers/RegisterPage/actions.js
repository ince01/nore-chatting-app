import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR
  } from './constants';
  
  export function register(data) {
    return {
      type: REGISTER_REQUEST,
      data,
    };
  }
  
  export function registerSuccess(data) {
    return {
      type: REGISTER_SUCCESS,
      data,
    };
  }
  
  export function registerError(error) {
    return {
      type: REGISTER_ERROR,
      error,
    };
  }
  