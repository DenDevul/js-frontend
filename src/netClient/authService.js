import { instance } from './config';

export async function doSignup(user) {
  try {
    const response = await instance.post('auth/registration', {
      user: user
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}

export async function doLogin(user) {
  try {
    const response = await instance.post('auth/login', {
      user: user
    });
    const { accessToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}

export async function doLogout() {
  try {
    const response = await instance.post('users/logout');
    localStorage.removeItem('accessToken');
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}
