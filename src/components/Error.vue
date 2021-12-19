<template>
  <div class="error">
    <p>{{ this.errorMessage }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    errorMessage: String
  },
  methods: {
    removeAfterTime(el) {
      setTimeout(() => {
        el.remove()
      }, 5000);
    }
  },
  mounted() {
    this.removeAfterTime(this.$el)
  }
});
</script>

<style lang="scss" scoped>
.error {
  top: 70vh;
  position: absolute;
  background: #c0392b;
  border-radius: 16px;
  color: white;
  padding: 15px;
  animation: bot-to-top 250ms ease-out;
}

@keyframes bot-to-top {
  0% {
    transform: translateY(20vh);
    opacity: 0.2;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
