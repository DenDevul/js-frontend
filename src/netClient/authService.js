import axios from 'axios';

export async function doSignup(user) {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/auth/registration',
      {
        user: user
      }
    );
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}

export async function doLogin(user) {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
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
    const response = await axios.post(
      'http://localhost:3000/api/users/logout',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        }
      }
    );
    localStorage.removeItem('accessToken');
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}
