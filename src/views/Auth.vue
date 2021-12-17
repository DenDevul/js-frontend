<template>
  <div class="auth">
    <login />
  </div>
</template>

<script lang="ts">
import Login from '@/components/Login.vue';
// import Signup from '@/components/Signup.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Login },});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.auth {
  width: 300px;
  height: 240px;
  margin: 0 auto;
  padding: 16px;
  background: $bg-color;
  border-radius: 20px;
  color: white;
  box-shadow: 0px 0px 15px black;
}

</style>
