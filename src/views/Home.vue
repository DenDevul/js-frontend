<template>
  <div class="todos">
    <div class="add-todo">
      <textarea
        v-model="this.newTodo"
        cols="30"
        rows="10"
        placeholder="Напишите что-нибудь..."
        minlength="1"
      ></textarea>
      <span @click="createTodo" class="material-icons-outlined"> add_box </span>
    </div>
    <div class="todo-list">
      <todo
        v-for="todo in this.sortTodos(this.todos)"
        :key="todo.id"
        :todoTitle="todo.title"
        :todoId="todo.id"
        :todoIsCompleted="todo.isCompleted"
        :todoIsFavourite="todo.isFavourite"
      >
      </todo>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Todo from '@/components/Todo.vue';
import { addTodo, getTodos } from '@/netClient/todoService';

export default defineComponent({
  name: 'Home',
  components: {
    Todo
  },
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  methods: {
    sortTodos(todos) {
      return todos.slice().sort((a, b) => {
        if (a.isFavourite === b.isFavourite) {
          return b.updatedAt > a.updatedAt;
        }
        return a.isFavourite ? -1 : 1;
      });
    },
    async fetchTodos() {
      try {
        this.todos = await getTodos();
      } catch (error) {
        this.todos = [];
      }
    },
    async createTodo() {
      if (this.newTodo.trim() === '') return;
      try {
        const todo = { title: this.newTodo };
        await addTodo(todo);
        this.newTodo = '';
        await this.fetchTodos();
      } catch (error) {
        console.log({ error });
      }
    }
  },
  beforeMount() {
    this.fetchTodos();
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.todos {
  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 32px;

    textarea {
      border: none;
      background: #212121;
      color: white;
      font-family: inherit;
      resize: none;
      width: 450px;
      height: 150px;
      border-radius: 16px;
      padding: 10px;
    }
    textarea:focus-visible {
      outline: 4px solid $primary-color;
    }

    span {
      font-size: 3rem;
      cursor: pointer;
      color: #212121;
    }
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 64px;
    // align-items: center;
  }
}
</style>
