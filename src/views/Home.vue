<template>
  <div class="content">
    <Todo todo-description="Hello there!" todo-title="Абоба" />
  </div>
</template>

<script >
import { defineComponent } from 'vue';
import Todo from '@/components/Todo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Todo
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.content {
  padding: 0 64px;
}
</style>
