import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

instance.interceptors.request.use(
  (request) => {
    if (localStorage.accessToken) {
      request.headers = {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.accessToken
      };
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
