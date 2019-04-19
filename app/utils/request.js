import API from '../core/services';

export default function request(url, params = {}) {
  try {
    const service = new API();

    return service.post(url, params);
  } catch (err) {
    throw (err);
  }
};

