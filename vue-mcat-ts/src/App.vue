<template>
  <div v-on:click="firstEvent()">
    <div v-if="preload">
      <div class="preload overlay-box">
      </div>
    </div>
    <router-view>
      <img
        class="vertical-center"
        src="~@/assets/preload_pre.gif"
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
      >
    </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./services/EventBus";

@Component
export default class App extends Vue {
  preload = true;
  firstTouch = false;

  tooglePreload() {
    this.preload = !this.preload;
  }

  firstEvent() {
    if (!this.firstTouch) {
      this.firstTouch = true;
      this.tooglePreload();
      setTimeout(() => {
        EventBus.$emit("FirstTouch");
      }, 1000);
    }
  }

  mounted() {
    // setTimeout(() => {
    //   this.tooglePreload();
    // }, 3000);
  }
}
</script>

<style scoped lang="less">
.overlay-box {
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
}
.preload {
  background: url("~@/assets/preload.gif");
  background-color: #0f1e49;
  background-repeat: no-repeat;
  background-position: center;
}

@media only screen and (max-width: 500px) {
  .preload {
    background: url("~@/assets/preload_mobile.gif");
    background-color: #0f1e49;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>