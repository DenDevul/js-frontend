<template>
  <div class="todos">
    <div class="add-todo">
      <textarea
        v-model="newTodo"
        placeholder="Напишите что-нибудь..."
        minlength="1"
      ></textarea>
      <div @click="createTodo" class="icon">
        <span class="material-icons-outlined"> add </span>
      </div>
    </div>
    <div class="todo-list">
      <todo
        v-for="todo in sortedTodos"
        :key="todo.id"
        :todo-title="todo.title"
        :todo-id="todo.id"
        :todo-is-completed="todo.isCompleted"
        :todo-is-favourite="todo.isFavourite"
        @refresh="fetchTodos"
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
  computed: {
    sortedTodos() {
      const todos = [...this.todos]
      const sorted = todos.sort((a, b) => {
        if (a.isFavourite === b.isFavourite) {
          return b.updatedAt > a.updatedAt;
        }
        return a.isFavourite ? -1 : 1;
      });
      return sorted
    }
  },
  methods: {
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
      box-shadow: 0px 0px 10px black;
    }
    textarea:focus-visible {
      outline: 4px solid $primary-color;
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

.icon {
  background: $bg-color;
  border-radius: 8px;
  box-shadow: 0px 0px 2px black;
  span {
    color: $primary-color;
    font-size: 3rem;
    user-select: none;
    cursor: pointer;
  }
}
.icon:active {
  scale: 0.9;
}
</style>
