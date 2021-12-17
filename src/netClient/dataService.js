import axios from 'axios';

export async function doSignup(user) {
  axios
    .post('http://localhost:3000/api/auth/registration', { user: user })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log({ error });
      throw error;
    });
}

export async function doLogin(user) {
  // axios
  //   .post('http://localhost:3000/api/auth/login', { user: user })
  //   .then((response) => {
  //     // const { accessToken } = response.data;
  //     // localStorage.setItem('accessToken', accessToken);
  //     // return accessToken;
  //     return response
  //   })
  //   .catch((error) => {
  //     // console.log({ error });
  //     // return {error: error};
  //     throw error
  //   });
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', { user: user })
    return response
  } catch (error) {
    return error
  }
  
}

export async function doLogout() {
  axios
    .post(
      'http://localhost:3000/api/users/logout',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        }
      }
    )
    .then((response) => {
      localStorage.removeItem('accessToken');
      return response.data;
    })
    .catch((error) => {
      console.log({ error });
      throw error;
    });
}
