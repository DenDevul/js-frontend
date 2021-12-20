import { instance } from './config';

export async function getTodos() {
  try {
    const response = await instance.get('todos');
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function addTodo(todo) {
  try {
    const response = await instance.post('todos', { todo });
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function deleteTodo(id) {
  try {
    const response = await instance.delete('todos/', {
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
    const response = await instance.patch(
      'todos/',
      { todo },
      {
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
