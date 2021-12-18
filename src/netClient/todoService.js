import axios from 'axios';

export async function getTodos() {
  return axios
    .get(
      'http://localhost:3000/api/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        }
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

export async function addTodo(todo) {
  axios
    .post(
      'http://localhost:3000/api/todos',
      {todo},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        }
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}
