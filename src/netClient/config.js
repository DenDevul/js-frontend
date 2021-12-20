import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.accessToken
  }
});