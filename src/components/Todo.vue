<template>
  <div class="card">
    <div class="title">
      <h1 @click="editTodo">{{ todoTitle }}</h1>
      <!-- <textarea type="text" v-model="this.title"></textarea> -->
      <span class="material-icons-outlined"> star_border </span>
      <span class="material-icons-outlined"> clear </span>
    </div>
    <p @click="editTodo">{{ todoDescription }}</p>
    <!-- <textarea type="text" v-model="this.description"></textarea> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todo',
  props: {
    todoTitle: String,
    todoDescription: String
  },
  methods: {
    editTodo() {
      return 1
    }
  },
  data() {
    return {
      title: this.todoTitle,
      description: this.todoDescription
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
