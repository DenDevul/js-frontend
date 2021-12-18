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
    <li>
      <todo v-for="todo in this.todos" :key="todo.id" :todoTitle="todo.title">
      </todo>
    </li>
    <!-- <todo :todoTitle="'hello'"></todo> -->
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
    async fetchTodos() {
      try {
        this.todos = await getTodos();
      } catch (error) {
        return error
      }
    },
    async createTodo() {
      if (this.newTodo.trim() === '') return;
      try {
        const todo = { title: this.newTodo };
        await addTodo(todo);
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
  padding: 0 64px;

  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 2rem;
      cursor: pointer;
    }
  }

  textarea {
    resize: none;
    width: 400px;
    border-radius: 4px;
    padding: 5px;
  }
  textarea:focus-visible {
    outline: 2px solid green;
  }
}
</style>
