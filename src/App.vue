<template>
  <div id="nav">
    <div @click="toHome" class="logo"><p>Todo</p></div>
    <div class="nav-items">
      <router-link v-if="!this.isLogged" class="nav-link" to="login"
        >Войти</router-link
      >
      <router-link v-else @click="logout" class="nav-link" to="login"
        >Выйти</router-link
      >
      <router-link class="nav-link" to="info">Инфо</router-link>
    </div>
  </div>
  <div class="content">
    <router-view @user-logged="logUser"> </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { doLogout } from '@/netClient/authService.js';

export default defineComponent({
  name: 'App',
  methods: {
    logUser() {
      this.isLogged = true;
    },
    toHome() {
      const { accessToken } = localStorage;
      if (accessToken) this.$router.push({ name: 'home' });
      else this.$router.push({ name: 'login' });
    },
    async logout() {
      try {
        await doLogout();
        this.isLogged = false;
        this.$router.push({ name: 'login' });
      } catch (error) {
        alert(error);
      }
    }
  },
  data() {
    return {
      isLogged: false
    };
  }
});
</script>

<style lang="scss">
@import './assets/styles/style.css';
@import './assets/styles/colors.scss';

#nav {
  font-family: 'Indie Flower', cursive;
  padding: 0px 32px;
  height: 56px;
  background: $bg-color;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 10px black;
  z-index: 2;

  .nav-items {
    font-family: 'Ubuntu', sans-serif;
    .nav-link {
      padding: 5px;
      border-radius: 4px;
      background: white;
      color: black;
      text-decoration: none;
      margin-right: 16px;
    }
    .nav-link:hover {
      background: rgb(235, 235, 235);
    }
    .nav-link:active {
      background: rgb(214, 214, 214);
    }
  }

  .logo {
    height: 44px;
    margin-right: 32px;
    background: $primary-color;
    border-radius: 20px;
    padding: 0 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 2rem;
      user-select: none;
    }
  }
}

.content {
  margin-top: 88px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
