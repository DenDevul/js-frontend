<template>
  <div ref="todo" class="card">
    <textarea
      @input="onInput"
      @click="startEdit"
      @blur="stopEdit"
      ref="title"
      type="text"
      v-model="this.title"
      readonly
    ></textarea>
    <span
      v-if="this.isFavourite"
      @click="switchFavourite"
      class="material-icons-outlined"
    >
      star
    </span>
    <span v-else @click="switchFavourite" class="material-icons-outlined">
      star_border
    </span>
    <span @click="deleteTodo" class="material-icons-outlined"> clear </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { deleteTodo, updateTodo } from '@/netClient/todoService';

export default defineComponent({
  name: 'Todo',
  props: {
    todoId: Number,
    todoIsCompleted: Boolean,
    todoIsFavourite: Boolean,
    todoTitle: String
  },
  methods: {
    startEdit() {
      this.$refs.title.readOnly = false;
      this.$refs.title.focus();
      this.isEditing = true;
    },
    async stopEdit() {
      this.$refs.title.value = this.$refs.title.value.trim();
      this.onInput();
      this.$refs.title.readOnly = true;
      this.isEditing = false;
      await this.updateTodo()
    },
    onInput() {
      this.$refs.title.style.height = 'auto';
      this.$refs.title.style.height = this.$refs.title.scrollHeight + 'px';
    },
    async switchFavourite() {
      this.isFavourite = !this.isFavourite;
      await this.updateTodo();
    },
    async deleteTodo() {
      try {
        await deleteTodo(this.todoId);
        this.$refs.todo.remove();
      } catch (error) {
        alert(error);
      }
    },
    async updateTodo() {
      try {
        await updateTodo({
          id: this.todoId,
          title: this.title.trim(),
          isCompleted: this.isCompleted,
          isFavourite: this.isFavourite
        });
      } catch (error) {
        alert(error);
      }
    }
  },
  data() {
    return {
      isCompleted: this.todoIsCompleted,
      isFavourite: this.todoIsFavourite,
      title: this.todoTitle,
      isEditing: false
    };
  },
  mounted () {
    this.onInput()
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.card {
  width: 400px;
  background: $bg-color;
  color: white;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;

  textarea {
    flex-basis: 80%;
    font-family: inherit;
    background: $bg-color;
    resize: none;
    color: white;
    border: none;
    outline: none;
    overflow: hidden;
  }

  > span {
    flex-basis: 10%;
    cursor: pointer;
    user-select: none;
  }
}
</style>
