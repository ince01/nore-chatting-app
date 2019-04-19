import axios from 'axios';
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
    let token = localStorage.getItem('token') || '';

    if (_.isString(token)) {
      this.axios.defaults.headers.common['Authorization'] = `jwt ${token}`;
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

          const { status, result } = response.data;

          if (response.status && status && result.sessionToken) {
            localStorage.setItem('sessionToken', result.sessionToken);
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