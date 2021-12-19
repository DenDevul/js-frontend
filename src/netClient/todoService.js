import axios from 'axios';

export async function getTodos() {
  try {
    const response = await axios.get('http://localhost:3000/api/todos', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.accessToken
      }
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function addTodo(todo) {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/todos',
      { todo },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function deleteTodo(id) {
  try {
    const response = await axios.delete('http://localhost:3000/api/todos/', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.accessToken
      },
      params: {
        id: id
      }
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}

export async function updateTodo(todo) {
  try {
    const response = await axios.patch(
      'http://localhost:3000/api/todos/',
      { todo },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken
        },
        params: {
          id: todo.id
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error.response.data;
  }
}
