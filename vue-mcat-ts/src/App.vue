<template>
  <div>
    <div v-if="preload" class="preload">
      <img class="vertical-center" src="~@/assets/preload.gif">
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  preload = true;

  tooglePreload() {
    this.preload = !this.preload;
  }
  
  mounted() {
    setTimeout(() => {
      this.tooglePreload();
    }, 3000);
  }


}
</script>

<style scoped lang="less">
.preload {
  // opacity: 0.5;
  background: #0f1e49;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;

  animation: signup-response 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  img {
    width: 100%;
    height: auto;
  }
}
</style>