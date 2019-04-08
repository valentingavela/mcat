<template>
  <div v-on:click="firstEvent()">
    <div v-if="preload" class="preload">
      <div>
        <img class="vertical-center" src="~@/assets/preload.gif">
        <div class="text-center call-to-action">
          <span>Hacé click para comenzar</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
.preload {
  // opacity: 0.5;
  background: #0f1e49;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;

  // animation: signup-response 0.5s 1;
  animation-fill-mode: forwards;
  // animation-delay: 2s;

  img {
    width: 100%;
    height: auto;
  }

  .call-to-action {
    position: absolute;
    margin-top: 13vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    span {
      padding-top: 1vh;
      color: white;
      font-weight: bold;
      letter-spacing: 0.01875rem;
      font-size: 142%;
      line-height: 1.8rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>