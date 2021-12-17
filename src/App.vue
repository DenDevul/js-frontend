<template>
  <div id="nav">
    <div class="navbar">
      <!-- <router-link v-if="this.$route.name === 'login'" class="navbar-item" to="login">Войти</router-link> -->
      <router-link @click="signout" class="navbar-item" to="login">Выйти</router-link>
    </div>
    <div @click="toHome" class="logo"><p>Todo</p></div>
    <div class="navbar-end"></div>
  </div>
  <div class="content">
    <router-view>
    </router-view>
    
  </div>
</template>

<script >
import { defineComponent } from 'vue';
import {doLogout} from '@/netClient/dataService.js'

export default defineComponent({
  name: 'App',
  methods: {
    toHome() {
      this.$router.push('/')
    },
    async logout() {
      await doLogout()
      this.$router.push('login')      
    }
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
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100vw;
  box-shadow: 0px 0px 10px black;
  z-index: 2;
  
  .navbar {
    font-family: 'Ubuntu', sans-serif;
    .navbar-item {
      padding: 5px;
      border-radius: 4px;
      text-decoration: none;
      color: black;
      background: white;
    }
  }

  .logo {
    height: 44px;
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
  width: 100vw;
}
</style>
