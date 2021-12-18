<template>
  <div class="card">
    <div class="title">
      <p>{{this.id}}</p>
      <p>{{this.title}}</p>
      <h1 @click="editTodo">{{ todoTitle }}</h1>
      <!-- <textarea type="text" v-model="this.title"></textarea> -->
      <span class="material-icons-outlined"> star_border </span>
      <span class="material-icons-outlined"> clear </span>
    </div>
    <p @click="editTodo">{{ todoDescription }}</p>
    <!-- <textarea type="text" v-model="this.description"></textarea> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import {  } from '@/netClient/todoService';

export default defineComponent({
  name: 'Todo',
  props: {
    todoCreatedAt: String,
    todoDescription: String,
    todoId: String,
    todoIsCompleted: Boolean,
    todoIsFavourite: Boolean,
    todoPriority: Number,
    todoTitle: String,
    todoUpdatedAt: String,
    todoUserId: String
  },
  methods: {
    editTodo() {
      return 1;
    }
  },
  data() {
    return {
      createdAt: this.todoCreatedAt,
      description: this.todoDescription,
      id: this.todoId,
      isCompleted: this.todoIsCompleted,
      isFavourite: this.todoIsFavourite,
      priority: this.todoPriority,
      title: this.todoTitle,
      updatedAt: this.todoUpdatedAt,
      userId: this.todoUserId
    };
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.card {
  width: 200px;
  background: $bg-color;
  color: white;
  border-radius: 25px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  textarea {
    background: $bg-color;
    resize: none;
    color: white;
    border: none;
    outline: none;
  }

  .title {
    display: flex;

    > textarea {
      font-size: 1.5rem;
    }
    > h1 {
      flex-grow: 1;
      cursor: pointer;
    }
    > span {
      flex-grow: 0.1;
      font-size: 2rem;
      user-select: none;
      cursor: pointer;
    }
  }

  > p {
    padding-top: 10px;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>
