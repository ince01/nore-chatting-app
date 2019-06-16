import axios from 'axios';
import { toastr } from 'react-redux-toastr'
import _ from 'lodash';

export default class API {
  constructor(_options = {}) {
    if (!this.axios) {
      this.axios = axios.create({
        baseURL: (process.env.REACT_APP_PUBLIC_SERVER_URL || 'http://localhost:5000'),
        responseType: 'json'
      });
      this.axios.defaults.params = {};
      this.axios.defaults.headers.common.Accept = '*/*';
    }
  }

  post(action, params) {
    let sessionToken = localStorage.getItem('sessionToken');

    const publicActions = ['/register', '/login'];

    if (publicActions.indexOf(action) === -1 && _.isNull(sessionToken)) {
      return Promise.resolve(true);
    } else if (action === 'logout') {
      localStorage.setItem('logout', Date.now())
    }

    if (_.isString(sessionToken) && !_.isNull(sessionToken)) {
      this.axios.defaults.headers.common['Authorization'] = `jwt ${sessionToken}`;
    }

    return new Promise((resolve, reject) => {
      this.axios.request(action, {
        method: 'post',
        data: params,
      })
        .then(response => {
          if (!response.data || response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText || 'Invalid request.');
          }

          const { sucess, result, sessionToken } = response.data;
          if (sucess && result && sessionToken) {
            localStorage.setItem('sessionToken', sessionToken);
          }

          const responseData = result || response.data;

          resolve(responseData);
        })
        .catch(err => {
          const errorData = err.response && err.response.data ? err.response.data : err;
          reject(errorData);
        });
    });
  }
};