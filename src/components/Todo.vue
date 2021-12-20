<template>
  <div class="card">
    <textarea
      @input="trimTodo"
      @click="startEdit"
      @blur="stopEdit"
      ref="title"
      type="text"
      v-model="this.title"
      readonly
    ></textarea>
    <span
      v-if="isCompleted"
      @click="toggleComplete"
      class="material-icons-outlined"
    >
      check_box
    </span>
    <span v-else @click="toggleComplete" class="material-icons-outlined">
      check_box_outline_blank
    </span>
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
      this.isCompleted = false
      this.$refs.title.classList.remove('completed')
      this.$refs.title.readOnly = false;
      this.$refs.title.focus();
      this.isEditing = true;
    },
    async stopEdit() {
      this.$refs.title.value = this.$refs.title.value.trim();
      this.trimTodo();
      this.$refs.title.readOnly = true;
      this.isEditing = false;
      await this.updateTodo();
    },
    trimTodo() {
      this.$refs.title.style.height = 'auto';
      this.$refs.title.style.height = this.$refs.title.scrollHeight + 'px';
    },
    async toggleComplete() {
      this.isCompleted = !this.isCompleted;
      this.$refs.title.classList.toggle('completed')
      await this.updateTodo();
    },
    async switchFavourite() {
      this.isFavourite = !this.isFavourite;
      await this.updateTodo();
    },
    async deleteTodo() {
      try {
        await deleteTodo(this.todoId);
        this.$el.remove();
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
  mounted() {
    this.trimTodo();
    if (this.isCompleted) this.$refs.title.classList.toggle('completed');
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.card {
  width: 500px;
  background: $bg-color;
  color: white;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: start;

  textarea {
    flex-basis: 79%;
    font-family: inherit;
    background: $bg-color;
    resize: none;
    color: white;
    border: none;
    outline: none;
    overflow: hidden;
  }

  > span {
    flex-basis: 7%;
    cursor: pointer;
    user-select: none;
  }
}
.completed {
  text-decoration: line-through;
}
</style>
