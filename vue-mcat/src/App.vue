<template>
  <div id="app">
    <div class="container">
      <header class="text-center">
        <img class="gif img-fluid select-none" src="~@/assets/macricat_animation_OK.gif">
      </header>
      <Banner id="banner"/>
      <ButtonMiau id="buttonMiau"/>
      <ButtonsFooter/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./components/Banner.vue";
import ButtonMiau from "./components/ButtonMiau.vue";
import ButtonsFooter from "./components/ButtonsFooter.vue";

// BOOTSTRAP
// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

@Component({
  components: {
    Banner,
    ButtonMiau,
    ButtonsFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800");
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans";
}
#app {
  background: url("assets/1200_fondo_gif.gif");
  background-repeat: no-repeat;
  background-position: top center;
  height: 750px;
}
header {
  height: 184.65px;
  max-height: 184.65px;
}
#banner {
  height: 154px;
  max-height: 154px;
}
.gif {
  max-width: 480px;
  padding-top: 60px;
}

#buttonMiau {
  height: 309px;
  max-height: 309px;
}

.pointer {
  cursor: pointer;
}
.select-none {
  user-select: none;
}
</style>
