<template>
  <div class="auth">
    <form class="auth-form">
      <label for="login">Login</label>
      <input
        v-model="login"
        class="form-field"
        type="text"
        name="login"
        id="login"
        placeholder="login"
        minlength="3"
      />
      <label for="email">Email</label>
      <input
        v-model="email"
        class="form-field"
        type="text"
        name="email"
        id="email"
        placeholder="example@mail.com"
      />
      <label for="password">Password</label>
      <input
        v-model="password"
        class="form-field"
        type="password"
        name="password"
        id="password"
        minlength="5"
      />
      <input
        @click.prevent="onSubmit"
        class="form-submit"
        type="button"
        value="Зарегистрироваться"
      />
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { doSignup } from '@/netClient/authService.js';

export default defineComponent({
  data() {
    return {
      email: '',
      login: '',
      password: ''
    };
  },
  methods: {
    async onSubmit() {
      const user = {
        email: this.email.trim(),
        password: this.password.trim(),
        login: this.login.trim()
      };
      try {
        await doSignup(user);
        this.$router.push({name: 'login'});
      } catch (error) {
        alert(error);
      }
    }
  }
});
</script>
