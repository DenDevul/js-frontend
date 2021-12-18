<template>
  <div class="auth">
    <form class="auth-form">
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
        minlength="3"
      />
      <input
        @click.prevent="onSubmit"
        class="form-submit"
        type="button"
        value="Войти"
      />
      <router-link class="form-link" to="signup"
        >Нет аккаунта? Зарегистрироваться</router-link
      >
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { doLogin } from '@/netClient/authService.js';

export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onSubmit() {
      const user = { email: this.email, password: this.password };
      try {
        await doLogin(user);
        this.$router.push('/');
      } catch (error) {
        console.log({error});
      }
    }
  }
});
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.auth {
  padding: 5px;
  height: 300px;
  width: 400px;
  background: $bg-color;
  color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px black;

  .auth-form {
    margin: 0 auto;
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .form-field {
      padding-left: 10px;
      height: 1.5rem;
      background: white;
      border: none;
      border-radius: 4px;
    }
    .form-field:focus-within {
      outline: solid 3px $primary-color;
    }

    .form-submit {
      height: 1.5rem;
      font-family: inherit;
      background: $primary-color;
      border: none;
      border-radius: 4px;
    }
    .form-submit:hover {
      background: hsl(145, 63%, 35%);
    }
    .form-submit:active {
      background: hsl(145, 63%, 28%);
    }

    .form-link {
      color: white;
    }
  }
}
</style>
